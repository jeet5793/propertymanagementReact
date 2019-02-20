import React from 'react'
import API_URL from "../../../app-config";
import Cookies from 'js-cookie';
import DatePicker from 'react-date-picker';
import moment from 'moment';
import swal from 'sweetalert';
import $ from 'jquery'
import { Redirect } from 'react-router';
export default class Agent extends React.Component{
	constructor(props){
		super(props);
		this.state= {
			userData:Cookies.get('profile_data'),
			bgForm:{
				first_name:'',
				last_name:'',
				dob:'',
				gender:'',
				address:'',
				city:'',
				state:'',
				zip_code:'',
				mobile_no:'',
				email:'',
				SSN_EIN:'',
				packageid:'',
				session_id:'',
				user_id:'',
				login_user_id:''
			},
			redirect:false,
		bgvPkgInfo:[]		
		};
		 this.onChangeBGVHandler=this.onChangeBGVHandler.bind(this);
	   this.onClickBGVFormSubmit = this.onClickBGVFormSubmit.bind(this);
	   this.handleDobChange = this.handleDobChange.bind(this);
	   this.bgvChargeInfo = this.bgvChargeInfo.bind(this);
	}
	handleDobChange(date) {
		this.setState({
			bgForm: { dob: date }
		});
	}

	componentWillReceiveProps(props){
	
		if (props.profileData.dob) {
			var dobDate = new Date(props.profileData.dob)
			this.setState({
				bgForm: { dob: dobDate }
			})
		}
	}
	 onChangeBGVHandler(e){
		 //alert(JSON.stringify(e.target.name))
		 const bgFields = this.state.bgForm;
		 if (e.target.name === "first_name")
			bgFields.first_name = e.target.value;
		 if(e.target.name=='last_name')
			 bgFields.last_name=e.target.value;
		 if(e.target.name=='DOB')
			 bgFields.DOB=e.target.value;
		 if(e.target.name=='gender')
			 bgFields.gender=e.target.value;
		 if(e.target.name=='address')
			 bgFields.address=e.target.value;
		 if(e.target.name=='city')
			 bgFields.city=e.target.value;
		 if(e.target.name=='state')
			 bgFields.state=e.target.value;
		 if(e.target.name=='zip_code')
			 bgFields.zip_code=e.target.value;
		 if(e.target.name=='mobile_no')
			 bgFields.mobile_no=e.target.value;
		 if(e.target.name=='email')
			 bgFields.email=e.target.value;
		 if(e.target.name=='SSN_EIN')
			 bgFields.SSN_EIN=e.target.value;
		 if(e.target.name=='packageid'){
			  bgFields.packageid=e.target.value;
			  this.bgvChargeInfo(e.target.value);
		 }
			
		 
	     bgFields.user_id=this.props.profileData.assets_id;
		 bgFields.login_user_id = JSON.parse(this.state.userData).assets_id;
			// bgFields.session_id=this.props.profileData.session_id;
			this.setState({bgForm:bgFields});
		 // console.log(this.state.bgForm);
	 }
	 bgvChargeInfo(pkgId){
		 // $("#loaderDiv").show();
				fetch(`${API_URL}assetsapi/bgv_info_by/`+pkgId, {
				method: 'get',        
				}).then((response) => {
				  return response.json();
				}).then((data) => {
				  //console.log('dataaaa:  ', data);
				  if(data)
				  {
					    // $("#loaderDiv").hide();
						
					   this.setState({bgvPkgInfo:data.bgvPkgInfo});
					   
								
				  }
				
				}).catch((error) => {
				  console.log('error: ', error);
				}); 
	 }
	 onClickBGVFormSubmit(){
		 // console.log('opts'+JSON.stringify(this.state.bgForm))
		 var opts = Object.assign(this.props.profileData,this.state.bgForm);
		
		 // this.props.history.push('/')
		 // console.log('opts'+JSON.stringify(opts))
		 if(!opts.first_name)
		 {
			 alert('First Name should not be blank');
			 return;
		 }
		 if(!opts.last_name)
		 {
			 alert('Last Name should not be blank');
			 return;
		 }
		  if(!opts.dob)
		 {
			 alert('D.O.B should not be blank');
			 return;
		 }
		 
		  if(!opts.address)
		 {
			 alert('Address should not be blank');
			 return;
		 }
		  if(!opts.city)
		 {
			 alert('City should not be blank');
			 return;
		 }
		  if(!opts.state)
		 {
			 alert('State should not be blank');
			 return;
		 }
		  if(!opts.zip_code)
		 {
			 alert('Zip Code should not be blank');
			 return;
		 }
		  if(!opts.mobile_no)
		 {
			 alert('Phone should not be blank');
			 return;
		 }
		  if(!opts.email)
		 {
			 alert('Email should not be blank');
			 return;
		 }
		 
		  if(!opts.SSN_EIN)
		 {
			 alert('SSN should not be blank');
			 return;
		 }
		  if(!opts.packageid)
		 {
			 alert('Package must be selected');
			 return;
		 }
		if(this.state.bgForm.SSN_EIN==undefined){
			
			var crypto = require('crypto');
			var ssnText = this.props.profileData.SSN_EIN;
			var key = "315a5504d921f8327f73a356d2bbcbf1";
			var iv = new Buffer(ssnText.substring(0,32), 'hex');
			var dec = crypto.createDecipheriv('aes-256-cbc',key,iv);
			var decrypted = Buffer.concat([dec.update(new Buffer(ssnText.substring(32),'base64')), dec.final()]);
			
			opts.SSN_EIN = decrypted.toString();
		}
		
			opts.bgvAmt = this.state.bgvPkgInfo.amount;
		
		
		 localStorage.setItem("opts", JSON.stringify(opts));
		 this.setState({redirect: true})
		// this.props.history.push('/bgvpayment');
		 // window.location.href="/bgvpayment";
			 // console.log(JSON.stringify(opts));
			 /* document.getElementById("bgvFormCancel").click();
				 $("#loaderDiv").show();
				fetch(`${API_URL}assetsapi/background_verification`, {
				method: 'post',        
				body: JSON.stringify(opts)
				}).then((response) => {
				  return response.json();
				}).then((data) => {
				  //console.log('dataaaa:  ', data);
				  if(data)
				  {
					    $("#loaderDiv").hide();
						
					   
					   $("#actionType").val("Yes");
					   $("#hiddenURL").val("owner-agent");
					   $(".confirm-body").html(data.msg);
					   $("#BlockUIConfirm").show();
						// swal("Assets Watch", data.msg);
						 // window.location.reload();
							// window.location.href="/bgvpayment"
								
				  }
				
				}).catch((error) => {
				  console.log('error: ', error);
				}); */
		 
		 
      }
	
	
	  hideModel()
	  {
			var $=window.$;
			$(".modal-backdrop").hide();
			$("#background-verifi").hide();
			$("#bgvbackground").hide();
		}
render(){
if (this.state.redirect){

            return (<Redirect to={{
                pathname: '/bgvpayment',
                
            }} />)
		}
		var crypto = require('crypto');
		var ssnText = this.props.profileData.SSN_EIN;
		if(ssnText!=undefined){
			var key = "315a5504d921f8327f73a356d2bbcbf1";
			var iv = new Buffer(ssnText.substring(0,32), 'hex');
			var dec = crypto.createDecipheriv('aes-256-cbc',key,iv);
			var decrypted = Buffer.concat([dec.update(new Buffer(ssnText.substring(32),'base64')), dec.final()]);
			var decryptedText = decrypted.toString();
			//console.log('DECRYPTED TEXT: '+decryptedText);
		}
		//console.log('ssnText'+decrypted)
	return(
			
			<div>
			<div className="blockui-mask-aws" id="bgvbackground" style={{display: "none"}}></div>
			<div id="background-verifi" className="modal fade show in" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: "none"}}>
				<div className="modal-dialog modal-lg">
				<div className="modal-content">
				  <div className="modal-header">
					
					<h4 className="modal-title">Background Verification</h4>
				  </div>
				  <div className="modal-body">
					<div className="row">
					  <div className="col-md-12">
						<div className="form-group">
						  <div className="row">
							<div className="col-md-2 required">
							  <label className="control-label">First Name</label>
							</div>
							<div className="col-md-4">
							  <input type="text" name="first_name" className="form-control" onChange={this.onChangeBGVHandler} value={this.state.bgForm.first_name || this.props.profileData.first_name || ''} />
							</div>
							<div className="col-md-2 required">
							  <label className="control-label" >Last Name</label>
							</div>
							<div className="col-md-4">
								<input type="text" className="form-control" name="last_name" onChange={this.onChangeBGVHandler} value={this.state.bgForm.last_name || this.props.profileData.last_name || ''} />
							</div>
						  </div>
						</div>
						<div className="form-group">
						  <div className="row">
							<div className="col-md-2 required">
							  <label className="control-label">D.O.B</label>
							</div>
							<div className="col-md-4" id="bgv">
											<DatePicker className="form-control"
												onChange={this.handleDobChange}
												value={this.state.bgForm.dob}
											/>
							</div>
							<div className="col-md-2 required">
							  <label className="control-label">Gender</label>
							</div>
							
							<div className="col-md-4">
							  <select className="form-control" value={this.state.bgForm.gender || this.props.profileData.gender || ''} name="gender" onChange={this.onChangeBGVHandler}>
								  
								  <option value="Male" >Male</option>
								  <option value="Female" >Female</option>
								</select>
							</div>
						  </div>
						</div>
						<div className="form-group">
						  <div className="row">
							<div className="col-md-2 required">
							  <label className="control-label">Address</label>
							</div>
							<div className="col-md-4">
							  <input type="text" name="address"  onChange = {this.onChangeBGVHandler} className="form-control"  />
							</div>
							<div className="col-md-2 required">
							  <label className="control-label">City</label>
							</div>
							<div className="col-md-4">
							  <input type="text" name="city" className="form-control" onChange={this.onChangeBGVHandler} value={this.state.bgForm.city || this.props.profileData.city || ''} />
							</div>
						  </div>
						</div>
						<div className="form-group">
						  <div className="row">
							<div className="col-md-2 required">
							  <label className="control-label">State</label>
							</div>
							<div className="col-md-4">
							  <input type="text" name="state" className="form-control" onChange={this.onChangeBGVHandler} value={this.state.bgForm.state || this.props.profileData.state || ''} />
							</div>
							<div className="col-md-2 required">
							  <label className="control-label">ZIP Code</label>
							</div>
							<div className="col-md-4">
							  <input type="text" className="form-control" name="zip_code" onChange={this.onChangeBGVHandler} value={this.state.bgForm.zip_code || this.props.profileData.zip_code || ''} />
							</div>
						  </div>
						</div>
						<div className="form-group">
						  <div className="row">
							<div className="col-md-2 required">
							  <label className="control-label">Phone</label>
							</div>
							<div className="col-md-4">
							  <input type="text" className="form-control" name="mobile_no"  id="mobile-no" placeholder="" value={this.state.bgForm.mobile_no || this.props.profileData.mobile_no || ''}  onChange={this.onChangeBGVHandler} />
							</div>
							<div className="col-md-2 required">
							  <label className="control-label">Email</label>
							</div>
							<div className="col-md-4">
							 
							  <input type="email" className="form-control" name="email"  id="email"  value={this.state.bgForm.email || this.props.profileData.email || ''} onChange={this.onChangeBGVHandler} placeholder="" />
							</div>
						  </div>
						</div>
						<div className="form-group">
						  <div className="row">
							<div className="col-md-2 required">
							  <label className="control-label">SSN</label>
							</div>
							<div className="col-md-4">
							  <input type="password" className="form-control" name="SSN_EIN"  id="SSN_EIN" value={this.state.bgForm.SSN_EIN || decryptedText || ''} onChange={this.onChangeBGVHandler} placeholder="" />
							</div>
						  </div>
						</div>
					  </div>
					</div>
					<div className="row">
					  <div className="col-md-12">
						<div className="form-group no-margin">
						 <h5>Packages<span className="required"/></h5>
						 {this.props.bgvInfo && this.props.bgvInfo.map((item)=>(
							 <div className="col-md-10" key={item.packageId}>
									<div className="radio radio-custom">
									
									  <input
										type="radio"
										name="packageid"
										id={item.packageId}
										value={item.packageId}
										onChange={this.onChangeBGVHandler}
									  />
									   
									<label htmlFor = {item.packageId}> {item.package} - ${item.amount} : {item.report} </label>
									</div>
								  </div>
								 ))} 
								  {/*  <div className="col-md-10">
										<div className="radio radio-custom">
										  <input
											type="radio"
											onChange={this.onChangeBGVHandler}
											name="packageid"
											 id="Silver"
											value="12"
										  />
										  <label htmlFor="Silver">Silver Package - $18.14 : 1 Credit Report + 1 Eviction Report </label>
										</div>
									  </div>

							  <div className="col-md-10">
								<div className="radio radio-custom">
								  <input
									type="radio"
									name="packageid"
									onChange={this.onChangeBGVHandler}
									 id="Gold"
									value="13"
								  />
								  <label htmlFor="Gold">Gold Package - $26.78 : 1 County Criminal + 1 Credit Report + 1 Eviction Report </label>
								</div>
								  </div>   */}
						</div>
					  </div>
					</div>
				  </div>
				  <div className="modal-footer">
					<button type="button" id = "bgvFormCancel"  className="btn btn-secondary waves-effect" onClick={this.hideModel} data-dismiss="modal">Close</button>
					<button type="button" className="btn btn-success waves-effect waves-light" onClick={this.onClickBGVFormSubmit}>Submit</button>
				  </div>
				</div>
			  </div>
			</div>
			</div>
		);		
	}
}