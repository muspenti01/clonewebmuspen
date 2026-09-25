<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\TvLinkRequest;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;

/**
 * Class TvLinkCrudController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class TvLinkCrudController extends CrudController
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
        CRUD::setModel(\App\Models\TvLink::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/tv-link');
        CRUD::setEntityNameStrings('tv link', 'tv links');
    }

    /**
     * Define what happens when the List operation is loaded.
     * 
     * @see  https://backpackforlaravel.com/docs/crud-operation-list-entries
     * @return void
     */
    protected function setupListOperation()
    {
        CRUD::column('name');

        $this->crud->addColumn([
            'name' => 'embed_link',
            'label' => 'Link Embed',
            'type' => 'text',
        ]);

        $this->crud->addColumn(
            [
                'name' => 'is_featured',
                'label' => 'Utama',
                'type' => 'boolean',
                // 'options' => [0 => 'Active', 1 => 'Inactive']
            ]
        );

    }

    /**
     * Define what happens when the Create operation is loaded.
     * 
     * @see https://backpackforlaravel.com/docs/crud-operation-create
     * @return void
     */
    protected function setupCreateOperation()
    {
        CRUD::setValidation(TvLinkRequest::class);
        CRUD::field('name');

        $this->crud->addField(
        [
            'name' => 'description',
            'type' => 'tinymce'
        ]);

        $this->crud->addField([
            'name' => 'embed_link',
            'label' => 'Link Embed',
            'type' => 'text',
            'attributes' => [
                'placeholder' => "Contoh: https://www.youtube.com/embed/sdjaoJOASD"
              ], 
        ]);

        $this->crud->addField(
            [
                'name' => 'is_featured',
                'label' => 'Utama',
                'type' => 'boolean',
                // 'options' => [0 => 'Active', 1 => 'Inactive']
            ]
        );
        

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
