@extends('landing-page.layout')

@section('title',$article->title)

@section('main-content')
<div id="waButton"></div>

    <!-- Start Page Title Area -->
    <div class="page-title-area">
        <div class="container">
            <div class="page-title-content">
                <h2>{{$article->title}}</h2>

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
    </div>
    <!-- End Page Title Area -->

    <!-- Start Blog Details Area -->
    <div class="blog-details-area ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <div class="blog-details-desc">
                        <div class='article-image mb-2'>
                            @if($article->imageUrl != 'assets/img/blog/blog1.jpg')
                            <div>
                                <img src="{{ $article->imageUrl }}" alt="blog-details">
                            </div>
                            @endif
                        </div>
                        <style>
                            .article-image-preview a {
                                position: relative;
                                transition: opacity 0.3s ease-in-out;
                            }

                            .article-image-preview a::before {
                                content: "";
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;
                                background-color: rgba(0, 0, 0, 0.5);
                                opacity: 0;
                                /* Initially transparent */
                                pointer-events: none;
                                /* Allow interactions with underlying content */
                                transition: opacity 0.3s ease-in-out;
                            }
                            .article-image-preview a::after {
                                position: absolute;
                                top: 50%;
                                left: 50%;
                                width: 2em;
                                height: 2em;
                                transform: translate(-50%, -50%);
                                opacity: 0;
                                content: url('data:image/svg+xml; urf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path></svg>');
                                transition: opacity 0.3s ease-in-out;
                                filter: invert(1)
                            }
                            .article-image-preview a:hover::before,
                            .article-image-preview a:hover::after {
                                opacity: 1;
                            }
                        </style>
                        <div class="d-flex w-100 gap-2 article-image-preview" style="max-height:12em; overflow:hidden;">
                        @for ($i = 1; $i <= 5; $i++)
                        {{-- limit only 5 image --}}
                        @php $methodAsString = 'ImageUrl'.$i @endphp
                        @if ($i == 1)
                            {{-- first iteration --}}
                            @if ($article->imageUrl != 'assets/img/blog/blog1.jpg')
                            {{-- skip default image --}}
                            <a href="{{ url($article->imageUrl) }}" target="_blank">
                                <img src="{{ url($article->imageUrl) }}" alt="blog-details" style="max-height:12em">
                            </a>
                            @endif
                        @else
                            @if ($article->$methodAsString != 'assets/img/blog/blog1.jpg')
                            {{-- skip default image --}}
                            <a href="{{ url($article->$methodAsString) }}" target="_blank">
                                <img src="{{ url($article->$methodAsString) }}" alt="blog-details" style="max-height:12em">
                            </a>
                            @endif
                        @endif
                        @endfor
                        </div>
                        <div class="article-content">
                            <div class="entry-meta">
                                <ul>
                                    <li><i class="ri-calendar-2-line"></i>{{$article->created_at->format('D-m-y')}}</li>
                                    <li><i class="ri-message-2-line"></i><a
                                            href="#comments">({{$article->comments->count()}}) Comments</a></li>
                                    <li><i class="ri-admin-fill"></i> <a href="#" onclick="reportArticle()" data-id="{{$article->id}}">Report article</a></li>
                                </ul>
                            </div>
                            <h4>{{$article->title}}</h4>
                            <p>
                                {!! $article->content !!}
                            </p>
                        </div>
                        <div class="article-footer">
                            <div class="post-author-meta">
                                <div class="d-flex align-items-center">
                                    <img src="{{$article->user->avatar()}}" alt="user">
                                    <div class="title">
                                        <span class="name">By <a href="#">{{$article->user->name}}</a></span>
                                        <span class="date">{{$article->created_at->format('D-m-y')}}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="article-share">
                                <ul class="social">
                                    <li><span>Share:</span></li>
                                    <li><a href="https://www.facebook.com/sharer/sharer.php?u={{ request()->fullUrl() }}?title={{ urlencode($article->title) }}" class="facebook" target="_blank"><i
                                                class="ri-facebook-fill"></i></a></li>
                                    <li><a href="https://www.linkedin.com/shareArticle?mini=true&url={{ request()->fullUrl() }}?title={{ urlencode($article->title) }}" class="twitter" target="_blank"><i
                                                class="ri-linkedin-fill"></i></a></li>
                                    <li><a href="https://twitter.com/intent/tweet?url={{ request()->fullUrl() }}?title={{ urlencode($article->title) }}" class="linkedin" target="_blank"><i
                                                class="ri-twitter-fill"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="comments-area" id="comments">
                            <h3 class="comments-title">{{$article->comments->count()}} Comments:</h3>
                            <ol class="comment-list">
                                <li class="comment">
                                    @foreach($article->comments as $comment)
                                        <div class="comment-body">
                                            <footer class="comment-meta">
                                                <div class="comment-author vcard">
                                                    <img
                                                        src="{{\App\Helpers\AppHelper::getProfileImage($comment->name)}}"
                                                        class="avatar" alt="user">
                                                    <b class="fn">{{$comment->name}}</b>
                                                </div>
                                                <div class="comment-metadata">
                                                    <span>{{$comment->created_at->diffForHumans()}}</span>
                                                </div>
                                            </footer>
                                            <div class="comment-content">
                                                <p>
                                                    {!! strip_tags($comment->body) !!}
                                                </p>
                                            </div>
                                        </div>
                                    @endforeach
                                </li>
                            </ol>
                            <div class="comment-respond">
                            <h3 class="comment-reply-title">Tinggalkan Komentar</h3>
                            <div id="comment-message" class="alert d-none"></div>
                            <form id="commentForm" class="comment-form">
                                @csrf
                                <input type="hidden" name="article_id" value="{{$article->id}}">
                                <p class="comment-form-author">
                                    <label>Nama <span class="required">*</span></label>
                                    <input type="text" id="author" placeholder="Nama Anda*" name="name"
                                           required="required">
                                </p>
                                <p class="comment-form-email">
                                    <label>Email <span class="required">*</span></label>
                                    <input type="email" id="email" placeholder="Email Anda*" name="email"
                                           required="required">
                                </p>
                                <p class="comment-form-comment">
                                    <label>Komentar</label>
                                    <textarea name="body" id="comment" cols="45" placeholder="Tulis komentar Anda..."
                                              rows="5" maxlength="65525" required="required"></textarea>
                                </p>
                                <div class="comment-form-comment d-flex align-items-center gap-3 mb-3">
                                    <div class="d-flex align-items-center">
                                        <img src="{{ captcha_src('flat') }}" alt="captcha" id="captcha-image" style="cursor:pointer;" title="Klik gambar untuk refresh">
                                    </div>
                                    <div class="">
                                        <input type="text" name="captcha" id="captcha" placeholder="Masukkan kode captcha" class="form-control" required>
                                        <div id="captcha-error" class="invalid-feedback text-danger small mt-1 d-none"></div>
                                    </div>
                                </div>
                                <input type="text" name="hp" style="position:absolute;left:-9999px;opacity:0" tabindex="-1" autocomplete="off">
                                <p class="form-submit">
                                    <button type="submit" id="submitBtn" class="submit">Kirim Komentar</button>
                                </p>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <aside class="widget-area">
                        {{-- <div class="widget widget_search">
                            <form class="search-form">
                                <label><input type="search" class="search-field" placeholder="Search..."></label>
                                <button type="submit"><i class="ri-search-2-line"></i></button>
                            </form>
                        </div> --}}
                        <div class="widget widget_pakap_posts_thumb">
                            <h3 class="widget-title">Latest Posts</h3>
                            @foreach($latest_article as $latest)
                            <article class="item">
                                <a href="{{route('detail.forum',['slug' =>$latest->slug])}}" class="thumb">
                                    <span class="fullimage cover bg1" style="background-image: url('{{ url($latest->imageUrl) }}')!important" role="img"></span></a>
                                <div class="info">
                                    <h4 class="title usmall">
                                        <a href="{{route('detail.forum',['slug' =>$latest->slug])}}">
                                            {{$latest->title}}
                                        </a></h4>
                                    <span class="date"><i class="ri-calendar-2-fill"></i>
                                        {{$latest->created_at->format('D-m-y')}}</span>
                                </div>
                            </article>
                            @endforeach
                        </div>
                        <div class="widget widget_categories">
                            <h3 class="widget-title">Categories</h3>
                            <ul>
                                @foreach($categories as $category)
                                <li><a href="#">{{$category->name}} <span class="post-count">({{$category->articles->count()}})</span></a>
                                </li>
                                @endforeach
                            </ul>
                        </div>
{{--                        <div class="widget widget_archive">--}}
{{--                            <h3 class="widget-title">Archives</h3>--}}
{{--                            <ul>--}}
{{--                                <li><a href="blog-right-sidebar.html">May 2020 (1)</a></li>--}}
{{--                                <li><a href="blog-right-sidebar.html">April 2020 (2)</a></li>--}}
{{--                                <li><a href="blog-right-sidebar.html">June 2020 (3)</a></li>--}}
{{--                            </ul>--}}
{{--                        </div>--}}
                    </aside>
                </div>
            </div>
        </div>
    </div>


    <!-- End Blog Area -->
    <div class="modal fade" id="report-article-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">

        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form action="{{route('report.forum',['id' => $article->id])}}" method="POST" id="report-form">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Report article</h5>
                    </div>
                    <div class="modal-body">
                        @csrf
                        <input type="hidden" value="{{$article->id}}" name="article_id">
                        <input type="hidden" value="{{auth()->id()}}" name="user_id">
                        <div class="form-group">
                            <label for="exampleInputPassword1">Alasan</label>
                            <textarea name="reason" id="" cols="20" rows="5" class="form-control"></textarea>
                        </div>
                        
                        <div class="form-group mt-3">
                            <label>Kode Keamanan <span class="text-danger">*</span></label>
                            <div class="d-flex align-items-center gap-2">
                                <span id="captcha-img-report">{!! captcha_img('flat') !!}</span>
                                <button type="button" class="btn btn-sm btn-light border" id="reload-captcha-report">
                                    <i class="ri-refresh-line"></i>
                                </button>
                            </div>
                            <input type="text" name="captcha" class="form-control mt-2" placeholder="Masukkan kode captcha" required>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" id="close-modal">Close
                        </button>
                        <button type="submit" class="btn btn-primary" id="submit-booking">Save changes</button>
                    </div>
                </form>
            </div>
        </div>
    </div>


@endsection
@section('custom-js')
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script>
        $(document).ready(function() {
            // Refresh Captcha
            $('#captcha-image').on('click', function () {
                $(this).attr('src', '{{ captcha_src("flat") }}' + Math.random());
            });

            $('#reload-captcha-report').click(function () {
                $('#captcha-img-report img').attr('src', '{{ captcha_src("flat") }}' + Math.random());
            });

            // Handle Submit AJAX Comment
            $('#commentForm').on('submit', function(e) {
                e.preventDefault();
                
                let form = $(this);
                let btn = $('#submitBtn');
                let msgBox = $('#comment-message');
                let captchaErr = $('#captcha-error');
                
                // Reset State
                btn.prop('disabled', true).text('Sedang mengirim...');
                msgBox.addClass('d-none').removeClass('alert-success alert-danger');
                captchaErr.addClass('d-none').text('');
                $('#captcha').removeClass('is-invalid');

                $.ajax({
                    url: "{{ route('store.comment', ['slug' => $article->slug]) }}",
                    method: "POST",
                    data: form.serialize(),
                    dataType: 'json',
                    success: function(response) {
                        msgBox.removeClass('d-none').addClass('alert-success').text(response.message || 'Komentar berhasil dikirim! Menunggu moderasi.');
                        form[0].reset();
                        $('#captcha-image').trigger('click');
                    },
                    error: function(xhr) {
                        let response = xhr.responseJSON;
                        let errorMessage = 'Terjadi kesalahan saat mengirim komentar.';
                        
                        if (response && response.message) {
                            errorMessage = response.message;
                        }

                        let errors = response ? response.errors : null;

                        if (errors && errors.captcha) {
                            $('#captcha').addClass('is-invalid');
                            captchaErr.removeClass('d-none').text(errors.captcha[0]);
                        } else {
                            msgBox.removeClass('d-none').addClass('alert-danger').text(errorMessage);
                        }
                        $('#captcha-image').trigger('click');
                    },
                    complete: function() {
                        btn.prop('disabled', false).text('Kirim Komentar');
                    }
                });
            });
        });

        $('#close-modal').on('click', function () {
            $('#report-article-modal').modal('toggle')
        });

        function reportArticle(){
            $('#report-article-modal').modal('show')
        }


        $("#report-form").submit(function(e) {

            e.preventDefault(); // avoid to execute the actual submit of the form.

            var form = $(this);
            var actionUrl = form.attr('action');

            $.ajax({
                type: "POST",
                url: actionUrl,
                data: form.serialize(), // serializes the form's elements.
                success: function (data) {
                    swal("Success!", "Forum telah dilaporkan!", "success");
                    $('#report-form').trigger("reset");
                    $('#report-article-modal').modal('toggle');
                    $('#reload-captcha-report').trigger('click');
                },
                error: function (xhr){
                    var res = xhr.responseJSON;
                    if (res && res.errors && res.errors.captcha) {
                        swal("Gagal!", res.errors.captcha[0], "error");
                    } else {
                        swal("Gagal!", "Gagal mengirim laporan!", "error");
                    }
                    $('#reload-captcha-report').trigger('click');
                }
            });

        });

    </script>
@endsection
