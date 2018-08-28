$(document).ready(function () {
    var header = $('header');
    var navbar = $('.navbar');
    var fixed = true;
    var link = $('.navbar .nav-link');
    var up = $('.up');
    var show = true;
    var countbox = "#counts";
    $(window).on("scroll load resize", function () {
        if (!show) return false;
        var w_top = $(window).scrollTop();
        var e_top = $(countbox).offset().top;
        var w_height = $(window).height();
        var d_height = $(document).height();
        var e_height = $(countbox).outerHeight();
        if (w_top + 600 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $(".spincrement").spincrement({
                from: 0,
                to: false,
                // thousandSeparator: "",
                duration: 3000
            });
            show = false;
        }
    });

    function navbarfixed() {
        if (scrollY >= header.innerHeight() && !fixed) {
            fixed = true;
            navbar.addClass('fixed-top fix').css('opacity', 0).animate({
                opacity: 1
            }, 700);
            header.css({
                paddingTop: navbar.innerHeight()
            });
        } else if (scrollY <= header.innerHeight() && fixed) {
            fixed = false;
            navbar.animate({
                opacity: 0,
            }, 700, function () {
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
        } else {
            up.fadeOut();
        }
    });
    up.on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
    });
    // $('.spincrement').spincrement({
    //     from: 0,
    //     duration: 4000,
    // });












});