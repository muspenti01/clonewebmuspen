<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\UpdateRequest;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;

/**
 * Class UpdateCrudController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class UpdateCrudController extends CrudController
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
        CRUD::setModel(\App\Models\Update::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/update');
        CRUD::setEntityNameStrings('update', 'updates');
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
            'label' => 'Embed Code',
            'type' => 'text',
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
        CRUD::setValidation(UpdateRequest::class);

        CRUD::field('name');

        $this->crud->addField(
        [
            'name' => 'description',
            'type' => 'tinymce'
        ]);

        $this->crud->addField([
            'name' => 'embed_link',
            'label' => 'Embed Code (Instagram / TikTok / Twitter)',
            'type' => 'textarea',
            'hint' => '<b>Tips:</b> Tempel kode embed resmi dari Instagram/TikTok/Twitter. Tag <code>&lt;script&gt;</code> akan otomatis dibersihkan oleh sistem agar aman dan tidak diblokir firewall/WAF. Script pemutar embed sudah aktif otomatis di website utama.',
            'attributes' => [
                'placeholder' => "Contoh:\n<blockquote class=\"instagram-media\" data-instgrm-permalink=\"...\">...</blockquote>",
                'rows' => 6,
            ], 
        ]);

        $this->crud->addField([
            'name' => 'embed_cleaner_script',
            'type' => 'custom_html',
            'value' => '
                <script>
                document.addEventListener("DOMContentLoaded", function () {
                    var textarea = document.querySelector(\'textarea[name="embed_link"]\');
                    if (textarea) {
                        function cleanScriptTags() {
                            if (textarea.value.includes("<script")) {
                                textarea.value = textarea.value.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "").trim();
                            }
                        }
                        textarea.addEventListener("input", cleanScriptTags);
                        textarea.addEventListener("paste", function() {
                            setTimeout(cleanScriptTags, 50);
                        });
                        var form = textarea.closest("form");
                        if (form) {
                            form.addEventListener("submit", cleanScriptTags);
                        }
                    }
                });
                </script>
            '
        ]);

        // $this->crud->addField([
        //     'name' => 'file',
        //     'label' => 'Image Cover (Optional)',
        //     'type' => 'image',
        //     'disk' => 'public',
        //     'crop' => true, // set to true to allow cropping, false to disable
        // ]);

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
