import React from 'react'

import img10 from '../../../images/businessman-7-1.png'
import PropretySearchForm from './propertSearch'

import API_URL from '../../../app-config';

import '../../../css/flexslider.min.css'
import $ from 'jquery'
export default class PropertyDetails extends React.Component{
  constructor(props){
    super(props)
    this.state={
      apiCalled:true,
      proppertydetails:{
        "address":"BTM",
        "city":"Bangalore",
        "country":"India",
        "description":"This owner built home was created to cater for every possible family need without quality compromise. Every living space has been ",
        "geo_location":"https://maps.google.com/maps?q=8600%20Blair%20St,%20Leeds,%20AL%2035094,%20USA&ie=UTF8&&output=embed",
        "id":"2",
        "img_path":[{
            "id":"9",
            "img_path":"/uploads/Tulips.jpg",
            "property_id":"2"
            },
              {
            "id":"10",
            "img_path":"/uploads/Tulips1.jpg",
            "property_id":"2",
            }
            ],
        "owner_details":[{
          "address":"test",
          "city":"Delhi",
          "country":"India",
          "id":"10",
          "owner_name":"jireh123 prop2",
          "pin_code":"560029",
          "property_id":"2",
          "state":"Karnataka"}, {
          "address":"test",
          "city":"Bangalore",
          "country":"India",
          "id":"10",
          "owner_name":"jireh prop2",
          "pin_code":"560029",
          "property_id":"2",
          "state":"Karnataka"}],
          "owner_id":"2",
          "property_status":"Sale",
          "property_type":"Flat",
          "state":"Karnataka",
          "title":"prop2",
          "zip_code":"560068"
     },
  owners:[{
      "address":"test",
      "city":"Bangalore",
      "country":"India",
      "id":"1",
      "owner_name":"jireh",
      "pin_code":"560029",
      "property_id":"1",
      "state":"Karnataka"
    },
    {
      "address":"test",
      "city":"Bangalore",
      "country":"India",
      "id":"1",
      "owner_name":"jireh",
      "pin_code":"560029",
      "property_id":"1",
      "state":"Karnataka"
    }
    ]
    }
  }
  getPropertyDetails(id){
    fetch(`${API_URL}assetsapi/property_details/`+id)
    .then((response)=> {        
      response.json().then((data)=>{
        // this.setState({proppertydetails:data.property})
        debugger;
        var owners=[];
        for(var i=0;i<data.property.length;i++) {
          for(var j=0;j<data.property[i].owner_details.length;j++) {
            owners.push(data.property[i].owner_details[j]);
          }
        }

        this.setState({owners:owners,proppertydetails:data.property[0],apiCalled:false})
      })
    });
  }
	componentDidMount(){
		function isValidEmailAddress(emailAddress) {
			var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&"\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&"\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
			return pattern.test(emailAddress);
		}
    setTimeout(function(){ 
      var scrpt=document.createElement('script');
      scrpt.src="js/propr.js";
      document.body.appendChild(scrpt)
      $('#tzloadding').remove(); }, 2000)    
		
	}
	render (){
    const { proppertydetails } = this.state;
    if(this.props.location.state!==undefined)
    {
      if(this.state.apiCalled){
        const propertyDetail=this.props.location.state
        this.getPropertyDetails (propertyDetail.id)
      }    
    }
    else
    {
      // const propertyDetail
    }
		return(<div>
			<div class="tz-Breadcrumb">
    <div class="tzOverlayBreadcrumb">
      <div class="container">
	  
        <h1> {proppertydetails.title} </h1>
        <div class="tz-breadcrumb-navxt"> </div>
      </div>
      {/*<!-- end class container -->*/}
    </div>
  </div>
  {/*- end class tzbreadcrumb -->*/}
  <div class="tz-post tz-property-single">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 col-md-8 col-sm-8 col-xs-12 tz-has-sidebar">
          <div class="tz-property-top">
            <h1 class="cbp-l-project-title tz-property-title" > {proppertydetails.title} </h1>
            <div class="tz-property-price"> ${proppertydetails.total_amount} </div>
            <div class="tz-property-address"> <i class="icon-map-marker"></i> {proppertydetails.address}, {proppertydetails.city}, {proppertydetails.country} </div>
          </div>
          <div class="tz-property-content">
            <div class="tz-property-box tz-property-slider">
              <div id="tz-img-single"  class="flexslider">
                <ul class="slides">
                {proppertydetails.img_path.map(imgs=>(
                  <li class="tz-slider-for-item"> <img src={`${API_URL}assetsadmin/`+imgs.img_path} alt="" /> </li>
                  ))}
                {/*}  <li class="tz-slider-for-item"> <img src={img1} alt="" /> </li>
                  <li class="tz-slider-for-item"> <img src={img2} alt="" /> </li>
                  <li class="tz-slider-for-item"> <img src={img3} alt="" /> </li>
                  <li class="tz-slider-for-item"> <img src= {img4} alt="" /> </li>
                  <li class="tz-slider-for-item"> <img src={img5} alt="" /> </li>
                  <li class="tz-slider-for-item"> <img src={img6} alt="" /> </li>*/}
                </ul>
              </div>
              <div id="tz-img-thumbnail"  class="flexslider">
                <ul class="slides">
                {proppertydetails.img_path.map(imgs=>(
                    <li class="tz-slider-item">
                    <div class="border"></div>
                    <img src={`${API_URL}assetsadmin/`+imgs.img_path} alt="" /> </li>
                  ))}   
                {/* 
                   <li class="tz-slider-item">
                    <div class="border"></div>
                    <img src={img1} alt="" /> </li>
                    <li class="tz-slider-item">
                      <div class="border"></div>
                      <img src={img2} alt="" /> </li>
                    <li class="tz-slider-item">
                      <div class="border"></div>
                      <img src={img3} alt="" /> </li>
                    <li class="tz-slider-item">
                      <div class="border"></div>
                      <img src={img4} alt="" /> </li>
                    <li class="tz-slider-item">
                      <div class="border"></div>
                      <img src={img5} alt="" /> </li>
                    <li class="tz-slider-item">
                    <div class="border"></div>
                    <img src={img6} alt="" /> </li>
                */}
                </ul>
              </div>
            </div>
            {/*&<!-- Nav tabs -->*/}
            <ul class="nav nav-tabs" role="tablist">
              <li role="presentation" class="active"><a href="#description" aria-controls="description" role="tab" data-toggle="tab">Description</a></li>
              <li role="presentation"><a href="#features" aria-controls="features" role="tab" data-toggle="tab">Features</a></li>
              <li role="presentation"><a href="#details" aria-controls="details" role="tab" data-toggle="tab">Details</a></li>
              <li role="presentation"><a href="#location" aria-controls="location" role="tab" data-toggle="tab">Location</a></li>
            </ul>
            
            {/*<!-- Tab panes content -->*/}
            <div class="tab-content"> 
             {/*<!-- Tab description -->*/}
              <div role="tabpanel" class="tab-pane fade in active" id="description">
                {/*<p>This owner built home was created to cater for every possible family need without quality compromise. Every living space has been designed to capture incredible uninterrupted views across Randwick golf course over Little Bay out to the ocean, while every lifestyle desire has been carefully catered for. Completed over three levels in solid full-brick construction with internal lift servicing all floors, the immaculate architecturally designed residence has left nothing to chance by utilising only the finest materials with premium finishes.</p>
                <p>North facing to capture optimal light, the vast family room on the mid level has been completed with high ceilings, limestone tiled flooring and gas flame fireplace opening through concertina doors onto the expansive entertaining terrace which enjoys a pool aspect across the golf greens to the ocean. Indoor and outdoor functions on this level are easily supported from the designer gas kitchen with 60mm Caesarstone bench tops, quality Miele appliances including two dishwashers, and a walk-in preparation pantry with second sink. Stroll back past the guest powder room to the fully equipped and custom designed cinema room for the ultimate movie experience while an integrated Bose stereo system can deliver music throughout the entire residence.</p>*/}
                <p>{proppertydetails.description}</p>
              </div>
              
              {/*<!-- Tab features -->*/}
              <div role="tabpanel" class="tab-pane fade" id="features">
                <div class="row tz-property-features">
                  <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6"><a ><i class="icon-check"> </i>Air Conditioning</a></div>
                  <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6"><a ><i class="icon-check"> </i>Backyard</a></div>
                  <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6"><a ><i class="icon-check"> </i>Balcony</a></div>
                  <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6"><a ><i class="icon-check"> </i>Dryer</a></div>
                  <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6"><a ><i class="icon-check"> </i>Electric Range</a></div>
                  <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6"><a ><i class="icon-check"> </i>Fire Place</a></div>
                  <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6"><a ><i class="icon-check"> </i>Fully Furnished</a></div>
                  <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6"><a ><i class="icon-check"> </i>Gas Heat</a></div>
                  <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6"><a ><i class="icon-check"> </i>Gym</a></div>
                  <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6"><a ><i class="icon-check"> </i>Home Theater</a></div>
                  <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6"><a ><i class="icon-check"> </i>Laundry Room</a></div>
                  <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6"><a ><i class="icon-check"> </i>Ocean View</a></div>
                  <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6"><a ><i class="icon-check"> </i>Pool</a></div>
                  <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6"><a ><i class="icon-check"> </i>Recreation</a></div>
                  <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6"><a ><i class="icon-check"> </i>Roof Deck</a></div>
                  <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6"><a ><i class="icon-check"> </i>Storage</a></div>
                  <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6"><a ><i class="icon-check"> </i>Swimming Pool</a></div>
                  <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6"><a ><i class="icon-check"> </i>Washer</a></div>
                  <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6"><a ><i class="icon-check"> </i>Wifi</a></div>
                </div>
              </div>
              
              {/*<!-- Tab details -->*/}
              <div role="tabpanel" class="tab-pane fade" id="details">
                <div class="row">
                  <div class="col-md-4 col-sm-4 cbp-l-project-details-list">
                    <p class="tz-property-detail"> Price:&nbsp; <strong> $18,000 </strong> </p>
                    <p class="tz-property-detail"> Area:&nbsp; <strong> 2300ft&nbsp; </strong> </p>
                    <p class="tz-property-detail"> Type:&nbsp; <strong> For Rent </strong> </p>
                    <p class="tz-property-detail"> Bedrooms:&nbsp; <strong> 3 </strong> </p>
                    <p class="tz-property-detail"> Bathrooms:&nbsp; <strong> 3 </strong> </p>
                    <p class="tz-property-detail"> Garages:&nbsp; <strong> 2 </strong> </p>
                    <p class="tz-property-detail"> Status:&nbsp; <strong> Sold </strong> </p>
                  </div>
                  <div class="col-md-4 col-sm-4">
                    <p class="tz-property-detail"> Shop:&nbsp; <strong>10 km</strong> </p>
                    <p class="tz-property-detail"> School:&nbsp; <strong>5 minutes</strong> </p>
                    <p class="tz-property-detail"> University:&nbsp; <strong>5 km</strong> </p>
                    <p class="tz-property-detail"> Airport:&nbsp; <strong>20 km</strong> </p>
                    <p class="tz-property-detail"> City center:&nbsp; <strong>10 minutes</strong> </p>
                    <p class="tz-property-detail"> Hospital:&nbsp; <strong>2 km</strong> </p>
                    <p class="tz-property-detail"> CPT stop:&nbsp; <strong>1 km</strong> </p>
                  </div>
                  <div class="col-md-4 col-sm-4">
                    <p class="tz-property-detail"> Year Built:&nbsp; <strong>2010</strong> </p>
                    <p class="tz-property-detail"> Legal Desc:&nbsp; <strong>Legal Desc</strong> </p>
                    <p class="tz-property-detail"> Dining Area:&nbsp; <strong>Dining Area</strong> </p>
                  </div>
                </div>
              </div>
              
              {/*<!-- Tab location -->*/}
              <div role="tabpanel" class="tab-pane fade" id="location">
                <div class="cbp-2-project-desc">
                  <div class="cbp-l-project-desc-text">
                    <iframe height="450" src={proppertydetails.geo_location} allowfullscreen></iframe>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tz-project-details">
            {proppertydetails.owner_details.map(owner=>(

              <div class="tz-property-box tz-property-author">
                  <div class="tz-property-author-left"> 
                      <a class="tz-property-thumbnail"> 
                       <img src={img10} alt=""/> 
                      </a> 
                  </div>
                  <div class="tz-property-author-right">
                    <div class="tz-property-author-title">
                      <h4> <a href={img10}>{owner.owner_name} </a> </h4>
                      <span>Owner Name</span>                  
                      <div class="TzSocialLink">
                       <a > <i class="fa fa-linkedin"></i> </a> 
                       <a > <i class="fa fa-google-plus"></i> </a> 
                       <a > <i class="fa fa-twitter"></i> </a> 
                       <a > <i class="fa fa-facebook"></i> </a> 
                      </div>
                    </div>
                    <div class="tz-property-author-content">
                      <p>Praesent vehicula id neque in iaculis. Cras in malesuada tortor. Ut auctor magna nec augue semper, in laoreet metus maximus.&hellip;</p>
                    </div>
                    <div class="tz-property-author-info">
                     <span> <i class="icon-smartphone"></i>12345 67890 </span> 
                     <span> <i class="icon-telephone2"></i> 0123-456-789 </span> 
                     <span> <i class="icon-envelope-open"></i> Ownername@domain.com </span> 
                    </div>
                  </div>
              </div>    
            ))}
          </div>
        </div>
        <PropretySearchForm ownerDetails={this.state.owners} />
      </div>
    </div>
  </div>
			</div>);
	}
}