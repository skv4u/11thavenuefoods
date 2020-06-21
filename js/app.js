$(document).ready(function() {
    $(".filter-button").click(function() {
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

    $(window).scroll(function() {
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
    $(scrollTop).click(function() {
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

    $('.link1').click(function() {
        $('html, body').animate({
            scrollTop: h1.top
        }, 500);
        return false;

    }); // left menu link2 click() scroll END

    $('.link2').click(function() {
        $('html, body').animate({
            scrollTop: h2.top
        }, 500);
        return false;

    }); // left menu link2 click() scroll END

    $('.link3').click(function() {
        $('html, body').animate({
            scrollTop: h3.top
        }, 500);
        return false;

    }); // left menu link3 click() scroll END

    $('.input').focus(function() {
        $(this).parents('.form-group').addClass('focused');
    });

    $('.input').blur(function() {
        var inputValue = $(this).val();
        if (inputValue == "") {
            $(this).removeClass('filled');
            $(this).parents('.form-group').removeClass('focused');
        } else {
            $(this).addClass('filled');
        }
    })
    $('#contact').submit(function(e) {
        e.preventDefault();
        let formdata = $(this).serializeArray();
        let that = $(this);
        let jsondata = {};
        for (let m of formdata) {
            jsondata[m.name] = m.value;
        }
        console.log(jsondata);
        if (jsondata.name.toString().trim().length == 0) {
            alert("Invalid Name");
            return false;
        }

        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(jsondata.email) == false) {
            alert('Invalid Email Address');
            return false;
        }
        if (jsondata.message.toString().trim().length == 0) {
            alert("Invalid Message");
            return false;
        }
        let req = {
            "Subject": jsondata.name + " Contacted you from 11thavenuefoods.com",
            "Message": emailTemplate(jsondata)
        };

        $(this).find("button[type='submit']").val("Processing...");
        return false

        $.ajax({
            url: "https://11thavenuefoods.com/demo5/email.php",
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(req),
            success: function(data) {
                if (data.status) {
                    alert("Thank you for contacting us..\n We will contact you shortly!!!");
                    window.location.reload();
                }

            }
        });

    });

}); // ready() END




function emailTemplate(data) {
    let html = `<table style="
    display: table;
    border-spacing: 0;
    font-size: 14px;
    box-sizing: border-box;
    font-family: sans-serif;
    border-collapse: collapse;
    font-family: sans-serif;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    
    ">
  <tbody><tr>
  <td style="border: 1px solid #f9f9f9;padding: 10px;">Name</td>
    <td style="border: 1px solid #f9f9f9;padding: 10px;">${data.name}</td>
  </tr>
    <tr>
  <td style="border: 1px solid #f9f9f9;padding: 10px;">Email</td>
    <td style="border: 1px solid #f9f9f9;padding: 10px;">${data.email}</td>
  </tr>
      <tr>
  <td style="border: 1px solid #f9f9f9;padding: 10px;">Website</td>
    <td style="border: 1px solid #f9f9f9;padding: 10px;">${data.website}</td>
  </tr>
     <tr>
  <td colspan="2" style="border: 1px solid #f9f9f9;padding: 10px;">
    <h3>
      Message
    </h3>
    
    </td>
    </tr>
    <tr>
    <td colspan="2" style="border: 1px solid #f9f9f9;padding: 10px;">
        ${nl2br(data.message)}    
    </td>
  </tr>
</tbody></table>`;
    return html;
}

function nl2br(str, is_xhtml) {
    if (typeof str === 'undefined' || str === null) {
        return '';
    }
    var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}

// slim scroll


window.onload = function() {
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


        var seventeen = new slimScroll(element[16], {
            'wrapperClass': 'wrapper',
            'scrollBarContainerClass': 'scrollBarContainer',
            'scrollBarClass': 'scrollBar'
        });


        var eighteen = new slimScroll(element[17], {
            'wrapperClass': 'wrapper',
            'scrollBarContainerClass': 'scrollBarContainer',
            'scrollBarClass': 'scrollBar'
        });


        var ninteen = new slimScroll(element[18], {
            'wrapperClass': 'wrapper',
            'scrollBarContainerClass': 'scrollBarContainer',
            'scrollBarClass': 'scrollBar'
        });


        // resize example
        // To make the resizing work, set the height of the container in PERCENTAGE
        window.onresize = function() {
            one.resetValues();
            two.resetValues();
            three.resetValues();
        }
    } else {
        console.log("For Mac users, this custom slimscroll styles will not be applied");
    }

}