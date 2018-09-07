import React from 'react'
import '../../../css/theme.css'
import '../../../css/plans.css'
import $ from 'jquery';

import API_URL from '../../../app-config';

export default class Plans extends React.Component{
    constructor(props) {
        super(props);
        this.head=React.createRef();
        this.state = {}
    }

	componentDidMount(){
        var search=window.location.search;
        var type=search.replace('?Datatype=','')
        var panelType='';
        panelType=type.replace('type=','').toLocaleUpperCase()
        this.head.current.innerHTML=panelType
        fetch(`${API_URL}assetsapi/plan`)
        .then(response=>{
            response.json().then(plans=>{
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
        console.log("plan data"+JSON.stringify(planData))
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
															
                                                            
                                                        </ul>
                                                        <div className="submit-btn"> <a href="#" onClick={() => {
                                                          let setPlanID = planData['Basic'].plan_details.plan_id
                                                          let getPlanId = setPlanID.toString()
                                                          //let user_Id = planData['Basic'].plan_details.
                                                            this.props.history.push('payment/'+userid+"/"+getPlanId+'/per_annum')
                                                        }}>Buy Now</a> </div>
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
                                                            
                                                           
                                                           
                                                            
                                                        </ul>
                                                        <div className="submit-btn"> <a href="#">Buy Now</a> {/* onClick={() => {
                                                          let setPlanID = planData['Silver'].plan_details.plan_id
                                                          let getPlanId = setPlanID.toString()
                                                            this.props.history.push('/payment/'+userid+"/"+getPlanId+'/per_annum')
                                                        }} */}
															<div className="col-md-6">
																<div className="radio radio-custom">
																	<input type="radio" name="plan_month_year" id="radioind" val="per_month"  value={'per_month'} 
																	onClick={() => {
																			let setPlanID = planData['Silver'].plan_details.plan_id
																			let getPlanId = setPlanID.toString()
																			this.props.history.push('payment/'+userid+"/"+getPlanId+'/per_month')
																		}} />
																	<label HTMLFor="radioind"> Per Month </label>
																</div>
															</div>
															<div className="col-md-6">
																<div className="radio radio-custom">
																	<input type="radio" name="plan_month_year" id="radioorg" val="per_annum"  value={'per_annum'} 
																	onClick={() => {
																			let setPlanID = planData['Silver'].plan_details.plan_id
																			let getPlanId = setPlanID.toString()
																			this.props.history.push('payment/'+userid+"/"+getPlanId+'/per_annum')
																		}}/>
																	<label HTMLFor="radioorg"> Per Annum </label>
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
															
                                                            { planData['Gold'].features.tenant_screening ? <li className=" first even">{planData['Gold'].features.tenant_screening.feature_name} - {planData['Gold'].features.tenant_screening.feature_unit=='Limit'?(planData['Gold'].features.tenant_screening.limit_upto!=0?planData['Gold'].features.tenant_screening.limit_upto:'Free'):planData['Gold'].features.tenant_screening.confirmation}</li> : null }
                                                            
                                                        </ul>
                                                        <div className="submit-btn"> <a href="#">Buy Now</a> {/* onClick={() => {
                                                          let setPlanID = planData['Gold'].plan_details.plan_id
                                                          let getPlanId = setPlanID.toString()
                                                            this.props.history.push('/payment/'+userid+"/"+getPlanId+'/per_annum')
                                                        }}*/}
														<div className="col-md-6">
																<div className="radio radio-custom">
																	<input type="radio" name="plan_month_year" id="radioind" val="per_month"  value={'per_month'} 
																	onClick={() => {
																			let setPlanID = planData['Gold'].plan_details.plan_id
																			let getPlanId = setPlanID.toString()
																			this.props.history.push('payment/'+userid+"/"+getPlanId+'/per_month')
																		}} />
																	<label HTMLFor="radioind"> Per Month </label>
																</div>
															</div>
															<div className="col-md-6">
																<div className="radio radio-custom">
																	<input type="radio" name="plan_month_year" id="radioorg" val="per_annum"  value={'per_annum'} 
																	onClick={() => {
																			let setPlanID = planData['Gold'].plan_details.plan_id
																			let getPlanId = setPlanID.toString()
																			this.props.history.push('payment/'+userid+"/"+getPlanId+'/per_annum')
																		}}/>
																	<label HTMLFor="radioorg"> Per Annum </label>
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
															
                                                            { planData['Platinum'].features.tenant_screening ? <li className=" first even">{planData['Platinum'].features.tenant_screening.feature_name} - {planData['Platinum'].features.tenant_screening.feature_unit=='Limit'?(planData['Platinum'].features.tenant_screening.limit_upto!=0?planData['Platinum'].features.tenant_screening.limit_upto:'Free'):planData['Platinum'].features.tenant_screening.confirmation}</li> : null }
                                                        </ul>
                                                        <div className="submit-btn"> <a href="#" >Buy Now</a> {/*onClick={() => {
                                                          let setPlanID = planData['Platinum'].plan_details.plan_id
                                                          let getPlanId = setPlanID.toString()
                                                            this.props.history.push('/payment/'+userid+"/"+getPlanId+'/per_annum')
                                                        }}*/}
														<div className="col-md-6">
																<div className="radio radio-custom">
																	<input type="radio" name="plan_month_year" id="radioind" val="per_month"  value={'per_month'} 
																	onClick={() => {
																			let setPlanID = planData['Platinum'].plan_details.plan_id
																			let getPlanId = setPlanID.toString()
																			this.props.history.push('payment/'+userid+"/"+getPlanId+'/per_month')
																		}} />
																	<label HTMLFor="radioind"> Per Month </label>
																</div>
															</div>
															<div className="col-md-6">
																<div className="radio radio-custom">
																	<input type="radio" name="plan_month_year" id="radioorg" val="per_annum"  value={'per_annum'} 
																	onClick={() => {
																			let setPlanID = planData['Platinum'].plan_details.plan_id
																			let getPlanId = setPlanID.toString()
																			this.props.history.push('payment/'+userid+"/"+getPlanId+'/per_annum')
																		}}/>
																	<label HTMLFor="radioorg"> Per Annum </label>
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
	<link rel='stylesheet' href='css/theme.css' type='text/css' media='all' />
	<script type='text/javascript' src='js/validate.js'></script>
</div>
			);
	}
}
