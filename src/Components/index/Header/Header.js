import React, { Component } from 'react';
import Loading_blue_64x64 from '../../../images/loading_blue_64x64.gif'
import Logo_white from '../../../images/logo-white.png'
import Logo from '../../../images/logo.png'
import $ from 'jquery'

//import '../../../css/custom-main.css'
// import LanguageSelect from './languageSelect'
// import {Redirect} from 'react-router-dom'
import HeadrNav from './headerNav'



export default class Header extends Component {
  constructor(props){
    super(props)
    // alert("Header Header")
  }
  componentDidMount(){
    // alert("Header Header")
    setTimeout(function(){
     var jQuery=window.$;
    
            $("#toggle").click(function() {
              var elem = $("#toggle").text();
			  // alert(elem);
              if (elem === "Advance Search") {
                //Stuff to do when btn is in the read more state
                $("#toggle").text("Normal Search");
                $("#text").slideDown();
              } else {
                //Stuff to do when btn is in the read less state
                $("#toggle").text("Advance Search");
                $("#text").slideUp();
              }
            });  
            
            },1500);
			
  }
 
  headerChange(){
    return(<div className="tz-header tz-header-type-1">
              <div className="row">
                <div className="container">
                  <div className="tz-header-center">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12"> <a className="tz-header-logo" href="/" title="Assets Watch"> <img src="images/logo.png" alt="Assets Watch" width="134" height="54" /> </a> </div>
                        <div className="col-md-5 col-sm-2 col-xs-12 text-center"></div>
                        <div className="col-md-5 col-sm-6 col-xs-12 tz-res-none">
                          <div className="tz-header-top row">
                            <div className="typ-2">
                              
                              {/* <div className="pull-right">
                          
                               <a className= "" ref={this.owner} id="ownerBtn" onClick={this.activeSignIn('owner')} href="#" >Owners<span></span></a>
                                <div className="login-1 text-left  login-open">
                                  <form className="form-signin">
                                    <div className="form-group">
                                      <label>Username</label>
                                      <input type="text" className="form-control" name="username" placeholder="Email Address"/>
                                    </div>
                                    <div className="form-group">
                                      <label>Password</label>
                                      <input type="password" className="form-control" name="password" placeholder="Password"/>
                                    </div>
                                    <div className="remember-checkbox">
                                      <input type="checkbox" name="one" id="one" />
                                      <label className="remember" for="one">Remember me</label>
                                    </div>
                                    <a href="#" className="button"> <span>Login</span> </a> <span>-or-</span> <a href="registration" className="button button-grey"> <span>Register</span> </a> <a href="#">Forgot password ?</a>
                                  </form>
                                  <div className="login-with"> <span>Login With: </span> <a className="fb" href="#"><i className="fa fa-facebook"></i></a> <a className="twitter" href="#"><i className="fa fa-twitter"></i></a> <a className="google-plus" href="#"><i className="fa fa-google-plus"></i></a> <a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a> </div>
                                </div>
                                <a className="typeli" ref={this.agent} href="#" id="" onClick={this.activeSignIn('agent')}>Agents<span></span></a>
                                 <a className="typeli" ref={this.tenants} href="#" id="" onClick={this.activeSignIn('tenant')}>Tenants<span></span></a> </div>
                                <div className="tz-header-top-right">
                                    <div className="tz-header-wpml pull-right">
                                  
                                      <LanguageSelect />


                                </div>
                              </div> */}

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*<!--end header center-->*/}
                  
                  <div className="tz-header-bottom tz-slick text-center">
                    <div className="tz-menu">
                      <div className="tz-header-menu tz-slick text-center">
                       {/* <nav className="nav-collapse">
                          <ul className="nav navbar-nav tz-nav ">
                            <li className=""><a href="index">Home</a> </li>
                            <li className="current-menu-item"><a href="/about">About Us</a></li>
                            <li className=""><a href="property">Properties</a>
                             
                            </li>
                            <li className=""><a href="plans">Plans</a></li>
                            <li className=""><a href="blog">Blog</a> </li>
                            <li className=""><a href="contact">Contact Us</a></li>
                          </ul>
                        </nav>*/}
                      </div>
                    </div>
                  </div>
                  {/*<!--end header bottom--> */}
                </div>
              </div>
            </div>);
  }
  render() {
    return (
      <div className="">
      
          <div id="tzloadding"> <img className="loadding_img" src={Loading_blue_64x64} alt="loading..." width="32" height="39" /> </div>
          <div className="vc_row wpb_row vc_row-fluid">
            <div className="no_container">
              <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner ">
                  <div className="wpb_wrapper">
                    <header className="tz-header tz-header-type-2 tz-fixed" ref={this.head}> 
                      <div className="tz-header-top row">
                        <div className="col-md-12 row">
                          <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12 text-center"> 
                            {/*need to add router link */}
                            <a className="tz-header-logo" href="/index" title="Assets Watch">
                             <img src={Logo_white} alt="Assets Watch" width="134" height="54" />
                             <img className="img-scroll" src={Logo} alt="Assets Watch" width="133" height="54" /> 
                            </a> 
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-4 col-xs-4 tz-res-none"> </div>
                          
                            
                           <HeadrNav loggedIn={this.props.loggedIn} />
                          
                        </div>
                      </div>
                      {/*end header center*/}
                      
                      <div className="row">
                        <div className="container">
                          <div className="tz-header-bottom tz-slick text-center">
                            <div className="tz-menu">
                              <div className="tz-header-menu tz-slick text-center">
                                {/*<nav className="nav-collapse">
                                  <ul id="menu-menu-home" className="nav navbar-nav tz-nav ">
                                    <li className="current-menu-item"><a href="index">Home</a> </li>
                                    <li className=""><a href="AboutUs">About Us</a></li>
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-570">
                                     
                                      <a href="property">Properties</a>
                                    </li>
                                    <li className=""><a href="plans">Plans</a></li>
                                    <li className=""><a href="blog">Blog</a> </li>
                                    <li className=""><a href="contact">Contact Us</a></li>
                                  </ul>
                                </nav>*/}
                              </div>
                            </div>
                          </div>
                          {/*end header bottom*/}
                        </div>
                      </div>
                    </header>                  
                    {this.headerChange}
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}