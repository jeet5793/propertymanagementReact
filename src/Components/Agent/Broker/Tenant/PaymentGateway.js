import React from 'react'
import API_URL from "../../../../app-config";
import Cookies from 'js-cookie';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import swal from 'sweetalert';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import $ from 'jquery';
import NumberFormat from 'react-number-format';
export default class PaymentGateway extends React.Component {
  constructor(props){
    super(props)

    this.state={
	 userData:Cookies.get('profile_data'),
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
	
      // this.userInfo = this.userInfo.bind(this);
      // this.userDetails = this.userDetails.bind(this);
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
    // this.userInfo();
    // this.userDetails();
this.paymentCharges('CC');
  }
  componentDidUpdate() {

    // setTimeout(function(){ $('#tzloadding').remove(); }, 2000)
    // $('html, body').animate({scrollTop: 0}, 1500);
  }
changeNameHandler(e)
{
	e.preventDefault()
    this.setState({name:e.target.value});
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
  // userInfo() {
    // var id=${JSON.parse(this.state.userData).assets_id;
    // fetch(`${API_URL}assetsapi/profile/`+id)
          // .then(res => res.json())
          // .then(
            // (result) => {
             
              // this.props.updateInfo(result.profile);
            // },
            // (error) => {
              // this.setState({
                // isLoaded: true,
                // error
              // });
            // }
          // )
  // }
 /*  userDetails() {
	  
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
				console.log(this.state.userDetails);
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
 */
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
  // event.preventDefault();
  	// console.log(this.state);
	if(paymentType === 'CC'){
		  var payment_Object={
			"userid":'',
			"tokenizedaccountnumber":this.state.tokenizedaccountnumber,
			"paymentmode": "card",
			"expirymmyy": this.state.month+this.state.year,
			"cvv": this.state.cvv,
			"routingnumber": null,
			"surchargeamount": null,
			"transactionamount":'',
			"currency": "USD",
			"transactionreference": null,
			"payeeid": null,
			"notifypayee": null,
			"profile": null,
			"profileid": null,
			"orderid":'',
			"amount":'',
			"type": paymentType,
			"name":this.state.name,
			"extraAmt":'',
			"actual_amt":''
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
			// console.log(payment_Object);
			var retrievedData = localStorage.getItem("opts");
			var opts = JSON.parse(retrievedData);
			// console.log(JSON.stringify(opts));
			var Amount = opts.bgvAmt;
			if(this.state.paymentCharges.pay_mode=="Percentage")
			{
				var extraAmount = Number((Amount*this.state.paymentCharges.charges)/100);
				var TotAmt = Number(Amount)+Number(extraAmount);
				
			}
		   if(this.state.paymentCharges.pay_mode=="Amount")
			{
				var extraAmount = Number(this.state.paymentCharges.charges);
				var TotAmt = Number(Amount)+Number(extraAmount);
			}

			
			payment_Object.amount = TotAmt;
			payment_Object.transactionamount = TotAmt;
			payment_Object.actual_amt = Number(Amount);
			payment_Object.extraAmt = extraAmount;
			
			 var dataToPost = Object.assign(payment_Object,opts);
			  // console.log(JSON.stringify(dataToPost));
			  // alert(dataToPost);
			  $("#loaderDiv").show();
			fetch(`${API_URL}assetsapi/background_verification`, {
				method: 'post',        
				body: JSON.stringify(dataToPost)
				}).then((response) => {
				  return response.json();
				}).then((data) => {
				  //console.log('dataaaa:  ', data);
				  if(data)
				  {
					     $("#loaderDiv").hide();
						
					   // console.log(JSON.stringify(data));
					    var removeOpts = localStorage.removeItem("opts");
					    // console.log(JSON.stringify(check));
					   /*  $("#actionType").val("Yes");
					    $("#hiddenURL").val("broker-tenant");
					    $(".confirm-body").html(data.msg);
					    $("#BlockUIConfirm").show(); */
						confirmAlert({
								  customUI: ({ onClose }) => {
									return (
									  <div className='custom-ui'>
										<h4>Notification</h4>
										<p>{data.msg}</p>
										<button onClick={()=>{
													this.props.history.push('/broker-tenant')
										onClose()}}>Ok</button>
									  </div>
									)
								  }
								})
						// swal("Assets Watch", data.msg);
						 // window.location.reload();
							// window.location.href="/bgvpayment"
								
				  }
				
				}).catch((error) => {
				  console.log('error: ', error);
				}); 
		}
	}else if(paymentType === 'ACH'){
		var payment_Object={
			"userid":'',
			"tokenizedaccountnumber": this.state.achFields.tokenizedaccountnumber,
			  "paymentmode": "check",
			  "routingnumber": this.state.achFields.routingnumber,
			  "transactionamount":'' ,
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
			  "orderid":'',
			  "type": paymentType,
			  "name":this.state.achFields.name,
			  "extraAmt":'',
			"actual_amt":''
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
			// console.log(payment_Object);
			var retrievedData = localStorage.getItem("opts");
			var opts = JSON.parse(retrievedData);
			// console.log(JSON.stringify(opts));
			var Amount = opts.bgvAmt;
			if(this.state.paymentCharges.pay_mode=="Percentage")
			{
				var extraAmount = Number((Amount*this.state.paymentCharges.charges)/100);
				var TotAmt = Number(Amount)+Number(extraAmount);
				
			}
		   if(this.state.paymentCharges.pay_mode=="Amount")
			{
				var extraAmount = Number(this.state.paymentCharges.charges);
				var TotAmt = Number(Amount)+Number(extraAmount);
			}

			
			payment_Object.amount = TotAmt;
			payment_Object.transactionamount = TotAmt;
			payment_Object.actual_amt = Number(Amount);
			payment_Object.extraAmt = extraAmount;
			
			
			 var dataToPost = Object.assign(payment_Object,opts);
			  // console.log(JSON.stringify(dataToPost));
			  // alert(dataToPost);
			  $("#loaderDiv").show();
			fetch(`${API_URL}assetsapi/background_verification`, {
				method: 'post',        
				body: JSON.stringify(dataToPost)
				}).then((response) => {
				  return response.json();
				}).then((data) => {
				  //console.log('dataaaa:  ', data);
				  if(data)
				  {
					     $("#loaderDiv").hide();
						
					   // console.log(JSON.stringify(data));
					    var removeOpts = localStorage.removeItem("opts");
					    // console.log(JSON.stringify(check));
					    // $("#actionType").val("Yes");
					    // $("#hiddenURL").val("broker-tenant");
					    // $(".confirm-body").html(data.msg);
					    // $("#BlockUIConfirm").show();
						confirmAlert({
								  customUI: ({ onClose }) => {
									return (
									  <div className='custom-ui'>
										<h4>Notification</h4>
										<p>{data.msg}</p>
										<button onClick={()=>{
													this.props.history.push('/broker-tenant')
										onClose()}}>Ok</button>
									  </div>
									)
								  }
								})
						// swal("Assets Watch", data.msg);
						 // window.location.reload();
							// window.location.href="/bgvpayment"
								
				  }
				
				}).catch((error) => {
				  console.log('error: ', error);
				}); 
		}
	}
  
    
  }
   onClickReturn()
  {
	  window.location.href='/broker-tenant';
	  // this.props.history.replace('/owner-plan');
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
		var retrievedData = localStorage.getItem("opts");
		var opts = JSON.parse(retrievedData);
		// console.log(JSON.stringify(opts));
		var Amount = opts.bgvAmt;
		// var check = localStorage.removeItem("opts");
		// console.log(JSON.stringify(check));
    // if(this.state.userDetails){
      // var user = this.state.userDetails
    // }
	let tempDate = new Date();
	  var date = tempDate.toLocaleDateString();
		return(
      <div>
         {/* Logo container*/}
         
	 <div  style={{marginTop:'3%',marginBottom:'3%'}} className="wrapper">
         <div className="payment-warp">
           <div className="container">
             {/* end page title end breadcrumb */}
             <div className="row">
               <div className="col-sm-12">
                 <div className="row">
                   <div className="col-md-3" />
                  <div className="col-sm-6 pay-now">
						<div className="card-box">
                            <ul className="nav nav-tabs tabs-bordered nav-justified">
                                <li className="nav-item"> <a href="#credit-card" data-toggle="tab" onClick={this.changeTabs.bind(this, "credit-card")} id="CCTab" aria-expanded="true" className="nav-link font-16 active">Credit Card  </a> </li>
									{/* <li className="nav-item"> <a href="#ach" data-toggle="tab" onClick={this.changeTabs.bind(this, "ach")} id="ACHTab" aria-expanded="false" className="nav-link font-16">ACH  </a> </li> */}
                            </ul>
                            <div className="tab-content ">
                                <div className="tab-pane fade show active" id="credit-card">
                                    <div className="widget-box-four">
										<div className="card-body p-5">
											<div className="amount-sec">
												<div className="row">
													<div className="col-md-7">
														<h5>Pay Now</h5>
														<p>Background screening Payment</p>
													</div>
													<div className="col-md-5 text-right">
													<h5>Amount</h5>
														<h5><NumberFormat value={Amount} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}  fixedDecimalScale={true}/></h5>
													</div>
												</div>
												<div className="row">
													<div className="col-md-7">
														<p>CC Charges( {this.state.paymentCharges.pay_mode=="Amount"?"$":''}{this.state.paymentCharges.charges}{this.state.paymentCharges.pay_mode=="Percentage"?"%":''} )</p>
													</div>
													<div className="col-md-5 text-right">
													{this.state.paymentCharges.pay_mode=="Percentage" &&
													<h5><NumberFormat value={(Amount*this.state.paymentCharges.charges)/100} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}  fixedDecimalScale={true}/></h5>}
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
														<h5><NumberFormat value={(Number(Amount)+Number((Amount*this.state.paymentCharges.charges)/100))} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}  fixedDecimalScale={true}/> </h5>
													}
													{this.state.paymentCharges.pay_mode=="Amount" &&
														<h5><NumberFormat value={(Number(Amount)+Number(this.state.paymentCharges.charges))} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}  fixedDecimalScale={true}/> </h5>
													}
													</div>
												</div>
											</div>
											<div className="bref-detail">
												<div className="row">
													<div className="col-md-7">
													{opts.first_name+' '+opts.last_name}
													</div>
													<div className="col-md-2">
														<label>Date :</label>
													</div>
													<div className="col-md-3">
														<label>{date}</label>
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
												   <select className="form-control" style={{width: '45%'}} name = "month" value={this.state.month} onChange={this.handleMonthChange}>
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
												   <select className="form-control" name = "year" style={{width: '45%'}} value={this.state.year} onChange={this.handleYearChange}>
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
										 <input className="form-control" ref="cvv" name="cvv" onChange={this.changecvvHandler}  type="password" />
									   </div> {/* form-group.// */}
									 </div>
									</div>{/* <!-- row.// -->*/}
									<div className="col-md-12 text-center">
									<button type="button" onClick={this.paymentPage.bind(this,'CC')} className="btn btn-success uppercase" >Pay Now</button>
									</div>
									</form>
									</div> {/*<!-- card-body.// -->*/}
									</div> {/*<!-- card.// -->*/}
                                </div>
                                <div className="tab-pane fade" id="ach">
                                     <div className="widget-box-four">
										<div className="card-body p-5">
											<div className="amount-sec">
												<div className="row">
													<div className="col-md-7">
														<h5>Pay Now</h5>
														<p>Background screening Payment</p>
													</div>
													<div className="col-md-5 text-right">
													<h5>Amount</h5>
														<h5><NumberFormat value={Amount} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}  fixedDecimalScale={true}/></h5>
													</div>
												</div>
												<div className="row">
													<div className="col-md-7">
														<p>ACH Charges({this.state.paymentCharges.pay_mode=="Amount"?"$":''}{this.state.paymentCharges.charges}{this.state.paymentCharges.pay_mode=="Percentage"?"%":''} )</p>
													</div>
													<div className="col-md-5 text-right">
														{this.state.paymentCharges.pay_mode=="Percentage" &&
													<h5><NumberFormat value={(Amount*this.state.paymentCharges.charges)/100} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}  fixedDecimalScale={true}/></h5>}
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
														<h5><NumberFormat value={(Number(Amount)+Number((Amount*this.state.paymentCharges.charges)/100))} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}  fixedDecimalScale={true}/> </h5>
													}
													{this.state.paymentCharges.pay_mode=="Amount" &&
														<h5><NumberFormat value={(Number(Amount)+Number(this.state.paymentCharges.charges))} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}  fixedDecimalScale={true}/> </h5>
													}
													</div>
												</div>
											</div>
											<div className="bref-detail">
												<div className="row">
													<div className="col-md-7">
													{opts.first_name+' '+opts.last_name}
													</div>
													<div className="col-md-2">
														<label>Date :</label>
													</div>
													<div className="col-md-3">
														<label>{date}</label>
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
									<div className="col-md-12 text-center">
									<button type="button" onClick={this.paymentPage.bind(this,'ACH')} className="btn btn-success uppercase">Pay Now</button>
									</div>
								</form>
								</div> {/*<!-- card-body.// -->*/}
								</div> {/*<!-- card.// -->*/}
                                </div>
                            </div>
                        </div>
                   </div>
                   <div className="col-md-3" />
                 </div>
               </div>
               <div className="col-md-12 text-center">
                 <li className="list-inline-item"> <button type="button" onClick = {this.onClickReturn} className="btn btn-warning waves-effect w-md waves-light"><i className="dripicons-home" /> Back</button></li>
               </div>
             </div>
             {/* end row */}
           </div>
           {/* end container */}
         </div>
         {/* end wrapper */}
         {/* Footer */}
		</div>
       </div>


    );
	}
}
