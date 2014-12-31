jQuery(document).ready(function () {

    var navOffset = jQuery("nav").offset().top;

    jQuery(window).scroll(function () {

        scrollPos = jQuery(window).scrollTop();

        jQuery(".status").html(scrollPos);
        jQuery("h1").html(navOffset);

        if (scrollPos >= 216) {
            jQuery("nav").addClass("fixed");
        } else {
            jQuery("nav").removeClass("fixed");
        }
    });


})