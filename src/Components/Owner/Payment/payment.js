import React from 'react'
import avatar_1 from '../../../images/Owner/users/avatar-1.jpg'
import Header from '../Header/Header'
import $ from 'jquery'
import API_URL from "../../../app-config";
import Cookies from 'js-cookie';
import swal from 'sweetalert';
import DatePicker from 'react-date-picker';
import moment from 'moment';
export default class Payment extends React.Component{

  constructor(props) {
    super(props);
	this.onSubmitSingular = this.onSubmitSingular.bind(this);
    this.state = {
		singularEnrollForm:{
			  "email": "",
			  "dba_name": "",
			  "legal_name": "",
			  "business_address_line_1": "",
			  "business_address_line_2": "",
			  "business_city":'',
			  "business_state_province":"",
			  "business_postal_code":'',
			  "business_phone_number":"",
			  "website":"",
			  "business_category":"",
			  "business_type":"",
			  "business_description":"",
			  "city": "",
			  "state": "",
			  "zip_code": "",
			  "mobile_no": "",
			  "first_name": "",
			  "last_name": "",
			  "principal_middle_name":"",
			  "principal_title":"",
			  "principal_date_of_birth":"",
			  "principal_ownership_percent":"",
			  "principal_ssn":"",
			  "ownership_type":"",
			  "fed_tax_id": "",
			  "login_user":"",
			  "country":"",
			   "account_number": "",
			  "routing_number": "",
			  "account_holder_name": "",
			   "mcc": "",
			  "swiped_percent": "",
			  "keyed_percent": "",
			  "ecommerce_percent": "",
			  "cc_average_ticket_range": "",
			  "cc_monthly_volume_range": "",
			  "cc_high_ticket": "",
			  "ec_high_ticket": "",
			  "ec_average_ticket_range": "",
			  "ec_monthly_volume_range": "",
			  "principal_address_line_1":'',
			  "principal_address_line_2":""
		},
		singularFrame:[],
		profileData:[],
		userData:Cookies.get('profile_data'),
		enrollInfo:[],
		countries:[],
		states: [],
		cities: []
	};

    this.userInfo = this.userInfo.bind(this);
	this.singularFormDiv = this.singularFormDiv.bind(this);
	this.SingularBillChange = this.SingularBillChange.bind(this);
	this.ActiveDeactive = this.ActiveDeactive.bind(this);
	this.handleDobChange = this.handleDobChange.bind(this);
  }
  handleDobChange(date) {
		this.setState({
			singularEnrollForm: { principal_date_of_birth: date }
		});
	}
    componentDidMount(){
      this.userInfo();
      // if ( this.props.owner) {
      //   console.log('yyyyayyyyy')
      //   var $=window.$;
      //   $(".view-rqu").click(function(){
      //       $(".view-reslt").toggle();
      //   });

      //   $('.datatable').DataTable();

      //   //Buttons examples
      //   $('#datatable-buttons').DataTable({
      //       lengthChange: false,
      //       buttons: ['copy', 'excel', 'pdf', 'colvis']
      //   });

      // }
	  const profile=JSON.parse(this.state.userData)
		if(profile)
		{
		  fetch(`${API_URL}assetsapi/profile/${profile.assets_id}/${profile.session_id}`, {
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
			)
		}
		
		this.enrollInfo();
		this.Countries();
		this.listOfStates();
		// this.listOfCities();
    }
	Countries() {
    fetch(`${API_URL}assetsapi/country/`).then(response => {
      response.json().then(data => {
        this.setState({ countries: data.countries });
        //console.log(this.state.countries)
      });
    });
  }
  listOfStates(){
	 fetch(`${API_URL}assetsapi/state_list/`).then(response => {
      response.json().then(data => {
        this.setState({ states: data.states });
        //console.log(this.state.countries)
      });
    });  
  }
  stateLists(SelectCountry) {
    fetch(`${API_URL}assetsapi/state/` + SelectCountry).then(response => {
      response.json().then(data => {
        this.setState({ states: data.states });
        //alert("States"+JSON.stringify(this.state.states))
      });
    });
  }
  cityList(SelectState) {
    //alert("Hello"+JSON.stringify(SelectState))
    fetch(`${API_URL}assetsapi/city/` + SelectState).then(response => {
      response.json().then(data => {
        this.setState({ cities: data.cities });
        //alert("Cities"+JSON.stringify(this.state.cities))
      });
    });
  }
  // listOfCities(){
	  // fetch(`${API_URL}assetsapi/city_list/`).then(response => {
      // response.json().then(data => {
        // this.setState({ cities: data.cities });
        // console.log(this.state.countries)
      // });
    // }); 
  // }
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.owner && this.props.owner) {
  //     console.og('yayayay22')
  //   }
  // }
	
	singularFormDiv(e)
	{
		// alert(e.target.value);
			$("#portion_one").toggle(e.target.value == "button_one");
			$("#portion_two").toggle(e.target.value == "button_two"); 
			$("#portion_three").toggle(e.target.value == "button_three"); 
			// $("#portion_three").toggle(e.target.value) == "button_three"); 
		  // $("#card-one").toggle($(this).val() == "card-one");
		  // $("#card-two").toggle($(this).val() == "card-two"); 
		  // $("#card-three").toggle($(this).val() == "card-three");
	}
    componentDidUpdate(prevProps) {
      if (!prevProps.owner && this.props.owner) {
        var $=window.$;
        $(".view-rqu").click(function(){
            $(".view-reslt").toggle();
        });

        $('.datatable').DataTable();

        //Buttons examples
        $('#datatable-buttons').DataTable({
            lengthChange: false,
            buttons: ['copy', 'excel', 'pdf', 'colvis']
        }); 

      }
    }
	SingularBillChange(e)
	{
		const singularForm = this.state.singularEnrollForm;
		if(e.target.name==='email')
			singularForm.email=e.target.value
		else if(e.target.name==='dba_name')
			singularForm.dba_name=e.target.value
		else if(e.target.name==='legal_name')
			singularForm.legal_name=e.target.value
		else if(e.target.name==='business_address_line_1')
			singularForm.business_address_line_1=e.target.value;
		else if(e.target.name==='business_address_line_2')
			singularForm.business_address_line_2=e.target.value;
		else if(e.target.name==='country')
		{
			singularForm.country=e.target.value;
			var SelectCountry = singularForm.country;
			this.stateLists(SelectCountry);
		}
		else if(e.target.name==='state')
		{
			singularForm.state=e.target.value
			var SelectState = singularForm.state;
			this.cityList(SelectState);
		}
		else if(e.target.name==='city')
			singularForm.city=e.target.value
		else if(e.target.name==='business_city')
			singularForm.business_city=e.target.value
		else if(e.target.name==='business_state_province')
			singularForm.business_state_province=e.target.value
		else if(e.target.name==='zip_code')
			singularForm.zip_code=e.target.value
		else if(e.target.name==='mobile_no')
			singularForm.mobile_no=e.target.value
		else if(e.target.name==='first_name')
			singularForm.first_name=e.target.value
		else if(e.target.name==='last_name')
			singularForm.last_name=e.target.value
		else if(e.target.name==='fed_tax_id')
		{
			singularForm.fed_tax_id=e.target.value;
			
			// var str = singularForm.fed_tax_id.replace(/.(?=.{4})/g, '*');
			// $('#fed_tax_id').val(str);
			//alert(str);
		}else if(e.target.name==='business_postal_code')
			singularForm.business_postal_code=e.target.value
		else if(e.target.name==='business_state_province')
			singularForm.business_state_province=e.target.value
		else if(e.target.name==='business_phone_number')
			singularForm.business_phone_number=e.target.value
		else if(e.target.name==='website')
			singularForm.website=e.target.value
		else if(e.target.name==='business_category')
			singularForm.business_category=e.target.value
		else if(e.target.name==='business_type')
			singularForm.business_type=e.target.value
		else if(e.target.name==='business_description')
			singularForm.business_description=e.target.value
		else if(e.target.name==='principal_middle_name')
			singularForm.principal_middle_name=e.target.value
		else if(e.target.name==='principal_title')
			singularForm.principal_title=e.target.value
		else if(e.target.name==='principal_date_of_birth')
			singularForm.principal_date_of_birth=e.target.value
		else if(e.target.name==='principal_ownership_percent')
			singularForm.principal_ownership_percent=e.target.value
		else if(e.target.name==='principal_ssn')
			singularForm.principal_ssn=e.target.value
		else if(e.target.name==='ownership_type')
			singularForm.ownership_type=e.target.value
		else if(e.target.name==='account_number')
			singularForm.account_number=e.target.value
		else if(e.target.name==='routing_number')
			singularForm.routing_number=e.target.value
		else if(e.target.name==='account_holder_name')
			singularForm.account_holder_name=e.target.value
		else if(e.target.name==='mcc')
			singularForm.mcc=e.target.value
		else if(e.target.name==='swiped_percent')
			singularForm.swiped_percent=e.target.value
		else if(e.target.name==='keyed_percent')
			singularForm.keyed_percent=e.target.value
		else if(e.target.name==='ecommerce_percent')
			singularForm.ecommerce_percent=e.target.value
		else if(e.target.name==='cc_monthly_volume_range')
			singularForm.cc_monthly_volume_range=e.target.value
		else if(e.target.name==='cc_high_ticket')
			singularForm.cc_high_ticket=e.target.valueelse 
		else if(e.target.name==='ec_high_ticket')
			singularForm.ec_high_ticket=e.target.value
		else if(e.target.name==='ec_average_ticket_range')
			singularForm.ec_average_ticket_range=e.target.value
		else if(e.target.name==='ec_monthly_volume_range')
			singularForm.ec_monthly_volume_range=e.target.value
		else if(e.target.name==='principal_address_line_1')
			singularForm.principal_address_line_1=e.target.value
		else if(e.target.name==='principal_address_line_2')
			singularForm.principal_address_line_2=e.target.value
		 
		singularForm.login_user = JSON.parse(this.state.userData).assets_id
		this.setState({singularEnrollForm:singularForm});
		
		   // console.log(this.state.singularEnrollForm);
	}
	onSubmitSingular()
	{
		
		var opts = Object.assign(this.state.singularEnrollForm,this.state.profileData);
		 // console.log(opts);
		if (!opts.dba_name) {
		  alert("DBA Name should not be blank");
		  return;
		}
		if (!opts.legal_name) {
		  alert("Legal Name should not be blank");
		  return;
		}
		if (!opts.business_address_line_1) {
		  alert(" Address1 should not be blank");
		  return;
		}
		if (!opts.business_city) {
		  alert(" Business city should not be blank");
		  return;
		}
		if (!opts.business_state_province) {
		  alert(" Business state should not be blank");
		  return;
		}
		if (!opts.business_postal_code) {
		  alert(" Business postal code should not be blank");
		  return;
		}
		if (!opts.business_phone_number) {
		  alert(" Business phone should not be blank");
		  return;
		}
		if (!opts.city) {
		  alert("City should not be blank");
		  return;
		}
		if (!opts.state) {
		  alert(" State should not be blank");
		  return;
		}
		if (!opts.zip_code) {
		  alert(" Zip Code should not be blank");
		  return;
		}
		if (!opts.mobile_no) {
		  alert(" Phone Number should not be blank");
		  return;
		}
		if (!opts.email) {
		  alert("E-Mail  should not be blank");
		  return;
		}
		if (!opts.first_name) {
		  alert("Principal First Name  should not be blank");
		  return;
		}
		if (!opts.last_name) {
		  alert("Principal Last Name should not be blank");
		  return;
		}
		if (!opts.fed_tax_id) {
		  alert("Fed Tax ID should not be blank");
		  return;
		}else{
			//$("#loaderDiv").show();
		 fetch(`${API_URL}assetsapi/singularbill_enroll/`, {
        method: "post",
        body: JSON.stringify(opts)
      })
        .then(response => {
          return response.json();
        })
        .then((data) => {
			$("#loaderDiv").hide();
			 $(".confirm-body").html(data.msg);
			 $("#actionType").val("No");
			$("#hiddenURL").val("owner-payment");
		   $("#BlockUIConfirm").show();
          /* if(data.success)
          {
			// swal("Assets Watch", data.msg);
						
					   
			
			this.setState({singularFrame:data.enroll});
			// console.log(this.state.singularFrame);
			// this.setState({showModal: true});
			 // window.location.reload();
			
          }
        else alert(data.msg) */
        }).catch((error) => {
          console.log('error: ', error);
        });
		}
		
		
		
	}
userInfo() {

  var id=this.props.location.search.replace('?Id=','');
  fetch(`${API_URL}assetsapi/profile/`+id)
        .then(res => res.json())
        .then(
          (result) => {
			  alert(result)
            // debugger;
            this.props.updateInfo(result.profile);
			this.setState({profileData:result.profile});
			 // console.log("profile"+this.state.profileData);
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
enrollInfo()
{
	const profile = JSON.parse(this.state.userData)
	fetch(`${API_URL}assetsapi/enroll_info/${profile.assets_id}/${profile.session_id}`)
        .then(res => res.json())
        .then(
          (result) => {
			  //alert(result)
			// this.setState({profileData:result.profile});
			//console.log(result);
			this.setState({enrollInfo:result.enroll_info});
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
}
ActiveDeactive(id,status){
	$("#loaderDiv").show();
	const profile = JSON.parse(this.state.userData);
	fetch(`${API_URL}assetsapi/change_merchant_status/`+id+`/`+status+`/${profile.session_id}`)
        .then(res => res.json())
        .then(
          (result) => {
			  //alert(result)
			// this.setState({profileData:result.profile});
			//console.log(result);
			// this.setState({enrollInfo:result.enroll_info});
				$("#loaderDiv").hide();
			 $(".confirm-body").html(result.msg);
			 $("#actionType").val("Yes");
			$("#hiddenURL").val("owner-payment");
			 $("#BlockUIConfirm").show();
		   
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
  // if(this.props.owner)


    return(
    <div>
    {/* <Header logoutLink={this.logoutLink} 
    name="payment" 
    first_name={this.props.owner.first_name} 
    last_name={this.props.owner.last_name} /> */}
        <div className="wrapper">
			
				<div className="container">
				  <div className="page-title-box"> 
					 {/*<!--<div className="btn-group pull-right">
					  <ol className="breadcrumb hide-phone p-0 m-0">
						<li><a href="#" data-toggle="modal" data-target="#send-request" className="btn btn-custom waves-light waves-effect w-md"><i className="fi-outbox"></i>&nbsp;&nbsp;Send Request</a></li>
					  </ol>
					</div>-->*/}
					<h4 className="page-title">Payment</h4>
				  </div>
				  <div className="row">
					<div className="col-12">
					  <div className="search-result-box card-box">
						<ul className="nav nav-tabs tabs-bordered">
						  <li className="nav-item"> <a href="#subscription" data-toggle="tab" aria-expanded="true" className="nav-link active font-16">Subscription </a> </li>
						  {/*<li className="nav-item"> <a href="#card-profile" data-toggle="tab" aria-expanded="false" className="nav-link font-16">Card Profile </a> </li>*/}
						</ul>
						<div className="tab-content">
						  <div className="tab-pane active" id="subscription">
							<form  className="">
							  <div className="form-group form cf">
								<section className="payment-type cf">
								  <ul className="pay-type">
									<li>
									  <input type="radio" name="portion_selection" id="singular" value="button_one" onChange={this.singularFormDiv}/>
									  <label className="credit-label four col" for="singular"><span className="pay-name" >Singularbillpay</span> <img src="assets/images/sing-logo.png" className="center-block img-responsive" width="120"/> </label>
									</li>
									<li>
									  <input type="radio" name="portion_selection" id="amazon" value="button_two" onChange={this.singularFormDiv}/>
									  <label className="debit-label four col" for="amazon"> <span className="pay-name">Amazon</span> <img src="assets/images/amazon.png" className="center-block img-responsive" width="120"/> </label>
									</li>
									<li>
									  <input type="radio" name="portion_selection" id="paypal" value="button_three" onChange={this.singularFormDiv}/>
									  <label className="debit-label four col" for="paypal"> <span className="pay-name">Paypal</span> <img src="assets/images/paypal.png" className="center-block img-responsive" width="120"/> 
									  </label>
									</li>
								  </ul>
								</section>
							  </div>
							  
						<div className=""  id="portion_one" style={{display: "none"}}>
							{this.state.enrollInfo?<div className="col-md-12">
								<div className="row batchtable-clp">
								  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding batch-list align-item-center">
									
									<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding">
									  <div className="dayandtime-clp-batch col-lg-3 col-md-6 col-sm-6 col-xs-12 no-padding">
										<div className="days-time-table no-padding day border-right-day"> <span id="days_9226"><span className="time-change-wrapper">Created Date</span> </span> ({this.state.enrollInfo.map((item)=>( item.created_on))} ) </div>
										
									  </div>
									  <div className="dayandtime-clp-batch col-lg-3 col-md-6 col-sm-6 col-xs-12 no-padding">
										<div className="days-time-table no-padding day border-right-day"> <span id="days_9226"><span className="time-change-wrapper">DBA/Nick name</span> </span> ( {this.state.enrollInfo.map((item)=>( item.dba_name))} ) </div>
										
									  </div>
									  <div className="dayandtime-clp-batch col-lg-4 col-md-6 col-sm-6 col-xs-12 no-padding">
										<div className="days-time-table no-padding day border-right-day"> <span id="days_9226"><span className="time-change-wrapper">Merchant Account</span> </span> (  ) </div>
										
									  </div>
									  <div className="dayandtime-clp-batch col-lg-2 col-md-6 col-sm-6 col-xs-12 no-padding">
										<div className="days-time-table no-padding day "> 
										
							{/* <i className=" mdi mdi-lead-pencil edit-card"></i> 
										<i className="mdi mdi-delete delete-card"></i>*/}
										{this.state.enrollInfo.map((item)=>(<div className="col-md-12 text-center"> <a type="" className="btn btn-primary stepy-finish text-center" data-toggle="modal" data-target="#send-request" onClick={this.ActiveDeactive.bind(this,item.id,item.status)} >{item.status}</a> </div>))}
									   </div>
										
									  </div>
									</div>
								  </div>
								</div>
							</div>:<div>
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									  <div  className="col-md-2 required">
										<label for="dba-name">DBA/Nick name</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="dba-name" name="dba_name" onChange={this.SingularBillChange} placeholder=""/>
									  </div>
									  <div  className="col-md-2 required">
										<label for="legal-name">Legal Name</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="legal-name" name="legal_name" onChange={this.SingularBillChange} placeholder=""/>
									  </div>
									</div>
								  </div>
								</div>
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									  <div  className="col-md-2 required">
										<label for="business-address1">Business Address Line 1</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="business-address1" name="business_address_line_1" onChange={this.SingularBillChange} placeholder=""/>
									  </div>
									  <div  className="col-md-2">
										<label for="fed_tax_id">Business Address Line 2</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="business_address_line_2" onChange={this.SingularBillChange} name="business_address_line_2" placeholder=""/>
									  </div>
									  
									</div>
								  </div>
								</div>
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									<div  className="col-md-2 required">
										<label for="business-postal-code" >Business City</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" name="business_city" id="business_city" onChange={this.SingularBillChange} placeholder=""/>
									  </div>
									  <div  className="col-md-2 required">
										<label for="fed_tax_id">Business State Province</label>
									  </div>
									  <div className="col-md-4">
										<select className="form-control"   name="business_state_province"  onChange={this.SingularBillChange} >
											<option>-Please Select-</option>
											{this.state.states?this.state.states.map((option, key) => (<option key={key.id} value={option.name}>{option.name}</option>)):this.state.profileData.state}
								 
										</select>
									  </div>
									  
									  
									</div>
								  </div>
								</div>
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									<div  className="col-md-2 required">
										<label for="business-postal-code" >Business Postal Code</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" name="business_postal_code" id="business_postal_code" onChange={this.SingularBillChange} placeholder=""/>
									  </div>
									  <div  className="col-md-2 required">
										<label for="fed_tax_id">Business Phone Number</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="business_phone_number" onChange={this.SingularBillChange} name="business_phone_number" placeholder=""/>
									  </div>
									  
									</div>
								  </div>
								</div>
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									<div  className="col-md-2">
										<label for="business-postal-code" >Website</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" name="website" id="website" onChange={this.SingularBillChange} placeholder=""/>
									  </div>
									  <div  className="col-md-2">
										<label for="fed_tax_id">Business Category</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="business_category" onChange={this.SingularBillChange} name="business_category" placeholder=""/>
									  </div>
									  
									</div>
								  </div>
								</div>
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									<div  className="col-md-2">
										<label for="business-postal-code" >Business Type</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" name="business_type" id="business_type" onChange={this.SingularBillChange} placeholder=""/>
									  </div>
									  <div  className="col-md-2">
										<label for="fed_tax_id">Business Description</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="business_description" onChange={this.SingularBillChange} name="business_description" placeholder=""/>
									  </div>
									  
									</div>
								  </div>
								</div>
								<div className="form-group">
								  <div className="col-md-12">
								  <div className="row">
								   <div  className="col-md-2 required">
										<label for="business city" >City</label>
									  </div>
									  <div className="col-md-4">
										<select className="form-control" name="city" onChange={this.SingularBillChange} >
										  <option>{this.state.profileData.city}</option>
										  {this.state.cities?this.state.cities.map((option, key) => (<option key={key.id} value={option.name}>{option.name}</option>)):''}
										 
										</select>
									  </div>
								   <div  className="col-md-2 required">
										<label for="business-state-province">State</label>
									  </div>
									  <div className="col-md-4">
										<select className="form-control"  value={this.state.singularEnrollForm.state || this.state.profileData.state} name="state"  onChange={this.SingularBillChange} >
											
											{this.state.states?this.state.states.map((option, key) => (<option key={key.id} value={option.name}>{option.name}</option>)):this.state.profileData.state}
								 
										</select>
										
									  </div>
									
									 
									  
									</div>
								  </div>
								</div>
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									  <div  className="col-md-2 required">
										<label for="business-phone-number">Phone Number</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" name="mobile_no" id="business-phone-number" value={this.state.singularEnrollForm.mobile_no || this.state.profileData.mobile_no} onChange={this.SingularBillChange} placeholder=""/>
									  </div>
									  <div  className="col-md-2 required">
										<label for="email">E-Mail </label>
									  </div>
									  <div className="col-md-4">
										<input type="email" className="form-control" value={this.state.singularEnrollForm.email || this.state.profileData.email}id="email"  name="email"  onChange={this.SingularBillChange} placeholder=""/>
									  </div>
									</div>
								  </div>
								</div>
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									  <div  className="col-md-2 required">
										<label for="principal-first-name">Principal First Name </label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="principal-first-name"  name="first_name"  value={this.state.singularEnrollForm.first_name || this.state.profileData.first_name} onChange={this.SingularBillChange} placeholder=""/>
										
									  </div>
									  <div  className="col-md-2 required">
										<label for="principal-last-name">Principal Last Name</label>
									  </div>
									  <div className="col-md-4">
									  <input type="text" className="form-control" id="principal-last-name"  name="last_name" value={this.state.singularEnrollForm.last_name || this.state.profileData.last_name}  onChange={this.SingularBillChange} placeholder=""/>
									  </div>
									</div>
								  </div>
								</div>
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									<div  className="col-md-2">
										<label for="business-postal-code" >Principal Middle Name</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" name="principal_middle_name" id="principal_middle_name" onChange={this.SingularBillChange} placeholder=""/>
									  </div>
									  <div  className="col-md-2">
										<label for="fed_tax_id">Principal Title</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="principal_title" onChange={this.SingularBillChange} name="principal_title" placeholder=""/>
									  </div>
									  
									  
									</div>
								  </div>
								</div>
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									<div  className="col-md-2">
										<label for="business-postal-code" >Principal Address Line 1</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" name="principal_address_line_1" id="principal_address_line_1" onChange={this.SingularBillChange} placeholder=""/>
									  </div>
									  <div  className="col-md-2">
										<label for="fed_tax_id">Principal Address Line 2</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="principal_address_line_2" onChange={this.SingularBillChange} name="principal_address_line_2" placeholder=""/>
									  </div>
									  
									</div>
								  </div>
								</div>
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									<div  className="col-md-2 required">
										<label for="business-postal-code" >Zip Code</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" name="zip_code" id="business-postal-code" value={this.state.singularEnrollForm.zip_code || this.state.profileData.zip_code} onChange={this.SingularBillChange} placeholder=""/>
									  </div>
									  <div  className="col-md-2 required">
										<label for="fed_tax_id">Fed Tax ID</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="fed_tax_id" onChange={this.SingularBillChange} name="fed_tax_id" placeholder=""/>
									  </div>
									  
									</div>
								  </div>
								</div>
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									<div  className="col-md-2">
										<label for="business-postal-code" >Principal DOB</label>
									  </div>
									  <div className="col-md-4">
									  <DatePicker className="form-control"
												onChange={this.handleDobChange}
												value={this.state.singularEnrollForm.principal_date_of_birth}
											/>
											{/* <input type="text" className="form-control" name="principal_date_of_birth" id="principal_date_of_birth" onChange={this.SingularBillChange} placeholder=""/> */}
									  </div>
									  <div  className="col-md-2">
										<label for="fed_tax_id">Principal Ownership Percent</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="principal_ownership_percent" onChange={this.SingularBillChange} name="principal_ownership_percent" placeholder=""/>
									  </div>
									  
									</div>
								  </div>
								</div>
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									<div  className="col-md-2">
										<label for="business-postal-code" >Principal SSN</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" name="principal_ssn" id="principal_ssn" onChange={this.SingularBillChange} placeholder=""/>
									  </div>
									  <div  className="col-md-2">
										<label for="fed_tax_id">Ownership Type</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="ownership_type" onChange={this.SingularBillChange} name="ownership_type" placeholder=""/>
									  </div>
									  
									</div>
								  </div>
								</div>
								
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									<div  className="col-md-2">
										<label for="business-postal-code" >MCC</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" name="mcc" id="mcc" onChange={this.SingularBillChange} placeholder=""/>
									  </div>
									  <div  className="col-md-2">
										<label for="fed_tax_id">Swiped Percent</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="swiped_percent" onChange={this.SingularBillChange} name="swiped_percent" placeholder=""/>
									  </div>
									  
									</div>
								  </div>
								</div>
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									<div  className="col-md-2">
										<label for="business-postal-code" >Keypad Percent</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" name="keyed_percent" id="keyed_percent" onChange={this.SingularBillChange} placeholder=""/>
									  </div>
									  <div  className="col-md-2">
										<label for="fed_tax_id">Ecommerce Percent</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="ecommerce_percent" onChange={this.SingularBillChange} name="ecommerce_percent" placeholder=""/>
									  </div>
									  
									</div>
								  </div>
								</div>
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									<div  className="col-md-2">
										<label for="business-postal-code" >CC Average Ticket Range</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" name="cc_average_ticket_range" id="cc_average_ticket_range" onChange={this.SingularBillChange} placeholder=""/>
									  </div>
									  <div  className="col-md-2">
										<label for="fed_tax_id">CC Monthly Volume Range</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="cc_monthly_volume_range" onChange={this.SingularBillChange} name="cc_monthly_volume_range" placeholder=""/>
									  </div>
									  
									</div>
								  </div>
								</div>
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									<div  className="col-md-2">
										<label for="business-postal-code" >CC High Ticket</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" name="cc_high_ticket" id="cc_high_ticket" onChange={this.SingularBillChange} placeholder=""/>
									  </div>
									  <div  className="col-md-2">
										<label for="fed_tax_id">EC High Ticket</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="ec_high_ticket" onChange={this.SingularBillChange} name="ec_high_ticket" placeholder=""/>
									  </div>
									  
									</div>
								  </div>
								</div>
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									<div  className="col-md-2">
										<label for="business-postal-code" >EC Average Ticket Range</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" name="ec_average_ticket_range" id="ec_average_ticket_range" onChange={this.SingularBillChange} placeholder=""/>
									  </div>
									  <div  className="col-md-2">
										<label for="fed_tax_id">EC Monthly Volume Range</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="ec_monthly_volume_range" onChange={this.SingularBillChange} name="ec_monthly_volume_range" placeholder=""/>
									  </div>
									  
									</div>
								  </div>
								</div>
								
								
								
								
								
								
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									<div  className="col-md-2">
										<label for="business-postal-code" >Routing Number</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" name="routing_number" id="routing_number" onChange={this.SingularBillChange} placeholder=""/>
									  </div>
									  <div  className="col-md-2">
										<label for="fed_tax_id">Account Holder Name</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="account_holder_name" onChange={this.SingularBillChange} name="account_holder_name" placeholder=""/>
									  </div>
									  
									</div>
								  </div>
								</div>
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									<div  className="col-md-2">
										<label for="fed_tax_id">Account Number</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="account_number" onChange={this.SingularBillChange} name="account_holder_name" placeholder=""/>
									  </div>
									  
									</div>
								  </div>
								</div>
								<div className="">
								  <div className="col-md-12 text-right"> <a type="" className="btn btn-primary stepy-finish text-right" data-toggle="modal" data-target="#send-request" onClick={this.onSubmitSingular}>Submit</a> </div>
								</div>
							  </div> }
						</div>
							  
							
							{/* <div id="send-request" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: "none"}}>
									
								  <div className="modal-dialog modal-lg">
									<div className="modal-content">
									  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
									  <div className="">
									  {this.state.singularFrame.enrollmentlink?<iframe src={this.state.singularFrame.enrollmentlink} className="iform"></iframe>:<div className="container"  style={{marginTop:'13%',marginLeft:'45%',marginBottom:'25%'}}><img src="http://wordpress.templaza.net/real-estate/wp-content/themes/real-estate/images/loading_blue_32x32.gif" /></div>}
									  </div>
									</div>
									</div>
</div> */}
							  
					
							  <div className=""  id="portion_two" style={{display: "none"}}>
								 {/* <div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									  <div  className="col-md-2">
										<label for="dba-name">Amazon Name</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="dba-name"  placeholder=""/>
									  </div>
									  <div  className="col-md-2">
										<label for="legal-name">Legal Name</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="legal-name"  placeholder=""/>
									  </div>
									</div>
								  </div>
								</div>
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									  <div  className="col-md-2">
										<label for="business-address1">Business Address1</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="business-address1" placeholder=""/>
									  </div>
									  <div  className="col-md-2">
										<label for="business city">Business City</label>
									  </div>
									  <div className="col-md-4">
										<input type="email" className="form-control" id="fed-tax-id"  placeholder=""/>
									  </div>
									</div>
								  </div>
								</div>
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									  <div  className="col-md-2">
										<label for="business-state-province">Business State Province</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="business-state-province"  placeholder=""/>
									  </div>
									  <div  className="col-md-2">
										<label for="business-postal-code">Business Postal Code</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="business-postal-code"  placeholder=""/>
									  </div>
									</div>
								  </div>
								</div>
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									  <div  className="col-md-2">
										<label for="business-phone-number">Business Phone No</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="business-phone-number"  placeholder=""/>
									  </div>
									  <div  className="col-md-2">
										<label for="email">E-Mail *</label>
									  </div>
									  <div className="col-md-4">
										<input type="email" className="form-control" id="email"  placeholder=""/>
									  </div>
									</div>
								  </div>
								</div>
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									  <div  className="col-md-2">
										<label for="principal-first-name">Principal First Name *</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="principal-first-name"  placeholder=""/>
									  </div>
									  <div  className="col-md-2">
										<label for="principal-last-name">Principal Last Name</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="principal-last-name"  placeholder=""/>
									  </div>
									</div>
								  </div>
								</div>
								
								<div className="">
								  <div className="col-md-12 text-right">
									<button type="submit" className="btn btn-primary stepy-finish text-right" >Submit</button>
								  </div>
							</div> */}
								<div className="form-group text-center">
								  <div className="alert alert-warning alert-dismissible fade show text-center" role="alert"> Integration not available ! Will comming soon.  </div>
								</div>
							  </div>
							  <div className=""  id="portion_three" style={{display: "none"}}>
								<div className="form-group text-center">
								  <div className="alert alert-warning alert-dismissible fade show text-center" role="alert"> Integration not available ! Will comming soon. </div>
								</div>
							  </div>
							</form>
							<div className="clearfix"></div>
						  </div>
						  
						   {/*<!-- end All results tab --> 
						  
						   <!-- Users tab -->*/}
						   {/* <div className="tab-pane" id="card-profile">
							<form  className="">
							  <div className="form-group form cf">
								<section className="payment-type cf">
								  <ul className="pay-type">
									<li>
									  <input type="radio" name="portion_selection" id="singular-card" value="card-one"/>
									  <label className="credit-label four col" for="singular-card"><span className="pay-name">Singularbillpay</span> <img src="assets/images/sing-logo.png" className="center-block img-responsive" width="120"/> </label>
									</li>
									<li>
									  <input type="radio" name="portion_selection" id="amazon-card" value="card-two"/>
									  <label className="debit-label four col" for="amazon-card"> <span className="pay-name">Amazon</span> <img src="assets/images/amazon.png" className="center-block img-responsive" width="120"/> </label>
									</li>
									<li>
									  <input type="radio" name="portion_selection" id="paypal-card" value="card-three"/>
									  <label className="debit-label four col" for="paypal-card"> <span className="pay-name">Paypal</span> <img src="assets/images/paypal.png" className="center-block img-responsive" width="120"/>
									  </label>
									</li>
								  </ul>
								</section>
							  </div>
							  <div className=""  id="card-one" style={{display: "none"}}>
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									  <div  className="col-md-2">
										<label for="address">Address</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="address" placeholder=""/>
									  </div>
									  <div  className="col-md-2">
										<label for="city">City</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="city" placeholder=""/>
									  </div>
									</div>
								  </div>
								</div>
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									  <div  className="col-md-2">
										<label for="country">Country</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="country" placeholder=""/>
									  </div>
									  <div  className="col-md-2">
										<label for="currency">Currency</label>
									  </div>
									  <div className="col-md-4">
										<input type="email" className="form-control" id="currency" placeholder=""/>
									  </div>
									</div>
								  </div>
								</div>
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									  <div  className="col-md-2">
										<label for="cvv">Cvv</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="cvv" placeholder=""/>
									  </div>
									  <div  className="col-md-2">
										<label for="exp-date">Expiry MM-YYYY</label>
									  </div>
									  <div className="col-md-4">
										<div className="row">
										  <div className="col-md-6">
											<select className="form-control">
											  <option>Month</option>
											  <option>01</option>
											  <option>02</option>
											  <option>03</option>
											  <option>04</option>
											  <option>05</option>
											  <option>06</option>
											  <option>07</option>
											  <option>08</option>
											  <option>09</option>
											</select>
										  </div>
										  <div className="col-md-6">
											<select className="form-control">
											  <option>Year</option>
											  <option>2021</option>
											  <option>2022</option>
											</select>
										  </div>
										</div>
									  </div>
									</div>
								  </div>
								</div>
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									  <div  className="col-md-2">
										<label for="email">Email</label>
									  </div>
									  <div className="col-md-4">
										<input type="email" className="form-control" id="email" placeholder=""/>
									  </div>
									  <div  className="col-md-2">
										<label for="order-id">Order Id</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="order-id" placeholder=""/>
									  </div>
									</div>
								  </div>
								</div>
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									  <div  className="col-md-2">
										<label for="partner-id">Partner Id</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="partner-id" placeholder=""/>
									  </div>
									  <div  className="col-md-2">
										<label for="partner-key">Partner Key</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="partner-key" placeholder=""/>
									  </div>
									</div>
								  </div>
								</div>
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									  <div  className="col-md-2">
										<label for="first-name">Payee First Name</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="first-name" placeholder=""/>
									  </div>
									  <div  className="col-md-2">
										<label for="last-name">Payee Last Name</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="last-name" placeholder=""/>
									  </div>
									</div>
								  </div>
								</div>
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									  <div  className="col-md-2">
										<label for="payee-id">Payee Id</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="payee-id" placeholder=""/>
									  </div>
									  <div  className="col-md-2">
										<label for="payment-mode">Payment Mode</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="payment-mode" placeholder=""/>
									  </div>
									</div>
								  </div>
								</div>
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									  <div  className="col-md-2">
										<label for="profile-id">Profile Id</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="profile-id" placeholder=""/>
									  </div>
									  <div  className="col-md-2">
										<label for="routing-number">Routing Number</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="routing-number" placeholder=""/>
									  </div>
									</div>
								  </div>
								</div>
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									  <div  className="col-md-2">
										<label for="state">State</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="state" placeholder=""/>
									  </div>
									  <div  className="col-md-2">
										<label for="account-number">Account Number</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="account-number" placeholder=""/>
									  </div>
									</div>
								  </div>
								</div>
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									  <div  className="col-md-2">
										<label for="ud-field1">Ud Field1</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="ud-field1" placeholder=""/>
									  </div>
									  <div  className="col-md-2">
										<label for="ud-field2">Ud Field2</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="ud-field2" placeholder=""/>
									  </div>
									</div>
								  </div>
								</div>
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									  <div  className="col-md-2">
										<label for="ud-field3">Ud Field3</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="ud-field3" placeholder=""/>
									  </div>
									  <div  className="col-md-2">
										<label for="zip">ZIP</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="zip" placeholder=""/>
									  </div>
									</div>
								  </div>
								</div>
								<div className="">
								  <div className="col-md-12 text-right">
									<button type="submit" className="btn btn-primary stepy-finish text-right">Submit</button>
								  </div>
								</div>
								<div className="col-md-12">
								<div className="row batchtable-clp">
								  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding batch-list align-item-center">
									
									<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding">
									  <div className="dayandtime-clp-batch col-lg-3 col-md-6 col-sm-6 col-xs-12 no-padding">
										<div className="days-time-table no-padding day border-right-day"> <span id="days_9226"><span className="time-change-wrapper">Expiry Date</span> </span> ( 06-2022 ) </div>
										
									  </div>
									  <div className="dayandtime-clp-batch col-lg-4 col-md-6 col-sm-6 col-xs-12 no-padding">
										<div className="days-time-table no-padding day border-right-day"> <span id="days_9226"><span className="time-change-wrapper">First Name</span> </span> ( First Name ) </div>
										
									  </div>
									  <div className="dayandtime-clp-batch col-lg-4 col-md-6 col-sm-6 col-xs-12 no-padding">
										<div className="days-time-table no-padding day border-right-day"> <span id="days_9226"><span className="time-change-wrapper">Account No</span> </span> ( 9879875654xxxx54 ) </div>
										
									  </div>
									  <div className="dayandtime-clp-batch col-lg-2 col-md-6 col-sm-6 col-xs-12 no-padding">
										<div className="days-time-table no-padding day "> 
										<i className=" mdi mdi-lead-pencil edit-card"></i>
										<i className="mdi mdi-delete delete-card"></i>
									   </div>
										
									  </div>
									</div>
								  </div>
								</div>
							  </div>
							  </div>
							  <div className=""  id="card-two" style={{display: "none"}}>
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									  <div  className="col-md-2">
										<label for="dba-name">Amazon Name</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="dba-name" placeholder=""/>
									  </div>
									  <div  className="col-md-2">
										<label for="legal-name">Legal Name</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="legal-name" placeholder=""/>
									  </div>
									</div>
								  </div>
								</div>
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									  <div  className="col-md-2">
										<label for="business-address1">Business Address1</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="business-address1" placeholder=""/>
									  </div>
									  <div  className="col-md-2">
										<label for="business city">Business City</label>
									  </div>
									  <div className="col-md-4">
										<input type="email" className="form-control" id="fed-tax-id" placeholder=""/>
									  </div>
									</div>
								  </div>
								</div>
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									  <div  className="col-md-2">
										<label for="business-state-province">Business State Province</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="business-state-province" placeholder=""/>
									  </div>
									  <div  className="col-md-2">
										<label for="business-postal-code">Business Postal Code</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="business-postal-code" placeholder=""/>
									  </div>
									</div>
								  </div>
								</div>
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									  <div  className="col-md-2">
										<label for="business-phone-number">Business Phone No</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="business-phone-number" placeholder=""/>
									  </div>
									  <div  className="col-md-2">
										<label for="email">E-Mail *</label>
									  </div>
									  <div className="col-md-4">
										<input type="email" className="form-control" id="email" placeholder=""/>
									  </div>
									</div>
								  </div>
								</div>
								<div className="form-group">
								  <div className="col-md-12">
									<div className="row">
									  <div  className="col-md-2">
										<label for="principal-first-name">Principal First Name *</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="principal-first-name" placeholder=""/>
									  </div>
									  <div  className="col-md-2">
										<label for="principal-last-name">Principal Last Name</label>
									  </div>
									  <div className="col-md-4">
										<input type="text" className="form-control" id="principal-last-name" placeholder=""/>
									  </div>
									</div>
								  </div>
								</div>
								<div className="">
								  <div className="col-md-12 text-right">
									<button type="submit" className="btn btn-primary stepy-finish text-right">Submit</button>
								  </div>
								</div>
							  </div>
							  <div className=""  id="card-three" style={{display: "none"}}>
								<div className="form-group">
								  <div className="alert alert-warning alert-dismissible fade show text-center" role="alert"> You should check in on some of those
									fields below. </div>
								</div>
							  </div>
							</form>
							<div className="clearfix"></div>
</div>*/}
						   {/*<!-- end Users tab --> */}
						  
						</div>
					  </div>
					</div>
					 {/*<!-- end row -->*/}
					<div className="view-reslt" style={{display: "none"}}>
					  <div className="row">
						<div className="col-12">
						  <div className="card-box">
							<h4 className="m-t-0 header-title">View</h4>
							<div className="search-item">
							  <div className="media"> <img className="d-flex mr-3 rounded-circle" src="assets/images/users/avatar-1.jpg" alt="Generic placeholder image" height="54"/>
								<div className="media-body">
								  <h5 className="media-heading"> <a href="#" className="text-dark">Chadengle</a> </h5>
								  <p className="font-13"> <b>Status:</b> <span>Pending</span> </p>
								  <p className="font-13"> <b>Requested Date:</b> <span>09-05-2018</span> </p>
								  <p className="font-13"> <b>Resolve Date:</b> <span>10-05-2018</span> </p>
								  <p className="m-b-0 font-13"> <b>Discription:</b> <br/>
									<span className="text-muted">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</span> </p>
								</div>
							  </div>
							</div>
						  </div>
						</div>
					  </div>
					</div>
					 {/*<!-- end row --> */}
					
				  </div>
				   {/*<!-- end container -->*/} 
				</div>
				 {/*<!-- end wrapper --> */}
				</div>
		</div>
	
  
    // )
    // else{
    //   return null;
    //   // window.location.href='http://'+window.location.host
   // }
    )}
}