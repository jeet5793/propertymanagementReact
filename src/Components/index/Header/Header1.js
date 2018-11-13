import React from 'react'
import img1 from '../../../images/loading_blue_64x64.gif'
import img2 from '../../../images/logo.png'
import img3 from '../../../images/vn.png';
import img4 from '../../../images/vn.png'
import img5 from '../../../images/fr.png'
//import '../../../css/custom-main.css'
import NavLinks from '../Navbar/NavLinks'
import $ from 'jquery'
//import '../../../css/comp-main.css'
import HeadrNav1 from '../Header/headerNav1'
import HeadrNav from '../Header/headerNav'

$(document).ready(function(){
      $('body').append('<div id="toTop" class="btn btn-info"><span class="icon-arrow-up"></span></div>');
    	$(window).scroll(function () {
			if ($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			} else {
				$('#toTop').fadeOut();
			}
		}); 
    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});

export default class Header1 extends React.Component{
   componentDidMount(){
    $(document).ready(function() {
      $("#toggle").click(function() {
        var elem = $("#toggle").text();
		// alert(elem);
        if (elem == "Advance Search") {
          //Stuff to do when btn is in the read more state
          $("#toggle").text("Normal Search");
          $("#text").slideDown();
        } else {
          //Stuff to do when btn is in the read less state
          $("#toggle").text("Advance Search");
          $("#text").slideUp();
        }
      });
}); 
  }
	render(){
		return(
      <div>

  <div id="tzloadding"> <img className="loadding_img" src={img1} alt="loading..." width="32" height="39" /> </div>
  <div className="vc_row wpb_row vc_row-fluid">
    <div className="no_container">
      <div className="wpb_column vc_column_container vc_col-sm-12">
        <div className="vc_column-inner ">
          <div className="wpb_wrapper">
              <header className="tz-header tz-header-type-1  tz-fixed">
                <div className="row">
                  <div className="container">
                    <div className="tz-header-center">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12"> <a className="tz-header-logo" href="/" title="Assets Watch"> 
                          <img src={img2} alt="Assets Watch" width="133" height="54" /> </a> </div>
                          <div className="col-md-5 col-sm-2 col-xs-12 text-center"></div>
                          <div className="col-md-5 col-sm-6 col-xs-12 tz-res-none ownr">
                            <div className="tz-header-top row " >
                              <HeadrNav loggedIn={this.props.loggedIn} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <NavLinks activeNav={this.props.actChild} activeClass="current-menu-item tabbable-line" normalClass="" history={this.props.history} />
                    {/*<!--end header center-->*/}
                    
                    
                  {/* <!--end header bottom--> */}
                  </div>
                </div>
              </header>
            
            {/* <div className="tz-header tz-header-type-1">
                <div className="row">
                  <div className="container">
                    <div className="tz-header-center">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12"> <a className="tz-header-logo" href="/" title="Assets Watch"> 
                          <img src={img2} alt="Assets Watch" width="133" height="54" /> </a> </div>
                          <div className="col-md-5 col-sm-5 col-xs-12 text-center"></div>
                          <div className="col-md-5 col-sm-5 col-xs-12 tz-res-none ownr">
                            <div className="tz-header-top row " >
                              <HeadrNav loggedIn={this.props.loggedIn} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <NavLinks activeNav={this.props.actChild} activeClass="current-menu-item tabbable-line" normalClass="" />
                   
                  </div>
                </div>
	</div>  */}     
            
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
);
	}
}