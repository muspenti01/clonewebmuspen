<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\EventRequest;
use App\Models\Collection;
use App\Models\Event;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation;
use Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;
use Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
use Backpack\CRUD\app\Http\Controllers\Operations\ShowOperation;
use Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanel;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;

/**
 * Class EventCrudController
 * @package App\Http\Controllers\Admin
 * @property-read CrudPanel $crud
 */
class EventCrudController extends CrudController
{
    use ListOperation;
    use CreateOperation;
    use UpdateOperation;
    use DeleteOperation;
    use ShowOperation;

    /**
     * Configure the CrudPanel object. Apply settings to all operations.
     *
     * @return void
     */
    public function setup()
    {
        CRUD::setModel(Event::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/event');
        CRUD::setEntityNameStrings('event', 'events');
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
            'name' => 'file',
            'label' => 'Image',
            'type' => 'image',
            'height' => '100px',
            'width' => '100px',
            'disk' => 'public'
        ]);

        $this->crud->addColumn([
            'name' => 'date',
            'label' => 'Tanggal Mulai',
            'type' => 'date',
        ]);

        $this->crud->addColumn([
            'name' => 'end_date',
            'label' => 'Tanggal Selesai',
            'type' => 'date',
        ]);


        $this->crud->addColumn([
            'name' => 'type',
            'label' => 'type',
            'type' => 'select_from_array',
            'options' => [
                Event::TYPE_ART => 'art',
                Event::TYPE_EXHIBITION => 'exhibition',
                Event::TYPE_PERFORMANCE => 'performance'
            ],
        ]);


        $this->crud->addColumn([
            'name' => 'status',
            'label' => 'Status',
            'type' => 'select_from_array',
            'options' => [
                Event::STATUS_DRAFT => 'Draft (invisible)',
                Event::STATUS_PUBLISH => 'Published (visible)'
            ],
        ]);
        $this->crud->addColumn([
            'name' => 'max_visitor',
            'label' => 'Maksimal Pengunjung',
            'type' => 'number',
        ]);
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
        CRUD::setValidation(EventRequest::class);

        CRUD::field('name');
        $this->crud->addField([
            'name' => 'file',
            'label' => 'Image',
            'type' => 'image',
            'disk' => 'public',
            'crop' => true, // set to true to allow cropping, false to disable
            'aspect_ratio' => 1, // omit or set to 0 to allow any aspect ratio
        ]);


        $this->crud->addField(
            [
                'name' => 'description',
                'type' => 'tinymce'
            ]);

        $this->crud->addField([
            'name' => 'status',
            'label' => 'Status',
            'type' => 'select_from_array',
            'options' => [
                Event::STATUS_DRAFT => 'Draft (invisible)',
                Event::STATUS_PUBLISH => 'Published (visible)'
            ],
        ]);

        // CRUD::field('date');
        // CRUD::field('end_date');

        $this->crud->addField([
            'name' => 'date',
            'label' => 'Tanggal Mulai',
            'type' => 'datetime_picker',
            // optional:
            'datetime_picker_options' => [
                'format' => 'DD/MM/YYYY HH:mm',
                'language' => 'id'
            ],
            'allows_null' => false,
        ]);

        $this->crud->addField([
            'name' => 'end_date',
            'label' => 'Tanggal Selesai',
            'type' => 'datetime_picker',
            // optional:
            'datetime_picker_options' => [
                'format' => 'DD/MM/YYYY HH:mm',
                'language' => 'id'
            ],
            'allows_null' => false,
        ]);

        $this->crud->addField([
            'name' => 'max_visitor',
            'label' => 'Maksimal Pengunjung',
            'type' => 'number',
        ]);

        $this->crud->addField([
            'name' => 'type',
            'label' => 'Tipe',
            'type' => 'select_from_array',
            'options' => [
                Event::TYPE_EXHIBITION => 'EXHIBITION',
                Event::TYPE_ART => 'ART',
                Event::TYPE_PERFORMANCE => 'PERFORMANCE'

            ],
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
    protected function setupShowOperation()
    {
        CRUD::addColumn('name');

        $this->crud->addColumn([
            'name' => 'file',
            'label' => 'Image',
            'type' => 'image',
            'height' => '100px',
            'width' => '100px',
            'disk' => 'public'
        ]);

        $this->crud->addColumn([
            'name' => 'description',
            'escaped' => false

        ]);


    }

}
