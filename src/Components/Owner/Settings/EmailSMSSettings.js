import React from 'react'
import API_URL from "../../../app-config";
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import swal from 'sweetalert';
import $ from 'jquery';
 class EmailSMSSettings extends React.Component{
	constructor(props){
    super(props)
    this.formSubmitEmailSms=this.formSubmitEmailSms.bind(this)
    this.state={
		userInfo:props.userData,
		 userData:Cookies.get('profile_data'),
		  settingInfo:[],
		  selectedOption: '',
		   selectedOptionSMS: ''
      }
      this.onChangeHandlerEmail=this.onChangeHandlerEmail.bind(this);
	  this.onChangeHandlerSms=this.onChangeHandlerSms.bind(this);
	}
	onChangeHandlerEmail(e){
		this.setState({
      selectedOption: e.currentTarget.value
    });
  }
  onChangeHandlerSms(e){
		this.setState({
      selectedOptionSMS: e.currentTarget.value
    });  
  }
  componentDidMount(){
	  $("#loaderDiv").show();
	  // console.log('fawftgtsyghtjhtrhyt');
	  fetch(`${API_URL}assetsapi/get_settings_information/${JSON.parse(this.state.userData).assets_id}/${JSON.parse(this.state.userData).session_id}`,{method:'GET'}).then((res) => {
          return res.json();
        }).then((rslt) => {
          // console.log('dataaaa:  ', data);
		  $("#loaderDiv").hide();
          if(rslt)
          {
			this.setState({settingInfo:rslt.settings_information}); 
				// console.log(this.state.settingInfo);	
          }
       
        }).catch((error) => {
          console.log('error: ', error);
        });  
	  
	  }
  
  formSubmitEmailSms(){
	     //console.log('settingInfo'+this.state.settingInfo);
		 if(this.state.settingInfo==undefined){
			 
			 var ObjectToSend={
				 email:this.state.selectedOption,
				 sms:this.state.selectedOptionSMS
			 }
		 }else{
			 var ObjectToSend={
				 email:(this.state.selectedOption==''?this.state.settingInfo.email:this.state.selectedOption ),
				 sms:(this.state.selectedOptionSMS==''?this.state.settingInfo.sms:this.state.selectedOptionSMS )
			 }
			 // var ObjectToSend = Object.assign(this.state.settingInfo,Objectdata);
		 }
		 ObjectToSend.assets_id= JSON.parse(this.state.userData).assets_id;
		ObjectToSend.session_id= JSON.parse(this.state.userData).session_id;
		    console.log('ObjectToSend'+JSON.stringify(ObjectToSend));
       //var ObjectToSend=Object.assign(this.state.settingInfo,this.state.EmailSmsSettings);
// var ObjectToSend=this.state.EmailSmsSettings;

		     $("#loaderDiv").show();
		  fetch(`${API_URL}assetsapi/email_sms_notification/`, {
        method: 'post',        
        body: JSON.stringify(ObjectToSend)
        }).then((response) => {
          return response.json();
        }).then((data) => {
          // console.log('dataaaa:  ', data);
          if(data)
          {
				
			$("#loaderDiv").hide();
					   
					   $("#actionType").val("No");
					   // $("#hiddenURL").val("settings");
					   $(".confirm-body").html(data.msg);
					   $("#BlockUIConfirm").show();
					   
					  this.componentDidMount;
          }
       
        }).catch((error) => {
          console.log('error: ', error);
        });    
	  
      
      }
  
  
    render(){

	 // console.log(this.state);
    // console.log(this.props);
        return(
		
            <div className="tab-pane fade show active" style={{width:"100%"}} id="email-sms-settings">
						<div className="form-group">
						  <div className="row">
							<div className="col-lg-2 col-md-3 col-sm-3 required">
							  <label htmlFor="emailSetting">Email Notification</label>
							</div>
							<div className="col-lg-2 col-md-3 col-sm-3">
								<div className="radio radio-custom">
								  <input
									type="radio"
									name="email"
									onChange={this.onChangeHandlerEmail}
									 id="emailOn"
									 value="ON"
									 checked={this.state.selectedOption === "ON" || (this.state.settingInfo && this.state.settingInfo.email==='ON')}
									 // defaultChecked 
									    //checked={this.state.settingInfo?(this.state.settingInfo.email==='ON'):(this.state.EmailSMSSettings.email=='ON')} 
									 
								  />
								  <label htmlFor="emailOn">On </label>
								</div>
							</div>
							<div className="col-lg-2 col-md-3 col-sm-3">
								<div className="radio radio-custom">
								  <input
									type="radio"
									name="email"
									onChange={this.onChangeHandlerEmail}
									 id="emailOff"
									 value="OFF"
									 checked={this.state.selectedOption === "OFF" || (this.state.settingInfo && this.state.settingInfo.email==='OFF')}
									 // checked={this.state.EmailSmsSettings.email==='OFF' || (this.state.settingInfo && this.state.settingInfo.email==='OFF')} 
									 //checked={this.state.EmailSMSSettings && this.state.EmailSMSSettings.email=='OFF'} 
								  />
								  <label htmlFor="emailOff">Off </label>
								</div>
							</div>
							
						 </div>
				</div>
				<div className="form-group">
						  <div className="row">
							<div className="col-lg-2 col-md-3 col-sm-3 required">
							  <label htmlFor="smsSetting">SMS Notification</label>
							</div>
							<div className="col-lg-2 col-md-3 col-sm-3">
								<div className="radio radio-custom">
								  <input
									type="radio"
									name="sms"
									onChange={this.onChangeHandlerSms}
									 id="smsOn"
									 // defaultChecked 
									 value="ON"
									  checked={this.state.selectedOptionSMS === "ON" || (this.state.settingInfo && this.state.settingInfo.sms==='ON')}
									  // checked={this.state.EmailSmsSettings.sms='ON' || (this.state.settingInfo && this.state.settingInfo.sms==='ON')} 
								  />
								  <label htmlFor="smsOn">On </label>
								</div>
							</div>
							<div className="col-lg-2 col-md-3 col-sm-3">
								<div className="radio radio-custom">
								  <input
									type="radio"
									name="sms"
									onChange={this.onChangeHandlerSms}
									 id="smsOff"
									 value="OFF"
									  checked={this.state.selectedOptionSMS === "OFF" || (this.state.settingInfo && this.state.settingInfo.sms==='OFF')}
									   // checked={this.state.EmailSmsSettings.sms==='OFF' || (this.state.settingInfo &&  this.state.settingInfo.sms==='OFF')} 
								  />
								  <label htmlFor="smsOff">Off </label>
								</div>
							</div>
							
						 </div>
				</div>
                 <div> {/* style={{display: '-webkit-box'}}} */}
                    <div className="col-md-12 text-right">
						  <button type="button" className="btn btn-primary stepy-finish text-right" onClick={this.formSubmitEmailSms}>Submit</button>
				    </div>
                </div>
            </div>
        );
    }
}
export default connect(state=>({ userData: state.userData }))(EmailSMSSettings)