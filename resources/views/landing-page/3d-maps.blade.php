@extends('landing-page.layout')

@section('title','Virtual Tour')

@section('main-content')
<div id="waButton"></div>
    <!-- Start Page Title Area -->
    <div class="page-title-area">
        <div class="container">
            <div class="page-title-content">
                <h2>Virtual Tour 360°</h2>
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

    <div class="container mt-5 mb-5">
        <div class="row">
            <div class="offset-lg-2 col-12 col-lg-8">
                <p class="text-center">
                    Selama ini, kamu belum pernah  ke Museum Penerangan? Tapi penasaran seperti apa sih Museumnya? <br>
                    Nah langsung aja yuk, jelajahi virtual 360 tour untuk melihat area-area yang ada di Museum Penerangan.
                    <br><br>
                    Dari sini kamu gak hanya sekedar bisa melihat areanya, tapi juga melihat setiap koleksi di lantai 1. <br>
                    Belum tahu juga kan kalau di lantai 2 Museum Penerangan ada yang keren banget, penasaran? <br>
                    langsung aja klik virtual tour di bawah ini ya!
                </p>
            </div>
        </div>
    </div>

    <div class="video-area mb-5 pb-5">
        <div class="container">
            <div class="video-box">
                <iframe width="100%" height="550" src="{{ asset('maps/1/index.htm') }}" frameborder="0"></iframe>
            </div>
        </div>
    </div>

@endsection
