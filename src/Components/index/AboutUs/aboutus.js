import React from 'react'
import img1 from '../../../images/girls_PNG6463-1.png'
import img2 from '../../../images/young-businessman-2.png'
import img3 from '../../../images/girls_PNG6456-1.png'
import img4 from '../../../images/man2.png'
import img5 from '../../../images/man10-1.png'
import img6 from '../../../images/slider-businessman1.png'
import img7 from '../../../images/man_PNG6531.png'
import img8 from '../../../images/entrepreneur-593358_1920.jpg'
import img10 from '../../../images/about.jpg'
import '../../../css/aboutus.css'
import '../../../css/comp-main.css'
import '../../../css/style.css'
import $ from 'jquery'

export default class Aaboutus extends React.Component {
  // componentDidMount() {
  //   var head = document.getElementsByTagName('head')[0];
  //   var script = document.createElement('script');
  //   script.type = 'text/javascript';
  //   script.onload = function() {
  //     var jQuery=window.$
  //     if(jQuery(window).width() > 521){
  //       var owl = jQuery("#tz-partner-5ac27a2c058ed");
  //       if(owl.realestate_owlCarousel!=undefined)
  //       owl.realestate_owlCarousel({
  //           autoplay:true,
  //           autoplayTimeout:3000,
  //           autoplayHoverPause:true,
  //           loop: true,
  //           responsiveClass:true,
  //           responsive:{
  //               0:{
  //                   items:1
  //               },
  //               479:{
  //                   items:2
  //               },
  //               768:{
  //                   items:3
  //               },
  //               979:{
  //                   items:3
  //               },
  //               1199:{
  //                   items:5                        }
  //           }
  //       });
  //   }
  //   }
  //   script.src = 'js/validate.js';
  //   head.appendChild(script);

  //   setTimeout(function () {
  //     $('#tzloadding').remove();
  //   }, 100);

  //   document.body.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;
  // }
  // componentWillReceiveProps(nextProps){
  //   var jQuery=window.$
  //   jQuery('.agent-slider').cubeportfolio({
  //     layoutMode: 'slider',
  //     drag: true,
  //     auto: true,
  //     autoTimeout: 3000,
  //     autoPauseOnHover: true,
  //     showNavigation: true,
  //     showPagination: false,
  //     rewindNav: false,
  //     scrollByPage: false,
  //     gridAdjustment: 'responsive',
  //     mediaQueries: [{
  //         width: 1200,
  //         cols: 5
  //     }, {
  //         width: 992,
  //         cols: 3
  //     }, {
  //         width: 768,
  //         cols: 3
  //     }, {
  //         width: 460,
  //         cols: 2
  //     }, {
  //         width: 0,
  //         cols: 1
  //     }],
  //     gapHorizontal: 0,
  //     gapVertical: 30,
  //     displayType: 'fadeIn',
  //     displayTypeSpeed: 100

  // });
  // }
  componentDidMount(){
    var jQuery=window.$
    // our agent
    jQuery('.agent-slider').cubeportfolio({
      layoutMode: 'slider',
      drag: true,
      auto: true,
      autoTimeout: 3000,
      autoPauseOnHover: true,
      showNavigation: true,
      showPagination: false,
      rewindNav: false,
      scrollByPage: false,
      gridAdjustment: 'responsive',
      mediaQueries: [{
          width: 1200,
          cols: 5
      }, {
          width: 992,
          cols: 3
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
      gapHorizontal: 0,
      gapVertical: 30,
      displayType: 'fadeIn',
      displayTypeSpeed: 100

  });

  // what they say about us
  jQuery('.tz-life-content-5ac27a2c04a2d').cubeportfolio({
    layoutMode: 'slider',
    drag: true,
    auto: true,
    autoTimeout: 5000,
    autoPauseOnHover: true,
    showNavigation: false,
    showPagination: true,
    rewindNav: false,
    scrollByPage: false,
    gridAdjustment: 'responsive',
    mediaQueries: [{
        width: 1200,
        cols: 2            }, {
        width: 992,
        cols: 2            }, {
        width: 768,
        cols: 2            }, {
        width: 320,
        cols: 1            }],
    caption: 'fadeIn',
    gapHorizontal: 0,
    gapVertical: 28,
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
    // singlePageCallback: function(url, element) {
    //     // to update singlePage content use the following method: this.updateSinglePage(yourContent)
    //     var indexElement = $(element).parents('.cbp-item').index(),
    //         item = singlePage.eq(indexElement);

    //     this.updateSinglePage(item.html());
    // }
});

}
componentWillReceiveProps(nextProps){
    var jQuery=window.$
    // our agent
    try{
    jQuery('#agentslider').cubeportfolio({
      layoutMode: 'slider',
      drag: true,
      auto: true,
      autoTimeout: 3000,
      autoPauseOnHover: true,
      showNavigation: true,
      showPagination: false,
      rewindNav: false,
      scrollByPage: false,
      gridAdjustment: 'responsive',
      mediaQueries: [{
          width: 1200,
          cols: 5
      }, {
          width: 992,
          cols: 3
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
      gapHorizontal: 0,
      gapVertical: 30,
      displayType: 'fadeIn',
      displayTypeSpeed: 100

  });}
  catch(error){
    // jQuery('#agentslider').cubeportfolio.destroy()
    jQuery("#agentslider").cubeportfolio('destroy');
    jQuery('#agentslider').cubeportfolio({
      layoutMode: 'slider',
      drag: true,
      auto: true,
      autoTimeout: 3000,
      autoPauseOnHover: true,
      showNavigation: true,
      showPagination: false,
      rewindNav: false,
      scrollByPage: false,
      gridAdjustment: 'responsive',
      mediaQueries: [{
          width: 1200,
          cols: 5
      }, {
          width: 992,
          cols: 3
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
      gapHorizontal: 0,
      gapVertical: 30,
      displayType: 'fadeIn',
      displayTypeSpeed: 100

  });
  }
  // what they say about us
  try{
  jQuery('#whattheysayaboutus').cubeportfolio({
    layoutMode: 'slider',
    drag: true,
    auto: true,
    autoTimeout: 5000,
    autoPauseOnHover: true,
    showNavigation: false,
    showPagination: true,
    rewindNav: false,
    scrollByPage: false,
    gridAdjustment: 'responsive',
    mediaQueries: [{
        width: 1200,
        cols: 2            }, {
        width: 992,
        cols: 2            }, {
        width: 768,
        cols: 2            }, {
        width: 320,
        cols: 1            }],
    caption: 'fadeIn',
    gapHorizontal: 0,
    gapVertical: 28,
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
    // singlePageCallback: function(url, element) {
    //     // to update singlePage content use the following method: this.updateSinglePage(yourContent)
    //     var indexElement = $(element).parents('.cbp-item').index(),
    //         item = singlePage.eq(indexElement);

    //     this.updateSinglePage(item.html());
    // }
});}
catch(error){
  // jQuery('#whattheysayaboutus').cubeportfolio.destroy()
  jQuery("#whattheysayaboutus").cubeportfolio('destroy');
  jQuery('#whattheysayaboutus').cubeportfolio({
    layoutMode: 'slider',
    drag: true,
    auto: true,
    autoTimeout: 5000,
    autoPauseOnHover: true,
    showNavigation: false,
    showPagination: true,
    rewindNav: false,
    scrollByPage: false,
    gridAdjustment: 'responsive',
    mediaQueries: [{
        width: 1200,
        cols: 2            }, {
        width: 992,
        cols: 2            }, {
        width: 768,
        cols: 2            }, {
        width: 320,
        cols: 1            }],
    caption: 'fadeIn',
    gapHorizontal: 0,
    gapVertical: 28,
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
    // singlePageCallback: function(url, element) {
    //     // to update singlePage content use the following method: this.updateSinglePage(yourContent)
    //     var indexElement = $(element).parents('.cbp-item').index(),
    //         item = singlePage.eq(indexElement);

    //     this.updateSinglePage(item.html());
    // }
});
}

}
  render() {
    return (
      <div>

        <link rel='stylesheet' href='../css/theme.css' type='text/css' media='all' />
        <div className="vc_row wpb_row vc_row-fluid">
          <div className="no_container">
            <div className="wpb_column vc_column_container vc_col-sm-12">
              <div className="vc_column-inner ">
                <div className="wpb_wrapper">
                  <div className="tz-Breadcrumb">
                    <div className="tzOverlayBreadcrumb">
                      <div className="container">
                         <h1><i> “Don’t wait to buy a property, buy a property and then wait.” – Will Rogers </i></h1>
						 <h2 style={{color:"#fff"}}>We want to change the way people buy Properties. </h2>
                      </div>
                      {/* end class container */}
                    </div>
                  </div>
                  {/* end class tzbreadcrumb */}

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="vc_row wpb_row vc_row-fluid tz-responsive-top tz-responsive-bottom vc_custom_1465548777430">
          <div className="container">
            <div className="row">
              <div className="wpb_column vc_column_container vc_col-sm-6">
                <div className="vc_column-inner vc_custom_1466821644769">
                  <div className="wpb_wrapper">
                    <div className="tz-home-title  title  text-left">
                      <div className="tz-content ">
                        <h3 className="text-left" >What is AWS?</h3>
                        <div className="tz-title-content">
                         <h4></h4>
							<p>Are you looking to buy a New Property or want to take rent a property if facing difficulty in getting the Agreement/Paperwork done? Then you are at the right place! We are a one-stop destination for all your Property and other management needs online. </p>
							<p>&nbsp;</p>
							<p>We provide Property Listing, Property Management, Asset Management, Warranty Services and all other property related services. We always have an expert with the right knowledge to advice you across all property sectors,so that you make the right property decisions.</p>
							<p>&nbsp;</p>
							<p>We look for long-term relationships with our Customers and offer a personalized service to ensure our Customers individual needs are met. We pride ourselves on our great customer service and believe that our service, both before and after the sale, is the best.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column vc_column_container vc_col-sm-6">
                <div className="vc_column-inner vc_custom_1462871038845">
                  <div className="wpb_wrapper">
                    <div className="wpb_single_image wpb_content_element vc_align_center">
                      <figure className="wpb_wrapper vc_figure">
                        <div className="vc_single_image-wrapper   vc_box_border_grey"><img width="900" height="507" src={img10} className="vc_single_image-img attachment-large" alt="" sizes="(max-width: 900px) 100vw, 900px" /></div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
		
		<div className="vc_row wpb_row vc_row-fluid tz-responsive-bottom vc_custom_1465552428823 vc_row-has-fill">
    <div className="container">
      <div className="row">
        <div className="tz-width-mobile wpb_column vc_column_container vc_col-sm-12">
          <div className="vc_column-inner vc_custom_1465553727693">
            <div className="wpb_wrapper">
              <div className="tz-home-title  title  text-center">
                <div className="tz-content ">
                  <h3 className="text-center"><a   target="_blank">Why us?</a></h3>
                  <div className="tz-title-content">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
		<div className="wpb_column vc_column_container vc_col-sm-4 vc_col-xs-12">
          <div className="vc_column-inner ">
            <div className="wpb_wrapper">
              <div className="tz-home-title  icon  text-center">
                <div className="tz-content ">
                  <div className="tz-social"><i className="icon-find-replace"></i></div>
                  <h3 className="text-center"><a   target="_blank">Verified Listings </a></h3>
                  <div className="tz-title-content">
                    <p>We provide you a verified list of properties to choose from</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
	   <div className="wpb_column vc_column_container vc_col-sm-4 vc_col-xs-12">
          <div className="vc_column-inner ">
            <div className="wpb_wrapper">
              <div className="tz-home-title  icon  text-center">
                <div className="tz-content ">
                  <div className="tz-social"><i className="icon-home4"></i></div>
                  <h3 className="text-center" >Ease of Booking</h3>
                  <div className="tz-title-content">
                    <p>Book your Property and other Management services with just a single  click!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
	   <div className="wpb_column vc_column_container vc_col-sm-4 vc_col-xs-12">
          <div className="vc_column-inner ">
            <div className="wpb_wrapper">
              <div className="tz-home-title  icon  text-center">
                <div className="tz-content ">
                  <div className="tz-social"><i className="icon-bag-dollar"></i></div>
                  <h3 className="text-center" >Safe & Secure</h3>
                  <div className="tz-title-content">
                    <p>We promise to provide you secure Contract & Warranty services.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
		
		
      </div>
    </div>
  </div>
		
        <div className="vc_row wpb_row vc_row-fluid tz-responsive-bottom vc_custom_1465552428823 vc_row-has-fill">
          <div className="container">
            <div className="row">
              <div className="tz-width-mobile wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner vc_custom_1465553727693">
                  <div className="wpb_wrapper">
                    <div className="tz-home-title  title  text-center">
                      <div className="tz-content ">
                        <h3 className="text-center"><a target="_blank">Our Services</a></h3>
                        <div className="tz-title-content">
                          <p>Assetswatch offers a great marketplace so you can grow your business.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
               <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-xs-12">
          <div className="vc_column-inner ">
            <div className="wpb_wrapper">
              <div className="tz-home-title  icon  text-center">
                <div className="tz-content ">
                  <div className="tz-social"><i className="icon-find-replace"></i></div>
                  <h3 className="text-center"><a   target="_blank">Property Search</a></h3>
                  <div className="tz-title-content">
                    <p>Users can select from millions of Verified Properties & Agents listed on our online portal. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-xs-12">
          <div className="vc_column-inner ">
            <div className="wpb_wrapper">
              <div className="tz-home-title  icon  text-center">
                <div className="tz-content ">
                  <div className="tz-social"><i className="icon-home4"></i></div>
                  <h3 className="text-center" >Property Management</h3>
                  <div className="tz-title-content">
                    <p>Users also have access to management services such as Paper-less Agreement management, Warranty services, Background verification of users and more.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  </div>
        <div className="vc_row wpb_row vc_row-fluid">
    <div className="no_container">
      <div className="wpb_column vc_column_container vc_col-sm-12">
        <div className="vc_column-inner ">
          <div className="wpb_wrapper">
            <div className="tz-home-title vc_custom_1468224223219 title tz-responsive-title text-center">
              <div className="tz-content ">
                <h3 className="text-center" >Our Agents</h3>
                <div className="tz-title-content">
                  <p></p>
                </div>
              </div>
            </div>
            <div className="tz-property-home  ">
              <div id="agentslider" className="tz-property-author agent-slider cbp cbp-l-grid-team">
                <div className="tz-author-item cbp-item">
                  <div className="tz-thumbnail"> <a > <img src={img1} className="home-img wide tall" alt="Real Estate WordPress Theme" width="260" height="420" /> <img src={img1} className="tz-img-overlay home-img wide tall" alt="Real Estate WordPress Theme" width="260px" height="420px" /> </a> </div>
                  <div className="tz-author-content">
                    <h4> Michael Rutter </h4>
                    <span>Selling AgentSelling agent</span>
                    <div className="TzSocialLink"> <a href="https://www.facebook.com/templaza"> <i className="fa fa-facebook"></i> </a> <a href="https://twitter.com/templazavn"> <i className="fa fa-twitter"></i> </a> <a href="https://plus.google.com/+Templaza/posts"> <i className="fa fa-google-plus"></i> </a> <a > <i className="fa fa-linkedin"></i> </a> </div>
                  </div>
                </div>
                <div className="tz-author-item cbp-item">
                  <div className="tz-thumbnail"> <a href="http://wordpress.templaza.net/real-estate/agent-public/?&id=demo10"> <img src={img1} className="home-img wide tall" alt="Real Estate WordPress Theme" width="260" height="420" /> 
                  <img src={img1} className="tz-img-overlay home-img wide tall" alt="Real Estate WordPress Theme" width="260px" height="420px" /> </a> </div>
                  <div className="tz-author-content">
                    <h4> Loan Lininger </h4>
                    <span>Selling AgentSelling agent</span>
                    <div className="TzSocialLink"> <a href="https://www.facebook.com/templaza"> <i className="fa fa-facebook"></i> </a> <a href="https://twitter.com/templazavn"> <i className="fa fa-twitter"></i> </a> <a href="https://plus.google.com/+Templaza/posts"> <i className="fa fa-google-plus"></i> </a> <a > <i className="fa fa-linkedin"></i> </a> </div>
                  </div>
                </div>
                <div className="tz-author-item cbp-item">
                  <div className="tz-thumbnail"> <a href="http://wordpress.templaza.net/real-estate/agent-public/?&id=demo9"> 
                  <img src={img2} className="home-img wide tall" alt="Real Estate WordPress Theme" width="259" height="418" /> 
                  <img src={img2} className="tz-img-overlay home-img wide tall" alt="Real Estate WordPress Theme" width="259px" height="418px" /> </a> </div>
                  <div className="tz-author-content">
                    <h4> Tommy Wiltshire </h4>
                    <span>Renting AgentSelling agent</span>
                    <div className="TzSocialLink"> <a href="https://www.facebook.com/templaza"> <i className="fa fa-facebook"></i> </a> <a href="https://twitter.com/templazavn"> <i className="fa fa-twitter"></i> </a> <a href="https://plus.google.com/+Templaza/posts"> <i className="fa fa-google-plus"></i> </a> <a > <i className="fa fa-linkedin"></i> </a> </div>
                  </div>
                </div>
                <div className="tz-author-item cbp-item">
                  <div className="tz-thumbnail"> <a href="http://wordpress.templaza.net/real-estate/agent-public/?&id=demo8"> 
                  <img src={img3} className="home-img wide tall" alt="Real Estate WordPress Theme" width="260" height="420" /> 
                  <img src={img3} className="tz-img-overlay home-img wide tall" alt="Real Estate WordPress Theme" width="260px" height="420px" /> </a> </div>
                  <div className="tz-author-content">
                    <h4> Christine Swim </h4>
                    <span>Selling AgentSelling agent</span>
                    <div className="TzSocialLink"> <a href="https://www.facebook.com/templaza"> <i className="fa fa-facebook"></i> </a> <a href="https://twitter.com/templazavn"> <i className="fa fa-twitter"></i> </a> <a href="https://plus.google.com/+Templaza/posts"> <i className="fa fa-google-plus"></i> </a> <a > <i className="fa fa-linkedin"></i> </a> </div>
                  </div>
                </div>
                <div className="tz-author-item cbp-item">
                  <div className="tz-thumbnail"> <a href="http://wordpress.templaza.net/real-estate/agent-public/?&id=demo7"> 
                  <img src={img4} className="home-img wide tall" alt="Real Estate WordPress Theme" width="260" height="420" />
                   <img src={img4} className="tz-img-overlay home-img wide tall" alt="Real Estate WordPress Theme" width="260px" height="420px" /> </a> </div>
                  <div className="tz-author-content">
                    <h4> Jonas Demar </h4>
                    <span>Selling AgentSelling agent</span>
                    <div className="TzSocialLink"> <a href="https://www.facebook.com/templaza"> <i className="fa fa-facebook"></i> </a> <a href="https://twitter.com/templazavn"> <i className="fa fa-twitter"></i> </a> <a href="https://plus.google.com/+Templaza/posts"> <i className="fa fa-google-plus"></i> </a> <a > <i className="fa fa-linkedin"></i> </a> </div>
                  </div>
                </div>
                <div className="tz-author-item cbp-item">
                  <div className="tz-thumbnail"> <a href="http://wordpress.templaza.net/real-estate/agent-public/?&id=demo6"> 
                  <img src={img5} className="home-img wide tall" alt="Real Estate WordPress Theme" width="260" height="420" />
                  <img src={img5} className="tz-img-overlay home-img wide tall" alt="Real Estate WordPress Theme" width="260px" height="420px" /> </a> </div>
                  <div className="tz-author-content">
                    <h4> Rodrick Weisner </h4>
                    <span>Renting AgentSelling agent</span>
                    <div className="TzSocialLink"> <a href="https://www.facebook.com/templaza"> <i className="fa fa-facebook"></i> </a> <a href="https://twitter.com/templazavn"> <i className="fa fa-twitter"></i> </a> <a href="https://plus.google.com/+Templaza/posts"> <i className="fa fa-google-plus"></i> </a> <a > <i className="fa fa-linkedin"></i> </a> </div>
                  </div>
                </div>
                <div className="tz-author-item cbp-item">
                  <div className="tz-thumbnail"> <a href="http://wordpress.templaza.net/real-estate/agent-public/?&id=demo5"> 
                  <img src={img6} className="home-img wide tall" alt="Real Estate WordPress Theme" width="260" height="421" /> 
                  <img src={img6} className="tz-img-overlay home-img wide tall" alt="Real Estate WordPress Theme" width="260px" height="421px" /> </a> </div>
                  <div className="tz-author-content">
                    <h4> Josh Spitzer </h4>
                    <span>Selling AgentSelling agent</span>
                    <div className="TzSocialLink"> <a href="https://www.facebook.com/templaza"> <i className="fa fa-facebook"></i> </a> <a href="https://twitter.com/templazavn"> <i className="fa fa-twitter"></i> </a> <a href="https://plus.google.com/+Templaza/posts"> <i className="fa fa-google-plus"></i> </a> <a > <i className="fa fa-linkedin"></i> </a> </div>
                  </div>
                </div>
                <div className="tz-author-item cbp-item">
                  <div className="tz-thumbnail"> <a href="http://wordpress.templaza.net/real-estate/agent-public/?&id=demo4"> 
                  <img src={img7} className="home-img wide tall" alt="Real Estate WordPress Theme" width="260" height="420" /> 
                  <img src={img7} className="tz-img-overlay home-img wide tall" alt="Real Estate WordPress Theme" width="260px" height="420px" /> </a> </div>
                  <div className="tz-author-content">
                    <h4> Dennis Vassar </h4>
                    <span>Selling AgentSelling agent</span>
                    <div className="TzSocialLink"> <a > <i className="fa fa-facebook"></i> </a> <a href="https://twitter.com/templazavn"> <i className="fa fa-twitter"></i> </a> <a href="https://plus.google.com/+Templaza/posts"> <i className="fa fa-google-plus"></i> </a> <a > <i className="fa fa-linkedin"></i> </a> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="vc_row wpb_row vc_row-fluid tz-responsive">
    <div className="container">
      <div className="row">
        <div className="wpb_column vc_column_container vc_col-sm-12">
          <div className="vc_column-inner ">
            <div className="wpb_wrapper">
              <div className="tz-home-title vc_custom_1468224243653 title tz-responsive-title text-center">
                <div className="tz-content ">
                  <h3 className="text-center" >What They Say About Us</h3>
                  <div className="tz-title-content">
                    <p>Tenant Cloud saves time in processing rental payments and I'm always sure that the rent is paid every month. I love the "split the rent option" so I'm going to sign up my roommates too!</p>
                  </div>
                </div>
              </div>
              <div className="tz-introduce vc_custom_1466997471118">
                <div id="whattheysayaboutus" className="tz-life-content-5ac27a2c04a2d cbp cbp-l-grid-team true">
                  <div className="tz-instruction cbp-item">
                    <div className="tz-left">
                    <img className="tzClientImage" alt="Hadell Doe" src={img8} /></div>
                    <div className="tz-right">
                      <h4>Hadell Doe<span>Manager</span></h4>
                      <p>Tenant Cloud is really easy to use and user-friendly. I estimate savings to be more then $1,000 over the first month I have been using it. But most amazing thing — Tenant Cloud is totally free for my 14 units!</p>
                    </div>
                  </div>
                  <div className="tz-instruction cbp-item">
                    <div className="tz-left">
                    <img className="tzClientImage" alt="Hadell Doe" src={img8} /></div>
                    <div className="tz-right">
                      <h4>Kevin Harris</h4>
                      <p>The product is amazing! My site has a great design and it's really easy to edit the content on it. Actually there's no similar product on the market. Thank you guys for this incredible tool!</p>
                    </div>
                  </div>
                  <div className="tz-instruction cbp-item">
                    <div className="tz-left">
                    <img className="tzClientImage" alt="Hadell Doe" src={img8} /></div>
                    <div className="tz-right">
                      <h4>Hadell Doe<span>Art Director</span></h4>
                      <p>The product is amazing! My site has a great design and it's really easy to edit the content on it. Actually there's no similar product on the market. Thank you guys for this incredible tool!</p>
                    </div>
                  </div>
                  <div className="tz-instruction cbp-item">
                    <div className="tz-left">
                    <img className="tzClientImage" alt="Hadell Doe" src={img8} /></div>
                    <div className="tz-right">
                      <h4>Hadell Doe<span>Art Director</span></h4>
                      <p>The product is amazing! My site has a great design and it's really easy to edit the content on it. Actually there's no similar product on the market. Thank you guys for this incredible tool!</p>
                    </div>
                  </div>
                </div>
              </div>
         </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="vc_row wpb_row vc_row-fluid">
    <div className="no_container">
      <div className="wpb_column vc_column_container vc_col-sm-12">
        <div className="vc_column-inner ">
          <div className="wpb_wrapper"> 
            <script type="text/javascript">
        
    </script> 
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    );
  }
}