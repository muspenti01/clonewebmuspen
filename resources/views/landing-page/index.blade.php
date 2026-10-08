@extends('landing-page.layout')

@section('title','Museum Penerangan RI')

@section('main-content')
<div id="waButton"></div>

<!-- Start New App Main Banner Area -->
<div class="new-app-main-banner-area">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-7 col-md-12">
                <div class="new-app-main-banner-content">
                    <div class="content">
                        <h1 class="text-white">{{Setting::get('site_title')}}</h1>
                        <p class="text-white">{!! nl2br(Setting::get('site_description')) !!}</p>

                        {{-- <div class="content-shape">
                            <img src="assets/img/more-home/banner/content-shape.png" alt="image">
                        </div> --}}
                        <div class="visitor-count mt-5">
                            <div class="visitor-count-title">
                                <h6>Total Pengunjung {{ date('Y') }}</h6>
                            </div>
                            <div class="visitor-count-content">
                                <div class="row">
                                    <div class="col-12 col-lg-7">
                                        <div class="row">
                                            <div class="col-4 overflow-auto">
                                                <h4 id="offline-count" class="fas d-block fa-spinner offline-spinner fa-pulse"></h4>
                                                <span>onsite</span>
                                            </div>
                                            <div class="col-4 overflow-auto">
                                                <h4 id="online-count" class="fas d-block fa-spinner online-spinner fa-pulse"></h4>
                                                <span>online</span>
                                            </div>
                                            {{-- <div class="col-4 col-lg-2">
                                                <h4 id="visited-count" class="fas d-block fa-spinner visited-spinner fa-pulse"></h4>
                                                <span>pengunjung</span>
                                            </div> --}}
                                            <div class="col-4 overflow-auto">
                                                <h4 id="visited-count" class="fas d-block fa-spinner visited-spinner fa-pulse"></h4>
                                                <span>website</span>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <a href="{{ route('visitor') }}"><h6 class="fst-italic mt-2 mb-0 fw-normal" style="color:#2CB6EC; font-size: 0.9rem;">Grafik Total Pengunjung</h6></a>
                                        </div>
                                    </div>

                                    <div class="col-12 col-lg-5">
                                        <a href="https://api.whatsapp.com/send?phone=08118132121&text=Template%20chat%3A%0AHalo%20Muspen!%0AKami%20dari%20....%20ingin%20berkunjung%20secara%20offline%2Fonline%20pada%20hari%2Ftanggal%20...%20jam%20...%20dengan%20jumlah%20rombongan%20.....%20peserta.%0AMohon%20segera%20beri%20konfirmasi%20ya.%20Terima%20kasih!" class="yellow-btn default-btn akses-kunjungan-2">Reservasi Kunjungan</a>
                                        <span class="ket-reservasi">Buka setiap hari GRATIS <br> 09.00-15.00 WIB</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="col-lg-5 col-md-12 d-flex align-items-end justify-content-center">
                <div class="new-app-main-banner-image d-flex justify-content-center" data-aos="fade-up" data-aos-duration="2000">
                    <div class="ellipse position-relative" style="width: 70%">
                        <img width="25%" class="image_1 position-absolute" style="top: 10%;
                        left: -2%;" src="assets/animated/tv 1.png" alt="image">
                        <img width="35%" class="image_2 position-absolute" style="bottom: 12%;
                        left: -8%;" src="assets/animated/video camera 1.png" alt="image">
                        <img width="100%" src="assets/animated/Ellipse 2.png" alt="image">
                        <img width="25%" class="image_3 position-absolute" style="top: 45%;
                        right: -8%;" src="assets/animated/photo 1.png" alt="image">
                        <img width="35%" class="image_4 position-absolute" style="bottom: 1px;
                        right: -5%;" src="assets/animated/komunikasi 1.png" alt="image">
                    </div>
                    <img width="38%" class="ms-lg-5 ms-3 position-absolute up-down" src="assets/animated/Karakter 1.png" alt="image">
                </div>
            </div>
        </div>
    </div>
    {{-- <div class="new-app-banner-bg-shape">
        <img src="assets/img/more-home/banner/banner-shape.png" alt="image">
    </div>
    <div class="new-app-banner-strock-shape">
        <img src="assets/img/more-home/banner/strock.png" alt="image">
    </div> --}}
</div>
<!-- End New App Main Banner Area -->

<!-- Start Screenshots Area -->
<div class="screenshots-area galleries-home ptb-100">
    <div class="container">
        <div class="screen-swiper-slides swiper-container">
            <div class="swiper-wrapper">
                @foreach($galleries as $gallery)
                <div class="swiper-slide">
                   <!-- Start App Progress Area -->
                    <div class="app-progress-area pt-100 pb-5 ps">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-12">
                                    <div class="app-progress-image text-center">
                                        <img class="gallery-img" src="{{ asset('storage/'.$gallery->file) }}" alt="app-img">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="app-progress-content text-start">
                                        <img width="200" class="kunjungan-head" src="{{ asset('assets/img/MUSPEN.png') }}" alt="">
                                        <h2 class="kunjungan-head2 pt-30">{{ $gallery->title }}</h2>
                                        <p>{{ strip_tags($gallery->description) }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End App Progress Area -->
                </div>
                @endforeach
            </div>
            <!-- Add Pagination -->
            {{-- <div class="swiper-button-next" data-aos="fade-right"></div>
            <div class="swiper-button-prev" data-aos="fade-left"></div> --}}
            <div class="swiper-button-prev2" data-aos="fade-left"> <i class="fa fa-angle-left text-white"></i> </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next2" data-aos="fade-right"> <i class="fa fa-angle-right text-white"></i> </div>
        </div>
    </div>
</div>
<!-- End Screenshots Area -->


 <!-- Start App Screenshots Area -->
 <div class="app-screenshots-wrap-area ptb-100" id="collection-area">
    <div class="container">
        <div class="section-title">
            <img class="koleksi" src="{{ asset('assets/img/KOLEKSI.png') }}" alt="koleksi">
            <h2 class="pt-4">Koleksi</h2>
            <p>Temui lebih dari  <b>450 koleksi</b> alat-alat komunikasi yang pernah menemani kehidupan masyarakat Indonesia dari zaman dahulu hingga sekarang.</p>
        </div>
        @if(count($collections) > 0)
            <div class="row" id="collection-item">
                <div class="col-md-2 col-2 slider-left-wrap">
                   <a href="javascript:;" onclick="goPrevOwl()"><div id="slider-left"></div></a>
                </div>
                <div class="col-md-8 col-8 ps-2 pe-2">
                    <div class="owl-carousel owl-theme collection-carousel">
                        @foreach($collections as $collection)
                            <div class="item">
                                <div class="row collection-content-row">
                                    <div class="col-lg-4 col-4 img-left" 
                                    style="border-radius: 10px; background-image: url('{{ asset('storage/'.$collection->file) }}'); background-position: center;
                                    background-size: cover;">
                                       {{-- <img src="{{ asset('storage/'.$collection->file) }}" alt="" style="min-width:100%;min-height: 100%"> --}}
                                    </div>
                                    <div class="col-lg-8 col-8 koleksi-content-wrap">
                                        <div class="koleksi-content-init bg-white">
                                            <h4 class="koleksi-title">{{$collection->title}}</h4>
                                            <div class="d-block koleksi-content">{!! Str::limit(strip_tags($collection->description),200,'...') !!} </div>
                                            <div class="btn-koleksi">
                                                <a href="{{route('detail.collection',['slug' => $collection->slug])}}" class="blue-btn mt-lg-3 mt-2 pt-0 pb-0 default-btn pt-lg-1 pb-lg-1 pe-lg-4 pe-2 ps-2 ps-lg-4">Selengkapnya</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
                <div class="col-md-2 col-2 slider-right-wrap">
                    <a href="javascript:;" onclick="goNextOwl()"><div id="slider-right"></div></a>
                </div>
            </div>
        @endif
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

<!-- Start App Screenshots Area -->
<div class="app-screenshots-area events-home ptb-100">
    <div class="container">
        <div class="row">
            <div class="col-12 ps-3 pe-3">
                <div class="section-title">
                    <img class="event-image" src="{{ asset('assets/img/EVENT.png') }}" alt="event">
                    <h2 class="pt-3">Event</h2>
                </div>
                <div class="owl-carousel owl-theme owl-events-custom">
                    @foreach($events as $event)
                    <div class="single-screenshot-card mb-5 text-start">
                        <img src="{{ asset('storage/'.$event->file) }}" alt="screenshots">
                        <div class="p-3">
                            <div class="d-flex flex-row justify-content-around">
                                <strong>{{$event->date->format('D M,y')}}</strong>
                                <p><i class="fas fa-chair"></i> {{ $event->max_visitor}} slots</p>
                            </div>
                            <hr class="divider-event">
                            <h6>{!!Str::limit($event->name,'15','...')!!}</h6>
                            <p>
                            {!!Str::limit(strip_tags($event->description),'30','...')!!}
                            </p>
                            <div class="d-block text-center">
                                <a href="{{route('detail.event',['slug' => $event->slug])}}" class="blue-btn text-center default-btn">Ikuti Event Ini</a>
                            </div>
                        </div>
                    </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</div>
<!-- End App Screenshots Area -->

<!-- Start Blog Area -->
<div class="blog-area blog-home pt-100 mt-5">
    <div class="container pb-5">
        <div class="section-title">
            <img class="event-image" src="{{ asset('assets/img/ARTIKEL.png') }}" alt="event">
            <h2 class="pt-3">Forum</h2>
        </div>
        <div class="row justify-content-center">
            @foreach($articles as $article)
            <div class="col-lg-4 col-md-6 col-12">
                <div class="single-blog-post">
                    <div class="image">
                        <a href="{{route('detail.forum',['slug' => $article->slug])}}" class="d-block">
                            <img style="width: 100%; height: 280px!important" src="{{$article->ImageUrl}}" alt="blog">
                        </a>
                        <a href="{{route('detail.forum',['slug' => $article->slug])}}" class="tag">{{$article->category->name}}</a>
                    </div>
                    <div class="content">
                        <ul class="meta">
                            <li><i class="ri-time-line"></i> {{$article->created_at->format('M D, Y')}}</li>
                            <li><i class="ri-message-2-line"></i>
                                <a href="{{route('detail.forum',['slug' => $article->slug])}}">
                                    {{$article->comments->count()}} Comment</a></li>
                        </ul>
                        <h3><a href="{{route('detail.forum',['slug' => $article->slug])}}">
                                {{Str::limit($article->title,'50','...')}}
                            </a></h3>
                    </div>
                </div>
            </div>
            @endforeach
        </div>
    </div>
</div>
<!-- End Blog Area -->

<!-- Start App Video Area -->
{{-- <div class="app-video-area pb-100 mt-5">
    <div class="container">
        <div class="section-title title-with-bg-text mb-2">
            <img class="peta-muspen" src="{{ asset('assets/img/peta-muspen.png') }}" alt="peta muspen">
            <h2 class="pt-3">Peta Muspen</h2>
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
</div> --}}
<!-- End App Video Area -->

<!-- Start App Screenshots Area -->
<div class="app-screenshots-area muspen-update-home ptb-100">
    <div class="container">
        <div class="row">
            <div class="col-12 ps-3 pe-3">
                <div class="section-title">
                    <img class="peta-muspen" src="{{ asset('assets/img/muspen-update.png') }}" alt="muspen update">
                    <h2 class="pt-2">Muspen Update</h2>
                </div>
                <div class="owl-carousel owl-theme owl-muspen-update-custom">
                    @foreach($updates as $update)
                    <div class="single-screenshot-card mb-5 text-start owl-muspen-updates-item" style="min-height: 27em;min-width: 18em;">
                        {!! $update->embed_link !!}
                    </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
    <div class="container muspen-tv mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="section-title title-with-bg-text">
                    <img class="peta-muspen" src="{{ asset('assets/img/muspen-tv.png') }}" alt="event">
                    <h2 class="pt-4">Muspen TV</h2>
                </div>
            </div>
        </div>
        <div class="row on-desktop">
            <div class="col-md-12 text-center">
                <iframe width="560" height="315" src="{{ $tvlinks->where('is_featured', 1)->first()?->embed_link }}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div class="row on-desktop" style="max-width: 700px; margin: 0 auto">
            @foreach($tvlinks->where('is_featured', 0) as $tvlink)
                <div class="col-md-4">
                    <iframe width="100%" src="{{ $tvlink->embed_link }}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            @endforeach
        </div>
        <div class="row on-mobile">
            <div class="col-md-12">
                <div class="owl-carousel mobile-tv owl-theme">
                    @if($tvlinks->where('is_featured', 1)->first()?->embed_link)
                        <div class="item"><iframe style="width: 100%" src="{{ $tvlinks->where('is_featured', 1)->first()?->embed_link }}?autoplay=0" title="YouTube Muspen" autoplay=0 frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    @endif
                    @if($tvlinks->where('is_featured', 0)->first()?->embed_link)
                        @foreach($tvlinks->where('is_featured', 0) as $tvlink)
                        <div class="item"><iframe style="width: 100%" src="{{ $tvlink->embed_link }}?autoplay=0" title="YouTube Muspen" frameborder="0" autoplay=0 allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                        @endforeach
                    @endif
                </div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-12 text-center">
                <a class="default-btn blue-btn" href="{{ Setting::get('youtube')}}">Lihat Lainnya...</a>
            </div>
        </div>
    </div>
</div>
<!-- End App Screenshots Area -->

<!-- Start Feedback Area -->
<div class="feedback-area feedback-home pt-100 pb-75">
    <div class="container">
        <div class="section-title">
            <img class="event-image" src="{{ asset('assets/img/TESTIMONI.png') }}" alt="event">
            <h2 class="pt-3">Testimoni</h2>
        </div>
        <div class="feedback-swiper-slides swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="single-feedback-item">
                        <div class="client-info">
                            <img src="{{ asset('assets/img/testimoni-1.jpeg') }}" alt="user">
                            <div class="title">
                                <h3>Ade Garnandi</h3>
                                <span>Desainer Interior Museum</span>
                            </div>
                        </div>
                        <p>Museum Penerangan sudah melangkah ke paradigma baru museum inklusif: terbuka, informatif, komunikatif, dan menghibur didukung dengan sistem digital menjadikannya instalisasi publik yang cerdas dan menyenangkan.</p>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="single-feedback-item">
                        <div class="client-info">
                            <img src="{{ asset('assets/img/testimoni-2.jpeg') }}" alt="user">
                            <div class="title">
                                <h3>Asep Kambali</h3>
                                <span>Ketua Komunitas Historia Indonesia</span>
                            </div>
                        </div>
                        <p>Muspen adalah contoh museum yang memiliki desain interior, tata pamer, multimedia, dan artwork yang dapat menyajikan sejarah dalam kemasan kekinian. Sehingga Muspen memiliki kesan yang sangat dinamis, interaktif, dan modern.</p>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="single-feedback-item">
                        <div class="client-info">
                            <img src="{{ asset('assets/img/testimoni-3.jpeg') }}" alt="user">
                            <div class="title">
                                <h3>Anton Ismael</h3>
                                <span>Founder Kelas Pagi Jakarta</span>
                            </div>
                        </div>
                        <p>Terima kasih kepada Museum Penerangan. Menurut saya kemajuan sebuah bangsa salah satunya sangat dipengaruhi oleh kemajuan museumnya. Bangsa yang maju akan belajar dari kesalahan-kesalahan yang pernah dilakukannya. Museum penerangan meremajakan dan menyusun kembali infrastrukturnya untuk dapat diterima oleh kaum muda milenial, memberikan jembatan agar mereka dapat mempelajari sejarah Indonesia dengan senang dan gembira.</p>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="single-feedback-item">
                        <div class="client-info">
                            <img src="{{ asset('assets/img/testimoni-3.jpeg') }}" alt="user">
                            <div class="title">
                                <h3>Yosi Mokalu</h3>
                                <span>Ketua Siberkreasi</span>
                            </div>
                        </div>
                        <p>Museum Penerangan ini sesuai dengan namanya, tetap menjadi terang di masa pandemi yang gelap ini. Tetap terlihat berfungsi dan berkontribusi bagi kecerdasan bangsa dengan giat mengadakan kegiatan-kegiatan edukasi virtual, salut!</p>
                    </div>
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-button-next" data-aos="fade-right"></div>
            <div class="swiper-button-prev" data-aos="fade-left"></div>
        </div>
    </div>
</div>
<!-- End Feedback Area -->
@endsection

@section('custom-js')
{{-- <script src="https://apps.elfsight.com/p/platform.js" defer></script> --}}
<script>
    slider_count = {{ count($collections) }}
    var sliders = {!! $collections_json !!}
    
    $("#slider-left").css({
        "background": "transparent url('/storage/"+sliders[slider_count-1]?.file+"') no-repeat center center",
        "background-size": "cover"
    });
    right =  sliders[1] ? sliders[1] : sliders[0];
    $("#slider-right").css({
        "background": "transparent url('/storage/"+right?.file+"') no-repeat center center",
        "background-size": "cover"
    });


    owl = $('.owl-carousel.collection-carousel');
    owl.owlCarousel({
        loop: true,
		margin:12,
		nav:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		},
	});

    // set a flag to alert if previous slide from click
    var prevFlag = false;

    // call event listeners before carousel so it knows its initiated.
    owl.on('prev.owl.carousel', function(event) {
        prevFlag = true
    });

    owl.on('changed.owl.carousel initialized.owl.carousel', function(event) {
        var owlItems  = event.item.count;   // Total number of items (consistent and accurate)
        var item      = event.item.index;   // Owl reported position of the current item (inconsistent and inaccurate)
        var calcItem  = Math.floor(item - (owlItems / 2) + 1); // slightly more logical position of the current item (if not from previous click)

        // if from previous click
        if(prevFlag) {
            if (calcItem === 0) {  // reports 0 instead of last value
            calcItem = owlItems; // solve that problem
            }
        }

        // handle values that fall outside of logical min/max bounds
        if(prevFlag === false && calcItem === 0 || calcItem > owlItems) {
            calcItem = 1;
        }

         if(calcItem == 1) {
            left = owlItems;
            right = 2;
        } else if (calcItem == owlItems) {
            left = calcItem-1;
            right = 1;
        } else if(calcItem != -1) {
            left = calcItem-1;
            right = calcItem+1;
        }
        left -= 1;
        right -= 1;

        $("#slider-left").css({
            "background": "transparent url('/storage/"+sliders[left].file+"') no-repeat center center",
            "background-size": "cover"
        });

        $("#slider-right").css({
            "background": "transparent url('/storage/"+sliders[right].file+"') no-repeat center center",
            "background-size": "cover"
        });

        prevFlag = false
    });

    function goNextOwl() {
        $(".collection-carousel").trigger('next.owl.carousel');
    }

    function goPrevOwl() {
        $(".collection-carousel").trigger('prev.owl.carousel');
    }
</script>

<script>
    $.ajax({
        url: "https://muspenguestsurvey.invm.info/api/guest",
        type: 'GET',
        success: function(res) {
            
            
            const now = new Date();

            let startDate = new Date(now.getFullYear(), now.getMonth(), 1);
            let endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
            let result = res.guest.filter((data) => {
                return new Date(data.created_at).getFullYear() == new Date().getFullYear();
               // return new Date(data.created_at) >= startDate && new Date(data.created_at) <= endDate;
            });

            $('.offline-spinner').html("{{ $onsite_visitor }}");
            $('.online-spinner').html("{{ $online_visitor }}");
            $('.visited-spinner').html(res.count);
            $(".offline-spinner, .online-spinner, .visited-spinner").removeClass();
            $("#offline-count, #online-count, #visited-count").addClass('mb-0');
        }
    });
</script>


<script>
    $('.mobile-tv').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        pagination: false,
        navText:['<div class="swiper-button-next2"> <i class="fa fa-angle-right text-white"></i></div>', '<div class="swiper-button-prev2"> <i class="fa fa-angle-left text-white"></i></div>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
</script>

<script>
    $('.owl-events-custom').owlCarousel({
        center: true,
		nav: false,
		loop: false,
		margin: 20,
		dots: true,
		autoplay: false,
		autoplayHoverPause: true,
		navText: [
			"<i class='ri-arrow-left-s-line'></i>",
			"<i class='ri-arrow-right-s-line'></i>",
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 3
			},
			992: {
				items: 4
			},
			1200: {
				items: 4
			}
		}
	});

    $('.owl-muspen-update-custom').owlCarousel({
        autoWidth: true,
        center: true,
		nav: false,
		loop: false,
		margin: 20,
		dots: true,
		autoplay: false,
		autoplayHoverPause: false,
		navText: [
			"<i class='ri-arrow-left-s-line'></i>",
			"<i class='ri-arrow-right-s-line'></i>",
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 3
			},
			992: {
				items: 4
			},
			1200: {
				items: 4
			}
		}
	});
    function refreshSocialEmbeds() {
        if (window.instgrm && window.instgrm.Embeds) {
            window.instgrm.Embeds.process();
        }
        if (window.twttr && window.twttr.widgets) {
            window.twttr.widgets.load();
        }
        $('.owl-muspen-update-custom').trigger('refresh.owl.carousel');
    }

    setTimeout(refreshSocialEmbeds, 1500);
    setTimeout(refreshSocialEmbeds, 3500);

    window.addEventListener('load', function() {
        setTimeout(refreshSocialEmbeds, 500);
    });
</script>

<!-- Social Media Embed SDKs for Muspen Updates -->
<script async src="//www.instagram.com/embed.js"></script>
<script async src="https://www.tiktok.com/embed.js"></script>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
@endsection
