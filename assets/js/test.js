$(window).on('scroll', function () {

    // Header Style and Scroll to Top
    function headerStyle() {
        if ($('.main-header').length) {
            var windowpos = $(window).scrollTop();
            var siteHeader = $('.main-header');
            var scrollLink = $('.scroll-top');
            if (windowpos >= 100) {
                siteHeader.addClass('fixed-header');
                scrollLink.fadeIn(300);
            } else {
                siteHeader.removeClass('fixed-header');
                scrollLink.fadeOut(300);
            }
        }
    }

    headerStyle();

});

$(window).on('scroll' , function () {
    function footerStyle(){
        if ($('main-footer').length) {
            var windowpos = $(window).scrollTop();
            var siteFooter = $('.main-footer');
            var scrollLink = $('.scroll-top');
            if (windowops >= 100) {
                siteFooter.addClass('fixed-footer');
                scrollLink.fadeIn(300);
            } else {
                siteFooter.removeClass('fixed-footer');
                scrollLink.fadeOut(300);
            }
        }
    }

    footerStyle();
})