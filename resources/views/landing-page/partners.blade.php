@extends('landing-page.layout')

@section('title','Our Partners')

@section('main-content')
<div id="waButton"></div>
    <!-- Start Page Title Area -->
    <div class="page-title-area">
        <div class="container">
            <div class="page-title-content">
                <h2>Meet With Our Partners</h2>

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

    <!-- Start About Area -->
    <div class="about-area ptb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="offset-lg-1 col-lg-6 col-md-8">
                    <div class="about-content">
                        <h2>Induk Asosiasi</h2>
                        <p style="text-align: justify">Museum Penerangan adalah unit pelaksana teknis di lingkungan Direktorat Jenderal Informasi dan Komunikasi Publik yang berada di bawah dan bertanggungjawab kepada Direktur Jenderal Informasi dan Komunikasi Publik, secara administratif dibina oleh Sekretaris Direktorat Jenderal Informasi dan Komunikasi Publik. Hal ini diatur dan ditetapkan dalam PERMENKOMINFO NO. 05/PER/M.KOMINFO/03/2011 TAHUN 2011, LL. KEMKOMINFO: 5 HLM. Bahwa dengan ditetapkannya Peraturan Menteri Komunikasi dan Informatika ini, tentang Organisasi dan Tata Kerja Kementerian Komunikasi dan Informatika maka dipandang perlu untuk melakukan penataan organisasi dan tata kerja museum penerangan.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4">
                    <div class="about-img">
                        <img src="assets/img/logo_komdigi.png" data-aos="fade-up" alt="about">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End About Area -->

{{--    @if($partners->where('is_featured', 1))--}}
{{--        <!-- Start Partner Area -->--}}
{{--        <div class="partner-area pb-100">--}}
{{--            <div class="container">--}}
{{--                <div class="row">--}}
{{--                    <div class="col-md-12 text-center">--}}
{{--                        <h3>--}}
{{--                            Induk Asosiasi--}}
{{--                        </h3>--}}
{{--                        <a href="#" class="d-block text-center mt-3">--}}
{{--                            <img width="280" src="{{asset('storage/'.$partners->where('is_featured', 1)->first()->file)}}" alt="image">--}}
{{--                            <p>{{ $partners->where('is_featured', 1)->first()->name }}</p>--}}
{{--                        </a>--}}
{{--                    </div>--}}
{{--                </div>--}}
{{--            </div>--}}
{{--        </div>--}}
{{--        <!-- End Partner Area -->--}}
{{--    @endif--}}

    <!-- Start Partner Area -->
    <div class="partner-area pb-100">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h3 class="mb-3">
                        Our Partners
                    </h3>
                    <div class="partner-slides owl-carousel owl-theme">
                        @foreach($partners as $partner)
                            <div class="partner-item">
                                <a href="#" class="d-block">
                                    <img src="{{asset('storage/'.$partner->file)}}" alt="image">
                                </a>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Partner Area -->
@endsection
