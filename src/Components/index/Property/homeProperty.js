import React from 'react'
// import img3 from '../../../images/properties-9-2-1024x373.jpg'
import img4 from '../../../images/properties-9-2-1024x373.jpg'
import img_not_available from '../../../images/img_not_available.png'

import { Link } from 'react-router-dom'
import $ from 'jquery'
import  API_URL from '../../../app-config'


export default class Homeproperty extends React.Component{
	constructor(props){
		super(props);
		this.state={
    		propertiesImg:[],
			// showPopup: false
		}
		// this.onClickClose=this.onClickClose.bind(this)
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
	                           <a  className="cbp-l-caption-buttonRight"  onClick={this.props.onClickImagePreview.bind(this,this.props.id)} > <i className="icon-plus-circle" ></i> </a> 
                        	</div>
                    	</div>
                	</div>
				</div>
					
					<div className="tz-property-des">
						<h5><a href="">{this.props.Title}</a></h5>
						<div className="tz-property-price"> ${this.props.total_amount}&nbsp;<span>/ Month</span> </div>
						<div className="tz-property-excerpt"> {this.props.description} </div>
					</div>
					
				</div> 
			);
	}
}