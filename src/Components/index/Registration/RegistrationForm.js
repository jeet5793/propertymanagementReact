import React from "react";
import $ from "jquery";
// import RegistraionFormType from './RegistartionFormType'
import RadiBtns from "react-radio-button-group";
import API_URL from "../../../app-config";

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
      cities: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.AgentRef = React.createRef();
  }
  onChangeHandler(e) {
    const registrationForm = this.state.Registeration;
    if (e.target.name != "Regradio") {
      if (e.target.name === "first_name")
        registrationForm.first_name = e.target.value;
      else if (e.target.name === "last_name")
        registrationForm.last_name = e.target.value;
      else if (e.target.name === "email")
        registrationForm.email = e.target.value;
      else if (e.target.name === "password")
        registrationForm.password = e.target.value;
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
      else if (e.target.name === "zip_code")
        registrationForm.zip_code = e.target.value;
      else if (e.target.name === "mobile_no") {
        registrationForm.mobile_no = isNaN(e.target.value)
          ? registrationForm.mobile_no
          : e.target.value;
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
    // this.setState({[e.target.name]:e.target.value})
  }
  registerNow() {
    //http://ec2-18-191-70-215.us-east-2.compute.amazonaws.com/assetsapi/register/
    var opts = this.state.Registeration;
    opts.assets_type = this.state.RegType;
    // console.log(opts.chekname);
    if (opts.assets_type === "2") {
      if (!opts.agent_type) {
        alert("Must select the Agent type");
        return;
      }
    }
    if (!opts.first_name) {
      alert("First Name should not be blank");
      return;
    }
	if(typeof opts.first_name !== "undefined"){
           if(!opts.first_name.match(/^[a-zA-Z]+$/)){
             alert("Please enter only letters for first name");
			 return;
           }        
        }
    if (!opts.last_name) {
      alert("Last Name should not be blank");
      return;
    }
	if(typeof opts.last_name !== "undefined"){
           if(!opts.last_name.match(/^[a-zA-Z]+$/)){
             alert("Please enter only letters for first name");
			 return;
           }        
        }
    if (!opts.email) {
      alert("Email should not be blank");
      return;
    }
	if(opts.email !== "undefined"){
           let lastAtPos = opts.email.lastIndexOf('@');
           let lastDotPos = opts.email.lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && opts.email.indexOf('@@') == -1 && lastDotPos > 2 && (opts.email.length - lastDotPos) > 2)) {
			  alert("Please enter valid Email");
				return;
            }
       }  
    if (!opts.password) {
      alert("Password should not be blank");
      return;
    }
	if (typeof opts.password !== "undefined") {
        if (!opts.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)) {
           alert("Password should contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character");
			return;
          
        }
      }
    if (!opts.cnfPass) {
      alert("Confirm Password should not be blank");
      return;
    }
    if (!opts.city) {
      alert("City should not be blank");
      return;
    }
    if (!opts.state) {
      alert("State should not be blank");
      return;
    }
    if (!opts.country) {
      alert("Country should not be blank");
      return;
    }
    if (!opts.zip_code) {
      alert("Zip Code should not be blank");
      return;
    }
	
    if (!opts.mobile_no) {
      alert("Mobile number should not be blank");
      return;
    }
	if (typeof opts.mobile_no !== "undefined") {
        if (!opts.mobile_no.match(/^[0-9]{10}$/)) {
           alert("Please enter valid 10 digit mobile number");
			return;
          
        }
      }
    // if (!opts.landline_no) {
      // alert("Landline number should not be blank");
      // return;
    // }
    if(!opts.chekbx){
      alert('Checkbox should be ticked');
      return;
    }
    if (opts.cnfPass !== opts.password) {
      alert("Confirm password is not matched.");
    } else if (this.state.Registeration.assets_type) {
      //{'email':'testnow1@yopmail.com','password':'test123'}
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
          if(data.msg.indexOf("Registered Successfully")!=-1)
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
				this.props.history.replace(`/`);
			}else{
				 this.props.history.replace(`/register-plans?Datatype=${userType}`);
			}
           
          }
        else alert(data.msg)
        }).catch((error) => {
          console.log('error: ', error);
        });
    }
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
