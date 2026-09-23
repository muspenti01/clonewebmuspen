<?php

namespace App\Http\Controllers\Admin\Operations;

use App\Models\Approval;
use Illuminate\Support\Facades\Route;

trait RejectOperation
{
    /**
     * Define which routes are needed for this operation.
     *
     * @param string $segment    Name of the current entity (singular). Used as first URL segment.
     * @param string $routeName  Prefix of the route name.
     * @param string $controller Name of the current CrudController.
     */
    protected function setupRejectRoutes($segment, $routeName, $controller)
    {
        Route::get($segment.'/{id}/reject', [
            'as'        => $routeName.'.reject',
            'uses'      => $controller.'@reject',
            'operation' => 'reject',
        ]);
    }

    /**
     * Add the default settings, buttons, etc that this operation needs.
     */
    protected function setupRejectDefaults()
    {
        $this->crud->allowAccess('reject');

        $this->crud->operation('reject', function () {
            $this->crud->loadDefaultOperationSettingsFromConfig();
        });

        $this->crud->operation('list', function () {
            // $this->crud->addButton('top', 'reject', 'view', 'crud::buttons.reject');
            $this->crud->addButton('line', 'rejectArticle', 'view', 'crud::buttons.reject');
        });
    }

    /**
     * Show the view for performing the operation.
     *
     * @return Response
     */
    public function reject()
    {
        dd('default reject');
        
        $this->crud->hasAccessOrFail('reject');

        // prepare the fields you need to show
        $this->data['crud'] = $this->crud;
        $this->data['title'] = $this->crud->getTitle() ?? 'reject '.$this->crud->entity_name;

        // load the view
        return view("crud::operations.reject", $this->data);
    }

    public function rejectArticle($id)
    {
        $this->crud->query->whereId($id)->first()->update([
            'approval_status' => Approval::APPROVAL_REJECT
        ]);
        \Alert::add('success', 'Rejected')->flash();
        
        return redirect(backpack_url('approval'));
    }
}
