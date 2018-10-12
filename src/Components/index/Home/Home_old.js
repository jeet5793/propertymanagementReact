import React from 'react'
import revoslider from '../../../images/revoslider.jpg'
import night_dark_hotel_luxury from '../../../images/night-dark-hotel-luxury.jpg'
import img1 from '../../../images/11619641833_5a64c42cce_k-e1464016780977.jpg';
import img2 from '../../../images/3888165079_ccda0ebacb_o.jpg'
import img3 from '../../../images/properties-9-2-1024x373.jpg'
import img4 from '../../../images/properties-9-2-1024x373.jpg'
import img5 from '../../../images/properties-8-2-1024x373.jpg'
import img6 from '../../../images/properties-8-2-1024x373.jpg'
import img7 from '../../../images/properties-6-2-1024x373.jpg'
import img8 from '../../../images/properties-6-2-1024x373.jpg'
import img9 from '../../../images/properties-11-2-1024x373.jpg'
import img10 from '../../../images/properties-10-1-1024x683.jpg'
import img11 from '../../../images/flexslider-1024x680.jpg'
import img12 from '../../../images/properties-9-2-1024x373.jpg'
import img13 from '../../../images/properties-8-2-1024x373.jpg'
import img14 from '../../../images/properties-6-2-1024x373.jpg'
import img15 from '../../../images/properties-11-2-1024x373.jpg'
import img16 from '../../../images/properties-10-1-1024x683.jpg'
import img17 from '../../../images/flexslider-1024x680.jpg'
import img18 from '../../../images/Advertisement 2.png'
import img19 from '../../../images/jack.jpg'
import img20 from '../../../images/kiara.jpg'
import img21 from '../../../images/icons/property.png'
import img22 from '../../../images/icons/tenant.png'
import img23 from '../../../images/icons/owners.png'
import img24 from '../../../images/icons/deals.png'
import overlay from '../../../images/overlay.png'
import '../../../index.css'
//import '../../../css/comp-main.css'
//import '../../../css/style.css'
import Header from '../Header/Header';
import FindYourProperty from '../Property/findYourProperty'
import Testimonial from './testimonial.js'
import HomeProperty from '../Property/homeProperty'
import StaticCount from './staticCount'


import API_URL from '../../../app-config';

function handleScriptLoad(){	
	var jQuery=window.$;
	var $=window.$;
	var tz_realestate_ResizeImage = function(obj) {
		'use strict';
		var widthStage;
		var heightStage;
		var widthImage;
		var heightImage;
		var resizeImage = function(widthImage,heightImage,widthStage,heightStage) {
			var escImageX=widthStage/widthImage;
			var escImageY=heightStage/heightImage;
			var escalaImage=(escImageX>escImageY)?escImageX:escImageY;
			var widthV=widthImage*escalaImage;
			var heightV=heightImage*escalaImage;
			var posImageY=0;
			var posImageX=0;
			if(heightV>heightStage){
				posImageY=(heightStage-heightV)/2;
			}
			if(widthV>widthStage){
				posImageX=(widthStage-widthV)/2;
			}
			return{top:posImageY,left:posImageX,width:widthV,height:heightV};
		};
		obj.each(function(i,el) {
			heightStage=jQuery(this).height();
			widthStage=jQuery(this).width();
			var img_url=jQuery(this).find('img').attr('src');
			var image=new Image();
			image.src=img_url;
			widthImage=image.naturalWidth;
			heightImage=image.naturalHeight;
			var tzimg=new resizeImage(widthImage,heightImage,widthStage,heightStage);
			jQuery(this).find('img').css({top:tzimg.top,left:tzimg.left,width:tzimg.width,height:tzimg.height});
		});
	}

	var pro_grid_w_win = $(window).width();
	var gapHorizontal, gapVertical;
	if (pro_grid_w_win > 768) {
		gapHorizontal = 0;
		gapVertical = 28;
	} else {
		gapHorizontal = 0;
		gapVertical = 20;
	}
	$('#tz-pro-slider-5ac1cdf22e330').cubeportfolio({
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
			// var indexElement = $(element).parents('.cbp-item').index(),
			//     item = singlePage.eq(indexElement);

			// this.updateSinglePage(item.html());
		}
	});
	tz_realestate_ResizeImage(jQuery('#tz-pro-slider-5ac1cdf22e330 .tz-caption'));
		 var slider_images = jQuery(".tz-slider-images")
		 var h_window = jQuery(window).height();
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
		tz_realestate_ResizeImage(jQuery(".tz-slider-images"));
		$('#tzloadding').remove();
		$('html, body').animate({scrollTop: 0}, 800); 
}

class Home extends React.Component{
	constructor(props){
		super(props);
		this.state={
    		properties:[]
		}
	}
	
	handleScriptLoad(){	
		var jQuery=window.$;
		var $=window.$;
		var tz_realestate_ResizeImage = function(obj) {
			'use strict';
			var widthStage;
			var heightStage;
			var widthImage;
			var heightImage;
			var resizeImage = function(widthImage,heightImage,widthStage,heightStage) {
				var escImageX=widthStage/widthImage;
				var escImageY=heightStage/heightImage;
				var escalaImage=(escImageX>escImageY)?escImageX:escImageY;
				var widthV=widthImage*escalaImage;
				var heightV=heightImage*escalaImage;
				var posImageY=0;
				var posImageX=0;
				if(heightV>heightStage){
					posImageY=(heightStage-heightV)/2;
				}
				if(widthV>widthStage){
					posImageX=(widthStage-widthV)/2;
				}
				return{top:posImageY,left:posImageX,width:widthV,height:heightV};
			};
			obj.each(function(i,el) {
				heightStage=jQuery(this).height();
				widthStage=jQuery(this).width();
				var img_url=jQuery(this).find('img').attr('src');
				var image=new Image();
				image.src=img_url;
				widthImage=image.naturalWidth;
				heightImage=image.naturalHeight;
				var tzimg=new resizeImage(widthImage,heightImage,widthStage,heightStage);
				jQuery(this).find('img').css({top:tzimg.top,left:tzimg.left,width:tzimg.width,height:tzimg.height});
			});
		}

		var pro_grid_w_win = $(window).width();
		var gapHorizontal, gapVertical;
		if (pro_grid_w_win > 768) {
			gapHorizontal = 0;
			gapVertical = 28;
		} else {
			gapHorizontal = 0;
			gapVertical = 20;
		}
		$('#tz-pro-slider-5ac1cdf22e330').cubeportfolio({
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
				// var indexElement = $(element).parents('.cbp-item').index(),
				//     item = singlePage.eq(indexElement);

				// this.updateSinglePage(item.html());
			}
		});
		tz_realestate_ResizeImage(jQuery('#tz-pro-slider-5ac1cdf22e330 .tz-caption'));
	   	var slider_images = jQuery(".tz-slider-images")
	   	var h_window = jQuery(window).height();
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
	    tz_realestate_ResizeImage(jQuery(".tz-slider-images"));
	    $('#tzloadding').remove();
	    $('html, body').animate({scrollTop: 0}, 800); 
	}

	componentDidMount(){		
		this.advertisementImgLoad();
		this.properties();
	}

	properties(){
		fetch(`${API_URL}assetsapi/property/`)
		.then((response)=> {
			response.json().then((data)=>{
				this.setState({ properties: data.property },this.handleScriptLoad)
			})
		});
	}

	advertisementImgLoad(){
		var img='';
		fetch(`${API_URL}assetsapi/advertisement/`)
		.then(function(response) {
			return response.json();
		}).then(function(data) {
			img=data.advertisement[0].img_path
			document.getElementById('advertisement').src = `${API_URL}assetsadmin/`+img;
		});
	}

	render(){
		return(
			<div>
				<div className="vc_row wpb_row vc_row-fluid">
				    <div className="no_container">
				      <div className="wpb_column vc_column_container vc_col-sm-12">
				        <div className="vc_column-inner ">
				          <div className="wpb_wrapper">
				            <div className="tz-homeslide-image">
				              <div className="tz-slider-images">
				                <div className="tz-slider-item"> <img src={revoslider} alt="revoslider" /> </div>
				                <div className="tz-slider-item"> <img src={night_dark_hotel_luxury} alt="night-dark-hotel-luxury" /> </div>
				                <div className="tz-slider-item"> <img src={img1} alt="11619641833_5a64c42cce_k" /> </div>
				                <div className="tz-slider-item"> <img src={img2} alt="3888165079_ccda0ebacb_o"  /> </div>
				              </div>
				              <div className="tz-center-content">
				                <div className="tz-overlay"><img src={overlay} width="1920px" height="171px" alt="Assets Watch" /></div>
				                <h2>FIND YOUR PERFECT HOME TODAY</h2>
				                {/*<p>WE HAVE 200.000 FOR YOU TO CHOOSE FROM</p>*/}
				              </div>
				            </div>
				          </div>
				        </div>
				      </div>
				    </div>
				  </div>
				  <div className="vc_row wpb_row vc_row-fluid vc_custom_1465522279863 vc_row-has-fill">
				    <div className="container">
				      <div className="row">
				        <div className="wpb_column vc_column_container vc_col-sm-12">
				          <div className="vc_column-inner ">
				            <div className="wpb_wrapper">
				              <div className="tz-property-home search-border">
				              <FindYourProperty />
				              </div>				       
				            </div>
				          </div>
				        </div>
				      </div>
				    </div>
				  </div>
				  <div className="vc_row wpb_row vc_row-fluid tz-responsive vc_custom_1465523336236">
				    <div className="container">
				      <div className="row">
				        <div className="wpb_column vc_column_container vc_col-sm-12">
				          <div className="vc_column-inner "> </div>
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
				                  <h3 className="text-center">Real Estate</h3>
				                  <div className="tz-title-content">
				                    
				                  </div>
				                </div>
				              </div>
				              <div className="tabbable-panel">
				                <div className="tabbable-line">
				                  <ul className="nav nav-tabs ">
				                    <li className="active"> <a href="#tab_default_1" data-toggle="tab"> Popular </a> </li>
				                    <li> <a href="#tab_default_1" data-toggle="tab"> Recent </a> </li>
				                    <li> <a href="#tab_default_3" data-toggle="tab"> Feature </a> </li>
				                  </ul>
				                  <div className="tab-content">
				                    <div className="tab-pane active" id="tab_default_1">
				                      <div className="wpb_wrapper">
				                        <div className="tz-property-home vc_custom_1466569792560 tz-slider">
				                          <div id="tz-pro-slider-5ac1cdf22e330" className="cbp cbp-l-grid-team tz-property-slider false">
				          					{
				          						this.state.properties.map((property, index) => (
				          							<HomeProperty key={index} description={property.description}  Title={property.title} src={API_URL+'/assetsadmin/'+property.img_path[0].img_path} Status={property.property_status} total_amount={property.total_amount} />
				          						))
				          					}
				                          </div>
				                        </div>
				                      </div>
				                    </div>
				                    <div className="tab-pane" id="tab_default_2">
				                      <div className="wpb_wrapper">
				                        <div className="tz-property-home vc_custom_1466569792560 tz-slider">
				                          <div id="tz-pro-slider-5ac1cdf22e331" className="cbp cbp-l-grid-team tz-property-slider false">
				                            <div className="tz-property-content cbp-item  slider ">
				                              <div className="tz-property-thum cbp-caption">
				                                <div className="cbp-caption-defaultWrap">
				                                  <figure> <img src={img12} alt="Assets Watch" width="900" height="328" />
				                                    <figcaption className="for-sale for-rent"> FOR RENT </figcaption>
				                                  </figure>
				                                </div>
				                                <div className="cbp-caption-activeWrap">
				                                  <div className="cbp-l-caption-alignCenter">
				                                    <div className="cbp-l-caption-body"> <a href="" className="cbp-l-caption-buttonLeft" rel="nofollow"> 
				                                      <i className="icon-link"></i> </a> <a href={img12} className="cbp-lightbox cbp-l-caption-buttonRight" data-title="Stylish Apartment"> 
				                                      <i className="icon-plus-circle"></i> </a> </div>
				                                  </div>
				                                </div>
				                              </div>
				                              <div className="tz-property-des">
				                                <h5><a href="">Stylish Apartment</a></h5>
				                                <div className="tz-property-price"> $18,000&nbsp;<span>/ Month</span> </div>
				                                <div className="tz-property-excerpt"> This owner built home was created to cater for every possible family need without quality compromise. Every living space has&hellip; </div>
				                              </div>
				                            </div>
				                            <div className="tz-property-content cbp-item  slider ">
				                              <div className="tz-property-thum cbp-caption">
				                                <div className="cbp-caption-defaultWrap">
				                                  <figure> <img src={img13} alt="Assets Watch" width="900" height="328" />
				                                    <figcaption className="for-sale rented"> RENTED </figcaption>
				                                  </figure>
				                                </div>
				                                <div className="cbp-caption-activeWrap">
				                                  <div className="cbp-l-caption-alignCenter">
				                                    <div className="cbp-l-caption-body"> <a href="" className="cbp-l-caption-buttonLeft" rel="nofollow"> 
				                                      <i className="icon-link"></i> </a> <a href={img13} className="cbp-lightbox cbp-l-caption-buttonRight" data-title="Sophisticated Residence" > 
				                                      <i className="icon-plus-circle"></i> </a> </div>
				                                  </div>
				                                </div>
				                              </div>
				                              <div className="tz-property-des">
				                                <h5><a href="">Sophisticated Residence</a></h5>
				                                <div className="tz-property-price"> $16,000&nbsp; </div>
				                                <div className="tz-property-excerpt"> This owner built home was created to cater for every possible family need without quality compromise. Every living space has&hellip; </div>
				                              </div>
				                            </div>
				                            <div className="tz-property-content cbp-item  slider ">
				                              <div className="tz-property-thum cbp-caption">
				                                <div className="cbp-caption-defaultWrap">
				                                  <figure> <img src={img14} alt="Assets Watch" width="900" height="328" />
				                                    <figcaption className="for-sale for-rent"> FOR RENT </figcaption>
				                                  </figure>
				                                </div>
				                                <div className="cbp-caption-activeWrap">
				                                  <div className="cbp-l-caption-alignCenter">
				                                    <div className="cbp-l-caption-body"> <a href="" className="cbp-l-caption-buttonLeft" rel="nofollow"> 
				                                      <i className="icon-link"></i> </a> <a href={img14} className="cbp-lightbox cbp-l-caption-buttonRight" data-title="Luxury Mansion"> 
				                                      <i className="icon-plus-circle"></i> </a> </div>
				                                  </div>
				                                </div>
				                              </div>
				                              <div className="tz-property-des">
				                                <h5><a href="">Luxury Mansion</a></h5>
				                                <div className="tz-property-price"> $30,000&nbsp;<span>/ Month</span> </div>
				                                <div className="tz-property-excerpt"> This owner built home was created to cater for every possible family need without quality compromise. Every living space has&hellip; </div>
				                              </div>
				                            </div>
				                            <div className="tz-property-content cbp-item  slider ">
				                              <div className="tz-property-thum cbp-caption">
				                                <div className="cbp-caption-defaultWrap">
				                                  <figure> <img src={img15} alt="Assets Watch" width="900" height="328" />
				                                    <figcaption className="for-sale "> FOR SALE </figcaption>
				                                  </figure>
				                                </div>
				                                <div className="cbp-caption-activeWrap">
				                                  <div className="cbp-l-caption-alignCenter">
				                                    <div className="cbp-l-caption-body"> <a href="" className="cbp-l-caption-buttonLeft" rel="nofollow"> 
				                                      <i className="icon-link"></i> </a> <a href={img15} className="cbp-lightbox cbp-l-caption-buttonRight" data-title="Elegant Apartment"> 
				                                      <i className="icon-plus-circle"></i> </a> </div>
				                                  </div>
				                                </div>
				                              </div>
				                              <div className="tz-property-des">
				                                <h5><a href="">Elegant Apartment</a></h5>
				                                <div className="tz-property-price"> $26,000&nbsp; </div>
				                                <div className="tz-property-excerpt"> &nbsp; This owner built home was created to cater for every possible family need without quality compromise. Every living space&hellip; </div>
				                              </div>
				                            </div>
				                            <div className="tz-property-content cbp-item  slider ">
				                              <div className="tz-property-thum cbp-caption">
				                                <div className="cbp-caption-defaultWrap">
				                                  <figure> <img src={img16} alt="Assets Watch" width="900" height="600" />
				                                    <figcaption className="for-sale "> FOR SALE </figcaption>
				                                  </figure>
				                                </div>
				                                <div className="cbp-caption-activeWrap">
				                                  <div className="cbp-l-caption-alignCenter">
				                                    <div className="cbp-l-caption-body"> <a href="" className="cbp-l-caption-buttonLeft" rel="nofollow"> 
				                                      <i className="icon-link"></i> </a> <a href={img16} className="cbp-lightbox cbp-l-caption-buttonRight" data-title="Joint Tenancy"> 
				                                      <i className="icon-plus-circle"></i> </a> </div>
				                                  </div>
				                                </div>
				                              </div>
				                              <div className="tz-property-des">
				                                <h5><a href="">Joint Tenancy</a></h5>
				                                <div className="tz-property-price"> $18,000&nbsp; </div>
				                                <div className="tz-property-excerpt"> The advantage of this method is that the parties in the ownership need not be married or related. The downside&hellip; </div>
				                              </div>
				                            </div>
				                            <div className="tz-property-content cbp-item  slider ">
				                              <div className="tz-property-thum cbp-caption">
				                                <div className="cbp-caption-defaultWrap">
				                                  <figure> <img src={img17} alt="Assets Watch" width="900" height="598" />
				                                    <figcaption className="for-sale rented"> RENTED </figcaption>
				                                  </figure>
				                                </div>
				                                <div className="cbp-caption-activeWrap">
				                                  <div className="cbp-l-caption-alignCenter">
				                                    <div className="cbp-l-caption-body"> <a href="" className="cbp-l-caption-buttonLeft" rel="nofollow"> 
				                                      <i className="icon-link"></i> </a> <a href={img17} className="cbp-lightbox cbp-l-caption-buttonRight" data-title="Stylish Apartment"> 
				                                      <i className="icon-plus-circle"></i> </a> </div>
				                                  </div>
				                                </div>
				                              </div>
				                              <div className="tz-property-des">
				                                <h5><a href="">Stylish Apartment</a></h5>
				                                <div className="tz-property-price"> $18,000&nbsp; </div>
				                                <div className="tz-property-excerpt"> This owner built home was created to cater for every possible family need without quality compromise. Every living space has&hellip; </div>
				                              </div>
				                            </div>
				                          </div>
				                        </div>
				                      </div>
				                    </div>
				                    <div className="tab-pane" id="tab_default_3">
				                      <p> Howdy, I'm in Tab 3. </p>
				                      <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat </p>
				                      <p> <a className="btn btn-info" href="#" target="_blank"> Learn more... </a> </p>
				                    </div>
				            <div style={{marginLeft:'43%'}} className="button-holder center-block"> <a href="property.html" className="TzReadmore blog-read-more-btn"> <span>Read More</span> <span> </span> </a> </div>
				      </div>
				                </div>
				              
							  </div>
							  
							  
							  
				            </div>
				          </div>
				        </div>
				      </div>
				    </div>
				  </div>
				 <div className="vc_row wpb_row vc_row-fluid tz-responsive advs-img">
				  <img id="advertisement" src={img18} />
				  </div>
				  <div className="vc_row wpb_row vc_row-fluid tz-responsive testimonial-bg">
				    <div className="container">
				      <div className="row">
				        <div className="wpb_column vc_column_container vc_col-sm-12">
				          <div className="vc_column-inner ">
				            <div className="wpb_wrapper">
				              <div className="tz-home-title vc_custom_1468224243653 title tz-responsive-title text-center">
				                <div className="tz-content ">
				                  <h3 className="text-center">Testimonials</h3>
				                  <div className="tz-title-content">
				                    <p>Assetswatch saves time in processing rental payments and I'm always sure that the rent is paid every month. I love the "split the rent option" so I'm going to sign up my roommates too!</p>
				                  </div>
				                </div>
				              </div>
				              <div className="col-md-8 col-md-offset-2">
			

				              <Testimonial />




								{/* testimonial*/}                
				              </div>
				            </div>
				          </div>
				        </div>
				      </div>
				    </div>
				  </div>
				  <StaticCount />
			</div>
			);
	}
}
export default Home;