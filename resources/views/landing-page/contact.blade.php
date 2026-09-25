@extends('landing-page.layout')

@section('title','About')

@section('main-content')
<div id="waButton"></div>
<!-- Start Page Title Area -->
<div class="page-title-area">
    <div class="container">
        <div class="page-title-content">
            <h2>Contact Us</h2>
            <ul>
                <li><a href="/">Home</a></li>
                <li>Contact Us</li>
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

<!-- Start Contact Info Area -->
<div class="contact-info-area pb-100 pt-5 mt-5">
    <div class="container">
        <div class="contact-info-inner">
            <h2>Have any question in mind please call or mail us</h2>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-contact-info-box">
                        <div class="icon bg1">
                            <i class="ri-customer-service-2-line"></i>
                        </div>
                        <h3><a href="tel:{{Setting::get('phone')}}">{{Setting::get('phone')}}</a></h3>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-contact-info-box">
                        <div class="icon bg2">
                            <i class="ri-map-pin-line"></i>
                        </div>
                        <h3>{{Setting::get('address')}}</h3>
                    </div>
                </div>
            </div>
            <div class="lines">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </div>
    </div>
</div>
<!-- End Contact Info Area -->

<div class="maps">
    {!!Setting::get('maps')!!}
 </div>
@endsection
