import React from 'react'
// import img1 from '../../../images/properties-3.jpg'
import { Link } from 'react-router-dom'
import img_not_available from '../../../images/img_not_available.png'
export default class PropertyItems extends React.Component{
	constructor(props){
		super(props)
	}
	addDefaultSrc(ev){
	  ev.target.src = img_not_available;
	}
    render(){
      //console.log('this.props.PropertyStatus'+JSON.stringify(this.props.PropertyStatus));
      var classs=""
      if(this.props.PropertyStatus!=="Rent"){
        classs="for-sale"
      }
      else
      {
       classs="for-rent" 
      }
	  
        return(

            <div className={"tz-property-content filterDiv cbp-item "+classs} style={{width: "272px", left:(this.props.index*298)}}>
				<div className="cbp-item-wrapper">
					 <a onClick = {()=>this.props.onClickPropertyDetail(this.props.id)} style={{cursor:'pointer'}}>
						<span className="tz-property-thum cbp-caption" rel="nofollow">
						  <div className="cbp-caption-defaultWrap">
							<figure>
							<img onError={this.addDefaultSrc} className="property-imggg" src={this.props.src?this.props.src:img_not_available} alt="" style={{width: '100%'}}/>
							  <figcaption className="for-sale"> {this.props.PropertyStatus} </figcaption>
							</figure>
						  </div>
						  <div className="cbp-caption-activeWrap">
							<div className="cbp-l-caption-alignCenter">
							  <div className="cbp-l-caption-body">
								<div className="cbp-l-caption-text">VIEW DETAIL</div>
							  </div>
							</div>
						  </div>
						</span>
						</a>
						<div className="tz-property-des">
						  <h5><a onClick = {()=>this.props.onClickPropertyDetail(this.props.id)} style={{cursor:'pointer'}}>{this.props.Title}</a></h5>
						  <div className="tz-property-price"> $ {this.props.PropertyStatus=='Rent'?this.props.rent:this.props.total_amount}&nbsp; </div>
						  <div className="tz-property-info">
							<div className="pull-left"> 
							<span> <i className="icon-frame-expand"> </i> {this.props.square_feet}ft&nbsp; </span> 
							</div>
							{/*<div className="pull-right"> 
							<span><i className="icon-car"> </i>2</span> 
							<span><i className="icon-bathtub"> </i>3</span> 
							<span><i className="icon-bed"> </i>3</span> </div>*/}
						  </div>
						  <div className="tz-property-excerpt"> {this.props.description}</div>
						  <div className="tz-property-views">
							{/*<div className="pull-left">
							  <div className="tz-property-share"> <a><i className="icon-share2"></i></a>
								<div className="tz-socia"> 
								  <a onclick="" className="tz_social facebook"><i className="fa fa-facebook"></i></a> 
								  
								  <a className="tz_social twitter" ><i className="fa fa-twitter"></i></a> 
								  
								  <a className="tz_social google"><i className="fa fa-google-plus"></i></a> 
								  
								  <a className="tz_social pinterest"><i className="fa fa-pinterest"></i></a> </div>
							  </div>
							  <span id="fav_dir654" > 
							  <a data-toggle="tooltip" data-placement="bottom" title="Add to Favorites"  > 
							  <i className="icon-heart"></i> </a> </span> </div>*/}
							<span rel="nofollow">
							<a onClick = {()=>this.props.onClickPropertyDetail(this.props.id)} className="btn pull-right tz-view" rel="nofollow">VIEW DETAILS</a></span> </div>
							
						</div>
						
							</div>
							
						</div>
        );
    }
}