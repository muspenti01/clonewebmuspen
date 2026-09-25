<?php

namespace App\Http\Controllers\Admin;
use App\Models\Setting;
use Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;
use \Backpack\Settings\app\Http\Controllers\SettingCrudController;


class SettingCrudExtendedController extends SettingCrudController
{
    use CreateOperation;

    public function setup()
    {
        CRUD::setModel(Setting::class);
        CRUD::setEntityNameStrings(trans('backpack::settings.setting_singular'), trans('backpack::settings.setting_plural'));
        CRUD::setRoute(config('backpack.base.route_prefix') . '/setting');
        CRUD::orderBy('name', 'ASC');
    }

    public function setupListOperation()
    {
        // only show settings which are marked as active
        CRUD::addClause('where', 'active', 1);
        $this->crud->addClause('whereIn','key',['phone', 'address', 'address_footer', 'maps_address', 'max_visitor', 'visi_misi_image', 'visi', 'misi', 'about_us', 'about_us_image', 'maps', 'compay_profile_url']);

        // columns to show in the table view
        CRUD::setColumns([
            [
                'name'  => 'name',
                'label' => trans('backpack::settings.name'),
            ],
            // [
            //     'name'  => 'key',
            //     'label' => 'Key',
            // ],
            [
                'name'  => 'value',
                'label' => trans('backpack::settings.value'),
            ],

        ]);
    }


    protected function setupCreateOperation()
    {
        $this->crud->addField([
            'name' => 'key',
            'type' => 'text'
        ]);

        $this->crud->addField([
            'name' => 'name',
            'type' => 'text'
        ]);

        $this->crud->addField([
            'name' => 'description',
            'type' => 'textarea'
        ]);

        $this->crud->addField([
            'name' => 'field',
            'type' => 'textarea',
            'default' => '{"name":"value","label":"Value","type":"text"}',
            'hint' => 'Beware, must valid json field format by backpack!'
        ]);

        $this->crud->addField([
            'name' => 'active',
            'type' => 'checkbox',
        ]);
    }

    public function setupUpdateOperation()
    {
        CRUD::addField([
            'name'       => 'name',
            'label'      => trans('backpack::settings.name'),
            'type'       => 'text',
            'attributes' => [
                'disabled' => 'disabled',
            ],
        ]);

        // CRUD::addField([
        //     'name'       => 'key',
        //     'label'      => 'key',
        //     'type'       => 'text',
        //     'attributes' => [
        //         'disabled' => 'disabled',
        //     ],
        // ]);

        CRUD::addField(json_decode(CRUD::getCurrentEntry()->field, true));
    }
}
