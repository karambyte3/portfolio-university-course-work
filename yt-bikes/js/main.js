$(function(){

    $('.play-video').on('click', function (e) {
        e.preventDefault();
        var $videoOverlay = $(this).closest('.video-overlay');
        var $iframe = $(this).closest('.video').find('iframe');
        var videoUrl = $iframe.attr('src');
        $videoOverlay.addClass('fade-out'); 
        
        $iframe.attr('src', videoUrl + '&autoplay=1');

        setTimeout(function () {
            $videoOverlay.addClass('d-none');
        }, 380);
    })

    window.headerParallaxInit = function() {
        var container = document.querySelector(".hero-background");
        container.style.backgroundPosition = "center " + (-100 + (($('.main')[0].scrollTop) * 0.7)) + "px";
    
        $('.main').scroll(function() {
          var scrolled = this.scrollTop;
          var parallaxEnd = container.clientHeight;
            if (!!container) {
                if (scrolled < parallaxEnd) {
                    container.style.backgroundPosition = "center " + (-100 + (scrolled * 0.7)) + "px";
                }
            }
        });
    };

    // $(window).on('load', function () {
    //     headerParallaxInit();
    // })
})
