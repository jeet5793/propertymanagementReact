
/*
 * Method reize image
 * @variables class
 */
function tz_realestate_ResizeImage(obj){
    'use strict';

    var widthStage;
    var heightStage ;
    var widthImage;
    var heightImage;
    obj.each(function (i,el){

        heightStage = jQuery(this).height();

        widthStage = jQuery (this).width();
        var img_url = jQuery(this).find('img').attr('src');

        var image = new Image();
        image.src = img_url;

        widthImage = image.naturalWidth;
        heightImage = image.naturalHeight;

        var tzimg	=	new resizeImage(widthImage, heightImage, widthStage, heightStage);
        jQuery(this).find('img').css ({ top: tzimg.top, left: tzimg.left, width: tzimg.width, height: tzimg.height });
    });
}

jQuery(window).on("load",function(){
    'use strict';
    tz_realestate_ResizeImage(jQuery('.tz-slider-item,.tz-slider-for-item,.tz-caption,.cbp-caption,.tz-resize'));

    jQuery('#tzloadding').remove();

    /* Start back to top */
    jQuery('#btn_top').on('click',function () {
        jQuery('html, body').animate({
            scrollTop: 0
        }, 1500);
    });
    if(jQuery(".tz-sidebar-menu").length){
        jQuery(".tz-sidebar-menu").mCustomScrollbar({
            theme:"minimal"
        });
    }
});

jQuery(window).ready(function(){
    'use strict';

    /*  Header  */
    var width_win = jQuery(window).width();
    if( width_win < 992 ){
        if( jQuery(".tz-header-menu.tz-slick").length){
            jQuery(".tz-header-menu.tz-slick").slicknav({
                label: "",
                duplicate: true,
                duration: 500,
                easingOpen: "linear",
                easingClose: "linear",
                prependTo: ".tz-header-bottom.tz-slick",
                closedSymbol: "<i class='icon-chevron-right'></i>",
                openedSymbol: "<i class='icon-chevron-down'></i>",
                closeOnClick: true
            });
        }
        if( jQuery(".tz-header-menu.tz-slick-second").length){
            jQuery(".tz-header-menu.tz-slick-second").slicknav({
                label: "",
                duplicate: true,
                duration: 500,
                easingOpen: "linear",
                easingClose: "linear",
                prependTo: ".tz-header-bottom.tz-slick-second",
                closedSymbol: "<i class='icon-chevron-right'></i>",
                openedSymbol: "<i class='icon-chevron-down'></i>",
                closeOnClick: true
            });
        }

        var submenu     =   jQuery(".tz-header .navbar-nav > li > .sub-menu li .sub-menu");

        submenu.each(function(){
            var w_win       =   jQuery(window).width();
            var w_submenu   =   submenu.width();
            var l_submenu   =   submenu.offset().left;
            if( w_win < (w_submenu + l_submenu) ){
                submenu.addClass("tz-right");
            }else {
                submenu.remove("tz-right");
            }
        });
    }
    /*  Siderbar header */
    jQuery(".tz-button-sidebar").on("click",function(e){
        e.preventDefault();
        jQuery(".tz-sidebar-menu").toggleClass("tz-show");
    });
    jQuery(".tz-close-sidebar").on("click",function(){
        jQuery(".tz-sidebar-menu").removeClass("tz-show");
    });

    /*  Search Form */
    jQuery('.tz-button-search').on("click",function(){
        jQuery('.tzform-search').toggleClass('tz-show');
    });

});

jQuery(window).on('scroll',function(){
    'use strict';

    var
        $top            =   30,
        $tz_btn_top     =   jQuery( '#btn_top'),
        $tz_header      =   jQuery('.tz-header-type-1'),
        $h_header       =   $tz_header.outerHeight() + 30,
        $tz_header_2    =   jQuery('.tz-header-type-2'),
        $tz_slider      =   jQuery('.tz-homeslide-image'),
        $win_scroll_top =   jQuery(window).scrollTop();
    if($tz_slider.length){
        $top    =   $tz_slider.height();
    }
    if ( $tz_btn_top.length ) {

        if ( $win_scroll_top > 150 ) {
            $tz_btn_top.addClass('active');
        }else {
            $tz_btn_top.removeClass('active');
        }

    }
    if ( $tz_header.length ) {

        if ( $win_scroll_top > $h_header ) {
            $tz_header.addClass('tz-scroll');
        }else {
            $tz_header.removeClass('tz-scroll');
        }

    }

    if ( $tz_header_2.length ) {

        if ( $win_scroll_top > $top ) {
            $tz_header_2.addClass('tz-scroll');
        }else {
            $tz_header_2.removeClass('tz-scroll');
        }

    }

});
