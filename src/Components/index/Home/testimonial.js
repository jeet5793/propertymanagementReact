import React from 'react'
import img19 from '../../../images/jack.jpg'
import img20 from '../../../images/kiara.jpg'
import img_not_available from '../../../images/img_not_available.png'

import API_URL from '../../../app-config';

export default class Testimonial extends React.Component{
	constructor(props){
        super(props)
       
    }
	componentDidMount(){
  	// var img=';'
		
		
	}
	addDefaultSrc(ev){
	  ev.target.src = img_not_available;
	}
	render(){
		// console.log('testimonialDetail ' +JSON.stringify(this.props.testimonialDetail))
		return(
		
		<div id="carousel-example-generic" className="carousel slide" data-ride="carousel"> 
      {/* Carousel indicators*/}
      <ol className="carousel-indicators">
	   {this.props.testimonialDetail?this.props.testimonialDetail.map((item,index)=>(
        <li data-target="#carousel-example-generic" data-slide-to={index} className={index===0?'active':''}></li>
        )):''}
      </ol>
	  
      {/* Wrapper for slides */}
      <div className="carousel-inner">
		
				{this.props.testimonialDetail?this.props.testimonialDetail.map((item,index)=>(
                    <div className={index===0?'item active':'item'}>
                      <div className="row">
                        <div className="row">
                          <div className="col-md-6 col-md-offset-3">
                            <div className="col-sm-4"> <img onError={this.addDefaultSrc} src={(item.img_path && item.img_path.length>0)?API_URL+'assetsadmin/'+item.img_path:img_not_available}  alt="img1" id="testimonial1" className="img-responsive" style={{width:'80px'}} /> </div>
                            <div className="col-sm-8 no-padding">
                              <h4 className="no-margin">{item.name}</h4>
                              <p className="testimonial_subtitle"><span>{item.designation}</span> </p>
                            </div>
                          </div>
                        </div>
                        <p className="testimonial_para">{item.message}</p>
                      </div>
                    </div>
			 )):''}
      </div>
    </div>);
	}
}