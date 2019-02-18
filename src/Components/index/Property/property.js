import React from 'react'

// import img2 from '../../../images/properties-4.jpg'
// import img3 from '../../../images/properties-3.jpg'
// import img4 from '../../../images/properties-2.jpg'
// import img5 from '../../../images/properties-1.jpg'
// import img6 from '../../../images/properties.jpg'
// import img7 from '../../../images/girls_PNG6463-1.png'
// import img8 from '../../../images/young-businessman-2.png'
// import Header from '../Header/Header1'  
import ProppertSearchForm from './propertSearch'
import {Link} from 'react-router-dom'
// import $ from 'jquery'
import API_URL from '../../../app-config';
import PropertItem from './propertyItems'
import $ from 'jquery'
import Pagination from 'react-js-pagination';
import '../../../css/flexslider.min.css'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//import Modal from '../../Modal/Modal';
export default class Property extends React.Component{
  constructor(props)
  {
    super(props)
    this.updatePropertyGrid=this.updatePropertyGrid.bind(this)
    this.state={
    properties:[{}],
    owners:[{ }],
    isPropertySearchEmpty:false,propertySearchMsg:'',
	agentList:[],
	 activePage: 1,
     itemsCountPerPage: 3,
     //isShowing: false
     showPopup:false,
     pagedList:[]
    }    
    this.updateProps=this.updateProps.bind(this)
    this.onClickPropertyDetail =this.onClickPropertyDetail.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  updatePropertyGrid(property){
    // debugger;
    if (property.success === 0) {
        this.setState({isPropertySearchEmpty: true, propertySearchMsg: property.msg})
    } else {
        property = property.property_search;
        var owners = [];
        // for (var i = 0; i < property.length; i++)
        //     for (var j = 0; j < property[i].owner_details.length; j++)
        //         owners.push(property[i].owner_details[j])
        // this.setState({owners: owners, properties: property, isPropertySearchEmpty: false})
        if(property.length===0)
        for(var i=0;i<this.state.properties.length;i++){
          if(this.state.properties[i].id==property[0].id){
            this.props.history.push({'pathname':"property-detail",state:this.state.properties[i]})
          }
        }
        else
        {
          var arr=[];
          for(var i=0;i<this.state.properties;i++)
          if(property[i]!=undefined){
            if(property[i].id==this.state.properties[i].id)
            arr.push(this.state.properties[i])
          }
           this.setState({properties:arr})
          // this.updateProps(arr)  /property-details
          // if(arr.length>0)
          // this.props.history.push({'pathname':"property-details",state:arr})
        }
    }
}
updateProps(props){
  this.setState({properties:props})
}
  componentDidMount(){
    if (this.props.location && this.props.location.state){
      // this.setState(this.props.location.state.state);
	  this.setState(this.props.location.state.state,function(){
        var $=window.$;
        setTimeout(function(){       
          var jQuery=window.$;       
          var tz_realestate_ResizeImage=function(obj){
              'use strict';
              var widthStage;
              var heightStage;
              var widthImage;
              var heightImage;
              var resizeImage=function(widthImage,heightImage,widthStage,heightStage){
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
                  obj.each(function(i,el){
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
            
            $('#tzloadding').remove();
          var gapHorizontal,gapVertical;
          if(jQuery(window).width() > 993 ){
            gapHorizontal = 0;
            gapVertical = 26;
          }else{
            gapHorizontal = 0;
            gapVertical = 20;
          }
            
          try{
            if( jQuery('#js-grid-meet-the-team').length){
              if(jQuery('#js-grid-meet-the-team').cubeportfolio!=undefined)
              jQuery('#js-grid-meet-the-team').cubeportfolio({
                defaultFilter: '*',
                filters: '#js-filters-meet-the-team',
                layoutMode: 'grid',
                animationType: 'rotateRoom',
                gapHorizontal: gapHorizontal,
                gapVertical: gapVertical,
                gridAdjustment: 'responsive',
                mediaQueries: [{
                  width: 1500,
                  cols: 5
                }, {
                  width: 993,
                  cols: 3       }, {
                  width: 768,
                  cols: 3       }, {
                  width: 460,
                  cols: 2
                }, {
                  width: 0,
                  cols: 1
                }],
                caption: 'fadeIn',
                displayType: 'lazyLoading',
                displayTypeSpeed: 100
              });
              tz_realestate_ResizeImage(jQuery('.tz-property-thum'));
            }
          }   
          catch(error){
            if( jQuery('#js-grid-meet-the-team').length){
              if(jQuery('#js-grid-meet-the-team').cubeportfolio!=undefined)
              jQuery('#js-grid-meet-the-team').cubeportfolio('destroy')
              jQuery('#js-grid-meet-the-team').cubeportfolio({
                defaultFilter: '*',
                filters: '#js-filters-meet-the-team',
                layoutMode: 'grid',
                animationType: 'rotateRoom',
                gapHorizontal: gapHorizontal,
                gapVertical: gapVertical,
                gridAdjustment: 'responsive',
                mediaQueries: [{
                  width: 1500,
                  cols: 5
                }, {
                  width: 993,
                  cols: 3       }, {
                  width: 768,
                  cols: 3       }, {
                  width: 460,
                  cols: 2
                }, {
                  width: 0,
                  cols: 1
                }],
                caption: 'fadeIn',
                displayType: 'lazyLoading',
                displayTypeSpeed: 100
              });
              tz_realestate_ResizeImage(jQuery('.tz-property-thum'));
            }
          }
           }, 500);
        })
		if (this.state.properties) {
					this.handlePageChange(this.state.activePage);
				}
    }else{
	 $("#loaderDiv").show();
  fetch(`${API_URL}assetsapi/property/`)
  .then((response)=> {        
    response.json().then((data)=>{
		 $("#loaderDiv").hide();
      var owners=[];
	  if(data.property){
		for(var i=0;i<data.property.length;i++) {
        for(var j=0;j<data.property[i].owner_details.length;j++) {
          owners.push(data.property[i].owner_details[j])
        }
      }
      this.setState({owners:owners,properties:data.property},function(){
        var $=window.$;
        setTimeout(function(){       
          var jQuery=window.$;       
          var tz_realestate_ResizeImage=function(obj){
              'use strict';
              var widthStage;
              var heightStage;
              var widthImage;
              var heightImage;
              var resizeImage=function(widthImage,heightImage,widthStage,heightStage){
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
                  obj.each(function(i,el){
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
            
            $('#tzloadding').remove();
          var gapHorizontal,gapVertical;
          if(jQuery(window).width() > 993 ){
            gapHorizontal = 0;
            gapVertical = 26;
          }else{
            gapHorizontal = 0;
            gapVertical = 20;
          }
            
          try{
            if( jQuery('#js-grid-meet-the-team').length){
              if(jQuery('#js-grid-meet-the-team').cubeportfolio!=undefined)
              jQuery('#js-grid-meet-the-team').cubeportfolio({
                defaultFilter: '*',
                filters: '#js-filters-meet-the-team',
                layoutMode: 'grid',
                animationType: 'rotateRoom',
                gapHorizontal: gapHorizontal,
                gapVertical: gapVertical,
                gridAdjustment: 'responsive',
                mediaQueries: [{
                  width: 1500,
                  cols: 5
                }, {
                  width: 993,
                  cols: 3       }, {
                  width: 768,
                  cols: 3       }, {
                  width: 460,
                  cols: 2
                }, {
                  width: 0,
                  cols: 1
                }],
                caption: 'fadeIn',
                displayType: 'lazyLoading',
                displayTypeSpeed: 100
              });
              tz_realestate_ResizeImage(jQuery('.tz-property-thum'));
            }
          }   
          catch(error){
            if( jQuery('#js-grid-meet-the-team').length){
              if(jQuery('#js-grid-meet-the-team').cubeportfolio!=undefined)
              jQuery('#js-grid-meet-the-team').cubeportfolio('destroy')
              jQuery('#js-grid-meet-the-team').cubeportfolio({
                defaultFilter: '*',
                filters: '#js-filters-meet-the-team',
                layoutMode: 'grid',
                animationType: 'rotateRoom',
                gapHorizontal: gapHorizontal,
                gapVertical: gapVertical,
                gridAdjustment: 'responsive',
                mediaQueries: [{
                  width: 1500,
                  cols: 5
                }, {
                  width: 993,
                  cols: 3       }, {
                  width: 768,
                  cols: 3       }, {
                  width: 460,
                  cols: 2
                }, {
                  width: 0,
                  cols: 1
                }],
                caption: 'fadeIn',
                displayType: 'lazyLoading',
                displayTypeSpeed: 100
              });
              tz_realestate_ResizeImage(jQuery('.tz-property-thum'));
            }
          }
           }, 500);
        })
		if (this.state.properties) {
					this.handlePageChange(this.state.activePage);
				}
	}
      })      
	});

  this.handleSript 
	}  
	this.TopAgentList();
  setTimeout(function(){ 
    var scrpt=document.createElement('script');
    scrpt.src="js/propr.js";
    document.body.appendChild(scrpt)
    $('#tzloadding').remove(); }, 2000)
  }
 
  handlePageChange = (pageNum) => {

  let number = pageNum - 1;
  
		 // console.log('pageNum'+pageNum+'::propData'+JSON.stringify(this.state.properties))
        const { properties, itemsCountPerPage } = this.state;
		 //var propData = '';
		 if (this.props.location && this.props.location.state){
		
			   var propData =  this.props.location.state.state.properties.slice((itemsCountPerPage * number), (itemsCountPerPage * pageNum));
         this.setState({activePage: pageNum})
         this.setState({pagedList: propData})
        }else{
      
         var propData = properties.slice((itemsCountPerPage * number), (itemsCountPerPage * pageNum));
          
     }
     this.setState({pagedList: propData,activePage: pageNum})
	
  }
  
  TopAgentList(){
	  fetch(`${API_URL}assetsapi/top_rating_agents`)
		.then((response)=> {
			response.json().then((data)=>{
				this.setState({ agentList: data.agent_list })
			})
		});
  }
  componentWillReceiveProps(nextProps){
    var $=window.$;
    setTimeout(function(){       
      var jQuery=window.$;       
      var tz_realestate_ResizeImage=function(obj){
          'use strict';
          var widthStage;
          var heightStage;
          var widthImage;
          var heightImage;
          var resizeImage=function(widthImage,heightImage,widthStage,heightStage){
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
              obj.each(function(i,el){
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
        
        $('#tzloadding').remove();
      var gapHorizontal,gapVertical;
      if(jQuery(window).width() > 993 ){
        gapHorizontal = 0;
        gapVertical = 26;
      }else{
        gapHorizontal = 0;
        gapVertical = 20;
      }
      try{
        if( jQuery('#js-grid-meet-the-team').length){
          if(jQuery('#js-grid-meet-the-team').cubeportfolio!=undefined)
          jQuery('#js-grid-meet-the-team').cubeportfolio({
            defaultFilter: '*',
            filters: '#js-filters-meet-the-team',
            layoutMode: 'grid',
            animationType: 'rotateRoom',
            gapHorizontal: gapHorizontal,
            gapVertical: gapVertical,
            gridAdjustment: 'responsive',
            mediaQueries: [{
              width: 1500,
              cols: 5
            }, {
              width: 993,
              cols: 3       }, {
              width: 768,
              cols: 3       }, {
              width: 460,
              cols: 2
            }, {
              width: 0,
              cols: 1
            }],
            caption: 'fadeIn',
            displayType: 'lazyLoading',
            displayTypeSpeed: 100
          });
          tz_realestate_ResizeImage(jQuery('.tz-property-thum'));
        }
      }   
      catch(error){
        if( jQuery('#js-grid-meet-the-team').length){
          if(jQuery('#js-grid-meet-the-team').cubeportfolio!=undefined)
          jQuery('#js-grid-meet-the-team').cubeportfolio('destroy')
          jQuery('#js-grid-meet-the-team').cubeportfolio({
            defaultFilter: '*',
            filters: '#js-filters-meet-the-team',
            layoutMode: 'grid',
            animationType: 'rotateRoom',
            gapHorizontal: gapHorizontal,
            gapVertical: gapVertical,
            gridAdjustment: 'responsive',
            mediaQueries: [{
              width: 1500,
              cols: 5
            }, {
              width: 993,
              cols: 3       }, {
              width: 768,
              cols: 3       }, {
              width: 460,
              cols: 2
            }, {
              width: 0,
              cols: 1
            }],
            caption: 'fadeIn',
            displayType: 'lazyLoading',
            displayTypeSpeed: 100
          });
          tz_realestate_ResizeImage(jQuery('.tz-property-thum'));
        }
      }
       }, 500);
  }
  handleSript(){
        var $=window.$;
        $('html, body').animate({scrollTop: 0}, 500); 
  }

/*   shouldComponentUpdate(nextProps, nextState) {
     if (this.props === nextProps) {
      return false;
    } else {
      return true;
    } 
  } */
  /* openModalHandler = () => {
    this.setState({
        isShowing: true
    });
}

closeModalHandler = () => {
    this.setState({
        isShowing: false
    });
} */
onClickClose=()=>{
	    
  // $("#proImageConfirm").hide();
  this.setState({showPopup: false});
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
      this.setState({owners:owners,proppertydetails:data.property[0],showPopup:true})
    })
  });
}
	render(){ 
   //console.log('state'+JSON.stringify(this.props))
   const propertieDetails= this.state.properties;
	 const proppertydetails= this.state.proppertydetails;
	 const pagePropertyList= this.state.pagedList || this.state.properties;
		return(
			<div className="mg-top-129">
      {/* <Header actChild="Properties" loggedIn={this.props.login} />       */}
				<div className="tz-Breadcrumb">
    <div className="tzOverlayBreadcrumb">
      <div className="container">
        <h1> Properties </h1>
        <div className="tz-breadcrumb-navxt"> 
          {/*<!--Breadcrumbs--> */}
        </div>
      </div>
      {/*<!-- end class container --> */}
    </div>
  </div>
  {/*<!-- end class tzbreadcrumb -->*/}
  <div className="tz-post tz-property-all">
    <div className="container">
      <div className="row">
        <div className="col-lg-9 col-md-8 col-sm-8 col-xs-12 tz-has-sidebar">
				
          <div className="tz-list-grid">
            <div className="tz-content-ajax">
             
              <div className="tz-property-head clearfix">
                  <div id="js-filters-meet-the-team" className="cbp-l-filters-button cbp-l-filters-left" >
                    <div data-filter="*" className="cbp-filter-item"> Show All </div>
                    <div data-filter=".for-rent" className="cbp-filter-item"> For Rent
                      <div className="cbp-filter-counter"></div>
                    </div>
                    <div data-filter=".for-sale" className="cbp-filter-item"> For Sale
                      <div className="cbp-filter-counter"></div>
                    </div>
                  </div>
              </div>
    
              <div id="js-grid-meet-the-team" className="cbp cbp-l-grid-team grid" >
              {pagePropertyList && pagePropertyList.map(property=>(
                <PropertItem key={property.title} updatePropertyGrid={this.updatePropertyGrid} ownerDetails={this.state.owners} property={property} total_amount={property.total_amount}  rent={property.rent}  Title={property.title} description={property.description} square_feet={property.square_feet} src={(property.img_path!=undefined&&property.img_path.length>0&&property.img_path[0].img_path!=undefined)?API_URL+property.img_path[0].img_path:''} PropertyStatus={property.property_status} onClickPropertyDetail={this.onClickPropertyDetail} id={property.id} />
              ))}       
                  
              </div>
			    <div className='wp-pagenavi'> 
					{(propertieDetails.length>0)?
                          <Pagination
                              activePage={this.state.activePage}
                              itemsCountPerPage={this.state.itemsCountPerPage}
                              totalItemsCount={propertieDetails.length}
                              pageRangeDisplayed={5}
                              activeLinkClass={'btn-success'}
                              onChange={this.handlePageChange}
                          />:''}
				</div>
			  </div> 
            <div className="auto-loading"> <img src="images/loading_blue_32x32.gif" width="32" height="32" /> </div>
          </div>
          {/*<!--END .navigation-links-->*/} 
        </div>
        <ProppertSearchForm updatePropertyGrid={this.updatePropertyGrid}  ownerDetails={this.state.owners} AgentList={this.state.agentList}/>

        {/* { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

        <button className="open-modal-btn" onClick={this.openModalHandler}>Open Modal</button>

            <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                        Maybe aircrafts fly very high because they don't want to be seen in plane sight?
                </Modal> */} 

          {(this.state.showPopup) ?
											<div  id="proImageConfirm" className="BlockUIConfirm product-img-popup" >
												<div className="blockui-mask"></div>
												
                        
                        	<div className="propertyDialogContent">
														<div className="confirm-header row-dialog-hdr-success" style={{backgroundColor: "#5cb85c",
    color: "#fff"}}>
														  	Property Detail
													  	<button type="button" className="close" onClick={()=>this.onClickClose()}>×</button>
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
			</div>);
	}
}