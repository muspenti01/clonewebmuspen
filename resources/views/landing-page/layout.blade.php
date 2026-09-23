<!doctype html>
<html lang="zxx">
<head>
    @include('landing-page._part.head')
</head>
<body>
    <div class="preloader">
        <div class="loading">
          <img class="animate__animated animate__slow animate__infinite animate__fadeIn" src="{{asset('assets/img/logo-hitam.png')}}" width="150">
        </div>
      </div>
@include('landing-page._part.navbar')


@yield('main-content')

@include('landing-page._part.footer')

@include('landing-page._part.footer-script')
</body>
</html>
