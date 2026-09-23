<?php

namespace App\Http\Controllers\API\V1\Guestbook;

use App\Http\Controllers\Controller;
use App\Models\GuestBook;
use Carbon\Carbon;
use Illuminate\Http\Request;

class GuestBookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // Get start and end dates from the request
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');
        
        // Get the limit for pagination, default is 10
        $limit = $request->input('limit', 10);

         // Query for total visitor count with sum of visitor_total, filtered by date range if provided
        $totalVisitorQuery = GuestBook::query();

        // Apply date filter if both start and end dates are provided
        if ($startDate && $endDate) {
            $totalVisitorQuery->whereBetween('created_at', [
                Carbon::parse($startDate)->startOfDay(),
                Carbon::parse($endDate)->endOfDay()
            ]);
        }

        // Sum the visitor_total field
        $totalVisitorCount = $totalVisitorQuery->sum('group_member_total');

        // Query guestbooks
        $query = GuestBook::query();

        // If both start and end dates are provided, filter by date range
        if ($startDate && $endDate) {
            $query->whereBetween('created_at', [
                Carbon::parse($startDate)->startOfDay(),
                Carbon::parse($endDate)->endOfDay()
            ]);
        }

        // Order by created date and paginate with a limit
        $guestbooks = $query->orderBy('created_at', 'desc')->paginate($limit);

        // Map the result to match the desired output structure
        // Modify only the specified keys (no_whatsapp -> no_phone and group_member_total -> visitor_total)
        $guestbooks->getCollection()->transform(function ($guestbook) {
            return [
                'id' => $guestbook->id,
                'visitor_type' => $guestbook->visitor_type,
                'age' => $guestbook->age,
                'tourist' => $guestbook->tourist,
                'name' => $guestbook->name,
                'gender' => $guestbook->sex,
                'no_phone' => $guestbook->no_whatsapp, // Renamed no_whatsapp to no_phone
                'email' => $guestbook->email,
                'group_name' => $guestbook->group_name,
                'visitor_total' => $guestbook->group_member_total, // Renamed group_member_total to visitor_total
                'created_at' => $guestbook->created_at,
                'updated_at' => $guestbook->updated_at,
                'image_url' => $guestbook->image_url,
                'subs' => $guestbook->subs,
                'category' => $guestbook->category,
                'school' => $guestbook->school,
                'origin' => $guestbook->origin
            ];
        });


        // Return paginated response with the modified data structure
        return response()->json([
            'success' => true,
            'code' => 200,
            'message' => 'Guestbook data loaded',
            'visitor_total' => $totalVisitorCount, // Add total visitor count
            'data' => $guestbooks
        ]);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'visitor_type' => ['nullable', 'string'],
            'school' => ['nullable', 'string'],
            'origin' => ['nullable', 'string'],
            'name' => ['required', 'string'],
            'no_whatsapp' => ['string'],
            'email' => ['required', 'string', 'max:500'],
            'group_name' => ['string'],
            'group_member_total' => ['numeric'],
            'image_url' => ['nullable', 'string'],
        ]);

        GuestBook::create($request->all());

        return response()->json([
            'success' => true,
            'code' => 200,
            'message' => 'Guestbook Berhasil Diinput.',
            'data' => $request->all()
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
    public function destroy(GuestBook $guestBook)
    {
        $guestBook->delete();

        return response()->json([
            'success' => true,
            'code' => 200,
            'message' => 'Guestbook has been removed',
            'data' => null
        ]);
    }
}
