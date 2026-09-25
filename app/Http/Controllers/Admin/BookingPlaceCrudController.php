<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\BookingRequest;
use App\Models\Booking;
use App\Models\Event;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;

/**
 * Class BookingCrudController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class BookingPlaceCrudController extends CrudController
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
        CRUD::setModel(\App\Models\Booking::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/booking-place');
        CRUD::setEntityNameStrings('booking place', 'booking place');

    }

    /**
     * Define what happens when the List operation is loaded.
     *
     * @see  https://backpackforlaravel.com/docs/crud-operation-list-entries
     * @return void
     */
    protected function setupListOperation()
    {
        $this->crud->addClause('whereDoesntHave','event');

        CRUD::column('name');
        CRUD::column('email');
        CRUD::column('place');
        CRUD::column('category');
        CRUD::column('visitor');
        $this->crud->addColumn([
            'name' => 'date',
            'label' => 'Booked at'
        ]);

        CRUD::addClause('where', 'approval_status', [Booking::APPROVAL_APPROVE]);
    }

    /**
     * Define what happens when the Create operation is loaded.
     *
     * @see https://backpackforlaravel.com/docs/crud-operation-create
     * @return void
     */
    protected function setupCreateOperation()
    {
        CRUD::setValidation(BookingRequest::class);

        CRUD::field('name');
        CRUD::field('email');
        CRUD::field('place');
        CRUD::field('event_id');
        CRUD::field('visitor');
        CRUD::field('phone');

        $this->crud->addField([
            'name' => 'category',
            'label' => 'Category',
            'type' => 'select_from_array',
            'options' => [
                Booking::CATEGORY_OFFLINE => 'offline',
                Booking::CATEGORY_ONLINE => 'online'
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
        $this->crud->set('show.setFromDb', true);
        $this->crud->addColumn([
            'name' => 'name',
            'label' => 'Name'
        ]);

        $this->crud->addColumn([
        'name' => 'email',
        'label' => 'Email'
        ]);

        $this->crud->addColumn([
            'name' => 'created_at',
            'label' => 'Dibuat Tanggal'
        ]);

        $this->crud->addColumn([
            'name' => 'date',
            'label' => 'Booked at'
        ]);


    }

}
