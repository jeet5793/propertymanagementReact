import React from 'react';
import { connect } from 'react-redux';
import avatar_1 from '../../../images/Owner/users/avatar-1.jpg'
import avatar_2 from '../../../images/Owner/users/avatar-2.jpg'
import avatar_3 from '../../../images/Owner/users/avatar-3.jpg'
import avatar_4 from '../../../images/Owner/users/avatar-4.jpg'
import avatar_5 from '../../../images/Owner/users/avatar-5.jpg'
import avatar_6 from '../../../images/Owner/users/avatar-8.jpg'
import img1 from '../../../images/Owner/small/img-1.jpg'
import img_not_available from '../../../images/img_not_available.png'
import Cookies from 'js-cookie';
import {Link} from 'react-router-dom'
import $ from 'jquery';
import API_URL from "../../../app-config";
class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userInfo:props.userData,
      userData:Cookies.get('profile_data'),
      profileData:'',
      property:'',
	  statics:[],
	  contactlist:{
      "Agent": [],
      "Tenant": []
   }
    }
    // console.log("userData"+JSON.stringify(this.state.userData))
    // this.state={profile:{"assets_id":"","first_name":"jitendra","last_name":"Mishra","email":"jeet.mishra57@gmail.com","password":"12345","city":"bangalore","state":"ka","country":"Test country","zip_code":"560029","mobile_no":"9066584437","landline_no":"","assets_type":"1","owner_type":"1","agent_type":"2","profile_photo":"\/uploads","about_us":"fsjkfhghdjg gdjkfnbhfgkj","facebook_link":"","twitter_link":"","linkedin_link":"","facebook_id":null,"twitter_id":null,"google_id":null,"linkedin_id":null,"status":"1","created_date":"2018-05-24 17:39:11","modified_date":"2018-05-24 17:39:11","oauth_provider":"","oauth_uid":"","company_name":null,"website_url":null,"isLoaded":false},
    // isLoaded:false,loadedId:null}
    //this.logoutLink='';
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
      
    //  //==================================================================Recent Property Api=================================================================================
      fetch(`${API_URL}assetsapi/recent_added_property/${profile.assets_id}/${profile.session_id}`, {
        method: 'get'
      })
      .then(res => res.json())
      .then(
        (data) => {
        //console.log("data 2: "+JSON.stringify(result.profile))
        if (data.success) {
          this.setState({property:data.property[0]})
          //console.log(this.state.property);
        } 
        //console.log("set user data"+JSON.stringify(this.state.profileData))
        },
      (error) => {
        console.log('error')
      }
      )
      
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
        // console.log("set user data"+JSON.stringify(this.state.profileData))
        },
      (error) => {
        console.log('error')
      }
      )
    }
    
    
    
      // updateProf(id){
      //   fetch(`${API_URL}assetsapi/profile/${id}`)
      //   .then(res => res.json())
      //   .then(
      //     (result) => {
      //       this.setState({
      //         loadedId:result.profile.assets_id,
      //         isLoaded: true,
      //         profile: result.profile
      //       });
      //       // this.props.updateInfo(result.profile)
      //     },
      //     // Note: it's important to handle errors here
      //     // instead of a catch() block so that we don't swallow
      //     // exceptions from actual bugs in components.
      //     (error) => {
      //       this.setState({
      //         isLoaded: true,
      //         error
      //       });
      //     }
      //   )
      // }

    }
    
    render(){
		
      const profileInfo=this.state.profileData;
      const { userProfile: profile } = this.props;
      const profile_pic = profile.profile_photo || avatar_1;
	    // console.log("afgdgh"+this.state.contactlist);
	  const AgentList = this.state.contactlist.Agent;
	  const TenantList = this.state.contactlist.Tenant;
	 
        // this.updateProf(this.props.user.assets_id)          
      return(

        <div>
          {/* <link rel='stylesheet' href='../../../css/style.css' type='text/css' media='all' /> */}
          <div  className="wrapper">
            <div className="container"> 
              <div className="page-title-box">
    <h4 className="page-title">Profile</h4>
  </div>
              {/* <!-- end page title end breadcrumb --> */}
              
              <div className="row">
                <div className="col-sm-12">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="profile-user-box">
                        <span className="pull-left m-r-15">
                          <img src={profileInfo.profile_photo!=''?API_URL+profileInfo.profile_photo:img_not_available} alt="" className="thumb-lg rounded-circle" />
                        </span>
                        <div className="media-body">
                          {/* <h4 className="m-t-5 m-b-5 font-18 ellipsis">Michael A. Franklin</h4> */}
                          <h4 className="m-t-5 m-b-5 font-18 ellipsis">{profileInfo.first_name + ' '+ profileInfo.last_name}</h4>
                          {/*<p className="font-13"> User Experience Specialist</p>*/}
                          <p className="text-muted m-b-0"><small>{profileInfo.city}, {profileInfo.country}</small></p>
						    <p className="font-13" style={{visibility:'hidden'}}> Span</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-sm-3">
                          <div className="card-box widget-box-four">
                            <div id="dashboard-1" className="widget-box-four-chart"></div>
                            <div className="wigdet-four-content">
                              <h4 className="m-t-0 font-18 m-b-5" title="Property">Property</h4>
                              <h3 className="m-b-0 m-t-35"><span>{this.state.statics.Property?this.state.statics.Property:'0'}</span> <span data-plugin="counterup" className="profile-icon"><i className="fi-box"></i></span></h3>
                            </div>
                            <div className="clearfix"></div>
                          </div>
                        </div>
                        {/* <!-- end col --> */}
                        <div className="col-sm-3">
                          <div className="card-box widget-box-four">
                            <div id="dashboard-2" className="widget-box-four-chart"></div>
                            <div className="wigdet-four-content">
                              <h4 className="m-t-0 font-18 m-b-5" title="Agent">Agent</h4>
                              <h3 className="m-b-0 m-t-35"><span>{this.state.statics.Agent?this.state.statics.Agent:'0'}</span> <span data-plugin="counterup" className="profile-icon"><i className="fi-head "></i></span></h3>
                            </div>
                            <div className="clearfix"></div>
                          </div>
                        </div>
                        {/* <!-- end col --> */}
                        <div className="col-sm-3">
                          <div className="card-box widget-box-four">
                            <div id="dashboard-3" className="widget-box-four-chart"></div>
                            <div className="wigdet-four-content">
                              <h4 className="m-t-0 font-18 m-b-5" title="Tenant">Tenant</h4>
                              <h3 className="m-b-0 m-t-35"><span>{this.state.statics.Tenant?this.state.statics.Tenant:'0'}</span> <span data-plugin="counterup" className="profile-icon"><i className="fi-head "></i></span></h3>
                            </div>
                            <div className="clearfix"></div>
                          </div>
                        </div>
                        {/* <!-- end col --> */}
                        <div className="col-sm-3">
                          <div className="card-box widget-box-four">
                            <div id="dashboard-3" className="widget-box-four-chart"></div>
                            <div className="wigdet-four-content">
                              <h4 className="m-t-0 font-18 m-b-5" title="Agreement">Agreement</h4>
                              <h3 className="m-b-0 m-t-35"><span>{this.state.statics.Agreement?this.state.statics.Agreement:'0'}</span> <span data-plugin="counterup" className="profile-icon"><i className="fi-paper"></i></span></h3>
                            </div>
                            <div className="clearfix"></div>
                          </div>
                        </div>
                        {/* <!-- end col -->  */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* <!-- end row --> */}
              
              <div className="row">
                <div className="col-md-4"> 
                  {/* <!-- Personal-Information --> */}
                  <div className="card-box">
                    <h4 className="header-title mt-0 m-b-20">Personal Information</h4>
                    <div className="panel-body">
                      <p className="text-muted font-13"> {profileInfo.about_us}  </p>
                      <hr/>
                      <div className="text-left">
                        <p className="text-muted font-13"><strong>Full Name :</strong> <span className="m-l-15">{profileInfo.first_name} {profileInfo.last_name}</span></p>
                        <p className="text-muted font-13"><strong>Mobile :</strong><span className="m-l-15">{profileInfo.mobile_no}</span></p>
                        <p className="text-muted font-13"><strong>Email :</strong> <span className="m-l-15">{profileInfo.email}</span></p>
                        <p className="text-muted font-13"><strong>Location :</strong> <span className="m-l-15">{profileInfo.country}</span></p>
                      </div>
                      <ul className="social-links list-inline m-t-20 m-b-0">
                        <li className="list-inline-item"> <a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Facebook"><i className="fa fa-facebook"></i></a> </li>
                        <li className="list-inline-item"> <a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Twitter"><i className="fa fa-twitter"></i></a> </li>
                        <li className="list-inline-item"> <a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Skype"><i className="fa fa-skype"></i></a> </li>
                      </ul>
                    </div>
                  </div>   
 {/* <!-- Personal-Information --> */}
                  <div className="card-box">
                    <h4 className="header-title mt-0 m-b-20">Recent Added Property</h4>
					 {(this.state.property).length>0?
                    <div className="panel-body"> 
                    <img id="single-image" src={this.state.property!=''?API_URL+this.state.property.img_path:img_not_available} alt="image-1" className="img-fluid" />
                      <hr/>
                      <p className="text-muted font-13">{this.state.property.description} </p>
                      <Link to={{"pathname":"/owner-property-detail",state:{propertyID:this.state.property.property_id,session:JSON.parse(this.state.userData).session_id}}}><a className="btn btn-custom waves-light waves-effect w-md">View</a></Link> </div>:<div>No Property Added</div>}
                  </div>
                  {/* <!-- Personal-Information -->  */}
                  				  
                </div>
              {/* <!-- Personal-Information -->  */}

                <div className="col-md-8">
                  <div className="card-box">
                    <h4 className="mt-0">Recent Agent Contact</h4>
                    <div className="table-responsive">
					 {(AgentList.length>0)?
                      <table className="table table-hover m-0 table-actions-bar">
                        <thead>
                          <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Date</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
						 {AgentList.map((item,key)=>(
                          <tr key={item.name}>
                            <td><img src={item.profile_photo!=''?API_URL+item.profile_photo:img_not_available} alt="contact-img" title="contact-img" className="rounded-circle thumb-sm" /></td>
                            <td><h5 className="m-b-0 m-t-0 font-600">{item.name}</h5></td>
                            <td><i className="mdi mdi-map-marker text-primary"></i> {item.country} </td>
                            <td>{item.connectedDate} </td>
                            <td><Link to={{"pathname":"/owner-agent-profile",state:{profileid:item.profile_id,session:JSON.parse(this.state.userData).session_id,loc: this.props.location}}} className="view-icon"><i className="mdi mdi-eye"></i></Link></td>
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
                            <td><img src={item.profile_photo!=''?API_URL+item.profile_photo:img_not_available} alt="contact-img" title="contact-img" className="rounded-circle thumb-sm" /></td>
                            <td><h5 className="m-b-0 m-t-0 font-600">{item.name}</h5></td>
                            <td><i className="mdi mdi-map-marker text-primary"></i> {item.country}</td>
                            <td>{item.connectedDate}</td>
                            <td><Link to={{"pathname":"/profile-details",state:{profileid:item.profile_id,session:JSON.parse(this.state.userData).session_id,loc: this.props.location}}} className="view-icon"><i className="mdi mdi-eye"></i></Link></td>
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
              {/* <!-- end col -->  */}
              {/* <!-- end row -->  */}
              
            </div>
            {/*<!-- end container --> */}
          </div>
        </div>
      );
    }
}


export default connect(state=>({ userData: state.userData, userProfile: state.userProfile }))(Profile)

