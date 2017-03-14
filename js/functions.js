$(document).ready(function() {
    togglMenu();
    AOS.init();
});

function togglMenu() {
    $('.mobile-menu').on('click', function() {
        var current = $('.navigation,.mobile-menu__bars').hasClass('is-active');
        if (current) {
            $('.navigation, .mobile-menu__bars').removeClass('is-active');
        } else {
            $('.navigation,.mobile-menu__bars').addClass('is-active');
        }
    });
}
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 5) {
        $(".header-menu").addClass("is-waterfall");
        $('.navigation-menu__list').addClass('is-black');
    } else {
        $(".header-menu").removeClass("is-waterfall");
        $('.navigation-menu__list').removeClass('is-black');
    }
});
$(document).ready(function() {
    $('#test-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });
});
$(document).ready(function() {
    $('#banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });
});