<!-- Start Navbar Area -->
<div class="navbar-area pakap-new-navbar-area">
    <div class="pakap-responsive-nav">
        <div class="container">
            <div class="pakap-responsive-menu">
                <div class="logo no-sticky-img">
                    <a href="/"><img src="{{asset('assets/img/black-logo.png')}}" alt="logo"></a>
                </div>
                <div class="logo sticky-img">
                    <a href="/"><img src="{{asset('assets/img/logo-hitam.png')}}" alt="logo"></a>
                </div>
            </div>
        </div>
    </div>
    <div class="pakap-nav">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand no-sticky-img" href="{{url('/')}}"><img width="155" src="{{asset('assets/img/black-logo.png')}}" alt="logo"></a>
                <a class="navbar-brand sticky-img" href="{{url('/')}}"><img width="155" src="{{asset('assets/img/logo-hitam.png')}}" alt="logo"></a>
                <div class="collapse navbar-collapse mean-menu">
                    <ul class="navbar-nav">
                        <li class="nav-item"><a href="{{url('/')}}" class="nav-link">Beranda</a></li>
                        <li class="nav-item"><a href="{{route('storeBooking')}}" class="nav-link">Jadwal</a></li>
                        <li class="nav-item"><a href="{{url('/collections')}}" class="nav-link">Koleksi</a></li>
                        <li class="nav-item"><a href="{{url('/events')}}" class="nav-link">Event</a></li>
                        <li class="nav-item"><a href="{{url('/about-us')}}" class="nav-link">Tentang Kami</a></li>
                        {{-- <li class="nav-item"><a href="{{url('/partners')}}" class="nav-link">Partner</a></li> --}}
                        <li class="nav-item"><a href="{{url('/virtual-tour')}}" class="nav-link">360° Virtual Tour</a></li>
                    </ul>
                    <div class="others-option">
                        <a href="{{url('/forum')}}" class="blue-btn default-btn">Forum</a>
                        <a href="https://api.whatsapp.com/send?phone=08118132121&text=Template%20chat%3A%0AHalo%20Muspen!%0AKami%20dari%20....%20ingin%20berkunjung%20secara%20offline%2Fonline%20pada%20hari%2Ftanggal%20...%20jam%20...%20dengan%20jumlah%20rombongan%20.....%20peserta.%0AMohon%20segera%20beri%20konfirmasi%20ya.%20Terima%20kasih!" class="yellow-btn default-btn akses-kunjungan-2" class="yellow-btn default-btn">Reservasi Kunjungan</a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</div>
<!-- End Navbar Area -->
