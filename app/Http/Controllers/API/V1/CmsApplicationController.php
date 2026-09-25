<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Models\CmsAppContent;
use App\Models\CmsApplication;
use Illuminate\Http\Request;

class CmsApplicationController extends Controller
{
    public function getAllApplications()
    {
        return response()->json([
            'data' => CmsApplication::join('cms_application_cms_location', 'cms_application_cms_location.cms_application_id', '=', 'cms_applications.id')
            ->join('cms_locations', 'cms_application_cms_location.cms_location_id', '=', 'cms_locations.id')
            ->join('cms_application_cms_category', 'cms_application_cms_category.cms_application_id', '=', 'cms_applications.id')
            ->join('cms_categories', 'cms_application_cms_category.cms_category_id', '=', 'cms_categories.id')
            ->where('parent_id', null)
            ->select([
                'cms_applications.id',
                'cms_applications.name',
                'cms_locations.name as location_name',
                'cms_categories.name as catgory_name',
                'cms_applications.created_at',
                'cms_applications.updated_at',
            ])
            ->get(),
        ], 200);
    }
    public function getAllApplicationWithContents()
    {
        return response()->json([
            'data' => CmsApplication::with(['contents', 'contents.tags'])->join('cms_application_cms_location', 'cms_application_cms_location.cms_application_id', '=', 'cms_applications.id')
            ->join('cms_locations', 'cms_application_cms_location.cms_location_id', '=', 'cms_locations.id')
            ->join('cms_application_cms_category', 'cms_application_cms_category.cms_application_id', '=', 'cms_applications.id')
            ->join('cms_categories', 'cms_application_cms_category.cms_category_id', '=', 'cms_categories.id')
            ->where('parent_id', null)
            ->select([
                'cms_applications.id',
                'cms_applications.name',
                'cms_locations.name as location_name',
                'cms_categories.name as catgory_name',
                'cms_applications.created_at',
                'cms_applications.updated_at',
            ])
            ->get(),
        ], 200);
    }
    public function getAllApplicationByIdWithContent(Request $request)
    {
        $body = [];
        if (isset($request->app_id)) {
            $body = [
                'data' => CmsApplication::with(['contents', 'contents.tags'])->join('cms_application_cms_location', 'cms_application_cms_location.cms_application_id', '=', 'cms_applications.id')
                ->join('cms_locations', 'cms_application_cms_location.cms_location_id', '=', 'cms_locations.id')
                ->join('cms_application_cms_category', 'cms_application_cms_category.cms_application_id', '=', 'cms_applications.id')
                ->join('cms_categories', 'cms_application_cms_category.cms_category_id', '=', 'cms_categories.id')
                ->where('cms_applications.id', $request->app_id)
                ->select([
                    'cms_applications.id',
                    'cms_applications.name',
                    'cms_locations.name as location_name',
                    'cms_categories.name as catgory_name',
                    'cms_applications.created_at',
                    'cms_applications.updated_at',
                ])
                ->get(),
            ];
        }

        return response()->json($body, 200);

    }

    public function getContentById(Request $request)
    {
        $body = [];
        if (isset($request->content_id)) {
            $body = [
                'data' => CmsAppContent::with(['tags', 'application' => function ($query) use ($request) {
                    $query->with(['locations', 'categories']);
                    $query->select(['id', 'name', 'parent_id']);
                }])
                ->where('id', $request->content_id)
                ->whereNotNull('parent_id')
                ->get(),
            ];
        }

        return response()->json($body, 200);
    }
}
