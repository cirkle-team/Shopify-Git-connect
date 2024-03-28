$(document).ready(function() {
    $('.hero-back-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        speed: 400,
        autoplay: true,
        autoplaySpeed: 2500,

    });

    $('.hero-slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 992,
            settings: {
                arrows: false,
                dots: true,
                dotsClass: 'slick-dots custom-dots'
            }
        }]
    });

    $('.trending-slider').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: false,
        speed: 500,
        centerMode: false,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 641,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });

    $('.product-slider-image').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        speed: 500,
    });


    $('.card-slider-wrapper').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: false,
        speed: 500,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.pdp-slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: false,
        speed: 500,
        responsive: [{
                breakpoint: 1921,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1281,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });


    $(".close-popup, .popup-overlay").on("click", function() {
        $(".newslatter-popup").removeClass("popup-open");
    });


    $(".filter-lable").click(function() {
        $(".filter-lable").removeClass("active");
        $(".filter-inner").slideUp();
        if (!$(this).next().is(":visible")) {
            $(this).next().slideDown();
            $(this).addClass("active");
        }
    })
    $(".filter-var-lable").click(function() {
        $(".filter-var-lable").removeClass("active");
        $(".filter-var ul").slideUp();
        if (!$(this).next().is(":visible")) {
            $(this).next().slideDown();
            $(this).addClass("active");
        }
    })


    $(".cm-add-bag").on("click", function(e) {
        e.preventDefault();
        $(".mob-size-selecter").addClass("active");
    });
    $(".close-size-popup, .popup-bg").on("click", function() {
        $(".mob-size-selecter").removeClass("active");
    });

    $(".cm-acc-title").click(function() {
        $(".cm-acc-title").removeClass("active");
        $(".cm-acc-desc").slideUp();
        if (!$(this).next().is(":visible")) {
            $(this).next().slideDown();
            $(this).addClass("active");
        }
    })

    $(".ds-accordion .acc-drop").click(function() {
        $(".pdp-ds-inner").toggleClass("active");
    });

    $(".close-icon").click(function() {
        $(".announcement-bar").slideUp();
        if ($(window).width() > 991) {
            var mnh = 164 - $(".announcement-bar").outerHeight();
            console.log($('.hero-section').length);
            $('.hero-section').attr('style', 'height: calc(100vh - ' + mnh + 'px)');
        }
    });

    $(".menu-hemburger a").on("click", function(e) {
        e.preventDefault();
        $(".mobile-menu, body").addClass("active-menu");
    });
    $(".menu-overlay, .close-menu").on("click", function() {
        $(".mobile-menu, body").removeClass("active-menu");
        $('.cm-menu-inner').find('.has-children').removeClass('is-open');
    });

    $(".open-size-popup").on("click", function(e) {
        e.preventDefault();
        $(".size-guide-popup, body").addClass("active-popup");
    });
    $(".size-overlay, .guide-popup-close").on("click", function() {
        $(".size-guide-popup, body").removeClass("active-popup");
    });


    $('.header-search input').on('focus', function() {
        $(".header-bottom").addClass("active-search");
    });
    $('.close-search').on('click', function() {
        $(".header-bottom").removeClass("active-search");
    });

    // flag : says "remove class when click reaches background"
    var removeClass = true;

    // when clicking the button : toggle the class, tell the background to leave it as is
    $(".cart a").click(function(e) {
        e.preventDefault();
        $(".mini-cart, body").toggleClass('active-cart');
        removeClass = false;
    });

    // when clicking the div : never remove the class
    $(".mini-cart").click(function() {
        removeClass = false;
    });

    // when click event reaches "html" : remove class if needed, and reset flag
    $("html, .close-cart").click(function() {
        if (removeClass) {
            $(".mini-cart, body").removeClass('active-cart');
        }
        removeClass = true;
    });

    // $(document).click(function() {
    //     $('.mini-cart').removeClass('active-cart');
    // });
    // $(".cart").click(function(event) {
    //     $('.mini-cart').addClass('active-cart');
    //     event.stopPropagation();
    // });



    $(window).on("resize", function() {
        var rightposition = $(".head-bottom-inner").offset().left;
        $(".mini-cart").css("right", rightposition);
    }).resize();

    if ($('.trending-slider').length > 0) {
        $(window).on("resize", function() {
            var leftposition = $(".new-ar-product").offset().left;
            $(".trending-slider .slick-list").css("padding-left", leftposition);
        }).resize();
    }


    // ==========================================================================
    //  ACCORDION TAB
    // ==========================================================================

    // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content").hide();
    $(".tab_content:first").show();

    /* if in tab mode */
    $("ul.tabs-main li").click(function() {

        $(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $("ul.tabs-main li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading").removeClass("d_active");
        $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

    });
    /* if in drawer mode */
    $(".tab_drawer_heading").click(function() {

        $(".tab_content").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn();

        $(".tab_drawer_heading").removeClass("d_active");
        $(this).addClass("d_active");

        $("ul.tabs-main li").removeClass("active");
        $("ul.tabs-main li[rel^='" + d_activeTab + "']").addClass("active");
    });


    /* Extra class "tab_last" 
       to add border to right side
       of last tab */
    $('ul.tabs-main li').last().addClass("tab_last");

    /*accordian js start here*/
    // When any accordion title is clicked...
    $(".accordion__title").click(function() {
        const $accordion_wrapper = $(this).parent();
        const $accordion_content = $(this).parent().find(".accordion__content").first();
        const $accordion_open = "accordion--open";

        // If this accordion is already open
        if ($accordion_wrapper.hasClass($accordion_open)) {
            $accordion_content.slideUp(); // Close the content.
            $accordion_wrapper.removeClass($accordion_open); // Remove the accordionm--open class.
        }
        // If this accordion is not already open
        else {
            $accordion_content.slideDown(); // Show this accordion's content.
            $accordion_wrapper.addClass($accordion_open); // Add the accordion--open class.
        }
    });

    /*accordian js end here*/



    // ==========================================================================
    //  Multi-level accordion nav
    // ==========================================================================
    $('.acnav__label').click(function() {
        var label = $(this);
        var parent = label.parent('.has-children');
        if (parent.hasClass('is-open')) {
            parent.removeClass('is-open');
        } else {
            parent.addClass('is-open');
        }
    });
    $('.back-menu').click(function() {
        $(this).parent().parent().parent().removeClass('is-open')
    });
    // ==========================================================================

    // ==========================================================================
    //  TAB VIEW
    // ==========================================================================

    $('.tabs a').click(function() {

        $('.panel').hide();
        $('.tabs a.active').removeClass('active');
        $(this).addClass('active');

        var panel = $(this).attr('href');
        $(panel).fadeIn(800);

        return false; // prevents link action

    }); // end click 

    $('.tabs li:first a').click();
    // ==========================================================================

    $(window).scroll(function() {
        var sticky = $('header')
        var headerHeight = $("header").height();
        scroll = $(window).scrollTop();
        if (scroll >= 200) {
            sticky.addClass('fixed');
            $('.wrapper').css('margin-top', headerHeight + 'px');
        } else {
            sticky.removeClass('fixed');
            $('.wrapper').css('margin-top', 0 + 'px');
        };

        if ($('.index-template').length > 0) {
            var geth = $('.header-bottom').outerHeight();
            if (scroll >= geth) {
                $('.header-bottom').addClass('menu_fixed');
            } else {
                $('.header-bottom').removeClass('menu_fixed');
            }
        }
    });
    setTimeout(function() {
        $('.newslatter-popup').addClass('popup-open')
    }, 5000);


});

// function reheight() {

// }
$(window).on('load resize orientationchange', function() {
    var sliderheight = $(".pdp-slider").height();
    var pdpcontent = $(".pdp-details").height();
    if (sliderheight <= pdpcontent) {
        $(".product-details-slider").css("min-height", pdpcontent);
    } else {
        $(".product-details-slider").css("min-height", sliderheight);
    }
});

// $(window).on("resize", function() {
//     //     if(jQuery(window).width() > 767) {
//     var leftposition = $(".new-ar-product").offset().left;
//     $(".trending-slider .slick-list").css("padding-left", leftposition);
//     //     }
// }).resize();