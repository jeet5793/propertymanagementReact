import React from 'react'
import img19 from '../../../images/jack.jpg'
import img20 from '../../../images/kiara.jpg'


import API_URL from '../../../app-config';

export default class Testimonial extends React.Component{
	componentDidMount(){
  	var img=';'
  	fetch(`${API_URL}assetsapi/testimonial/`)
  	.then(function(response) {
        return response.json();
    	}).then(function(data) {
    	if(data.success==1) {
        for(var i=0;i<data.testimonial.length;i++) {
          document.getElementById('testimonial'+(i+1)).src=`${API_URL}assetsadmin/`+data.testimonial[i].img_path
          document.getElementById('testimonial'+(i+1)+'name').innerHTML=data.testimonial[i].name
          document.getElementById('testimonial'+(i+1)+'designation').innerHTML=data.testimonial[i].designation
          document.getElementById('testimonial'+(i+1)+'msg').innerHTML=data.testimonial[i].message
        }
      }
    });
	}
	render(){
		return(<div id="carousel-example-generic" className="carousel slide" data-ride="carousel"> 
      {/*} Carousel indicators */}
        {/* <ol className="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0"  className="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
      </ol>*/}
      {/* Wrapper for slides */}
      <div className="carousel-inner">
        <div className="item active">
          <div className="row">
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <div className="col-sm-4"> <img src={img19}  alt="img1" id="testimonial1" className="img-responsive" style={{width:'80px'}} /> </div>
                <div className="col-sm-8 no-padding">
                  <h4 className="no-margin min-750"><strong id="testimonial1name">Jack Andreson</strong></h4>
                  <p className="testimonial_subtitle"><span id="testimonial1designation">Chlinical Chemistry Technologist</span> </p>
                </div>
              </div>
            </div>
            <p className="testimonial_para" id="testimonial1msg">Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo en.</p>
          </div>
        </div>
        
        
      </div>
    </div>);
	}
}