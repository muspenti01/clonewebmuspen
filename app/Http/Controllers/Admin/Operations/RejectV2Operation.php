<?php

namespace App\Http\Controllers\Admin\Operations;

use Illuminate\Support\Facades\Route;

trait RejectV2Operation
{
    /**
     * Define which routes are needed for this operation.
     *
     * @param string $segment    Name of the current entity (singular). Used as first URL segment.
     * @param string $routeName  Prefix of the route name.
     * @param string $controller Name of the current CrudController.
     */
    protected function setupRejectV2Routes($segment, $routeName, $controller)
    {
        Route::get($segment.'/{id}/rejectv2', [
            'as'        => $routeName.'.rejectv2',
            'uses'      => $controller.'@rejectv2',
            'operation' => 'rejectv2',
        ]);
    }

    /**
     * Add the default settings, buttons, etc that this operation needs.
     */
    protected function setupRejectV2Defaults()
    {
        $this->crud->allowAccess('rejectv2');

        $this->crud->operation('rejectv2', function () {
            $this->crud->loadDefaultOperationSettingsFromConfig();
        });

        $this->crud->operation('list', function () {
            // $this->crud->addButton('top', 'rejectv2', 'view', 'crud::buttons.rejectv2');
            $this->crud->addButton('line', 'reject', 'view', 'crud::buttons.rejectv2');
        });
    }

    /**
     * Show the view for performing the operation.
     *
     * @return Response
     */
    public function reject()
    {
        $this->crud->hasAccessOrFail('rejectv2');
    }
}
