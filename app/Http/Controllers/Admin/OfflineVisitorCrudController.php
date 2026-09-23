<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\OfflineVisitorRequest;
use App\Models\GuestBook;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;
use Barryvdh\DomPDF\Facade\Pdf;
use Maatwebsite\Excel\Facades\Excel;

/**
 * Class OfflineVisitorCrudController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class OfflineVisitorCrudController extends CrudController
{
    use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\ShowOperation;

    /**
     * Configure the CrudPanel object. Apply settings to all operations.
     * 
     * @return void
     */
    public function setup()
    {
        CRUD::setModel(\App\Models\GuestBook::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/offline-visitor');
        CRUD::setEntityNameStrings('guest book', 'guest books');
        $this->crud->denyAccess('update');
        $this->crud->enableExportButtons();
    }

    protected function setupExcelRoutes($segment, $routeName, $controller)
    {
        \Route::get($segment.'/excel', [
            'as'        => $routeName.'.excel',
            'uses'      => $controller.'@excel',
            'operation' => 'excel',
        ]);
    }

    public function excel()
    {
        $from = json_decode(request()->filter ?? '{"from":null,"to":null}')->from;
        $to = json_decode(request()->filter ?? '{"from":null,"to":null}')->to;
        
        return Excel::download(new \App\Exports\OfflineVisitor($from, $to), 'Guest Book Report - '.date('d-F-Y').'.xlsx');
    }
    
    protected function setupPdfRoutes($segment, $routeName, $controller)
    {        
        \Route::get($segment.'/pdf', [
            'as'        => $routeName.'.pdf',
            'uses'      => $controller.'@pdf',
            'operation' => 'pdf',
        ]);
    }
    public function pdf()
    {
        $filter = json_decode(request()->filter ?? '{"from":null,"to":null}');

        $guest_books = GuestBook::when($filter->from != null, fn($q) => $q->where('created_at', '>=', $filter->from))
                            ->when($filter->to != null, fn($q) => $q->where('created_at', '<=', $filter->to))
                            ->orderBy('created_at', 'desc')
                            ->get();
        $total_member = $guest_books->sum('group_member_total');

        $pdf = Pdf::loadView('export.offline_visitor_pdf', [
            'guest_books' => $guest_books,
            'sum_total_visitor' => $total_member,
            'from' => $filter->from,
            'to' => $filter->to,
        ]);
        // $pdf->setOption('isHtml5ParserEnabled', true);
        $pdf->setBasePath(public_path());

        return $pdf->download('Guest Book Report - '.date('d-F-Y').'.pdf');
    }

    protected function setupExportCustomDefaults()
    {
        // $this->crud->allowAccess('exportCustom');

        $this->crud->operation('list', function () {
            $this->crud->addButtonFromView('top-right', 'exportCustom', 'offline_visitor_export', 'beginning');
        });
    }

    /**
     * Define what happens when the List operation is loaded.
     * 
     * @see  https://backpackforlaravel.com/docs/crud-operation-list-entries
     * @return void
     */
    protected function setupListOperation()
    {
        $this->crud->setListView('vendor.backpack.crud.offline_visitor_and_survey_list');
        $this->crud->removeButtonFromStack('create', 'top');
        CRUD::addColumn([
            'label' => "Timestamp",
            'type' => 'closure',
            'searchLogic' => false,
            'function' => function($field) {
                return $field->created_at?->format('H:i:s d-M-Y') ?? '-';
            },
        ]);
        CRUD::addColumn([
            'name' => 'visitor_type',
            'label' => "Kategori Pengunjung",
            'type' => 'closure',
            'searchLogic' => false,
            'function' => function($field) {
                return $field->visitor_type ?? '-';
            },
        ]);
        CRUD::addColumn([
            'name' => 'school',
            'label' => "Jenjang",
            'type' => 'closure',
            'searchLogic' => false,
            'function' => function($field) {
                return $field->school ?? '-';
            },
        ]);

        CRUD::addColumn([
            'name' => 'name',
            'label' => "Nama",
            'type' => 'closure',
            'searchLogic' => function ($query, $column, $searchTerm) {
                $query->orWhere('name', 'like', '%'.$searchTerm.'%');
            },
            'function' => function($field) {
                return $field->name ?? '-';
            },
        ]);

        CRUD::addColumn([
            'name' => 'origin',
            'label' => "Nama Kelompok/Asal",
            'type' => 'closure',
            'searchLogic' => function ($query, $column, $searchTerm) {
                $query->orWhere('group_name', 'like', '%'.$searchTerm.'%');
                $query->orWhere('origin', 'like', '%'.$searchTerm.'%');
            },
            'function' => function($field) {
                return join(' / ', array_filter([$field->origin ?? null, $field->group_name ?? null])) != "" ? join(' / ', array_filter([$field->origin ?? null, $field->group_name ?? null])) : '-';
            },
        ]);

        CRUD::column('no_whatsapp')->title('No. Telpon')->searchLogic(false);
        CRUD::column('email')->searchLogic(false);

        CRUD::addColumn([
            'name' => 'group_member_total',
            'label' => "Jumlah Pengunjung",
            'type' => 'closure',
            'searchLogic' => false,
            'function' => function($field) {
                return $field->group_member_total ?? 1; //should be default value on db
            },
        ]);

        $this->crud->addButtonFromView('top', 'quick_filter_date', 'offline_visitor_quick_filter_date', 'beginning');
        $this->crud->addFilter([
                'type'  => 'date_range',
                'name'  => 'created_at',
                'label' => 'Filter Tanggal'
            ],
            false,
            function ($value) {
                $dates = json_decode($value);
                $this->crud->addClause('where', 'created_at', '>=', $dates->from);
                $this->crud->addClause('where', 'created_at', '<=', $dates->to . ' 23:59:59');
            }
        );
        $this->crud->orderBy('created_at', 'DESC');
    }

    /**
     * Define what happens when the Create operation is loaded.
     * 
     * @see https://backpackforlaravel.com/docs/crud-operation-create
     * @return void
     */
    protected function setupCreateOperation()
    {
        CRUD::setValidation(OfflineVisitorRequest::class);

        /**
         * Fields can be defined using the fluent syntax or array syntax:
         * - CRUD::field('price')->type('number');
         * - CRUD::addField(['name' => 'price', 'type' => 'number'])); 
         */
    }

    /**
     * Define what happens when the Update operation is loaded.
     * 
     * @see https://backpackforlaravel.com/docs/crud-operation-update
     * @return void
     */
    protected function setupUpdateOperation()
    {
        $this->setupCreateOperation();
        $this->crud->addField([
            'name' => 'visitor_type',
            'label' => 'Visitor Type',
            'type' => 'select_from_array',
            'options'     => [
                GuestBook::VISITOR_TYPE_PELAJAR => 'Pelajar',
                GuestBook::VISITOR_TYPE_UMUM => 'Umum',
                GuestBook::VISITOR_TYPE_TOURIST => 'Tourist'
            ],
            'allows_null' => false,
            'default'     => GuestBook::VISITOR_TYPE_UMUM,

        ]);
    }

    protected function setupShowOperation()
    {
        CRUD::column('name');
        CRUD::addColumn([
            'name' => 'group_name',
            'label' => "Kelompok",
            'type' => 'closure',
            'function' => function($field) {
                return $field->group_name ?? '-';
            },
        ]);
        CRUD::addColumn([
            'name' => 'school',
            'label' => "Jenjang",
            'type' => 'closure',
            'function' => function($field) {
                if ($field->visitor_type == GuestBook::VISITOR_TYPE_PELAJAR) {
                    return '-';
                } else {
                    return $field->school;
                }
            },
        ]);
        CRUD::addColumn([
            'name' => 'group_member_total',
            'label' => "Pengunjung",
            'type' => 'closure',
            'function' => function($field) {
                return $field->group_member_total ?? '1'; //should be default value on db
            },
        ]);
        CRUD::addColumn([
            'name' => 'visitor_type',
            'label' => "Tipe Visitor",
            'type' => 'closure',
            'function' => function($field) {
                if (!$field->visitor_type) {
                    return '-';
                } else {
                    return $field->visitor_type;
                }
            },
        ]);
        CRUD::column('school');
        CRUD::column('visitor_type');
        CRUD::column('no_whatsapp');
        CRUD::column('email');
        CRUD::column('origin');
    }

    protected function setupGetTotalVisitorRoutes($segment, $routeName, $controller)
    {        
        \Route::get($segment.'/get-total-visitor', [
            'as'        => $routeName.'.getTotalVisitor',
            'uses'      => $controller.'@getTotalVisitor',
            'operation' => 'get-total-visitor',
        ]);
    }

    public function getTotalVisitor()
    {
        $filter = json_decode(request()->filter);
        $guest_books = GuestBook::when($filter->from != null, fn($q) => $q->where('created_at', '>=', $filter->from))
                            ->when($filter->to != null, fn($q) => $q->where('created_at', '<=', $filter->to))
                            ->orderBy('created_at', 'desc')
                            ->sum('group_member_total');
        
        return response()->json(['data' => ['total_visitor' => $guest_books]]);
    }

    protected function setupDeleteOperation()
    {
        // You can customize the delete behavior if necessary.
        // For example, add confirmation or logging logic here.
        CRUD::allowAccess('delete');
    }
}
