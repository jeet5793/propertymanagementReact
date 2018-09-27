 jQuery(document).ready(function() {
          var pro_grid_w_win = jQuery(window).width();
          var gapHorizontal, gapVertical;
          if (pro_grid_w_win > 768) {
              gapHorizontal = 0;
              gapVertical = 28;
          } else {
              gapHorizontal = 0;
              gapVertical = 20;
          }
          jQuery('#tz-pro-slider-5ac1cdf22e330').cubeportfolio({
              layoutMode: 'slider',
              drag: true,
              auto: true,
              autoTimeout: 5000,
              autoPauseOnHover: true,
              showNavigation: true,
              showPagination: false,
              rewindNav: false,
              scrollByPage: false,
              gridAdjustment: 'responsive',
              mediaQueries: [{
                  width: 1200,
                  cols: 4
              }, {
                  width: 992,
                  cols: 4
              }, {
                  width: 768,
                  cols: 3
              }, {
                  width: 460,
                  cols: 2
              }, {
                  width: 0,
                  cols: 1
              }],
              caption: 'overlayBottomPush',
              gapHorizontal: gapHorizontal,
              gapVertical: gapVertical,
              displayType: 'fadeIn',
              displayTypeSpeed: 100,

              // lightbox
              lightboxDelegate: '.cbp-lightbox',
              lightboxGallery: true,
              lightboxTitleSrc: 'data-title',
              lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

              // singlePage popup
              singlePageDelegate: '.cbp-singlePage',
              singlePageDeeplinking: true,
              singlePageStickyNavigation: true,
              singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
              singlePageAnimation: 'fade',
              singlePageCallback: function(url, element) {
                  // to update singlePage content use the following method: this.updateSinglePage(yourContent)
                  var indexElement = $(element).parents('.cbp-item').index(),
                      item = singlePage.eq(indexElement);

                  this.updateSinglePage(item.html());
              }
          });
          tz_realestate_ResizeImage(jQuery('#tz-pro-slider-5ac1cdf22e330 .tz-caption'));
      });

      jQuery(document).ready(function() {
          var pro_grid_w_win = jQuery(window).width();
          var gapHorizontal, gapVertical;
          if (pro_grid_w_win > 768) {
              gapHorizontal = 0;
              gapVertical = 28;
          } else {
              gapHorizontal = 0;
              gapVertical = 20;
          }
          jQuery('#tz-pro-slider-5ac1cdf22e331').cubeportfolio({
              layoutMode: 'slider',
              drag: true,
              auto: true,
              autoTimeout: 5000,
              autoPauseOnHover: true,
              showNavigation: true,
              showPagination: false,
              rewindNav: false,
              scrollByPage: false,
              gridAdjustment: 'responsive',
              mediaQueries: [{
                  width: 1200,
                  cols: 4
              }, {
                  width: 992,
                  cols: 4
              }, {
                  width: 768,
                  cols: 3
              }, {
                  width: 460,
                  cols: 2
              }, {
                  width: 0,
                  cols: 1
              }],
              caption: 'overlayBottomPush',
              gapHorizontal: gapHorizontal,
              gapVertical: gapVertical,
              displayType: 'fadeIn',
              displayTypeSpeed: 100,

              // lightbox
              lightboxDelegate: '.cbp-lightbox',
              lightboxGallery: true,
              lightboxTitleSrc: 'data-title',
              lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

              // singlePage popup
              singlePageDelegate: '.cbp-singlePage',
              singlePageDeeplinking: true,
              singlePageStickyNavigation: true,
              singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
              singlePageAnimation: 'fade',
              singlePageCallback: function(url, element) {
                  // to update singlePage content use the following method: this.updateSinglePage(yourContent)
                  var indexElement = $(element).parents('.cbp-item').index(),
                      item = singlePage.eq(indexElement);

                  this.updateSinglePage(item.html());
              }
          });
          tz_realestate_ResizeImage(jQuery('#tz-pro-slider-5ac1cdf22e331 .tz-caption'));
      });

      //Home
       jQuery(document).ready(function() {
        var slider_images = jQuery(".tz-slider-images"),
            h_window = jQuery(window).height();
        slider_images.slick({
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            dots: false,
            infinite: true,
            pauseOnHover: false,
            speed: 1000,
            fade: true,
            cssEase: 'linear',
            mobileFirst: true,
            adaptiveHeight: false
        });
        tz_realestate_ResizeImage(jQuery(".tz-slider-item"));

    });
  jQuery(window).on('load resize', function() {
      var w_window = jQuery(window).outerWidth();
      var w_pro_container = jQuery('.tz-form-search').outerWidth();
      if (w_window > 1439) {
          jQuery('.tz-search-right,.tz-search-left').css('width', (w_window - w_pro_container) / 2);
      }
  });

  //footer
  document.onreadystatechange=function(){
    if(document.readyState=="complete")
    {
      document.getElementById('footerForm').setAttribute('onsubmit','return newsletter_check(this)');
    }
  }