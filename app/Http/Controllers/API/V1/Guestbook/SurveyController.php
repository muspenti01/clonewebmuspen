<?php

namespace App\Http\Controllers\API\V1\Guestbook;

use App\Http\Controllers\Controller;
use App\Models\GuestBook;
use App\Models\Survey;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class SurveyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    
    public function index(Request $request, $guestBook = null)
    {
        // Get start and end dates from the request
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');

        // Get the limit for pagination, default is 10
        $limit = $request->input('limit', 10);


        if ($guestBook) {
            $query = GuestBook::whereId($guestBook)->firstOrFail()->surveys();

            // Apply date filter if both start and end dates are provided
            if ($startDate && $endDate) {
                $query->whereBetween('created_at', [
                    Carbon::parse($startDate)->startOfDay(),
                    Carbon::parse($endDate)->endOfDay()
                ]);
            }

            $guestbooks = $query->paginate($limit);

            return response()->json([
                'success' => true,
                'code' => 200,
                'message' => 'Survei data (guestbook id: ' . $guestBook . ') loaded',
                'data' => $guestbooks
            ]);
        } else {
            $query = Survey::query();

            // Apply date filter if both start and end dates are provided
            if ($startDate && $endDate) {
                $query->whereBetween('created_at', [
                    Carbon::parse($startDate)->startOfDay(),
                    Carbon::parse($endDate)->endOfDay()
                ]);
            }

            $guestbooks = $query->paginate($limit);


            return response()->json([
                'success' => true,
                'code' => 200,
                'message' => 'Survei data loaded',
                'data' => $guestbooks
            ]);
        }
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
            'pameran' => ['required', 'numeric', 'min:1', 'max:10'],
            'pemandu' => ['required', 'numeric', 'min:1', 'max:10'],
            'museum' => ['required', 'numeric', 'min:1', 'max:10'],
            'name' => ['required_without:guest_book_id', 'string'],
            'phone' => ['required_without:guest_book_id', 'string'],
            'guest_book_id' => ['required_without:phone', 'required_without:name', 'exists:guest_books,id'],
            'saran' => ['nullable', 'string', 'max:30000']
        ]);

        if($request->pameran < 5 || $request->pemandu < 5 || $request->museum < 5){
            if(!$request->saran) {
                throw ValidationException::withMessages(['saran' => 'Kolom saran wajib diisi.']);
            }
        }

        if($request->guest_book_id) {
            if(!GuestBook::whereId($request->guest_book_id)->first()) {
                throw ValidationException::withMessages(['guest_book_id' => 'Guest book tidak ditemukan.']);
            };
        }

        
        if($request->guest_book_id) {
            Survey::updateOrCreate(['guest_book_id' => $request->guest_book_id], $request->only(['guest_book_id', 'pameran', 'pemandu', 'museum', 'name', 'phone', 'saran']));
        } else {
            Survey::create($request->all());
        }

        return response()->json([
            'success' => true,
            'code' => 200,
            'message' => 'Survei Berhasil Diinput.',
            'data' => null
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Survey  $survey
     * @return \Illuminate\Http\Response
     */
    public function show(Survey $survey)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Survey  $survey
     * @return \Illuminate\Http\Response
     */
    public function edit(Survey $survey)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Survey  $survey
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Survey $survey)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Survey  $survey
     * @return \Illuminate\Http\Response
     */
    public function destroy(Survey $survey)
    {
        $survey->delete();

        return response()->json([
            'success' => true,
            'code' => 200,
            'message' => 'Survei has been removed',
            'data' => null
        ]);
    }
}
