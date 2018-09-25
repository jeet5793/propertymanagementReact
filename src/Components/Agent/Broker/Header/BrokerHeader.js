import React from 'react'
import logo_dark from '../../../../images/Owner/logo_dark.png'
import logo_sm from '../../../../images/Owner/logo_sm.png'
import avatar_1 from '../../../../images/Owner/users/avatar-1.jpg'
import Navlinks from '../Navbar/BrokerNavitems'
import Cookies from 'js-cookie';
import API_URL from "../../../../app-config";
import {Link} from 'react-router-dom'
import img_not_available from '../../../../images/img_not_available.png'
export default class BrokerHeader extends React.Component{
    constructor(props){
        super(props)
        this.state={
            first_name:localStorage.getItem('firstName'),
            last_name:localStorage.getItem('lastName'),
			userData:Cookies.get('profile_data'),
			notification:[]
        }
        this.logout=this.logout.bind(this)
		 this.getNotification = this.getNotification.bind(this)
		 this.onClickSwitch = this.onClickSwitch.bind(this);
		 this.profileToggle = this.profileToggle.bind(this)
	   this.profileNoti = this.profileNoti.bind(this)
        //localStorage.setItem(MyData)
       // alert("I am working now")
    }
logout(){
    localStorage.clear();
    window.location.href='/'
}
 componentDidMount(){
		this.getNotification();
		const opts = {email:JSON.parse(this.state.userData).email,assets_type:JSON.parse(this.state.userData).assetsTypeId}
		 // console.log('sw'+JSON.stringify(opts))
		fetch(`${API_URL}assetsapi/switch_usertype`, {
			  method: 'POST',
			  body:JSON.stringify(opts)
			})
			.then(res => res.json())
			.then(
			  (result) => {
				
				if (result.success) {
				   this.setState({userTypeList:result.userType});
				  } 
				// console.log(this.state.userTypeList)
			  },
			(error) => {
			  console.log('error')
			}
		  )  
	}
	profileToggle(){
		var $=window.$;
		// $('.profile-dropdown').toggle();
		if($('.profile-dropdown').css('display') == 'none')
			{
				
				$('.profile-dropdown').show();
			}
			else
			{
				
				 $('.profile-dropdown').hide();
			}
	} 
	profileNoti(){
		var $=window.$;
		// $('.profile-dropdown').toggle();
		if($('#notify').css('display') == 'none')
			{
				
				$('#notify').show();
			}
			else
			{
				
				 $('#notify').hide();
			}
	} 
	getNotification()
	{
		fetch(`${API_URL}assetsapi/notification_alert/${JSON.parse(this.state.userData).assets_id}/${JSON.parse(this.state.userData).session_id}/`, {
			  method: 'get',
			})
			.then(res => res.json())
			.then(
			  (result) => {
				
				if (result.success) {
				   this.setState({notification:result.notification});
				  } 
				console.log(this.state.notification)
			  },
			(error) => {
			  console.log('error')
			}
		  ) 
	  
	}
	onClickSwitch(assetstype)
	{
		const opts = {email:JSON.parse(this.state.userData).email,assets_type:assetstype,password:this.state.userTypeList[0].password}
		 console.log('swl'+JSON.stringify(opts))
		fetch(`${API_URL}assetsapi/login`, {
			  method: 'POST',
			  body:JSON.stringify(opts)
			})
			.then(res => res.json())
			.then(
			  (data) => {
				
				if (data.Success) {
					
							setTimeout(()=>{

							fetch(`${API_URL}assetsapi/profile/${data.userdata.assets_id}/${data.userdata.session_id}`, {
								method: 'get'
							})
							.then(res => res.json())
							.then(
							  (result) => {
								 
								//console.log("data 2: "+JSON.stringify(result))
								if (result.success) {
									console.log("3");
								   // alert('profile:'+JSON.stringify(result.profile)+""+JSON.stringify(data.userdata.agentType));
									localStorage.setItem('firstName',JSON.stringify(result.profile.first_name))
									localStorage.setItem('lastName',JSON.stringify(result.profile.last_name))
									localStorage.setItem('userType',JSON.stringify(result.profile.assets_type))
									//this.props.setUser(data.userdata, result.profile);
									Cookies.set("profile_data", data.userdata);

									if(result.profile.assets_type==="1"){
									  window.location.href = '/user';
									}else if(result.profile.assets_type==="2"){
										if(data.userdata.agentType==="Broker")
										{
											window.location.href = '/agent-broker';
										}
										else{
											window.location.href = '/agent-serviceprovider';
										}
									   
									}else{
										
										window.location.href = '/tenant';
									}
								} else {
									// this.props.setUser(data.userdata, result.profile);
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

			  },
			(error) => {
			  console.log('error')
			}
		  )   
	}
    render(){
  // console.log('hhhhhhhhhhhhhhhhhh'+JSON.stringify(this.state.userData))
        return(
            <header id="topnav">
            
            <div className="topbar-main">
                <div className="container"> 
                
                {/*<!-- Logo container-->*/}
                <div className="logo"> 
                    {/*<!-- Text Logo --> 
                    <!--<a href="index" className="logo">--> */}
                    {/*<!--Adminox--> 
                    <!--</a>--> */}
                    {/*<!-- Image Logo --> */}
                    <a href="/" className="logo"> 
                    <img src={logo_dark} alt="" className="logo-lg" /> 
                    <img src={logo_sm} alt="" className="logo-sm" /> </a> </div>
                    {/*<!-- End Logo container-->*/}                    
                    <div className="menu-extras topbar-custom">
                     <ul className="list-inline float-right mb-0">
                     <li className="menu-item list-inline-item"> 
                        {/*<!-- Mobile menu toggle--> */}
                        <a className="navbar-toggle nav-link">
                        <div className="lines"> <span></span> <span></span> <span></span> </div>
                        </a> 
                        {/*<!-- End mobile menu toggle--> */}
                     </li>
					 <li className="list-inline-item">{JSON.parse(this.state.userData).planName} plan expire on {JSON.parse(this.state.userData).expireDate} </li>
                      <li className="list-inline-item"> <button type="button" className="btn btn-warning  w-md waves-light"> <Link to = {{pathname:'/broker-plan'}} style={{color:'#fff'}}>Upgrade Plan</Link></button></li>
                     <li className="list-inline-item dropdown notification-list"> <a className="nav-link dropdown-toggle arrow-none waves-light waves-effect"  data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false" onClick={this.profileNoti}> <i className="dripicons-bell noti-icon" /> <span className="badge badge-pink noti-icon-badge">{this.state.notification.length}</span> </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-arrow dropdown-lg" aria-labelledby="Preview" id = "notify"> 
                        {/* item*/}
						 <div className="dropdown-item noti-title">
                            <h5><span className="badge badge-danger float-right">{this.state.notification.length}</span>Notification</h5>
                        </div>
                        {this.state.notification.map((item)=>( 
                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                               <Link to = {{pathname:'/broker-notifications'}}> 
									<div className="notify-icon bg-success"><i className="icon-bubble" /></div>
									<p className="notify-details">{item.message}<small className="text-muted"></small></p>
								</Link>
                            </a> 
							))}
                        {/* All*/} 
                        <a href="#" className="dropdown-item notify-item notify-all"> <Link to = {{pathname:'/broker-notifications'}}>View All</Link> </a> </div>
                    </li>
                    <li className="list-inline-item dropdown notification-list"> <a className="nav-link dropdown-toggle  waves-light nav-user" data-toggle="dropdown" onClick = {this.profileToggle} href="#" role="button" aria-haspopup="false" aria-expanded="false"> <img src={JSON.parse(this.state.userData).profile_photo!=''?API_URL+JSON.parse(this.state.userData).profile_photo:img_not_available} alt="user" className="rounded-circle" /><span className="profile-name">{this.state.first_name.replace(/["']/g, "")+" "+this.state.last_name.replace(/["']/g, "")}</span> </a>
                            <div className="dropdown-menu dropdown-menu-right profile-dropdown " aria-labelledby="Preview"> 
                            {/* item*/}
                            <div className="dropdown-item noti-title">
                                <h5 className="text-overflow"><small>Hi,{this.state.first_name.replace(/["']/g, "")}</small> </h5>
                            </div>
                            {/* item*/} 
                            <a href="javascript:void(0);" className="dropdown-item notify-item"> <i className="dripicons-user" /> <Link to = {{pathname:'/broker-profile'}}> <span>Profile</span></Link> </a> 
                            {/* item*/} 
                            <a href="javascript:void(0);" className="dropdown-item notify-item"> <i className="dripicons-gear" /> <Link to = {{pathname:'/broker-settings'}}><span>Settings</span></Link> </a> 
							<hr/>							
							{this.state.userTypeList?<h3 className="dropdown-item notify-item"><small>Switch To</small></h3>:''}
						{this.state.userTypeList?this.state.userTypeList.map((item)=>( 
							<a href="javascript:void(0);" className="dropdown-item notify-item" onClick = {this.onClickSwitch.bind(this,item.assets_type)}> <i className="dripicons-user" />{item.assets_type=='2'?'Agent':item.assets_type=='3'?'Tenant':item.assets_type=='1'?'Owner':''}</a> )):''}
								{this.state.userTypeList?<hr/>:''}
                            {/* item*/} 
                            <a href="javascript:void(0);" className="dropdown-item notify-item"> <i className="dripicons-power" /> <span onClick={this.logout}>Logout</span> </a> </div>
                        </li>
                    </ul>
                </div>
                {/*<!-- end menu-extras -->*/}
                
                <div className="clearfix"></div>
                </div>
                {/*<!-- end container --> */}
            </div>
            {/*<!-- end topbar-main -->*/}
            <div className="navbar-custom">
             <div className="container">
            <Navlinks name={this.props.name} />
             {/*<!-- end #navigation --> */}
        </div>
        {/*<!-- end container --> */}
    </div>   
            </header>
  
        );
    }
}