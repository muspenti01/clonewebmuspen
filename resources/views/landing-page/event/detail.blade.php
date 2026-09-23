@extends('landing-page.layout')

@section('title',$event->name)

@section('main-content')
<div id="waButton"></div>
    <!-- Start Page Title Area -->
    <div class="page-title-area">
        <div class="container">
            <div class="page-title-content">
                <h2>{{$event->name}}</h2>
                <ul>
                    <li>Event Details</li>
                </ul>
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

    <!-- Start Products Details Area -->
    <div class="products-details-area ptb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5 col-md-12">
                    <div class="products-details-image">
                        <a href="{{asset('storage/'.$event->file)}}" class="popup-image">
                            <img src="{{asset('storage/'.$event->file)}}" alt="image">
                        </a>
                    </div>
                </div>
                <div class="col-lg-7 col-md-12">
                    <div class="products-details-desc">
                        <h3>{{$event->name}}</h3>

                        {!! strip_tags($event->description) !!}
                        <div class="products-meta">
                            <span>Category: <a href="#">{{$event->type}}</a></span>
                            <span>Date: <a href="#">{{$event->date->format('d/m/Y')}}</a></span>
                            <a class="default-btn" href="{{url('/booking')}}">Ikuti Event</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Products Details Area -->

@endsection
