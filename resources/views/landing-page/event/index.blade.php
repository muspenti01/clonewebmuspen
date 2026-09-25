@extends('landing-page.layout')

@section('title','Events')

@section('main-content')
<div id="waButton"></div>
    <!-- Start Page Title Area -->
    <div class="page-title-area">
        <div class="container">
            <div class="page-title-content">
                <h2>Event List</h2>

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
    <!-- End Page Title Area -->

    <!-- Start Products Area -->
    <div class="products-area pt-5 pb-5">
        <div class="container">
            <div class="pakap-grid-sorting row align-items-center">
                <div class="col-lg-6 col-md-6 result-count">
                    <p>Showing <span class="count">{{$events->count()}}</span> Events</p>
                </div>

            </div>
            <div class="row">
                @foreach($events as $event)
                <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
                    <div class="single-screenshot-card text-start">
                        <img src="{{asset('storage/'.$event->file)}}" alt="screenshots">
                        <div class="p-3">
                            <div class="d-flex flex-row justify-content-around">
                                <strong>{{$event->date->format('d M, Y')}}</strong>
                                <p><i class="fas fa-chair"></i> {{$event->max_visitor}} slots</p>
                            </div>
                            <hr class="divider-event">
                            <h6>{{$event->name}}</h6>
                            <p class="badge bg-danger mb-1">{{$event->type}}</p>
                            <p class="max-description">{!! Str::limit(strip_tags($event->description),100,'...') !!}</p>
                            <div class="d-block text-center">
                                <a href="{{route('detail.event',['slug' => $event->slug])}}" class="blue-btn text-center default-btn">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                @endforeach
            </div>
            {{$events->links()}}
        </div>
    </div>
    <!-- End Products Area -->
@endsection
