import React from 'react'
import {Link} from 'react-router-dom'
import API_URL from '../../../app-config';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import img_not_available from '../../../images/img_not_available.png'
import $ from 'jquery';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import NumberFormat from 'react-number-format';
import PropertyHistory from './PropertyHistory'
class TenantMyProperty extends React.Component {
	constructor(props){
    super(props)
this.imgServer=API_URL,

		this.state = {
			 propertiesLoading:false,
          userInfo:props.userData,
          userData:Cookies.get('profile_data'),
          profileData:'',
          property:[],
		  propertyImg:[],
		   propertyDetail:[],
		   chequeForm:{
			   chqno:'',
			   amt:'',
			   description:'',
			   assets_id:'',
			   deal_id:'',
			   property_id:'',
			   payFor:'',
			   paid_month:''
		   },
		   reportStatus:false,
			propertyHistoryList:[]
			
		}
		this.onClickDownload = this.onClickDownload.bind(this);
		this.viewProperty = this.viewProperty.bind(this);
		this.onClickPay = this.onClickPay.bind(this);
		this.ChequePay = this.ChequePay.bind(this);
				this.propertyHistory = this.propertyHistory.bind(this);
	}
	componentDidMount(){
		$("#loaderDiv").show();
		const profile=JSON.parse(this.state.userData)
        fetch(`${API_URL}assetsapi/service_request/${profile.assets_id}/${profile.session_id}`, {
          method: 'get'
        })
        .then(res => res.json())
        .then(
          (result) => {
			   this.setState({propertiesLoading:true})
            // console.log("data 2: "+JSON.stringify(result.service))
			$("#loaderDiv").hide();
            if (result.success) {
              this.setState({property:result.service.property_list,propertiesLoading:true})
              
            } 
             // console.log("property"+JSON.stringify(this.state.property))
          },
        (error) => {
          console.log('error')
        }
      )
	}
	onClickDownload(deal_id){
		 // alert("dsahfh");
		 // <a href={`${API_URL}assetsapi/download_agreement/`+deal_id}/>
		  window.open(`${API_URL}assetsapi/download_agreement/`+deal_id,'_self')
		//console.log("deal_id"+JSON.stringify(deal_id));
		 
			
	 }
	 viewProperty(property_id){
		 $("#loaderDiv").show();
        fetch(`${API_URL}assetsapi/property_details/`+property_id, {
          method: 'get'
        })
        .then(res => res.json())
        .then(
          (result) => {
			$("#loaderDiv").hide();
            if (result.success) {
              $(".proeprty-sec").show();
			 this.setState({propertyDetail: result.property});
			 $("#table").hide();
			 // this.setState({propertyImg: result.property.img_path});
				  
            } 
              // console.log("property##"+JSON.stringify(result.property[0].img_path))
          },
        (error) => {
          console.log('error')
        }
      )
		 
		 
	 }
	 onClickClose(){
		$(".proeprty-sec").hide(); 
		 $("#table").show();
	 }
	 changeTabs(id) {
        if (id == "details") {
            $("#descriptionTab").removeClass("active")
            $("#locationTab").removeClass("active")

        } else if (id == "location") {
            $("#descriptionTab").removeClass("active")
            $("#detailsTab").removeClass("active")
        }
        else {
            $("#detailsTab").removeClass("active")
            $("#locationTab").removeClass("active")
        }
    }
	addDefaultSrc(ev){
	  ev.target.src = img_not_available;
	}
	onClickPay(element){
		const profile=JSON.parse(this.state.userData)
		// console.log('prop outside '+JSON.stringify(this.props));
		let propId = element.property_id;
		$("#loaderDiv").show();
        fetch(`${API_URL}assetsapi/checkMerchant/${profile.assets_id}/`+propId, {
          method: 'get'
        })
        .then(res => res.json())
        .then(
          (result) => {
			$("#loaderDiv").hide();
            if (result.success==1) {
				fetch(`${API_URL}assetsapi/getTransaction/`+element.deal_id+`/`+element.property_status, {
					  method: 'get'
					})
					.then(res => res.json())
					.then(
					  (response) => {

						if (response.success==1) {
							if(element.property_status=='Rent' || element.property_status=='Rented'){
								var pendinAmt = (element.rent-response.paidAmt);
							}else{
								var pendinAmt = (element.total_amount-response.paidAmt);
							}
							
							
							if(pendinAmt>0){
								
								this.props.history.push({
								  pathname: '/tenant-deal-payment',
								 state:{rent:element.rent,total_amount:element.total_amount,deal_id:element.deal_id,userId:JSON.parse(this.state.userData).assets_id,paidFor:element.property_status,property_id:element.property_id}
								})
							}else{
								if(element.property_status=='Rent' || element.property_status=='Rented'){
									var msg = ('You already paid for this month');
								}else{
									var msg = ('You already paid');
								}
								$("#actionType").val("No");
							   $("#hiddenURL").val("tenant-myproperty");
							   $(".confirm-body").html(msg);
							   $("#BlockUIConfirm").show()
							}
						   
						  
						}else{
							this.props.history.push({
								  pathname: '/tenant-deal-payment',
								 state:{rent:element.rent,total_amount:element.total_amount,deal_id:element.deal_id,userId:JSON.parse(this.state.userData).assets_id,paidFor:element.property_status,property_id:element.property_id}
								})
						} 
						  // console.log("trans_detail"+JSON.stringify(this.state.trans_detail))
					  },
					(error) => {
					  console.log('error')
					}
				  )
             
				  
            }else if(result.success==0){
				 
				// console.log('prop inside1 '+JSON.stringify(this.props));
					$("#actionType").val("No");
					   $("#hiddenURL").val("tenant-myproperty");
					   $(".confirm-body").html(result.msg);
					   $("#BlockUIConfirm").show();
					   $(".row-dialog-btn").click(function(){
							$(".confirm-body").html("Do you want pay by cheque?");
							$("#TBlockUIConfirm").show();
					   });
					  
					   
					   $(".pay-btn").click(function(){
							let pay = this.value
							//alert(pay)
							if(pay==='Yes')
							{ 
								//console.log('prop inside '+JSON.stringify(element));
;
								$("#ChequeBlockUIConfirm").show();
								$("#TBlockUIConfirm").hide();
								
								if(element.property_status=='Sale'|| element.property_status=='Sold')
								{
									var amt = element.total_amount;
									var payFor = element.property_status;
								}else if(element.property_status=='Rent'||element.property_status=='Rented'){
									var amt = element.rent;
									var payFor = element.property_status;
									$("#paidMonth").show();
									
								}
								$('#TtlAmt').html('$'+amt);
								$('#chequeBtn').val(element.deal_id);
								$('#property_id').val(element.property_id);
								$('#payFor').val(payFor);
								
								fetch(`${API_URL}assetsapi/getTransaction/`+element.deal_id+`/`+payFor, {
									  method: 'get'
									})
									.then(res => res.json())
									.then(
									  (result) => {
										if (result.success==1) {
										
										 var pendingAmt = amt - result.paidAmt;
										 $('#pendingAmt').html('$'+pendingAmt);
										}else{
											 var pendingAmt = amt ;
										 $('#pendingAmt').html('$'+pendingAmt);
										} 
										
										if(pendingAmt<0){
											$("#ChequeBlockUIConfirm").hide();
											if(element.property_status=='Rent' || element.property_status=='Rented'){
												var msg = ('You already paid for this month');
											}else{
												var msg = ('You already paid');
											}
											
											$("#actionType").val("No");
											   $("#hiddenURL").val("tenant-myproperty");
											   $(".confirm-body").html(msg);
											   $("#BlockUIConfirm").show();
											    $(".row-dialog-btn").click(function(){
													$("#TBlockUIConfirm").hide();
												$("#ChequeBlockUIConfirm").hide();
												});
										}
										  // console.log("trans_detail"+JSON.stringify(this.state.trans_detail))
									  },
									(error) => {
									  console.log('error')
									}
								  )
								
							}
							if(pay==='No')
							{
								$("#TBlockUIConfirm").hide();
							}
					   });
			}
              // console.log("property##"+JSON.stringify(result.property[0].img_path))
          },
        (error) => {
          console.log('error')
        }
      )
		
	}
	onChangeCheque=(e)=>{
		var cheque = this.state.chequeForm;
		if(e.target.name=='chqno'){
			cheque.chqno=e.target.value;
		}
		if(e.target.name=='amt'){
			cheque.amt=e.target.value;
		}
		if(e.target.name=='description'){
			cheque.description=e.target.value;
		}
		if(e.target.name=='paid_month'){
			cheque.paid_month=e.target.value;
		}
		cheque.deal_id = $('#chequeBtn').val();
		cheque.property_id = $('#property_id').val();
		cheque.payFor = $('#payFor').val();
		cheque.assets_id = JSON.parse(this.state.userData).assets_id;
		this.setState({chequeForm:cheque});
		
		//console.log(this.state.chequeForm)
	}
	ChequePay(){
		$("#TBlockUIConfirm").hide();
		var opts = this.state.chequeForm;
		//console.log(opts)
		if(!opts.chqno){
			 alert("Cheque number should not be blank");
			return;
		}
		if(!opts.amt){
			 alert("Amount should not be blank");
			return;
		}
		if(!opts.description){
			 alert("Description should not be blank");
			return;
		}else{
			$("#loaderDiv").show();
			
			$("#ChequeBlockUIConfirm").hide();
			fetch(`${API_URL}assetsapi/payByCheque`,{
			  method: 'post',
			  body: JSON.stringify(opts)
			})
				  .then(res => res.json())
				  .then(
					(result) => {
					    
						$("#loaderDiv").hide();
							 
							   $("#actionType").val("No");
							   $("#hiddenURL").val("tenant-myproperty");
							   $(".confirm-body").html(result.msg);
							   
							    $("#BlockUIConfirm").show();
								
						$(".row-dialog-btn").click(function(){
							
							$("#TBlockUIConfirm").hide();
					   });
								
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
	onClickChequeClose() {
		$("#ChequeBlockUIConfirm").hide();
	}
	propertyHistory(){
		 $("#loaderDiv").show();
		$(".proeprty-sec").hide(); 
		  $("#table").hide();
		  fetch(`${API_URL}assetsapi/property_history/${JSON.parse(this.state.userData).assets_id}/${JSON.parse(this.state.userData).session_id}`, {
				  method: "GET"
				})
				  .then(response => {
					return response.json();
				  })
				  .then((data) => {
					//debugger;
					//console.log('dataaaa:  ', data);
					$("#loaderDiv").hide();
					if(data.success===1){
					  // var userid = data.user.assets_id
					  // localStorage.setItem('userid',userid)
								
							 this.setState({propertyHistoryList:data.property_history,reportStatus:true});	
								   
						}
				  }
				).catch((error) => {
					console.log('error: ', error);
				  });
		 
	}
	back(){
		
		this.setState({reportStatus:false});
		$("#table").show();
	}
    render() {
		 const imgSer=this.imgServer;
		 	let tempDate = new Date();
	  var date = tempDate.toLocaleDateString();
		 // console.log('this.state.userData'+JSON.stringify(this.state.userData));
        return (
            <div>
          
            <div className="wrapper">
                <div className="container">                     
                <div className="page-title-box">
                <div className="btn-group pull-right">
                    <ol className="breadcrumb hide-phone p-0 m-0">
                    <li>
					{this.state.reportStatus?<button type="button"  onClick={()=>this.back()} name="report" className="btn btn-default stepy-finish">Back</button>:<button  className="btn btn-success waves-effect waves-light"  onClick={this.propertyHistory}>Property History</button>} &nbsp;
					
					</li>
					
                    </ol>
                </div>
                <h4 className="page-title">My Properties</h4>
                </div>
                {this.state.property.length>0?
                                  
                    <div className="row" id="table">
                    <div className="col-sm-12">
                        <div className="card-box">
                        <div className="table-responsive">
					
                            <table className="table table-hover m-0 table-actions-bar">
                            <thead>
                                <tr>
                                <th> <i className="fi fi-image"></i> </th>
                                <th>Title</th>
                                <th>Location</th>
                                <th>Property Status</th>                                
                                <th>Status</th>
                                <th>Posted Date</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                           { this.state.property.map(element=>(
                                    <tr>
                                        <td>
                                            <img onError={this.addDefaultSrc} src={(element.img_path && element.img_path.length>0)?imgSer+element.img_path:img_not_available} alt="contact-img" title="contact-img" className="rounded-circle property-img" />
                                        </td>
                                        <td><h5 className="m-b-0 m-t-0 font-600">{element.property_name}</h5></td>
                                        {/* <td><i className="mdi mdi-map-marker text-primary"></i> #0,22ndFloor,27th Main NewYork </td> */}
                                        <td><i className="mdi mdi-map-marker text-primary"></i>{element.address}</td>
                                        {/*<td><i className="mdi mdi-currency-usd text-warning"></i> 2333 </td>*/}
                                        <td>{element.property_type}</td>
                                        {/* <td><i className="mdi mdi-currency-usd text-warning"></i> 366 </td> */}
                                        <td><i></i> {element.property_status}</td>
                                        <td><i></i>  </td>
                                        <td>
                                          	
                                           <a onClick = {this.viewProperty.bind(this,element.property_id)}  id="view-property" className="table-action-btn">
                                                <i style={{cursor:'pointer'}} className="mdi mdi-eye"></i>
                                            </a>
											<a title="Download"  href="#" className="table-action-btn view-rqu"><i className="mdi mdi-download" onClick={() => this.onClickDownload(element.deal_id)}></i></a>
												{/* <Link to={{pathname:'/tenant-deal-payment',state:{rent:element.rent,total_amount:element.total_amount,deal_id:element.deal_id,userId:JSON.parse(this.state.userData).assets_id,paidFor:element.property_status,property_id:element.property_id}}}  className="table-action-btn" >
                                                <button className="btn btn-success" style={{cursor:'pointer'}}>Pay</button>
												</Link> */}
												<a onClick={this.onClickPay.bind(this,element)}  className="table-action-btn" >
                                                <button className="btn btn-success" style={{cursor:'pointer'}}>Pay</button>
												</a>
                                            
                                        </td>
                                    </tr>
                           ))}      
                                
                               
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    </div>
                    :<div className="container"><div style={{textAlign:'center'}} colSpan={7}>No Property Added</div></div>
                }
                    {/* <!-- end row --> */}
                    
                    <div className="row">
                    <div className="col-sm-12"> </div>
                    </div>
                    {/* <!-- end Panel -->  */}
					{this.state.reportStatus && <PropertyHistory propertyHistoryList={this.state.propertyHistoryList}/>}
                    {/* =========================property view==========================================*/}
				
				
				 <div className="row proeprty-sec" id="">
                    <div className="col-12">
                        <div className="card-box">
						<div className=" view-property-close">
								<button type="button" className="btn btn-primary waves-effect waves-light" onClick={this.onClickClose}>Back</button>
                            </div>
                            <h4 className="header-title m-t-0 view-property-title">Property Title</h4>
							
							<div className="col-12 no-padding">
                            <div className="single-item slider ">
							{/*this.state.propertyImg.map((item)=>(
							
                                <div>
                                    <img src={API_URL+item.img_path} alt="slider-img" className="img-fluid"/>
                                </div>
                              ))*/}
							   <Carousel showThumbs={false}>
							  {this.state.propertyDetail.map((item)=>(
								item.img_path.map((element)=>(
									<div>
										<img onError={this.addDefaultSrc} src={API_URL+element.img_path} alt="slider-img" className="img-fluid"/>
									</div>
									))
                              ))}
							   </Carousel>
                            </div>
                            </div>
							<ul className="nav nav-tabs tabs-bordered">
								<li className="nav-item"> <a href="#description" onClick={this.changeTabs.bind(this, "description")} id ="descriptionTab" data-toggle="tab" aria-expanded="true" className="nav-link font-16 active">Description  </a> </li>
								<li className="nav-item"> <a href="#details" data-toggle="tab" onClick={this.changeTabs.bind(this, "details")} id ="detailsTab"  aria-expanded="false" className="nav-link font-16">Details  </a> </li>
								<li className="nav-item"> <a href="#location" data-toggle="tab" onClick={this.changeTabs.bind(this, "location")} id ="locationTab"  aria-expanded="false" className="nav-link font-16">Location  </a> </li>
                            </ul>
							<div className="col-12 no-padding m-t-15">
						 {this.state.propertyDetail.map((item)=>(
							<div className="tab-content">
								<div className="tab-pane active" id="description">
									<div className="row">
										{item.description}
									</div>
						  
								</div>
								
							<div className="tab-pane" id="details">
								
									<p className="tz-property-detail"> Price:&nbsp; <strong> ${item.total_amount} </strong> </p>
										<p className="tz-property-detail"> Area:&nbsp; <strong> {item.square_feet}&nbsp; </strong> </p>
										<p className="tz-property-detail"> Type:&nbsp; <strong> {item.property_type} </strong> </p>
										<p className="tz-property-detail"> Bedrooms:&nbsp; <strong>  {item.bedroom} </strong> </p>
										<p className="tz-property-detail"> Bathrooms:&nbsp; <strong>  {item.bathroom} </strong> </p>
										<p className="tz-property-detail"> Status:&nbsp; <strong>  {item.property_status} </strong> </p>
								
						   </div>
						  
						   <div className="tab-pane" id="location">
								<div className="row">
									 <iframe style={{width:'100%',height:'450px'}} src={item.geo_location} allowfullscreen></iframe>
								</div>
						   </div>
						</div>
						 ))}
							
                           
							</div>
                        </div>
                    </div>
				</div> 
				{/* =========================property view end==========================================*/}
                </div>
                {/* <!-- end container -->  */}
                </div>
            {/* end wrapper */} 
            {/* Footer */}
            
            {/* End Footer */} 
            {/* jQuery  */} 
            {/* Tether for Bootstrap */} 
            {/* Examples */} 
            {/* App js */} 
					<div id="TBlockUIConfirm" className="BlockUIConfirm" style={{display:"none"}}>
						<div className="blockui-mask"></div>
						<div className="RowDialogBody">
							<div className="confirm-header row-dialog-hdr-success">
								Notification
							</div>
							<div className="confirm-body">
								
							</div>
							<div className="confirm-btn-panel text-center">
								<div className="btn-holder">
									<input type="hidden" id="hiddenURL" />
									<input type="hidden" id="actionType" />
									<input type="button" className="pay-btn btn btn-success" value="Yes" />
									<input type="button" className="pay-btn btn btn-naked" value="No" />
								</div>
							</div>
						</div>
					</div>
					
					<div id="ChequeBlockUIConfirm" className="BlockUIConfirm" style={{display:"none"}}>
						<div className="blockui-mask"></div>
						
						<div className="RowDialogBody">
							<div className="confirm-header row-dialog-hdr-success">
								Cheque Submission
								<button type="button" className="close" onClick={this.onClickChequeClose}>×</button>
							</div>
							<div className="confirm-body1" id="confirm-body">
								<div className="tab-pane">
                                     <div className="widget-box-four">
										<div className="card-body p-5">
											<div className="amount-sec">
												<div className="row">
													<div className="col-md-7">
														<h5>Total Amount</h5>	
													</div>
													<div className="col-md-5 text-right">
														 <h5 id="TtlAmt"></h5>
													</div>
												</div>
											<div className="row">
													<div className="col-md-7">
														<p>Pending Amount</p>
													</div>
													<div className="col-md-5 text-right">
														<h5 id="pendingAmt"></h5>
													</div>
												</div>
											
												<hr style={{backgroundColor:"#fff"}}/>
												
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
													<label>Cheque Number<span className="required"/> </label>
														<input type="text" className="form-control" onChange={this.onChangeCheque} name="chqno"  placeholder=""/>
													</div> {/*<!-- form-group.// -->*/}

													<div className="form-group">
													<label>Amount<span className="required"/></label>
														<input type="text" className="form-control" id ="amt" name="amt"  onChange={this.onChangeCheque} placeholder=""/>
													</div> {/*<!-- form-group.// -->*/}
													<div className="form-group" id="paidMonth" style={{display:'none'}}>
														 <label htmlFor="paid_month">Paid for month<span className="required"/></label>
														<select className="form-control"  name = "paid_month"  onChange={this.onChangeCheque}>
															<option value="">Please Select</option>
															<option value="January">January</option>
															<option value="February">February</option>
															<option value="March">March</option>
															<option value="April">April</option>
															<option value="May">May</option>
															<option value="June">June</option>
															<option value="July">July</option>
															<option value="August">August</option>
															<option value="September">September</option>
															<option value="October">October</option>
															<option value="November">November</option>
															<option value="December">December</option>
												   </select>
													</div> 
													<div className="form-group">
													<label>Description<span className="required"/></label>
														<textarea className="form-control" name="description"  onChange={this.onChangeCheque} placeholder=""/>
													</div> 
													<div className="col-md-12 text-center">
													<input type="hidden" className="form-control" id ="property_id" name="property_id"   placeholder=""/>
													<input type="hidden" className="form-control" id ="payFor" name="payFor"   placeholder=""/>
													<button type="button"  id="chequeBtn" style={{cursor:"pointer"}} value="" className="btn btn-success uppercase" onClick={this.ChequePay}>Submit</button>
													</div>
												</form>
											
										</div>
									</div>
								</div>
							</div>
							
						</div>
					</div>
			
          </div>
        )
    }
}  

export default TenantMyProperty;