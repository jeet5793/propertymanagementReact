import React from "react"
// import img1 from"../../../images/logo-white.png"
import $ from "jquery"
import RadiBtns from "react-radio-button-group";
import API_URL from "../../../app-config";
import swal from 'sweetalert';
export default class SocialLogin extends React.Component {
  constructor(props) {
    super(props);
    this.registerNow = this.registerNow.bind(this);
    this.state = {
		 profile:[],
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
		oauth_uid:"",
		oauth_provider:""
      },
      RegType: "",
      countries: [{ name: "" }],
      states: [],
      cities: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.AgentRef = React.createRef();
  }
  componentDidMount() {
    setTimeout(function () { $('#tzloadding').remove(); }, 2000)
    $('html, body').animate({ scrollTop: 0 }, 1500);
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

	
	const params = new URLSearchParams(this.props.location.search); 
	// registrationForm.first_name = (params.get('first_name')).replace(/["']/g, "");
	// registrationForm.last_name = (params.get('last_name')).replace(/["']/g, "");
	//registrationForm.email = params.get('email')?(params.get('email')).replace(/["']/g, ""):'';
	registrationForm.oauth_uid = (params.get('oauth_uid')).replace(/["']/g, "");
	registrationForm.oauth_provider = (params.get('oauth_provider')).replace(/["']/g, "");
    this.setState({ Registeration: registrationForm });
     //console.log(this.state.Registeration);
	
  }
  registerNow() {
    //http://ec2-18-191-70-215.us-east-2.compute.amazonaws.com/assetsapi/register/
    //var opts = this.state.Registeration;
	const params = new URLSearchParams(this.props.location.search); 
	 const first_name = (params.get('first_name')).replace(/["']/g, "");
	 const last_name = (params.get('last_name')).replace(/["']/g, "");
	 const email = (params.get('email')).replace(/["']/g, "");
	const fetchedDate = {'first_name':first_name,'last_name':last_name,'email':email};
	var opts =Object.assign(this.state.Registeration,fetchedDate);
    opts.assets_type = this.state.RegType;
   console.log(opts);
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
    if (!opts.last_name) {
      alert("Last Name should not be blank");
      return;
    }
    if (!opts.email) {
      alert("Email should not be blank");
      return;
    }
    if (!opts.password) {
      alert("Password should not be blank");
      return;
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
    if (!opts.landline_no) {
      alert("Landline number should not be blank");
      return;
    }
    // if(!opts.chekbx){
    //   alert('Checkbox should be ticked');
    //   return;
    // }
	
    if (opts.cnfPass !== opts.password) {
      alert("Confirm password is not matched.");
    } else {
		// alert("rst");
      //{'email':'testnow1@yopmail.com','password':'test123'}
      fetch(`${API_URL}assetsapi/social_login/`, {
        method: "post",
        body: JSON.stringify(opts)
      })
        .then(response => {
          return response.json();
        })
        .then((data) => {
          console.log('dataaaa:  ', data);
		  if(data.msg.indexOf("Email Already Exist")!=-1)
		  {
			  swal("Assets Watch", data.msg);
		  }
          if(data){
            var userid = data.user.assets_id
            localStorage.setItem('userid',userid)
          }
		  
          if(data.msg.indexOf("Registered Successfully")!=-1)
          {
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
        "display:block;margin-left:7%;width:93%"
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
	   // console.log(this.props);
		const params = new URLSearchParams(this.props.location.search); 
		const first_name = params.get('first_name')?(params.get('first_name')).replace(/["']/g, ""):'';
		const last_name = params.get('last_name')?(params.get('last_name')).replace(/["']/g, ""):'';
		const email = params.get('email')?(params.get('email')).replace(/["']/g, ""):'';

		// console.log(first_name);
    return (
      <div>
        <link rel='stylesheet' href='../css/fonts.css' media='all' />
        <link rel='stylesheet' href='../css/comp-main.css' type='text/css' media='all' />
        <link rel='stylesheet' href='../css/custom-main.css' type='text/css' media='all' />
        <script type='text/javascript' src='../js/jquery.js'></script>
        <script type='text/javascript' src='../js/jquery/jquery-migrate.min.js'></script>
        <script type='text/javascript' src='../js/main.min.js'></script>
        <div className="tz-Breadcrumb">
				<div className="tzOverlayBreadcrumb">
				  <div className="container">
					<h1> Social Login </h1>
					<div className="tz-breadcrumb-navxt"> 
					 {/* <!--Breadcrumbs--> 
					  <!-- Breadcrumb NavXT 6.0.4 --> */}
					  
					</div>
				  </div>
				  {/* <!-- end className container --> */}
				</div>
			  </div>
        {/*<!-- end class tzbreadcrumb -->*/}
        <div className="container">
          <div className="tz_page_content">
            <div className="post-1083 page type-page status-publish hentry">
              <div id="login-2" className="bootstrap-wrapper tz-login">
                <div className="menu-toggler sidebar-toggler" />
                {/*<!-- END SIDEBAR TOGGLER BUTTON --> 
          <!-- BEGIN LOGO -->          
          <!-- END LOGO --> 
          <!-- BEGIN LOGIN -->*/}
                <div className="col-md-8 col-md-offset-2">
                  <div className="content">
                    {/*<!-- BEGIN LOGIN FORM -->*/}
						<form id="login_form" className="login-form" action="#" method="post">
						
						<div className="display-hide" id="error_message">
						  {" "}
						</div>
						<div className="col-md-12">
						  <div className="form-group">
							<div className="col-md-12 " style={{ marginLeft: "15%" }}>
							  <div className="col-md-3">
								<div className="radio radio-custom">
								  <input
									type="radio"
									onChange={this.handleChange}
									name="Regradio"
									id="ownerid"
									value="1"
								  />
								  <label HTMLFor="ownerid"> Owner </label>
								</div>
							  </div>

							  <div className="col-md-3">
								<div className="radio radio-custom">
								  <input
									type="radio"
									name="Regradio"
									onChange={this.handleChange}
									id="agentid"
									value="2"
								  />
								  <label HTMLFor="agentid"> Agent </label>
								</div>
							  </div>

							  <div className="col-md-3">
								<div className="radio radio-custom">
								  <input
									type="radio"
									name="Regradio"
									id="tenantid"
									value="3"
									onChange={this.handleChange}
								  />
								  <label HTMLFor="tenantid"> Tenant </label>
								</div>
							  </div>
							</div>
						  </div>
						</div>
						<div className="row col-md-12">
						  <div className="col-md-12">
							<div className="form-group">
							  <select
								ref={this.AgentRef}
								className="form-control form-control-solid placeholder-no-fix"
								name="agent_type"
								onChange={this.onChangeHandler}
								id=""
							  >
								<option>Select</option>
								<option value="1">Service provider</option>
								<option value="2">Broker</option>
							  </select>
							</div>
						  </div>
						</div>
						<div className="col-md-6">
						  <div className="form-group">
							<input
							  className="form-control form-control-solid placeholder-no-fix"
							  type="text"
							  autocomplete="off"
							  placeholder="First Name"
							  onChange={this.onChangeHandler}
							  name="first_name"
							  id=""
							  value={this.state.Registeration.first_name ||first_name}
							/>
						  </div>
						</div>
						<div className="col-md-6">
						  <div className="form-group">
							<input
							  className="form-control form-control-solid placeholder-no-fix"
							  type="text"
							  autocomplete="off"
							  placeholder="Last Name"
							  name="last_name"
							  id=""
							  onChange={this.onChangeHandler}
							   value={this.state.Registeration.last_name || last_name}
							/>
						  </div>
						</div>
						<div className="col-md-6">
						  <div className="form-group">
							<input
							  className="form-control form-control-solid placeholder-no-fix"
							  type="text"
							  autocomplete="off"
							  placeholder="Email"
							  name="email"
							  id=""
							  onChange={this.onChangeHandler}
							   value={this.state.Registeration.email || email}
							/>
						  </div>
						</div>
						<div className="col-md-6">
						  <div className="form-group">
							<div className="">
							  <div className="col-md-6">
								<div className="radio radio-custom">
								  <input
									type="radio"
									name="owner_type"
									id="radioind"
									val="option2"
									onChange={this.onChangeHandler}
									value={1}
								  />
								  <label HTMLFor="radioind"> Individual </label>
								</div>
							  </div>
							  <div className="col-md-6">
								<div className="radio radio-custom">
								  <input
									type="radio"
									name="owner_type"
									id="radioorg"
									val="orgnaize"
									onChange={this.onChangeHandler}
									value={0}
								  />
								  <label HTMLFor="radioorg"> Organize </label>
								</div>
							  </div>
							</div>
						  </div>
						</div>
						<div className="orgnaize box" style={{ display: "none" }}>
						  <div className="col-md-6">
							<div className="form-group">
							  <input
								className="form-control form-control-solid placeholder-no-fix"
								type="text"
								autocomplete="off"
								placeholder="Company Name"
								name="company_name"
								onChange={this.onChangeHandler}
								id=""
							  />
							</div>
						  </div>
						  <div className="col-md-6">
							<div className="form-group">
							  <input
								className="form-control form-control-solid placeholder-no-fix"
								type="text"
								autocomplete="off"
								placeholder="Website URL"
								name="website_url"
								onChange={this.onChangeHandler}
								id=""
							  />
							</div>
						  </div>
						</div>
						<div className="col-md-6">
						  <div className="form-group">
							<input
							  className="form-control form-control-solid placeholder-no-fix"
							  type="password"
							  autocomplete="off"
							  onChange={this.onChangeHandler}
							  placeholder="Password"
							  name="password"
							  id=""
							/>
						  </div>
						</div>
						<div className="col-md-6">
						  <div className="form-group">
							<input
							  className="form-control form-control-solid placeholder-no-fix"
							  type="password"
							  autocomplete="off"
							  onChange={this.onChangeHandler}
							  placeholder="Confirm Password"
							  name="cnfPass"
							  id=""
							/>
						  </div>
						</div>

						<div className="col-md-6">
						  <select
							className="form-control form-control-solid placeholder-no-fix"
							onChange={this.onChangeHandler}
							name="country"
							id="countrySelect"
						  >
							<option>Select Country</option>
							{this.state.countries.map((option, key) => (
							  <option key={key.id} value={option.name}>
								{option.name}
							  </option>
							))}
						  </select>
						</div>
						<div className="col-md-6">
						  <div className="form-group">
							<select
							  className="form-control form-control-solid placeholder-no-fix"
							  onChange={this.onChangeHandler}
							  name="state"
							  id="stateSelect"
							>
							  <option>Select State</option>
							  {this.state.states?this.state.states.map((option, key) => (
								<option key={key.id} value={option.name}>
								  {option.name}
								</option>
							  )):''}
							</select>
						  </div>
						</div>
						<div className="col-md-6">
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
						<div className="col-md-6">
						  <div className="form-group">
							<input
							  className="form-control form-control-solid placeholder-no-fix"
							  type="text"
							  autocomplete="off"
							  onChange={this.onChangeHandler}
							  placeholder="ZIP Code"
							  name="zip_code"
							  id=""
							/>
						  </div>
						</div>
						<div className="col-md-6">
						  <div className="form-group">
							<input
							  className="form-control form-control-solid placeholder-no-fix"
							  type="text"
							  autocomplete="off"
							  placeholder="Mobile"
							  onChange={this.onChangeHandler}
							  name="mobile_no"
							  value={this.state.Registeration.mobile_no}
							  id=""
							/>
						  </div>
						</div>
						<div className="col-md-6">
						  <div className="form-group">
							<input
							  className="form-control form-control-solid placeholder-no-fix"
							  type="text"
							  autocomplete="off"
							  placeholder="Landline"
							  name="landline_no"
							  value={this.state.Registeration.landline_no}
							  id=""
							  onChange={this.onChangeHandler}
							/>
						  </div>
						</div>
						
						<div className="col-md-12 col-xs-12 text-center">
						  <button
							type="button"
							className="btn btn-success uppercase"
							onClick={this.registerNow}
						  >
							Save
						  </button>
						</div>
					  </form>

                    {/*<!-- END LOGIN FORM --> */}
                  </div>
                </div>
              </div>
            </div>
            {/*<!--    Comments    --> */}
            {/*<!--    End-Comments    --> */}
          </div>
        </div>

        {/*<!--end class tz-footer--> */}
      </div>
    );
  }
}