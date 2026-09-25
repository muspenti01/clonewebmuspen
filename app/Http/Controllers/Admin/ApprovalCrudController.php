<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\ApprovalRequest;
use App\Models\Approval;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;

/**
 * Class ApprovalCrudController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class ApprovalCrudController extends CrudController
{
    use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation { update as traitUpdate; }
    use \App\Http\Controllers\Admin\Operations\ApproveOperation;
    use \App\Http\Controllers\Admin\Operations\RejectOperation;

    /**
     * Configure the CrudPanel object. Apply settings to all operations.
     * 
     * @return void
     */
    public function setup()
    {
        CRUD::setModel(\App\Models\Approval::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/approval');
        CRUD::setEntityNameStrings('approval', 'approvals');
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
        CRUD::addColumn([
            'name' => 'id',
            'label' => "Id",
            'type' => 'closure',
            'wrapper' => [
                'href' => function ($crud, $column, $entry, $related_key) {
                    return backpack_url('article/' . $entry->id . '/show');
                },
            ],
            'function' => function($field) {
                return '#'. $field->id;
            },
        ]);
        CRUD::addColumn([
            'label' => "Name",
            'type' => "select",
            'name' => 'user_id',
            'entity' => 'user',
            'attribute' => 'name',
        ]);
        CRUD::addColumn([
            'name' => 'slug',
            'label' => "Article",
        ]);
        CRUD::addColumn([
            'label' => "Category", // Table column heading
            'type' => "select",
            'name' => 'category_id', // the column that contains the ID of that connected entity;
            'entity' => 'category', // the method that defines the relationship in your Model
            'attribute' => 'name', // foreign key attribute that is shown to user
        ]);

        // CRUD::setColumnDetails('DistrictID', ['attribute' => 'name']);

        CRUD::addClause('where', 'approval_status', [Approval::APPROVAL_REQUEST]);
        CRUD::removeButton('update');
    }

    /**
     * Define what happens when the Create operation is loaded.
     * 
     * @see https://backpackforlaravel.com/docs/crud-operation-create
     * @return void
     */
    protected function setupCreateOperation()
    {
        CRUD::setValidation(ApprovalRequest::class);

        

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
        CRUD::setValidation(ApprovalRequest::class);

        CRUD::addFields([
            [
                'name' => 'approval_status',
                'type' => 'hidden',
                'value' => \App\Models\Approval::APPROVAL_REJECT,
            ],
            [
                'label' => 'Reason',
                'name' => 'approval_reject_reason',
                'value' => '',
            ]
        ]);
        // CRUD::field('approval_reject_reason')->label('Reason')->value('');
    }
}
