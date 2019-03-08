import React from 'react'
//import '../../../css/theme.css'
//import '../../../css/plans.css'
import $ from 'jquery';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import API_URL from '../../../app-config';
import Cookies from 'js-cookie';
import { setUser } from '../../../actions';

export default class Plans extends React.Component{
    constructor(props) {
        super(props);
        this.head=React.createRef();
        this.state = {}
    }

	componentDidMount(){
		$("#loaderDiv").show();
        var search=window.location.search;
        var type=search.replace('?Datatype=','')
        var panelType='';
        panelType=type.replace('type=','').toLocaleUpperCase()
        this.head.current.innerHTML=panelType
        fetch(`${API_URL}assetsapi/plan`)
        .then(response=>{
            response.json().then(plans=>{
				$("#loaderDiv").hide();
                if(type==='owner') {
                    this.setState({planData:plans.plan.Owner})
                }
                if(type==='agent')
                this.setState({planData:plans.plan.Agent})
                if(panelType==='tenant')
                this.setState({planData:plans.plan.Agent})
            })
        })
    setTimeout(function(){ $('#tzloadding').remove(); }, 2000);

    $('html, body').animate({scrollTop: 0}, 800);
  }
	render(){
    var userid = localStorage.getItem('userid')
        const { planData } = this.state;
        // console.log("plan data"+JSON.stringify(planData))
        if(this.props.location.state!==undefined)
        {
        // const regPlans=this.props.location.state
        // this.getPropertyDetails (propertyDetail.id)
        }
        else
        {
          // const propertyDetail
        }
		return(
<div className="mg-top-129">
{this.plansStyle}
<div className="tz-Breadcrumb">
    <div className="tzOverlayBreadcrumb">
    <div className="container">
        {/* <h1>Owner Plans </h1> */}
        <h1 ref={this.head}>head</h1>

    </div>
    </div>
</div>
<div className="container seprate-plan">
    <div className="tz_page_content">
    <div className="post-1081 page type-page status-publish hentry">

        <div className="bootstrap-wrapper">
        <div className="text-center">
                        {
                            planData  ? (
                                <div>
                                    {
                                        planData['Basic'] ? (
                                            <div className="col-md-3">
                                                <ul id="price-t-5" className="">
                                                    <li>
                                                        <h2>Basic</h2>
                                                        <h3>$ {planData['Basic'].plan_details.per_month}/{planData['Basic'].plan_details.per_annum} <br /><span> {Number(planData['Basic'].plan_details.per_annum) === 0 ? 'Free' : 'per month/Annum'}  </span></h3>
                                                        <ul>
														{ planData['Basic'].features.manage_properties_upto ? <li className=" first even">{planData['Basic'].features.manage_properties_upto.feature_name} - {planData['Basic'].features.manage_properties_upto.feature_unit=='Limit'?(planData['Basic'].features.manage_properties_upto.limit_upto!=0?planData['Basic'].features.manage_properties_upto.limit_upto:'Free'):planData['Basic'].features.manage_properties_upto.confirmation}</li> : null }
															
															{ planData['Basic'].features.upload_image_per_property ? <li className=" first even">{planData['Basic'].features.upload_image_per_property.feature_name} - {planData['Basic'].features.upload_image_per_property.feature_unit=='Limit'?(planData['Basic'].features.upload_image_per_property.limit_upto!=0?planData['Basic'].features.upload_image_per_property.limit_upto:'Free'):planData['Basic'].features.upload_image_per_property.confirmation}</li> : null }
															
															{ planData['Basic'].features.create_agreement ? <li className=" first even">{planData['Basic'].features.create_agreement.feature_name} - {planData['Basic'].features.create_agreement.feature_unit=='Limit'?(planData['Basic'].features.create_agreement.limit_upto!=0?planData['Basic'].features.create_agreement.limit_upto:'Free'):planData['Basic'].features.create_agreement.confirmation}</li> : null }
															
															{ planData['Basic'].features.send_agreement_for_signature ? <li className=" first even">{planData['Basic'].features.send_agreement_for_signature.feature_name} - {planData['Basic'].features.send_agreement_for_signature.feature_unit=='Limit'?(planData['Basic'].features.send_agreement_for_signature.limit_upto!=0?planData['Basic'].features.send_agreement_for_signature.limit_upto:'Free'):planData['Basic'].features.send_agreement_for_signature.confirmation}</li> : null }
															
															{ planData['Basic'].features.basic_fields ? <li className=" first even">{planData['Basic'].features.basic_fields.feature_name} - {planData['Basic'].features.basic_fields.feature_unit=='Limit'?(planData['Basic'].features.basic_fields.limit_upto!=0?planData['Basic'].features.basic_fields.limit_upto:'Free'):planData['Basic'].features.basic_fields.confirmation}</li> : null }
															
                                                            { planData['Basic'].features.mobile_app ? <li className=" first even">{planData['Basic'].features.mobile_app.feature_name} - {planData['Basic'].features.mobile_app.feature_unit=='Limit'?(planData['Basic'].features.mobile_app.limit_upto!=0?planData['Basic'].features.mobile_app.limit_upto:'Free'):planData['Basic'].features.mobile_app.confirmation}</li> : null }
															
															{ planData['Basic'].features.reminders_notifications ? <li className=" first even">{planData['Basic'].features.reminders_notifications.feature_name} - {planData['Basic'].features.reminders_notifications.feature_unit=='Limit'?(planData['Basic'].features.reminders_notifications.limit_upto!=0?planData['Basic'].features.reminders_notifications.limit_upto:'Free'):planData['Basic'].features.reminders_notifications.confirmation}</li> : null }
															
															{ planData['Basic'].features.in_person_signature ? <li className=" first even">{planData['Basic'].features.in_person_signature.feature_name} - {planData['Basic'].features.in_person_signature.feature_unit=='Limit'?(planData['Basic'].features.in_person_signature.limit_upto!=0?planData['Basic'].features.in_person_signature.limit_upto:'Free'):planData['Basic'].features.in_person_signature.confirmation}</li> : null }
															
															{ planData['Basic'].features.branding ? <li className=" first even">{planData['Basic'].features.branding.feature_name} - {planData['Basic'].features.branding.feature_unit=='Limit'?(planData['Basic'].features.branding.limit_upto!=0?planData['Basic'].features.branding.limit_upto:'Free'):planData['Basic'].features.branding.confirmation}</li> : null }
															
															{ planData['Basic'].features.collect_payments ? <li className=" first even">{planData['Basic'].features.collect_payments.feature_name} - {planData['Basic'].features.collect_payments.feature_unit=='Limit'?(planData['Basic'].features.collect_payments.limit_upto!=0?planData['Basic'].features.collect_payments.limit_upto:'Free'):planData['Basic'].features.collect_payments.confirmation}</li> : null }

															{ planData['Basic'].features.bgv_screening ? <li className=" first even">{planData['Basic'].features.bgv_screening.feature_name} - {planData['Basic'].features.bgv_screening.feature_unit=='Limit'?(planData['Basic'].features.bgv_screening.limit_upto!=0?planData['Basic'].features.bgv_screening.limit_upto:'Free'):planData['Basic'].features.bgv_screening.confirmation}</li> : null }
															
															{ planData['Basic'].features.document_upload ? <li className=" first even">{planData['Basic'].features.document_upload.feature_name} - {planData['Basic'].features.document_upload.feature_unit=='Limit'?(planData['Basic'].features.document_upload.limit_upto!=0?planData['Basic'].features.document_upload.limit_upto:'Free'):planData['Basic'].features.document_upload.confirmation}</li> : null }
															
															{ planData['Basic'].features.customize_template ? <li className=" first even">{planData['Basic'].features.customize_template.feature_name} - {planData['Basic'].features.customize_template.feature_unit=='Limit'?(planData['Basic'].features.customize_template.limit_upto!=0?planData['Basic'].features.customize_template.limit_upto:'Free'):planData['Basic'].features.customize_template.confirmation}</li> : null }
															
                                                        </ul>
														
                                                        <div className="submit-btn"> <a href="#">Free</a>
														<div className="radio radio-custom">
																	<input type="radio" name="plan_month_year" id="basic" val="per_month"  value={'per_month'} 
																	onClick={() => {
                                                          let setPlanID = planData['Basic'].plan_details.plan_id
                                                          let getPlanId = setPlanID.toString();
														    $("#loaderDiv").show();
															 fetch(`${API_URL}assetsapi/basic_plan_update/`+userid+'/'+getPlanId)
																  .then(res => res.json())
																  .then(
																	(result) => {
																	    $("#loaderDiv").hide();
																		// $("#actionType").val("Yes");
																		// $("#hiddenURL").val("/");
																	   // $(".confirm-body").html(result.msg);
																	   // $("#SBlockUIConfirm").show();
																	   fetch(`${API_URL}`+'assetsapi/payment/'+userid+'/'+getPlanId+'/basic')
																		  .then(res => res.json())
																		  .then(
																			(response) => {
											
																			  if(response){
																				  var crypto = require('crypto');
																					var passText = response.user_detail.password;
																					if(passText!=undefined){
																						var key = "315a5504d921f8327f73a356d2bbcbf1";
																						var iv = new Buffer(passText.substring(0,32), 'hex');
																						var dec = crypto.createDecipheriv('aes-256-cbc',key,iv);
																						var decrypted = Buffer.concat([dec.update(new Buffer(passText.substring(32),'base64')), dec.final()]);
																						var decryptedPass = decrypted.toString();
																						//console.log('DECRYPTED TEXT: '+decrypted.toString());
																					}
																				var opts = {"email":response.user_detail.email,"password":decryptedPass,"assets_type":response.user_detail.assets_type};
										// console.log(JSON.stringify(this.state.opts));
										   fetch(`${API_URL}assetsapi/login/`, {
													method: 'post',
													body: JSON.stringify(opts)
												})
													  .then(res => res.json())
													  .then(
														(data) => {
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
																			//this.props.setUser(data.userdata, result.profile);
																			Cookies.set("profile_data", data.userdata);

																			if(result.profile.assets_type==="1"){
																			 // this.props.history.push('/user')
																						/* $("#actionType").val("Yes");
																							$("#hiddenURL").val("/user");
																						   $(".confirm-body").html("Registered Successfully");
																						   $("#SBlockUIConfirm").show(); */
																						 confirmAlert({
																							  customUI: ({ onClose }) => {
																								return (
																								  <div className='custom-ui'>
																									<h4>Notification</h4>
																									<p>Registered Successfully</p>
																									<button onClick={()=>{
																												this.props.history.push('/user')
																									onClose()}}>Ok</button>
																								  </div>
																								)
																							  }
																							})
																			}else if(result.profile.assets_type==="2"){
																				if(data.userdata.agentType==="Broker")
																				{
																					// this.props.history.push('/agent-broker')
																					/* $("#actionType").val("Yes");
																							$("#hiddenURL").val("/agent-broker");
																						   $(".confirm-body").html("Registered Successfully");
																						   $("#SBlockUIConfirm").show(); */
																							   confirmAlert({
																							  customUI: ({ onClose }) => {
																								return (
																								  <div className='custom-ui'>
																									<h4>Notification</h4>
																									<p>Registered Successfully</p>
																									<button onClick={()=>{
																												this.props.history.push('/agent-broker')
																									onClose()}}>Ok</button>
																								  </div>
																								)
																							  }
																							})
																				}
																				else{
																					// this.props.history.push('/agent-serviceprovider')
																					/* $("#actionType").val("Yes");
																							$("#hiddenURL").val("/agent-serviceprovider");
																						   $(".confirm-body").html("Registered Successfully");
																						   $("#SBlockUIConfirm").show(); */
																							  confirmAlert({
																							  customUI: ({ onClose }) => {
																								return (
																								  <div className='custom-ui'>
																									<h4>Notification</h4>
																									<p>Registered Successfully</p>
																									<button onClick={()=>{
																												this.props.history.push('/agent-serviceprovider')
																									onClose()}}>Ok</button>
																								  </div>
																								)
																							  }
																							})
																				}
																			   
																			}else{
																				
																				// this.props.history.push('/tenant')
																				// $("#actionType").val("Yes");
																							// $("#hiddenURL").val("/tenant");
																						   // $(".confirm-body").html("Registered Successfully");
																						   // $("#SBlockUIConfirm").show();
																						   confirmAlert({
																							  customUI: ({ onClose }) => {
																								return (
																								  <div className='custom-ui'>
																									<h4>Notification</h4>
																									<p>Registered Successfully</p>
																									<button onClick={()=>{
																												this.props.history.push('/tenant')
																									onClose()}}>Ok</button>
																								  </div>
																								)
																							  }
																							})
																			}
																		} else {
																			this.props.setUser(data.userdata, result.profile);
																			// console.log(result.msg);
																		}
																		// this.props.updateInfo(result.profile)
																	  },

																  (error) => {
																	console.log('error')
																  }
																)
															}, 1000)
														})
																				
																			  }
																			 
																			},
																			
																			(error) => {
																			  this.setState({
																				isLoaded: true,
																				error
																			  });
																			}
																		  )
																	},
																	
																	(error) => {
																		error
																	  });
																	}
																  
                                                        } />
																	<label htmlFor="basic"> Free </label>
																</div> </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        ) : null
                                    }
                                    {
                                        planData['Silver'] ? (
                                            <div className="col-md-3">
                                                <ul id="price-t-5" className="">
                                                    <li>
                                                        <h2>Silver</h2>
                                                        <h3>$ {planData['Silver'].plan_details.per_month}/{planData['Silver'].plan_details.per_annum} <br /><span> {Number(planData['Silver'].plan_details.per_annum) === 0 ? 'Free' : 'per month/Annum'}  </span></h3>
                                                        <ul>
														{ planData['Silver'].features.manage_properties_upto ? <li className=" first even">{planData['Silver'].features.manage_properties_upto.feature_name} - {planData['Silver'].features.manage_properties_upto.feature_unit=='Limit'?(planData['Silver'].features.manage_properties_upto.limit_upto!=0?planData['Silver'].features.manage_properties_upto.limit_upto:'Free'):planData['Silver'].features.manage_properties_upto.confirmation}</li> : null }
															
															{ planData['Silver'].features.upload_image_per_property ? <li className=" first even">{planData['Silver'].features.upload_image_per_property.feature_name} - {planData['Silver'].features.upload_image_per_property.feature_unit=='Limit'?(planData['Silver'].features.upload_image_per_property.limit_upto!=0?planData['Silver'].features.upload_image_per_property.limit_upto:'Free'):planData['Silver'].features.upload_image_per_property.confirmation}</li> : null }
															
															{ planData['Silver'].features.create_agreement ? <li className=" first even">{planData['Silver'].features.create_agreement.feature_name} - {planData['Silver'].features.create_agreement.feature_unit=='Limit'?(planData['Silver'].features.create_agreement.limit_upto!=0?planData['Silver'].features.create_agreement.limit_upto:'Free'):planData['Silver'].features.create_agreement.confirmation}</li> : null }
															
															{ planData['Silver'].features.send_agreement_for_signature ? <li className=" first even">{planData['Silver'].features.send_agreement_for_signature.feature_name} - {planData['Silver'].features.send_agreement_for_signature.feature_unit=='Limit'?(planData['Silver'].features.send_agreement_for_signature.limit_upto!=0?planData['Silver'].features.send_agreement_for_signature.limit_upto:'Free'):planData['Silver'].features.send_agreement_for_signature.confirmation}</li> : null }
															
															{ planData['Silver'].features.basic_fields ? <li className=" first even">{planData['Silver'].features.basic_fields.feature_name} - {planData['Silver'].features.basic_fields.feature_unit=='Limit'?(planData['Silver'].features.basic_fields.limit_upto!=0?planData['Silver'].features.basic_fields.limit_upto:'Free'):planData['Silver'].features.basic_fields.confirmation}</li> : null }
															
                                                            { planData['Silver'].features.mobile_app ? <li className=" first even">{planData['Silver'].features.mobile_app.feature_name} - {planData['Silver'].features.mobile_app.feature_unit=='Limit'?(planData['Silver'].features.mobile_app.limit_upto!=0?planData['Silver'].features.mobile_app.limit_upto:'Free'):planData['Silver'].features.mobile_app.confirmation}</li> : null }
															
															{ planData['Silver'].features.reminders_notifications ? <li className=" first even">{planData['Silver'].features.reminders_notifications.feature_name} - {planData['Silver'].features.reminders_notifications.feature_unit=='Limit'?(planData['Silver'].features.reminders_notifications.limit_upto!=0?planData['Silver'].features.reminders_notifications.limit_upto:'Free'):planData['Silver'].features.reminders_notifications.confirmation}</li> : null }
															
                                                            { planData['Silver'].features.in_person_signature ? <li className=" first even">{planData['Silver'].features.in_person_signature.feature_name} - {planData['Silver'].features.in_person_signature.feature_unit=='Limit'?(planData['Silver'].features.in_person_signature.limit_upto!=0?planData['Silver'].features.in_person_signature.limit_upto:'Free'):planData['Silver'].features.in_person_signature.confirmation}</li> : null }
                                                            
															{ planData['Silver'].features.branding ? <li className=" first even">{planData['Silver'].features.branding.feature_name} - {planData['Silver'].features.branding.feature_unit=='Limit'?(planData['Silver'].features.branding.limit_upto!=0?planData['Silver'].features.branding.limit_upto:'Free'):planData['Silver'].features.branding.confirmation}</li> : null }
                                                          
															{ planData['Silver'].features.collect_payments ? <li className=" first even">{planData['Silver'].features.collect_payments.feature_name} - {planData['Silver'].features.collect_payments.feature_unit=='Limit'?(planData['Silver'].features.collect_payments.limit_upto!=0?planData['Silver'].features.collect_payments.limit_upto:'Free'):planData['Silver'].features.collect_payments.confirmation}</li> : null }
                                                           
															{ planData['Silver'].features.bgv_screening ? <li className=" first even">{planData['Silver'].features.bgv_screening.feature_name} - {planData['Silver'].features.bgv_screening.feature_unit=='Limit'?(planData['Silver'].features.bgv_screening.limit_upto!=0?planData['Silver'].features.bgv_screening.limit_upto:'Free'):planData['Silver'].features.bgv_screening.confirmation}</li> : null }
                                                            
															{ planData['Silver'].features.document_upload ? <li className=" first even">{planData['Silver'].features.document_upload.feature_name} - {planData['Silver'].features.document_upload.feature_unit=='Limit'?(planData['Silver'].features.document_upload.limit_upto!=0?planData['Silver'].features.document_upload.limit_upto:'Free'):planData['Silver'].features.document_upload.confirmation}</li> : null }
                                                            
															{ planData['Silver'].features.customize_template ? <li className=" first even">{planData['Silver'].features.customize_template.feature_name} - {planData['Silver'].features.customize_template.feature_unit=='Limit'?(planData['Silver'].features.customize_template.limit_upto!=0?planData['Silver'].features.customize_template.limit_upto:'Free'):planData['Silver'].features.customize_template.confirmation}</li> : null }
                                                            
                                                            
                                                            
                                                        </ul>
                                                        <div className="submit-btn"> <a href="#">Buy Now</a> {/* onClick={() => {
                                                          let setPlanID = planData['Silver'].plan_details.plan_id
                                                          let getPlanId = setPlanID.toString()
                                                            this.props.history.push('/payment/'+userid+"/"+getPlanId+'/per_annum')
                                                        }} */}
															<div className="col-md-6">
																<div className="radio radio-custom">
																	<input type="radio" name="plan_month_year" id="silver_month" val="per_month"  value={'per_month'} 
																	onClick={() => {
																			let setPlanID = planData['Silver'].plan_details.plan_id
																			let getPlanId = setPlanID.toString()
																			this.props.history.push('payment/'+userid+"/"+getPlanId+'/per_month')
																		}} />
																	<label htmlFor="silver_month"> Per Month </label>
																</div>
															</div>
															<div className="col-md-6">
																<div className="radio radio-custom">
																	<input type="radio" name="plan_month_year" id="silver_year" val="per_annum"  value={'per_annum'} 
																	onClick={() => {
																			let setPlanID = planData['Silver'].plan_details.plan_id
																			let getPlanId = setPlanID.toString()
																			this.props.history.push('payment/'+userid+"/"+getPlanId+'/per_annum')
																		}}/>
																	<label htmlFor="silver_year"> Per Annum </label>
																</div>
															</div>
															
															
														</div>
                                                    </li>
                                                </ul>
                                            </div>
                                        ) : null
                                    }
                                    {
                                        planData['Gold'] ? (
                                            <div className="col-md-3">
                                                <ul id="price-t-5" className="">
                                                    <li>
                                                        <h2>Gold</h2>
                                                        <h3>$ {planData['Gold'].plan_details.per_month}/{planData['Gold'].plan_details.per_annum} <br /><span> {Number(planData['Gold'].plan_details.per_annum) === 0 ? 'Free' : 'per month/Annum'}  </span></h3>
                                                        <ul>
														{ planData['Gold'].features.manage_properties_upto ? <li className=" first even">{planData['Gold'].features.manage_properties_upto.feature_name} - {planData['Gold'].features.manage_properties_upto.feature_unit=='Limit'?(planData['Gold'].features.manage_properties_upto.limit_upto!=0?planData['Gold'].features.manage_properties_upto.limit_upto:'Free'):planData['Gold'].features.manage_properties_upto.confirmation}</li> : null }
															
															{ planData['Gold'].features.upload_image_per_property ? <li className=" first even">{planData['Gold'].features.upload_image_per_property.feature_name} - {planData['Gold'].features.upload_image_per_property.feature_unit=='Limit'?(planData['Gold'].features.upload_image_per_property.limit_upto!=0?planData['Gold'].features.upload_image_per_property.limit_upto:'Free'):planData['Gold'].features.upload_image_per_property.confirmation}</li> : null }
															
															{ planData['Gold'].features.create_agreement ? <li className=" first even">{planData['Gold'].features.create_agreement.feature_name} - {planData['Gold'].features.create_agreement.feature_unit=='Limit'?(planData['Gold'].features.create_agreement.limit_upto!=0?planData['Gold'].features.create_agreement.limit_upto:'Free'):planData['Gold'].features.create_agreement.confirmation}</li> : null }
															
															{ planData['Gold'].features.send_agreement_for_signature ? <li className=" first even">{planData['Gold'].features.send_agreement_for_signature.feature_name} - {planData['Gold'].features.send_agreement_for_signature.feature_unit=='Limit'?(planData['Gold'].features.send_agreement_for_signature.limit_upto!=0?planData['Gold'].features.send_agreement_for_signature.limit_upto:'Free'):planData['Gold'].features.send_agreement_for_signature.confirmation}</li> : null }
															
															{ planData['Gold'].features.basic_fields ? <li className=" first even">{planData['Gold'].features.basic_fields.feature_name} - {planData['Gold'].features.basic_fields.feature_unit=='Limit'?(planData['Gold'].features.basic_fields.limit_upto!=0?planData['Gold'].features.basic_fields.limit_upto:'Free'):planData['Gold'].features.basic_fields.confirmation}</li> : null }
															
                                                            { planData['Gold'].features.mobile_app ? <li className=" first even">{planData['Gold'].features.mobile_app.feature_name} - {planData['Gold'].features.mobile_app.feature_unit=='Limit'?(planData['Gold'].features.mobile_app.limit_upto!=0?planData['Gold'].features.mobile_app.limit_upto:'Free'):planData['Gold'].features.mobile_app.confirmation}</li> : null }
															
															{ planData['Gold'].features.reminders_notifications ? <li className=" first even">{planData['Gold'].features.reminders_notifications.feature_name} - {planData['Gold'].features.reminders_notifications.feature_unit=='Limit'?(planData['Gold'].features.reminders_notifications.limit_upto!=0?planData['Gold'].features.reminders_notifications.limit_upto:'Free'):planData['Gold'].features.reminders_notifications.confirmation}</li> : null }
															
                                                            { planData['Gold'].features.in_person_signature ? <li className=" first even">{planData['Gold'].features.in_person_signature.feature_name} - {planData['Gold'].features.in_person_signature.feature_unit=='Limit'?(planData['Gold'].features.in_person_signature.limit_upto!=0?planData['Gold'].features.in_person_signature.limit_upto:'Free'):planData['Gold'].features.in_person_signature.confirmation}</li> : null }
															
															{ planData['Gold'].features.branding ? <li className=" first even">{planData['Gold'].features.branding.feature_name} - {planData['Gold'].features.branding.feature_unit=='Limit'?(planData['Gold'].features.branding.limit_upto!=0?planData['Gold'].features.branding.limit_upto:'Free'):planData['Gold'].features.branding.confirmation}</li> : null }
															
                                                            { planData['Gold'].features.collect_payments ? <li className=" first even">{planData['Gold'].features.collect_payments.feature_name} - {planData['Gold'].features.collect_payments.feature_unit=='Limit'?(planData['Gold'].features.collect_payments.limit_upto!=0?planData['Gold'].features.collect_payments.limit_upto:'Free'):planData['Gold'].features.collect_payments.confirmation}</li> : null }
															
                                                            { planData['Gold'].features.bgv_screening ? <li className=" first even">{planData['Gold'].features.bgv_screening.feature_name} - {planData['Gold'].features.bgv_screening.feature_unit=='Limit'?(planData['Gold'].features.bgv_screening.limit_upto!=0?planData['Gold'].features.bgv_screening.limit_upto:'Free'):planData['Gold'].features.bgv_screening.confirmation}</li> : null }
															
															{ planData['Gold'].features.document_upload ? <li className=" first even">{planData['Gold'].features.document_upload.feature_name} - {planData['Gold'].features.document_upload.feature_unit=='Limit'?(planData['Gold'].features.document_upload.limit_upto!=0?planData['Gold'].features.document_upload.limit_upto:'Free'):planData['Gold'].features.document_upload.confirmation}</li> : null }

															{ planData['Gold'].features.customize_template ? <li className=" first even">{planData['Gold'].features.customize_template.feature_name} - {planData['Gold'].features.customize_template.feature_unit=='Limit'?(planData['Gold'].features.customize_template.limit_upto!=0?planData['Gold'].features.document_upload.limit_upto:'Free'):planData['Gold'].features.customize_template.confirmation}</li> : null }
															
                                                        </ul>
                                                        <div className="submit-btn"> <a href="#">Buy Now</a> {/* onClick={() => {
                                                          let setPlanID = planData['Gold'].plan_details.plan_id
                                                          let getPlanId = setPlanID.toString()
                                                            this.props.history.push('/payment/'+userid+"/"+getPlanId+'/per_annum')
                                                        }}*/}
														<div className="col-md-6">
																<div className="radio radio-custom">
																	<input type="radio" name="plan_month_year" id="gold_month" val="per_month"  value={'per_month'} 
																	onClick={() => {
																			let setPlanID = planData['Gold'].plan_details.plan_id
																			let getPlanId = setPlanID.toString()
																			this.props.history.push('payment/'+userid+"/"+getPlanId+'/per_month')
																		}} />
																	<label htmlFor="gold_month"> Per Month </label>
																</div>
															</div>
															<div className="col-md-6">
																<div className="radio radio-custom">
																	<input type="radio" name="plan_month_year" id="gold_year" val="per_annum"  value={'per_annum'} 
																	onClick={() => {
																			let setPlanID = planData['Gold'].plan_details.plan_id
																			let getPlanId = setPlanID.toString()
																			this.props.history.push('payment/'+userid+"/"+getPlanId+'/per_annum')
																		}}/>
																	<label htmlFor="gold_year"> Per Annum </label>
																</div>
															</div>
															
														</div>
                                                    </li>
                                                </ul>
                                            </div>
                                        ) : null
                                    }
                                    {
                                        planData['Platinum'] ? (
                                            <div className="col-md-3">
                                                <ul id="price-t-5" className="">
                                                    <li>
                                                        <h2>Platinum</h2>
                                                        <h3>$ {planData['Platinum'].plan_details.per_month}/{planData['Platinum'].plan_details.per_annum} <br /><span> {Number(planData['Platinum'].plan_details.per_annum) === 0 ? 'Free' : 'per month/Annum'}  </span></h3>
                                                        <ul>
														{ planData['Platinum'].features.manage_properties_upto ? <li className=" first even">{planData['Platinum'].features.manage_properties_upto.feature_name} - {planData['Platinum'].features.manage_properties_upto.feature_unit=='Limit'?(planData['Platinum'].features.manage_properties_upto.limit_upto!=0?planData['Platinum'].features.manage_properties_upto.limit_upto:'Free'):planData['Platinum'].features.manage_properties_upto.confirmation}</li> : null }
															
															{ planData['Platinum'].features.upload_image_per_property ? <li className=" first even">{planData['Platinum'].features.upload_image_per_property.feature_name} - {planData['Platinum'].features.upload_image_per_property.feature_unit=='Limit'?(planData['Platinum'].features.upload_image_per_property.limit_upto!=0?planData['Platinum'].features.upload_image_per_property.limit_upto:'Free'):planData['Platinum'].features.upload_image_per_property.confirmation}</li> : null }
															
															{ planData['Platinum'].features.create_agreement ? <li className=" first even">{planData['Platinum'].features.create_agreement.feature_name} - {planData['Platinum'].features.create_agreement.feature_unit=='Limit'?(planData['Platinum'].features.create_agreement.limit_upto!=0?planData['Platinum'].features.create_agreement.limit_upto:'Free'):planData['Platinum'].features.create_agreement.confirmation}</li> : null }
															
															{ planData['Platinum'].features.send_agreement_for_signature ? <li className=" first even">{planData['Platinum'].features.send_agreement_for_signature.feature_name} - {planData['Platinum'].features.send_agreement_for_signature.feature_unit=='Limit'?(planData['Platinum'].features.send_agreement_for_signature.limit_upto!=0?planData['Platinum'].features.send_agreement_for_signature.limit_upto:'Free'):planData['Platinum'].features.send_agreement_for_signature.confirmation}</li> : null }
															
															{ planData['Platinum'].features.basic_fields ? <li className=" first even">{planData['Platinum'].features.basic_fields.feature_name} - {planData['Platinum'].features.basic_fields.feature_unit=='Limit'?(planData['Platinum'].features.basic_fields.limit_upto!=0?planData['Platinum'].features.basic_fields.limit_upto:'Free'):planData['Platinum'].features.basic_fields.confirmation}</li> : null }
															
                                                            { planData['Platinum'].features.mobile_app ? <li className=" first even">{planData['Platinum'].features.mobile_app.feature_name} - {planData['Platinum'].features.mobile_app.feature_unit=='Limit'?(planData['Platinum'].features.mobile_app.limit_upto!=0?planData['Platinum'].features.mobile_app.limit_upto:'Free'):planData['Platinum'].features.mobile_app.confirmation}</li> : null }
															
															{ planData['Platinum'].features.reminders_notifications ? <li className=" first even">{planData['Platinum'].features.reminders_notifications.feature_name} - {planData['Platinum'].features.reminders_notifications.feature_unit=='Limit'?(planData['Platinum'].features.reminders_notifications.limit_upto!=0?planData['Platinum'].features.reminders_notifications.limit_upto:'Free'):planData['Platinum'].features.reminders_notifications.confirmation}</li> : null }
															
                                                            { planData['Platinum'].features.in_person_signature ? <li className=" first even">{planData['Platinum'].features.in_person_signature.feature_name} - {planData['Platinum'].features.in_person_signature.feature_unit=='Limit'?(planData['Platinum'].features.in_person_signature.limit_upto!=0?planData['Platinum'].features.in_person_signature.limit_upto:'Free'):planData['Platinum'].features.in_person_signature.confirmation}</li> : null }
															
															{ planData['Platinum'].features.branding ? <li className=" first even">{planData['Platinum'].features.branding.feature_name} - {planData['Platinum'].features.branding.feature_unit=='Limit'?(planData['Platinum'].features.branding.limit_upto!=0?planData['Platinum'].features.branding.limit_upto:'Free'):planData['Platinum'].features.branding.confirmation}</li> : null }
															
                                                            { planData['Platinum'].features.collect_payments ? <li className=" first even">{planData['Platinum'].features.collect_payments.feature_name} - {planData['Platinum'].features.collect_payments.feature_unit=='Limit'?(planData['Platinum'].features.collect_payments.limit_upto!=0?planData['Platinum'].features.collect_payments.limit_upto:'Free'):planData['Platinum'].features.collect_payments.confirmation}</li> : null }
															
                                                            { planData['Platinum'].features.bgv_screening ? <li className=" first even">{planData['Platinum'].features.bgv_screening.feature_name} - {planData['Platinum'].features.bgv_screening.feature_unit=='Limit'?(planData['Platinum'].features.bgv_screening.limit_upto!=0?planData['Platinum'].features.bgv_screening.limit_upto:'Free'):planData['Platinum'].features.bgv_screening.confirmation}</li> : null }
															
															{ planData['Platinum'].features.document_upload ? <li className=" first even">{planData['Platinum'].features.document_upload.feature_name} - {planData['Platinum'].features.document_upload.feature_unit=='Limit'?(planData['Platinum'].features.document_upload.limit_upto!=0?planData['Platinum'].features.document_upload.limit_upto:'Free'):planData['Platinum'].features.document_upload.confirmation}</li> : null }
													    
															{ planData['Platinum'].features.customize_template ? <li className=" first even">{planData['Platinum'].features.customize_template.feature_name} - {planData['Platinum'].features.customize_template.feature_unit=='Limit'?(planData['Platinum'].features.customize_template.limit_upto!=0?planData['Platinum'].features.customize_template.limit_upto:'Free'):planData['Platinum'].features.customize_template.confirmation}</li> : null }
													  </ul>
                                                        <div className="submit-btn"> <a href="#" >Buy Now</a> {/*onClick={() => {
                                                          let setPlanID = planData['Platinum'].plan_details.plan_id
                                                          let getPlanId = setPlanID.toString()
                                                            this.props.history.push('/payment/'+userid+"/"+getPlanId+'/per_annum')
                                                        }}*/}
														<div className="col-md-6">
																<div className="radio radio-custom">
																	<input type="radio" name="plan_month_year" id="platinum_month" val="per_month"  value={'per_month'} 
																	onClick={() => {
																			let setPlanID = planData['Platinum'].plan_details.plan_id
																			let getPlanId = setPlanID.toString()
																			this.props.history.push('payment/'+userid+"/"+getPlanId+'/per_month')
																		}} />
																	<label htmlFor="platinum_month"> Per Month </label>
																</div>
															</div>
															<div className="col-md-6">
																<div className="radio radio-custom">
																	<input type="radio" name="plan_month_year" id="platinum_year" val="per_annum"  value={'per_annum'} 
																	onClick={() => {
																			let setPlanID = planData['Platinum'].plan_details.plan_id
																			let getPlanId = setPlanID.toString()
																			this.props.history.push('payment/'+userid+"/"+getPlanId+'/per_annum')
																		}}/>
																	<label htmlFor="platinum_year"> Per Annum </label>
																</div>
															</div>
														</div>
                                                    </li>
                                                </ul>
                                            </div>
                                        ) : null
                                    }
                                </div>
                            ) :  'No Plan Exists'
                        }
        </div>
        </div>
    </div>
    </div>
</div>
	{/*<link rel='stylesheet' href='css/theme.css' type='text/css' media='all' />*/}
	<script type='text/javascript' src='js/validate.js'></script>
</div>
			);
	}
}
