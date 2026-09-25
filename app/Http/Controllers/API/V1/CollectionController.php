<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Models\Collection;
use App\Models\CollectionCategory;
use Illuminate\Http\Request;

class CollectionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // Get the limit, default to 10 if not provided
        $limit = $request->get('limit', 10);

        // Get the start and end date for filtering
        $startDate = $request->get('start_date');
        $endDate = $request->get('end_date');

        // Query the collection and filter by date if provided
        $query = Collection::query();

        // Apply date filtering if start_date and end_date are present
        if ($startDate && $endDate) {
            $query->whereBetween('created_at', [$startDate, $endDate]);
        }

        // Paginate the results
        $data = $query->paginate($limit);

        return response()->json([
            'data' => $data
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
    return response()->json([
            'data' => Collection::findOrFail($id),
        ]);
    }

    public function getByCategory($category_id)
    {
        return response()->json([
            'data' => Collection::where('category_id', $category_id)->get()
        ], 200);
    }

    public function getAllCategory(Request $request)
    {
        // Initialize the query
        $query = CollectionCategory::query();

        // Search by name
        if ($request->has('search') && !empty($request->search)) {
            $query->where('name', 'like', '%' . $request->search . '%');
        }

        // Filter by slug (optional)
        if ($request->has('slug') && !empty($request->slug)) {
            $query->where('slug', $request->slug);
        }

        // Get the per page value or default to 10
        $perPage = $request->get('per_page', 10);

        // Fetch the paginated results using Laravel's default pagination
        $categories = $query->select('id', 'name', 'slug')->paginate($perPage);

        // Return the default Laravel paginated response
        return response()->json($categories, 200);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
