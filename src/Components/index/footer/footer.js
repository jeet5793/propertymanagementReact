import React from 'react'
import img1 from '../../../images/logo-white.png'
import img2 from '../../../images/bk-footer.jpg'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import APP_VERSION from "../../../app-version";
import API_URL from '../../../app-config';
class Footer extends React.Component{
	constructor(){
		super();
		this.state = {
			email:"",
			errors:{}
		}
		this.onClickNewsLetter = this.onClickNewsLetter.bind(this);
		this.onChangeNewsLetter = this.onChangeNewsLetter.bind(this);
	}
	submitAlert()
	{		
		var actionType = $("#actionType").val();
		if(actionType=="No")
		{
			$("#SBlockUIConfirm").hide();
		}
		else if(actionType=="Yes")
		{
			var url = $("#hiddenURL").val();
			//$("#SBlockUIConfirm").hide();
			 window.location.href= url;
			// HIT URL 
		}
		else{
			
			$("#SBlockUIConfirm").hide();
			
		}
	}
	onChangeNewsLetter(e){
		this.setState({[e.target.name]:e.target.value})
	}
	onClickNewsLetter(e){
		e.preventDefault();
		let errors = {};
		var opts = this.state;
		if(!opts.email){
			// return alert("Email should not be blank.!!!");
			 errors["email"] = "Email should not be blank. !!!";
			 this.setState({errors: errors});
		}else{
			$("#loaderDiv").show();
		 fetch(`${API_URL}assetsapi/newsletter`, {
            method: 'post',
            body: JSON.stringify(opts)
        }).then((response)=> {
            response.json().then(data=>{
				 $("#loaderDiv").hide();
				 
				$("#actionType").val("Yes");
				$("#hiddenURL").val("/");
				$(".confirm-body").html(data.msg);
				$("#SBlockUIConfirm").show();
			})
		})
	}
	}
  // openExternal(e,url){
    // window.open(url)
  // }
	render(){
		return( <footer className="tz-footer" style={{backgroundImage:'Url('+img2+')'}}>
    <div className="tz-footer-content">
      <div className="container">
        <div className=" tz-footer-two">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 footer-item">
              <aside id="tzcontact_info-2" className="widget_tzcontact_info widget">
                <div className="tzwidget-contact">
                  <div className="tzwidget-logo"> <a href="/"> <img src={img1} alt="Assets Watch" /> </a> </div>
                  <p> Assets Watch provides residential, commercial and rural property marketing solutions and search tools, plus information for buyers, investors, sellers, renters and agents United States wide. </p>
                  <span className="tzwidget-social"> 
                  <a className="facebook" href = "https://www.facebook.com/assetswatch/" target="_blank"><i className="fa fa-facebook"></i></a> 
                  <a className="twitter" href = "https://twitter.com/assetswatch" target="_blank"><i className="fa fa-twitter"></i></a> 
                  <a className="google" to="#" ><i className="fa fa-google-plus" ></i></a> 
                 
                  <a className="linkedin" href = "https://www.linkedin.com/in/assets-watch-355127175/" target="_blank"><i className="fa fa-linkedin"></i></a> 
				  {/*  <Link className="pinterest" to="#"><i className="fa fa-pinterest"></i></Link> 
	<Link className="flickr" to="#"><i className="fa fa-flickr"></i></Link> */}
                  </span> 
                  </div>
              </aside>
            </div>
            {/*end class footermenu*/}
            <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6 footer-item">
              <aside id="nav_menu-2" className="widget_nav_menu widget">
                <h3 className="module-title title-widget"><span>Quick links</span></h3>
                <div className="menu-menu-footer-container">
                  <ul className="menu">
                    <li className=""><Link to="register">Registration</Link></li>
                    <li className=""><Link to="aboutus">About Us</Link></li>
                    <li className=""><Link to="contactus">Contact Us</Link></li>
                    <li className=""><Link to="properties">My Properties</Link></li>
                    <li className=""><Link to="privacy-policy">Privacy & Policy</Link></li>
                    <li className=""><Link to="terms-condition">Terms & Condition</Link></li>
                  </ul>
                </div>
              </aside>
            </div>
            {/*end class footermenu-*/}
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 footer-item contact-ftr">
              <aside id="nav_menu-2" className="widget_nav_menu widget">
                <h3 className="module-title title-widget"><span>Contact</span></h3>
                <div className="menu-menu-footer-container">
                  <ul id="menu-menu-footer" className="menu">
                     <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1110 map-icon"><Link to="#" className="foter-cont">113 State Hwy 121 Coppell, TX 75019</Link></li>
                   <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-309 phone-icon"><Link to="#" className="foter-cont">(214) 702-9959</Link></li>
                   <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1095 email-icon"><Link to="#" className="foter-cont">info@assetswatch.com </Link></li>
                  </ul>
                </div>
              </aside>
            </div>
            {/*end class footermenu-*/}
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 footer-item">
              <aside id="newsletterwidget-2" className="widget_newsletterwidget widget">
                <h3 className="module-title title-widget"><span>NewsLetter</span></h3>
                Subscribe here.
                <div className="tnp tnp-widget">
                  <form method="post" action="/?na=s" id="footerForm" >
                    <input type="hidden" name="nr" value="widget" />
                    <input type='hidden' name='nl[]' value='0' />
                    <div className="tnp-field tnp-field-email">
                      <label>Email</label>
                      <input className="tnp-email" type="email" onChange={this.onChangeNewsLetter} name="email" required />
					   <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                    </div>
                    <div className="tnp-field tnp-field-button">
                      <input className="tnp-submit" type="submit" value="Subscribe" onClick={this.onClickNewsLetter}/>
                    </div>
                  </form>
                </div>
              </aside>
            </div>
            {/*end class footermenu*/}
          </div>
        </div>
        <div className="tz-copyright">
          <h6>Copyright 2018 Assets Watch. All rights reserved. ( {APP_VERSION} )</h6> 
        </div>
      </div>
    </div>
	
	<div id="loaderDiv" className="preloader">

		<div className="cssload-loader">Assets Watch</div>

	</div>
	

			{/* ALERT DIV*/}
			<div id="SBlockUIConfirm" className="BlockUIConfirm" style={{display:"none"}}>
				<div className="blockui-mask"></div>
				<div className="RowDialogBody">
					<div className="confirm-header row-dialog-hdr-success">
						Notification
					</div>
					<div className="confirm-body">
						
					</div>
					<div className="confirm-btn-panel text-center">
						<div className="btn-holder">
							<input type="hidden" id="hiddenURL" />
							<input type="hidden" id="actionType" />
							<input type="button" id="actionBtn" className="row-dialog-btn btn btn-success" value="Ok" onClick={this.submitAlert} />
							{/*<!-- <input type="button" className="row-dialog-btn btn btn-naked" value="No, Cancel" onclick="$('#BlockUIConfirm').hide();" /> -->*/}
						</div>
					</div>
				</div>
			</div>
			
			
			
			
			{/* ALERT DIV*/}
				{/* <div id="proImageConfirm" className="BlockUIConfirm" style={{display:"none"}}>
				<div className="blockui-mask"></div>
				<div className="RowDialogBody">
					<div className="confirm-header row-dialog-hdr-success">
						Property Image
					</div>
					<div className="confirm-body">
						
						<div className="slider-holder">
							<span id="slider-image-1"></span>
							<span id="slider-image-2"></span>
							<span id="slider-image-3"></span>
							<div className="image-holder">
								<img src="1.jpg" className="slider-image" />
								<img src="2.jpg" className="slider-image" />
								<img src="3.jpg" className="slider-image" />
							</div>
							<div className="button-holder">
								<a href="#slider-image-1" className="slider-change"></a>
								<a href="#slider-image-2" className="slider-change"></a>
								<a href="#slider-image-3" className="slider-change"></a>
							</div>
						</div>
						
					</div>
					
				</div>
				</div> */}
			
	
  </footer>);
	}
}
export default Footer;