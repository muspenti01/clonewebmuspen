<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\ComplaintRequest;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;

/**
 * Class ComplaintCrudController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class ComplaintCrudController extends CrudController
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
        CRUD::setModel(\App\Models\Complaint::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/complaint');
        CRUD::setEntityNameStrings('complaint', 'complaints');
    }

    /**
     * Define what happens when the List operation is loaded.
     *
     * @see  https://backpackforlaravel.com/docs/crud-operation-list-entries
     * @return void
     */
    protected function setupListOperation()
    {
        CRUD::column('date');
        $this->crud->addColumn([
            'name' => 'body',
            'type' => 'textarea',
            'label' => 'Message'
        ]);
        /**
         * Columns can be defined using the fluent syntax or array syntax:
         * - CRUD::column('price')->type('number');
         * - CRUD::addColumn(['name' => 'price', 'type' => 'number']);
         */
    }

    public function setupShowOperation()
    {
        $this->crud->set('show.setFromDb', true);

        $this->crud->addColumn([
            'name' => 'title',
            'type' => 'textarea',
            'label' => 'Judul'
        ]);

        $this->crud->addColumn([
            'name' => 'body',
            'type' => 'textarea',
            'label' => 'Message'
        ]);
        $this->crud->addColumn([
            'name' => 'file',
            'type' => 'closure',
            'label' => 'Attachment',
            'function' => function ($entry) {
                if (!empty($entry->file)) {
                    return "<a href=" . asset('storage/' . $entry->file) . ">Download</a>";
                }
                return "-";
            }
        ]);
    }

    /**
     * Define what happens when the Create operation is loaded.
     *
     * @see https://backpackforlaravel.com/docs/crud-operation-create
     * @return void
     */
    protected function setupCreateOperation()
    {
        CRUD::setValidation(ComplaintRequest::class);

        CRUD::field('name');
        CRUD::field('email');
        CRUD::field('phone');

        $this->crud->addField([
            'name' => 'content',
            'type' => 'tinymce'
        ]);

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
