@extends('landing-page.layout')

@section('title','Daftar Koleksi')

@section('custom-css')
<style>
.pagination {
    justify-content: center;
}
</style>
@endsection

@section('main-content')
<div id="waButton"></div>
    <!-- Start Page Title Area -->
    <div class="page-title-area">
        <div class="container">
            <div class="page-title-content">
                <h2>{{ request()->query('query') ? request()->query('query') : 'Koleksi'}}</h2>
                <ul>
                    <li><span>Kategori: {{ request()->query('category') ? request()->query('category') : 'Semua kategori'}}</span></li>
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

    <!-- Start Products Area -->
    <div class="products-area pt-5 pb-5">
        <div class="container">
            <div class="pakap-grid-sorting row align-items-center">
                <div class="col-lg-12 mb-3">
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <aside class="widget-area">
                                <div class="widget widget_search">
                                    <form class="search-form">
                                        <label><input type="search" class="search-field" name="query" value="{{ request()->query('query') ?  request()->query('query') : ''}}" placeholder="Cari Koleksi..."></label>
                                        <button type="submit"><i class="ri-search-2-line"></i></button>
                                    </form>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 text-center">
                    <a href="{{url('/collections')}}" class="me-1 my-2 {{ !request()->query('category') ? 'yellow-btn' : 'blue-btn' }} default-btn">Semua Kategori</a>
                    @foreach ($collection_categories as $category)
                        <a href="{{url('/collections')}}?{{ request()->query('query') ? 'query='.request()->query('query').'&' : ''}}category={{ $category->slug }}" class="me-1 my-2 {{ request()->query('category') == $category->slug ? 'yellow-btn' : 'red-btn' }} default-btn">{{ $category->name }}</a>
                    @endforeach
                </div>
                <div class="col-lg-6 col-md-6 result-count">
                    <p><span class="count">{{$collections->total()}}</span> Koleksi</p>
                </div>

            </div>
            <div class="row">
                <div class="col-lg-12 col-md-6 col-sm-6">
                    @foreach($collections as $collection)
                        <div class="row content ms-2 me-2 mb-5" style="box-shadow: 0px 35px 70px 5px rgba(25, 34, 64, 0.15);">
                            <div class="col-lg-2 p-0">
                            <img src="{{ asset('storage/'.$collection->file) }}" alt="" style="min-width:100%;min-height: 100%">
                            </div>
                            <div class="col-lg-10 ps-3 pt-4 pb-4 align-self-center">
                                <h4>{{$collection->title}}</h4>
                                {!! Str::limit(strip_tags($collection->description),300,'...') !!}
                                <p><a href="{{route('detail.collection',['slug' => $collection->slug])}}" style="padding: 3px 3px" class="blue-btn default-btn mt-2 pe-2 ps-2">Selengkapnya</a></p>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
            {{$collections->withQueryString()->links()}}
        </div>
    </div>
    <!-- End Products Area -->
@endsection
