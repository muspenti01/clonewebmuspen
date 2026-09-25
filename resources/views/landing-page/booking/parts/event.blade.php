<div class="row">

    <div class="btn-group col-md-4 pb-1" role="group">
        <input value="{{\App\Models\Booking::SESSION_TYPE_0}}" type="radio" class="btn-check" name="event_id"
               id="{{\App\Models\Booking::SESSION_TYPE_0}}" autocomplete="off" checked="">
        <label class="btn btn-outline-primary" for="{{\App\Models\Booking::SESSION_TYPE_0}}">Offline</label>
    </div>


    <div class="btn-group col-md-4 pb-1" role="group">
        <input value="{{\App\Models\Booking::SESSION_TYPE_1}}" type="radio" class="btn-check"
               name="event_id" id="{{\App\Models\Booking::SESSION_TYPE_1}}" autocomplete="off"
               checked="" {{$sessionOneAvailSlot !=  (int)Setting::get('max_visitor') ? 'disabled' : null}}>
        <label class="btn {{$sessionOneAvailSlot !=  (int)Setting::get('max_visitor') ? 'btn-outline-danger' :'btn-outline-primary'}}" for="{{\App\Models\Booking::SESSION_TYPE_1}}">Online Sesi
            1</label>
    </div>


    <div class="btn-group col-md-4 pb-1" role="group">
        <input value="{{\App\Models\Booking::SESSION_TYPE_2}}" type="radio" class="btn-check"
               name="event_id" id="{{\App\Models\Booking::SESSION_TYPE_2}}" autocomplete="off"
               checked="" {{$sessionTwoAvailSlot !=  (int)Setting::get('max_visitor')  ? 'disabled' : null}}>
        <label class="btn {{$sessionTwoAvailSlot !=  (int)Setting::get('max_visitor')  ? 'btn-outline-danger' :'btn-outline-primary'}}" for="{{\App\Models\Booking::SESSION_TYPE_2}}">Online Sesi
            2</label>
    </div>


    @foreach($events as $event)
        <div class="btn-group col-md-4 pb-1" role="group">
            <input value="{{$event->id}}" type="radio" class="btn-check" name="event_id" id="{{'event_id_'.$event->id}}"
                   autocomplete="off" checked="" {{$event->availableSlot <= 0 ? 'disabled' : null}}>
            <label class="btn {{$event->availableSlot <= 0 ? 'btn-outline-danger' :'btn-outline-primary'}}"
                   for="{{'event_id_'.$event->id}}">{{$event->name}}</label>
        </div>
    @endforeach
</div>
