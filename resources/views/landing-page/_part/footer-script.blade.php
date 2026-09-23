<!-- Link of JS files -->
<script src="{{asset('assets/js/jquery.min.js')}}"></script>
<script src="{{asset('assets/js/bootstrap.bundle.min.js')}}"></script>
<script src="{{asset('assets/js/owl.carousel.min.js')}}"></script>
<script src="{{asset('assets/js/swiper-bundle.min.js')}}"></script>
<script src="{{asset('assets/js/magnific-popup.min.js')}}"></script>
<script src="{{asset('assets/js/meanmenu.min.js')}}"></script>
<script src="{{asset('assets/js/appear.min.js')}}"></script>
<script src="{{asset('assets/js/odometer.min.js')}}"></script>
<script src="{{asset('assets/js/form-validator.min.js')}}"></script>
<script src="{{asset('assets/js/contact-form-script.js')}}"></script>
<script src="{{asset('assets/js/ajaxchimp.min.js')}}"></script>
<script src="{{asset('assets/js/aos.js')}}"></script>
<script src="{{asset('assets/js/main.js')}}"></script>
<script type="text/javascript" src="{{asset('assets/js/floating-wpp.min.js')}}"></script>
<script>
    paginationWidth = $('.swiper-pagination').width();
    $('.swiper-button-prev2').css( { "margin-right" : paginationWidth });
</script>
<script type="text/javascript">
    $(function () {
        $('#waButton').floatingWhatsApp({
            phone: '628118132121',
            popupMessage: 'Halo, Ada yang bisa dibantu?',
            message: "Hi, Muspen!",
            showPopup: true,
            showOnIE: false,
            headerTitle: 'halo',
            headerColor: '#33B2F1',
            size:'50px',
            position:'right',
            buttonImage: '<img src="/assets/img/wa.svg" />'
        });
    });
</script>
@yield('custom-js')
