$(window).scroll(function () {
    var navbar = $('.navbar');
    if ($(window).scrollTop() > 50) {
        navbar.addClass('scrolled');
    } else {
        navbar.removeClass('scrolled');
    }
});