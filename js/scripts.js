/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

// Initiate the wowjs
new WOW().init();

// Sticky Navbar
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.custom-navbar').addClass('shadow-sm').css('top', '0px');
    } else {
        $('.custom-navbar').removeClass('navtop').css('top', '-100px');
    }
});