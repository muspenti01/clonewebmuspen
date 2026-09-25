@extends('landing-page.layout')

@section('title','Teams')

@section('main-content')
<div id="waButton"></div>
    <!-- Start Page Title Area -->
    <div class="page-title-area page-title-style-two">
        <div class="container">
            <div class="page-title-content">
                <h2>Meet With Our Team Member</h2>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li>Team</li>
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
        <div class="banner-shape1"><img src="assets/img/shape/shape9.png" alt="image"></div>
    </div>
    <!-- End Page Title Area -->

    <!-- Start Team Area -->
    <div class="team-area pt-100 pb-75">
        <div class="container">
            <div class="row justify-content-center">
                @foreach($teams as $team)
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-team-member">
                            <div class="image">
                                <img src="{{$team->photoUrl}}" alt="image">
                            </div>
                            <div class="content">
                                <h3>{{$team->name}}</h3>
                                <span>{{$team->title}}</span>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
    <!-- End Team Area -->
    <!-- Start Partner Area -->
    <div class="partner-area pb-100">
        <div class="container">
            <div class="partner-title">
                Trusted by world famous companies:
            </div>
            <div class="partner-slides owl-carousel owl-theme">
                @foreach($partners as $partner)
                <div class="partner-item">
                    <a href="about-modern.html#" class="d-block">
                        <img src="{{asset('storage/'.$partner->file)}}" alt="image">
                    </a>
                </div>
                @endforeach
            </div>
        </div>
    </div>
    <!-- End Partner Area -->
@endsection
