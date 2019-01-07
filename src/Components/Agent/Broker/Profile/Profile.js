import React from 'react';
import API_URL from "../../../../app-config";
import { connect } from 'react-redux';
import avatar_1 from '../../../../images/Owner/users/avatar-1.jpg'
import Cookies from 'js-cookie';
import {Link} from 'react-router-dom'
import img_not_available from '../../../../images/img_not_available.png'
import $ from 'jquery'
class BrokerProfie extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userInfo:props.userData,
      profileData:'',
      userData:Cookies.get('profile_data'),
	  statics:[],
	  property:[],
	  contactlist:{
			  "Tenant": [],
			  "Owner": []
		   }
    }
  }

  
  componentDidMount(){
    const profile=JSON.parse(this.state.userData)
    if(profile)
    {
		$("#loaderDiv").show();
      fetch(`${API_URL}assetsapi/profile/${profile.assets_id}/${profile.session_id}`, {
        method: 'get'
      })
    .then(res => res.json())
    .then(
      (result) => {
        //console.log("data 2: "+JSON.stringify(result.profile))
		$("#loaderDiv").hide();
        if (result.success) {
          this.setState({profileData:result.profile})
          
        } 
        //console.log("set user data"+JSON.stringify(this.state.profileData))
      },
    (error) => {
      console.log('error')
    }
  )
  //==================================================================Statics Count Api=================================================================================
	  fetch(`${API_URL}assetsapi/statics_count_by/${profile.assets_id}/${profile.session_id}`, {
		  method: 'get'
		})
		.then(res => res.json())
		.then(
		  (data) => {
			//console.log("data 2: "+JSON.stringify(result.profile))
			if (data.success) {
			  this.setState({statics:data.statics[0]})
			  //console.log(this.state.statics);
			} 
			//console.log("set user data"+JSON.stringify(this.state.profileData))
		  },
		(error) => {
		  console.log('error')
		}
	  )
	  
	 //==================================================================Recent Property Api=================================================================================
	  fetch(`${API_URL}assetsapi/recent_added_property/${profile.assets_id}/${profile.session_id}`, {
		  method: 'get'
		})
		.then(res => res.json())
		.then(
		  (data) => {
			//console.log("data 2: "+JSON.stringify(result.profile))
			if (data.success) {
			  this.setState({property:data.property})
			  //console.log(this.state.property);
			} 
			//console.log("set user data"+JSON.stringify(this.state.profileData))
		  },
		(error) => {
		  console.log('error')
		}
	  )
  }
  //===================================recent tenant/agent==============================================================================
      fetch(`${API_URL}assetsapi/profile_contact_list/${profile.assets_id}/${profile.session_id}`, {
        method: 'get'
      })
      .then(response => response.json())
      .then(
        (data1) => {
        // console.log("data 2: "+JSON.stringify(data1));
        if (data1.success) {
          // const jsn = JSON.stringify(data1);
          // console.log("data3: "+jsn)
          this.setState({contactlist:data1.contactlist})
         // console.log("data 2: "+this.state.contactlist)
        } 
         // console.log("set user data"+JSON.stringify(this.state.contactlist))
        },
      (error) => {
        console.log('error')
      }
      )
  }
  addDefaultSrc(ev){
	  ev.target.src = img_not_available;
	}
    render(){
      const profileInfo=this.state.profileData;
      const { userProfile: profile } = this.props;
      // const profile_pic = profile.profile_photo || avatar_1;
	  const TenantList = this.state.contactlist.Tenant;
	  const OwnerList = this.state.contactlist.Owner;
	  // console.log(JSON.stringify(TenantList));
	 
		return(

			<div>
      <div className="wrapper">
          <div className="container"> 
		  	   <div className="page-title-box">
    <h4 className="page-title">Profile <Link to={{ pathname: '/broker-profile-edit' }} className="btn btn-custom waves-light waves-effect w-md btn-group pull-right"><i className="fa fa-edit"></i>&nbsp;&nbsp;Edit Profile</Link></h4>
	  </div>
            {/* end page title end breadcrumb */}
            <div className="row">
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="profile-user-box1"> <span className="pull-left m-r-15"><img onError={this.addDefaultSrc} src={profileInfo.profile_photo!==''?API_URL+profileInfo.profile_photo:img_not_available} alt="" className="thumb-lg rounded-circle" /></span>
                      <div className="media-body">
                        <h4 className="m-t-5 m-b-5 font-18 ellipsis">{profileInfo.first_name + '. '+ profileInfo.last_name}</h4>
                        <p className="text-muted m-b-0"><small>{profileInfo.city}, {profileInfo.country}</small></p>
						 <p className="font-13" style={{visibility:'hidden'}}> Span</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-sm-3">
                        <div className="card-box widget-box-four">
                          <div id="dashboard-1" className="widget-box-four-chart" />
                          <div className="wigdet-four-content">
                            <h4 className="m-t-0 font-18 m-b-5" title="Property">Property</h4>
                            <h3 className="m-b-0 m-t-35"><span>{this.state.statics.Property?this.state.statics.Property:'0'}</span> <span data-plugin="counterup" className="profile-icon"><i className="fi-box" /></span></h3>
                          </div>
                          <div className="clearfix" />
                        </div>
                      </div>
                      {/* end col */}
                      <div className="col-sm-3">
                        <div className="card-box widget-box-four">
                          <div id="dashboard-2" className="widget-box-four-chart" />
                          <div className="wigdet-four-content">
                            <h4 className="m-t-0 font-18 m-b-5" title="Owner">Owner</h4>
                            <h3 className="m-b-0 m-t-35"><span>{this.state.statics.Owner?this.state.statics.Owner:'0'}</span> <span data-plugin="counterup" className="profile-icon"><i className="fi-head " /></span></h3>
                          </div>
                          <div className="clearfix" />
                        </div>
                      </div>
                      {/* end col */}
                      <div className="col-sm-3">
                        <div className="card-box widget-box-four">
                          <div id="dashboard-3" className="widget-box-four-chart" />
                          <div className="wigdet-four-content">
                            <h4 className="m-t-0 font-18 m-b-5" title="Tenant">Tenant</h4>
                            <h3 className="m-b-0 m-t-35"><span>{this.state.statics.Tenant?this.state.statics.Tenant:'0'}</span> <span data-plugin="counterup" className="profile-icon"><i className="fi-head " /></span></h3>
                          </div>
                          <div className="clearfix" />
                        </div>
                      </div>
                      {/* end col */}
                      <div className="col-sm-3">
                        <div className="card-box widget-box-four">
                          <div id="dashboard-3" className="widget-box-four-chart" />
                          <div className="wigdet-four-content">
                            <h4 className="m-t-0 font-18 m-b-5" title="Agreement">Agreement</h4>
                            <h3 className="m-b-0 m-t-35"><span>{this.state.statics.Agreement?this.state.statics.Agreement:'0'}</span> <span data-plugin="counterup" className="profile-icon"><i className="fi-paper" /></span></h3>
                          </div>
                          <div className="clearfix" />
                        </div>
                      </div>
                      {/* end col */} 
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end row */}
            <div className="row">
              <div className="col-md-4"> 
                {/* Personal-Information */}
                <div className="card-box">
                  <h4 className="header-title mt-0 m-b-20">Personal Information</h4>
                  <div className="panel-body">
                    <p className="text-muted font-13"> {profileInfo.about_us} </p>
                    <hr />
                    <div className="text-left">
                        <p className="text-muted font-13"><strong>Full Name :</strong> <span className="m-l-15">{profileInfo.first_name} {profileInfo.last_name}</span></p>
                        <p className="text-muted font-13"><strong>Mobile :</strong><span className="m-l-15">{profileInfo.mobile_no}</span></p>
                        <p className="text-muted font-13"><strong>Email :</strong> <span className="m-l-15">{profileInfo.email}</span></p>
                        <p className="text-muted font-13"><strong>Location :</strong> <span className="m-l-15">{profileInfo.country}</span></p>
                      </div>
                    <ul className="social-links list-inline m-t-20 m-b-0">
                      {profileInfo.facebook_link?<li className="list-inline-item"> <a title="Facebook" data-placement="top" data-toggle="tooltip" className="tooltips" href={profileInfo.facebook_link} data-original-title="Facebook"><i className="fa fa-facebook"></i></a> </li>:''} 
                         {profileInfo.twitter_link	?<li className="list-inline-item"> <a title="Twitter" data-placement="top" data-toggle="tooltip" className="tooltips" href={profileInfo.twitter_link} data-original-title="Twitter"><i className="fa fa-twitter"></i></a> </li>:''} 
                         {profileInfo.linkedin_link?<li className="list-inline-item"> <a title="Linkedin" data-placement="top" data-toggle="tooltip" className="tooltips" href={profileInfo.linkedin_link}  data-original-title="Linkedin"><i className="fa fa-linkedin"></i></a> </li>:''} 
                    </ul>
                  </div>
                </div>
                {/* Personal-Information */} 
				{/* Personal-Information */}
                <div className="card-box">
                  <h4 className="header-title mt-0 m-b-20">Recent Added Property</h4>
				   {this.state.property && this.state.property.length>0?
				   this.state.property.map((item)=>(
                  <div className="panel-body"> <img onError={this.addDefaultSrc} id="single-image" src={item!==''?API_URL+item.img_path:img_not_available} alt="image-1" className="img-fluid" />
                      <hr/>
					  <h3>{item.title}</h3>
                      <p className="text-muted font-13">{item.description} </p>
                   <Link to={{"pathname":"/broker-property"}}><a className="btn btn-custom waves-light waves-effect w-md">View more...</a></Link> </div>)):<div>No Property Added</div>}
                </div>
                {/* Personal-Information */}
              </div>
              <div className="col-md-8">
                <div className="card-box">
                  <h4 className="mt-0">Recent Owner Contact</h4>
                  <div className="table-responsive">
				  {(OwnerList.length>0)?
                    <table className="table table-hover m-0 table-actions-bar">
                      <thead>
                        <tr>
                          <th> </th>
                          <th>Name</th>
                          <th>Location</th>
                          <th>Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
					   {OwnerList.map((item)=>(
                        <tr>
                          <td><img onError={this.addDefaultSrc} src={item.profile_photo!==''?API_URL+item.profile_photo:img_not_available} alt="contact-img" title="contact-img" className="rounded-circle thumb-sm" /></td>
                          <td><h5 className="m-b-0 m-t-0 font-600">{item.name}</h5></td>
                          <td><i className="mdi mdi-map-marker text-primary" /> {item.country} </td>
                          <td>{item.connectedDate} </td>
                          <td><Link to={{"pathname":"/broker-owner-profile",state:{profileid:item.profile_id,session:JSON.parse(this.state.userData).session_id,loc: this.props.location}}} className="view-icon"><i className="mdi mdi-eye"></i></Link></td>
                        </tr>
					))}
                        
                      </tbody>
	</table>:<div style={{textAlign:'center'}}>No Contact Available</div>}
                  </div>
                </div>
				 <div className="card-box">
                  <h4 className="mt-0">Recent Tenant Contact</h4>
                  <div className="table-responsive">
				  {(TenantList.length>0)?
                    <table className="table table-hover m-0 table-actions-bar">
                      <thead>
                        <tr>
                          <th> </th>
                          <th>Name</th>
                          <th>Location</th>
                          <th>Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
					 {TenantList.map((item,key)=>(
                        <tr>
                          <td><img onError={this.addDefaultSrc}src={item.profile_photo!==''?API_URL+item.profile_photo:img_not_available} alt="contact-img" title="contact-img" className="rounded-circle thumb-sm" /></td>
                          <td><h5 className="m-b-0 m-t-0 font-600">{item.name}</h5></td>
                          <td><i className="mdi mdi-map-marker text-primary" /> {item.country} </td>
                          <td>{item.connectedDate} </td>
                          <td><Link to={{"pathname":"/broker-tenant-profile",state:{profileid:item.profile_id,session:JSON.parse(this.state.userData).session_id,loc: this.props.location}}} className="view-icon"><i className="mdi mdi-eye"></i></Link></td>
                        </tr>
					 ))}
                        
                      </tbody>
				  </table>:<div style={{textAlign:'center'}}>No Contact Available</div>}
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4"> 
                 
              </div>
              <div className="col-md-8">
               
            </div>
            {/* end col */} 
            {/* end row */} 
          </div>
          {/* end container */} 
        </div>
        {/* end wrapper */} 
        {/* Footer */}
        
        {/* End Footer */} 
        {/* jQuery  */} 
        {/* Tether for Bootstrap */} 
        {/* Counter js  */} 
        {/* App js */} 
      </div>


			)
	}
}

export default connect(state=>({ userData: state.userData, userProfile: state.userProfile }))(BrokerProfie)
