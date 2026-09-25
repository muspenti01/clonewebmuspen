<?php

namespace App\Http\Controllers\Admin;

use App\Models\Setting;
use Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;
use \Backpack\Settings\app\Http\Controllers\SettingCrudController;

class SettingSocialMediaController extends SettingCrudController
{
    public function setup()
    {
        CRUD::setModel(Setting::class);
        CRUD::setEntityNameStrings(trans('backpack::settings.setting_singular'), trans('backpack::settings.setting_plural'));
        CRUD::setRoute(config('backpack.base.route_prefix') . '/social-media');
        CRUD::orderBy('name', 'ASC');
    }

    public function setupListOperation()
    {
        // only show settings which are marked as active
        CRUD::addClause('where', 'active', 1);

        $this->crud->addClause('where', 'active', 1);
        $this->crud->addClause('whereIn','key',['tiktok','twitter','instagram','facebook','youtube']);

        // columns to show in the table view
        CRUD::setColumns([
            [
                'name'  => 'name',
                'label' => 'Nama Pengaturan',
            ],
            [
                'name'  => 'key',
                'label' => 'Key',
            ],
            [
                'name'  => 'value',
                'label' => 'Isi Pengaturan',
            ],

        ]);
    }
}
