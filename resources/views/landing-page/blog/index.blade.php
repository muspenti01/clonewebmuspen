@extends('landing-page.layout')

@section('title','Forum')

@section('main-content')
<div id="waButton"></div>

    <!-- Start Page Title Area -->
    <div class="page-title-area">
        <div class="container">
            <div class="page-title-content">
                <h2>Forum</h2>

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

    <!-- Start Blog Area -->
    <div class="blog-area ptb-100">
        <div class="container">
            <div class="row mb-5">
                <div class="d-flex flex-sm-row flex-column justify-content-between gap-2">
                    <div class="d-flex flex-sm-row flex-column gap-2">
                        <div class="btn-group">
                            <button type="button" class="text-capitalize btn bg-opacity-75 dropdown-toggle text-white btn-outline-light" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="background:var(--gradientColor)">
                              {{ request()->get('user') != null ? (request()->get('user') == 'admin' ? 'Admin' : 'Kontributor') : 'all' }}
                            </button>
                            <div class="dropdown-menu">
                              <a class="dropdown-item" href="{{ route('index.forum', ['user' => null, 'category' => request()->get('category') ?? null]) }}">All</a>
                              <a class="dropdown-item" href="{{ route('index.forum', ['user' => 'admin', 'category' => request()->get('category') ?? null]) }}">Admin</a>
                              <a class="dropdown-item" href="{{ route('index.forum', ['user' => 'member', 'category' => request()->get('category') ?? null]) }}">Kontributor</a>
                            </div>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="text-capitalize btn bg-opacity-75 dropdown-toggle text-white btn-outline-light" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="background:var(--gradientColor)">
                              {{ request()->get('category') ?? 'All' }}
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="{{ route('index.forum', ['user' => request()->get('user') ?? null, 'category' => null]) }}">All</a>
                                @foreach ($dropDownDataCategories as $category)
                                <a class="dropdown-item" href="{{ route('index.forum', ['user' => request()->get('user') ?? null, 'category' => $category->slug ?? '']) }}">{{ $category->name ?? '-' }}</a>
                                @endforeach
                            </div>
                        </div>
                    </div>
                    {{-- <a href="{{url('/panel')}}" class="blue-btn default-btn">Sign in Sebagai Kontributor &nbsp; <i class="fas fa-arrow-right"></i></a> --}}
                </div>
            </div>
            <div class="row justify-content-center">
                @foreach($articles as $article)
                    <div class="col-lg-4 col-md-6 col-12 mb-5">
                        <div class="single-blog-post">
                            <div class="image">
                                <a href="{{route('detail.forum',['slug' =>$article->slug])}}" class="d-block">
                                    <span class="position-absolute user-type">{{ strtolower(optional(optional(optional($article->user)->roles)->first())->name) === 'admin' ? 'Admin' : 'Kontributor' }}</span>
                                    <img src="{{ url($article->imageUrl) }}" alt="blog">
                                </a>
                            </div>
                            <div class="content">
                                <ul class="meta">
                                    <li><i class="ri-time-line"></i> {{$article->created_at->format('d M Y')}}</li>
                                    <li><i class="ri-message-2-line"></i> <a
                                            href="{{route('detail.forum',['slug' =>$article->slug])}}">{{$article->comments->count()}}</a></li>
                                </ul>
                                <h3>
                                    <a href="{{route('detail.forum',['slug' =>$article->slug])}}">{{$article->title}}</a>
                                </h3>
                                <p class="max-description">{!! Str::limit(strip_tags($article->content),100,'...') !!}</p>
                                <div class="d-block text-center">
                                    <a href="{{route('detail.forum',['slug' => $article->slug])}}" class="blue-btn w-100 text-center default-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
            {{ $articles->appends(request()->query())->links() }}
        </div>
    </div>
    <!-- End Blog Area -->
@endsection
