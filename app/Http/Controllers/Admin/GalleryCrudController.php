<?php

namespace App\Http\Controllers\Admin;

use Alert;
use App\Http\Requests\GalleryRequest;
use App\Models\Category;
use App\Models\Gallery;
use App\Models\Tag;
use App\Models\User;
use Backpack\CRUD\app\Http\Controllers\CrudController;

use Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation;
use Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;
use Backpack\CRUD\app\Http\Controllers\Operations\FetchOperation;
use Backpack\CRUD\app\Http\Controllers\Operations\InlineCreateOperation;
use Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
use Backpack\CRUD\app\Http\Controllers\Operations\ShowOperation;
use Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanel;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;
use Illuminate\Http\RedirectResponse;

/**
 * Class GalleryCrudController
 * @package App\Http\Controllers\Admin
 * @property-read CrudPanel $crud
 */
class GalleryCrudController extends CrudController
{
    use ListOperation;
    use CreateOperation;
    use UpdateOperation;
    use DeleteOperation;
    use ShowOperation;
    use InlineCreateOperation;
    use FetchOperation;

    /**
     * Configure the CrudPanel object. Apply settings to all operations.
     *
     * @return void
     */
    public function setup()
    {
        CRUD::setModel(Gallery::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/gallery');
        CRUD::setEntityNameStrings('gallery', 'galleries');
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
            'label' => 'Image',
            'name' => 'file',
            'type' => 'image',
             'disk'   => 'public',
             'height' => '50px',
             'width'  => '50px',
        ]);

        CRUD::column('title');


        $this->crud->addColumn([
            'name' => 'user_id',
            'type' => 'relationship',
            'label' => 'Author',
            'entity' => 'user', // the method that defines the relationship in your Model
            'attribute' => 'name', // foreign key attribute that is shown to user
            'model' => User::class, // foreign key model
        ]);

        CRUD::column('category_id');
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
        CRUD::setValidation(GalleryRequest::class);

        $this->crud->addField([
            'name' => 'title',
            'type' => 'text'
        ]);

        $this->crud->addField([
            'name' => 'embed_link',
            'type' => 'text'
        ]);

        $this->crud->addField([
            'name' => 'description',
            'type' => 'tinymce'
        ]);

        $this->crud->addField([
            'label' => "Image",
            'name' => 'file',
            'type' => 'image',
            'disk' => 'public',
            'crop' => true,
        ]);

        $this->crud->addField([
            'type' => 'relationship',
            'name' => 'category_id',
            'label' => 'Category',
            'placeholder' => "Select Category",
            'inline_create' => ['entity' => 'category'],
            'ajax' => true,
            'minimum_input_length' => 0
        ]);

        $this->crud->addField([
            'type' => 'relationship',
            'name' => 'tags',
            'label' => "Tags",
            'placeholder' => "Select tags",
            'inline_create' => ['entity' => 'tag'],
            'ajax' => true,
            'minimum_input_length' => 0

        ]);


        /**
         * Fields can be defined using the fluent syntax or array syntax:
         * - CRUD::field('price')->type('number');
         * - CRUD::addField(['name' => 'price', 'type' => 'number']));
         */
    }

    protected function setupShowOperation()
    {
        $this->crud->set('show.setFromDb', true);
        $this->crud->addColumn([
            'name' => 'title',
            'type' => 'text'
        ]);
        $this->crud->addColumn([
            'label' => "Image",
            'name' => 'file',
            'type' => 'image',
            'disk'   => 'public',
            'height' => '50px',
            'width'  => '50px',
        ]);

        $this->crud->addColumn([
            'name' => 'user_id',
            'type' => 'relationship',
            'label' => 'Author',
            'entity' => 'user', // the method that defines the relationship in your Model
            'attribute' => 'name', // foreign key attribute that is shown to user
            'model' => User::class, // foreign key model
        ]);

        $this->crud->addColumn([
            'type' => 'relationship',
            'name' => 'category_id',
            'label' => 'Category',
        ]);

        $this->crud->addColumn([
            'type' => 'relationship',
            'name' => 'tags',
            'label' => "Tags",
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
     * Store a newly created resource in the database.
     *
     * @return RedirectResponse
     */
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

    /**
     * Respond to AJAX calls from the select2 with entries from the Category model.
     *
     * @return JSON
     */
    public function fetchCategory()
    {
        return $this->fetch(Category::class);
    }

    /**
     * Respond to AJAX calls from the select2 with entries from the Tag model.
     *
     * @return JSON
     */
    public function fetchTags()
    {
        return $this->fetch(Tag::class);
    }

}
