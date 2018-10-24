import React from 'react'
//import '../../../css/theme.css'
//import '../../../css/plans1.css'
import $ from 'jquery'
//import './comp-main.css'
//import './custom-main.css'
import API_URL from '../../../app-config';
export default class Plans extends React.Component {
	constructor(props) {
		super(props)
		this.loggedIn = this.loggedIn.bind(this);
		this.state = {
			planData: null,
			userPlan: 'Owner'
		}
	}
	componentDidMount() {

		setTimeout(function () { $('#tzloadding').remove(); }, 2000);

		$('html, body').animate({ scrollTop: 0 }, 800);
$("#loaderDiv").show();
		fetch(`${API_URL}assetsapi/plan`)
			.then((response) => {
				response.json().then((data) => {
					$("#loaderDiv").hide();
					// console.log('planData:  ', data);
					this.setState({ planData: data.plan });
				})
			});
	}
	loggedIn() {
		this.props.login()
	}
	render() {
		const { planData, userPlan } = this.state;
		return (
			<div className="mg-top-129 planpg">
				{this.plansStyle}
				<div className="tz-Breadcrumb">
					<div className="tzOverlayBreadcrumb">
						<div className="container">
							<h1> Plans </h1>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-md-offset-3 col-sm-offset-3 col-md-6 col-sm-6">
							<div className="event-start"> {/* navAlign */}
								<ul className="nav nav-pills">
									<li className="active"><a data-toggle="pill" href="#owner" onClick={() => {
										this.setState({ userPlan: 'Owner' });
									}}>Owner</a></li>
									<li><a data-toggle="pill" href="#agent" onClick={() => {
										this.setState({ userPlan: 'Agent' });
									}}>Agent</a></li>
									<li><a data-toggle="pill" href="#tenant" onClick={() => {
										this.setState({ userPlan: 'Tenant' });
									}}>Tenant</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				{planData?
				<div className="container plans">
					<div className="tab-content">
						<div id="owner" className="col-md-12 tab-pane fade in active">
							<div className="tz_page_content">
								<div className="post-1081 page type-page status-publish hentry">
									<div className="bootstrap-wrapper">
										<div className="text-center">
											{
												(planData && planData[userPlan]) ? (
													<div>
														{
															planData[userPlan]['Basic'] ? (
																	<div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
																	<ul id="price-t-5" className="">
																		<li>
																			<h2>Basic</h2>
																			<h3>$ {planData[userPlan]['Basic'].plan_details.per_month}/{planData[userPlan]['Basic'].plan_details.per_annum} <br /><span> {Number(planData[userPlan]['Basic'].plan_details.per_annum) === 0 ? 'Free' : 'per month/Annum'}  </span></h3>
																			<ul>
																				{planData[userPlan]['Basic'].features.manage_properties_upto ? <li className=" first even">{planData[userPlan]['Basic'].features.manage_properties_upto.feature_name} - {planData[userPlan]['Basic'].features.manage_properties_upto.feature_unit=='Limit'?planData[userPlan]['Basic'].features.manage_properties_upto.limit_upto:planData[userPlan]['Basic'].features.manage_properties_upto.confirmation}</li> : null}
																				
																				{planData[userPlan]['Basic'].features.upload_image_per_property ? <li className=" first even">{planData[userPlan]['Basic'].features.upload_image_per_property.feature_name} - {planData[userPlan]['Basic'].features.upload_image_per_property.feature_unit=='Limit'?planData[userPlan]['Basic'].features.upload_image_per_property.limit_upto:planData[userPlan]['Basic'].features.upload_image_per_property.confirmation}</li> : null}
																				
																				{planData[userPlan]['Basic'].features.create_agreement ? <li className=" first even">{planData[userPlan]['Basic'].features.create_agreement.feature_name} - {planData[userPlan]['Basic'].features.create_agreement.feature_unit=='Limit'?planData[userPlan]['Basic'].features.create_agreement.limit_upto:planData[userPlan]['Basic'].features.create_agreement.confirmation}</li> : null}
																				
																				{planData[userPlan]['Basic'].features.send_agreement_for_signature ? <li className=" first even">{planData[userPlan]['Basic'].features.send_agreement_for_signature.feature_name} - {planData[userPlan]['Basic'].features.send_agreement_for_signature.feature_unit=='Limit'?planData[userPlan]['Basic'].features.send_agreement_for_signature.limit_upto:planData[userPlan]['Basic'].features.send_agreement_for_signature.confirmation}</li> : null}
																				
																				{planData[userPlan]['Basic'].features.basic_fields ? <li className=" first even">{planData[userPlan]['Basic'].features.basic_fields.feature_name} - {planData[userPlan]['Basic'].features.basic_fields.feature_unit=='Limit'?(planData[userPlan]['Basic'].features.basic_fields.limit_upto!=0?planData[userPlan]['Basic'].features.basic_fields.limit_upto:'Free'):planData[userPlan]['Basic'].features.basic_fields.confirmation}</li> : null}
																				
																				{planData[userPlan]['Basic'].features.mobile_app ? <li className=" first even">{planData[userPlan]['Basic'].features.mobile_app.feature_name} - {planData[userPlan]['Basic'].features.mobile_app.feature_unit=='Limit'?(planData[userPlan]['Basic'].features.mobile_app.limit_upto!=0?planData[userPlan]['Basic'].features.mobile_app.limit_upto:'Free'):planData[userPlan]['Basic'].features.mobile_app.confirmation}</li> : null}
																				
																				{planData[userPlan]['Basic'].features.reminders_notifications ? <li className=" first even">{planData[userPlan]['Basic'].features.reminders_notifications.feature_name} - {planData[userPlan]['Basic'].features.reminders_notifications.feature_unit=='Limit'?(planData[userPlan]['Basic'].features.reminders_notifications.limit_upto!=0?planData[userPlan]['Basic'].features.reminders_notifications.limit_upto:'Free'):planData[userPlan]['Basic'].features.reminders_notifications.confirmation}</li> : null}
																				
																			</ul>
																			{/*<div className="submit-btn"> <a href="#">Buy Now</a> </div>*/}
																		</li>
																	</ul>
																</div>
															) : null
														}
														{
															planData[userPlan]['Silver'] ? (
																	<div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
																	<ul id="price-t-5" className="">
																		<li>
																			<h2>Silver</h2>
																			<h3>$ {planData[userPlan]['Silver'].plan_details.per_month}/{planData[userPlan]['Silver'].plan_details.per_annum} <br /><span> {Number(planData[userPlan]['Silver'].plan_details.per_annum) === 0 ? 'Free' : 'per month/Annum'}  </span></h3>
																			<ul>
																				{planData[userPlan]['Silver'].features.manage_properties_upto ? <li className=" first even">{planData[userPlan]['Silver'].features.manage_properties_upto.feature_name} - {planData[userPlan]['Silver'].features.manage_properties_upto.feature_unit=='Limit'?planData[userPlan]['Silver'].features.manage_properties_upto.limit_upto:planData[userPlan]['Silver'].features.manage_properties_upto.confirmation}</li> : null}
																				
																				{planData[userPlan]['Silver'].features.upload_image_per_property ? <li className=" first even">{planData[userPlan]['Silver'].features.upload_image_per_property.feature_name} - {planData[userPlan]['Silver'].features.upload_image_per_property.feature_unit=='Limit'?planData[userPlan]['Silver'].features.upload_image_per_property.limit_upto:planData[userPlan]['Silver'].features.upload_image_per_property.confirmation}</li> : null}
																				
																				{planData[userPlan]['Silver'].features.create_agreement ? <li className=" first even">{planData[userPlan]['Silver'].features.create_agreement.feature_name} - {planData[userPlan]['Silver'].features.create_agreement.feature_unit=='Limit'?planData[userPlan]['Silver'].features.create_agreement.limit_upto:planData[userPlan]['Silver'].features.create_agreement.confirmation}</li> : null}
																				
																				{planData[userPlan]['Silver'].features.send_agreement_for_signature ? <li className=" first even">{planData[userPlan]['Silver'].features.send_agreement_for_signature.feature_name} - {planData[userPlan]['Silver'].features.send_agreement_for_signature.feature_unit=='Limit'?planData[userPlan]['Silver'].features.send_agreement_for_signature.limit_upto:planData[userPlan]['Silver'].features.send_agreement_for_signature.confirmation}</li> : null}
																				
																				{planData[userPlan]['Silver'].features.basic_fields ? <li className=" first even">{planData[userPlan]['Silver'].features.basic_fields.feature_name} - {planData[userPlan]['Silver'].features.basic_fields.feature_unit=='Limit'?(planData[userPlan]['Silver'].features.basic_fields.limit_upto!=0?planData[userPlan]['Silver'].features.basic_fields.limit_upto:'Free'):planData[userPlan]['Silver'].features.basic_fields.confirmation}</li> : null}
																				
																				{planData[userPlan]['Silver'].features.mobile_app ? <li className=" first even">{planData[userPlan]['Silver'].features.mobile_app.feature_name} - {planData[userPlan]['Silver'].features.mobile_app.feature_unit=='Limit'?(planData[userPlan]['Silver'].features.mobile_app.limit_upto!=0?planData[userPlan]['Silver'].features.mobile_app.limit_upto:'Free'):planData[userPlan]['Silver'].features.mobile_app.confirmation}</li> : null}
																				
																				{planData[userPlan]['Silver'].features.reminders_notifications ? <li className=" first even">{planData[userPlan]['Silver'].features.reminders_notifications.feature_name} - {planData[userPlan]['Silver'].features.reminders_notifications.feature_unit=='Limit'?(planData[userPlan]['Silver'].features.reminders_notifications.limit_upto!=0?planData[userPlan]['Silver'].features.reminders_notifications.limit_upto:'Free'):planData[userPlan]['Silver'].features.reminders_notifications.confirmation}</li> : null}
																				
																				{planData[userPlan]['Silver'].features.in_person_signature ? <li className=" first even">{planData[userPlan]['Silver'].features.in_person_signature.feature_name} - {planData[userPlan]['Silver'].features.in_person_signature.feature_unit=='Limit'?planData[userPlan]['Silver'].features.in_person_signature.limit_upto:planData[userPlan]['Silver'].features.in_person_signature.confirmation}</li> : null}
																				
																				
																			</ul>
																			{/*<div className="submit-btn"> <a href="#">Buy Now</a> </div>*/}
																		</li>
																	</ul>
																</div>
															) : null
														}
														{
															planData[userPlan]['Gold'] ? (
																	<div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
																	<ul id="price-t-5" className="">
																		<li>
																			<h2>Gold</h2>
																			<h3>$ {planData[userPlan]['Gold'].plan_details.per_month}/{planData[userPlan]['Gold'].plan_details.per_annum} <br /><span> {Number(planData[userPlan]['Silver'].plan_details.per_annum) === 0 ? 'Free' : 'per month/Annum'}  </span></h3>
																			<ul>
																				{planData[userPlan]['Gold'].features.manage_properties_upto ? <li className=" first even">{planData[userPlan]['Gold'].features.manage_properties_upto.feature_name} - {planData[userPlan]['Gold'].features.manage_properties_upto.feature_unit=='Limit'?planData[userPlan]['Gold'].features.manage_properties_upto.limit_upto:planData[userPlan]['Gold'].features.manage_properties_upto.confirmation}</li> : null}
																				
																				{planData[userPlan]['Gold'].features.upload_image_per_property ? <li className=" first even">{planData[userPlan]['Gold'].features.upload_image_per_property.feature_name} - {planData[userPlan]['Gold'].features.upload_image_per_property.feature_unit=='Limit'?planData[userPlan]['Gold'].features.upload_image_per_property.limit_upto:planData[userPlan]['Gold'].features.upload_image_per_property.confirmation}</li> : null}
																				
																				{planData[userPlan]['Gold'].features.create_agreement ? <li className=" first even">{planData[userPlan]['Gold'].features.create_agreement.feature_name} - {planData[userPlan]['Gold'].features.create_agreement.feature_unit=='Limit'?planData[userPlan]['Gold'].features.create_agreement.limit_upto:planData[userPlan]['Gold'].features.create_agreement.confirmation}</li> : null}
																				
																				{planData[userPlan]['Gold'].features.send_agreement_for_signature ? <li className=" first even">{planData[userPlan]['Gold'].features.send_agreement_for_signature.feature_name} - {planData[userPlan]['Gold'].features.send_agreement_for_signature.feature_unit=='Limit'?planData[userPlan]['Gold'].features.send_agreement_for_signature.limit_upto:planData[userPlan]['Gold'].features.send_agreement_for_signature.confirmation}</li> : null}
																				
																				{planData[userPlan]['Gold'].features.basic_fields ? <li className=" first even">{planData[userPlan]['Gold'].features.basic_fields.feature_name} - {planData[userPlan]['Gold'].features.basic_fields.feature_unit=='Limit'?(planData[userPlan]['Gold'].features.basic_fields.limit_upto!=0?planData[userPlan]['Gold'].features.basic_fields.limit_upto:'Free'):planData[userPlan]['Gold'].features.basic_fields.confirmation}</li> : null}
																				
																				{planData[userPlan]['Gold'].features.mobile_app ? <li className=" first even">{planData[userPlan]['Gold'].features.mobile_app.feature_name} - {planData[userPlan]['Gold'].features.mobile_app.feature_unit=='Limit'?(planData[userPlan]['Gold'].features.mobile_app.limit_upto!=0?planData[userPlan]['Gold'].features.mobile_app.limit_upto:'Free'):planData[userPlan]['Gold'].features.mobile_app.confirmation}</li> : null}
																				
																				{planData[userPlan]['Gold'].features.reminders_notifications ? <li className=" first even">{planData[userPlan]['Gold'].features.reminders_notifications.feature_name} - {planData[userPlan]['Gold'].features.reminders_notifications.feature_unit=='Limit'?(planData[userPlan]['Gold'].features.reminders_notifications.limit_upto!=0?planData[userPlan]['Gold'].features.reminders_notifications.limit_upto:'Free'):planData[userPlan]['Gold'].features.reminders_notifications.confirmation}</li> : null}
																				
																				{planData[userPlan]['Gold'].features.in_person_signature ? <li className=" first even">{planData[userPlan]['Gold'].features.in_person_signature.feature_name} - {planData[userPlan]['Gold'].features.in_person_signature.feature_unit=='Limit'?planData[userPlan]['Gold'].features.in_person_signature.limit_upto:planData[userPlan]['Gold'].features.in_person_signature.confirmation}</li> : null}
																				
																				{planData[userPlan]['Gold'].features.branding ? <li className=" first even">{planData[userPlan]['Gold'].features.branding.feature_name} - {planData[userPlan]['Gold'].features.branding.feature_unit=='Limit'?planData[userPlan]['Gold'].features.branding.limit_upto:planData[userPlan]['Gold'].features.branding.confirmation}</li> : null}
																				
																				{planData[userPlan]['Gold'].features.collect_payments ? <li className=" first even">{planData[userPlan]['Gold'].features.collect_payments.feature_name} - {planData[userPlan]['Gold'].features.collect_payments.feature_unit=='Limit'?planData[userPlan]['Gold'].features.collect_payments.limit_upto:planData[userPlan]['Gold'].features.collect_payments.confirmation}</li> : null}
																				
																				{planData[userPlan]['Gold'].features.tenant_screening ? <li className=" first even">{planData[userPlan]['Gold'].features.tenant_screening.feature_name} - {planData[userPlan]['Gold'].features.tenant_screening.feature_unit=='Limit'?planData[userPlan]['Gold'].features.tenant_screening.limit_upto:planData[userPlan]['Gold'].features.tenant_screening.confirmation}</li> : null}
																			</ul>
																			{/*<div className="submit-btn"> <a href="#">Buy Now</a> </div>*/}
																		</li>
																	</ul>
																</div>
															) : null
														}
														{
															planData[userPlan]['Platinum'] ? (
																	<div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
																	<ul id="price-t-5" className="">
																		<li>
																			<h2>Platinum</h2>
																			<h3>$ {planData[userPlan]['Platinum'].plan_details.per_month}/{planData[userPlan]['Platinum'].plan_details.per_annum} <br /><span> {Number(planData[userPlan]['Silver'].plan_details.per_annum) === 0 ? 'Free' : 'per month/Annum'}  </span></h3>
																			<ul>
																				{planData[userPlan]['Platinum'].features.manage_properties_upto ? <li className=" first even">{planData[userPlan]['Platinum'].features.manage_properties_upto.feature_name} - {planData[userPlan]['Platinum'].features.manage_properties_upto.feature_unit=='Limit'?planData[userPlan]['Platinum'].features.manage_properties_upto.limit_upto:planData[userPlan]['Platinum'].features.manage_properties_upto.confirmation}</li> : null}
																				
																				{planData[userPlan]['Platinum'].features.upload_image_per_property ? <li className=" first even">{planData[userPlan]['Platinum'].features.upload_image_per_property.feature_name} - {planData[userPlan]['Platinum'].features.upload_image_per_property.feature_unit=='Limit'?planData[userPlan]['Platinum'].features.upload_image_per_property.limit_upto:planData[userPlan]['Platinum'].features.upload_image_per_property.confirmation}</li> : null}
																				
																				{planData[userPlan]['Platinum'].features.create_agreement ? <li className=" first even">{planData[userPlan]['Platinum'].features.create_agreement.feature_name} - {planData[userPlan]['Platinum'].features.create_agreement.feature_unit=='Limit'?planData[userPlan]['Platinum'].features.create_agreement.limit_upto:planData[userPlan]['Platinum'].features.create_agreement.confirmation}</li> : null}
																				
																				{planData[userPlan]['Platinum'].features.send_agreement_for_signature ? <li className=" first even">{planData[userPlan]['Platinum'].features.send_agreement_for_signature.feature_name} - {planData[userPlan]['Platinum'].features.send_agreement_for_signature.feature_unit=='Limit'?planData[userPlan]['Platinum'].features.send_agreement_for_signature.limit_upto:planData[userPlan]['Platinum'].features.send_agreement_for_signature.confirmation}</li> : null}
																				
																				{planData[userPlan]['Platinum'].features.basic_fields ? <li className=" first even">{planData[userPlan]['Platinum'].features.basic_fields.feature_name} - {planData[userPlan]['Platinum'].features.basic_fields.feature_unit=='Limit'?(planData[userPlan]['Platinum'].features.basic_fields.limit_upto!=0?planData[userPlan]['Platinum'].features.basic_fields.limit_upto:'Free'):planData[userPlan]['Platinum'].features.basic_fields.confirmation}</li> : null}
																				
																				{planData[userPlan]['Platinum'].features.mobile_app ? <li className=" first even">{planData[userPlan]['Platinum'].features.mobile_app.feature_name} - {planData[userPlan]['Platinum'].features.mobile_app.feature_unit=='Limit'?(planData[userPlan]['Platinum'].features.mobile_app.limit_upto!=0?planData[userPlan]['Platinum'].features.mobile_app.limit_upto:'Free'):planData[userPlan]['Platinum'].features.mobile_app.confirmation}</li> : null}
																				
																				{planData[userPlan]['Platinum'].features.reminders_notifications ? <li className=" first even">{planData[userPlan]['Platinum'].features.reminders_notifications.feature_name} - {planData[userPlan]['Platinum'].features.reminders_notifications.feature_unit=='Limit'?(planData[userPlan]['Platinum'].features.reminders_notifications.limit_upto!=0?planData[userPlan]['Platinum'].features.reminders_notifications.limit_upto:'Free'):planData[userPlan]['Platinum'].features.reminders_notifications.confirmation}</li> : null}
																				
																				{planData[userPlan]['Platinum'].features.in_person_signature ? <li className=" first even">{planData[userPlan]['Platinum'].features.in_person_signature.feature_name} - {planData[userPlan]['Platinum'].features.in_person_signature.feature_unit=='Limit'?planData[userPlan]['Platinum'].features.in_person_signature.limit_upto:planData[userPlan]['Platinum'].features.in_person_signature.confirmation}</li> : null}
																				
																				{planData[userPlan]['Platinum'].features.branding ? <li className=" first even">{planData[userPlan]['Platinum'].features.branding.feature_name} - {planData[userPlan]['Platinum'].features.branding.feature_unit=='Limit'?planData[userPlan]['Platinum'].features.branding.limit_upto:planData[userPlan]['Platinum'].features.branding.confirmation}</li> : null}
																				
																				{planData[userPlan]['Platinum'].features.collect_payments ? <li className=" first even">{planData[userPlan]['Platinum'].features.collect_payments.feature_name} - {planData[userPlan]['Platinum'].features.collect_payments.feature_unit=='Limit'?planData[userPlan]['Platinum'].features.collect_payments.limit_upto:planData[userPlan]['Platinum'].features.collect_payments.confirmation}</li> : null}
																				{planData[userPlan]['Platinum'].features.tenant_screening ? <li className=" first even">{planData[userPlan]['Platinum'].features.tenant_screening.feature_name} - {planData[userPlan]['Platinum'].features.tenant_screening.feature_unit=='Limit'?planData[userPlan]['Platinum'].features.tenant_screening.limit_upto:planData[userPlan]['Platinum'].features.tenant_screening.confirmation}</li> : null}
																			</ul>
																			{/*<div className="submit-btn"> <a href="#">Buy Now</a> </div>*/}
																		</li>
																	</ul>
																</div>
															) : null
														}
													</div>
												) : 'No Plan Exists'
											}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>:<div className="container"  style={{marginTop:'10%',marginBottom:'10%'}}><img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" className="center-block"/></div>}
				<script type='text/javascript' src='js/validate.js'></script>
			</div>
		);
	}
}