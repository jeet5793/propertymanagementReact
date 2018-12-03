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
import img_not_available from '../../../images/img_not_available.png'
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
		 fgtemail:'',
		 auth:'',
		 profileData:[]

        }

        this.onChangeHandler=this.onChangeHandler.bind(this);
        this.activeSignIn=this.activeSignIn.bind(this);
        // this.Login=this.Login.bind(this);
		this.socialLogin = this.socialLogin.bind(this);
		 this.sendForgetPassword = this.sendForgetPassword.bind(this);
		 this.onChangeEmail = this.onChangeEmail.bind(this);
		 
		 this.checkUser();
		 this.profileDetail();
    }
    
	componentWillUnmount(){
			window.location.reload()
		}

	onClickClose() {
		$("#FirstBlockUIConfirm").hide();
	}
	
    onChangeHandler(e){
           this.setState({[e.target.name]:e.target.value})
      }
	  gotoRegistrationPage(){
        $(".login-open").hide();
     }
    Login(type) {
		const assetstype = type;
		// alert(assetstype);
		// console.log(assetstype)
		this.state.assets_type= assetstype;
		var opts = this.state;
		// console.log(opts)
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
                    // swal("Assets Watch", data.msg);
                    // $(".login-open").fadeToggle();
						$("#actionType").val("No");
									 // $("#hiddenURL").val("/");
									 $(".confirm-body").html(data.msg);
									 $("#SBlockUIConfirm").show();
									 $(".row-dialog-btn").click(function(){
										  $("#SBlockUIConfirm").hide();
									 })
                }else if(data.Success===0) {
						 if(data.msg==="Your account is not activated.") {
							 // $("#loaderDiv").hide();
							 
								if(data.userdata.agentType!='' && data.userdata.agentType=='Service Provider')
								{
									this.props.history.replace(`/`);
								}else{
										// const assetsType= data.assetsType;
										var userid = data.userdata.assets_id
											localStorage.setItem('userid',userid);
									// window.location.href=;
									$("#actionType").val("Yes");
									 $("#hiddenURL").val(`/register-plans?Datatype=${data.userdata.assets_type.toLowerCase()}`);
									 $(".confirm-body").html(data.msg);
									 $("#SBlockUIConfirm").show();
								}
											   
							}else{
							  // swal("Assets Watch", data.msg);
							// $(".login-open").fadeToggle();
									$("#actionType").val("Yes");
									 $("#hiddenURL").val("/");
									 $(".confirm-body").html(data.msg);
									 $("#SBlockUIConfirm").show();
						 }
                  //  console.log(data.msg)
                   
                }else if(data.Success===2){
					$("#FirstBlockUIConfirm").show();
					$(".confirm-body").html(data.msg);
					
					for(var i=0;i<data.assetsType.length;i++)
					{
						
						if(data.assetsType[i]==="Owner")
						{
							$("#OwnUserAction").val("SignIn")
							$("#ownAction").html("SignIn");
						}
						else if(data.assetsType[i]==="Agent")
						{
							$("#AgnUserAction").val("SignIn")
							$("#AgnAction").html("SignIn");
						}
						else
						{
							$("#TenUserAction").val("SignIn")
							$("#TenAction").html("SignIn");
						}
					}
					$(".user-btn").click(function(){
						const userType = this.value;
							// console.log(userType);
							var UserAction = '';
							
							if(userType==="Owner")
								{
									UserAction = $("#OwnUserAction").val();
									// alert(userType);
									 //alert(UserAction);
									if(UserAction==='SignIn')
									{
										// this.Login('1');
										// this.Login('1')
										var email = $('#email').val();
										var password = $('#password').val();
										var opts = {email:email,password:password,assets_type:1}
										fetch(`${API_URL}assetsapi/login/`, {
											method: 'post',
											body: JSON.stringify(opts)
										}).then((response)=> {
										response.json().then(data=>{
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
													// this.props.setUser(data.userdata, result.profile);
													Cookies.set("profile_data", data.userdata);

													if(result.profile.assets_type==="1"){
													 // this.props.history.push('/user')
													 window.location.href='/user';
													}else if(result.profile.assets_type==="2"){
														if(data.userdata.agentType==="Broker")
														{
															// this.props.history.push('/agent-broker')
															window.location.href='/agent-broker';
														}
														else{
															// this.props.history.push('/agent-serviceprovider')
															window.location.href='/agent-serviceprovider';
														}
													   
													}else{
														
														// this.props.history.push('/tenant')
														window.location.href='/tenant';
													}
												} else {
													// this.props.setUser(data.userdata, result.profile);
												}

											  },

											  (error) => {
												console.log('error')
											  }
											)
										}, 1000)
										})
										})
										
									}
									else if(UserAction==='Register'){
										
										var optsValue= data.userdata;
										// console.log(optsValue)
										fetch(`${API_URL}assetsapi/register/`, {
										method: "post",
										body: JSON.stringify(optsValue)
									  })
										.then(response => {
										  return response.json();
										})
										.then((res) => {
										  // console.log('dataaaa:  ', res);
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
												// const assetsType= data.assetsType;
												 window.location.href=`/register-plans?Datatype=${userType.toLowerCase()}`;
											}
										   
										  }
										else alert(res.msg)
										}).catch((error) => {
										  console.log('error: ', error);
										}); 
									}
									
								}
								else if(userType==="Agent")
								{
									UserAction = $("#AgnUserAction").val();
									// alert(userType);
									 //alert(UserAction);
									if(UserAction==='SignIn')
									{
										// this.Login('1');
										// this.Login('1')
										var email = $('#email').val();
										var password = $('#password').val();
										var opts = {email:email,password:password,assets_type:2}
										fetch(`${API_URL}assetsapi/login/`, {
											method: 'post',
											body: JSON.stringify(opts)
										}).then((response)=> {
										response.json().then(data=>{
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
													// this.props.setUser(data.userdata, result.profile);
													Cookies.set("profile_data", data.userdata);

													if(result.profile.assets_type==="1"){
													 // this.props.history.push('/user')
													 window.location.href='/user';
													}else if(result.profile.assets_type==="2"){
														if(data.userdata.agentType==="Broker")
														{
															// this.props.history.push('/agent-broker')
															window.location.href='/agent-broker';
														}
														else{
															// this.props.history.push('/agent-serviceprovider')
															window.location.href='/agent-serviceprovider';
														}
													   
													}else{
														
														// this.props.history.push('/tenant')
														window.location.href='/tenant';
													}
												} else {
													// this.props.setUser(data.userdata, result.profile);
												}

											  },

											  (error) => {
												console.log('error')
											  }
											)
										}, 1000)
										})
										})
									}else if(UserAction==='Register'){
										$("#FirstBlockUIConfirm").hide();
										$(".confirm-body").html(data.msg);
											$("#BlockUIConfirm").show();
											
											$(".row-dialog-btn").click(function(){
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
													$("#BlockUIConfirm").hide();
												}
												
												if(this.value!='' && localStorage.getItem('agenttype')!='')
												{
													var optsValue= data.userdata;
													optsValue.agent_type = localStorage.getItem('agenttype');
													
													fetch(`${API_URL}assetsapi/register/`, {
														method: "post",
														body: JSON.stringify(optsValue)
													  })
														.then(response => {
														  return response.json();
														})
														.then((res) => {
														  // console.log('dataaaa:  ', res);
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
																// const assetsType= data.assetsType;
																 window.location.href=`/register-plans?Datatype=${userType.toLowerCase()}`;
															}
														   
														  }
														else alert(res.msg)
														}).catch((error) => {
														  console.log('error: ', error);
														}); 
												}
												
											}); 
									}
									
								}
								else if(userType==="Tenant")
								{
									UserAction = $("#TenUserAction").val();
									// alert(userType);
									 //alert(UserAction);
									
									if(UserAction==='SignIn')
									{
										// this.Login('1');
										// this.Login('1')
										var email = $('#email').val();
										var password = $('#password').val();
										var opts = {email:email,password:password,assets_type:3}
										fetch(`${API_URL}assetsapi/login/`, {
											method: 'post',
											body: JSON.stringify(opts)
										}).then((response)=> {
										response.json().then(data=>{
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
													// this.props.setUser(data.userdata, result.profile);
													Cookies.set("profile_data", data.userdata);

													if(result.profile.assets_type==="1"){
													 // this.props.history.push('/user')
													 window.location.href='/user';
													}else if(result.profile.assets_type==="2"){
														if(data.userdata.agentType==="Broker")
														{
															// this.props.history.push('/agent-broker')
															window.location.href='/agent-broker';
														}
														else{
															// this.props.history.push('/agent-serviceprovider')
															window.location.href='/agent-serviceprovider';
														}
													   
													}else{
														
														// this.props.history.push('/tenant')
														window.location.href='/tenant';
													}
												} else {
													// this.props.setUser(data.userdata, result.profile);
												}

											  },

											  (error) => {
												console.log('error')
											  }
											)
										}, 1000)
										})
										})
									}else if(UserAction==='Register'){
										
										var optsValue= data.userdata;
										// console.log(optsValue)
										fetch(`${API_URL}assetsapi/register/`, {
										method: "post",
										body: JSON.stringify(optsValue)
									  })
										.then(response => {
										  return response.json();
										})
										.then((res) => {
										  // console.log('dataaaa:  ', res);
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
												// const assetsType= data.assetsType;
												 window.location.href=`/register-plans?Datatype=${userType.toLowerCase()}`;
											}
										   
										  }
										else alert(res.msg)
										}).catch((error) => {
										  console.log('error: ', error);
										}); 
									}
									
								}	
							
					});
					
					
					
					// this.setState({hiddenassets:data.assetsType});
							/* if(data.assetsType=='agent')
							{
								$(".confirm-body").html(data.msg);
								$("#BlockUIConfirm").show();
								
								$(".row-dialog-btn").click(function(){
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
										window.location.reload();
									}
									
									if(this.value!='' && localStorage.getItem('agenttype')!='')
									{
										var optsValue= data.userdata;
										optsValue.agent_type = localStorage.getItem('agenttype');
										
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
									}
									
								}); 
								
							}else{
								var optsValue= data.userdata;
								console.log(optsValue)
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
							} */
							
					
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
	  // logout(){
			// localStorage.clear();
			// window.location.href='/'
		// }
		logout(id){
		localStorage.clear();
				 fetch(`${API_URL}assetsapi/signout/`+id, {
				method: 'get'
			  })
			  .then(res => res.json())
			  .then(
				(result) => {
				// console.log(JSON.stringify(result));
				},
			  (error) => {
				console.log('error')
				}
				)
				// $.cookie("profile_data", null, { path: '/' });
				// createCookie(name, "", -1);
				 // Cookies.set("profile_data", '');
				// $.cookie('profile_data', null);
				Cookies.set('profile_data', '', -1);

				
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
            //$(".login-open").css('left','20%');
			$("#loginDiv").addClass('agent-login');
			$("#loginDiv").removeClass('tenant-login');
			$("#loginDiv").removeClass('owner-login');
			this.setState({assetsType:2});
            // document.getElementById('loginDiv').setAttribute('style','left:15%')
           
        }
        else if(actionId==='tenant')
        {
            $(".login-open").fadeToggle();
            //$(".login-open").css("left","34%");
			$("#loginDiv").addClass('tenant-login');
			$("#loginDiv").removeClass('agent-login');
			$("#loginDiv").removeClass('owner-login');
            // document.getElementById('loginDiv').setAttribute('style','left:30%')
            this.setState({assetsType:3});
        }
        else{
            $(".login-open").fadeToggle();
            //$(".login-open").css('left','6%');
			$("#loginDiv").addClass('owner-login');
			$("#loginDiv").removeClass('tenant-login');
			$("#loginDiv").removeClass('agent-login');
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
			  
			  // console.log("data 2: "+JSON.stringify(result))
			  
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
		if(!opts.email){
			return alert("Can't be empty")
		}else{
		$("#loaderDiv").show();
		
		// console.log('this is:', opts);
		fetch(`${API_URL}assetsapi/forgot_password`, {
				  method: 'POST',
				body: JSON.stringify(opts)
				})
				.then(res => res.json())
				.then(
				  (result) => {
					
					if (result.success) {
					   // swal("Assets watch","Password reset link sended to your email.");
							// window.location.reload();
							$("#loaderDiv").hide();
					   
					   $("#actionType").val("No");
					   // $("#hiddenURL").val("/");
					   $(".confirm-body").html(result.msg);
					   $("#SBlockUIConfirm").show();
							
					} 
					
				  },
				(error) => {
				  console.log('error')
				}
			  ) 
		}			  
  }
  checkUser(){
	  var profileArr = Cookies.get("profile_data");
		 // console.log('profileArr'+profileArr);
		if(profileArr){
			if(profileArr.length>0){
			// var profileImg = JSON.parse(profileArr).profile_photo; 
			var assets_id = JSON.parse(profileArr).assets_id;
			var session_id = JSON.parse(profileArr).session_id;
				
				
				fetch(`${API_URL}assetsapi/session_check/`+assets_id+`/`+session_id, {
					method: 'get'
				  })
				.then(res => res.json())
				.then(
				  (result) => {
					//console.log("data 2: "+JSON.stringify(result.profile))
					$("#loaderDiv").hide();
					if (result.success===0) {
					  // this.setState({auth:result.auth})
					   // this.props.history.replace('/');
					   // window.location.href='/';
					   // console.log("index"+JSON.stringify(result))
					   this.setState({auth:false})
					  
					} 
					
				  },
				(error) => {
				  console.log('error')
				}
			  )
			}	
		}
  }
    profileDetail(){
	  var profileArr = Cookies.get("profile_data");
		 // console.log('profileArr'+profileArr);
		if(profileArr){
			if(profileArr.length>0){
			// var profileImg = JSON.parse(profileArr).profile_photo; 
			var assets_id = JSON.parse(profileArr).assets_id;
			var session_id = JSON.parse(profileArr).session_id;
				
				
				fetch(`${API_URL}assetsapi/profile/`+assets_id+`/`+session_id, {
					method: 'get'
				  })
				.then(res => res.json())
				.then(
				  (result) => {
					//console.log("data 2: "+JSON.stringify(result.profile))
					$("#loaderDiv").hide();
					if (result.success===1) {
					  // this.setState({auth:result.auth})
					   // this.props.history.replace('/');
					   // window.location.href='/';
					   // console.log("index"+JSON.stringify(result))
					   this.setState({profileData:result.profile})
					  
					} 
					
				  },
				(error) => {
				  console.log('error')
				}
			  )
			}	
		}
  }
  addDefaultSrc(ev){
	  ev.target.src = img_not_available;
	}
    render(){
		
		/* var profileArr = Cookies.get("profile_data");
		// console.log('profileArr'+profileArr.length);
		if(profileArr){
			if(profileArr.length>0){
			var profileImg = JSON.parse(profileArr).profile_photo; 
			var assets_id = JSON.parse(profileArr).assets_id;
			}
		} */
		 
        return(
            <div className="">
	{(!localStorage.getItem('firstName') || (localStorage.getItem('firstName') && this.state.auth===false))?
        <div className="login-cont">
        <a className= "typeli login" id="owner"   onMouseEnter={()=>this.activeSignIn("owner")} onMouseLeave={this.leaveButton}>Owners<span></span></a>
            <div ref={this.loginDiv} id="loginDiv" className="login-1 text-left  login-open">
            <form className="form-signin">
                <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" onChange={this.onChangeHandler} name="email" id="email" placeholder="Email Address"/>
                </div>
                <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" onChange={this.onChangeHandler} name="password" id="password" placeholder="Password"/>
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
		:localStorage.getItem('userType').replace(/["']/g, "")=="1"?<div className="login-cont usna"><a className="list-inline-item dropdown notification-list"> <a className="nav-link dropdown-toggle  waves-light nav-user" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false"> <img onError={this.addDefaultSrc} src={this.state.profileData.profile_photo?API_URL+this.state.profileData.profile_photo:img_not_available} alt="user" className="rounded-circle" /><span className="profile-name">{localStorage.getItem('firstName').replace(/["']/g, "") +' '+ localStorage.getItem('lastName').replace(/["']/g, "")}</span> </a>
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
								<a href="javascript:void(0);" className="dropdown-item notify-item"> <i className="dripicons-power" /> <span onClick={this.logout.bind(this,this.state.profileData.assets_id)}>Logout</span> 
						</a> </div>
					</a></div>:localStorage.getItem('userType').replace(/["']/g, "")=="2"?<div className="login-cont usna"><a className="list-inline-item dropdown notification-list"> <a className="nav-link dropdown-toggle  waves-light nav-user" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false"> <img onError={this.addDefaultSrc} src={this.state.profileData.profile_photo?API_URL+this.state.profileData.profile_photo:img_not_available} alt="user" className="rounded-circle" /><span className="profile-name">{localStorage.getItem('firstName').replace(/["']/g, "") +' '+ localStorage.getItem('lastName').replace(/["']/g, "")}</span> </a>
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
								<a href="javascript:void(0);" className="dropdown-item notify-item"> <i className="dripicons-power" /> <span onClick={this.logout.bind(this,this.state.profileData.assets_id)}>Logout</span> 
						</a> </div>
					</a></div>:localStorage.getItem('userType').replace(/["']/g, "")=="3"?<div className="login-cont usna"><a className="list-inline-item dropdown notification-list"> <a className="nav-link dropdown-toggle  waves-light nav-user" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false"> <img onError={this.addDefaultSrc} src={this.state.profileData.profile_photo?API_URL+this.state.profileData.profile_photo:img_not_available} alt="user" className="rounded-circle" /><span className="profile-name">{localStorage.getItem('firstName').replace(/["']/g, "") +' '+ localStorage.getItem('lastName').replace(/["']/g, "")}</span> </a>
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
								<a href="javascript:void(0);" className="dropdown-item notify-item"> <i className="dripicons-power" /> <span onClick={this.logout.bind(this,this.state.profileData.assets_id)}>Logout</span> 
						</a> </div>
					</a></div>:""
	}
        <div className="tz-header-wpml login-cont">
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
			
			
			
			{/* <div id="light" className="white_content">
				<p>Please select your Agent Type to register</p>
				<br/>
				
				
					<input type="button" className="regBtn" value="Broker"/>
					<input  type="button" className="regBtn" value="Service Provider"/>
					<input  type="button" className="regBtn" value="Cancel"/>
				
					
			</div>
	<div id="fade" className="black_overlay"></div> */}
			
			
			
			{/* ALERT DIV*/}
			<div id="BlockUIConfirm" className="BlockUIConfirm" style={{display:"none"}}>
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
							<input type="button" className="row-dialog-btn btn btn-success" value="Broker" />
							<input type="button" className="row-dialog-btn btn btn-default" value="Service Provider" />
							<input type="button" className="row-dialog-btn btn btn-naked" value="Cancel"  />
						</div>
					</div>
				</div>
			</div>
			
			<div id="FirstBlockUIConfirm" className="BlockUIConfirm" style={{display:"none"}}>
				<div className="blockui-mask"></div>
				<div className="RowDialogBody">
					<div className="confirm-header row-dialog-hdr-success">
						Notification
						<button type="button" className="close" onClick={this.onClickClose}>×</button>
					</div>
					<div className="confirm-body">
						
					</div>
					
					<div className="confirm-btn-panel text-center">
						
						<div className="btn-holder">
							
							<input type="hidden" id="hiddenURL" />
							<input type="hidden" id="actionType" />
							
							<ul className="al-regother">
							<li>
							<input type="button" className="user-btn btn btn-success" value="Owner" />
							<input type="hidden" id="OwnUserAction"  value="Register"/>
							<p id="ownAction">Register</p>
							</li>
							<li>
							<input type="button" className="user-btn btn btn-success" value="Agent" />
							<input type="hidden" id="AgnUserAction" value="Register"/>
							<p id="AgnAction">Register</p>
							</li>
							<li>
							<input type="button" className="user-btn btn btn-success" value="Tenant"  />
							<input type="hidden" id="TenUserAction"  value="Register"/>
							<p id="TenAction">Register</p>
							</li>
							</ul>
							
							
						</div>
						
					</div>
					
				</div>
			</div>
			
    </div>
    );
    }
}

export default withRouter(connect(state=>({ userData: state.userData }), { setUser })(Headernav));
