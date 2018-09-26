import React from 'react'
// import img1 from '../../../images/1.jpg'
import $ from 'jquery'
import { Link } from 'react-router-dom'
import API_URL from '../../../app-config';
import swal from 'sweetalert';
export default class ResetPassword extends React.Component{
  constructor(props){
	  super(props)
	  this.state={
		  resetPass:{
			  password:'',
			  cnfpass:'',
			  session_id:''
		  },
		  expired:''
	  }
	  this.resetPassword = this.resetPassword.bind(this)
	  this.onChangeHandler = this.onChangeHandler.bind(this)
	  this.checkExpired = this.checkExpired.bind(this)
  }
  componentDidMount(){
	  this.checkExpired();
  }
   checkExpired = ()=>{
	   $("#loaderDiv").show();
  fetch(`${API_URL}assetsapi/forget_pass_data/${window.location.search.substring(4)}`, {
				  method: 'GET'
				})
				.then(res => res.json())
				.then(
				  (result) => {
					console.log('safd'+JSON.stringify(result));
					if (result.success==0) {
					   $("#loaderDiv").hide();
					   
					   $("#actionType").val("Yes");
					   $("#hiddenURL").val("/");
					   $(".confirm-body").html(result.msg);
					   $("#SBlockUIConfirm").show();
							
					}else if (result.success==1) {	
					  $("#loaderDiv").hide();
					}					
					
				  },
				(error) => {
				  console.log(error)
				}
			  )

  }			  
  onChangeHandler(e){
	  const resetForm = this.state.resetPass;
	  if(e.target.name=='password')
		  resetForm.password=e.target.value;
	  if(e.target.name=='cnfpass')
		  resetForm.cnfpass=e.target.value
	  
	  const sessionurl = window.location.search;
	  const session = sessionurl.substring(4);
	  resetForm.session_id = session;

	  this.setState({resetPass:resetForm});
	  // console.log(this.state.resetPass);
 
  }
	resetPassword()
	{
		const opts = this.state.resetPass;
		console.log(opts);
		if (!opts.password) {
		  alert("Password should not be blank");
		  return;
		}
		if (opts.cnfpass !== opts.password) {
			alert("Confirm password is not matched.");
		}else
		{
			$("#loaderDiv").show();
			fetch(`${API_URL}assetsapi/change_password`, {
				  method: 'POST',
				body: JSON.stringify(opts)
				})
				.then(res => res.json())
				.then(
				  (result) => {
					
					if (result.success) {
					   // swal("Assets watch",result.msg);
							// this.props.history.replace(`/`);
						$("#loaderDiv").hide();
					   
					   $("#actionType").val("Yes");
					   $("#hiddenURL").val("/");
					   $(".confirm-body").html(result.msg);
					   $("#SBlockUIConfirm").show();
							
					}				
					
				  },
				(error) => {
				  console.log(error)
				}
			  ) 
		}			  
		
	}
    render(){
        return(
          <div>
             <div className="tz-Breadcrumb">
				<div className="tzOverlayBreadcrumb">
				  <div className="container">
					<h1> Set New Password </h1>
					<div className="tz-breadcrumb-navxt"> 
					 {/* <!--Breadcrumbs--> 
					  <!-- Breadcrumb NavXT 6.0.4 --> */}
					  
					</div>
				  </div>
				  {/* <!-- end className container --> */}
				</div>
			  </div>
			   {/*<!-- end className tzbreadcrumb -->*/}
			  <div className="container">
				<div className="tz_page_content">
				  <div className="post-1083 page type-page status-publish hentry">
					<div id="login-2" className="bootstrap-wrapper tz-login">
					  <div className="menu-toggler sidebar-toggler"> </div>
					  {/*<!-- END SIDEBAR TOGGLER BUTTON --> 
					  <!-- BEGIN LOGO --> 
					  
					  <!-- END LOGO --> 
					  <!-- BEGIN LOGIN -->*/}
					  <div className="col-md-8 col-md-offset-2">
					  {this.state.expired.length>0?<div className="content">{this.state.expired}</div>
						:<div className="content"> 
						  {/* <!-- BEGIN LOGIN FORM -->*/}
						  <form id="login_form" className="login-form" action="#" method="post">
							<h3 className="form-title">Reset Password</h3>
							<div className="display-hide" id="error_message"> </div>
							
							<div className="col-md-12">
							  <div className="form-group">
								<input className="form-control form-control-solid placeholder-no-fix" type="password" autocomplete="off" placeholder="New Password" value={this.state.resetPass.password} onChange = {this.onChangeHandler} name="password" id=""/>
							  </div>
							</div>
							
							<div className="col-md-12">
							  <div className="form-group">
								<input className="form-control form-control-solid placeholder-no-fix" type="password" autocomplete="off" placeholder="Confirm Password" value={this.state.resetPass.cnfPass} onChange = {this.onChangeHandler}name="cnfpass" id=""/>
							  </div>
							</div>
							
							<div className="col-md-12 col-xs-12 text-center">
							  <button type="button" className="btn btn-success uppercase" onClick={this.resetPassword} >Submit</button>
							</div>
						  </form>
						   {/*<!-- END LOGIN FORM --> */}
					</div>}
					  </div>
					</div>
				  </div>
				  {/* <!--    Comments    --> 
				  <!--    End-Comments    -->  */}
				</div>
			  </div>

          </div>
        );
    }
}