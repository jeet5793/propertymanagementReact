import React from "react";
import $ from "jquery";
// import RegistraionFormType from './RegistartionFormType'
import RadiBtns from "react-radio-button-group";
import API_URL from "../../../app-config";
import Cookies from 'js-cookie';
import { setUser } from '../../../actions';
export default class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.registerNow = this.registerNow.bind(this);
    this.state = {
      Registeration: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        city: "",
        state: "",
        country: "",
        zip_code: "",
        mobile_no: "",
        landline_no: "",
        assets_type: "",
        owner_type: "",
		agent_type: "",
		chekbx:''
      },
      RegType: "",
      countries: [{ name: "Afghanistan" }],
      states: [],
      cities: [],
	  errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.AgentRef = React.createRef();
  }
  onChangeHandler(e) {
	  let errors = {};
    const registrationForm = this.state.Registeration;
    if (e.target.name != "Regradio") {
      if (e.target.name === "first_name")
	  {
        registrationForm.first_name = e.target.value;
		if(!e.target.value.match(/^[a-zA-Z]+$/)){
				errors["first_name"] = "Please enter only letters.";
           }   
	  }
      else if (e.target.name === "last_name")
	  {
        registrationForm.last_name = e.target.value;
		if(!registrationForm.last_name.match(/^[a-zA-Z]+$/)){
				errors["last_name"] = "Please enter only letters.";
           } 
	  }
      else if (e.target.name === "email")
	  {
        registrationForm.email = e.target.value;
		 let lastAtPos = registrationForm.email.lastIndexOf('@');
           let lastDotPos = registrationForm.email.lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && registrationForm.email.indexOf('@@') == -1 && lastDotPos > 2 && (registrationForm.email.length - lastDotPos) > 2)) {
			   
				errors["email"] = "Please enter a valid Email";
			  
            }
		
	  }
      else if (e.target.name === "password")
	  {
        registrationForm.password = e.target.value;
		if (!registrationForm.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)) {
			 errors["password"] = "Should contain at atleast 1 lowercase letter, 1 uppercase letter, 1 numeric digit, 1 special character and  minimum 8 characters";
				
		}
	  }
      else if (e.target.name === "cnfPass")
        registrationForm.cnfPass = e.target.value;
      else if (e.target.name === "country") {
        registrationForm.country = e.target.value;
        var SelectCountry = registrationForm.country;
        this.stateLists(SelectCountry);
      } else if (e.target.name === "state") {
        registrationForm.state = e.target.value;
        //alert(registrationForm.state);
        var SelectStates = registrationForm.state;
        this.cityList(SelectStates);
      } else if (e.target.name === "city")
        registrationForm.city = e.target.value;
      else if (e.target.name === "zip_code"){
         registrationForm.zip_code = isNaN(e.target.value)
          ? registrationForm.zip_code
          : e.target.value;
		if (!registrationForm.zip_code.match(/(^\d{5}$)|(^\d{5}-\d{4}$)/)) {
			errors["zip_code"] = "Please enter valid zip code";  
		}
	  }
      else if (e.target.name === "mobile_no") {
        registrationForm.mobile_no = isNaN(e.target.value)
          ? registrationForm.mobile_no
          : e.target.value;
		  
		   if (!registrationForm.mobile_no.match(/^[0-9]{10}$/)) {
			
			errors["mobile_no"] = "Please enter valid 10 digit mobile number";  
        }
      } else if (e.target.name === "landline_no")
        registrationForm.landline_no = isNaN(e.target.value)
          ? registrationForm.landline_no
          : e.target.value;
	 else if (e.target.name === "chekbx")
        registrationForm.chekbx = e.target.value;
      else if (e.target.name === "owner_type")
        registrationForm.owner_type = e.target.value;
      else if (e.target.name === "agent_type") {
        registrationForm.agent_type = e.target.value;
        //alert(registrationForm.agent_type+"agent type")
      } else if (e.target.name === "company_name")
        registrationForm.company_name = e.target.value;
      else if (e.target.name === "website_url")
        registrationForm.website_url = e.target.value;
    } else if (e.target.name === "Regradio")
      registrationForm.assets_type = e.target.value;

    this.setState({ Registeration: registrationForm });
	this.setState({errors: errors});
       
    // this.setState({[e.target.name]:e.target.value})
  }
  registerNow() {
    //http://ec2-18-191-70-215.us-east-2.compute.amazonaws.com/assetsapi/register/
		var opts = this.state.Registeration;
		opts.assets_type = this.state.RegType;
	 if(this.handleValidation()){
		 $("#loaderDiv").show();
			  fetch(`${API_URL}assetsapi/register/`, {
				method: "post",
				body: JSON.stringify(opts)
			  })
				.then(response => {
				  return response.json();
				})
				.then((data) => {
				  // console.log('dataaaa:  ', data);
				  if(data){
					var userid = data.user.assets_id
					localStorage.setItem('userid',userid)
				  }
				  if(data.msg==="Registered Successfully")
				  {
					  $("#loaderDiv").hide();
					let userType = 'owner';
					if (this.state.RegType==='2') {
					  userType = 'agent'
					} else if (this.state.RegType==='3') {
					  userType = 'tenant'
					}
					if(data.user.agentType!='' && data.user.agentType=='Service Provider')
					{
						$("#actionType").val("No");
						  $(".confirm-body").html("Registered Successfully");
						$("#SBlockUIConfirm").show();
						this.props.history.replace(`/`);
					}else{
						 this.props.history.replace(`/register-plans?Datatype=${userType}`);
					}
				   
				  }else if(data.msg==="Registered Successfully. No plan available.!!!"){
					  
					  var opts1 = {"email":this.state.Registeration.email,"password":this.state.Registeration.password,"assets_type":this.state.RegType};
				// console.log(JSON.stringify(this.state.opts));
				   fetch(`${API_URL}assetsapi/login/`, {
							method: 'post',
							body: JSON.stringify(opts1)
						})
							  .then(res => res.json())
							  .then(
								(response) => {
									setTimeout(()=>{

										fetch(`${API_URL}assetsapi/profile/${response.userdata.assets_id}/${response.userdata.session_id}`, {
										method: 'get'
									})
									.then(res => res.json())
									.then(
									  (result) => {
												//console.log("data 2: "+JSON.stringify(result))
												if (result.success) {
													 $("#loaderDiv").hide();
												   // alert('profile:'+JSON.stringify(result.profile)+""+JSON.stringify(data.userdata.agentType));
													localStorage.setItem('firstName',JSON.stringify(result.profile.first_name))
													localStorage.setItem('lastName',JSON.stringify(result.profile.last_name))
													localStorage.setItem('userType',JSON.stringify(result.profile.assets_type))
													//this.props.setUser(response.userdata, result.profile);
													Cookies.set("profile_data", response.userdata);

													if(result.profile.assets_type==="1"){
													 // this.props.history.push('/user')
																$("#actionType").val("Yes");
																	$("#hiddenURL").val("/user");
																   $(".confirm-body").html("Registered Successfully");
																   $("#SBlockUIConfirm").show();
													}else if(result.profile.assets_type==="2"){
														if(response.userdata.agentType==="Broker")
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
													this.props.setUser(response.userdata, result.profile);
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
				else alert(data.msg)
				}).catch((error) => {
				  console.log('error: ', error);
				});
	 }else{
           return;
        }
  }
  handleValidation(){
	  let opts = this.state.Registeration;
		opts.assets_type = this.state.RegType;
		let errors = {};
        let formIsValid = true;
    if (opts.assets_type === "2") {
      if (!opts.agent_type) {
		  formIsValid = false;
          errors["agent_type"] = "Must select the Agent type";
      }
    }
	if (!opts.assets_type) {
		  formIsValid = false;
          errors["Regradio"] = "Must select the at least one.";
        
    }
    if (!opts.first_name) {
		formIsValid = false;
        errors["first_name"] = "First Name should not be blank";
      
    }else if(typeof opts.first_name !== ''){
           if(!opts.first_name.match(/^[a-zA-Z]+$/)){
			   formIsValid = false;
				errors["first_name"] = "Please enter only letters";
             
           }        
        }
    if (!opts.last_name) {
		formIsValid = false;
        errors["last_name"] = "Last Name should not be blank";
      
    }else if(typeof opts.last_name !== "undefined"){
           if(!opts.last_name.match(/^[a-zA-Z]+$/)){
			   formIsValid = false;
				errors["last_name"] = "Please enter only letters.";
             
           }        
        }
    if (!opts.email) {
		formIsValid = false;
        errors["email"] = "Email should not be blank";
      
    }else if(opts.email !== "undefined"){
           let lastAtPos = opts.email.lastIndexOf('@');
           let lastDotPos = opts.email.lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && opts.email.indexOf('@@') == -1 && lastDotPos > 2 && (opts.email.length - lastDotPos) > 2)) {
			   formIsValid = false;
				errors["email"] = "Please enter a valid Email";
			  
            }
       }  
    if (!opts.password) {
		formIsValid = false;
        errors["password"] = "Password should not be blank";
      
    }else if (typeof opts.password !== "undefined") {
		
         if (!opts.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)) {
			formIsValid = false;
			errors["password"] = "Should contain at atleast 1 lowercase letter, 1 uppercase letter, 1 numeric digit, 1 special character and  minimum 8 characters";
           
          
        } 
      }
    if (!opts.cnfPass) {
		formIsValid = false;
        errors["cnfPass"] = "Confirm Password should not be blank";
    }
    if (!opts.city) {
		formIsValid = false;
        errors["city"] = "City should not be blank";
      
    }
    if (!opts.state) {
		formIsValid = false;
        errors["state"] = "State should not be blank";
      
    }
    if (!opts.country) {
		formIsValid = false;
        errors["country"] = "Country should not be blank";
      
    }
    if (!opts.zip_code) {
		formIsValid = false;
        errors["zip_code"] = "Zip Code should not be blank";
     
    }else if (typeof opts.zip_code !== "undefined") {
        if (!opts.zip_code.match(/(^\d{5}$)|(^\d{5}-\d{4}$)/)) {
			formIsValid = false;
        errors["mobile_no"] = "Please enter valid  zip code";
           
          
        }
      }
	
    if (!opts.mobile_no) {
		formIsValid = false;
        errors["mobile_no"] = "Mobile number should not be blank";
      
    }else if (typeof opts.mobile_no !== "undefined") {
        if (!opts.mobile_no.match(/^[0-9]{10}$/)) {
			formIsValid = false;
        errors["mobile_no"] = "Please enter valid 10 digit mobile number";
           
          
        }
      }
    // if (!opts.landline_no) {
      // alert("Landline number should not be blank");
      // return;
    // }
    if(!opts.chekbx){
		formIsValid = false;
        errors["chekbx"] = "Checkbox should be ticked";
      
    }
    if (opts.cnfPass !== opts.password) {
		if(!opts.password){
			formIsValid = false;
			errors["password"] = "Password should not be blank.";
		}else{
			formIsValid = false;
			errors["password"] = "Confirm password is not matched.";
		}
		
      
     }
	 if (!opts.assets_type) {
		formIsValid = false;
        errors["assets_type"] = "Can not be empty.";
      
     }
	 this.setState({errors: errors});
       return formIsValid;
	 // else if (this.state.Registeration.assets_type) {
      // {'email':'testnow1@yopmail.com','password':'test123'}
	  
    // }
  }

  handleChange(event) {
    if (event.target.value === "2")
      this.AgentRef.current.setAttribute(
        "style",
        "display:block;"
      );
    else this.AgentRef.current.setAttribute("style", "display:none");
    this.setState({
      RegType: event.target.value
    });
  }
  componentDidMount() {
    this.AgentRef.current.setAttribute("style", "display:none");
    setTimeout(function() {
      $("#tzloadding").remove();
      $('input[type="radio"]').click(function() {
        var inputValue = $(this).attr("val");
        var targetBox = $("." + inputValue);
        $(".box")
          .not(targetBox)
          .hide();
        $(targetBox).show();
      });
    }, 2000);
    this.Countries();
  }
  Countries() {
    fetch(`${API_URL}assetsapi/country/`).then(response => {
      response.json().then(data => {
        this.setState({ countries: data.countries });
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
  render() {
    return (
      <form id="login_form" className="login-form" action="#" method="post">
        <h3 className="form-title">Create an Account</h3>
        <div className="display-hide" id="error_message">
          {" "}
        </div>
        <div className="col-md-12">
          <div className="form-group">
		  <span style={{color: "red"}}>{this.state.errors["Regradio"]}</span>
            <div className="col-md-12 " style={{ marginLeft: "15%" }}>
			
              <div className="col-md-3 col-sm-3">
                <div className="radio radio-custom">
                  <input
                    type="radio"
                    onChange={this.handleChange}
                    name="Regradio"
                    id="ownerid"
                    value="1"
                  />
                  <label htmlFor="ownerid"> Owner </label>
                </div>
              </div>

              <div className="col-md-3 col-sm-3">
                <div className="radio radio-custom">
                  <input
                    type="radio"
                    name="Regradio"
                    onChange={this.handleChange}
                    id="agentid"
                    value="2"
                  />
                  <label htmlFor="agentid"> Agent </label>
                </div>
              </div>

              <div className="col-md-3 col-sm-3">
                <div className="radio radio-custom">
                  <input
                    type="radio"
                    name="Regradio"
                    id="tenantid"
                    value="3"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="tenantid"> Tenant </label>
                </div>
              </div>
			   
            </div>
			
          </div>
        </div>
        <div className="col-md-12">
          <div className="">
            <div className="form-group">
              <select
                ref={this.AgentRef}
                className="form-control form-control-solid placeholder-no-fix"
                name="agent_type"
                onChange={this.onChangeHandler}
                id="agent_type"
              >
                <option>Select</option>
                <option value="1">Service provider</option>
                <option value="2">Broker</option>
              </select>
            </div>
          </div>
        </div>
        {/*<div className=" reg-type">
          <div className="radio radio-custom">
            <label>
              <input
                type="radio"
                value="owner"
                checked={this.state.RegType === "owner"}
                onChange={this.handleChange}
              />
              Owner
            </label>
          </div>
          <div className="radio radio-custom">
            <label>
            <input
              type="radio"
              value="agent"
              checked={this.state.RegType === "agent"}
              onChange={this.handleChange}
            />
            Agent
            </label>
          </div>
          <div className="radio radio-custom">
            <label>
            <input
              type="radio"
              value="tenant"
              checked={this.state.RegType === "tenant"}
              onChange={this.handleChange}
            />
            Tenant
            </label>
          </div>


              <div className="radio radio-custom">
                <input name="contactm" type="radio" id="agent"  />
                <label for="agent">Agent</label>
                  </div>
                  <div className="radio radio-custom">
                    <input type="radio" id="tenant" value="tenant" name="regTye" />
                    <label htmlFor="tenant"> Tenant </label>
          </div>

          </div>*/}
        <div className="col-md-6 col-sm-6">
          <div className="form-group">
            <input
              className="form-control form-control-solid placeholder-no-fix"
              type="text"
              autoComplete="off"
              placeholder="First Name*"
              onChange={this.onChangeHandler}
              name="first_name"
              id="first_name"
            />
			 <span style={{color: "red"}}>{this.state.errors["first_name"]}</span>
          </div>
        </div>
        <div className="col-md-6 col-sm-6">
          <div className="form-group">
            <input
              className="form-control form-control-solid placeholder-no-fix"
              type="text"
              autoComplete="off"
              placeholder="Last Name*"
              name="last_name"
              id="last_name"
              onChange={this.onChangeHandler}
            />
			 <span style={{color: "red"}}>{this.state.errors["last_name"]}</span>
          </div>
        </div>
        <div className="col-md-6 col-sm-6">
          <div className="form-group">
            <input
              className="form-control form-control-solid placeholder-no-fix"
              type="text"
              autoComplete="off"
              placeholder="Email*"
              name="email"
              
              onChange={this.onChangeHandler}
            />
			 <span style={{color: "red"}}>{this.state.errors["email"]}</span>
          </div>
        </div>
        <div className="col-md-6 col-sm-6">
          <div className="form-group">
            <div className="col-md-12">
              <div className="col-md-6 col-sm-6">
                <div className="radio radio-custom">
                  <input
                    type="radio"
                    name="owner_type"
                    id="radioind"
                    val="option2"
                    onChange={this.onChangeHandler}
                    value={1}
					checked
                  />
                  <label htmlFor="radioind"> Individual </label>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="radio radio-custom">
                  <input
                    type="radio"
                    name="owner_type"
                    id="radioorg"
                    val="orgnaize"
                    onChange={this.onChangeHandler}
                    value={0}
                  />
                  <label htmlFor="radioorg"> Organization </label>
                </div>
              </div>
			  <span style={{color: "red"}}>{this.state.errors["owner_type"]}</span>
            </div>
          </div>
        </div>
        <div className="orgnaize box" style={{ display: "none" }}>
          <div className="col-md-6 col-sm-6">
            <div className="form-group">
              <input
                className="form-control form-control-solid placeholder-no-fix"
                type="text"
                autoComplete="off"
                placeholder="Company Name"
                name="company_name"
                onChange={this.onChangeHandler}
                id="company_name"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="form-group">
              <input
                className="form-control form-control-solid placeholder-no-fix"
                type="text"
                autoComplete="off"
                placeholder="Website URL"
                name="website_url"
                onChange={this.onChangeHandler}
                id="website_url"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6">
          <div className="form-group">
            <input
              className="form-control form-control-solid placeholder-no-fix"
              type="password"
              autoComplete="off"
              onChange={this.onChangeHandler}
              placeholder="Password*"
              name="password"
              
            />
			 <span style={{color: "red"}}>{this.state.errors["password"]}</span>
          </div>
        </div>
        <div className="col-md-6 col-sm-6">
          <div className="form-group">
            <input
              className="form-control form-control-solid placeholder-no-fix"
              type="password"
              autoComplete="off"
              onChange={this.onChangeHandler}
              placeholder="Confirm Password*"
              name="cnfPass"
              id="cnfPass"
            />
			 <span style={{color: "red"}}>{this.state.errors["cnfPass"]}</span>
          </div>
        </div>

        <div className="col-md-6 col-sm-6">
		<div className="form-group">
          <select
            className="form-control form-control-solid placeholder-no-fix"
            onChange={this.onChangeHandler}
            name="country"
            id="countrySelect"
          >
            <option>Select Country</option>
            {this.state.countries.map((option, index) => (
              <option key={index} value={option.name}>{option.name}</option>
            ))}
          </select>
		   <span style={{color: "red"}}>{this.state.errors["country"]}</span>
        </div>
		</div>
        <div className="col-md-6 col-sm-6">
          <div className="form-group">
            <select
              className="form-control form-control-solid placeholder-no-fix"
              onChange={this.onChangeHandler}
              name="state"
              id="stateSelect"
            >
              <option>Select State</option>
              {this.state.states?this.state.states.map((option, index) => (
                <option key={index} value={option.name}>
                  {option.name}
                </option>
              )):''}
            </select>
			 <span style={{color: "red"}}>{this.state.errors["state"]}</span>
          </div>
        </div>
        <div className="col-md-6 col-sm-6">
          <div className="form-group">
            <select
              onChange={this.onChangeHandler}
              className="form-control form-control-solid placeholder-no-fix"
              name="city"
              id="citySelect"
            >
              <option>Select City</option>
              {this.state.cities?this.state.cities.map((option, key) => (
                <option key={key.id} value={option.name}>
                  {option.name}
                </option>
              )):''}
            </select>
			<span style={{color: "red"}}>{this.state.errors["city"]}</span>
          </div>
        </div>
        <div className="col-md-6 col-sm-6">
          <div className="form-group">
            <input
              className="form-control form-control-solid placeholder-no-fix"
              type="text"
              autoComplete="off"
              onChange={this.onChangeHandler}
              placeholder="ZIP Code*"
              name="zip_code"
              id="zip_code"
            />
			<span style={{color: "red"}}>{this.state.errors["zip_code"]}</span>
          </div>
        </div>
        <div className="col-md-6 col-sm-6">
          <div className="form-group">
            <input
              className="form-control form-control-solid placeholder-no-fix"
              type="text"
              autoComplete="off"
              placeholder="Mobile*"
              onChange={this.onChangeHandler}
              name="mobile_no"
              value={this.state.Registeration.mobile_no}
              id="mobile_no"
            />
			<span style={{color: "red"}}>{this.state.errors["mobile_no"]}</span>
          </div>
        </div>
        <div className="col-md-6 col-sm-6">
          <div className="form-group">
            <input
              className="form-control form-control-solid placeholder-no-fix"
              type="text"
              autoComplete="off"
              placeholder="Landline"
              name="landline_no"
              value={this.state.Registeration.landline_no}
              id="landline_no"
              onChange={this.onChangeHandler}
            />
          </div>
        </div>
        <div className="col-md-12">
          <p className="pull-left  margin-20 para">
		  <span style={{color: "red"}}>{this.state.errors["chekbx"]}</span>
            <input
              type="checkbox"
              id="test2"
              name="chekbx"
              onClick={this.onChangeHandler}
			  required
            />
			
            <label htmlFor="test2">
              I Agree to AssetsWatch Terms of use i would like to receive
              property relates communication through Email, call or SMS{" "}
            </label>
          </p>
        </div>
        <div className="col-md-12 col-xs-12 text-center">
          <button
            type="button"
            className="btn btn-success uppercase"
            onClick={this.registerNow}
          >
            Register Now
          </button>
        </div>
      </form>
    );
  }
}
