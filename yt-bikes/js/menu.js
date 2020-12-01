$(function () {
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    function showMenu(show) {
        if (show) { //  SHOW
            $('.main').addClass('menu-shown');
            $('body').addClass('menu-shown');
            $('.expanded-menu').addClass('show');
    
            setTimeout(function () {
                $('.overlay').addClass('show');
            }, 500);
            
            var offset = 0;
            setTimeout(function () {
                $('.menu-item').each(function () {
                    var $menuItem = $(this)
                    setTimeout(function () {
                        $menuItem.addClass('slided-in').removeClass('slided-out');
                    }, 0 + offset);
    
                    offset = randomIntFromInterval(50, 250);
                })
            }, 200);
        } else { //  HIDE
            $('.nav-toggle').removeClass('expanded');
            $('.main').removeClass('menu-shown');
            $('.expanded-menu').removeClass('show');
            $('.overlay').removeClass('show');
            $('.nav-toggle').removeClass('show');
            setTimeout(function () {
                $('body').removeClass('menu-shown');
            }, 400);
            
    
            var offset = 0;
            $('.menu-item').each(function () {
                var $menuItem = $(this)
                setTimeout(function () {
                    $menuItem.removeClass('slided-in').addClass('slided-out');
                }, 0 + offset);
    
                offset += 50;
            })
        }
    }
    
    $('.nav-toggle').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('expanded');
        var $toggleBtn = $(this);
    
        if ($toggleBtn.hasClass('expanded')) { // Do this if menu is CLOSED
            showMenu(true);
        } else { // Do this if menu is OPENED
            showMenu(false);
        }
    });
    
    $('.main').on('click', function () {
        showMenu(false);
    })

})
