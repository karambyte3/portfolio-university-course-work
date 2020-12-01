// https://easings.net/  -  easing effects for jQuery UI

$(function () {
    $('a.hero-scroll-down').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 1000, 'easeInOutQuart');
    });
});
