@extends('landing-page.layout')

@section('title','Complain')

@section('custom-js')
<script src="https://cdnjs.cloudflare.com/ajax/libs/datepicker/1.0.10/datepicker.min.js" integrity="sha512-RCgrAvvoLpP7KVgTkTctrUdv7C6t7Un3p1iaoPr1++3pybCyCsCZZN7QEHMZTcJTmcJ7jzexTO+eFpHk4OCFAg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>
    $('[data-toggle="datepicker"]').datepicker({
        format: 'yyyy-mm-dd',
        autoHide: true,
        autoPick: true
    });

    $('#reload-captcha').click(function () {
        $('#captcha-img img').attr('src', '{{ captcha_src("flat") }}' + Math.random());
    });
</script>
@endsection

@section('custom-css')
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/datepicker/1.0.10/datepicker.min.css" integrity="sha512-YdYyWQf8AS4WSB0WWdc3FbQ3Ypdm0QCWD2k4hgfqbQbRCJBEgX0iAegkl2S1Evma5ImaVXLBeUkIlP6hQ1eYKQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
@endsection

@section('main-content')
<div id="waButton"></div>
    <div class="page-title-area">
        <div class="container">
            <div class="page-title-content">
                <h2>Saran dan Aduan</h2>
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

    <div class="contact-info-area ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="contact-form">
                        @include('landing-page._part.flash-message')

                        <form id="form-complain" method="POST" action="{{url('/complain')}}" enctype="multipart/form-data">
                            @csrf
                            {{-- <div class="btn-group w-100 pb-5" role="group">
                                <input value="pengaduan" type="radio" class="btn-check" name="type" id="pengaduan" autocomplete="off" checked="">
                                <label class="btn btn-outline-danger" for="pengaduan">Pengaduan</label>

                                <input value="aspirasi" type="radio" class="btn-check" name="type" id="aspirasi" autocomplete="off">
                                <label class="btn btn-outline-danger" for="aspirasi">Aspirasi</label>

                                <input value="permintaan informasi" type="radio" class="btn-check" name="type" id="informasi" autocomplete="off">
                                <label class="btn btn-outline-danger" for="informasi">Permintaan Informasi</label>
                            </div> --}}

                            <div class="row">

                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <input data-toggle="datepicker" name="date" class="form-control" id="" required="" data-error="Please enter the date" placeholder="Eg: 11/02/2022">
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <input type="text" name="location" class="form-control" id="" required="" data-error="Please enter your email" placeholder="Lokasi kejadian">
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>



                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <div class="form-group">
                                        <textarea name="body" id="message" class="form-control" cols="30" rows="6" required="" data-error="Please enter your message" placeholder="Enter message..."></textarea>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <div class="form-group">
                                        <input type="file" class="form-control h-100" name="file" accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps,application/pdf">
                                    </div>
                                </div>

                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <div class="form-group mt-3 mb-3">
                                        <label>Kode Keamanan <span class="text-danger">*</span></label>
                                        <div class="d-flex align-items-center gap-3">
                                            <div class="captcha-box d-flex align-items-center">
                                                <span id="captcha-img">{!! captcha_img('flat') !!}</span>
                                                <button type="button" class="btn btn-sm btn-light border ms-2" id="reload-captcha" title="Refresh Captcha">
                                                    <i class="ri-refresh-line"></i>
                                                </button>
                                            </div>
                                            <input type="text" name="captcha" class="form-control" placeholder="Masukkan kode captcha" required style="max-width: 200px;">
                                        </div>
                                        @error('captcha')
                                            <div class="text-danger small mt-1">{{ $message }}</div>
                                        @enderror
                                    </div>
                                </div>


                                <div class=" d-flex justify-content-between align-items-center">

                                    <button type="submit" class="btn btn-danger btn-lg">Lapor!</button>
                                </div>


                            </div>
                        </form>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-6">

                    <div class="contact-info-inner" style="background: white">
                        <div class="row justify-content-center">
                            <a href="http://lapor.go.id">
                                <div class="single-contact-info-box">
                                    <img src="{{ asset('assets/img/lapor.png') }}" alt="">
                                    <button class="btn bg-danger text-white mt-3">Aduan Lanjutan &nbsp;<i class="fas fa-arrow-right"></i> </button>
                                </div>
                            </a>
                        </div>
                    </div>



                </div>
            </div>


        </div>
    </div>



@endsection
