import React from 'react'
import Header from '../Header/TenantHeader'
import {Link} from 'react-router-dom'
import API_URL from '../../../app-config';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
//import '../../../css/theme.css'
//import '../../../css/plans.css'
import $ from 'jquery';
import swal from 'sweetalert';
import NumberFormat from 'react-number-format';
class Payment extends React.Component {
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
		checked: false,
		splitShow:false,
		checked1: false,
		splitShow1:false,
		spltAmt:'',
		subAmt:'',
		paybleAmt:'',
		spltAmtAch:'',
		subAmtAch:'',
		paybleAmtAch:'',
		paidAmt:''
		
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
	   this.CheckBoxHandle = this.CheckBoxHandle.bind(this);
	   this.splitAmtHandler = this.splitAmtHandler.bind(this);
	     this.CheckBoxHandleAch = this.CheckBoxHandleAch.bind(this);
  }
 componentDidMount() {
    // setTimeout(function(){ $('#tzloadding').remove(); }, 2000)
    // $('html, body').animate({scrollTop: 0}, 1500);
    // this.userInfo();
    // this.userDetails();
 fetch(`${API_URL}assetsapi/getTransaction/`+this.props.location.state.deal_id+`/`+this.props.location.state.paidFor, {
          method: 'get'
        })
        .then(res => res.json())
        .then(
          (result) => {
            if (result.success==1) {
              this.setState({paidAmt:result.paidAmt})
              
            } 
              // console.log("trans_detail"+JSON.stringify(this.state.trans_detail))
          },
        (error) => {
          console.log('error')
        }
      )

  }
  componentDidUpdate() {

    //setTimeout(function(){ $('#tzloadding').remove(); }, 2000)
    //$('html, body').animate({scrollTop: 0}, 1500);
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
  CheckBoxHandle(e){
	
	  if(!this.state.checked){
		this.setState({splitShow: !this.state.splitShow});
		this.setState({subAmt:'',paybleAmt:'',spltAmt:''})
	  }else{
		  this.setState({splitShow: this.state.splitShow});
		  this.setState({subAmt:'',paybleAmt:'',spltAmt:''})
		  
	  }
  }
  CheckBoxHandleAch(e){
	  if(!this.state.checked1){
		this.setState({splitShow1: !this.state.splitShow1});
		this.setState({subAmtAch:'',paybleAmtAch:'',spltAmtAch:''})
	  }else{
		  this.setState({splitShow1: this.state.splitShow1});
		  this.setState({subAmtAch:'',paybleAmtAch:'',spltAmtAch:''})
		  
	  }
  }
	splitAmtHandler(cardType,e){
		// console.log(cardType + ':'+e.target.name+'::'+e.target.value)
		  
		if(cardType=='CC'){
			this.setState({spltAmt:e.target.value});
			let subAmt = Number((e.target.value*2.99)/100);
			let paybleAmt = Number(e.target.value) + subAmt;
			// console.log(subAmt+'::'+paybleAmt);
			this.setState({subAmt:subAmt,paybleAmt:paybleAmt})
			// console.log(this.state.subAmt+':1:'+this.state.paybleAmt);
		}
		if(cardType=='ACH'){
			this.setState({spltAmtAch:e.target.value});
			let subAmtAch = Number(1.00);
			let paybleAmtAch = Number(e.target.value) + subAmtAch;
			// console.log(subAmt+'::'+paybleAmt);
			this.setState({subAmtAch:subAmtAch,paybleAmtAch:paybleAmtAch})
		}
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
  // event.preventDefault();
  	// console.log(this.state);
	var dealData = this.props.location.state;
	if(dealData.paidFor==='Rent'||dealData.paidFor==='Rented')
	{
		var totalAmt = (Number(dealData.rent)-Number(this.state.paidAmt));
		 
	}else{
		var totalAmt = (Number(dealData.total_amount)-Number(this.state.paidAmt));
		
	}
	
  
	if(paymentType === 'CC'){
		// var TAmt = (Number(transAmount)+Number((transAmount*2.99)/100));
		if(this.state.spltAmt){
			totalAmt = this.state.spltAmt;
		}else{
			totalAmt = totalAmt;
		}
		var payment_Object={
			"tokenizedaccountnumber":this.state.tokenizedaccountnumber,
			"paymentmode": "card",
			"expirymmyy": this.state.month+this.state.year,
			"cvv": this.state.cvv,
			"routingnumber": null,
			"surchargeamount": null,
			"transactionamount":totalAmt,
			"currency": "USD",
			"transactionreference": null,
			"payeeid": dealData.userId,
			"notifypayee": null,
			"profile": null,
			"profileid": null,
			"orderid":'',
			"deal_id":dealData.deal_id,
			"paid_for":dealData.paidFor,
			"property_id":dealData.property_id,
			"type": paymentType,
			  "name":this.state.name
			
		}
		//console.log("trans_detail"+JSON.stringify(payment_Object))
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
		  // console.log(payment_Object);
			fetch(`${API_URL}assetsapi/property_payment`,{
			  method: 'post',
			  //headers: {'Content-Type':'application/json'},
			  body: JSON.stringify(payment_Object)
			})
				  .then(res => res.json())
				  .then(
					(result) => {
					 
						$("#loaderDiv").hide();
							   
							   $("#actionType").val("Yes");
							   $("#hiddenURL").val("tenant-myproperty");
							   $(".confirm-body").html(result.msg);
							   $("#BlockUIConfirm").show();
					 
					  //this.props.updateInfo(result.profile);
					},
					
					(error) => {
					  this.setState({
						isLoaded: true,
						error
					  });
					}
				  )
		}
		 
	}else if(paymentType === 'ACH'){
		// var TAmt = (Number(transAmount)+Number((transAmount*1.00)/100));
		if(this.state.spltAmt){
			totalAmt = this.state.spltAmtAch;
		}else{
			totalAmt = totalAmt;
		}
		var payment_Object={
			
			"tokenizedaccountnumber": this.state.achFields.tokenizedaccountnumber,
			  "paymentmode": "check",
			  "routingnumber": this.state.achFields.routingnumber,
			  "transactionamount": totalAmt,
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
			 "payeeid": dealData.userId,
			  "udfield1": null,
			  "udfield2": null,
			  "udfield3": null,
			  "notifypayee": null,
			  "profile": null,
			  "profileid": null,
			"deal_id":dealData.deal_id,
			"paid_for":dealData.paidFor,
			"property_id":dealData.property_id,
			  "type": paymentType,
			  "name":this.state.achFields.name
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
		fetch(`${API_URL}assetsapi/property_payment`,{
		  method: 'post',
		  //headers: {'Content-Type':'application/json'},
		  body: JSON.stringify(payment_Object)
		})
			  .then(res => res.json())
			  .then(
				(result) => {
				 
					$("#loaderDiv").hide();
						   
						   $("#actionType").val("Yes");
						   $("#hiddenURL").val("tenant-myproperty");
						   $(".confirm-body").html(result.msg);
						   $("#BlockUIConfirm").show();
				 
				  //this.props.updateInfo(result.profile);
				},
				
				(error) => {
				  this.setState({
					isLoaded: true,
					error
				  });
				}
			  )
		
		}
  
	}
  }
  onClickReturn()
  {
	  window.location.href='/tenant-myproperty';
	  // this.props.history.replace('/owner-plan');
  }
  changeTabs(id) {
        if (id == "ach") {
            $("#CCTab").removeClass("active");
		}
        else {
            $("#ACHTab").removeClass("active");
			
			
        }
    }
	render(){  
	// console.log(this.props.history);
	
    if(this.state.userDetails){
      var user = this.state.userDetails
    }
	let tempDate = new Date();
	  var date = tempDate.toLocaleDateString();
	  
	  var dealData = this.props.location.state;
	  
	var RentAmt = dealData.rent;
	var SellAmt = dealData.total_amount;
	var PaidAmount = this.state.paidAmt;

	
		return(
      <div>
	  <Header name="tenant-myproperty"  first_name={window.localStorage.getItem('firstName')} 
                last_name={window.localStorage.getItem('lastName')} />
         {/* Logo container*/}
         <div className="logo text-center">
           {/* Text Logo */}
           {/*<a href="index.html" class="logo">*/}
           {/*Adminox*/}
           {/*</a>*/}
           {/* Image Logo */}
           <a href="/" className="logo"> <img src="/assets/images/logo_dark.png" alt className="logo-lg" /></a></div>
          <div className="payment-warp  paym-pay">
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
									<li className="nav-item"> <a href="#ach" data-toggle="tab" onClick={this.changeTabs.bind(this, "ach")} id="ACHTab" aria-expanded="false" className="nav-link font-16">ACH  </a> </li>
                            </ul>
                            <div className="tab-content ">
                                <div className="tab-pane fade show active" id="credit-card">
                                    <div className="widget-box-four">
										<div className="card-body p-5">
											<div className="amount-sec">
												<div className="row">
													<div className="col-md-7">
														<h5>Pay Now</h5>
														 <p className="p-white">Property Payment</p>
													</div>
													<div className="col-md-5 text-right">
													<h5>Amount</h5>
														 <h5>{(dealData.paidFor==='Rent'||dealData.paidFor==='Rented')?<NumberFormat value={RentAmt} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true}/>:<NumberFormat value={SellAmt} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}  fixedDecimalScale={true}/>}</h5>
													</div>
												</div>
												<div className="row">
													<div className="col-md-7">
														<p>Pending Amount</p>
													</div>
													<div className="col-md-5 text-right">
														<h5>{(dealData.paidFor==='Rent'||dealData.paidFor==='Rented')?<NumberFormat value={Number(RentAmt)-Number(PaidAmount)} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true}/>:<NumberFormat value={Number(SellAmt)-Number(PaidAmount)} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true}/> }</h5>
													</div>
												</div>
											<div className="row">
													<div className="col-md-7">
														<p>CC Charges(2.99%)</p>
													</div>
													<div className="col-md-5 text-right">
														<h5>{(dealData.paidFor==='Rent'||dealData.paidFor==='Rented')?<NumberFormat value={((Number(RentAmt)-Number(PaidAmount))*2.99)/100} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true}/>:<NumberFormat value={(Number(SellAmt)-Number(PaidAmount)*2.99)/100} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true}/>}</h5>
													</div>
													
												</div>
												<hr style={{backgroundColor:"#fff"}}/>
												<div className="row">
													<div className="col-md-7">
														<p>Total Amount</p>
													</div>
													<div className="col-md-5 text-right">
														<h5>{(dealData.paidFor==='Rent'||dealData.paidFor==='Rented')?<NumberFormat value={((Number(RentAmt)-Number(PaidAmount))+ Number(((Number(RentAmt)-Number(PaidAmount))*2.99)/100))} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true}/>:<NumberFormat value={((Number(SellAmt)-Number(PaidAmount))+ Number(((Number(SellAmt)-Number(PaidAmount))*2.99)/100))} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true}/> }</h5>
													</div>
												</div>
												
												<div className="row">
													<div className="col-md-7">
														<input type="checkbox" defaultChecked={this.state.checked}  onChange = {this.CheckBoxHandle}/>
														<label style = {{color:'#fff'}}> Partial Amount </label>
													</div>
										{this.state.splitShow?<div className="col-md-5 text-right">
														 <input type="text"  onChange = {this.splitAmtHandler.bind(this,'CC')} value={this.state.spltAmt} className="form-control"  name="split_amount" />
													</div>:''}
												</div>
												{this.state.splitShow && this.state.subAmt?
												<div className="row">
													<div className="col-md-7">
														<p>CC Charges(2.99%)</p>
													</div>
													<div className="col-md-5 text-right">
														<p><NumberFormat value={this.state.subAmt} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true}/></p>
													</div>
												</div>:''}
												{this.state.splitShow && this.state.paybleAmt?
												<div className="row">
													<div className="col-md-7">
														Payble Amount
													</div>
													<div className="col-md-5 text-right">
													<p><NumberFormat value={this.state.paybleAmt} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true}/></p>
														
													</div>
												</div>:''}
											</div>
											<div className="bref-detail">
												<div className="row">
													<div className="col-md-7">
													<label>{window.localStorage.getItem('firstName').replace(/["']/g, "")+''+window.localStorage.getItem('lastName').replace(/["']/g, "")}</label>
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
										 <input className="form-control" ref="cvv" name="cvv" onChange={this.changecvvHandler}  type="text" />
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
														 <p className="p-white">Property Payment</p>
													</div>
													<div className="col-md-5 text-right">
													<h5>Amount</h5>
														 <h5>{(dealData.paidFor==='Rent'||dealData.paidFor==='Rented')?<NumberFormat value={RentAmt} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true}/>:<NumberFormat value={SellAmt} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}  fixedDecimalScale={true}/>}</h5>
													</div>
												</div>
											<div className="row">
													<div className="col-md-7">
														<p>Pending Amount</p>
													</div>
													<div className="col-md-5 text-right">
														<h5>{(dealData.paidFor==='Rent'||dealData.paidFor==='Rented')?<NumberFormat value={Number(RentAmt)-Number(PaidAmount)} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true}/>:<NumberFormat value={Number(SellAmt)-Number(PaidAmount)} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true}/> }</h5>
													</div>
												</div>
											<div className="row">
													<div className="col-md-7">
														<p>ACH Charges($1.00)</p>
													</div>
													<div className="col-md-5 text-right">
														<h5>$1</h5>
													</div>
													
												</div>
												<hr style={{backgroundColor:"#fff"}}/>
												<div className="row">
													<div className="col-md-7">
														<p>Total Amount</p>
													</div>
													<div className="col-md-5 text-right">
														<h5>{(dealData.paidFor==='Rent'||dealData.paidFor==='Rented')?<NumberFormat value={((Number(RentAmt)-Number(PaidAmount))+1.00)} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true}/>:<NumberFormat value={((Number(SellAmt)-Number(PaidAmount))+1.00)} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true}/>}</h5>
													</div>
												</div>
												<div className="row">
													<div className="col-md-7">
														<input type="checkbox" defaultChecked={this.state.checked1}   onChange = {this.CheckBoxHandleAch}/>
														<label  style = {{color:'#fff'}}> Partial Amount </label>
													</div>
										{this.state.splitShow1?<div className="col-md-5 text-right">
														 <input type="text"  onChange = {this.splitAmtHandler.bind(this,'ACH')} value={this.state.spltAmtAch} className="form-control"  name="split_amount" />
													</div>:''}
												</div>
												{this.state.splitShow && this.state.subAmtAch?
												<div className="row">
													<div className="col-md-7">
														<p>ACH Charges($1.00)</p>
													</div>
													<div className="col-md-5 text-right">
														<p><NumberFormat value={this.state.subAmtAch} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true}/></p>
													</div>
												</div>:''}
												{this.state.splitShow1 && this.state.paybleAmtAch?
												<div className="row">
													<div className="col-md-7">
														Payble Amount
													</div>
													<div className="col-md-5 text-right">
													<p><NumberFormat value={this.state.paybleAmtAch} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true}/></p>
														
													</div>
												</div>:''}
											</div>
											<div className="bref-detail">
												<div className="row">
													<div className="col-md-7">
													<label>{window.localStorage.getItem('firstName').replace(/["']/g, "")+''+window.localStorage.getItem('lastName').replace(/["']/g, "")}</label>
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


    );
	}
}
export default connect(state=>({ userData: state.userData, userProfile: state.userProfile }))(Payment)