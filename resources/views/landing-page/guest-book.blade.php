<!doctype html>
<html lang="zxx">
<head>
    <title>Guest Book - {{Setting::get('site_title')}}</title>
    @include('landing-page._part.head', ['title' => 'Guest book'])

    <style>
      .nav {
        background: linear-gradient(0deg, #C25EA0, #EE6B90);
      }
      .nav img {
        height: 3.5rem;
        opacity: 0.7;
      }
      .nav .title-support {
        opacity: 0.7;
        color: white;
        font-size: 0.8rem;
        letter-spacing: 2px;
      }
      body {
        background-color: #edf2f9;
        /* background-color: black; */
      }
    
      .shadow-right-white-black {
        /* background: white; */
        position: relative;
      }
      .shadow-right-white-black:before {
        content: "";
        z-index: -1;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        /* background: linear-gradient(to right, #ffffff 0%, #c5d3e6 100% ); */
        /* transform: translate3d(0px, 20px, 0) scale(0.95); */
        filter: blur(12px);
        opacity: 1;
        transition: opacity 0.3s;
      }
    
      /* 
      * Provided by the Generator.
      * Prevents issues when the parent creates a 
      * stacking context. (For example, using the transform
      * property )
      */
      .shadow-right-white-black::after {
        content: "";
        z-index: -1;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: inherit;
        border-radius: 10px;
      }
      .card {
        border-radius: 10px;
        background: linear-gradient(to left, hsl(216 50% 98% / 1) 0%, hsl(215 50% 94% / 1) 100% );
        min-width: 40vw;
      }
      .form-control {
        /* background: linear-gradient(white, white) padding-box, linear-gradient(to right, darkblue, darkorchid) border-box;
        border-radius: 1em;
        border: 4px solid transparent !important; */
        background: radial-gradient(circle at 100% 100%, #ffffff 0, #ffffff 3px, transparent 3px) 0% 0%/6px 6px no-repeat,
                radial-gradient(circle at 0 100%, #ffffff 0, #ffffff 3px, transparent 3px) 100% 0%/6px 6px no-repeat,
                radial-gradient(circle at 100% 0, #ffffff 0, #ffffff 3px, transparent 3px) 0% 100%/6px 6px no-repeat,
                radial-gradient(circle at 0 0, #ffffff 0, #ffffff 3px, transparent 3px) 100% 100%/6px 6px no-repeat,
                linear-gradient(#ffffff, #ffffff) 50% 50%/calc(100% - 6px) calc(100% - 12px) no-repeat,
                linear-gradient(#ffffff, #ffffff) 50% 50%/calc(100% - 12px) calc(100% - 6px) no-repeat,
                linear-gradient(0deg, #ffffff 0%, #edf2f9 100%);
        border-radius: 6px;
        padding: 3px;
        box-sizing: border-box;
      }
    
      .btn-type {
          width: 130px;
    
          /* background: linear-gradient(to left, hsl(216 50% 98% / 1) 0%, hsl(215 50% 94% / 1) 100% ); */
          background: linear-gradient(to left, hsl(323.36deg 100% 93.15%) 0%, hsl(334.21deg 100% 80.58%) 100% );
          background: hsl(334.21deg 100% 87%) 100%;
          border: 0;
          box-shadow: 0px 0px 5px 0px #dfe2e3;
    
          /* background: radial-gradient(circle at 100% 100%, #ffffff 0, #ffffff 3px, transparent 3px) 0% 0%/6px 6px no-repeat,
                  radial-gradient(circle at 0 100%, #ffffff 0, #ffffff 3px, transparent 3px) 100% 0%/6px 6px no-repeat,
                  radial-gradient(circle at 100% 0, #ffffff 0, #ffffff 3px, transparent 3px) 0% 100%/6px 6px no-repeat,
                  radial-gradient(circle at 0 0, #ffffff 0, #ffffff 3px, transparent 3px) 100% 100%/6px 6px no-repeat,
                  linear-gradient(#ffffff, #ffffff) 50% 50%/calc(100% - 6px) calc(100% - 12px) no-repeat,
                  linear-gradient(#ffffff, #ffffff) 50% 50%/calc(100% - 12px) calc(100% - 6px) no-repeat,
                  linear-gradient(0deg, #ffffff 0%, #edf2f9 100%); */
          border-radius: 6px;
          padding: 3px;
          box-sizing: border-box;
        }
        .btn-type:not(.collapsed) {
          /* background: linear-gradient(to left, hsl(216deg 100% 97.76%) 0%, hsl(215 36% 88% / 1) 100% ); */
        }
        .btn-before, .btn-after {
          background: linear-gradient(to right, rgb(99 207 255) 0%, rgb(40, 104, 201) 100%);
          border-radius: 20px;
          border: 0;
          box-shadow: 0px 0px 16px 0px #003d7245;
          color: #ffffffbf;
        }
        .form-check-input{
            aspect-ratio: 1/1;
            width: 1.5rem;
        }
        .form-check-input.form-check-input:checked{
            border-color: #49d2db;
            background-color: #49d2db;
        }
          #qrcodePlace {
            height: 50%;
            width: 50%;
            box-shadow: 0px 0px 9px 3px #ccd1f3;
            border-radius: 13px;
          }

          .btn-type.btn-pelajar,.btn-umum, .btn-kelompok {
            background: hsl(215deg 72.05% 50.59%) 100%;
            color: white;
          }

          .btn-type.btn-pelajar:hover,.btn-umum:hover, .btn-kelompok:hover {
            color: #dfdfdf;
          }
    </style>
    <style>
      /* Hilangkan input radio asli */
      .tingkatan-option input[type="radio"] {
        display: none;
      }
      
      /* Atur tampilan dengan Flexbox */
      .tingkatan-group {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
      
      /* Setiap opsi memiliki lebar sama */
      .tingkatan-option {
        flex: 1;
        text-align: center;
        margin: 0 5px;
        font-size: 16px;
        cursor: pointer;
      }
      
      /* Atur tampilan .custom-check agar sejajar */
      .custom-check {
        display: inline-flex;
        align-items: center;
        gap: 5px;
      }
      
      /* Tanda centang (default tersembunyi) */
      .checkmark {
        display: none;
        font-size: 18px;
        font-weight: bold;
        color: #007bff;
      }
      
      /* Munculkan tanda centang saat dipilih */
      .tingkatan-option input[type="radio"]:checked + .custom-check .checkmark {
        display: inline;
      }

      .form-control-feedback input {
        padding: 0px 20px;
        font-style: italic;
      }

      .custom-submit-button {
    background-color: #c7d9c0; /* Light green background */
    border: none; /* Remove border */
    border-radius: 20px; /* Rounded corners */
    min-width: 150px;
    color: #1f4a0d; /* Text color */
    padding: 5px 20px; /* Padding for size */
    font-size: 16px; /* Text size */
    cursor: pointer; /* Pointer on hover */
    font-weight: bold;
    transition: background-color 0.3s ease; /* Smooth background change */
}

.mt-30 {
  margin-top: 30px;
}

.custom-submit-button:hover {
    background-color: #a7c3a0; /* Darker green on hover */
}

.buku-tamu-left-text h2 {
  font-size: 42px;
}

.buku-tamu-left-text h4 {
  font-size: 28px;
  letter-spacing: 2px;
}
.mb-30 {
  margin-bottom: 30px;
}
body {
  background-image: url('{{ asset("bg/guestbook.png") }}');
}

      </style>
</head>
<body>
    <div class="preloader d-none">
      <div class="loading">
        <img class="animate__animated animate__slow animate__infinite animate__fadeIn" src="{{asset('assets/img/logo-hitam.png')}}" width="150">
      </div>
    </div>


<div class="d-flex flex-column vh-100">
  {{-- <div class="nav bg-black d-flex justify-content-between align-items-center">
    <div class="logo ps-3">
      <a href="{{ url('/') }}">
        <img src="{{ asset('assets/img/black-logo.png') }}" alt="logo" class="">
      </a>
    </div>
    <div class="title-support fw-bold pe-4 py-2">GUESTBOOK</div>
  </div> --}}
  <div class="d-lg-flex justify-content-lg-around mt-30">
    <div class="flex-1 vh-100 d-lg-flex d-none justify-content-center align-items-center">
      <div class="buku-tamu-left-text">
        <a href="{{ url('/') }}" class="mb-3 d-block">
          <img src="{{ asset('assets/img/black-logo.png') }}" alt="logo">
        </a>
        <h2 class="fw-bold text-white">Halo Muspeners</h2>
        <h4 class="fw-bold text-white">Isi buku tamu dulu ya!</h4>

      </div>
    </div>
    <div class="d-lg-flex flex-lg-1 justify-content-lg-end h-100">
      <div class="d-lg-flex justify-content-lg-center align-items-lg-center flex-lg-wrap">
        <div class="p-4">
          <div class='text-end mb-30'>
            <h3 class='fs-4 h3 lh-1 mb-1 text-white'>       <i class="fa fa-book-open me-2"></i>
               Guestbook</h3>
          </div>
          <div class="card border-0 shadow-right-white-black mt-3">
            <div class="card-body m-4">
              {{-- <div class="text-center mb-4">
                <h4>Muspen Guestbook</h4>
              </div> --}}
              @if($errors->any())
              <div class="alert alert-error">
                {!! implode('', $errors->all('<div>:message</div>')) !!}
              </div>
              @endif
              <div class="d-flex column align-items-center gap-2 justify-content-center">
                <label for='visitor_type_pelajar'
                        class="btn btn-type btn-pelajar shadow-right-white-black collapsed py-2 w-100"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#selectTypePelajar"
                        aria-expanded="false"
                        aria-controls="selectTypePelajar">
                  <div class='text-center'>
                    <span class="mb-0">
                      <i class="fa-solid fa-graduation-cap d-block mb-1"></i>                    
                      Pelajar
                    </span>
                  </div>
                </label>
                <label for='visitor_type_umum'
                        class="btn btn-type btn-umum shadow-right-white-black collapsed py-2 w-100"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#selectTypeUmum"
                        aria-expanded="false"
                        aria-controls="selectTypeUmum">
                  <div class='text-center'>
                    <span class="mb-0">
                      <i class="fa-solid fa-users d-block mb-1"></i>
                      Umum
                    </span>
                  </div>
                </label>
                <label for="visitor_type_tourist"
                        class="btn btn-type btn-kelompok shadow-right-white-black collapsed py-2 w-100"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#selectTypeTourist"
                        aria-expanded="false"
                        aria-controls="selectTypeTourist">
                  <div class='text-center'>
                    <span class="mb-0">
                      <i class="fa-solid fa-plane-arrival d-block mb-1"></i>
                      Tourist
                    </span>
                  </div>
                </label>
              </div>
              <div class="accordion" id="selectType">
                <div id="selectTypePelajar" class="collapse show mt-4" data-bs-parent="#selectType">
                  <form id="formTypePelajar" action="{{ route('guest_book.attend') }}" method="post" enctype="multipart/form-data">
                    @csrf
                    <input type="radio" name="visitor_type" id="visitor_type_pelajar" value="pelajar" hidden>
                  
                    <!-- Tingkatan Section -->
                    <div class="mb-3">
                      <label class="form-label">Tingkatan</label>
                      <div class="d-flex justify-content-between tingkatan-group">
                        <label class="tingkatan-option">
                          <input type="radio" name="school" value="SD" required />
                          <span class="custom-check fw-bold">
                            <span class="checkmark fas fa-check"></span> SD
                          </span>
                        </label>
                        <label class="tingkatan-option">
                          <input type="radio" name="school" value="SMP" />
                          <span class="custom-check fw-bold">
                            <span class="checkmark fas fa-check"></span> SMP
                          </span>
                        </label>
                        <label class="tingkatan-option">
                          <input type="radio" name="school" value="SMA" />
                          <span class="custom-check fw-bold">
                            <span class="checkmark fas fa-check"></span> SMA
                          </span>
                        </label>
                        <label class="tingkatan-option">
                          <input type="radio" name="school" value="UNIVERSITAS" />
                          <span class="custom-check fw-bold">
                            <span class="checkmark fas fa-check"></span> UNIVERSITAS
                          </span>
                        </label>
                      </div>
                    </div>
                  
                    <!-- Nama -->
                    <div class="mb-3">
                      <label class="form-label mb-0">Nama <span class="text-danger">*</span></label>
                      <div class="form-control-feedback form-control-feedback-start">
                        <input name="name" type="text" class="form-control" placeholder="Nama" required>
                      </div>
                    </div>
                  
                    <!-- Nama Kelompok -->
                    <div class="mb-3">
                      <label class="form-label mb-0">Nama Kelompok</label>
                      <div class="form-control-feedback form-control-feedback-start">
                        <input name="group_name" type="text" class="form-control" placeholder="Nama Kelompok">
                      </div>
                    </div>
                  
                    <!-- Telp -->
                    <div class="mb-3">
                      <label class="form-label mb-0">Telp <span class="text-danger">*</span></label>
                      <div class="form-control-feedback form-control-feedback-start">
                        <input name="no_whatsapp" type="text" class="form-control" placeholder="No Handphone/WA" required>
                      </div>
                    </div>
                  
                    <!-- Email -->
                    <div class="mb-3">
                      <label class="form-label mb-0">Email <span class="text-danger">*</span></label>
                      <div class="form-control-feedback form-control-feedback-start">
                        <input name="email" type="email" class="form-control" placeholder="Email" required>
                      </div>
                    </div>
                  
                    <!-- Jumlah Pengunjung -->
                    <div class="mb-3">
                      <label class="form-label mb-0">Jumlah Pengunjung</label>
                      <div class="form-control-feedback form-control-feedback-start">
                        <input name="group_member_total" min="1" value="1" type="number" class="form-control" placeholder="Total" required>
                      </div>
                    </div>

                    <div class="mb-3">
                        <label class="form-label mb-0">Kode Keamanan <span class="text-danger">*</span></label>
                        <div class="d-flex align-items-center gap-2 mb-2">
                             <span id="captcha-img-pelajar">{!! captcha_img('flat') !!}</span>
                             <button type="button" class="btn btn-sm btn-light border" id="reload-captcha-pelajar">
                                 <i class="fa fa-refresh"></i>
                             </button>
                        </div>
                        <input type="text" name="captcha" class="form-control" placeholder="Masukkan kode captcha" required>
                    </div>
                  
                    <!-- Submit Button -->
                    <div class="d-flex justify-content-end align-items-end mt-2">
                      <button class="custom-submit-button" type="submit">Submit</button>
                    </div>
                  </form>
                  
                </div>
                <div id="selectTypeUmum" class="collapse mt-4" data-bs-parent="#selectType">
                  <form id="formTypeUmum" action="{{ route('guest_book.attend') }}" method="post" enctype="multipart/form-data">
                    @csrf
                    <input type="radio" name="visitor_type" id="visitor_type_umum" value="umum" hidden>
                  
                    <!-- Nama -->
                    <div class="mb-3">
                      <label class="form-label mb-0">Nama <span class="text-danger">*</span></label>
                      <div class="form-control-feedback form-control-feedback-start">
                        <input name="name" type="text" class="form-control" placeholder="Nama" required>
                      </div>
                    </div>
                  
                    <!-- Asal -->
                    <div class="mb-3">
                      <label class="form-label mb-0">Asal <span class="text-danger">*</span></label>
                      <div class="form-control-feedback form-control-feedback-start">
                        <input name="origin" type="text" class="form-control" placeholder="Asal" required>
                      </div>
                    </div>
                  
                    <!-- Telp -->
                    <div class="mb-3">
                      <label class="form-label mb-0">Telp <span class="text-danger">*</span></label>
                      <div class="form-control-feedback form-control-feedback-start">
                        <input name="no_whatsapp" type="text" class="form-control" placeholder="No Handphone/WA" required>
                      </div>
                    </div>
                  
                    <!-- Email -->
                    <div class="mb-3">
                      <label class="form-label mb-0">Email <span class="text-danger">*</span></label>
                      <div class="form-control-feedback form-control-feedback-start">
                        <input name="email" type="email" class="form-control" placeholder="Email" required>
                      </div>
                    </div>
                  
                    <!-- Jumlah Pengunjung -->
                    <div class="mb-3">
                      <label class="form-label mb-0">Jumlah Pengunjung</label>
                      <div class="form-control-feedback form-control-feedback-start">
                        <input name="group_member_total" min="1" value="1" type="number" class="form-control" placeholder="Total" required>
                      </div>
                    </div>
                  
                    <div class="mb-3">
                        <label class="form-label mb-0">Kode Keamanan <span class="text-danger">*</span></label>
                        <div class="d-flex align-items-center gap-2 mb-2">
                             <span id="captcha-img-umum">{!! captcha_img('flat') !!}</span>
                             <button type="button" class="btn btn-sm btn-light border" id="reload-captcha-umum">
                                 <i class="fa fa-refresh"></i>
                             </button>
                        </div>
                        <input type="text" name="captcha" class="form-control" placeholder="Masukkan kode captcha" required>
                    </div>

                    <!-- Submit Button -->
                    <div class="d-flex justify-content-end align-items-end mt-2 px-3">
                      <button class='custom-submit-button' type="submit">Submit</button>
                    </div>
                  </form>
                  
                </div>
                <div id="selectTypeTourist" class="collapse mt-4" data-bs-parent="#selectType">
                  <form id="formTypeIndividu" action="{{ route('guest_book.attend') }}" method="post" enctype="multipart/form-data">
                    @csrf
                    <input type="radio" name="visitor_type" id="visitor_type_tourist" value="tourist" hidden>
                  
                    <!-- Nama -->
                    <div class="mb-3">
                      <label class="form-label mb-0">Nama <span class="text-danger">*</span></label>
                      <div class="form-control-feedback form-control-feedback-start">
                        <input name="name" type="text" class="form-control" placeholder="Nama" required>
                      </div>
                    </div>
                  
                    <!-- Asal -->
                    <div class="mb-3">
                      <label class="form-label mb-0">Asal <span class="text-danger">*</span></label>
                      <div class="form-control-feedback form-control-feedback-start">
                        <input name="origin" type="text" class="form-control" placeholder="Asal" required>
                      </div>
                    </div>
                  
                    <!-- Jumlah Pengunjung -->
                    <div class="mb-3">
                      <label class="form-label mb-0">Jumlah Pengunjung <span class="text-danger">*</span></label>
                      <div class="form-control-feedback form-control-feedback-start">
                        <input name="group_member_total" min="1" value="1" type="number" class="form-control" placeholder="Total" required>
                      </div>
                    </div>
                  
                    <div class="mb-3">
                        <label class="form-label mb-0">Kode Keamanan <span class="text-danger">*</span></label>
                        <div class="d-flex align-items-center gap-2 mb-2">
                             <span id="captcha-img-tourist">{!! captcha_img('flat') !!}</span>
                             <button type="button" class="btn btn-sm btn-light border" id="reload-captcha-tourist">
                                 <i class="fa fa-refresh"></i>
                             </button>
                        </div>
                        <input type="text" name="captcha" class="form-control" placeholder="Masukkan kode captcha" required>
                    </div>

                    <!-- Submit Button -->
                    <div class="d-flex justify-content-end align-items-end mt-2 px-3">
                      <button class='custom-submit-button' type="submit">Submit</button>
                    </div>
                  </form>                
                </div>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    </div>
  </div>
</div>


{{-- @include('landing-page._part.footer') --}}

{{-- @include('landing-page._part.footer-script') --}}
<script src="{{ asset('assets/js/jquery.min.js') }}"></script>
<script src="{{ asset('assets/js/bootstrap.bundle.min.js') }}"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

<script>
  var name = "{{ session()->get('name') }}"

  document.addEventListener('DOMContentLoaded', function () {
    if (name != '') {
      Swal.fire({
        text: `Terma kasih ${name.toLowerCase()} sudah mengisi buku tamu.`,
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    }
    
    $('#reload-captcha-pelajar').click(function () {
        $('#captcha-img-pelajar img').attr('src', '{{ captcha_src("flat") }}' + Math.random());
    });
    $('#reload-captcha-umum').click(function () {
        $('#captcha-img-umum img').attr('src', '{{ captcha_src("flat") }}' + Math.random());
    });
    $('#reload-captcha-tourist').click(function () {
        $('#captcha-img-tourist img').attr('src', '{{ captcha_src("flat") }}' + Math.random());
    });
  })
</script>
</body>
</html>
