import React from 'react';
import { connect } from 'react-redux';
import vn from '../../../images/vn.png'
import us from '../../../images/us.png'
import fr from '../../../images/fr.png'
import swal from 'sweetalert';

import $ from 'jquery'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import {Redirect,Route} from 'react-router-dom'
import API_URL from '../../../app-config';
import { setUser } from '../../../actions';
import Cookies from 'js-cookie';

const timeoutLength = 300;
class Headernav extends React.Component {
    constructor(props){
        super(props)

        this.owner=React.createRef();
        this.agent=React.createRef();
        this.tenants=React.createRef();
        this.activeSignIn=this.activeSignIn.bind(this);
        this.Login=this.Login.bind(this)
        this.state={
          email:'',
          password:'',
          flag:false,
		  social_links:'',
		 fgtemail:''

        }

        this.onChangeHandler=this.onChangeHandler.bind(this);
        this.activeSignIn=this.activeSignIn.bind(this);
        this.Login=this.Login.bind(this);
		this.socialLogin = this.socialLogin.bind(this);
		 this.sendForgetPassword = this.sendForgetPassword.bind(this);
		 this.onChangeEmail = this.onChangeEmail.bind(this);
    }
    
	


    onChangeHandler(e){
           this.setState({[e.target.name]:e.target.value})
      }
	  gotoRegistrationPage(){
        $(".login-open").hide();
     }
    Login(type) {
		const assetstype = type;
		// console.log(assetstype)
		this.state.assets_type= assetstype;
		var opts = this.state;
		console.log(opts)
        var $=window.$;
        var Data;
        fetch(`${API_URL}assetsapi/login/`, {
            method: 'post',
            body: JSON.stringify(opts)
        }).then((response)=> {
            response.json().then(data=>{
         // console.log("data 1st: "+JSON.stringify(data))
                if(data.msg==="Invalid Email or Password") {
                  //  console.log(data.msg)
                    swal("Assets Watch", data.msg);
                    $(".login-open").fadeToggle();
                } else if(data.msg.indexOf("Do you want to continue as")!=-1){
					const rslt = window.confirm(data.msg);
						if(rslt==true)
						{
							if(data.assetsType=='agent')
							{
								$("#light").show();
								$("#fade").show();
								$(".regBtn").click(function(){
									const AgentType = this.value;
									
									 // alert(AgentType);
									if(AgentType=="Broker")
									{
										
										// $.session.set("agenttype", "2");
										localStorage.setItem('agenttype',"2");
										
									}else if(AgentType=="Service Provider"){
										localStorage.setItem('agenttype',"1");
										
									}else{
										localStorage.setItem('agenttype',"");
										
									}
									
								});
								
							}
							
							// console.log(localStorage.getItem('agenttype'));
							
							if(localStorage.getItem('agenttype')!='')
							{
								var optsValue= data.userdata;
								optsValue.agent_type = localStorage.getItem('agenttype');
								
							}else{
								var optsValue= data.userData;
							}
							// const optionJson = data.userData;
									// optionJson.agent_type = agenttype;
						
						// console.log(optsValue);
						 if(optsValue!='')
						{
							fetch(`${API_URL}assetsapi/register/`, {
								method: "post",
								body: JSON.stringify(optsValue)
							  })
								.then(response => {
								  return response.json();
								})
								.then((res) => {
								  console.log('dataaaa:  ', res);
								  if(res){
									var userid = res.user.assets_id
									localStorage.setItem('userid',userid)
								  }
								  if(res.msg.indexOf("Registered Successfully")!=-1)
								  {
									// let userType = 'owner';
									// if (this.state.RegType==='2') {
									  // userType = 'agent'
									// } else if (this.state.RegType==='3') {
									  // userType = 'tenant'
									// }
									if(res.user.agentType!='' && res.user.agentType=='Service Provider')
									{
										this.props.history.replace(`/`);
									}else{
										const assetsType= data.assetsType;
										 window.location.href=`/register-plans?Datatype=${assetsType}`;
									}
								   
								  }
								else alert(res.msg)
								}).catch((error) => {
								  console.log('error: ', error);
								}); 
						}else{
							window.location.href='/';
						}
					}else{
							window.location.href='/';
						}
				}
				else{
                    setTimeout(()=>{

                    fetch(`${API_URL}assetsapi/profile/${data.userdata.assets_id}/${data.userdata.session_id}`, {
                        method: 'get'
                    })
                    .then(res => res.json())
                    .then(
                      (result) => {
                        //console.log("data 2: "+JSON.stringify(result))
                        if (result.success) {
                           // alert('profile:'+JSON.stringify(result.profile)+""+JSON.stringify(data.userdata.agentType));
                            localStorage.setItem('firstName',JSON.stringify(result.profile.first_name))
                            localStorage.setItem('lastName',JSON.stringify(result.profile.last_name))
							localStorage.setItem('userType',JSON.stringify(result.profile.assets_type))
                            this.props.setUser(data.userdata, result.profile);
                            Cookies.set("profile_data", data.userdata);

                            if(result.profile.assets_type==="1"){
                             this.props.history.push('/user')
                            }else if(result.profile.assets_type==="2"){
                                if(data.userdata.agentType==="Broker")
                                {
                                    this.props.history.push('/agent-broker')
                                }
                                else{
                                    this.props.history.push('/agent-serviceprovider')
                                }
                               
                            }else{
                                
                                this.props.history.push('/tenant')
                            }
                        } else {
                            this.props.setUser(data.userdata, result.profile);
                            // console.log(result.msg);
                        }
                        // this.props.updateInfo(result.profile)
                      },
                      // Note: it's important to handle errors here
                      // instead of a catch() block so that we don't swallow
                      // exceptions from actual bugs in components.
                      (error) => {
                        console.log('error')
                      }
                    )
                }, 1000)
                }
            })
        })
      }
	  logout(){
			localStorage.clear();
			window.location.href='/'
		}
      /* activeSignIn(actionId){
        if(actionId==="agent")
        {
			
            if(!this.state.flag){
                if(window.location.pathname==="/"||window.location.pathname==="/Home"||window.location.pathname==="/index")
                document.getElementById('loginDiv').setAttribute('style','left:15%')
                else
                document.getElementById('loginDiv').setAttribute('style','left:15%')
                $(".login-open").fadeToggle();
                this.setState({flag:true,flag1:false,flag2:false})
				this.setState({assetsType:2});
            }
            else{
                $(".login-open").hide();
                this.setState({flag:false,flag1:false,flag2:false})
            }
			
        }
        else if(actionId==="tenant")
        {
            if(!this.state.flag1)
            {
                if(window.location.pathname==="/"||window.location.pathname==="/Home"||window.location.pathname==="/index")
                document.getElementById('loginDiv').setAttribute('style','left:30%')
                else
                document.getElementById('loginDiv').setAttribute('style','left:30%')
                $(".login-open").fadeToggle();
                this.setState({flag1:true,flag:false,flag2:false})
				this.setState({assetsType:3});
            }
            else{
                $(".login-open").hide();
                this.setState({flag:false,flag1:false,flag2:false});
				
            }
			
        }
        else{

            if(!this.state.flag2)
            {
                if(window.location.pathname==="/"||window.location.pathname==="/Home"||window.location.pathname==="/index")
                document.getElementById('loginDiv').setAttribute('style','left:0')
                else
                document.getElementById('loginDiv').setAttribute('style','left:0')
                $(".login-open").fadeToggle();
                this.setState({flag2:true,flag:false,flag1:false})
				this.setState({assetsType:1});
            }
            else{
                $(".login-open").hide();
                this.setState({flag:false,flag1:false,flag2:false})
            }
			
        }
      } */
	  activeSignIn(actionId){
        if(actionId==="agent"){
            $(".login-open").fadeToggle();
            $(".login-open").css('left','23%')
			this.setState({assetsType:2});
            // document.getElementById('loginDiv').setAttribute('style','left:15%')
           
        }
        else if(actionId==='tenant')
        {
            $(".login-open").fadeToggle();
            $(".login-open").css("left","44%")
            // document.getElementById('loginDiv').setAttribute('style','left:30%')
            this.setState({assetsType:3});
        }
        else{
            $(".login-open").fadeToggle();
            $(".login-open").css('left','0%')
            // document.getElementById('loginDiv').setAttribute('style','left:0')
			this.setState({assetsType:1});
            
        }
    }
	componentDidMount(){
		
	}
	socialLogin(socialType,assetsType)
	{
		// alert(assetsType);
		
		fetch(`${API_URL}assetsapi/social_links`, {
        method: 'get'
      })
      .then(res => res.json())
		  .then(
			(result) => {
			  
			  console.log("data 2: "+JSON.stringify(result))
			  
				this.setState({social_links:result.data});
				
				if(socialType=='fb')
				{
					// const rtn = window.open(`${this.state.social_links.fbauthURL}`,"_self");
					// swal("Assets Watch", result.msg);
					// if(googlelogin)
				   	// this.props.history.replace('/');
				// console.log(rtn);
				// console.log(window.location);
				// alert(rtn);
				window.open(`${this.state.social_links.fbauthURL}`,"_self");
				}
				if(socialType=='twitter')
				{
					window.open(`${this.state.social_links.twitterUrl}`,"_self");
				}
				if(socialType=='google')
				{
					window.open(`${this.state.social_links.googleloginURL}`,"_self");
				}
				if(socialType=='linkedin')
				{
					window.open(`${this.state.social_links.linkedinURL}`,"_self");
					
				}
				
			   
			  //console.log("set user data"+JSON.stringify(this.state.profileData))
			},
		  (error) => {
			console.log('error')
		  }
		)
	}
	 forgetPassword = ()=>{
		  $("#forgetpassword").toggle();
	 }
	 onChangeEmail(e){
		 this.setState({fgtemail:e.target.value});
	 }
	sendForgetPassword = (assetsType)=>{
		const opts = {email:this.state.fgtemail,assets_type:assetsType}
		// console.log('this is:', opts);
		fetch(`${API_URL}assetsapi/forgot_password`, {
				  method: 'POST',
				body: JSON.stringify(opts)
				})
				.then(res => res.json())
				.then(
				  (result) => {
					
					if (result.success) {
					   swal("Assets watch","Password reset link sended to your email.");
							window.location.reload();
							
					} 
					
				  },
				(error) => {
				  console.log('error')
				}
			  )     
  }
    render(){
		
        return(
            <div style={{position:'absolute',left:'30%'}} className="">
	{!localStorage.getItem('firstName')?
        <div className="pull-right">
        <a className= "typeli login" id="owner"   onMouseEnter={()=>this.activeSignIn("owner")} onMouseLeave={this.leaveButton}>Owners<span></span></a>
            <div ref={this.loginDiv} id="loginDiv" className="login-1 text-left  login-open">
            <form className="form-signin">
                <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" onChange={this.onChangeHandler} name="email" placeholder="Email Address"/>
                </div>
                <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" onChange={this.onChangeHandler} name="password" placeholder="Password"/>
                </div>
                <div className="remember-checkbox">
                <input type="checkbox" name="one" id="one" />
                <label className="remember" htmlFor="one">Remember me</label>
                </div>
                <a onClick={this.Login.bind(this, this.state.assetsType)} className="button"> <span>Login</span> </a> <span>-or-</span>
                {/*need to add router link*/}
                <Link to={{pathname:'/register'}} className="button button-grey"> <span onClick={this.gotoRegistrationPage.bind(this)}>Register</span> </Link>
                <a style ={{ cursor: 'pointer'}} onClick={this.forgetPassword}>Forgot password ?</a>
            </form>
			<br/>
			<div id="forgetpassword" className="forget-pass" style={{display:'none'}}>
				<form className="form-forget-pass">
					<div className="form-group">
						<input type="text" className="form-control"  name="fgtemail" onChange = {this.onChangeEmail} placeholder="Email Address"/>
					</div>
					<a onClick={this.sendForgetPassword.bind(this, this.state.assetsType)} className="button"> <span>Send</span> </a> 
				</form>
			</div>
            <div className="login-with">
                
				
                <a className="fb" style ={{ cursor: 'pointer'}} onClick = {this.socialLogin.bind(this,'fb',this.state.assetsType)}><i className="fa fa-facebook"></i></a>
                <a className="twitter" style ={{ cursor: 'pointer'}}onClick = {this.socialLogin.bind(this,'twitter',this.state.assetsType)}><i className="fa fa-twitter"></i></a>
                <a className="google-plus" style ={{ cursor: 'pointer'}} onClick = {this.socialLogin.bind(this,'google',this.state.assetsType)}><i className="fa fa-google-plus"></i></a>
                <a  className="linkedin" style ={{ cursor: 'pointer'}} onClick = {this.socialLogin.bind(this,'linkedin',this.state.assetsType)}><i className="fa fa-linkedin"></i></a>
            </div>
            </div>

            <a className="typeli login" id="agent" onMouseEnter={()=>this.activeSignIn("agent")} onMouseLeave={this.leaveButton}>Agents<span></span></a>
            <a className="typeli login" id="tenant" onMouseEnter={()=>this.activeSignIn("tenant")} onMouseLeave={this.leaveButton}>Tenants<span></span></a>
        </div>
		:localStorage.getItem('userType').replace(/["']/g, "")=="1"?<div className="pull-right"><a className="list-inline-item dropdown notification-list"> <a className="nav-link dropdown-toggle  waves-light nav-user" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false"> <img src="assets/images/users/avatar-1.jpg" alt="user" className="rounded-circle" /><span className="profile-name">{localStorage.getItem('firstName').replace(/["']/g, "") +' '+ localStorage.getItem('lastName').replace(/["']/g, "")}</span> </a>
								<div className="dropdown-menu dropdown-menu-right profile-dropdown " aria-labelledby="Preview"> 
								{/* item*/}
								<div className="dropdown-item noti-title">
									<h5 className="text-overflow"><small>Hi,{localStorage.getItem('firstName').replace(/["']/g, "")}</small> </h5>
								</div>
								{/* item*/} 
								<a href="javascript:void(0);" className="dropdown-item notify-item"> <i className="dripicons-user" /> <Link to = {{pathname:'/profile'}}> <span>Profile</span></Link> </a> 
								{/* item*/} 
								<a href="javascript:void(0);" className="dropdown-item notify-item"> <i className="dripicons-gear" /> <Link to = {{pathname:'/settings'}}><span>Settings</span></Link> </a> 
								{/* item*/} 
								<a href="javascript:void(0);" className="dropdown-item notify-item"> <i className="dripicons-power" /> <span onClick={this.logout}>Logout</span> 
						</a> </div>
					</a></div>:localStorage.getItem('userType').replace(/["']/g, "")=="2"?<div className="pull-right"><a className="list-inline-item dropdown notification-list"> <a className="nav-link dropdown-toggle  waves-light nav-user" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false"> <img src="assets/images/users/avatar-1.jpg" alt="user" className="rounded-circle" /><span className="profile-name">{localStorage.getItem('firstName').replace(/["']/g, "") +' '+ localStorage.getItem('lastName').replace(/["']/g, "")}</span> </a>
								<div className="dropdown-menu dropdown-menu-right profile-dropdown " aria-labelledby="Preview"> 
								{/* item*/}
								<div className="dropdown-item noti-title">
									<h5 className="text-overflow"><small>Hi,{localStorage.getItem('firstName').replace(/["']/g, "")}</small> </h5>
								</div>
								{/* item*/} 
								<a href="javascript:void(0);" className="dropdown-item notify-item"> <i className="dripicons-user" /> <Link to = {{pathname:'/broker-profile'}}> <span>Profile</span></Link> </a> 
								{/* item*/} 
								<a href="javascript:void(0);" className="dropdown-item notify-item"> <i className="dripicons-gear" /> <Link to = {{pathname:'/broker-settings'}}><span>Settings</span></Link> </a> 
								{/* item*/} 
								<a href="javascript:void(0);" className="dropdown-item notify-item"> <i className="dripicons-power" /> <span onClick={this.logout}>Logout</span> 
						</a> </div>
					</a></div>:localStorage.getItem('userType').replace(/["']/g, "")=="3"?<div className="pull-right"><a className="list-inline-item dropdown notification-list"> <a className="nav-link dropdown-toggle  waves-light nav-user" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false"> <img src="assets/images/users/avatar-1.jpg" alt="user" className="rounded-circle" /><span className="profile-name">{localStorage.getItem('firstName').replace(/["']/g, "") +' '+ localStorage.getItem('lastName').replace(/["']/g, "")}</span> </a>
								<div className="dropdown-menu dropdown-menu-right profile-dropdown " aria-labelledby="Preview"> 
								{/* item*/}
								<div className="dropdown-item noti-title">
									<h5 className="text-overflow"><small>Hi,{localStorage.getItem('firstName').replace(/["']/g, "")}</small> </h5>
								</div>
								{/* item*/} 
								<a href="javascript:void(0);" className="dropdown-item notify-item"> <i className="dripicons-user" /> <Link to = {{pathname:'/tenant-profile'}}> <span>Profile</span></Link> </a> 
								{/* item*/} 
								<a href="javascript:void(0);" className="dropdown-item notify-item"> <i className="dripicons-gear" /> <Link to = {{pathname:'/tenant-settings'}}><span>Settings</span></Link> </a> 
								{/* item*/} 
								<a href="javascript:void(0);" className="dropdown-item notify-item"> <i className="dripicons-power" /> <span onClick={this.logout}>Logout</span> 
						</a> </div>
					</a></div>:""
	}
        <div className="tz-header-wpml pull-right">
            <div id="lang_sel">
                <ul>
                    <li> <a className="lang_sel_sel icl-en"> USA
                    <img className="iclflag" width="18" height="12" alt="en" src={us} /> </a>
                    {/* <ul>
                        <li className="icl-vi"> <a>
                            Viet Nam
                            <img className="iclflag" title="Viet Nam" width="18" height="12" alt="ru" src={vn} /> </a> </li>
                        <li className="icl-fr">
                             <a> French
                                 <img className="iclflag" title="French" width="18" height="12" alt="en" src={fr} /> </a> </li>
	</ul>*/}
                    </li>
                </ul>
            </div>
    </div>
			
			
			
			<div id="light" className="white_content">
				<p>Please select your Agent Type to register</p>
				<br/>
				
				
					<input type="button" className="regBtn" value="Broker"/>
					<input  type="button" className="regBtn" value="Service Provider"/>
					<input  type="button" className="regBtn" value="Cancel"/>
				
					
			</div>
			<div id="fade" className="black_overlay"></div>
			
			
			
			
    </div>
    );
    }
}

export default withRouter(connect(state=>({ userData: state.userData }), { setUser })(Headernav));
