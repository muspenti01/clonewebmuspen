<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\CmsApplicationRequest;
use App\Models\CmsCategory;
use App\Models\CmsLocation;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Http\Controllers\Operations\FetchOperation;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;

/**
 * Class CmsApplicationCrudController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class CmsApplicationCrudController extends CrudController
{
    use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\ShowOperation { show as traitShow; }
    use \Backpack\CRUD\app\Http\Controllers\Operations\InlineCreateOperation;
    use FetchOperation;

    /**
     * Configure the CrudPanel object. Apply settings to all operations.
     * 
     * @return void
     */
    public function setup()
    {
        CRUD::setModel(\App\Models\CmsApplication::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/cms-application');
        CRUD::setEntityNameStrings('Application', 'Applications');

        // disable preview button
        // $this->crud->enablePreview();
        // $this->crud->setShowView('vendor.backpack.crud.application_content_manager.show');
        // $this->crud->setCreateView('vendor.backpack.crud.application_content_manager.create');
        // $this->crud->setEditView('application_content_manager.edit');

        CRUD::addButtonFromView('line', 'application_content', 'application_content', 'beginning');
    }

    public function setupShowOperation()
    {
        $this->crud->set('show.setFromDb', false);
    }
    public function show($id)
    {
        $this->crud->addColumns(['name', 'categories', 'locations']);
        $content = $this->traitShow($id);
        $this->crud->addColumn([
            'name' => 'contents',
            'label' => 'Content',
            'type' => 'array_count',
        ]);
        $this->crud->removeColumn('slug');
        
        return $content;
    }

    /**
     * Define what happens when the List operation is loaded.
     * 
     * @see  https://backpackforlaravel.com/docs/crud-operation-list-entries
     * @return void
     */
    protected function setupListOperation()
    {
        $this->crud->addClause('where', 'parent_id', null);

        CRUD::column('#')->type('row_number');
        CRUD::column('name');
        CRUD::column('categories');
        CRUD::column('locations');

        /**
         * Columns can be defined using the fluent syntax or array syntax:
         * - CRUD::column('price')->type('number');
         * - CRUD::addColumn(['name' => 'price', 'type' => 'number']); 
         */
    }

    /**
     * Define what happens when the Create operation is loaded.
     * 
     * @see https://backpackforlaravel.com/docs/crud-operation-create
     * @return void
     */
    protected function setupCreateOperation()
    {
        CRUD::setValidation(CmsApplicationRequest::class);

        CRUD::field('name');

        /**
         * Fields can be defined using the fluent syntax or array syntax:
         * - CRUD::field('price')->type('number');
         * - CRUD::addField(['name' => 'price', 'type' => 'number'])); 
         */
        
        $this->crud->addField([
            'label'             => "Category",
            'placeholder'       => "Select a category", // placeholder for the select2 input
            'type'              => 'select2_multiple',
            'name'              => 'categories', // the method that defines the relationship in your Model

            'entity'            => 'categories', // the method that defines the relationship in your Model
            'model'             => CmsCategory::class, // foreign key model
            'attribute'         => 'name', // foreign key attribute that is shown to user
            'pivot'             => true, // on create&update, do you need to add/delete pivot table entries?
            'options'           => (function ($query) {
                return $query->orderBy('name', 'ASC')->get();
            }),
            'hint'              => 'Select One only',
            'wrapperAttributes' => [
                'class' => 'form-group col-md-6',
            ],
            'attributes'        => [
                'placeholder' => 'Select categories',
            ],
        ]);

        $this->crud->addField([
            'label'             => "Location",
            'placeholder'       => "Select a location",
            'type'              => 'select2_multiple',
            'name'              => 'locations',
            'entity'            => 'locations',
            'model'             => CmsLocation::class,
            'attribute'         => 'name',
            'pivot'             => true,
            'options'           => (function ($query) {
                return $query->orderBy('name', 'ASC')->get();
            }),
            'hint'              => 'Select One only',
            'wrapperAttributes' => [
                'class' => 'form-group col-md-6',
            ],
            'attributes'        => [
                'placeholder' => 'Select Location'
            ],
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
        $this->setupCreateOperation();
    }

    /**
     * Respond to AJAX calls from the select2 with entries from the CmsCategory model.
     *
     * @return JSON
     */
    public function fetchCategory()
    {
        dd('hi');
        
        return $this->fetch(CmsCategory::class);
    }
}
