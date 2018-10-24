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
        "address":"",
        "city":"",
        "country":"",
        "description":" ",
        "geo_location":"",
        "id":"",
        "img_path":[{
            "id":"",
            "img_path":"",
            "property_id":""
            },
              {
            "id":"",
            "img_path":"",
            "property_id":"",
            }
            ],
        "owner_details":[{
          "address":"",
          "city":"",
          "country":"",
          "id":"",
          "owner_name":"",
          "pin_code":"",
          "property_id":"",
          "state":""}, {
          "address":"",
          "city":"",
          "country":"",
          "id":"",
          "owner_name":"",
          "pin_code":"",
          "property_id":"",
          "state":""}],
          "owner_id":"",
          "property_status":"",
          "property_type":"",
          "state":"",
          "title":"",
          "zip_code":""
     },
  owners:[{
      "address":"",
      "city":"",
      "country":"",
      "id":"",
      "owner_name":"",
      "pin_code":"",
      "property_id":"",
      "state":""
    },
    {
      "address":"",
      "city":"",
      "country":"",
      "id":"1",
      "owner_name":"",
      "pin_code":"",
      "property_id":"",
      "state":""
    }
    ],
	agentList:[]
    }
	
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
		this.TopAgentList();
	}
	TopAgentList(){
	  fetch(`${API_URL}assetsapi/top_rating_agents`)
		.then((response)=> {
			response.json().then((data)=>{
				this.setState({ agentList: data.agent_list })
			})
		});
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
		return(<div className="mg-top-129">
			<div className="tz-Breadcrumb">
    <div className="tzOverlayBreadcrumb">
      <div className="container">
	  
        <h1> {proppertydetails.title} </h1>
        <div className="tz-breadcrumb-navxt"> </div>
      </div>
      {/*<!-- end className container -->*/}
    </div>
  </div>
  {/*- end className tzbreadcrumb -->*/}
  <div className="tz-post tz-property-single">
    <div className="container">
      <div className="row">
        <div className="col-lg-9 col-md-8 col-sm-8 col-xs-12 tz-has-sidebar">
          <div className="tz-property-top">
            <h1 className="cbp-l-project-title tz-property-title" > {proppertydetails.title} </h1>
            <div className="tz-property-price"> ${proppertydetails.total_amount} </div>
            <div className="tz-property-address"> <i className="icon-map-marker"></i> {proppertydetails.address}, {proppertydetails.city}, {proppertydetails.country} </div>
          </div>
          <div className="tz-property-content">
            <div className="tz-property-box tz-property-slider">
              <div id="tz-img-single"  className="flexslider">
                <ul className="slides">
                {proppertydetails.img_path.map((imgs,index)=>(
                  <li className="tz-slider-for-item" key={index}> <img src={`${API_URL}`+imgs.img_path} alt="" /> </li>
                  ))}
                {/*}  <li className="tz-slider-for-item"> <img src={img1} alt="" /> </li>
                  <li className="tz-slider-for-item"> <img src={img2} alt="" /> </li>
                  <li className="tz-slider-for-item"> <img src={img3} alt="" /> </li>
                  <li className="tz-slider-for-item"> <img src= {img4} alt="" /> </li>
                  <li className="tz-slider-for-item"> <img src={img5} alt="" /> </li>
                  <li className="tz-slider-for-item"> <img src={img6} alt="" /> </li>*/}
                </ul>
              </div>
              <div id="tz-img-thumbnail"  className="flexslider">
                <ul className="slides">
                {proppertydetails.img_path.map((imgs,index)=>(
                    <li className="tz-slider-item" key={index}>
                    <div className="border"></div>
                    <img src={`${API_URL}`+imgs.img_path} alt="" /> </li>
                  ))}   
                {/* 
                   <li className="tz-slider-item">
                    <div className="border"></div>
                    <img src={img1} alt="" /> </li>
                    <li className="tz-slider-item">
                      <div className="border"></div>
                      <img src={img2} alt="" /> </li>
                    <li className="tz-slider-item">
                      <div className="border"></div>
                      <img src={img3} alt="" /> </li>
                    <li className="tz-slider-item">
                      <div className="border"></div>
                      <img src={img4} alt="" /> </li>
                    <li className="tz-slider-item">
                      <div className="border"></div>
                      <img src={img5} alt="" /> </li>
                    <li className="tz-slider-item">
                    <div className="border"></div>
                    <img src={img6} alt="" /> </li>
                */}
                </ul>
              </div>
            </div>
            {/*&<!-- Nav tabs -->*/}
            <ul className="nav nav-tabs" role="tablist">
              <li role="presentation" className="active"><a href="#description" aria-controls="description" role="tab" data-toggle="tab">Description</a></li>
              {/* <li role="presentation"><a href="#features" aria-controls="features" role="tab" data-toggle="tab">Features</a></li> */}
              <li role="presentation"><a href="#details" aria-controls="details" role="tab" data-toggle="tab">Details</a></li>
              <li role="presentation"><a href="#location" aria-controls="location" role="tab" data-toggle="tab">Location</a></li>
            </ul>
            
            {/*<!-- Tab panes content -->*/}
            <div className="tab-content"> 
             {/*<!-- Tab description -->*/}
              <div role="tabpanel" className="tab-pane fade in active" id="description">
                {/*<p>This owner built home was created to cater for every possible family need without quality compromise. Every living space has been designed to capture incredible uninterrupted views across Randwick golf course over Little Bay out to the ocean, while every lifestyle desire has been carefully catered for. Completed over three levels in solid full-brick construction with internal lift servicing all floors, the immaculate architecturally designed residence has left nothing to chance by utilising only the finest materials with premium finishes.</p>
                <p>North facing to capture optimal light, the vast family room on the mid level has been completed with high ceilings, limestone tiled flooring and gas flame fireplace opening through concertina doors onto the expansive entertaining terrace which enjoys a pool aspect across the golf greens to the ocean. Indoor and outdoor functions on this level are easily supported from the designer gas kitchen with 60mm Caesarstone bench tops, quality Miele appliances including two dishwashers, and a walk-in preparation pantry with second sink. Stroll back past the guest powder room to the fully equipped and custom designed cinema room for the ultimate movie experience while an integrated Bose stereo system can deliver music throughout the entire residence.</p>*/}
                <p>{proppertydetails.description}</p>
              </div>
              
              {/*<!-- Tab features -->*/}
              <div role="tabpanel" className="tab-pane fade" id="features">
                <div className="row tz-property-features">
				{ /* <div className="col-lg-3 col-md-4 col-sm-4 col-xs-6"><a ><i className="icon-check"> </i>Air Conditioning</a></div>
                  <div className="col-lg-3 col-md-4 col-sm-4 col-xs-6"><a ><i className="icon-check"> </i>Backyard</a></div>
                  <div className="col-lg-3 col-md-4 col-sm-4 col-xs-6"><a ><i className="icon-check"> </i>Balcony</a></div>
                  <div className="col-lg-3 col-md-4 col-sm-4 col-xs-6"><a ><i className="icon-check"> </i>Dryer</a></div>
                  <div className="col-lg-3 col-md-4 col-sm-4 col-xs-6"><a ><i className="icon-check"> </i>Electric Range</a></div>
                  <div className="col-lg-3 col-md-4 col-sm-4 col-xs-6"><a ><i className="icon-check"> </i>Fire Place</a></div>
                  <div className="col-lg-3 col-md-4 col-sm-4 col-xs-6"><a ><i className="icon-check"> </i>Fully Furnished</a></div>
                  <div className="col-lg-3 col-md-4 col-sm-4 col-xs-6"><a ><i className="icon-check"> </i>Gas Heat</a></div>
                  <div className="col-lg-3 col-md-4 col-sm-4 col-xs-6"><a ><i className="icon-check"> </i>Gym</a></div>
                  <div className="col-lg-3 col-md-4 col-sm-4 col-xs-6"><a ><i className="icon-check"> </i>Home Theater</a></div>
                  <div className="col-lg-3 col-md-4 col-sm-4 col-xs-6"><a ><i className="icon-check"> </i>Laundry Room</a></div>
                  <div className="col-lg-3 col-md-4 col-sm-4 col-xs-6"><a ><i className="icon-check"> </i>Ocean View</a></div>
                  <div className="col-lg-3 col-md-4 col-sm-4 col-xs-6"><a ><i className="icon-check"> </i>Pool</a></div>
                  <div className="col-lg-3 col-md-4 col-sm-4 col-xs-6"><a ><i className="icon-check"> </i>Recreation</a></div>
                  <div className="col-lg-3 col-md-4 col-sm-4 col-xs-6"><a ><i className="icon-check"> </i>Roof Deck</a></div>
                  <div className="col-lg-3 col-md-4 col-sm-4 col-xs-6"><a ><i className="icon-check"> </i>Storage</a></div>
                  <div className="col-lg-3 col-md-4 col-sm-4 col-xs-6"><a ><i className="icon-check"> </i>Swimming Pool</a></div>
                  <div className="col-lg-3 col-md-4 col-sm-4 col-xs-6"><a ><i className="icon-check"> </i>Washer</a></div>
				<div className="col-lg-3 col-md-4 col-sm-4 col-xs-6"><a ><i className="icon-check"> </i>Wifi</a></div> */}
                </div>
              </div>
              
              {/*<!-- Tab details -->*/}
              <div role="tabpanel" className="tab-pane fade" id="details">
                <div className="col-md-12">
                <div className="row">
				 <div className="col-md-4 col-sm-4 cbp-l-project-details-list">
                    <p className="tz-property-detail"> Price:&nbsp; <strong> ${proppertydetails.total_amount} </strong> </p>
                    
                    
                    
                    
                    
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
              
              {/*<!-- Tab location -->*/}
              <div role="tabpanel" className="tab-pane fade" id="location"> 
			  <div className="col-md-12">
                <div className="cbp-2-project-desc">
                  <div className="cbp-l-project-desc-text">
                      <iframe style={{width:'100%',height:'auto'}} src={proppertydetails.geo_location} allowFullScreen></iframe>
                    
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
		  {/*  <div className="tz-project-details">
            {proppertydetails.owner_details.map(owner=>(

              <div className="tz-property-box tz-property-author">
                  <div className="tz-property-author-left"> 
                      <a className="tz-property-thumbnail"> 
                       <img src={img10} alt=""/> 
                      </a> 
                  </div>
                  <div className="tz-property-author-right">
                    <div className="tz-property-author-title">
                      <h4> <a href={img10}>{owner.owner_name} </a> </h4>
                      <span>Owner Name</span>                  
                      <div className="TzSocialLink">
                       <a > <i className="fa fa-linkedin"></i> </a> 
                       <a > <i className="fa fa-google-plus"></i> </a> 
                       <a > <i className="fa fa-twitter"></i> </a> 
                       <a > <i className="fa fa-facebook"></i> </a> 
                      </div>
                    </div>
                    <div className="tz-property-author-content">
                      <p>Praesent vehicula id neque in iaculis. Cras in malesuada tortor. Ut auctor magna nec augue semper, in laoreet metus maximus.&hellip;</p>
                    </div>
                    <div className="tz-property-author-info">
                     <span> <i className="icon-smartphone"></i>12345 67890 </span> 
                     <span> <i className="icon-telephone2"></i> 0123-456-789 </span> 
                     <span> <i className="icon-envelope-open"></i> Ownername@domain.com </span> 
                    </div>
                  </div>
              </div>    
            ))}
</div> */}
        </div>
        <PropretySearchForm ownerDetails={this.state.owners} AgentList={this.state.agentList}/>
      </div>
    </div>
  </div>
			</div>);
	}
}