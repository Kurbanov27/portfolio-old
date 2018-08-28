$(document).ready(function () {
    var video = document.querySelector('video');
    var header = $('header');
    var navbar = $('.navbar');
    var fixed = true;
    var link = $('.navbar .nav-link');
    var up = $('.up');
    $('.video .fa').on('click', function () {
        video.play();
        if (video.play()) {
            $('.video .box').hide();
        }
    });
    $('.video').on('dblclick', function () {
        video.pause();
    });
    $('.video').on('click', function () {
        video.play();
    });

    $('.owl').owlCarousel({
        items: 4,
        margin: 30,
        loop: true,
        responsiveClass: true,
        autoPlay: true,
        autoPLayTimeout: 2000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            }
        }
    });

    $('.card').on('click', function () {
        $('.popular').hide();
        $('.card').removeClass('card-active');
        $(this).toggleClass('card-active');
        if ($(this).hasClass('card-active')) {
            $(this).find('.popular').show();
        }
    });
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoPlay: true,

    });
    
    function navbarfixed() {
        if (scrollY >= header.innerHeight() && !fixed) {
            fixed = true;
            navbar.addClass('fixed-top fix').css('opacity', 0).animate({
                opacity: 1
            },700);
            header.css({
                paddingTop: navbar.innerHeight()
            });
        }
        else if(scrollY <= header.innerHeight() && fixed) {
            fixed = false;
            navbar.animate({
                opacity:0,
            },700, function () {
                navbar.removeClass('fixed-top fix');
                navbar.removeAttr('style');
                header.removeAttr('style');
            });

        }
    }
    $(window).on('scroll', navbarfixed);
    navbarfixed();
    
    new WOW().init();
    
    link.on('click', function (e) {
        e.preventDefault();
        var href = $(this).attr('href');
        var target = $(href).offset().top;
        
        $('html, body').animate({
            scrollTop: target - navbar.innerHeight()
        }, 1000);
    });
    up.hide();
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 1000) {
            up.fadeIn();
        }
        else {
            up.fadeOut();
        }
    });
    up.on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        },1500);
    });
    
});