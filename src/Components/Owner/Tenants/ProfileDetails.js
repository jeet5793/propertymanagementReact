import React from 'react'
import Header from '../Header/Header'
import avatar_1 from '../../../images/Owner/users/avatar-1.jpg'
import API_URL from "../../../app-config";
import img_not_available from '../../../images/img_not_available.png'
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import $ from 'jquery';
import {Link} from 'react-router-dom'
class ProfileDetails extends React.Component{
	constructor(props){
    super(props);
	this.sendMessage=this.sendMessage.bind(this)
    this.state = {
		profileData:'',
		statics:[],
		userData:Cookies.get('profile_data'),
		sendForm:{
				sender:'',
				receiver:'',
				message:'',
				session_id:''
			}
		}
		this.onChangeHandler=this.onChangeHandler.bind(this)
		this.BgvDownload = this.BgvDownload.bind(this);
    }
	onChangeHandler(e)
	{
		const sendFrm = this.state.sendForm
		sendFrm.message=e.target.value
		sendFrm.receiver=document.getElementById('receiver').value
		sendFrm.sender=JSON.parse(this.state.userData).assets_id
		sendFrm.session_id=JSON.parse(this.state.userData).session_id
		this.setState({sendForm:sendFrm})
		// console.log(this.state.sendForm);
	}
	sendMessage(){
		const opts = this.state.sendForm;
		if(!opts.receiver && !opts.message){
			return;
		}else{
			document.getElementById("msgFormCancel").click();
			$("#loaderDiv").show();
			fetch(`${API_URL}assetsapi/send_message`, {
				method: 'post',
				body:JSON.stringify(opts)
			  })
			.then(res => res.json())
			.then(
			  (result) => {
				//console.log("data 2: "+JSON.stringify(result.profile))
				if (result) {
				  //this.setState({sendForm:result.notification})
					// swal("Assets Watch", result.msg);
					// const m = document.getElementById('hidemodal');
					// m.style.display='none';
						$("#loaderDiv").hide();
					   
					   $("#actionType").val("Yes");
					   $("#hiddenURL").val("profile-details");
					   $(".confirm-body").html(result.msg);
					   $("#BlockUIConfirm").show();
				  
				} 
				// console.log("notification"+JSON.stringify(this.state.sendForm))
			  },
				(error) => {
				  console.log('error')
				}
			)
		}
	}
    componentDidMount(){
		$("#loaderDiv").show();
        // var $=window.$;
        // $('[data-toggle="tooltip"]').tooltip();  
			//console.log(this.props.location.state.profileid)
	fetch(`${API_URL}assetsapi/profile/${this.props.location.state.profileid}/${this.props.location.state.session}`, {
        method: 'get'
      })
    .then(res => res.json())
    .then(
      (result) => {
		  $("#loaderDiv").hide();
        //console.log("data 2: "+JSON.stringify(result.profile))
        if (result.success) {
			
          this.setState({profileData:result.profile})
          
        } 
        // console.log("set user data"+JSON.stringify(this.state.profileData))
      },
		(error) => {
		  console.log('error')
		}
	)
	
	//==================================================================Statics Count Api=================================================================================
      fetch(`${API_URL}assetsapi/statics_count_by/${this.props.location.state.profileid}/${this.props.location.state.session}`, {
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
	//===============================bgv==================================================
	fetch(`${API_URL}assetsapi/bgv_information/${JSON.parse(this.state.userData).assets_id}/${this.props.location.state.profileid}`, {
        method: 'get'
      })
    .then(res => res.json())
    .then(
      (result) => {
        //console.log("data 2: "+JSON.stringify(result.profile))
		$("#loaderDiv").hide();
        if (result.success) {
			
          this.setState({bgvInfo:result.bgvInfo})
          
        } 
        // console.log("bgvInfo"+JSON.stringify(this.state.bgvInfo))
      },
		(error) => {
		  console.log('error')
		}
	)
	
	}
	BgvDownload(reportId){
		window.open(`${API_URL}assetsapi/bgv_report/`+reportId,"_self")
		
	}
	changeTabs(id) {
        if (id == "bgv") {
            $("#aboutTab").removeClass("active")

        }
        else {
            $("#bgvTab").removeClass("active")
           
        }
    }
	addDefaultSrc(ev){
	  ev.target.src = img_not_available;
	}
    render(){
        // if(this.props.owner===undefined)
        // window.location.href='http://'+window.location.host
	//console.log(this.props)
        return(
            <div>
                <Header name="owner-tenant"  first_name={window.localStorage.getItem('firstName')} 
                last_name={window.localStorage.getItem('firstName')} />
                <div className="wrapper">
                <div className="container"> 
                    
                    <div className="page-title-box">
                    <div className="btn-group pull-right">
                        <ol className="breadcrumb hide-phone p-0 m-0">
                        <li><Link to={this.props.location.state.loc.pathname}><span className="btn waves-light waves-effect w-md btn-custom"><i class="fi-reply"></i>&nbsp;&nbsp;Back</span></Link></li>
                        </ol>
                    </div>
                    <h4 className="page-title">{this.state.profileData.first_name}'s Profile</h4>
                    </div>
                    {/* <!-- end page title end breadcrumb --> */}

                    <div className="row">
                    <div className="col-md-12 col-lg-12 second-profiles-details">
                        <div className="card-box"> 
                        <div className="row"> 
                        <div className="col-md-12"> 
						<div className="row">
                        <div className="col-md-8">
                        <span className="pull-left m-r-15 sec-profile-mg">
                        <img onError={this.addDefaultSrc} src={this.state.profileData.profile_photo!=''?API_URL+this.state.profileData.profile_photo:img_not_available} alt="" className="second-profiles rounded-circle" /></span>
                        <div className="details-dec ">
                                <h4 className="m-t-5 m-b-5 font-18 ellipsis">{this.state.profileData.first_name+" "+this.state.profileData.last_name}</h4>
                                
                                <p className="text-muted m-b-3"><i className="icon-phone"></i>&nbsp; {this.state.profileData.mobile_no}</p>
                                <p className="text-muted m-b-3 "><i className="icon-envelope"></i>&nbsp; {this.state.profileData.email}</p>
                                <p className="text-muted m-b-3"><i className="icon-location-pin"></i>&nbsp; {this.state.profileData.country}</p>
                                
                            </div>
                            </div>
                            <div className="col-md-4 profile-sms">
                                <ul className="social-links list-inline m-t-10 m-b-0">
								{(this.state.profileData.facebook_link>0)?<li className="list-inline-item"> <a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Facebook"><i className="fa fa-facebook"></i>{this.state.profileData.facebook_link}</a> </li>:''}
                            {(this.state.profileData.twitter_link>0)?<li className="list-inline-item"> <a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Twitter"><i className="fa fa-twitter"></i></a> </li>:''}
                            {(this.state.profileData.linkedin_link>0)?<li className="list-inline-item"> <a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Skype"><i className="fa fa-linkedin"></i></a> </li>:''}
                            </ul>
                            <a href="#" data-toggle="modal" data-target="#send-msg" className="btn waves-light waves-effect w-md btn-custom m-t-30"><i className="fi-mail"></i>&nbsp;&nbsp;Send Message</a>
                            </div>	
                            </div>	
							<div className="count">
                                <ul>
                                    <li>
                                        <span>{this.state.statics.Owner?this.state.statics.Owner:'0'}</span>
                                        <p>Owners</p>
                                    </li>
                                    <li>
                                        <span>{this.state.statics.Agent?this.state.statics.Agent:'0'}</span>
                                        <p>Agent</p>
                                    </li>
                                    
                                </ul>
                            </div>	
                            </div>	
							  </div>
                            <hr />
                           <ul className="nav nav-tabs tabs-bordered">
								<li className="nav-item"> <a href="#about" data-toggle="tab" onClick={this.changeTabs.bind(this, "about")} id="aboutTab" aria-expanded="true" className="nav-link font-16 active">About  </a> </li>
								<li className="nav-item"> <a href="#bgv" data-toggle="tab" onClick={this.changeTabs.bind(this, "bgv")} id="bgvTab" aria-expanded="false" className="nav-link font-16">BGV  </a> </li>
								
                            </ul>
							
							<div className="tab-content">
								<div className="tab-pane active" id="about">
									<div className="row">
										{this.state.profileData.about_us}
									</div>
						  
								</div>
								<div className="tab-pane" id="bgv">
									<div className="row">
									{this.state.bgvInfo && (this.state.bgvInfo).length>0?
										<div className=" table-responsive">
											<table id="" className="table table-bordered datatable">
												<thead>
													<tr>
														<th>Report Type</th>
														<th>Package Name</th>
														<th>Date</th>
														<th>Action</th>
													</tr>
												</thead>
												<tbody>
											  {this.state.bgvInfo?this.state.bgvInfo.map((item)=>(
													<tr>
														<td>{(item.selected_package==14)?"Credit Report":(item.selected_package==12)?"Credit Report, Eviction Report":(item.selected_package==13)?"County Criminal, Credit Report, Eviction Report":''}</td>
														<td className="tbl-text-overflow">{(item.selected_package==14)?"Bronze Package":(item.selected_package==12)?"Silver Package":(item.selected_package==13)?"Gold Package":''} </td>
														<td>{item.orderDate}</td>
														<td className="text-center"><a  style={{cursor:'pointer'}} className="table-action-btn view-rqu" onClick={this.BgvDownload.bind(this,item.reportId)}><i className="mdi mdi-download"></i></a></td>
													</tr>)):<tr><td style={{textAlign:'center'}} colSpan={5}>No Report Available</td></tr>}
												</tbody>
											</table>
									</div>:<div className=" table-responsive" style={{textAlign:'center'}}>No Report Available</div>}
									</div>
								</div>
								
							</div>
							
                        </div>
                    </div>
                    {/* <!-- end col --> */}
				   </div>
                    {/* <!-- end row --> */}
                    
                </div>
                {/* <!-- end container -->  */}
                </div>
				 
                <div id="send-msg" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: 'none'}}>
                <div className="modal-dialog">
                    <div className="modal-content" id="hidemodal">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 className="modal-title">Send </h4>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                            <label htmlFor="receiver" className="control-label">Name<span className="required"/></label>
                            <input type="hidden" className="form-control" placeholder="" defaultValue={this.state.profileData.assets_id} name="receiver" id="receiver" />
							<input type="text" className="form-control" placeholder="" name="receiver_name" value={this.state.profileData.first_name+''+this.state.profileData.last_name} id="receiver" onChange={this.onChangeHandler} />
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-12">
                            <div className="form-group no-margin">
                            <label htmlFor="field-7" className="control-label">Message<span className="required"/></label>
                            <textarea className="form-control" id="field-7" placeholder="" name="message" onChange={this.onChangeHandler}></textarea>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" id = "msgFormCancel" className="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-success waves-effect waves-light" onClick={this.sendMessage}>Send</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );        
    }
}
export default connect(state=>({ userData: state.userData, userProfile: state.userProfile }))(ProfileDetails)