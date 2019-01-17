import React from "react"
import $ from 'jquery'
import { connect } from 'react-redux';
import Header from "../Header/Header1";
import API_URL from "../../../app-config";
import swal from 'sweetalert';
// import RegistraionFormType from './RegistartionFormType'
import Cookies from 'js-cookie';
import { setUser } from '../../../actions';
import { withRouter } from 'react-router-dom';
import NumberFormat from 'react-number-format';
class PlanPayment extends React.Component {
  constructor(props){
    super(props)

    this.state={
        userDetails:{},
        month:'',
        year:'',
		tokenizedaccountnumber:'',
		cvv:'',
		name:'',
		achFields:{
			name:'',
			tokenizedaccountnumber:'',
			routingnumber:'',
			
		},
		paymentCharges:[]
		
    }
      this.userInfo = this.userInfo.bind(this);
      this.userDetails = this.userDetails.bind(this);
      this.paymentPage = this.paymentPage.bind(this);
      this.handleMonthChange=this.handleMonthChange.bind(this);
      this.handleYearChange=this.handleYearChange.bind(this);
	  this.changeaccHandler=this.changeaccHandler.bind(this);
      this.changecvvHandler=this.changecvvHandler.bind(this);
	  this.onClickReturn = this.onClickReturn.bind(this);
	   this.onChangeACH = this.onChangeACH.bind(this);
	   this.changeNameHandler = this.changeNameHandler.bind(this);
	   this.paymentCharges = this.paymentCharges.bind(this)
  }
 componentDidMount() {
    // setTimeout(function(){ $('#tzloadding').remove(); }, 2000)
    // $('html, body').animate({scrollTop: 0}, 1500);
    this.userInfo();
    this.userDetails();
	this.paymentCharges('CC');

  }
  componentDidUpdate() {

    //setTimeout(function(){ $('#tzloadding').remove(); }, 2000)
    //$('html, body').animate({scrollTop: 0}, 1500);
  }

  handleMonthChange(e){
    e.preventDefault()
    this.setState({month:e.target.value});
  }
  handleYearChange(e){
    e.preventDefault()
    this.setState({year:e.target.value});
  }
  changeaccHandler(e){
    e.preventDefault()
    this.setState({tokenizedaccountnumber:e.target.value});
  }
  changecvvHandler(e){
    e.preventDefault()
    this.setState({cvv:e.target.value});
  }
  changeNameHandler(e)
	{
		e.preventDefault()
		this.setState({name:e.target.value});
	}
  userInfo() {
    var id=this.props.location.search.replace('?Id=','');
    fetch(`${API_URL}assetsapi/profile/`+id)
          .then(res => res.json())
          .then(
            (result) => {
              // debugger;
              this.props.updateInfo(result.profile);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.//assetsapi/paymentgateway/`+54+`/`+2+`/per_annum`
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
  }
  userDetails() {
	  
	  const path = this.props.history.location.pathname;
	  //const exactpath =path.substring(1);
    fetch(`${API_URL}`+'assetsapi'+path)
          .then(res => res.json())
          .then(
            (result) => {
              // debugger;
              //alert(JSON.stringify(result))
              if(result){
                this.setState({
                  userDetails:result.user_detail
                })
				// console.log(this.state.userDetails);
              }
              //this.props.updateInfo(result.profile);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
  }
onChangeACH(e){
	var achField = this.state.achFields;
	if(e.target.name=="name")
		achField.name = e.target.value;
	if(e.target.name=="tokenizedaccountnumber")
		achField.tokenizedaccountnumber = e.target.value;
	if(e.target.name=="routingnumber")
		achField.routingnumber = e.target.value;
	this.setState({achFields:achField});
}
  paymentPage(paymentType) {
var user_detail = this.state.userDetails;
	if(paymentType === 'CC'){
		if(this.state.paymentCharges.pay_mode=="Percentage")
		{
			var extraAmt = Number((this.state.userDetails.planPrice*this.state.paymentCharges.charges)/100);
			var planPrice= Number(this.state.userDetails.planPrice)+Number(extraAmt)
		}
	   if(this.state.paymentCharges.pay_mode=="Amount")
		{
			var extraAmt = Number(this.state.paymentCharges.charges);
			var planPrice = Number(this.state.userDetails.planPrice);
		}
	
		var payment_Object={
			"userid":user_detail.user_id,
			"tokenizedaccountnumber":this.state.tokenizedaccountnumber,
			"paymentmode": "card",
			"expirymmyy": this.state.month+this.state.year,
			"cvv": this.state.cvv,
			"routingnumber": null,
			"surchargeamount": null,
			"transactionamount":planPrice,
			"currency": "USD",
			"transactionreference": null,
			"payeeid": null,
			"notifypayee": null,
			"profile": null,
			"profileid": null,
			"orderid":user_detail.orderid,
			"plan_id":user_detail.plan_id,
			"plan_type":user_detail.plan_month_year,
			"type": paymentType,
			"name":this.state.name,
			"extraAmt":extraAmt,
			"actual_amt":Number(this.state.userDetails.planPrice)
			
		}
		if(!payment_Object.name){
			 alert("Full Name should not be blank");
			return;
		}
		if(!payment_Object.tokenizedaccountnumber){
			 alert("Card Number should not be blank");
			return;
		}
		if(!this.state.month){
			 alert("Month should not be blank");
			return;
		}
		if(!this.state.year){
			 alert("Year should not be blank");
			return;
		}
		if(!payment_Object.cvv){
			 alert("CVV should not be blank");
			return;
		}else{
			$("#loaderDiv").show();
		  fetch(`${API_URL}assetsapi/paymentgateway`,{
      method: 'post',
      //headers: {'Content-Type':'application/json'},
      body: JSON.stringify(payment_Object)
    })
          .then(res => res.json())
          .then(
            (result) => {
             
			$("#loaderDiv").hide();
			   if(result.msg.indexOf("Registered Successfully")!=-1)
			   {	
		   // console.log(JSON.stringify(this.state.userDetails));
				var opts = {"email":this.state.userDetails.email,"password":this.state.userDetails.password,"assets_type":this.state.userDetails.assets_type};
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
													this.props.setUser(data.userdata, result.profile);
													Cookies.set("profile_data", data.userdata);

													if(result.profile.assets_type==="1"){
													 // this.props.history.push('/user')
																$("#actionType").val("Yes");
																	$("#hiddenURL").val("/user");
																   $(".confirm-body").html("Registered Successfully");
																   $("#SBlockUIConfirm").show();
													}else if(result.profile.assets_type==="2"){
														if(data.userdata.agentType==="Broker")
														{
															// this.props.history.push('/agent-broker')
															$("#actionType").val("Yes");
																	$("#hiddenURL").val("/agent-broker");
																   $(".confirm-body").html("Registered Successfully");
																   $("#SBlockUIConfirm").show();
														}
														else{
															// this.props.history.push('/agent-serviceprovider')
															$("#actionType").val("Yes");
																	$("#hiddenURL").val("/agent-serviceprovider");
																   $(".confirm-body").html("Registered Successfully");
																   $("#SBlockUIConfirm").show();
														}
													   
													}else{
														
														// this.props.history.push('/tenant')
														$("#actionType").val("Yes");
																	$("#hiddenURL").val("/tenant");
																   $(".confirm-body").html("Registered Successfully");
																   $("#SBlockUIConfirm").show();
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
				fetchInProgress: false,
                error
              });
            }
          )
		}
		 
	}else if(paymentType === 'ACH'){
		if(this.state.paymentCharges.pay_mode=="Percentage")
		{
			var extraAmt = Number((this.state.userDetails.planPrice*this.state.paymentCharges.charges)/100);
			var planPrice= Number(this.state.userDetails.planPrice)+Number(extraAmt)
		}
	   if(this.state.paymentCharges.pay_mode=="Amount")
		{
			var extraAmt = Number(this.state.paymentCharges.charges);
			var planPrice = Number(this.state.userDetails.planPrice);
		}
		// var planPrice= Number(this.state.userDetails.planPrice)+Number(1.00);
		var payment_Object={
			"userid":user_detail.user_id,
			"tokenizedaccountnumber": this.state.achFields.tokenizedaccountnumber,
			  "paymentmode": "check",
			  "routingnumber": this.state.achFields.routingnumber,
			  "transactionamount": planPrice,
			  "surchargeamount": null,
			  "currency": null,
			  "payeefirstname": "",
			  "payeelastname": "",
			  "address": "",
			  "city": "",
			  "state": "",
			  "country": "",
			  "zip": "",
			  "email": "",
			  "transactionreference": null,
			  "orderid": null,
			  "payeeid": null,
			  "udfield1": null,
			  "udfield2": null,
			  "udfield3": null,
			  "notifypayee": null,
			  "profile": null,
			  "profileid": null,
			  "orderid":user_detail.orderid,
				"plan_id":user_detail.plan_id,
				"plan_type":user_detail.plan_month_year,
			  "type": paymentType,
			  "name":this.state.achFields.name,
			  "extraAmt":Number(extraAmt),
			"actual_amt":Number(this.state.userDetails.planPrice)
		}
		if(!payment_Object.name){
			 alert("Name should not be blank");
			return;
		}
		if(!payment_Object.tokenizedaccountnumber){
			 alert("Transaction A/C should not be blank");
			return;
		}
		if(!payment_Object.routingnumber){
			 alert("Routing Number should not be blank");
			return;
		}else{
		 $("#loaderDiv").show();
	  // console.log(payment_Object);
		fetch(`${API_URL}assetsapi/paymentgateway`,{
      method: 'post',
      //headers: {'Content-Type':'application/json'},
      body: JSON.stringify(payment_Object)
    })
          .then(res => res.json())
          .then(
            (result) => {
             
			$("#loaderDiv").hide();
			   if(result.msg.indexOf("Registered Successfully")!=-1)
			   {	
		   // console.log(JSON.stringify(this.state.userDetails));
				var opts = {"email":this.state.userDetails.email,"password":this.state.userDetails.password,"assets_type":this.state.userDetails.assets_type};
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
													this.props.setUser(data.userdata, result.profile);
													Cookies.set("profile_data", data.userdata);

													if(result.profile.assets_type==="1"){
													 // this.props.history.push('/user')
																$("#actionType").val("Yes");
																	$("#hiddenURL").val("/user");
																   $(".confirm-body").html("Registered Successfully");
																   $("#SBlockUIConfirm").show();
													}else if(result.profile.assets_type==="2"){
														if(data.userdata.agentType==="Broker")
														{
															// this.props.history.push('/agent-broker')
															$("#actionType").val("Yes");
																	$("#hiddenURL").val("/agent-broker");
																   $(".confirm-body").html("Registered Successfully");
																   $("#SBlockUIConfirm").show();
														}
														else{
															// this.props.history.push('/agent-serviceprovider')
															$("#actionType").val("Yes");
																	$("#hiddenURL").val("/agent-serviceprovider");
																   $(".confirm-body").html("Registered Successfully");
																   $("#SBlockUIConfirm").show();
														}
													   
													}else{
														
														// this.props.history.push('/tenant')
														$("#actionType").val("Yes");
																	$("#hiddenURL").val("/tenant");
																   $(".confirm-body").html("Registered Successfully");
																   $("#SBlockUIConfirm").show();
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
				fetchInProgress: false,
                error
              });
            }
          )
  
		}
	}
    
  }
  onClickReturn()
  {
	  window.location.href='/';
  }
  changeTabs(id) {
        if (id == "ach") {
            $("#CCTab").removeClass("active");
			this.paymentCharges('ACH');
		}
        else {
            $("#ACHTab").removeClass("active");
			
			this.paymentCharges('CC');
        }
    }
	paymentCharges(Type){
		$("#loaderDiv").show();
		fetch(`${API_URL}assetsapi/getPaymentCharges/`+Type,{
			  method: 'get',
			})
				  .then(res => res.json())
				  .then(
					(result) => {
						$("#loaderDiv").hide();
					 this.setState({paymentCharges:result.paymentCharges});
					},
					
					(error) => {
					  this.setState({
						isLoaded: true,
						error
					  });
					}
				  )
	}
	render(){  

    if(this.state.userDetails){
      var user = this.state.userDetails
    }
	let tempDate = new Date();
	  var date = tempDate.toLocaleDateString();
		return(
		
		<div>
	<div className="container">
	<div className="tz_page_content">
		<div className="post-1083 page type-page status-publish hentry">
			<div id="login-2" className="bootstrap-wrapper tz-login">
				<div className="menu-toggler sidebar-toggler"></div>
				<div className="col-md-4 col-md-offset-4">
					<div className="index-paym">
						<ul className="nav nav-pills nav-justified no-margin">
							<li className="active">
								<a href="#credit-card" data-toggle="pill" onClick={this.changeTabs.bind(this, "credit-card")} id="CCTab" aria-expanded="true" className="nav-link font-16 active">Credit Card  </a>
							</li>
							<li>
							<a href="#ach" data-toggle="pill" onClick={this.changeTabs.bind(this, "ach")} id="ACHTab" aria-expanded="false" className="nav-link font-16">ACH  </a>
							</li>
						</ul>
						<div className="tab-content tab-cnt">
							<div id="credit-card" className="tab-pane fade in active">
																	<div className="widget-box-four">
																		<div className="card-body p-5">
																			<div className="amount-sec">
																				<div className="row">
																					<div className="col-md-7">
																						<h5>Pay Now</h5>
																						<p>Register</p>
																					</div>
																					<div className="col-md-5 text-right">
																					<h5>Amount</h5>
																						<h5>$ {user.planPrice}</h5>
																					</div>
																				</div>
																			<div className="row">
																			<div className="col-md-7">
																				<p>CC Charges( {this.state.paymentCharges.pay_mode=="Amount"?"$":''}{this.state.paymentCharges.charges}{this.state.paymentCharges.pay_mode=="Percentage"?"%":''} )</p>
																			</div>
																			<div className="col-md-5 text-right">
																			{this.state.paymentCharges.pay_mode=="Percentage" &&
													<h5><NumberFormat value={(user.planPrice*this.state.paymentCharges.charges)/100} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}  fixedDecimalScale={true}/></h5>}
													{this.state.paymentCharges.pay_mode=="Amount" &&
													<h5><NumberFormat value={this.state.paymentCharges.charges} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}  fixedDecimalScale={true}/></h5>}
																				
																			</div>
																			</div>
																			<hr style={{backgroundColor:"#fff"}}/>
																			<div className="row">
																				<div className="col-md-7">
																					<p>Total Amount</p>
																				</div>
																				<div className="col-md-5 text-right">
																				{this.state.paymentCharges.pay_mode=="Percentage" &&
																			<h5><NumberFormat value={(Number(user.planPrice)+Number((user.planPrice*this.state.paymentCharges.charges)/100))} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}  fixedDecimalScale={true}/> </h5>
																		}
																		{this.state.paymentCharges.pay_mode=="Amount" &&
																			<h5><NumberFormat value={(Number(user.planPrice)+Number(this.state.paymentCharges.charges))} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}  fixedDecimalScale={true}/> </h5>
																		}
																					
																				</div>
																			</div>
																		</div>
																			<div className="bref-detail">
																				<div className="row">
																					<div className="col-md-7">
																					{user.first_name+' '+user.last_name}
																					</div>
																					<div className="col-md-5">
																						<label>Date : {date}</label>
																					</div>
																				</div>
																			</div>
																	<form role="form" className="card-dtl" >
																	 <div className="form-group">
																		 <label htmlFor="name">Full Name (Card)<span className="required"/></label>
																		 <input type="text" ref="name" className="form-control" name="name" onChange={this.changeNameHandler} placeholder />
																	   </div> {/* form-group.// */}
																	   <div className="form-group">
																		 <label htmlFor="cardNumber">Card Number<span className="required"/></label>
																		 <input type="text" ref="cardNumber" className="form-control" name="tokenizedaccountnumber" onChange={this.changeaccHandler} placeholder />
																	   </div> {/* form-group.// */}

																	<div className="row">
																		 <div className="col-sm-8">
																			   <div className="form-group">
																				 <label><span className="hidden-xs">Exp<span className="required"/></span> </label>
																				 <div className="form-inline">
																				   <select className="form-control form-control-solid" style={{width: '45%'}} name = "month" value={this.state.month} onChange={this.handleMonthChange}>
																					 <option value="">MM</option>
																					<option value="01">January</option>
																					<option value="02">February</option>
																					<option value="03">March</option>
																					<option value="04">April</option>
																					<option value="05">May</option>
																					<option value="06">June</option>
																					<option value="07">July</option>
																					<option value="08">August</option>
																					<option value="09">September</option>
																					<option value="10">October</option>
																					<option value="11">November</option>
																					<option value="12">December</option>
																				   </select>
																				   <span style={{width: '10%', textAlign: 'center'}}> / </span>
																				   <select className="form-control form-control-solid" name = "year" style={{width: '45%'}} value={this.state.year} onChange={this.handleYearChange}>
																					 <option value="">YY</option>
																					<option value="18">2018</option>
																					<option value="19">2019</option>
																					<option value="20">2020</option>
																					<option value="21">2021</option>
																					<option value="22">2022</option>
																					<option value="23">2023</option>
																					<option value="24">2024</option>
																					<option value="25">2025</option>
																					<option value="26">2026</option>
																					<option value="27">2027</option>
																					<option value="28">2028</option>
																					<option value="29">2029</option>
																					<option value="30">2030</option>                            
																				   </select>
																				 </div>
																			   </div>
																			 </div>
																		<div className="col-sm-4">
																	   <div className="form-group">
																		 <label data-toggle="tooltip" title data-original-title="3 digits code on back side of the card">CVV<span className="required"/> <i className="fa fa-question-circle" /></label>
																		 <input className="form-control" ref="cvv" name="cvv" onChange={this.changecvvHandler}  type="text" />
																	   </div> {/* form-group.// */}
																	 </div>
																	</div>{/* <!-- row.// -->*/}
																	<div className=" text-center">
																	<button type="button" onClick={this.paymentPage.bind(this,'CC')} className="btn btn-success uppercase" >Pay Now</button>
																	</div>
																	</form>
																	</div> {/*<!-- card-body.// -->*/}
																	</div> {/*<!-- card.// -->*/}
								</div>
								<div id="ach" className="tab-pane fade">
																	 <div className="widget-box-four">
																		<div className="card-body p-5">
																			<div className="amount-sec">
																				<div className="row">
																					<div className="col-md-7">
																						<h5>Pay Now</h5>
																						<p>Register</p>
																					</div>
																					<div className="col-md-5 text-right">
																					<h5> Amount</h5>
																						<h5>$ {user.planPrice}</h5>
																					</div>
																				</div>
																			<div className="row">
																				<div className="col-md-7">
																					<p>ACH Charges({this.state.paymentCharges.pay_mode=="Amount"?"$":''}{this.state.paymentCharges.charges}{this.state.paymentCharges.pay_mode=="Percentage"?"%":''} )</p>
																				</div>
																				<div className="col-md-5 text-right">
																				{this.state.paymentCharges.pay_mode=="Percentage" &&
																			<h5><NumberFormat value={(Number(user.planPrice)+Number((user.planPrice.Amount*this.state.paymentCharges.charges)/100))} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}  fixedDecimalScale={true}/> </h5>
																		}
																		{this.state.paymentCharges.pay_mode=="Amount" &&
																			<h5><NumberFormat value={(Number(user.planPrice)+Number(this.state.paymentCharges.charges))} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}  fixedDecimalScale={true}/> </h5>
																		}
																					
																				</div>
																			</div>
																			<hr style={{backgroundColor:"#fff"}}/>
																			<div className="row">
																				<div className="col-md-7">
																					<p>Total Amount</p>
																				</div>
																				<div className="col-md-5 text-right">
																				{this.state.paymentCharges.pay_mode=="Percentage" &&
														<h5><NumberFormat value={(Number(user.planPrice)+Number((user.planPrice*this.state.paymentCharges.charges)/100))} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}  fixedDecimalScale={true}/> </h5>
													}
													{this.state.paymentCharges.pay_mode=="Amount" &&
														<h5><NumberFormat value={(Number(user.planPrice)+Number(this.state.paymentCharges.charges))} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}  fixedDecimalScale={true}/> </h5>
													}
																					
																				</div>
																			</div>
																		</div>
																			<div className="bref-detail">
																				<div className="row">
																					<div className="col-md-7">
																					{user.first_name+' '+user.last_name}
																					</div>
																					<div className="col-md-5">
																						<label>Date : {date}</label>
																					</div>
																				</div>
																			</div>
																<form role="form" className="card-dtl" >
																	<div className="form-group">
																	<label>Name<span className="required"/> </label>
																		<input type="text" className="form-control" name="name" onChange = {this.onChangeACH} placeholder=""/>
																	</div> {/*<!-- form-group.// -->*/}

																	<div className="form-group">
																	<label>Transaction A/C<span className="required"/></label>
																		<input type="text" className="form-control" name="tokenizedaccountnumber" onChange = {this.onChangeACH} placeholder=""/>
																	</div> {/*<!-- form-group.// -->*/}
																	<div className="form-group">
																	<label>Routing Number<span className="required"/></label>
																		<input type="text" className="form-control" name="routingnumber" onChange = {this.onChangeACH}placeholder=""/>
																	</div> {/*<!-- form-group.// -->*/}
																	<div className="text-center">
																	<button type="button" onClick={this.paymentPage.bind(this,'ACH')} className="btn btn-success uppercase">Pay Now</button>
																	</div>
																</form>
																</div> {/*<!-- card-body.// -->*/}
																</div> {/*<!-- card.// -->*/}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
		</div>


    );
	}
}
export default withRouter(connect(state=>({ userData: state.userData }), { setUser })(PlanPayment));
