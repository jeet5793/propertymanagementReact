import React from 'react'
import API_URL from "../../../app-config";
import Cookies from 'js-cookie';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import swal from 'sweetalert';
import $ from 'jquery'
export default class Agent extends React.Component{
	constructor(props){
		super(props);
		this.state= {
			userData:Cookies.get('profile_data'),
			bgForm:{
				first_name:'',
				last_name:'',
				DOB:'',
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
			}
				
		};
		 this.onChangeBGVHandler=this.onChangeBGVHandler.bind(this);
	   this.onClickBGVFormSubmit = this.onClickBGVFormSubmit.bind(this);
	   this.handleDobChange = this.handleDobChange.bind(this);
	}
	handleDobChange(date) {
		// alert(date)
		console.log('DATE ', date);
		 this.setState({
			bgForm:{DOB:date}
		 });
	 }
	 onChangeBGVHandler(e){
		

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
		 if(e.target.name=='packageid')
			 bgFields.packageid=e.target.value;
		
	     bgFields.user_id=this.props.profileData.assets_id;
		 bgFields.login_user_id = JSON.parse(this.state.userData).assets_id;
			// bgFields.session_id=this.props.profileData.session_id;
			this.setState({bgForm:bgFields});
		 // console.log(this.state.bgForm);
	 }
	 onClickBGVFormSubmit(){
		 console.log('opts'+JSON.stringify(this.state.bgForm))
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
		  if(!opts.DOB)
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
		localStorage.setItem("opts", JSON.stringify(opts));
		 window.location.href="/bgvpayment";
			 // console.log(opts);
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
	 
	 componentDidMount(){
		 if(this.props.profileData.dob)
		 {
			 var dobDate = new Date(this.props.profileData.dob.replace( /(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"))
						var d = new Date(dobDate);
						var DOB=getFormattedString(d).slice(0,9);
						function getFormattedString(d){
							return d.getFullYear() + "-"+(d.getMonth()+1) +"-"+d.getDate() + ' '+d.toString().split(' ')[4];
						}
						if(DOB){
							this.setState({
								bgForm:{DOB:moment(DOB) }
							 });
						}else{
							this.setState({
								bgForm:{DOB:moment() }
							 });
						}
		 }

	 }
	  hideModel()
		{
			var $=window.$;
			$(".modal-backdrop").hide();
		}
render(){

	return(
			<div id="background-verifi" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: "none"}}>
				<div className="modal-dialog modal-lg">
				<div className="modal-content">
				  <div className="modal-header">
					<button type="button" onClick={this.hideModel} className="close" data-dismiss="modal" aria-hidden="true">×</button>
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
							  <input type="text" name="first_name" className="form-control" onChange={this.onChangeBGVHandler} value={this.state.bgForm.first_name || this.props.profileData.first_name} />
							</div>
							<div className="col-md-2 required">
							  <label className="control-label" >Last Name</label>
							</div>
							<div className="col-md-4">
								<input type="text" className="form-control" name="last_name" onChange={this.onChangeBGVHandler} value={this.state.bgForm.last_name || this.props.profileData.last_name} />
							</div>
						  </div>
						</div>
						<div className="form-group">
						  <div className="row">
							<div className="col-md-2 required">
							  <label className="control-label">D.O.B</label>
							</div>
							<div className="col-md-4">
							  <DatePicker id="dob" className="form-control" 
								dateFormat="MM-DD-YYYY"
									 selected={this.state.bgForm.DOB}
									 onChange={this.handleDobChange}
									 
								/>
							</div>
							<div className="col-md-2 required">
							  <label className="control-label">Gender</label>
							</div>
							
							<div className="col-md-4">
							  <select className="form-control" value={this.state.bgForm.gender || this.props.profileData.gender} name="gender" onChange={this.onChangeBGVHandler}>
								  
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
							  <input type="text" name="address" value={this.state.bgForm.gender} onChange = {this.onChangeBGVHandler} className="form-control"  />
							</div>
							<div className="col-md-2 required">
							  <label className="control-label">City</label>
							</div>
							<div className="col-md-4">
							  <input type="text" name="city" className="form-control" onChange={this.onChangeBGVHandler} value={this.state.bgForm.city || this.props.profileData.city} />
							</div>
						  </div>
						</div>
						<div className="form-group">
						  <div className="row">
							<div className="col-md-2 required">
							  <label className="control-label">State</label>
							</div>
							<div className="col-md-4">
							  <input type="text" name="state" className="form-control" onChange={this.onChangeBGVHandler} value={this.state.bgForm.state || this.props.profileData.state} />
							</div>
							<div className="col-md-2 required">
							  <label className="control-label">ZIP Code</label>
							</div>
							<div className="col-md-4">
							  <input type="text" className="form-control" name="zip_code" onChange={this.onChangeBGVHandler} value={this.state.bgForm.zip_code || this.props.profileData.zip_code} />
							</div>
						  </div>
						</div>
						<div className="form-group">
						  <div className="row">
							<div className="col-md-2 required">
							  <label className="control-label">Phone</label>
							</div>
							<div className="col-md-4">
							  <input type="text" className="form-control" name="mobile_no"  id="mobile-no" placeholder="" value={this.state.bgForm.mobile_no || this.props.profileData.mobile_no}  onChange={this.onChangeBGVHandler} />
							</div>
							<div className="col-md-2 required">
							  <label className="control-label">Email</label>
							</div>
							<div className="col-md-4">
							 
							  <input type="email" className="form-control" name="email"  id="email"  value={this.state.bgForm.email || this.props.profileData.email} onChange={this.onChangeBGVHandler} placeholder="" />
							</div>
						  </div>
						</div>
						<div className="form-group">
						  <div className="row">
							<div className="col-md-2 required">
							  <label className="control-label">SSN</label>
							</div>
							<div className="col-md-4">
							  <input type="text" className="form-control" name="SSN_EIN"  id="SSN_EIN" value={this.state.bgForm.SSN_EIN || this.props.profileData.SSN_EIN} onChange={this.onChangeBGVHandler} placeholder="" />
							</div>
						  </div>
						</div>
					  </div>
					</div>
					<div className="row">
					  <div className="col-md-12">
						<div className="form-group no-margin">
						 <h5>Packages<span className="required"/></h5>
							 <div className="col-md-8">
									<div className="radio radio-custom">
									  <input
										type="radio"
										name="packageid"
										id="packageid"
										value="14"
										onChange={this.onChangeBGVHandler}
									  />
									  <label HTMLFor="packageid"> Bronze Package - $8.16 : 1 Credit Report </label>
									</div>
								  </div>
								  <div className="col-md-8">
										<div className="radio radio-custom">
										  <input
											type="radio"
											onChange={this.onChangeBGVHandler}
											name="packageid"
											id="ownerid"
											value="12"
										  />
										  <label HTMLFor="packageid">Silver Package - $18.14 : 1 Credit Report + 1 Eviction Report </label>
										</div>
									  </div>

							  <div className="col-md-8">
								<div className="radio radio-custom">
								  <input
									type="radio"
									name="packageid"
									onChange={this.onChangeBGVHandler}
									id="packageid"
									value="13"
								  />
								  <label HTMLFor="packageid">Gold Package - $26.78 : 1 County Criminal + 1 Credit Report + 1 Eviction Report </label>
								</div>
							  </div>

							  
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
		);		
	}
}