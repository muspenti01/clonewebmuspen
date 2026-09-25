<?php

namespace App\Http\Controllers\Admin\Operations;

use App\Models\Approval;
use Illuminate\Support\Facades\Route;

trait ApproveOperation
{
    /**
     * Define which routes are needed for this operation.
     *
     * @param string $segment    Name of the current entity (singular). Used as first URL segment.
     * @param string $routeName  Prefix of the route name.
     * @param string $controller Name of the current CrudController.
     */
    protected function setupApproveRoutes($segment, $routeName, $controller)
    {
        Route::get($segment.'/{id}/approve', [
            'as'        => $routeName.'.approve',
            'uses'      => $controller.'@approve',
            'operation' => 'approve',
        ]);
    }

    /**
     * Add the default settings, buttons, etc that this operation needs.
     */
    protected function setupApproveDefaults()
    {
        $this->crud->allowAccess('approve');

        $this->crud->operation('approve', function () {
            $this->crud->loadDefaultOperationSettingsFromConfig();
        });

        $this->crud->operation('list', function () {
            // $this->crud->addButton('top', 'approve', 'view', 'crud::buttons.approve');
            $this->crud->addButton('line', 'approveArticle', 'view', 'crud::buttons.approve', 'beginning');
        });
    }

    /**
     * Show the view for performing the operation.
     *
     * @return Response
     */
    public function approve()
    {
        dd('default approve');
        
        $this->crud->hasAccessOrFail('approve');
        
        // prepare the fields you need to show
        $this->data['crud'] = $this->crud;
        $this->data['title'] = $this->crud->getTitle() ?? 'approve '.$this->crud->entity_name;

        // load the view
        return back();
    }

    public function approveArticle($id)
    {
        $this->crud->query->whereId($id)->first()->update([
            'approval_status' => Approval::APPROVAL_APPROVE
        ]);
        \Alert::add('success', 'Approved')->flash();
        
        return redirect(backpack_url('approval'));
    }
}
