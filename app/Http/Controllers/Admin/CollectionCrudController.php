<?php

namespace App\Http\Controllers\Admin;

use Alert;
use App\Http\Requests\CollectionRequest;
use App\Models\Collection;
use App\Models\CollectionCategory;
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

/**
 * Class CollectionCrudController
 * @package App\Http\Controllers\Admin
 * @property-read CrudPanel $crud
 */
class CollectionCrudController extends CrudController
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
        CRUD::setModel(Collection::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/collection');
        CRUD::setEntityNameStrings('collection', 'collections');
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
            'label' => "Thumbnail",
            'name' => 'file',
            'type' => 'image',
            'disk'   => 'public',
            'height' => '100px',
            'width'  => '100px',
        ]);

        CRUD::column('title');
        
        $this->crud->addColumn([
            'name' => 'status',
            'label' => 'Status',
            'type' => 'select_from_array',
            'options' => [
                Collection::STATUS_DRAFT => 'Draft (invisible)',
                Collection::STATUS_PUBLISH => 'Published (visible)'
            ],
        ]);

        $this->crud->addColumn([
            'name' => 'available',
            'label' => 'Status Ketersediaan',
            'type' => 'select_from_array',
            'options' => [
                Collection::STATUS_DRAFT => 'Draft (invisible)',
                Collection::STATUS_PUBLISH => 'Published (visible)'
            ],
        ]);

        $this->crud->addColumn([
            'name' => 'user',
            'label' => 'User',
            'type' => 'relationship',
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
        CRUD::setValidation(CollectionRequest::class);
        CRUD::field('title');

        $this->crud->addField([
            'name' => 'file',
            'label' => 'Image',
            'type' => 'image',
            'crop' => true, // set to true to allow cropping, false to disable
            // 'aspect_ratio' => 0.5, // omit or set to 0 to allow any aspect ratio
            'disk' => 'public'
        ]);

        $this->crud->addField([   // Upload
            'name'      => 'photos',
            'label'     => 'Photos',
            'type'      => 'upload_multiple',
            'upload'    => true,
            'disk'      => 'public', // if you store files in the /public folder, please omit this; if you store them in /storage or S3, please specify it;
            // optional:
        ]);
        $this->crud->addField(
            [
                'name' => 'description',
                'type' => 'tinymce',
                'label' => 'Deskripsi'
            ]);

            $this->crud->addField([
                'label' => 'Category',
                'type' => 'relationship',
                'name' => 'collection_category_id',
                'entity' => 'category',
                'attribute' => 'name',
                'ajax' => true,
                'minimum_input_length' => 0
            ]);

        $this->crud->addField([
            'name' => 'available',
            'label' => 'Status Ketersediaan',
            'type' => 'select_from_array',
            'options' => [
                Collection::AVAILABLE => 'Tersedia',
                Collection::UNAVAILABLE => 'Tidak Tersedia'
            ],
        ]);

        $this->crud->addField([
            'name' => 'available_note',
            'label' => 'Keterangan Status Ketersediaan',
            'type' => 'select_from_array',
            'options' => [
                Collection::BORROWED => 'Dipinjam',
                Collection::ONDISPLAY => 'Dipamerkan'
            ],
        ]);

        $this->crud->addField([
            'name' => 'registration_number',
            'type' => 'text',
            'label' => 'No. Registrasi',
        ]);

        $this->crud->addField([
            'name' => 'registration_year',
            'type' => 'text',
            'label' => 'Tahun Registrasi',
        ]);

        $this->crud->addField([
            'name' => 'inventory_number',
            'type' => 'text',
            'label' => 'No. Inventaris',
        ]);

        $this->crud->addField([
            'name' => 'contributor',
            'type' => 'text',
            'label' => 'Kontributor',
        ]);

        $this->crud->addField([
            'name' => 'bahan',
            'type' => 'text'
        ]);

        $this->crud->addField([
            'name' => 'ukuran',
            'type' => 'text'
        ]);

        $this->crud->addField([
            'name' => 'status',
            'label' => 'Status',
            'type' => 'select_from_array',
            'options' => [
                Collection::STATUS_DRAFT => 'Draft (invisible)',
                Collection::STATUS_PUBLISH => 'Published (visible)'
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
        CRUD::addColumn('title');

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

        CRUD::column('category_id');
        
        $this->crud->addColumn([
            'name' => 'available',
            'label' => 'Status Ketersediaan',
            'type' => 'select_from_array',
            'options' => [
                Collection::AVAILABLE => 'Tersedia',
                Collection::UNAVAILABLE => 'Tidak Tersedia'
            ],
        ]);

        $this->crud->addColumn([
            'name' => 'available_note',
            'label' => 'Keterangan Status Ketersediaan',
            'type' => 'select_from_array',
            'options' => [
                Collection::BORROWED => 'Dipinjam',
                Collection::ONDISPLAY => 'Dipamerkan'
            ],
        ]);

        
        $this->crud->addColumn([
            'name' => 'registration_number',
            'type' => 'text',
            'label' => 'No. Registrasi',
        ]);

        $this->crud->addColumn([
            'name' => 'registration_year',
            'type' => 'text',
            'label' => 'Tahun Registrasi',
        ]);

        $this->crud->addColumn([
            'name' => 'inventory_number',
            'type' => 'text',
            'label' => 'No. Inventaris',
        ]);

        $this->crud->addColumn([
            'name' => 'contributor',
            'type' => 'text',
            'label' => 'Kontributor',
        ]);

        $this->crud->addColumn([
            'name' => 'bahan',
            'type' => 'text'
        ]);

        $this->crud->addColumn([
            'name' => 'ukuran',
            'type' => 'text'
        ]);
        $this->crud->addColumn([
            'name' => 'user',
            'label' => 'Author',
            'type' => 'relationship',
        ]);

        $this->crud->addColumn([
            'name' => 'status',
            'label' => 'Status',
            'type' => 'select_from_array',
            'options' => [
                Collection::STATUS_DRAFT => 'Draft (invisible)',
                Collection::STATUS_PUBLISH => 'Published (visible)'
            ],
        ]);
    }

     /**
     * Respond to AJAX calls from the select2 with entries from the Category model.
     *
     * @return JSON
     */
    public function fetchCategory()
    {
        return $this->fetch(CollectionCategory::class);
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
}
