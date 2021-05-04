// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        var u = $anchor.attr('href');
        var hash = u.substring(u.indexOf('#'));
        var $section = $('html').find(hash)
        $('html, body').stop().animate({
            scrollTop: ($section.offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    // $('body').scrollspy({
    //     target: '.navbar-fixed-top',
    //     offset: 51
    // });

    // Closes the Responsive Menu on Menu Item Click
    $('#main-nav div.navbar-collapse ul li a').click(function(){
        $('#main-navbar-toggler:visible').click();
    });

    $('#sub-nav div.navbar-collapse ul li a').click(function(){
        $('#sub-navbar-toggler:visible').click();
    });

    // Offset for Main Navigation
    // $('#main-nav').affix({
    //     offset: {
    //         top: 100
    //     }
    // })

    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });

})(jQuery); // End of use strict
