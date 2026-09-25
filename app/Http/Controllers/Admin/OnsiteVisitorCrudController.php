<?php

namespace App\Http\Controllers\Admin;

use Alert;
use App\Http\Requests\OnsiteVisitorRequest;
use App\Http\Requests\VisitorRequest;
use App\Models\Visitor;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;

/**
 * Class OnsiteVisitorCrudController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class OnsiteVisitorCrudController extends CrudController
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
        CRUD::setModel(\App\Models\Visitor::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/onsite-visitor');
        CRUD::setEntityNameStrings('data jumlah pengunjung', 'data jumlah pengunjung');
    }

    /**
     * Define what happens when the List operation is loaded.
     * 
     * @see  https://backpackforlaravel.com/docs/crud-operation-list-entries
     * @return void
     */
    protected function setupListOperation()
    {
        

        /**
         * Columns can be defined using the fluent syntax or array syntax:
         * - CRUD::column('price')->type('number');
         * - CRUD::addColumn(['name' => 'price', 'type' => 'number']); 
         */
        // CRUD::addColumn([
        //     'name' => 'id',
        //     'label' => "Id",
        //     'type' => 'closure',
        //     'wrapper' => [
        //         'href' => function ($crud, $column, $entry, $related_key) {
        //             return backpack_url('onsite-visitor/' . $entry->id . '/show');
        //         },
        //     ],
        //     'function' => function($field) {
        //         return '#'. $field->id;
        //     },
        // ]);
        CRUD::addColumn([
            'label' => 'Date',
            'name' => 'date',
            'type' => 'date',
        ]);
        CRUD::addColumn([
            'label' => "Total",
            'name' => 'amount',
        ]);

        $this->crud->addClause('where', 'type', '=', 'onsite');
        $this->crud->orderBy('date', 'desc');

        $this->crud->removeButton('show');
        $this->crud->removeButton('delete');
    }

    /**
     * Define what happens when the Create operation is loaded.
     * 
     * @see https://backpackforlaravel.com/docs/crud-operation-create
     * @return void
     */
    protected function setupCreateOperation()
    {
        CRUD::setValidation(VisitorRequest::class);

        

        /**
         * Fields can be defined using the fluent syntax or array syntax:
         * - CRUD::field('price')->type('number');
         * - CRUD::addField(['name' => 'price', 'type' => 'number'])); 
         */
        CRUD::addField([
            'name' => 'type',
            'type' => 'hidden',
            'value' => 'onsite',
        ]);
        CRUD::addField([
            'name' => 'date',
            'label' => 'Date',
            'type' => 'date',
            'value' => now()->format('Y-m-d'),
        ]);
        CRUD::addField([
            'label' => 'Visitor',
            'name' => 'amount',
            'type' => 'number',
        ]);
    }

    /**
     * Define what happens when the Update operation is loaded.
     * 
     * @see https://backpackforlaravel.com/docs/crud-operation-update
     * @return void
     */
    protected function setupUpdateOperation()
    {
        CRUD::setValidation(VisitorRequest::class);

        CRUD::addField([
            'name' => 'type',
            'type' => 'hidden',
            'value' => 'onsite',
        ]);
        CRUD::addField([
            'name' => 'date',
            'label' => 'Date',
            'type' => 'date',
        ]);
        CRUD::addField([
            'label' => 'Visitor',
            'name' => 'amount',
            'type' => 'number',
        ]);
    }
    
    public function store()
    {
        $this->crud->hasAccessOrFail('create');

        // execute the FormRequest authorization and validation, if one is required
        $request = $this->crud->validateRequest();

        $data = $this->crud->getStrippedSaveRequest();
        
        // insert item in the db
        $item = Visitor::updateOrCreate(
            [
                'date' => $request->date,
                'type' => $request->type,
            ],
            $request->all()
        );
        
        $this->data['entry'] = $this->crud->entry = $item;

        // show a success message
        Alert::success(trans('backpack::crud.insert_success'))->flash();

        // save the redirect choice for next time
        $this->crud->setSaveAction();

        return $this->crud->performSaveAction($item->getKey());
    }
}
