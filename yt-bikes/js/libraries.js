$(function () {
    // libraries init

    // slick slider initialization
    $('.slick-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        swipeToSlide: true,
        // autoplay: true,
        prevArrow: '<i class="fa fa-chevron-left prev-arrow"></i>',      
        nextArrow: '<i class="fa fa-chevron-right next-arrow"></i>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: true
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    arrows: true
                }
            }
        ]
    });

    // parralax rellax library initialization
    var rellax = new Rellax('.rellax', {
        wrapper:'.main',
        center: false
    });

    // Intense gallery inspect images library initalization
    var inspectableImages = document.querySelectorAll('.inspectable-img');
        Intense(inspectableImages);

})