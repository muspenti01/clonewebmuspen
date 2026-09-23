@extends('landing-page.layout')

@section('title','Struktur Organisasi')

@section('main-content')
<div id="waButton"></div>
    <!-- Start Page Title Area -->
    <div class="page-title-area">
        <div class="container">
            <div class="page-title-content">
                <h2>Struktur Organisasi</h2>

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
            <div class="row justify-content-center mb-3">
                <div class="col-md-12 text-center">
                    <h4>Pimpinan</h4>
                </div>
            </div>
            <div class="row justify-content-center">
                @foreach ($teams->where('category', '<>' ,'staff') as $team)
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
    <!-- Start Team Area -->
    <div class="team-area pt-100 pb-75">
        <div class="container">
            <div class="row justify-content-center mb-3">
                <div class="col-md-12 text-center">
                    <h4>Staff</h4>
                </div>
            </div>
            <div class="row justify-content-center">
                @foreach ($teams->where('category', 'staff') as $team)
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
@endsection
