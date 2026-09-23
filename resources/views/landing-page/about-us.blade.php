@extends('landing-page.layout')

@section('title','Tentang Kami')

@section('main-content')
<div id="waButton"></div>
    <div class="page-title-area">
        <div class="container">
            <div class="page-title-content">
                <h2>Tentang Kami</h2>
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

    <div class="software-integrations-area ptb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="software-integrations-list">
                        <img src="{{asset(Setting::get('visi_misi_image')) }}" alt="visi misi">
                        {{-- <ul>
                            <li data-aos="fade-down" class="aos-init aos-animate"><img
                                    src="assets/img/software-integrations/atlassian.png" class="atlassian"
                                    alt="atlassian"></li>
                            <li data-aos="fade-up" class="aos-init aos-animate"><img
                                    src="assets/img/software-integrations/jira.png" class="jira" alt="jira"></li>
                            <li class=""><img src="assets/img/software-integrations/frame.png" class="frame"
                                              alt="frame"></li>
                        </ul> --}}
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="software-integrations-content">
                        <span class="sub-title">Visi dan Misi</span>
                        <h2>Visi</h2>
                        <p>
                            {!! nl2br(Setting::get('visi')) !!}
                        </p>
                        <h2 class="mt-5">Misi</h2>
                        <p>
                            {!! nl2br(Setting::get('misi')) !!}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="software-integrations-area mt-5">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="software-integrations-content">
                        <span class="sub-title">STANDAR MAKLUMAT PELAYANAN</span>
                        <h2>Museum Penerangan (Muspen)</h2>

                        <div>
                            {{ Setting::get('about_us') }}
                        </div>
                        {{-- <p>

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
                        </p> --}}
                        <a href="{{ Setting::get('compay_profile_url') }}" class="default-btn">Download Company</a>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="software-integrations-list">
                        <img src="assets/img/shape/bg-shape2.png" alt="bg-shape">
                        <ul>
                            <li data-aos="fade-down" class="aos-init aos-animate"><img
                                    src="assets/img/software-integrations/atlassian.png" class="atlassian"
                                    alt="atlassian"></li>
                            <li data-aos="fade-right" class="aos-init"><img
                                    src="assets/img/software-integrations/skype.png" class="skype" alt="skype"></li>
                            <li data-aos="fade-up" class="aos-init"><img
                                    src="assets/img/software-integrations/gdrive.png" class="gdrive" alt="gdrive"></li>
                            <li data-aos="fade-down" class="aos-init"><img
                                    src="assets/img/software-integrations/slack.png" class="slack" alt="slack"></li>
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
    <!-- Start Team Area -->
    <div class="team-area pt-100 pb-75">
        <div class="container">
            <div class="row justify-content-center mb-3">
                <div class="col-md-12 text-center">
                    <div class="software-integrations-content pe-0">
                        <span class="sub-title">Struktur Organisasi</span>
                    </div>
                </div>
            </div>
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
    <!-- Start App Video Area -->
<div class="app-video-area pb-100 mt-5">
    <div class="container">
        <div class="section-title title-with-bg-text mb-2">
            <h2 class="pt-3">Maket Gedung Muspen</h2>
        </div>
        <div class="row mb-3 mt-4">
            <div class="col-md-12">
                <ul class="nav nav-pills justify-content-center" id="pills-tab" role="tablist">
                    <li class="nav-item mb-3" role="presentation">
                      <button class="nav-link active" id="pills-lantai-1-tab" data-bs-toggle="pill" data-bs-target="#pills-lantai-1" type="button" role="tab" aria-controls="pills-lantai-1" aria-selected="true">Outdoor</button>
                    </li>
                    <li class="nav-item mb-3" role="presentation">
                      <button class="nav-link" id="pills-lantai-2-tab" data-bs-toggle="pill" data-bs-target="#pills-lantai-2" type="button" role="tab" aria-controls="pills-lantai-2" aria-selected="false">Lantai 1</button>
                    </li>
                    <li class="nav-item mb-3" role="presentation">
                        <button class="nav-link" id="pills-lantai-3-tab" data-bs-toggle="pill" data-bs-target="#pills-lantai-3" type="button" role="tab" aria-controls="pills-lantai-3" aria-selected="false">Lantai 2</button>
                      </li>
                </ul>
            </div>
        </div>
        
        <div class="app-video-box">
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-lantai-1" role="tabpanel" aria-labelledby="pills-lantai-1-tab">
                    <iframe width="100%" height="550" src="https://sketchfab.com/models/7fe474e0cec8486181170608f1379c9a/embed?annotations_visible=1" frameborder="0"></iframe>
                    <div class="shape">
                        <img class="shape-1" src="assets/img/more-home/video/shape-1.png" alt="shape1">
                        <img class="shape-2" src="assets/img/more-home/video/shape-2.png" alt="shape2">
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-lantai-2" role="tabpanel" aria-labelledby="pills-lantai-2-tab">
                    <iframe width="100%" height="550" src="https://sketchfab.com/models/e9cc1f6db1354de38908f5658715f507/embed?annotations_visible=1" frameborder="0"></iframe>
                    <div class="shape">
                        <img class="shape-1" src="assets/img/more-home/video/shape-1.png" alt="shape1">
                        <img class="shape-2" src="assets/img/more-home/video/shape-2.png" alt="shape2">
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-lantai-3" role="tabpanel" aria-labelledby="pills-lantai-3-tab">
                    <iframe width="100%" height="550" src="https://sketchfab.com/models/9b73192d56eb44769fb56a4e92a3dbf2/embed?annotations_visible=1" frameborder="0"></iframe>
                    <div class="shape">
                        <img class="shape-1" src="assets/img/more-home/video/shape-1.png" alt="shape1">
                        <img class="shape-2" src="assets/img/more-home/video/shape-2.png" alt="shape2">
                    </div>
                </div>
              </div>
        </div>
    </div>
</div>
<!-- End App Video Area -->

<!-- Start App Screenshots Area -->
<div class="app-screenshots-wrap-area ptb-100">
    <div class="container">
        <div class="section-title">
            <h2 class="pt-4">Prestasi</h2>
        </div>
            <div class="row">
                <div class="offset-lg-1 col-lg-10 col-12 ps-3 pe-3">
                    <div class="owl-carousel owl-theme prestasi-carousel">
                            <div class="item">
                                <div class="row">
                                    <div class="col-12">
                                        <a data-fslightbox="gallery" data-title="Anugerah Purwakalagrha indonesia museum award 2021" href="{{ asset('assets/img/prestasi 1.jpg') }}">
                                            <img height="300" src="{{ asset('assets/img/prestasi 1.jpg') }}" alt="">
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="row">
                                    <div class="col-12">
                                        <a data-fslightbox="gallery" href="{{ asset('assets/img/prestasi 2.jpg') }}">
                                            <img height="300" src="{{ asset('assets/img/prestasi 2.jpg') }}" alt="">
                                        </a>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        {{-- <div class="swiper-container screenshots-swiper-wrap-slides">
            <div class="swiper-wrapper">
                @foreach($collections as $collection)
                <div class="swiper-slide">
                    <div class="row content">
                        <div class="col-lg-3">
                           <img src="{{ asset('storage/'.$collection->file) }}" alt="" style="min-width:100%;min-height: 100%">
                        </div>
                        <div class="col-lg-9 ps-3 pt-4">
                            <h4>{{$collection->title}}</h4>
                            <div class="d-block">{!! Str::limit(strip_tags($collection->description),150,'...') !!} </div>
                            <a href="{{route('detail.collection',['id' => $collection->id])}}" class="blue-btn mt-2 default-btn pt-1 pb-1 pe-2 ps-2">Selengkapnya</a>
                        </div>
                    </div>
                    <div class="row summary">
                        <div class="col-lg-3">
                           <img src="{{ asset('assets/img/tv.png') }}" alt="">
                         </div>
                        <div class="col-lg-6">

                         </div>
                         <div class="col-lg-3">
                           <img src="{{ asset('assets/img/tv.png') }}" alt="">
                         </div>
                    </div>
                </div>
                @endforeach
            </div>
            <div class="swiper-button-prev" data-aos="fade-left"></div>
            <div class="swiper-button-next" data-aos="fade-right"></div>
        </div> --}}
    </div>
</div>
<!-- End App Screenshots Area -->

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

@section('custom-js')
<script src='{{ asset('assets/js/fslightbox.js') }}'></script>
<script>
    owl = $('.owl-carousel.prestasi-carousel');
    owl.owlCarousel({
        loop: true,
		margin:20,
		nav:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:2
			}
		},
	});
</script>
@endsection