@extends('landing-page.layout')

@section('title','Visi Misi')

@section('main-content')
<div id="waButton"></div>
    <!-- Start Page Title Area -->
    <div class="page-title-area">
        <div class="container">
            <div class="page-title-content">
                <h2>Visi Misi</h2>

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
    <div class="software-integrations-area mt-5">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="software-integrations-list">
                        <img src="assets/img/muspen.jpg" alt="bg-shape">
                        <ul>
                            <li data-aos="fade-down" class="aos-init aos-animate"><img
                                    src="assets/img/software-integrations/atlassian.png" class="atlassian"
                                    alt="atlassian"></li>
                            <li data-aos="fade-up" class="aos-init aos-animate"><img
                                    src="assets/img/software-integrations/jira.png" class="jira" alt="jira"></li>
                            <li class=""><img src="assets/img/software-integrations/frame.png" class="frame"
                                              alt="frame"></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="software-integrations-content">
                        <span class="sub-title">Visi dan Misi</span>
                        <h2>Visi</h2>
                        <p>
                            {!! nl2br(e(Setting::get('visi') ?: '“Menjadi SMART Museum yang edukatif, inklusif, dan inovatif.”')) !!}
                        </p>
                        <h2 class="mt-5">Misi</h2>
                        <p>
                            {!! nl2br(e(Setting::get('misi') ?: "1. Mewujudkan tata kelola kelembagaan museum yang berintegritas, akuntabel, dan berkelanjutan.\n2. Mengelola dan melestarikan koleksi sejarah komunikasi bangsa secara profesional dan berstandar internasional.\n3. Meningkatkan mutu pelayanan publik prima yang berorientasi pada kepuasan pengunjung.\n4. Memperkuat partisipasi, kolaborasi dan kemitraan strategis untuk pengembangan pengetahuan dan inovasi komunikasi publik.")) !!}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
