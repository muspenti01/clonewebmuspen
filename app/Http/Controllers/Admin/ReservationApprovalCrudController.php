<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\BookingRequest;
use App\Models\Booking;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;

/**
 * Class ReservationApprovalCrudController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class ReservationApprovalCrudController extends CrudController
{
    use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
    // use \Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\BulkDeleteOperation;
    // use \Backpack\CRUD\app\Http\Controllers\Operations\ShowOperation;
    use \App\Http\Controllers\Admin\Operations\ApproveOperation;
    use \App\Http\Controllers\Admin\Operations\RejectV2Operation;

    /**
     * Configure the CrudPanel object. Apply settings to all operations.
     * 
     * @return void
     */
    public function setup()
    {
        CRUD::setModel(\App\Models\Booking::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/reservation-approval');
        CRUD::setEntityNameStrings('reservation approval', 'reservation approvals');
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
        CRUD::column('name');
        CRUD::column('email');
        CRUD::addColumn([
            'name' => 'phone',
            'label' => 'Phone'
        ]);
        CRUD::column('place');
        CRUD::column('category');
        CRUD::column('visitor');
        $this->crud->addColumn([
            'name' => 'date',
            'label' => 'Booked at'
        ]);
        $this->crud->addColumn([
            'name' => 'approval_status',
            'label' => 'Status',
            'type' => 'closure',
            'function' => function ($entry) {
                $approval_status = '';
                if ( $entry->approval_status == Booking::APPROVAL_DEFAULT ) {
                     $approval_status = '<span class="badge badge-primary">Waiting</span>';
                } elseif ( $entry->approval_status == Booking::APPROVAL_REQUEST ) {
                     $approval_status = '<span class="badge badge-primary">Waiting</span>';
                } elseif ( $entry->approval_status == Booking::APPROVAL_REJECT ) {
                     $approval_status = '<span class="badge badge-danger">Rejected</span>';
                     if (!empty($entry->approval_reject_reason)) {
                        $approval_status .= '<br/>'.$entry->approval_reject_reason;
                     }
                } elseif ( $entry->approval_status == Booking::APPROVAL_APPROVE ) {
                     $approval_status = '<span class="badge badge-success">Approved</span>';
                }

                return $approval_status;
            },

        ]);


        $this->crud->addClause('where', 'approval_status', '=', Booking::APPROVAL_DEFAULT);
        $this->crud->orderBy('created_at', 'desc');

        // $this->crud->removeButton('update');
        $this->crud->addButton('line', 'update', 'view', 'crud::buttons.reschedule');
        $this->crud->addButton('line', 'reject', 'view', 'crud::buttons.rejectv2');
    }

    protected function setupDeleteOperation()
    {
        CRUD::allowAccess('delete');
    }

    public function bulkDelete()
    {
        $this->crud->hasAccessOrFail('delete');

        $entries = request()->input('entries', []);
        $ids = array_map('intval', $entries);
        
        // Use direct delete to bypass model events and improve performance
        $count = \App\Models\Booking::whereIn('id', $ids)->delete();

        // Return array of "true" for each deleted item to satisfy Backpack JS
        return array_fill(0, $count, true);
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
        // $this->setupCreateOperation();
        CRUD::addField([
            'name' => 'name',
            'attributes' => [
                'readonly'=>'readonly',
            ],
        ]);
        CRUD::addField([
            'name' => 'email',
            'attributes' => [
                'readonly'=>'readonly',
            ],
        ]);
        CRUD::addField([
            'name' => 'place',
            'attributes' => [
                'readonly'=>'readonly',
            ],
        ]);
        CRUD::addField([
            'name' => 'category',
            'attributes' => [
                'readonly'=>'readonly',
            ],
        ]);
        CRUD::addField([
            'name' => 'visitor',
            'attributes' => [
                'readonly'=>'readonly',
            ],
        ]);
        CRUD::addField([
            'name' => 'date',
            'label' => 'Booked at'
        ]);
    }

    protected function approve() {
        $request = $this->crud->validateRequest();
        $id = $request->id;

        $this->crud->query->whereId($id)->first()->update([
            'approval_status' => Booking::APPROVAL_APPROVE
        ]);
        \Alert::add('success', 'Approved')->flash();
        
        return redirect(backpack_url('reservation-approval'));
    }

    protected function rejectv2() {
        $request = $this->crud->validateRequest();
        $id = $request->id;

        $this->crud->query->whereId($id)->first()->update([
            'approval_status' => Booking::APPROVAL_REJECT
        ]);
        \Alert::add('success', 'Rejected')->flash();
        
        return redirect(backpack_url('reservation-approval'));
    }
}
