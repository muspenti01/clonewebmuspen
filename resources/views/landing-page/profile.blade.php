@extends('landing-page.layout')

@section('title','Profil')

@section('main-content')
<div id="waButton"></div>
    <!-- Start Page Title Area -->
    <div class="page-title-area">
        <div class="container">
            <div class="page-title-content">
                <h2>Profil</h2>

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
    <div class="software-integrations-area ptb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="software-integrations-content">
                        <span class="sub-title">STANDAR MAKLUMAT PELAYANAN</span>
                        <h2>Museum Penerangan (Muspen)</h2>

                        <p>

                            Museum Penerangan (Muspen), berdasarkan Permenkominfo No. 05/PER/M.KOMINFO/03/2011 tentang
                            Organisasi dan Tata Kerja Museum Penerangan, mempunyai tugas melaksanakan pelestarian dan
                            pelayanan kepada masyarakat mengenai benda-benda bernilai sejaran dan ilmian di bidang
                            informasi. </p>

                        <p> Museum Penerangan (Muspen) adalah salah satu Unit Pelaksana Teknis (UPT) Direktorat Jenderal
                            Informasi dan Komunikasi Publik yang berdiri pada tahun 1993 dan diresmikan oleh Presiden
                            Soeharto. Muspen berlokasi di Taman Mini Indonesia Indah berada di atas lahan seluas 10.980
                            m2 dan luas bangunan 3.850 m2.
                        </p>
                        <p> Muspen memiliki 495 benda koleksi yang terbagi dalam 5 unsur yaitu radio, televisi, film,
                            pers & grafika, dan penerangan umum, sebagai cerminan dari tugas dan fungsi Departemen
                            Penerangan pada saat itu.
                        </p>
                        <a href="{{ Setting::get('company_profile_url') }}" class="default-btn">Download Company Profile</a>
                    </div>
                </div>
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
            </div>
        </div>
        <div class="shape6"><img src="assets/img/shape/shape5.png" alt="shape"></div>
    </div>
@endsection
