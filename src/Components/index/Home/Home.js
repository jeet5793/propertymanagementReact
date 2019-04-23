import React from 'react'
import SmartPaymentSlider from '../../../images/elc-payment.jpg'
import agreementSlider from '../../../images/elc-agreement.jpg'
import bgvSlider from '../../../images/bgv.jpg';
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
import { Redirect,Link } from 'react-router-dom';
import Slider from './Slider'
import API_URL from '../../../app-config';
import $ from 'jquery';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img_not_available from '../../../images/img_not_available.png'

class Home extends React.Component{
	constructor(props){
		super(props);
		this.state={
    		properties:[],
			testimonialDetail:[],
			showPopup: false,
			showPropDetail:false
		}
		this.onClickClose=this.onClickClose.bind(this)
		this.onClickImagePreview = this.onClickImagePreview.bind(this)
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
		this.testimonial();
	}

	properties(){
		$("#loaderDiv").show();
		fetch(`${API_URL}assetsapi/property/`)
		.then((response)=> {
			response.json().then((data)=>{
				$("#loaderDiv").hide();
				this.setState({ properties: data.property },this.handleScriptLoad)
			})
		});
	}
	testimonial(){
		fetch(`${API_URL}assetsapi/testimonial`, {
			  method: 'GET'
			})
			.then(res => res.json())
			.then(
			  (result) => {
				
				if (result.success) {
				   this.setState({testimonialDetail:result.testimonial});
				  } 
				 // console.log(this.state.testimonialDetail)
			  },
			(error) => {
			  console.log('error')
			}
		  )  
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
onClickImagePreview(id){
$("#loaderDiv").show();
      fetch(`${API_URL}assetsapi/property_images/`+id, {
        method: 'get'
      })
      .then(res => res.json())
      .then(
        (result) => {
		  $("#loaderDiv").hide();
          if (result.success==1) {
			  
			this.setState({propertiesImg:result.property_images,showPopup: !this.state.showPopup});
			 // $('#proImageConfirmImg').show();
          } 
          
        }),
      (error) => {
        console.log('error')
      }
}
onClickClose() {
	    
		// $("#proImageConfirm").hide();
		this.setState({showPopup: false});
	}
	onClickClosePropDetail=()=>{
	    
		// $("#proImageConfirm").hide();
		this.setState({showPropDetail: false});
	}
	addDefaultSrc(ev){
	  ev.target.src = img_not_available;
	}
	onClickPropertyDetail = (id)=>{
		//e.stopPropagation();
	 //console.log('detailProp' + JSON.stringify(id));
	
	 //this.setState({detailProp:detailProp,showPopup: true});
	 this.getPropertyDetails(id);
	}
	getPropertyDetails(id){
		$("#loaderDiv").show();
		fetch(`${API_URL}assetsapi/property_details/`+id)
		.then((response)=> {        
			response.json().then((data)=>{
			$("#loaderDiv").hide();
				// this.setState({proppertydetails:data.property})
				// debugger;
				var owners=[];
				for(var i=0;i<data.property.length;i++) {
					for(var j=0;j<data.property[i].owner_details.length;j++) {
						owners.push(data.property[i].owner_details[j]);
					}
				}
				//this.setState({showPopup: true})
				this.setState({owners:owners,proppertydetails:data.property[0],showPropDetail:true})
			})
		});
	}
	render(){
		const proppertydetails= this.state.proppertydetails;
		// debugger;
		return(
			<div className="mg-top-129">
				<div className="vc_row wpb_row vc_row-fluid">
				    <div className="no_container">
				      <div className="wpb_column vc_column_container vc_col-sm-12">
				        <div className="vc_column-inner ">
				          <div className="wpb_wrapper">
				            <div className="tz-homeslide-image">
				              <div className="tz-slider-images">
				                <div className="tz-slider-item"> <img src={SmartPaymentSlider} className="img-responsive slider-img" alt="smart-payment-slider" /> </div>
				                <div className="tz-slider-item"> <img src={agreementSlider} className="img-responsive slider-img" alt="agreement-slider" /> </div>
				                <div className="tz-slider-item"> <img src={bgvSlider} className="img-responsive slider-img" alt="bgv-slider"/> </div>
				                {/* <div className="tz-slider-item"> <img src={img2} alt="3888165079_ccda0ebacb_o"/> </div> */}
				              </div>
				              <div className="tz-center-content">
				                <div className="tz-overlay"><img src={overlay} width="1920px" height="171px" alt="Assets Watch" /></div>
				                {/* <h2>FIND YOUR PERFECT HOME TODAY</h2> */}
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
				              <FindYourProperty onUpdateHandler={(data) => {
				              	let propState;
				              	if (data.success === 0){
                                    propState = {isPropertySearchEmpty: true, propertySearchMsg: data.msg}
								} else {
                                    var owners = [];
                                    for (var i = 0; i < data.length; i++)
                                        for (var j = 0; j < data[i].owner_details.length; j++)
                                            owners.push(data[i].owner_details[j])
                                    propState = {owners:owners,properties: data.property_search, isPropertySearchEmpty: false};
								}
								 //console.log('propState'+JSON.stringify(propState));
								   this.props.history.push('/properties', {state: propState});
							  }} />
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
				                    {/*<li className="active"> <a href="#tab_default_1" data-toggle="tab"> Properties </a> </li>
				                     <li> <a href="#tab_default_1" data-toggle="tab"> Recent </a> </li>
								<li> <a href="#tab_default_3" data-toggle="tab"> Feature </a> </li> */}
				                  </ul>
				                  <div className="tab-content">
				                    
									<div className="tab-pane active" id="tab_default_1">
				                      <div className="wpb_wrapper">
				                        <div className="tz-property-home vc_custom_1466569792560 tz-slider">
				                          <div id="tz-pro-slider-5ac1cdf22e330" className="cbp cbp-l-grid-team tz-property-slider false">
				          					{/*
				          						this.state.properties?this.state.properties.map((property, index) => (
				          							<HomeProperty description={property.description}  Title={property.title} src={property.img_path.length>0?API_URL+property.img_path[0].img_path:''} Status={property.property_status} total_amount={property.total_amount} id = {property.id} onClickImagePreview={this.onClickImagePreview}/>
				          						)):<h3 style={{textAlign:'center'}}>No Property Available</h3>*/}
											{this.state.properties?this.state.properties.map((property, index) => (
												<div className="tz-property-content cbp-item  slider ">
													<div className="tz-property-thum cbp-caption">
														<div className="cbp-caption-defaultWrap">
															<figure> 
																 <img onError={this.addDefaultSrc} src={property.img_path.length>0?API_URL+property.img_path[0].img_path:img_not_available} alt="Assets Watch" width="900" height="328" />
																 <figcaption className="for-sale for-rent"> {property.property_status} </figcaption>
															</figure>
														</div>
														<div className="cbp-caption-activeWrap">
															<div className="cbp-l-caption-alignCenter">
																
																<div className="cbp-l-caption-body"> 
																	
																	<a onClick = {()=>this.onClickPropertyDetail(property.id)} className = "cbp-l-caption-buttonLeft" rel="nofollow"><i className="icon-link"></i> </a> 
																   <a  className="cbp-l-caption-buttonRight"  onClick={this.onClickImagePreview.bind(this,property.id)} > <i className="icon-plus-circle" ></i> </a> 
																</div>
															</div>
														</div>
													</div>
														
														<div className="tz-property-des">
															<h5><a onClick = {()=>this.onClickPropertyDetail(property.id)}>{property.title}</a></h5>
															<div className="tz-property-price"> ${property.property_status=='Rent'?property.rent:property.total_amount}&nbsp;<span>/ Month</span> </div>
															<div className="tz-property-excerpt"> {property.description} </div>
														</div>
														
													</div> 
				          					)):<h3 style={{textAlign:'center'}}>No Property Available</h3>}
				                          </div>
				                        </div>
				                      </div>
				                    </div>
									<div>
										{(this.state.showPopup) ?
											<div id="proImageConfirm" className="BlockUIConfirm product-img-popup" >
												<div className="blockui-mask"></div>
													<div className="RowDialogBody">
														<div className="confirm-header row-dialog-hdr-success">
															Property Image
														<button type="button" className="close" onClick={this.onClickClose}>×</button>
													</div>
													<div className="confirm-body" >
														<Carousel autoPlay showArrows={true} showThumbs={false} >
														{this.state.propertiesImg?this.state.propertiesImg.map((item,index)=>(
															<div>
																<img onError={this.addDefaultSrc} src={API_URL+item.img_path}/>
															</div>
														)):''}	
														</Carousel>		
													</div>
												</div>
											</div>  
										: ''}					
										 {(this.state.showPropDetail) ?
											<div  id="proImageConfirm" className="BlockUIConfirm product-img-popup" >
												<div className="blockui-mask"></div>
												
                        
                        	<div className="propertyDialogContent">
														<div className="confirm-header row-dialog-hdr-success" style={{backgroundColor: "#5cb85c",
    color: "#fff"}}>
														  	Property Detail
													  	<button type="button" className="close" onClick={()=>this.onClickClosePropDetail()}>×</button>
													  </div>
                            <div className="confirm-body propertyDialogBody" >
                              <div className="tz-post tz-property-single" style={{padding: "1px 0 50px"}}>
                            
                                    <div className="tz-property-top">
                                      <h1 className="cbp-l-project-title tz-property-title" > {proppertydetails.title} </h1>
                                      <div className="tz-property-price">${proppertydetails.property_status=='Rent'?proppertydetails.rent:proppertydetails.total_amount}</div>
                                      <div className="tz-property-address"> <i className="icon-map-marker"></i>{proppertydetails.address}, {proppertydetails.city}, {proppertydetails.country} </div>
                                    </div>
                                    
                                    <div className="tz-property-content">
                                    <Carousel showArrows={true} showThumbs={true}>
                                    {proppertydetails?proppertydetails.img_path.map((imgs,index)=>(
                                      <div>
                                        <img onError={this.addDefaultSrc} src={`${API_URL}`+imgs.img_path} alt="" />
                                      </div>
                                    )):''}
                                   
                                    </Carousel>
                                {/*  <div className="tz-property-box tz-property-slider">
                                        <div id="tz-img-single"  className="flexslider">
                                          <ul className="slides">
                                          {proppertydetails.img_path.map((imgs,index)=>(
                                            <li className="tz-slider-for-item" key={index}> <img onError={this.addDefaultSrc} src={`${API_URL}`+imgs.img_path} alt="" /> </li>
                                            ))}
                                          </ul>
                                        </div>
                                        <div id="tz-img-thumbnail"  className="flexslider">
                                          <ul className="slides">
                                          {proppertydetails.img_path.map((imgs,index)=>(
                                              <li className="tz-slider-item" key={index}>
                                              <div className="border"></div>
                                              <img onError={this.addDefaultSrc} src={`${API_URL}`+imgs.img_path} alt="" /> </li>
                                            ))}   
                                          </ul>
                                        </div>
                                      </div> */}
                                     {/*  <!-- Nav tabs --> */}
                                      <ul className="nav nav-tabs" role="tablist">
                                      <li role="presentation" className="active"><a href="#description" aria-controls="description" role="tab" data-toggle="tab">Description</a></li>
                                      {/* <li role="presentation"><a href="#features" aria-controls="features" role="tab" data-toggle="tab">Features</a></li> */}
                                      <li role="presentation"><a href="#details" aria-controls="details" role="tab" data-toggle="tab">Details</a></li>
                                      <li role="presentation"><a href="#location" aria-controls="location" role="tab" data-toggle="tab">Location</a></li>
                                    </ul>
                                      
                                      {/* <!-- Tab panes content --> */}
                                      <div className="tab-content"> 
                                       {/*  <!-- Tab description --> */}
                                        <div role="tabpanel" className="tab-pane fade in active" id="description">
                                        <p>{proppertydetails.description}</p>   
                                      </div>
                                        
                                       
                                        
                                       {/*<!-- Tab details -->*/}
                                      <div role="tabpanel" className="tab-pane fade" id="details">
                                        <div className="col-md-12">
                                        <div className="row">
                                          <div className="col-md-4 col-sm-4 cbp-l-project-details-list">
                                                      <p className="tz-property-detail"> Price:&nbsp; <strong> ${proppertydetails.property_status=='Rent'?proppertydetails.rent:proppertydetails.total_amount} </strong> </p>
                                                      
                                                    </div>
                                            <div className="col-md-4 col-sm-4 cbp-l-project-details-list">
                                            <p className="tz-property-detail"> Area:&nbsp; <strong> {proppertydetails.square_feet}&nbsp; </strong> </p>
                                            </div>
                                            <div className="col-md-4 col-sm-4 cbp-l-project-details-list">
                                            <p className="tz-property-detail"> Type:&nbsp; <strong> {proppertydetails.property_type} </strong> </p>
                                                    </div>
                                            <div className="col-md-4 col-sm-4 cbp-l-project-details-list"><p className="tz-property-detail"> Bedrooms:&nbsp; <strong>  {proppertydetails.bedroom} </strong> </p></div>
                                            <div className="col-md-4 col-sm-4 cbp-l-project-details-list"><p className="tz-property-detail"> Bathrooms:&nbsp; <strong>  {proppertydetails.bathroom} </strong> </p></div>
                                            <div className="col-md-4 col-sm-4 cbp-l-project-details-list"><p className="tz-property-detail"> Status:&nbsp; <strong>  {proppertydetails.property_status} </strong> </p></div>
                                            
                                          </div>
                                        </div>
                                      </div>
                                        
                                      {/*   <!-- Tab location --> */}
                                        <div role="tabpanel" className="tab-pane fade" id="location">
                                          <div className="cbp-2-project-desc">
                                            <div className="cbp-l-project-desc-text">
                                            <iframe style={{width:'100%',height:'auto'}} src={proppertydetails.geo_location} allowFullScreen></iframe>
                    
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                 
                            </div>

                            </div>
                          </div>
                        </div>
										: ''}	
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
			

				              <Testimonial testimonialDetail = {this.state.testimonialDetail}/>




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