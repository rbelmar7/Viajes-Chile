$(window).scroll(function () {
    var navbar = $('.navbar');
    if ($(window).scrollTop() > 50) {
        navbar.addClass('scrolled');
    } else {
        navbar.removeClass('scrolled');
    }
});
$(document).ready(function () {
    $('a.nav-link').on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - $('.navbar').outerHeight()
            }, 900, function () {
                window.location.hash = hash;
            });
        }
    });
});
