@extends('landing-page.layout')

@section('title',$collection->title)

@section('custom-css')
<link rel="stylesheet" href="{{ asset('assets/grid-gallery/css/grid-gallery.min.css') }}">
@endsection

@section('custom-js')
<!-- lightgallery plugins -->
<script src='{{ asset('assets/js/fslightbox.js') }}'></script>
<script src='{{ asset('assets/grid-gallery/js/grid-gallery.min.js') }}'></script>
<script>
    gridGallery({
    // gallery selector
    selector: "#mSelector",
    // enable dark mode
    darkMode: true,
    // or "horizontal"
    layout: "square",
    // space between images
    gapLength: 4,
    // row height
    rowHeight: 180,
    // column width
    columnWidth: 200

});
</script>
@endsection

@section('main-content')
<div id="waButton"></div>
    <!-- Start Page Title Area -->
    <div class="page-title-area">
        <div class="container">
            <div class="page-title-content">
                <h2>{{$collection->title}}</h2>
                <ul>
                    <li>Detail Koleksi</li>
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
        <div class="banner-shape1"><img src="{{asset('assets/img/shape/shape9.png')}}" alt="image"></div>
        <div class="row mt-4">
            <div class="col-lg-12 text-center">
                <a href="{{url('/collections')}}" class="me-1 my-2 yellow-btn default-btn">Semua Kategori</a>
{{--                <a href="{{url('/collections')}}?category={{ $collection->category->slug }}" class="me-1 my-2 red-btn default-btn">{{ $collection->category->name }}</a>--}}
            </div>
        </div>
    </div>
    <!-- End Page Title Area -->

    <!-- Start Products Details Area -->
    <div class="products-details-area ptb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5 col-md-12">
                    <div class="products-details-image">
                        <a href="{{asset('storage/'.$collection->file)}}" class="popup-image">
                            <img src="{{asset('storage/'.$collection->file)}}" alt="image">
                        </a>
                    </div>
                </div>
                <div class="col-lg-7 col-md-12">
                    <div class="products-details-desc">
                        <h3>{{$collection->title}}</h3>

                        {!! strip_tags($collection->description) !!}
                        {{-- <div class="products-meta">
                            <span>Category: <a href="#">{{$collection->category->name}}</a></span>
                        </div> --}}
                        <table class="mt-3">
                            <tbody style="color: var(--paragraphColor);">
                                {{-- <tr>
                                    <td style="padding-right: 10px">Status</td>
                                    <td width="10%">:</td>
                                    <td>{!! $collection->available == "available" ? "<span class='badge bg-success'>Tersedia</span>" : "<span class='badge bg-danger'>Tidak Tersedia</span>" !!}</td>
                                </tr>
                                <tr>
                                    <td style="padding-right: 10px">Keterangan Status</td>
                                    <td width="10%">:</td>
                                    <td>{!! $collection->available_note == "ondisplay" ? "Dipamerkan" : "Dipinjam" !!}</td>
                                </tr> --}}
                                <tr>
                                    <td style="padding-right: 10px">Nomor Registrasi</td>
                                    <td width="10%">:</td>
                                    <td>{{ $collection->registration_number }}</td>
                                </tr>
                                <tr>
                                    <td>Tahun Registrasi</td>
                                    <td>:</td>
                                    <td>{{ $collection->registration_year }}</td>
                                </tr>
                                <tr>
                                    <td>Nomor Iventaris
                                    </td>
                                    <td>:</td>
                                    <td>{{ $collection->inventory_number }}</td>
                                </tr>
                                <tr>
                                    <td>Kontributor
                                    </td>
                                    <td>:</td>
                                    <td>{{ $collection->contributor }}</td>
                                </tr>
                                <tr>
                                    <td>Bahan
                                    </td>
                                    <td>:</td>
                                    <td>{{ $collection->bahan }}</td>
                                </tr>
                                <tr>
                                    <td>Ukuran
                                    </td>
                                    <td>:</td>
                                    <td>{{ $collection->ukuran }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            @if ($collection->photos != null)
                <div class="row align-items-center mt-5 justify-content-center">
                    <div class="col-lg-12 text-conter">
                            <h2>Galeri</h2>
                    </div>
                    <div class="col-lg-12">
                        <div class="gg-container">
                            <div class="gg-box">
                                @foreach($collection->photos as $photo)
                                <a data-fslightbox="gallery" href="{{asset('storage/'.$photo)}}">
                                    <img src="{{asset('storage/'.$photo)}}">
                                </a>
                                @endforeach
                            </div>
                        </div>
                    </div>
                </div>
            @endif

        </div>
    </div>
    <!-- End Products Details Area -->

@endsection
