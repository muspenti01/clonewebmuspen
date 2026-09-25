<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Event;
use App\Models\Setting;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function index()
    {
        $events = Event::where('status', '=', Event::STATUS_PUBLISH)->paginate(6);
        return view('landing-page.event.index', compact('events'));
    }

    public function detail($slug)
    {
        $event = Event::whereSlug($slug)->where('status', '=', Event::STATUS_PUBLISH)->firstOrFail();
        return view('landing-page.event.detail', compact('event'));
    }

    // for user to booking form
    public function getEventSchedule(Request $request){

        $sessionOneTotalVisitor = Booking::whereDate('date','=',$request->get('date'))
            ->where('event_id', '=', null)
            ->where('session_type', '=', Booking::SESSION_TYPE_1)
            ->sum('visitor');

        $sessionOneAvailSlot = (int)Setting::get('max_visitor') < $sessionOneTotalVisitor ? 0 : (int)Setting::get('max_visitor') - $sessionOneTotalVisitor;


        $sessionTwoTotalVisitor = Booking::whereDate('date','=',$request->get('date'))
            ->where('event_id', '=', null)
            ->where('session_type', '=', Booking::SESSION_TYPE_2)
            ->sum('visitor');

        $sessionTwoAvailSlot = (int)Setting::get('max_visitor') < $sessionTwoTotalVisitor ? 0 : (int)Setting::get('max_visitor') - $sessionTwoTotalVisitor;


        $events = Event::whereDate('date','=',$request->get('date'))->where('status', '=', Event::STATUS_PUBLISH)->get();

        return view('landing-page.booking.parts.event', compact('events','sessionTwoAvailSlot','sessionOneAvailSlot'))->render();
    }

    // get event json view
    public function eventJson(Request $request)
    {
        $calendar = [];
        $events = Event::where('status', '=', Event::STATUS_PUBLISH)
            ->whereBetween('date', [$request->get('start'), $request->get('end')])
            ->get();

        foreach ($events as $key => $event) {
            $calendar[$key]['id'] = $event->id;
            $calendar[$key]['title'] = $event->name;
            $calendar[$key]['start'] = $event->date->format('Y-m-d H:00');
            $calendar[$key]['end'] = null;
            $calendar[$key]['max_visitor'] = $event->max_visitor;
            $calendar[$key]['slot_avail'] = $event->availableSlot;
        }

        return response()->json($calendar, 200);
    }

    public function getMuseumCapacity(Request $request)
    {
        $bookings = Booking::selectRaw('SUM(visitor) as total_visitor, session_type')
            ->whereDate('date','=',$request->get('date'))
            ->groupBy('session_type')
            ->where('event_id', '=', null)
            ->where('session_type', '!=', null)
            ->get();


        $response = array();
        foreach ($bookings as $key => $booking) {
            $response[$key]['current_book'] = $booking->total_visitor;
            $response[$key]['max_capacity'] = (int)Setting::get('max_visitor');
            $response[$key]['avail_slot'] = (int)Setting::get('max_visitor') < $booking->total_visitor ? 0 : (int)Setting::get('max_visitor') - $booking->total_visitor;
            $response[$key]['session'] = $booking->session_type;
        }


        return response()->json([
            'status' => 'success',
            'code' => 200,
            'data' => $response], 200);
    }

    public function booking()
    {
        return view('landing-page.booking.index');
    }


    public function storeBooking(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'place' => 'required',
            'phone' => 'required',
            'visitor' => 'required',
            'captcha' => 'required|captcha'
        ], [
            'captcha.required' => 'Kode captcha wajib diisi.',
            'captcha.captcha' => 'Kode captcha salah, silakan coba lagi.'
        ]);
//            'event_id' => 'required'

        $newBook = new Booking;
        $newBook->name = $request->name;
        $newBook->email = $request->email;
        $newBook->place = $request->place;
        $newBook->visitor = $request->visitor;
        $newBook->phone = $request->phone;
        $newBook->date = $request->date;

        if (in_array($request->event_id,[Booking::SESSION_TYPE_1,Booking::SESSION_TYPE_2, Booking::SESSION_TYPE_0])){
            $newBook->type = Booking::TYPE_MUSEUM;
            $newBook->session_type = $request->event_id;
            $newBook->category = in_array($request->event_id,[Booking::SESSION_TYPE_0]) ? 'online' : 'offline';
        } else {
            $event = Event::whereId($request->event_id)->firstOrfail();
            if ($event->availableSlot <= 0){
                return response()->json([
                    'status' =>' The is no slot avail'
                ], 422);
            }

            $newBook->event_id = $request->event_id;
            $newBook->type = Booking::TYPE_EVENT;
        }

        $newBook->save();

        return response()->json([
            'status' => 'success'
        ], 200);
    }

    // Booking place
    public function getBooking(Request $request)
    {
        $bookArr = [];
        $bookings = Booking::where('event_id','=',null)
            ->whereBetween('date', [$request->get('start'), $request->get('end')])
            ->where('approval_status', Booking::APPROVAL_APPROVE)
            ->get();

        foreach ($bookings as $key => $book) {
            $bookArr[$key]['id'] = $book->id;
            $bookArr[$key]['title'] = $book->category . ' - ' . $book->name . " - " . $book->place;
            $bookArr[$key]['start'] = $book->date->format('Y-m-d H:00');
            $bookArr[$key]['end'] = null;
        }

        return response()->json($bookArr, 200);
    }
}
