@extends('landing-page.layout')

@section('title','Reservasi Kunjungan')
@section('custom-css')
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fullcalendar@5/main.min.css">
    <style>
        .fc-event-title {
            white-space: normal;
        }
    </style>
@endsection


@section('main-content')
    <div id="waButton"></div>
    <div class="page-title-area">
        <div class="container">
            <div class="page-title-content">
                <h2>Reservasi Kunjungan</h2>
                <p class="text-white"> Klik tanggal untuk reservasi </p>
            </div>
        </div>
        <div class="divider"></div>
        <div class="lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <div class="banner-shape1"><img src="{{asset('assets/img/shape/shape9.png')}}" alt="image"></div>
    </div>


    <!-- Start Blog Area -->
    <div class="blog-area ptb-100">
        <div class="container">
            <div class="row justify-content-center">
                <div id="calendar" style="height: 800px;"></div>

            </div>
        </div>
    </div>
    <!-- End Blog Area -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">

        <div class="modal-dialog" role="document">
            <div class="modal-content">

                <form action="{{route('storeBooking')}}" method="POST" id="booking-form">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Booking Tempat</h5>

                    </div>
                    <div class="modal-body">
                        <div class="alert alert-primary" role="alert">
                            <h4 class="alert-heading">Informasi!</h4>

                            <p class="mb-0" id="event-info"></p>
                        </div>




                        @csrf
                        <input type="hidden" id="booking_date" name="date">

                        <label for="exampleFormControlSelect2">Category</label>
                        <p class="mb-0" id="event-schedule"></p>


                        <div class="form-group mb-3 mt-2">
                            <label for="exampleInputPassword1">Name</label>
                            <input type="text" name="name" class="form-control" id="exampleInputPassword1"
                                   placeholder="nama">
                        </div>

                        <div class="form-group mb-3 mt-2">
                            <label for="exampleInputPassword1">Phone</label>
                            <input type="text" name="phone" class="form-control" id="exampleInputPassword1"
                                   placeholder="phone">
                        </div>

                        <div class="form-group mb-3 mt-2">
                            <label for="exampleInputPassword1">Jumlah Pengunjung</label>
                            <input type="number" name="visitor" class="form-control" id="exampleInputPassword1"
                                   placeholder="Jumlah Pengunjung">
                        </div>

                        <div class="form-group mb-3 mt-2">
                            <label for="exampleInputPassword1">Email</label>
                            <input type="text" name="email" class="form-control" id="exampleInputPassword1"
                                   placeholder="email">
                        </div>

                        <div class="form-group mb-3 mt-2">
                            <label for="exampleInputPassword1">Instansi</label>
                            <input type="text" name="place" class="form-control" id="exampleInputPassword1"
                                   placeholder="Instansi">
                        </div>

                        <div class="form-group mb-3 mt-2">
                            <label>Kode Keamanan <span class="text-danger">*</span></label>
                            <div class="d-flex align-items-center gap-2 mb-2">
                                <span id="captcha-img-booking">{!! captcha_img('flat') !!}</span>
                                <button type="button" class="btn btn-sm btn-light border" id="reload-captcha-booking">
                                    <i class="fa fa-refresh"></i>
                                </button>
                            </div>
                            <input type="text" name="captcha" class="form-control" placeholder="Masukkan kode captcha" required>
                        </div>


                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" id="close-modal">Close
                        </button>
                        <button type="submit" class="btn btn-primary" id="submit-booking">Save changes</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

@endsection
@section('custom-js')
    <script src="https://cdn.jsdelivr.net/npm/fullcalendar@5/main.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/fullcalendar@5/locales-all.js"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script src="https://testing.invm.info/js/plugins/smooth-scrollbar.min.js"></script>
    <script src="https://unpkg.com/typeit@8.5.4/dist/index.umd.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/moment@2.29.4/moment.min.js"></script>

    <style>
        .fc-daygrid-dot-event.fc-event-mirror, .fc-daygrid-dot-event:hover {
            background: rgba(0,0,0,0);
        }
    </style>
    <script>
        const museumCapacity = '{{route('museum')}}'
        const eventSchedule = '{{route('event.schedule')}}'

        document.addEventListener('DOMContentLoaded', function () {
            var calendarEl = document.getElementById('calendar');
            var calendar = new FullCalendar.Calendar(calendarEl, {
                eventTimeFormat: {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false
                },
                initialView: 'dayGridMonth',
                eventSources: [
                    {
                        url: '{{route('event.json')}}',
                        method: 'GET',
                        failure: function () {
                            alert('there was an error while fetching events!');
                        },
                        color: 'yellow',   // a non-ajax option
                        textColor: 'black' // a non-ajax option
                    },
                    {
                        url: '{{route('booking.json')}}',
                        method: 'GET',

                        failure: function () {
                            alert('there was an error while fetching events!');
                        },
                        color: 'blue',   // a non-ajax option
                        textColor: 'black' // a non-ajax option
                    },
                ],
                eventClick: function (info) {
                    if (moment(info.event.start).isSameOrBefore(moment())){
                        swal("Invalid date!", "The date is not available!", "error");
                    }else{
                        if(info.event.source.url != '{{ route('booking.json') }}') {
                            showModal(info)
                        }
                    }
                    // swal(info.event.title,
                    //     `Visit schedule ${info.event.startStr} until ${info.event.endStr}`);
                },
                views: {
                    month: {
                        titleFormat: {
                            month: "long",
                            year: "numeric"
                        }
                    },
                    agendaWeek: {
                        titleFormat: {
                            month: "long",
                            year: "numeric",
                            day: "numeric"
                        }
                    },
                    agendaDay: {
                        titleFormat: {
                            month: "short",
                            year: "numeric",
                            day: "numeric"
                        }
                    }
                },
            });
            calendar.render();
            calendar.on('dateClick', function (info) {
                if(moment(info.date).isSameOrBefore(moment())){
                    swal("Invalid date!", "The date is not available!", "error");
                }else{
                    showModal(info)
                }
            });
        });
        $('#close-modal').on('click', function () {
            $('#exampleModal').modal('toggle')
        });

        $('#reload-captcha-booking').click(function () {
            $('#captcha-img-booking img').attr('src', '{{ captcha_src("flat") }}' + Math.random());
        });

        function showModal(info) {
            if (info.dateStr === undefined){
                info.dateStr = info.event.startStr.substring(0, 10)
            }

            $('#booking_date').val(info.dateStr)
            $.getJSON(museumCapacity + '?date=' + info.dateStr).done(function (response) {
                let availSlot = '';
                response.data.forEach(val => {
                    availSlot += '<li>' + val.avail_slot + ' untuk ' + val.session.toLowerCase().replace('_', ' ').replace('session', 'sesi') + '</li>';
                })
                let eventInfo = "Anda dapat melakukan pemesanan dengan mengisi form berikut"
                if (response.data.length > 0) {
                    eventInfo += " saat ini tersedia kuota penggunjung sejumlah" + "<ul>" + availSlot + "</ul>"
                }
                $('#event-info').html(eventInfo)
            })

            $.ajax({
                url: eventSchedule+ '?date=' + info.dateStr,
                type: "GET",
                success: function (data){
                    $('#event-schedule').html(data)
                },
                error: function (xhr, status) {
                    alert("Sorry, there was a problem!");
                },
            })


            $('#exampleModal').modal('show')
        }

        $("#booking-form").submit(function (e) {

            e.preventDefault(); // avoid to execute the actual submit of the form.

            var form = $(this);
            var actionUrl = form.attr('action');

            $.ajax({
                type: "POST",
                url: actionUrl,
                data: form.serialize(), // serializes the form's elements.
                success: function (data) {
                    swal("Success!", "Pendaftaran berhasil!", "success");
                    $('#booking-form').trigger("reset");
                    $('#exampleModal').modal('toggle')
                    $('#eventId').val('')
                    $('#reload-captcha-booking').trigger('click');
                },
                error: function (xhr) {
                    var res = xhr.responseJSON;
                    if (res && res.errors && res.errors.captcha) {
                        swal("Gagal!", res.errors.captcha[0], "error");
                    } else {
                        swal("Failed!", "failed store data!", "error");
                    }
                    $('#reload-captcha-booking').trigger('click');
                }
            });

        });
    </script>
@endsection
