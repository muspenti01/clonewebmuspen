<!-- Start Footer Style With Black Color Area -->
<div class="footer-area-style-with-black-color" style="padding-top:50px">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-6 col-6">
                <div class="single-footer-widget">
                    <h3>Visit Us</h3>
                    {!! Setting::get('address_footer') !!}
                </div>
            </div>
            <div class="col-lg-1 col-md-6 col-s6">
            </div>
            <div class="col-lg-3 col-md-3 col--6">
            </div>
            <div class="col-lg-2 col-md-3 col-6 mb-2">
                <iframe width="100%" src="{{ Setting::get('maps_address') }}" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="col-lg-3 col-md-6 col-6">
                <div class="single-footer-widget">
                    <h3>Social Media</h3>
                    <ul class="social-links">
                        <li><a href="{{ Setting::get('tiktok') }}" target="_blank"><i class="fab fa-tiktok"></i></a></li>
                        <li><a href="{{ Setting::get('facebook') }}" target="_blank"><i class="fab fa-facebook"></i></a></li>
                        <li><a href="{{ Setting::get('twitter') }}" target="_blank"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="{{ Setting::get('instagram') }}" target="_blank"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="{{ Setting::get('youtube') }}" target="_blank"><i class="fab fa-youtube"></i></a></li>
                    </ul>
                    <div class="d-block mt-4">
                        <a href="/saran-aduan" class="blue-btn default-btn text-white fw-semibold">Saran dan Aduan</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <p>&copy; Museum Penerangan RI 2022</p>
        </div>
    </div>


</div>
<!-- End Footer Style With Black Color Area -->

<div class="go-top"><i class="ri-arrow-up-s-line"></i></div>
