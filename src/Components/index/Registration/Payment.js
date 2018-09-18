import React from "react"
import $ from 'jquery'

import Header from "../Header/Header1";
import API_URL from "../../../app-config";
import swal from 'sweetalert';
// import RegistraionFormType from './RegistartionFormType'

export default class PlanPayment extends React.Component {
  constructor(props){
    super(props)

    this.state={
        userDetails:{},
        month:'',
        year:'',
		tokenizedaccountnumber:'',
		cvv:''
		
    }
      this.userInfo = this.userInfo.bind(this);
      this.userDetails = this.userDetails.bind(this);
      this.paymentPage = this.paymentPage.bind(this);
      this.handleMonthChange=this.handleMonthChange.bind(this);
      this.handleYearChange=this.handleYearChange.bind(this);
	  this.changeaccHandler=this.changeaccHandler.bind(this);
      this.changecvvHandler=this.changecvvHandler.bind(this)
  }
 componentDidMount() {
    // setTimeout(function(){ $('#tzloadding').remove(); }, 2000)
    // $('html, body').animate({scrollTop: 0}, 1500);
    this.userInfo();
    this.userDetails();

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

  paymentPage(event) {
  event.preventDefault();
  	console.log(this.state);
  var payment_Object={
    "userid":this.state.userDetails.user_id,
    "tokenizedaccountnumber":this.state.tokenizedaccountnumber,
    "paymentmode": "card",
    "expirymmyy": this.state.month+this.state.year,
    "cvv": this.state.cvv,
    "routingnumber": null,
    "surchargeamount": null,
    "transactionamount":this.state.userDetails.planPrice,
    "currency": "USD",
    "transactionreference": null,
    "payeeid": null,
    "notifypayee": null,
    "profile": null,
    "profileid": null,
    "orderid":this.state.userDetails.orderid,
	"plan_id":this.state.userDetails.plan_id
  }
  console.log(payment_Object);
    fetch(`${API_URL}assetsapi/paymentgateway`,{
      method: 'post',
      //headers: {'Content-Type':'application/json'},
      body: JSON.stringify(payment_Object)
    })
          .then(res => res.json())
          .then(
            (result) => {
              // debugger;
              //alert("PaymentRes:"+JSON.stringify(result))
              //if(result){
                // this.setState({
                  // userDetails:result.user_detail
                // })
			  //}
			   if(result.msg.indexOf("Registered Successfully")!=-1)
			   {
				   //
				   swal("Assets Watch", result.msg);
				   	//this.props.history.replace('/');
					 window.location.href='/';
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
	render(){  

    if(this.state.userDetails){
      var user = this.state.userDetails
    }
	let tempDate = new Date();
	  var date = tempDate.toLocaleDateString();
		return(
      <div>
         {/* Logo container*/}
         <div className="logo text-center">
           {/* Text Logo */}
           {/*<a href="index.html" class="logo">*/}
           {/*Adminox*/}
           {/*</a>*/}
           {/* Image Logo */}
           <a href="index.html" className="logo"> <img src="/assets/images/logo_dark.png" alt className="logo-lg" /></a></div>
         <div className="payment-warp">
           <div className="container">
             {/* end page title end breadcrumb */}
             <div className="row">
               <div className="col-sm-12">
                 <div className="row">
                   <div className="col-md-3" />
                   <div className="col-sm-6 pay-now">
                     <div className="card-box widget-box-four">
                       <div className="card-body p-5">
                         <div className="amount-sec">
                           <div className="row">
                             <div className="col-md-7">
                               <h5>Pay Now</h5>
                               <p className="p-white">Register</p>
                             </div>
                             <div className="col-md-5 text-right">
                               <h5>Total Amount</h5>
                               <h5>$ {user.planPrice}</h5>
                             </div>
                           </div>
                         </div>
                         <div className="bref-detail">
                           <div className="row">
                             <div className="col-md-2">
                               <label>Name :</label>
                             </div>
                             <div className="col-md-5">
                               <label>{user.first_name+' '+user.last_name}</label>
                             </div>
                             <div className="col-md-2">
                               <label>Date :</label>
                             </div>
                             <div className="col-md-3">
                               <label>{date}</label>
                             </div>
                           </div>
                         </div>
                         <form role="form" className="card-dtl" method ="post" onSubmit={this.paymentPage.bind(this)}>
                           <div className="form-group">
                             <label htmlFor="name">Full Name (Card)</label>
                             <input type="text" ref="name" className="form-control" name="name" placeholder required />
                           </div> {/* form-group.// */}
                           <div className="form-group">
                             <label htmlFor="cardNumber">Card Number</label>
                             <input type="password" ref="cardNumber" className="form-control" name="cardNumber" onChange={this.changeaccHandler} placeholder />
                           </div> {/* form-group.// */}
                           <div className="row">
                             <div className="col-sm-8">
                               <div className="form-group">
                                 <label><span className="hidden-xs">Exp</span> </label>
                                 <div className="form-inline">
                                   <select className="form-control" style={{width: '45%'}} value={this.state.month} onChange={this.handleMonthChange}>
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
                                   <select className="form-control" style={{width: '45%'}} value={this.state.year} onChange={this.handleYearChange}>
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
                                 <label data-toggle="tooltip" title data-original-title="3 digits code on back side of the card">CVV <i className="fa fa-question-circle" /></label>
                                 <input className="form-control" ref="cvv" name="cvv" onChange={this.changecvvHandler} required type="password" />
                               </div> {/* form-group.// */}
                             </div>
                           </div> {/* row.// */}
                           <div className="col-md-12 text-center">
                             <button type="submit" className="btn btn-success uppercase" >Confirm</button>
                           </div>
                         </form>
                       </div> {/* card-body.// */}
                     </div> {/* card.// */}
                   </div>
                   <div className="col-md-3" />
                 </div>
               </div>
               <div className="col-md-12 text-center">
                 <li className="list-inline-item"> <button type="button" className="btn btn-warning waves-effect w-md waves-light"><i className="dripicons-home" /> Back to Home</button></li>
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
