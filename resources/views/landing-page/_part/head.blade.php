<!-- Required meta tags -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Link of CSS files -->
<link rel="stylesheet" href="{{asset('assets/css/bootstrap.min.css')}}">
<link rel="stylesheet" href="{{asset('assets/css/aos.css')}}">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
<link rel="stylesheet" href="{{asset('assets/css/all.min.css')}}">
<link rel="stylesheet" href="{{asset('assets/css/odometer.min.css')}}">
<link rel="stylesheet" href="{{asset('assets/css/remixicon.css')}}">
<link rel="stylesheet" href="{{asset('assets/css/magnific-popup.min.css')}}">
<link rel="stylesheet" href="{{asset('assets/css/meanmenu.min.css')}}">
<link rel="stylesheet" href="{{asset('assets/css/swiper-bundle.min.css')}}">
<link rel="stylesheet" href="{{asset('assets/css/owl.carousel.min.css')}}">
<link rel="stylesheet" href="{{asset('assets/css/owl.theme.default.min.css')}}">
<link rel="stylesheet" href="{{asset('assets/css/style.css')}}">
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@800&display=swap" rel="stylesheet">
<title>@yield('title') - {{Setting::get('site_title')}}</title>
<link rel="stylesheet" href="{{asset('assets/css/floating-wpp.min.css')}}">

<link rel="icon" type="image/png" href="{{asset(Setting::get('site_icon')) }}">
<script>
    setTimeout(() => {
        $(".preloader").fadeOut();
    }, 1800);
</script>
<style>
    #waButton {
        z-index: 4;
    }
    .owl-muspen-updates-item {
        height: 100%;
    }
    .owl-muspen-updates-item > *:first-child {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
        padding: 0 !important;

        min-width: 0 !important;

        height: 100% !important;
        width: 100% !important;

        height: 100% !important;
        border-radius: 1em 1em 0 0 !important;
        overflow: hidden;
    }

    @media(max-width: 767px) {
        .owl-muspen-updates-item {
            /* min-width: 5em; */
        }

        .owl-muspen-updates-item:has(.tiktok-embed) {
            max-height: unset !important;
        }
        
        .owl-item .tiktok-embed {
            max-height: unset !important;
        }

        .owl-muspen-updates-item:has(iframe[id^=twitter-widget-]) {
            /* min-width: unset !important */
        }
        .owl-muspen-updates-item iframe[id^=twitter-widget-] {
            width: 100% !important;
        }
        .owl-muspen-updates-item .twitter-tweet{
            max-width: unset;
        }
    }



    .owl-muspen-updates-item:has(.tiktok-embed) {
        max-height: 15em;
        overflow: hidden;
        width: 100%;
        height: 100%;
        border-radius: 0 !important;
        /* margin-bottom: 0 !important; */
        /* width: 100% !important; */
    }
    .owl-item .tiktok-embed {
        height: 100%;
    }
    .owl-item:has(.tiktok-embed) {
        width: unset !important;
        min-width: 250px !important;
    }
    .owl-item .owl-muspen-updates-item {
        /* height: unset !important; */
    }
</style>
@yield('custom-css')
