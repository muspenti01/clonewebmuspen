<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\CmsAppContentRequest;
use App\Models\CmsAppContent;
use App\Models\CmsApplication;
use App\Models\CmsTag;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;

/**
 * Class CmsAppContentCrudController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class CmsAppContentCrudController extends CrudController
{
    use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\ShowOperation { show as traitShow; }

    /**
     * Configure the CrudPanel object. Apply settings to all operations.
     * 
     * @return void
     */
    public function setup()
    {
        CRUD::setModel(\App\Models\CmsAppContent::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/cms-application/'.$this->crud->getRequest()->segment(3).'/content');
        CRUD::setEntityNameStrings('Application Content', 'Application Contents');
    }

    public function setupShowOperation()
    {
        $this->crud->set('show.setFromDb', false);
    }
    public function show($id)
    {
        $this->crud->addColumns([
            'title',
            'tags',
        ]);
        $this->crud->addcolumn([
            'name'   => 'narration_in_english',
            'limit'  => 120,
            'escaped' => false,

        ]);
        $this->crud->addcolumn([
            'name'   => 'narration_in_indonesia',
            'limit'  => 120,
            'escaped' => false,

        ]);
        $content = $this->traitShow($id);
        $this->crud->addColumn([
            'name'     => 'detail_in_english',
            'type'     => 'closure',
            'function' => function($entry) {
                $text = '-';
                $data = json_decode($entry->detail_in_english ?? '') ?? [];
                if ($entry->detail_in_english != "[{}]" && !empty($data)) {
                    $text = '<table class="table table-striped"><tr><th>Property</th><th>Value</th></tr>';
                    foreach ($data as $row) {
                        $text .= '<tr><td>'.$row->property.'</td><td>'.$row->value.'</td></tr>';
                    }
                    $text .= '</table>';
                }

                return $text;
            }
        ]);
        $this->crud->addColumn([
            'name'     => 'detail_in_indonesia',
            'type'     => 'closure',
            'function' => function($entry) {
                $text = '-';
                $data = json_decode($entry->detail_in_indonesia ?? '') ?? [];
                if ($entry->detail_in_indonesia != "[{}]" && !empty($data)) {
                    $text = '<table class="table table-striped"><tr><th>Property</th><th>Value</th></tr>';
                    foreach ($data as $row) {
                        $text .= '<tr><td>'.$row->property.'</td><td>'.$row->value.'</td></tr>';
                    }
                    $text .= '</table>';
                }

                return $text;
            }
        ]);
        $this->crud->addColumn([
            'name' => 'images',
            'type' => 'closure',
            'function' => function ($entry) {
                return $this->fileClosure('images', $entry);
            },
        ]);
        $this->crud->addColumn([
            'name' => 'videos',
            'type' => 'closure',
            'function' => function ($entry) {
                return $this->fileClosure('videos', $entry);
            },
        ]);
        $this->crud->addColumn([
            'name' => 'audio_in_english',
            'type' => 'closure',
            'function' => function ($entry) {
                return $this->fileClosure('audio_in_english', $entry);
            },
        ]);
        $this->crud->addColumn([
            'name' => 'audio_in_indonesia',
            'type' => 'closure',
            'function' => function ($entry) {
                return $this->fileClosure('audio_in_english', $entry);
            },
        ]);
        $this->crud->addColumn([
            'name' => 'documents',
            'type' => 'closure',
            'function' => function ($entry) {
                return $this->fileClosure('audio_in_english', $entry);
            },
        ]);
        CRUD::column('updated_at')->type('datetime');
        CRUD::column('created_at')->type('datetime');
        
        return $content;
    }

    protected function fileClosure($model_attribute, $entry) {
        $html = '';
        if ($entry->$model_attribute) {
            $files = $entry->$model_attribute;
            if (is_array($files) && count($files) > 0) {
                foreach ($files as $file_path) {
                    $html .= '
                    <span>
                        <a target="_blank" href="'.asset('storage/'.$file_path).'">- '.array_reverse(explode('/', $file_path))[0].'</a>
                    </span><br>
                    ';
                }
            }
        }

        return $html == '' ? '-' : $html;
    }

    /**
     * Define what happens when the List operation is loaded.
     * 
     * @see  https://backpackforlaravel.com/docs/crud-operation-list-entries
     * @return void
     */
    protected function setupListOperation()
    {
        // CRUD::addFilter([
        //     'type' => 'dropdown',
        //     'name' => 'parent_id',
        //     'label' => 'Application'
        // ], function () {
        //     return CmsApplication::all()->pluck('name')->toArray();
        // }, function ($value) {
        //     $this->crud->addClause('where', 'parent_id', $value);
        // });

        CRUD::addClause('where', 'parent_id', $this->crud->getRequest()->segment(3));

        CRUD::column('#')->type('row_number');
        $this->crud->addColumn([
            'name'     => 'thumbnails',
            'label'    => 'Thumbnail',
            'type'     => 'closure',
            'function' => function($entry) {
                return array_map(function($thumbnail_url) {
                    return '
                        <a href="'.asset('storage/'.$thumbnail_url).'">
                            <img src="'.asset('storage/'.$thumbnail_url).'" style="width: 100px; height: 100px; object-fit: cover; border-radius: 5px">
                        </a>';
            }, is_array($entry->thumbnails) ? $entry->thumbnails : [])[0] ?? '-';
        }
        ]);
        CRUD::column('title');
        $this->crud->addColumn([
            'name' => 'narration_in_english',
            'label' => 'Narration English',
            'escaped' => false,
            'limit' => 35,
        ]);
        $this->crud->addColumn([
            'name' => 'narration_in_indonesia',
            'label' => 'Narration Indonesia',
            'escaped' => false,
            'limit' => 35,
        ]);
        $this->crud->addColumn([
            'name'     => 'detail_in_english',
            'label'     => 'Detail English',
            'type'     => 'closure',
            'function' => function($entry) {
                $text = '';
                $data = json_decode($entry->detail_in_english ?? '') ?? [];
                if ($entry->detail_in_english != "[{}]" && !empty($data)) {
                    foreach ($data as $index => $row) {
                        $text .= ($index > 0 ? ' | ' : '').$row->property.' : '.$row->value.'';
                    }
                }

                return $text != '' ? \Str::limit($text, 35, '[...]') : '-';
            }
        ]);
        $this->crud->addColumn([
            'name'     => 'detail_in_indonesia',
            'label'     => 'Detail Indonesia',
            'type'     => 'closure',
            'function' => function($entry) {
                $text = '';
                $data = json_decode($entry->detail_in_indonesia ?? '') ?? [];
                if ($entry->detail_in_indonesia != "[{}]" && !empty($data)) {
                    foreach ($data as $index => $row) {
                        $text .= ($index > 0 ? ' | ' : '').$row->property.' : '.$row->value.'';
                    }
                }

                return $text != '' ? \Str::limit($text, 35, '[...]') : '-';
            }
        ]);
        CRUD::column('tags');
        CRUD::column('images')->type('array_count');
        CRUD::column('videos')->type('array_count');
        CRUD::column('audio_in_english')->type('array_count');
        CRUD::column('audio_in_indonesia')->type('array_count');
        CRUD::column('documents')->type('array_count');
        CRUD::column('updated_at')->type('datetime');
        CRUD::column('created_at')->type('datetime');
        

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
        CRUD::setValidation(CmsAppContentRequest::class);

        $application = \App\Models\CmsApplication::with(['locations', 'categories'])->findOrFail($this->crud->getRequest()->segment(3));
        $name        = $application->name;
        $location    = $application->locations->pluck('name')->join(', ');
        $category    = $application->categories->pluck('name')->join(', ');

        $this->crud->addField([
            'name' => 'parent_id',
            'value' => $application->id,
            'type' => 'hidden',
            'attributes' => [ 'readonly' => 'readonly' ],
        ]);
        
        CRUD::field('title');

        $this->crud->addField([
            'label'             => 'Category',
            'type'              => 'text',
            'name'              => 'categories',
            'value'             => $category,
            'attributes'        => [ 'readonly' => 'readonly', 'disabled' => 'disabled' ],
            'wrapperAttributes' => [ 'class' => 'form-group col-md-4' ],
            'store_in_database' => false,
        ]);

        $this->crud->addField([
            'label'             => 'Application',
            'type'              => 'text',
            'name'              => 'name',
            'value'             => $name,
            'attributes'        => [ 'readonly' => 'readonly', 'disabled' => 'disabled' ],
            'wrapperAttributes' => [ 'class' => 'form-group col-md-4' ],
            'store_in_database' => false,
        ]);
        
        $this->crud->addField([
            'label'             => 'Location',
            'type'              => 'text',
            'name'              => 'locations',
            'value'             => $location,
            'attributes'        => [ 'readonly' => 'readonly', 'disabled' => 'disabled' ],
            'wrapperAttributes' => [ 'class' => 'form-group col-md-4' ],
            'store_in_database' => false,
        ]);
        $this->crud->addField([
            'label'             => "Tag",
            'placeholder'       => "Select a tag",
            'type'              => 'select2_multiple',
            'name'              => 'tags',
            'entity'            => 'tags',
            'model'             => CmsTag::class,
            'attribute'         => 'name',
            'pivot'             => true,
            'options'           => (function ($query) {
                return $query->orderBy('name', 'ASC')->get();
            }),
            'attributes'        => [
                'placeholder' => 'Select Location'
            ],
        ]);
        CRUD::field('narration_in_indonesia')->type('ckeditor');
        CRUD::field('narration_in_english')->type('ckeditor');
        $this->crud->addField([
            'name' => 'detail_in_indonesia',
            'label' => 'Detail In Indonesaia',
            'type' => 'table',
            'entity_singular' => 'detail', // used on the "Add X" button
            'columns' => [
                'property' => 'Property',
                'value' => 'Value',
            ],
            'min' => 1,
            'repeatable' => true,
        ]);
        $this->crud->addField([
            'name' => 'detail_in_english',
            'label' => 'Detail In English',
            'type' => 'table',
            'entity_singular' => 'detail', // used on the "Add X" button
            'columns' => [
                'property' => 'Property',
                'value' => 'Value',
            ],
            'min' => 1,
            'repeatable' => true,
        ]);
        $this->crud->addField([
            'name'    => 'thumbnails',
            'type'    => 'upload_multiple_image_preview',
            'label'   => 'Thumbnail',
            'upload'  => true,
            'disk'    => 'public',
            'hint'    => 'Multiple uploads are allowed.',
            'wrapper' => ['class' => 'form-group col-md-4'],
        ]);
        $this->crud->addField([
            'name'    => 'images',
            'type'    => 'upload_multiple_image_preview',
            'label'   => 'Image',
            'upload'  => true,
            'disk'    => 'public',
            'hint'    => 'Multiple uploads are allowed.',
            'wrapper' => ['class' => 'form-group col-md-8'],
        ]);
        $this->crud->addField([
            'name'    => 'videos',
            'type'    => 'upload_multiple_image_preview',
            'label'   => 'Video',
            'upload'  => true,
            'disk'    => 'public',
            'hint'    => 'Multiple uploads are allowed.',
        ]);
        $this->crud->addField([
            'name'    => 'audio_in_english',
            'type'    => 'upload_multiple_image_preview',
            'label'   => 'Audio in English',
            'upload'  => true,
            'disk'    => 'public',
            'hint'    => 'Multiple uploads are allowed.',
            'wrapper' => ['class' => 'form-group col-md-6'],
        ]);
        $this->crud->addField([
            'name'    => 'audio_in_indonesia',
            'type'    => 'upload_multiple_image_preview',
            'label'   => 'Audio in Indonesia',
            'upload'  => true,
            'disk'    => 'public',
            'hint'    => 'Multiple uploads are allowed.',
            'wrapper' => ['class' => 'form-group col-md-6'],
        ]);
        $this->crud->addField([
            'name'    => 'documents',
            'type'    => 'upload_multiple_image_preview',
            'label'   => 'Document (pdf)',
            'upload'  => true,
            'disk'    => 'public',
            'hint'    => 'Multiple uploads are allowed.',
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

    /**
     * Store a newly created resource in the database.
     *
     * @return \Illuminate\Http\RedirectResponse
     */
}
