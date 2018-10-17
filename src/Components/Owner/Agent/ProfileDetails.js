import React from 'react'
import Header from '../Header/Header'
import avatar_1 from '../../../images/Owner/users/avatar-1.jpg'
import API_URL from "../../../app-config";
import img_not_available from '../../../images/img_not_available.png'
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import swal from 'sweetalert';
import $ from 'jquery';
import {Link} from 'react-router-dom'
class ProfileDetails extends React.Component{
	constructor(props){
    super(props);
	this.sendMessage=this.sendMessage.bind(this)
	this.sendRating =this.sendRating.bind(this);
    this.state = {
		profileData:'',
		statics:[],
		userData:Cookies.get('profile_data'),
		sendForm:{
				sender:'',
				receiver:'',
				message:'',
				session_id:''
			},
			ratingForm:{
				user_id:'',
				agent_id:'',
				rating  :'',
				feedback :'' 
			},
			ratingDetail:[],
			bgvInfo:[]
		}
		this.onChangeHandler=this.onChangeHandler.bind(this)
		this.onChangeRating = this.onChangeRating.bind(this);
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
	onChangeRating(e){
		const ratingFrm = this.state.ratingForm
		if(e.target.name=='rating')
			ratingFrm.rating=e.target.value;
		if(e.target.name=="feedback")
			ratingFrm.feedback=e.target.value;
		
		ratingFrm.user_id=JSON.parse(this.state.userData).assets_id;
		ratingFrm.agent_id=this.props.location.state.profileid;
		
		this.setState({ratingForm:ratingFrm})
		console.log(this.state.ratingForm);
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
					   $("#hiddenURL").val("owner-agent-profile");
					   $(".confirm-body").html(result.msg);
					   $("#BlockUIConfirm").show();
				  
				} 
				console.log("notification"+JSON.stringify(this.state.sendForm))
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
        //console.log("data 2: "+JSON.stringify(result.profile))
		$("#loaderDiv").hide();
        if (result.success) {
			
          this.setState({profileData:result.profile})
          
        } 
        console.log("set user data"+JSON.stringify(this.state.profileData))
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
	//======================rating detail==================================================
	fetch(`${API_URL}assetsapi/rating_detail/${this.props.location.state.profileid}/${this.props.location.state.session}`, {
        method: 'get'
      })
    .then(res => res.json())
    .then(
      (result) => {
        if (result.success) {
			this.setState({ratingDetail:result.rating_detail});
          
        } 
        
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
        console.log("bgvInfo"+JSON.stringify(this.state.bgvInfo))
      },
		(error) => {
		  console.log('error')
		}
	)
	
	
	
	//=======================================================================================
	}
	sendRating(){
		const opts = this.state.ratingForm
		if(!opts.rating && !opts.feedback){
			return;
		}else{
			document.getElementById("ratingFormCancel").click();
			$("#loaderDiv").show();
			fetch(`${API_URL}assetsapi/rating`, {
				method: 'post',
				body:JSON.stringify(opts)
			  })
			.then(res => res.json())
			.then(
			  (result) => {
				if (result) {
					// swal("Assets Watch", result.msg);
					// const m = document.getElementById('add-review');
					// m.style.display='none';
					// window.location.reload();
					$("#loaderDiv").hide();
					   
					   $("#actionType").val("Yes");
					   $("#hiddenURL").val("owner-agent-profile");
					   $(".confirm-body").html(result.msg);
					   $("#BlockUIConfirm").show();
				  
				} 
				
			  },
				(error) => {
				  console.log('error')
				}
			)
		}
	}
	BgvDownload(reportId){
		window.open(`${API_URL}assetsapi/bgv_report/`+reportId,"_self")
		
	}
    render(){
        // if(this.props.owner===undefined)
        // window.location.href='http://'+window.location.host
	//console.log(this.props.location.state)
	// var indents = [];
	// this.state.ratingDetail.map((item)=>(
	// for (var i = 5; i>=0; i=i-0.5) {
	  
	  // indents.push(<label className = "rat-check half" for="star5" ></label>);
	  
	  /* indents.push(<label className = "rat-check half" for="star"+i+"half" ></label>); */
	// }
	// ))
        return(
            <div>
                <Header name="owner-agent"  first_name={window.localStorage.getItem('firstName')} 
                last_name={window.localStorage.getItem('firstName')} />
                <div className="wrapper">
                <div className="container"> 
                    
                    <div className="page-title-box">
                    <div className="btn-group pull-right">
                        <ol className="breadcrumb hide-phone p-0 m-0">
                        <li>
					<Link to={this.props.location.state.loc.pathname}><a className="btn waves-light waves-effect w-md btn-custom">Back</a></Link>{/* <a href="/owner-agent" className="btn waves-light waves-effect w-md btn-custom"><i className="fi-reply"></i>&nbsp;&nbsp;Back</a> */}</li>
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
                        <img src={this.state.profileData.profile_photo!=''?API_URL+this.state.profileData.profile_photo:img_not_available} alt="" className="second-profiles rounded-circle" /></span>
                        <div className="details-dec ">
                                <h4 className="m-t-5 m-b-5 font-18 ellipsis">{this.state.profileData.first_name+" "+this.state.profileData.last_name}</h4>
                                
                                <p className="text-muted m-b-3"><i className="icon-phone"></i>&nbsp; {this.state.profileData.mobile_no}</p>
                                <p className="text-muted m-b-3 "><i className="icon-envelope"></i>&nbsp; {this.state.profileData.email}</p>
                                <p className="text-muted m-b-3"><i className="icon-location-pin"></i>&nbsp; {this.state.profileData.country}</p>
                                
                            </div>
                            </div>
                            <div className="col-md-4">
                                <ul className="social-links list-inline m-t-20 m-b-0">
								{(this.state.profileData.facebook_link>0)?<li className="list-inline-item"> <a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Facebook"><i className="fa fa-facebook"></i>{this.state.profileData.facebook_link}</a> </li>:''}
                            {(this.state.profileData.twitter_link>0)?<li className="list-inline-item"> <a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Twitter"><i className="fa fa-twitter"></i></a> </li>:''}
                            {(this.state.profileData.linkedin_link>0)?<li className="list-inline-item"> <a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Skype"><i className="fa fa-linkedin"></i></a> </li>:''}
                            </ul>
                            <a href="#" data-toggle="modal" data-target="#send-msg" className="btn waves-light waves-effect w-md btn-custom m-t-30	"><i className="fi-mail"></i>&nbsp;&nbsp;Send Message</a>
							<a href="#" data-toggle="modal" data-target="#add-review" className="btn btn-inverse waves-effect w-md waves-light w-md btn-custom m-t-30	"><i className="fi-star"></i>&nbsp;&nbsp;Review</a>
                            </div>	
                            </div>	
							<div className="count">
                                <ul>
                                    <li>
                                        <span>{this.state.statics.Owner}</span>
                                        <p>Owners</p>
                                    </li>
                                    <li>
                                        <span>{this.state.statics.Tenant?this.state.statics.Tenant:'0'}</span>
                                        <p>Tenant</p>
                                    </li>
                                    
                                </ul>
                            </div>	
                            </div>	
                            </div>	
                            <hr />
							<ul className="nav nav-tabs tabs-bordered">
								<li className="nav-item"> <a href="#about" data-toggle="tab" aria-expanded="true" className="nav-link font-16 active">About  </a> </li>
								<li className="nav-item"> <a href="#bgv" data-toggle="tab" aria-expanded="false" className="nav-link font-16">BGV  </a> </li>
								<li className="nav-item"> <a href="#reviews" data-toggle="tab" aria-expanded="false" className="nav-link font-16">Reviews  </a> </li>
                            </ul>
							
							<div className="tab-content">
								<div className="tab-pane active" id="about">
									<div className="row">
										{this.state.profileData.about_us}
									</div>
						  
								</div>
								<div className="tab-pane" id="bgv">
									<div className="row">
									{this.state.bgvInfo?
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
														<td className="text-center"><a href="#" className="table-action-btn view-rqu" onClick={this.BgvDownload.bind(this,item.reportId)}><i className="mdi mdi-download"></i></a></td>
													</tr>)):<tr><td style={{textAlign:'center'}} colSpan={5}>No Report Available</td></tr>}
												</tbody>
											</table>
										</div>:<div className=" table-responsive" style={{textAlign:'center'}}>No Report Available</div>}
									</div>
								</div>
								
								<div className="tab-pane" id="reviews">
									<div className="row">
									  <div className="col-md-12">
											{this.state.ratingDetail.map((item)=>(
						
										<div className="media" key={item.id}>
                                            <div className="media-left">
                                                <a href="#"> <img className="media-object img-circle" alt="64x64" src={API_URL+item.profile_photo} style={{width: "54px", height: "54px"}}/> </a>
                                            </div>
                                            <div className="media-body">
												<div className="col-md-12">
													<div className="row">
														<div className="col-md-8">
															<h5 className="media-heading">
																<a href="#" className="text-dark">{item.name}</a>
															</h5>
														</div>
														<div className="col-md-4">
															<h5 className="media-heading text-right">
																<a href="#" className="text-dark">Date : {item.created_date}</a>
															</h5>
														</div>
													</div>
												</div>
                                                <div className="font-13 col-md-12">
												<div className="row">
											
												{item.rating==0.5?<fieldset className="rating">
													<label className = "full" for="star5" title="Awesome - 5 stars"></label>
													<label className="half" for="star4half" title="Pretty good - 4.5 stars"></label>
													<label className = "full" for="star4" title="Pretty good - 4 stars"></label>
													<label className=" half" for="star3half" title="Meh - 3.5 stars"></label>
													<label className = "full" for="star3" title="Meh - 3 stars"></label>
													<label className=" half" for="star2half" title="Kinda bad - 2.5 stars"></label>
													<label className = "full" for="star2" title="Kinda bad - 2 stars"></label>
													<label className="half" for="star1half" title="Meh - 1.5 stars"></label>
													<label className = "full" for="star1" title="Sucks big time - 1 star"></label>
													<label className="rat-check half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
												</fieldset>
												:item.rating==1?<fieldset className="rating">
													<label className = "full" for="star5" title="Awesome - 5 stars"></label>
													<label className="half" for="star4half" title="Pretty good - 4.5 stars"></label>
													<label className = "full" for="star4" title="Pretty good - 4 stars"></label>
													<label className=" half" for="star3half" title="Meh - 3.5 stars"></label>
													<label className = "full" for="star3" title="Meh - 3 stars"></label>
													<label className=" half" for="star2half" title="Kinda bad - 2.5 stars"></label>
													<label className = "full" for="star2" title="Kinda bad - 2 stars"></label>
													<label className="half" for="star1half" title="Meh - 1.5 stars"></label>
													<label className = "rat-check full" for="star1" title="Sucks big time - 1 star"></label>
													<label className="rat-check half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
												</fieldset>
												:item.rating==1.5?<fieldset className="rating">
													<label className = "full" for="star5" title="Awesome - 5 stars"></label>
													<label className="half" for="star4half" title="Pretty good - 4.5 stars"></label>
													<label className = "full" for="star4" title="Pretty good - 4 stars"></label>
													<label className=" half" for="star3half" title="Meh - 3.5 stars"></label>
													<label className = "full" for="star3" title="Meh - 3 stars"></label>
													<label className=" half" for="star2half" title="Kinda bad - 2.5 stars"></label>
													<label className = "full" for="star2" title="Kinda bad - 2 stars"></label>
													<label className="rat-check half" for="star1half" title="Meh - 1.5 stars"></label>
													<label className = "rat-check full" for="star1" title="Sucks big time - 1 star"></label>
													<label className="rat-check half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
												</fieldset>
												:item.rating==2?<fieldset className="rating">
													<label className = "full" for="star5" title="Awesome - 5 stars"></label>
													<label className="half" for="star4half" title="Pretty good - 4.5 stars"></label>
													<label className = "full" for="star4" title="Pretty good - 4 stars"></label>
													<label className=" half" for="star3half" title="Meh - 3.5 stars"></label>
													<label className = "full" for="star3" title="Meh - 3 stars"></label>
													<label className=" half" for="star2half" title="Kinda bad - 2.5 stars"></label>
													<label className = "rat-check full" for="star2" title="Kinda bad - 2 stars"></label>
													<label className="rat-check half" for="star1half" title="Meh - 1.5 stars"></label>
													<label className = "rat-check full" for="star1" title="Sucks big time - 1 star"></label>
													<label className="rat-check half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
												</fieldset>
												:item.rating==2.5?<fieldset className="rating">
													<label className = "full" for="star5" title="Awesome - 5 stars"></label>
													<label className="half" for="star4half" title="Pretty good - 4.5 stars"></label>
													<label className = "full" for="star4" title="Pretty good - 4 stars"></label>
													<label className=" half" for="star3half" title="Meh - 3.5 stars"></label>
													<label className = "full" for="star3" title="Meh - 3 stars"></label>
													<label className="rat-check half" for="star2half" title="Kinda bad - 2.5 stars"></label>
													<label className = "rat-check full" for="star2" title="Kinda bad - 2 stars"></label>
													<label className="rat-check half" for="star1half" title="Meh - 1.5 stars"></label>
													<label className = "rat-check full" for="star1" title="Sucks big time - 1 star"></label>
													<label className="rat-check half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
												</fieldset>
												:item.rating==3?<fieldset className="rating">
													<label className = "full" for="star5" title="Awesome - 5 stars"></label>
													<label className="half" for="star4half" title="Pretty good - 4.5 stars"></label>
													<label className = "full" for="star4" title="Pretty good - 4 stars"></label>
													<label className=" half" for="star3half" title="Meh - 3.5 stars"></label>
													<label className = "rat-check full" for="star3" title="Meh - 3 stars"></label>
													<label className="rat-check half" for="star2half" title="Kinda bad - 2.5 stars"></label>
													<label className = "rat-check full" for="star2" title="Kinda bad - 2 stars"></label>
													<label className="rat-check half" for="star1half" title="Meh - 1.5 stars"></label>
													<label className = "rat-check full" for="star1" title="Sucks big time - 1 star"></label>
													<label className="rat-check half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
												</fieldset>
												:item.rating==3.5?<fieldset className="rating">
													<label className = "full" for="star5" title="Awesome - 5 stars"></label>
													<label className="half" for="star4half" title="Pretty good - 4.5 stars"></label>
													<label className = "full" for="star4" title="Pretty good - 4 stars"></label>
													<label className="rat-check half" for="star3half" title="Meh - 3.5 stars"></label>
													<label className = "rat-check full" for="star3" title="Meh - 3 stars"></label>
													<label className="rat-check half" for="star2half" title="Kinda bad - 2.5 stars"></label>
													<label className = "rat-check full" for="star2" title="Kinda bad - 2 stars"></label>
													<label className="rat-check half" for="star1half" title="Meh - 1.5 stars"></label>
													<label className = "rat-check full" for="star1" title="Sucks big time - 1 star"></label>
													<label className="rat-check half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
												</fieldset>
												:item.rating==4?<fieldset className="rating">
													<label className = "full" for="star5" title="Awesome - 5 stars"></label>
													<label className="half" for="star4half" title="Pretty good - 4.5 stars"></label>
													<label className = "rat-check full" for="star4" title="Pretty good - 4 stars"></label>
													<label className="rat-check half" for="star3half" title="Meh - 3.5 stars"></label>
													<label className = "rat-check full" for="star3" title="Meh - 3 stars"></label>
													<label className="rat-check half" for="star2half" title="Kinda bad - 2.5 stars"></label>
													<label className = "rat-check full" for="star2" title="Kinda bad - 2 stars"></label>
													<label className="rat-check half" for="star1half" title="Meh - 1.5 stars"></label>
													<label className = "rat-check full" for="star1" title="Sucks big time - 1 star"></label>
													<label className="rat-check half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
												</fieldset>
												:item.rating==4.5?<fieldset className="rating">
													<label className = "full" for="star5" title="Awesome - 5 stars"></label>
													<label className="rat-check half" for="star4half" title="Pretty good - 4.5 stars"></label>
													<label className = "rat-check full" for="star4" title="Pretty good - 4 stars"></label>
													<label className="rat-check half" for="star3half" title="Meh - 3.5 stars"></label>
													<label className = "rat-check full" for="star3" title="Meh - 3 stars"></label>
													<label className="rat-check half" for="star2half" title="Kinda bad - 2.5 stars"></label>
													<label className = "rat-check full" for="star2" title="Kinda bad - 2 stars"></label>
													<label className="rat-check half" for="star1half" title="Meh - 1.5 stars"></label>
													<label className = "rat-check full" for="star1" title="Sucks big time - 1 star"></label>
													<label className="rat-check half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
												</fieldset>
												:item.rating==5?<fieldset className="rating">
													<label className = "rat-check full" for="star5" title="Awesome - 5 stars"></label>
													<label className="rat-check half" for="star4half" title="Pretty good - 4.5 stars"></label>
													<label className = "rat-check full" for="star4" title="Pretty good - 4 stars"></label>
													<label className="rat-check half" for="star3half" title="Meh - 3.5 stars"></label>
													<label className = "rat-check full" for="star3" title="Meh - 3 stars"></label>
													<label className="rat-check half" for="star2half" title="Kinda bad - 2.5 stars"></label>
													<label className = "rat-check full" for="star2" title="Kinda bad - 2 stars"></label>
													<label className="rat-check half" for="star1half" title="Meh - 1.5 stars"></label>
													<label className = "rat-check full" for="star1" title="Sucks big time - 1 star"></label>
													<label className="rat-check half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
												</fieldset>:''}
                                                </div>
                                                </div>
                                                <div className="font-13 col-md-12">
                                                    <span className="text-muted">{item.feedback}</span>
                                                </div>
                                            </div>
                                        </div>
										))}
										</div>
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
				 
                <div id="send-msg" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: 'none'}}>
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
                            <label for="receiver" className="control-label">Name<span className="required"/></label>
                            <input type="hidden" className="form-control" placeholder="" value={this.state.profileData.assets_id} name="receiver" id="receiver" onChange={this.onChangeHandler}/>
							<input type="text" className="form-control" placeholder="" name="receiver_name" value={this.state.profileData.first_name+''+this.state.profileData.last_name} id="receiver" />
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-12">
                            <div className="form-group no-margin">
                            <label for="field-7" className="control-label">Message<span className="required"/></label>
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
				<div id="add-review" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: "none"}}>
				  <div className="modal-dialog">
					<div className="modal-content" id="hidemodalrat">
					  <div className="modal-header">
						<button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
						<h4 className="modal-title">Review </h4>
					  </div>
					  <div className="modal-body">
						<div className="row">
						  <div className="col-md-12">
							<div className="form-group">
							<div className="row">
							<div className="col-md-2">
							<label for="nme" className="control-label">Rating<span className="required"/> :</label>
							</div>
								<div className="col-md-10">
									<fieldset className="rating">
										<input type="radio" id="star5" name="rating" value="5" onChange={this.onChangeRating}/><label className = "full" for="star5" title="Awesome - 5 stars"></label>
										<input type="radio" id="star4half" name="rating" value="4.5" onChange={this.onChangeRating}/><label className="half" for="star4half" title="Pretty good - 4.5 stars"></label>
										<input type="radio" id="star4" name="rating" value="4" onChange={this.onChangeRating}/><label className = "full" for="star4" title="Pretty good - 4 stars"></label>
										<input type="radio" id="star3half" name="rating" value="3.5" onChange={this.onChangeRating}/><label className="half" for="star3half" title="Meh - 3.5 stars"></label>
										<input type="radio" id="star3" name="rating" value="3" onChange={this.onChangeRating}/><label className = "full" for="star3" title="Meh - 3 stars"></label>
										<input type="radio" id="star2half" name="rating" value="2.5" onChange={this.onChangeRating}/><label className="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
										<input type="radio" id="star2" name="rating" value="2" onChange={this.onChangeRating}/><label className = "full" for="star2" title="Kinda bad - 2 stars"></label>
										<input type="radio" id="star1half" name="rating" value="1.5" onChange={this.onChangeRating}/><label className="half" for="star1half" title="Meh - 1.5 stars"></label>
										<input type="radio" id="star1" name="rating" value="1" onChange={this.onChangeRating}/><label className = "full" for="star1" title="Sucks big time - 1 star"></label>
										<input type="radio" id="starhalf" name="rating" value=".5" onChange={this.onChangeRating}/><label className="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
									</fieldset>
								</div>
							</div>
							</div>
						  </div>
						</div>
						<div className="row">
						  <div className="col-md-12">
							<div className="form-group no-margin">
							  <label for="field-7" className="control-label">Comment<span className="required"/></label>
							  
							  <textarea className="form-control" id="field-7" onChange={this.onChangeRating} name = "feedback" placeholder=""></textarea>
							</div>
						  </div>
						</div>
					  </div>
					  <div className="modal-footer">
						<button type="button" id = "ratingFormCancel" className="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
						<button type="button" className="btn btn-success waves-effect waves-light" onClick = {this.sendRating}>Send</button>
					  </div>
					</div>
				  </div>
				</div>
				
				
            </div>
        );        
    }
}
export default connect(state=>({ userData: state.userData, userProfile: state.userProfile }))(ProfileDetails)