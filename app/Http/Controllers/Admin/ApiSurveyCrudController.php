<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\SurveyRequest;
use App\Models\Survey;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;
use Barryvdh\DomPDF\Facade\Pdf;
use DB;
use Excel;

/**
 * Class SurveyCrudController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class ApiSurveyCrudController extends CrudController
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
        CRUD::setModel(\App\Models\Survey::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/api-survey');
        CRUD::setEntityNameStrings('Survey data', 'Survey data');
        $this->crud->denyAccess('update');
        $this->crud->enableExportButtons();
        $this->crud->query->orderBy('updated_at', 'DESC');
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
        CRUD::column('guest_book_id')->type('id')->label('Guest ID')->searchLogic(false);
        CRUD::column('name')->label('Nama');
        CRUD::column('phone')->label('Telepon')->searchLogic(false);
        CRUD::column('pameran')->searchLogic(false);
        CRUD::column('pemandu')->searchLogic(false);
        CRUD::column('museum')->searchLogic(false);
        CRUD::column('saran')->searchLogic(false);
        CRUD::column('created_at')->label('Tanggal')->searchLogic(false);
        /**
         * Columns can be defined using the fluent syntax or array syntax:
         * - CRUD::column('price')->type('number');
         * - CRUD::addColumn(['name' => 'price', 'type' => 'number']); 
         */

        $this->crud->addButtonFromView('top', 'quick_filter_date', 'survey_quick_filter_date', 'beginning');
        $this->crud->addFilter([
            'type'  => 'date_range',
            'name'  => 'from_to',
            'label' => 'Filter Tanggal'
          ],
          false,
          function ($value) {
            $dates = json_decode($value);
            $this->crud->addClause('where', 'created_at', '>=', $dates->from);
            $this->crud->addClause('where', 'created_at', '<=', $dates->to . ' 23:59:59');
          });

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
        
        return Excel::download(new \App\Exports\Survey($from, $to), 'Suvey Report - '.date('d-F-Y').'.xlsx');
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

        $surveys = Survey::when($filter->from != null, fn($q) => $q->where('created_at', '>=', $filter->from))
                            ->when($filter->to != null, fn($q) => $q->where('created_at', '<=', $filter->to))
                            ->orderBy('created_at', 'desc')
                            ->selectRaw('@rownum:=@rownum+1 as `No`')
                            ->selectRaw('COALESCE(guest_book_id, "-") as "Guest ID"')
                            ->selectRaw('COALESCE(name, "-") as Nama')
                            ->selectRaw('COALESCE(phone, "-") as Telepon')
                            ->selectRaw('COALESCE(pameran, "-") as Pameran')
                            ->selectRaw('COALESCE(pemandu, "-") as Pemandu')
                            ->selectRaw('COALESCE(museum, "-") as Museum')
                            ->selectRaw('COALESCE(saran, "-") as Saran')
                            ->selectRaw('COALESCE(created_at, "-") as Tanggal')
                            ->addSelect(DB::raw('@rownum:=0'))
                            ->get();

        $pdf = Pdf::loadView('export.survey_pdf', [
            'surveys' => $surveys,
            'from' => $filter->from,
            'to' => $filter->to,
        ]);
        // $pdf->setOption('isHtml5ParserEnabled', true);
        $pdf->setBasePath(public_path());

        return $pdf->download('Suvey Report - '.date('d-F-Y').'.pdf');
    }

    protected function setupExportCustomDefaults()
    {
        // $this->crud->allowAccess('exportCustom');

        $this->crud->operation('list', function () {
            $this->crud->addButtonFromView('top-right', 'exportCustom', 'survey_export', 'beginning');
        });
    }

    /**
     * Define what happens when the Create operation is loaded.
     * 
     * @see https://backpackforlaravel.com/docs/crud-operation-create
     * @return void
     */
    protected function setupCreateOperation()
    {
        CRUD::setValidation(SurveyRequest::class);

        

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
    }
}
