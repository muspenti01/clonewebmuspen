<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\ReportRequest;
use App\Http\Requests\TeamRequest;
use App\Models\Article;
use App\Models\Partner;
use App\Models\Report;
use App\Models\User;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation;
use Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;
use Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
use Backpack\CRUD\app\Http\Controllers\Operations\ShowOperation;
use Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanel;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;
use Illuminate\Support\Str;
use Alert;

/**
 * Class ReportCrudController
 * @package App\Http\Controllers\Admin
 * @property-read CrudPanel $crud
 */
class ReportCrudController extends CrudController
{
    use ListOperation;
    use DeleteOperation;
    use ShowOperation;
    use UpdateOperation;
    use CreateOperation;
    /**
     * Configure the CrudPanel object. Apply settings to all operations.
     *
     * @return void
     */
    public function setup()
    {
        CRUD::setModel(Report::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/report');
        CRUD::setEntityNameStrings('report forum', 'reports forum');
    }

    /**
     * Define what happens when the List operation is loaded.
     *
     * @see  https://backpackforlaravel.com/docs/crud-operation-list-entries
     * @return void
     */
    protected function setupListOperation()
    {
        $this->crud->addColumn([
            'name' => 'article_id',
            'type' => 'relationship',
            'label' => 'Article',
            'entity' => 'article', // the method that defines the relationship in your Model
            'attribute' => 'title', // foreign key attribute that is shown to user
            'model' => Article::class, // foreign key model
            'wrapper'   => [
                // 'element' => 'a', // the element will default to "a" so you can skip it here
                'href' => function ($crud, $column, $entry, $related_key) {
                    return backpack_url('article/'.$related_key.'/show');
                },
                'target' => '_blank',
                'class' => 'font-weight-bolder',
            ],
        ]);


        CRUD::column('status');

        $this->crud->addColumn([
            'name' => 'user_id',
            'type' => 'relationship',
            'label' => 'Report by',
            'entity' => 'user', // the method that defines the relationship in your Model
            'attribute' => 'name', // foreign key attribute that is shown to user
            'model' => User::class, // foreign key model
        ]);

        $this->crud->addColumn([
            'name' => 'reason',
            'type' => 'textarea'
        ]);

        $this->crud->addColumn([
            'name' => 'created_at',
            'type' => 'date'
        ]);


//        if (!backpack_auth()->user()->hasRole('member')){
//            $this->crud->addButtonFromView('line', 'approve-report', 'approve-report', 'beginning');
//        }
    }

    protected function setupCreateOperation()
    {
        $this->crud->addField([
            'name' => 'reason',
            'type' => 'textarea'
        ]);

        $this->crud->addField([
            'name' => 'article_id',
            'type' => 'relationship',
            'label' => 'Article',
            'entity' => 'article', // the method that defines the relationship in your Model
            'attribute' => 'title', // foreign key attribute that is shown to user
            'model' => Article::class, // foreign key model
        ]);

        $this->crud->addField([
            'name' => 'status',
            'label' => 'Status',
            'type' => 'select_from_array',
            'options' => [
                Report::STATUS_WAITING => 'Waiting',
                Report::STATUS_APPROVED => 'Approve',
                Report::STATUS_DECLINE => 'Decline'
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

    protected function setupShowOperation()
    {
        $this->crud->addColumn([
            'name' => 'reason',
            'type' => 'textarea'
        ]);

        $this->crud->addColumn([
            'name' => 'article_id',
            'type' => 'relationship',
            'label' => 'Article',
            'entity' => 'article', // the method that defines the relationship in your Model
            'attribute' => 'title', // foreign key attribute that is shown to user
            'model' => Article::class, // foreign key model
        ]);

        $this->crud->addColumn([
            'name' => 'status',
            'label' => 'Status',
            'type' => 'select_from_array',
            'options' => [
                Report::STATUS_WAITING => 'Waiting',
                Report::STATUS_APPROVED => 'Approve',
                Report::STATUS_DECLINE => 'Decline'
            ],
        ]);

        $this->crud->addColumn([
            'name' => 'user_id',
            'type' => 'relationship',
            'label' => 'Report by',
            'entity' => 'user', // the method that defines the relationship in your Model
            'attribute' => 'name', // foreign key attribute that is shown to user
            'model' => User::class, // foreign key model
        ]);


    }

    public function store()
    {
        $this->crud->hasAccessOrFail('create');

        // execute the FormRequest authorization and validation, if one is required
        $request = $this->crud->validateRequest();

        $data = $this->crud->getStrippedSaveRequest();
        $data['user_id'] = backpack_user()->id;

        // insert item in the db
        $item = $this->crud->create($data);
        $this->data['entry'] = $this->crud->entry = $item;

        // show a success message
        Alert::success(trans('backpack::crud.insert_success'))->flash();

        // save the redirect choice for next time
        $this->crud->setSaveAction();

        return $this->crud->performSaveAction($item->getKey());
    }

    public function approve($id){
        $report = Report::whereid($id)->with('article')->firstOrfail();

        $report->update([
            'status' => Report::STATUS_APPROVED
        ]);

        if(!empty($report->article)){
            $report->article->update(
                ['status' => Article::ARTICLE_DRAFT]
            );
        }

        Alert::success('success approve article')->flash();

        return redirect()->back();
    }
}
