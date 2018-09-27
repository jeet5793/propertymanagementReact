import React from 'react'
// import img1 from '../../../images/properties-3.jpg'
import { Link } from 'react-router-dom'
export default class PropertyItems extends React.Component{
    render(){
      var classs=""
      if(this.props.PropertyStatus!=="Rent"){
        classs="for-sale"
      }
      else
      {
       classs="for-rent" 
      }
        return(
            
            <div style={{width:"30%",marginRight:30}} className={"tz-property-content filterDiv cbp-item "+classs}>
            <Link to={{'pathname':"property-detail",state:this.props.property}} ownerDetails={this.props.ownerDetails}>
            <a className="tz-property-thum cbp-caption" rel="nofollow">
              <div className="cbp-caption-defaultWrap">
                <figure>
                <img className="property-imggg" src={this.props.src} alt="" style={{width: '100%'}}/>
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
            </a>
            </Link>
            <div className="tz-property-des">
              <h5><Link to={{'pathname':"property-detail",state:this.props.property}}><a>{this.props.Title}</a></Link></h5>
              <div className="tz-property-price"> $ {this.props.total_amount}&nbsp; </div>
              <div className="tz-property-info">
                <div className="pull-left"> 
                <span> <i className="icon-frame-expand"> </i> {this.props.square_feet}ft&nbsp; </span> 
                </div>
                <div className="pull-right"> 
                <span><i className="icon-car"> </i>2</span> 
                <span><i className="icon-bathtub"> </i>3</span> 
                <span><i className="icon-bed"> </i>3</span> </div>
              </div>
              <div className="tz-property-excerpt"> {this.props.description}</div>
              <div className="tz-property-views">
                <div className="pull-left">
                  <div className="tz-property-share"> <a><i className="icon-share2"></i></a>
                    <div className="tz-socia"> 
                      {/* <!-- Facebook Button -->  */}
                      <a onclick="" className="tz_social facebook"><i className="fa fa-facebook"></i></a> 
                      
                      {/* <!-- Twitter Button --> */}
                      <a className="tz_social twitter" ><i className="fa fa-twitter"></i></a> 
                      
                      {/* <!-- Google +1 Button --> 
                      <!-- Place this tag where you want the +1 button to render. -->  */}
                      <a className="tz_social google"><i className="fa fa-google-plus"></i></a> 
                      
                      {/* <!-- Pinterest Button -->  */}
                      <a className="tz_social pinterest"><i className="fa fa-pinterest"></i></a> </div>
                  </div>
                  <span id="fav_dir654" > 
                  <a data-toggle="tooltip" data-placement="bottom" title="Add to Favorites"  > 
                  <i className="icon-heart"></i> </a> </span> </div>
                <a href="property-detail" className="pull-right tz-view" rel="nofollow">
                <Link to={{'pathname':"property-detail",state:this.props.property}} className="pull-right tz-view" rel="nofollow">VIEW DETAILS</Link></a> </div>
                
            </div>
          </div>
        );
    }
}