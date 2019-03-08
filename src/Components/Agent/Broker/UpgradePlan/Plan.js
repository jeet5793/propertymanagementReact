import React from 'react'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import {Link,Redirect} from 'react-router-dom';
import API_URL from '../../../../app-config';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
//import '../../../../css/theme.css'
//import '../../../../css/plans.css'
import $ from 'jquery';
import swal from 'sweetalert';

class Plan extends React.Component{
    constructor(props) {
        super(props);
        this.head=React.createRef();
		this.state = {
			userInfo:props.userData,
			profileData:'',
			userData:Cookies.get('profile_data'),
			reportStatus:false
			
			
		},
		this.unsubscribe = this.unsubscribe.bind(this)
    }

	componentDidMount(){
		$("#loaderDiv").show();
        // var search=window.location.search;
        // var type=search.replace('?Datatype=','')
        // var panelType='';
        // panelType=type.replace('type=','').toLocaleUpperCase()
        // this.head.current.innerHTML=panelType
	fetch(`${API_URL}assetsapi/plan_by_assetstype/${JSON.parse(this.state.userData).assetsTypeId}`)
        .then(response=>{
            response.json().then(plans=>{
				$("#loaderDiv").hide();
                this.setState({planData:plans.plan.Agent})
                
				
                // if(type==='agent')
                // this.setState({planData:plans.plan.Agent})
                // if(panelType==='tenant')
                // this.setState({planData:plans.plan.Agent})
            })
			 // console.log("plan data"+JSON.stringify(this.state.planData));
        })
    setTimeout(function(){ $('#tzloadding').remove(); }, 2000);

    $('html, body').animate({scrollTop: 0}, 800);
	
	 fetch(`${API_URL}assetsapi/profile/${JSON.parse(this.state.userData).assets_id}/${JSON.parse(this.state.userData).session_id}`, {
        method: 'get'
      })
      .then(res => res.json())
      .then(
        (result) => {
          //console.log("data 2: "+JSON.stringify(result.profile))
          if (result.success) {
            this.setState({profileData:result.profile})
            
          } 
          //console.log("set user data"+JSON.stringify(this.state.profileData))
        },
      (error) => {
        console.log('error')
      }
	)}
unsubscribe()
	{
		$("#loaderDiv").show();
			 fetch(`${API_URL}assetsapi/unsubscribe_plan/${JSON.parse(this.state.userData).assets_id}/${JSON.parse(this.state.userData).assetsTypeId}/${JSON.parse(this.state.userData).session_id}`, {
			method: 'get'
		  })
		  .then(res => res.json())
		  .then(
			(result) => {
			  //console.log("data 2: "+JSON.stringify(result.profile))
			  if (result) {
				// swal("Assets Watch", result.msg);
				// window.location.reload();
				$("#loaderDiv").hide();
				/* $("#actionType").val("Yes");
				$("#hiddenURL").val("broker-plan");
				$(".confirm-body").html(result.msg);
				$("#BlockUIConfirm").show(); */
				confirmAlert({
						  customUI: ({ onClose }) => {
							return (
							  <div className='custom-ui'>
								<h4>Notification</h4>
								<p>{result.msg}</p>
								<button onClick={()=>{
											this.props.history.push('/broker-plan')
								onClose()}}>Ok</button>
							  </div>
							)
						  }
						})
			  }
			  //console.log("set user data"+JSON.stringify(this.state.profileData))
			},
		  (error) => {
			console.log('error')
		  }
		)
	}
	report(){
		$("#loaderDiv").show();
			 fetch(`${API_URL}assetsapi/plan_upgrade_report/${JSON.parse(this.state.userData).assets_id}`, {
			method: 'get'
		  })
		  .then(res => res.json())
		  .then(
			(result) => {
			  //console.log("data 2: "+JSON.stringify(result.profile))
			  $("#loaderDiv").hide();
			  if (result.success==1) {
				this.setState({report:result.plan_upgrade_report,reportStatus:true});
				
			  }
			  //console.log("set user data"+JSON.stringify(this.state.profileData))
			},
		  (error) => {
			console.log('error')
		  }
		)
	}
	back(){
		this.setState({reportStatus:false});
	}
	render(){
		// console.log(this.state.userData);
    // var userid = localStorage.getItem('userid')
		const profileDetail = JSON.parse(this.state.userData);
        const { planData } = this.state;
        // console.log("plan data"+JSON.stringify(planData));
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
<div>
{this.plansStyle}

           <div className="wrapper">
              <div className="container">                     
                <div className="page-title-box">
                    <div className="btn-group pull-right">
					<ol className="breadcrumb hide-phone p-0 m-0">
					<li>	
					{this.state.reportStatus?<button type="button"  onClick={()=>this.back()} name="report" className="btn btn-default stepy-finish">Back</button>:<button type="button" onClick={()=>this.report()} name="report" className="btn btn-primary stepy-finish">Subscribe History</button>} &nbsp;
					<button name="unsubscribe" className="btn btn-success waves-effect waves-light" style={{float:"right"}} onClick={this.unsubscribe}>Unsubscribe</button>
					</li>
					</ol>
					</div>
                    <h4 className="page-title">Upgrade Plan</h4>
                </div>  
				
<div className="seprate-plan">
    <div className="tz_page_content">
    <div className="post-1081 page type-page status-publish hentry">
		
        <div className="bootstrap-wrapper">
		{this.state.reportStatus?
					<div className="row">
									{this.state.report && (this.state.report).length>0?
										<div className=" table-responsive">
											<table id="" className="table table-bordered datatable">
												<thead>
													<tr>
														<th>#</th>
														<th>Plan</th>
														<th>Plan Type</th>
														<th>Upgrade Reason</th>
														<th>Upgrade Date</th>
														<th>Expire Date</th>
														<th>Plan Duration</th>
													</tr>
												</thead>
												<tbody>
											  {this.state.report?this.state.report.map((item,index)=>(
													<tr>
														<td>{index+1}</td>
														<td>{item.plan}</td>
														<td>{item.plan_type=='per_annum'?'Per Annum':(item.plan_type=='per_month')?'Per Month':''}</td>
														<td>{item.upgrade_reason}</td>
														<td>{item.upgrade_date}</td>
														<td>{item.expire_date}</td>
														<td>{item.duration?`${item.duration} Days`:''}</td>
													</tr>)):<tr><td style={{textAlign:'center'}} colSpan={5}>No Report Available</td></tr>}
												</tbody>
											</table>
										</div>:<div className=" table-responsive" style={{textAlign:'center'}}>No Report Available</div>}
									</div>:
        <div className="text-center">
              {
				planData  ? (
                                <div className="row">
								
                                    {
                                        planData['Basic'] ? (
                                            <div className="col-md-3">
                                                <ul id="price-t-5" className="">
                                                    <li>
                                                        <h2>Basic {(this.state.profileData.planName=='') || planData['Basic'].plan_details.planName===this.state.profileData.planName?<i className="fa fa-check-circle  plan-pur"></i>:''}</h2>
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
                                                         <div className="submit-btn"> {/* <a href="#" onClick={() => {
                                                          let setPlanID = planData['Basic'].plan_details.plan_id
                                                          let getPlanId = setPlanID.toString()
                                                          //let user_Id = planData['Basic'].plan_details.
                                                            this.props.history.push('broker-upgrade/'+profileDetail.assets_id+"/"+getPlanId+'/per_annum')
									}}>Free</a> */} <a href="#">Free</a> </div> 
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
                                                        <h2>Silver{planData['Silver'].plan_details.planName===this.state.profileData.planName?<i className="fa fa-check-circle plan-pur" ></i>:''}</h2>
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
														<div className="row">
															<div className="col-md-6">
																<div className="radio radio-custom">

																	<input type="radio" name="plan_month_year" id="silver_month" val="per_month"  value={'per_month'} 
																	onClick={() => {
																			let setPlanID = planData['Silver'].plan_details.plan_id;
																			let getPlanId = setPlanID.toString();
																			let amount = planData['Silver'].plan_details.per_month;
																			this.props.history.push({pathname: '/broker-upgrade',
																			state: { PlanId: getPlanId,Pay:'per_month',userId:profileDetail.assets_id,Amount:amount }})
																			// <Link to = {{pathname:'/broker-upgrade'}}></Link>
																			// <Redirect to='/broker-upgrade'/>alert(Object.keys(obj)[0])
																		}} />
																	<label htmlFor="silver_month"> Per Month </label>
																</div>
															</div>
															<div className="col-md-6">
																<div className="radio radio-custom">
																	<input type="radio" name="plan_month_year" id="silver_year" val="per_annum"  value={'per_annum'} 
																	onClick={() => {
																		// alert('silver');
																			let setPlanID = planData['Silver'].plan_details.plan_id
																			let getPlanId = setPlanID.toString();
																			let amount = planData['Silver'].plan_details.per_annum;
																			this.props.history.push({pathname: '/broker-upgrade',
																			state: { PlanId: getPlanId,Pay:'per_annum',userId:profileDetail.assets_id,Amount:amount }})
																		}}/>
																	<label htmlFor="silver_year"> Per Annum </label>
																</div>
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
                                                        <h2>Gold{planData['Gold'].plan_details.planName===this.state.profileData.planName?<i className="fa fa-check-circle plan-pur"></i>:''}</h2>
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
														<div className="row">
														<div className="col-md-6">
																<div className="radio radio-custom">
																	<input type="radio" name="plan_month_year"  id="gold_month"  value={'per_month'} 
																	onClick={() => {
																			 let setPlanID = planData['Gold'].plan_details.plan_id
																			 let getPlanId = setPlanID.toString();
																			let amount = planData['Gold'].plan_details.per_month;
																			this.props.history.push({pathname: '/broker-upgrade',
																			state: { PlanId: getPlanId,Pay:'per_month',userId:profileDetail.assets_id,Amount:amount }})
																			}}/>
																	<label htmlFor="gold_month"> Per Month </label>
																</div>
															</div>
															<div className="col-md-6">
																<div className="radio radio-custom">
																	<input type="radio" name="plan_month_year"  id="gold_year"  value={'per_annum'} 
																	onClick={() => {
																			 let setPlanID = planData['Gold'].plan_details.plan_id
																			 let getPlanId = setPlanID.toString();
																			let amount = planData['Gold'].plan_details.per_annum;
																			this.props.history.push({pathname: '/broker-upgrade',
																			state: { PlanId: getPlanId,Pay:'per_annum',userId:profileDetail.assets_id,Amount:amount }})
																		}}/>
																	<label htmlFor="gold_year" > Per Annum </label>
																</div>
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
                                                        <h2>Platinum{planData['Platinum'].plan_details.planName===this.state.profileData.planName?<i className="fa fa-check-circle plan-pur"></i>:''}</h2>
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
														<div className="row">
														<div className="col-md-6">
																<div className="radio radio-custom">
																	<input type="radio" name="plan_month_year" id="platinum_month" val="per_month"  value={'per_month'} 
																	onClick={() => {
																			let setPlanID = planData['Platinum'].plan_details.plan_id
																			let getPlanId = setPlanID.toString();
																			let amount = planData['Platinum'].plan_details.per_month;
																			this.props.history.push({pathname: '/broker-upgrade',
																			state: { PlanId: getPlanId,Pay:'per_month',userId:profileDetail.assets_id,Amount:amount }})
																		}} />
																	<label htmlFor="platinum_month"> Per Month </label>
																</div>
															</div>
															<div className="col-md-6">
																<div className="radio radio-custom">
																	<input type="radio" name="plan_month_year" id="platinum_year" val="per_annum"  value={'per_annum'} 
																	onClick={() => {
																			let setPlanID = planData['Platinum'].plan_details.plan_id
																			let getPlanId = setPlanID.toString();
																			let amount = planData['Platinum'].plan_details.per_annum;
																			this.props.history.push({pathname: '/broker-upgrade',
																			state: { PlanId: getPlanId,Pay:'per_annum',userId:profileDetail.assets_id,Amount:amount }})
																		}}/>
																	<label htmlFor="platinum_year"> Per Annum </label>
																</div>
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
                           
        </div>}
        </div>
    </div>
    </div>
</div>
		{/*<link rel='stylesheet' href='css/theme.css' type='text/css' media='all' />*/}
	<script type='text/javascript' src='js/validate.js'></script>
</div>
</div>
</div>
			);
	}
}
export default connect(state=>({ userData: state.userData, userProfile: state.userProfile }))(Plan)