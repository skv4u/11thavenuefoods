$(document).ready(function () {
    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');
        if (value == "all") {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        } else {
            //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');

        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");


    $("#testimonial-slider").owlCarousel({
        items: 2,
        itemsDesktop: [1000, 2],
        itemsDesktopSmall: [990, 2],
        itemsTablet: [768, 1],
        pagination: true,
        navigation: false,
        navigationText: ["", ""],
        slideSpeed: 1000,
        autoPlay: true
    });
    // BY KAREN GRIGORYAN
    /******************************
        BOTTOM SCROLL TOP BUTTON
     ******************************/

    // declare variable
    var scrollTop = $(".scrollTop");

    $(window).scroll(function () {
        // declare variable
        var topPos = $(this).scrollTop();

        // if user scrolls down - show scroll to top button
        if (topPos > 100) {
            $(scrollTop).css("opacity", "1");

        } else {
            $(scrollTop).css("opacity", "0");
        }

    }); // scroll END

    //Click event to scroll to top
    $(scrollTop).click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;

    }); // click() scroll top EMD

    /*************************************
      LEFT MENU SMOOTH SCROLL ANIMATION
     *************************************/
    // declare variable
    var h1 = $("#h1").position();
    var h2 = $("#h2").position();
    var h3 = $("#h3").position();

    $('.link1').click(function () {
        $('html, body').animate({
            scrollTop: h1.top
        }, 500);
        return false;

    }); // left menu link2 click() scroll END

    $('.link2').click(function () {
        $('html, body').animate({
            scrollTop: h2.top
        }, 500);
        return false;

    }); // left menu link2 click() scroll END

    $('.link3').click(function () {
        $('html, body').animate({
            scrollTop: h3.top
        }, 500);
        return false;

    }); // left menu link3 click() scroll END

    $('.input').focus(function () {
        $(this).parents('.form-group').addClass('focused');
    });

    $('.input').blur(function () {
        var inputValue = $(this).val();
        if (inputValue == "") {
            $(this).removeClass('filled');
            $(this).parents('.form-group').removeClass('focused');
        } else {
            $(this).addClass('filled');
        }
    })

}); // ready() END


// slim scroll


window.onload = function () {
    if (!navigator.userAgent.match('Macintosh')) {
        var element = document.querySelectorAll('.slimScroll');


        // Apply slim scroll plugin
        var one = new slimScroll(element[0], {
            'wrapperClass': 'wrapper',
            'scrollBarContainerClass': 'scrollBarContainer',
            'scrollBarClass': 'scrollBar'
        });

        var two = new slimScroll(element[1], {
            'wrapperClass': 'wrapper',
            'scrollBarContainerClass': 'scrollBarContainer',
            'scrollBarClass': 'scrollBar'
        });

        var three = new slimScroll(element[2], {
            'wrapperClass': 'wrapper',
            'scrollBarContainerClass': 'scrollBarContainer',
            'scrollBarClass': 'scrollBar'
        });

        var four = new slimScroll(element[3], {
            'wrapperClass': 'wrapper',
            'scrollBarContainerClass': 'scrollBarContainer',
            'scrollBarClass': 'scrollBar'
        });

        var five = new slimScroll(element[4], {
            'wrapperClass': 'wrapper',
            'scrollBarContainerClass': 'scrollBarContainer',
            'scrollBarClass': 'scrollBar'
        });

        var six = new slimScroll(element[5], {
            'wrapperClass': 'wrapper',
            'scrollBarContainerClass': 'scrollBarContainer',
            'scrollBarClass': 'scrollBar'
        });

        var seven = new slimScroll(element[6], {
            'wrapperClass': 'wrapper',
            'scrollBarContainerClass': 'scrollBarContainer',
            'scrollBarClass': 'scrollBar'
        });

        var eight = new slimScroll(element[7], {
            'wrapperClass': 'wrapper',
            'scrollBarContainerClass': 'scrollBarContainer',
            'scrollBarClass': 'scrollBar'
        });

        var nine = new slimScroll(element[8], {
            'wrapperClass': 'wrapper',
            'scrollBarContainerClass': 'scrollBarContainer',
            'scrollBarClass': 'scrollBar'
        });

        var ten = new slimScroll(element[9], {
            'wrapperClass': 'wrapper',
            'scrollBarContainerClass': 'scrollBarContainer',
            'scrollBarClass': 'scrollBar'
        });

        var eleven = new slimScroll(element[10], {
            'wrapperClass': 'wrapper',
            'scrollBarContainerClass': 'scrollBarContainer',
            'scrollBarClass': 'scrollBar'
        });

        var twelve = new slimScroll(element[11], {
            'wrapperClass': 'wrapper',
            'scrollBarContainerClass': 'scrollBarContainer',
            'scrollBarClass': 'scrollBar'
        });

        var thirteen = new slimScroll(element[12], {
            'wrapperClass': 'wrapper',
            'scrollBarContainerClass': 'scrollBarContainer',
            'scrollBarClass': 'scrollBar'
        });


        var fourteen = new slimScroll(element[13], {
            'wrapperClass': 'wrapper',
            'scrollBarContainerClass': 'scrollBarContainer',
            'scrollBarClass': 'scrollBar'
        });


        var fifteen = new slimScroll(element[14], {
            'wrapperClass': 'wrapper',
            'scrollBarContainerClass': 'scrollBarContainer',
            'scrollBarClass': 'scrollBar'
        });


        var sixteen = new slimScroll(element[15], {
            'wrapperClass': 'wrapper',
            'scrollBarContainerClass': 'scrollBarContainer',
            'scrollBarClass': 'scrollBar'
        });


        var seventeen= new slimScroll(element[16], {
            'wrapperClass': 'wrapper',
            'scrollBarContainerClass': 'scrollBarContainer',
            'scrollBarClass': 'scrollBar'
        });


        var eighteen = new slimScroll(element[17], {
            'wrapperClass': 'wrapper',
            'scrollBarContainerClass': 'scrollBarContainer',
            'scrollBarClass': 'scrollBar'
        });


        var ninteen= new slimScroll(element[18], {
            'wrapperClass': 'wrapper',
            'scrollBarContainerClass': 'scrollBarContainer',
            'scrollBarClass': 'scrollBar'
        });


        // resize example
        // To make the resizing work, set the height of the container in PERCENTAGE
        window.onresize = function () {
            one.resetValues();
            two.resetValues();
            three.resetValues();
        }
    }
    else {
        document.write("For Mac users, this custom slimscroll styles will not be applied");
    }
}
