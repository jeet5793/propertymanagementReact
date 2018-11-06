import React from 'react'
// import img3 from '../../../images/properties-9-2-1024x373.jpg'
import img4 from '../../../images/properties-9-2-1024x373.jpg'
import img_not_available from '../../../images/img_not_available.png'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import  API_URL from '../../../app-config'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class Homeproperty extends React.Component{
	constructor(props){
		super(props);
		this.state={
    		propertiesImg:[],
			showPopup: false
		}
		this.onClickClose=this.onClickClose.bind(this)
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
	addDefaultSrc(ev){
	  ev.target.src = img_not_available;
	}
	render(){
		// console.log(JSON.stringify(this.state.propertiesImg))
		return(
           <div className="tz-property-content cbp-item  slider ">
                <div className="tz-property-thum cbp-caption">
                    <div className="cbp-caption-defaultWrap">
	                    <figure> 
		                     <img onError={this.addDefaultSrc} src={this.props.src?this.props.src:img_not_available} alt="Assets Watch" width="900" height="328" />
		                     <figcaption className="for-sale for-rent"> {this.props.Status} </figcaption>
	                    </figure>
                    </div>
					<div className="cbp-caption-activeWrap">
                    	<div className="cbp-l-caption-alignCenter">
                            
							<div className="cbp-l-caption-body"> 
	                            
								<Link to={{'pathname':"property-detail",state:this.props}} className="cbp-l-caption-buttonLeft" rel="nofollow"><i className="icon-link"></i> </Link> 
	                           <a  className="cbp-l-caption-buttonRight" onClick={this.onClickImagePreview.bind(this,this.props.id)} > <i className="icon-plus-circle" ></i> </a> 
                        	</div>
                    	</div>
                	</div>
				</div>
					
					<div className="tz-property-des">
						<h5><a href="">{this.props.Title}</a></h5>
						<div className="tz-property-price"> ${this.props.total_amount}&nbsp;<span>/ Month</span> </div>
						<div className="tz-property-excerpt"> {this.props.description} </div>
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
					</div>
					
				</div>
			);
	}
}