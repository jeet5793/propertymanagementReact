
'use strict';

function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}
function tz_realestate_list(){
    if( jQuery('#js-grid-meet-the-team').length){
        jQuery('#js-grid-meet-the-team').cubeportfolio({
            defaultFilter: '*',
            filters: '#js-filters-meet-the-team',
            layoutMode: 'grid',
            animationType: 'rotateRoom',
            gapHorizontal: 0,
            gapVertical: 0,
            gridAdjustment: 'responsive',
            mediaQueries: [{
                width: 1500,
                cols: 1
            }, {
                width: 1100,
                cols: 1
            }, {
                width: 800,
                cols: 1
            }, {
                width: 480,
                cols: 1
            }, {
                width: 320,
                cols: 1
            }],
            caption: 'fadeIn',
            displayType: 'lazyLoading',
            displayTypeSpeed: 100
        });
        tz_realestate_ResizeImage(jQuery('.tz-property-thum'));
    }
}
jQuery(document).ready(function(){
    "use strict";
    var vehicle_layouts = readCookie('display');
    if(vehicle_layouts=='list'){
        jQuery(".cbp").removeClass("grid").addClass("list");
        jQuery(".switchToList").addClass('active');
        jQuery(".switchToGrid").removeClass('active');
        tz_realestate_list();
    }else{
        jQuery(".switchToGrid").addClass('active');
        jQuery(".switchToList").removeClass('active');
        jQuery('.cbp').removeClass('list').addClass('grid');
        if( jQuery('#js-grid-meet-the-team').length){
            tz_realestate_grid();
        }
    }
    tz_realestate_ResizeImage(jQuery('.tz-property-thum'));
});

/*  Grid Toggle List Ajax   */
function realestate_menu_ajax($) {
    'use strict';
    var url = window.location.href;
    $(".tzview-style a").on("click",function(e){
        e.preventDefault();
        var current = $(this).hasClass("active");
        if( current == false ){
            /*  Show Loadajax image  */
            $(".auto-loading").fadeIn(500);
            $("#js-grid-meet-the-team").cubeportfolio('destroy');
            $(".tzview-style a").removeClass("active");
            $(this).addClass("active");
            $.ajax({
                type : 'GET',
                url : url,
                complete : function (jqXHR, textStatus) {
                    var condition = (typeof (jqXHR.isResolved) !== 'undefined') ? (jqXHR.isResolved()) : (textStatus === "success" || textStatus === "notmodified");
                    if (condition) {
                        /*  Load-content    */
                        var data    = jqXHR.responseText;
                        $('.tz-content-ajax').html($(data).find('.tz-content-ajax').html());
                        if($(".active").hasClass("switchToList")){
                            jQuery(".cbp").removeClass("grid").addClass("list");
                            tz_realestate_list();
                            createCookie('display','list',1);
                        }else if($(".active").hasClass("switchToGrid")){
                            jQuery('.cbp').removeClass('list').addClass('grid');
                            tz_realestate_grid();
                            eraseCookie('display');
                        }

                        /*  Hide Loadajax image  */
                        $(".auto-loading").fadeOut(500);
                    }
                }
            });
        }else{
            return false;
        }
    });
}
realestate_menu_ajax(jQuery);