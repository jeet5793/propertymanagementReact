import React from 'react'
import { connect } from 'react-redux';
import API_URL from "../../../../app-config";
import Cookies from 'js-cookie';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datetime-picker';
import $ from 'jquery';

class ProfileInfo extends React.Component{
	constructor(props){
    super(props)
    this.profileSubmit=this.profileSubmit.bind(this)
    this.state={
		userData:Cookies.get('profile_data'),	
		userInfo:props.userData,
		dobDate:"",
		 profile:[],
      profileSetting:{
				testDate:"",
			assets_id:"",
			session_id:"",
			first_name:"",
			last_name:"",
			email:"",
			country:"",
			state:"",
			city:"",
			zip_code:"",
			mobile_no:"",
			landline_no:"",
			assets_type:"",
			owner_type:"",
			profile_photo:"",
			about_us:"",
			facebook_link:"",
			twitter_link:"",
			linkedin_link:"",
			SSN_EIN:"",
			dob:"",
			gender:""
      },
	  countries: [{ name: "Afghanistan" }],
      states: [],
      cities: []
			}
			this.onChange=this.onChange.bind(this)
      this.onChangeHandler=this.onChangeHandler.bind(this);
	    this.fileInput = React.createRef();
	}
	
	onChange(date){
		this.setState({
			profileSetting:{dob:date}
		 });
		}

	onChangeHandler(e){
        // console.log(this.fileInput.current.files[0]);
				const profileForm=this.state.profileSetting;
        let formData = new FormData();
      if(e.target.name==='first_name')
	  {
        profileForm.first_name=e.target.value;
		//alert(settingForm.old_password);
	  }
		else if(e.target.name==='last_name')
			profileForm.last_name=e.target.value
		else if(e.target.name==='email')
			profileForm.email=e.target.value
		else if(e.target.name==='country')
		{
			profileForm.country=e.target.value;
			var SelectCountry = profileForm.country;
			this.stateLists(SelectCountry);
		}
		else if(e.target.name==='state')
		{
			profileForm.state=e.target.value;
			var SelectState = profileForm.state;
			this.cityList(SelectState);
		}
		else if(e.target.name==='city')
			profileForm.city=e.target.value
		else if(e.target.name==='zip_code')
			profileForm.zip_code=e.target.value
		else if(e.target.name==='mobile_no')
			profileForm.mobile_no=e.target.value
		else if(e.target.name==='landline_no')
			profileForm.landline_no=e.target.value
		// else if(e.target.name==='assets_type')
			// profileForm.assets_type=e.target.value
		else if(e.target.name==='owner_type')
			profileForm.owner_type=e.target.value
		else if(e.target.name==='profile_photo')
		{
			let file = this.fileInput.current.files[0]
			let reader = new FileReader();
			reader.onload = () => {

			let result = reader.result;
			profileForm.profile_photo = result;
			};
			reader.onerror = () => {
				console.log('image read error')
			};
			// reader.readAsBinaryString(file);
			 reader.readAsDataURL(file);
            formData.append('file', this.fileInput.current.files[0])
			// profileForm.append('profile_photo', profileForm.profile_photo, profileForm.profile_photo.name)
			// const formData = new FormData();
			 // profileForm.profile_photo=formData.append(e.target.name,e.target.files[0]);
		}
		else if(e.target.name==='about_us')
			profileForm.about_us=e.target.value
		else if(e.target.name==='facebook_link')
			profileForm.facebook_link=e.target.value
		else if(e.target.name==='twitter_link')
			profileForm.twitter_link=e.target.value
		else if(e.target.name==='linkedin_link')
			profileForm.linkedin_link=e.target.value
		else if(e.target.name==='SSN_EIN')
			profileForm.SSN_EIN=e.target.value
		else if(e.target.name==='dob')
			profileForm.dob=e.target.value
		else if(e.target.name==='gender')
			profileForm.gender=e.target.value
	
	 //console.log(this.state.userInfo);
	  
		// alert(dateOfBirth)
		// this.setState({
		// 	profileSetting:{dob:dateOfBirth}
		//  },()=>{
		// 	 alert("KKKK"+JSON.stringify(this.state.profileSetting))
		//  });
		profileForm.assets_id = JSON.parse(this.state.userData).assets_id;
		profileForm.session_id = JSON.parse(this.state.userData).session_id;
		//profileForm.assets_type = JSON.parse(this.state.userData).assetsTypeId;
	
      this.setState({profileSetting:profileForm})
      this.setState({formData:formData});
      // this.setState({[e.target.name]:e.target.value})
	 // console.log(this.state.profileSetting);
  }
	profileSubmit(e)
	{
		e.preventDefault();
		// console.log(this.state.profileSetting)
		// console.log(this.state.profile)
		var opts= Object.assign(this.state.profile, this.state.profileSetting);
		opts.session_id = JSON.parse(this.state.userData).session_id
	  $("#loaderDiv").show();
      fetch(`${API_URL}assetsapi/setting_profile/`, {
        method: 'post',        
        body: JSON.stringify(opts)
        }).then((response) => {
          return response.json();
        }).then((data) => {
          //console.log('dataaaa:  ', data);
						$("#loaderDiv").hide();
						$("#actionType").val("Yes");
					   $("#hiddenURL").val("settings");
					   $(".confirm-body").html(data.msg);
					   $("#BlockUIConfirm").show();
        }).catch((error) => {
          console.log('error: ', error);
        });
      }
	   componentDidMount(){
			// $("#date").change(function() 
			// { $('#datepicker').datepicker('option', {dateFormat: $(this).val()}); })
		
			const profile=JSON.parse(this.state.userData)
			if(profile)
			{
				fetch(`${API_URL}assetsapi/profile/${profile.assets_id}/${profile.session_id}`, {
					method: 'get'
				})
			.then(res => res.json())
			.then(
			  (result) => {
				//console.log("data 2: "+JSON.stringify(profile))
				if (result.success) {
					this.setState({profile:result.profile})
					var dobDate = new Date(this.state.profile.dob)
						this.setState({
							profileSetting:{dob: dobDate}
						})
						
					} 
			  },
			(error) => {
			  console.log('error')
			}
		  )
		  this.Countries();
		 }
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
    render(){
		//console.log(this.state.profile);
        return(
				(this.state.profile)?
					  <div className="tab-pane fade show active" style={{width:"100%"}} id="profile-info">
						<fieldset title="1">
						 
						  <div className="form-group">
							<div className="row">
							  <div className="col-lg-1 col-md-2 col-sm-2 required">
								<label for="first_name">First Name</label>
							  </div>
							  <div className="col-lg-5 col-md-4 col-sm-4">
								<input type="text" className="form-control" id="first_name" name="first_name"  value={this.state.profileSetting.first_name || this.state.profile.first_name} onChange={this.onChangeHandler} placeholder="" />
							  </div>
							  <div className="col-lg-1 col-md-2 col-sm-2 required">
								<label for="last_name">Last Name</label>
							  </div>
							  <div className="col-lg-5 col-md-4 col-sm-4">
								<input type="text" className="form-control" id="last_name" name="last_name"  value={this.state.profileSetting.last_name || this.state.profile.last_name} onChange={this.onChangeHandler} placeholder=""  />
							  </div>
							</div>
						  </div>
						  <div className="form-group">
							<div className="row">
							  <div className="col-lg-1 col-md-2 col-sm-2 required">
								<label for="dob">D.O.B</label>
							  </div>
							  <div className="col-lg-2 col-md-4 col-sm-4">
								{/* <input value={this.state.profileSetting.dob.slice(0,10)} className="form-control" id="dobDate" name="date" placeholder="MM/DD/YYYY" type="text"/> */}
											<DatePicker className="form-control"
												disableClock={true}
												locale="en-US"
												onChange={this.onChange}
												value={this.state.profileSetting.dob}
											/>
							  </div>
							  <div className="col-lg-1 col-md-2 col-sm-2 required">
								<label for="gender">Gender</label>
							  </div>
							  <div className="col-lg-2 col-md-4 col-sm-4">
								<select className="form-control" value = {this.state.profileSetting.gender || this.state.profile.gender} name="gender" onChange={this.onChangeHandler}>
								  <option value="Male" >Male</option>
								  <option value="Female" >Female</option>
								  <option value="Other" >Other</option>
								</select>
							  </div>
							  <div className="col-lg-1 col-md-2 col-sm-2 required">
								<label for="SSN_EIN">SSN/EIN</label>
							  </div>
							  <div className="col-lg-5 col-md-4 col-sm-4">
								<input type="text" className="form-control" name="SSN_EIN"  id="SSN_EIN" value={this.state.profileSetting.SSN_EIN || this.state.profile.SSN_EIN} onChange={this.onChangeHandler} placeholder="" required />
							  </div>
							</div>
						  </div>
						  <div className="form-group">
							<div className="row">
							  <div className="col-lg-1 col-md-2 col-sm-2 required">
								<label for="email">Email</label>
							  </div>
							  <div className="col-lg-5 col-md-4 col-sm-4">
								<input type="email" className="form-control" name="email"  id="email"  value={this.state.profileSetting.email || this.state.profile.email} onChange={this.onChangeHandler} placeholder="" required />
							  </div>
							  <div className="col-lg-1 col-md-2 col-sm-2 required">
								<label for="owner_type">User Type</label>
							  </div>
							  <div className="col-lg-5 col-md-4 col-sm-4">
								<select className="form-control" name="owner_type"  value = {this.state.profileSetting.owner_type ||this.state.profile.owner_type} onChange={this.onChangeHandler} >
								 
								  <option value="1" >Individual</option>
								  <option value="2" >Organization</option>
								</select>
							  </div>
							</div>
						  </div>
						  <div className="form-group">
							<div className="row">
							  <div className="col-lg-1 col-md-2 col-sm-2 required">
								<label for="country">Country</label>
							  </div>
							  <div className="col-lg-5 col-md-4 col-sm-4">
								<select className="form-control" name="country" value={this.state.profileSetting.country || this.state.profile.country} onChange={this.onChangeHandler} >
								  {this.state.countries.map((option, key) => (<option key={key.id} value={option.name}>{option.name}</option>))}
								 
								</select>
							  </div>
							  <div className="col-lg-1 col-md-2 col-sm-2 required">
								<label for="state" >State</label>
							  </div>
							  <div className="col-lg-5 col-md-4 col-sm-4">
								<select className="form-control" name="state"  onChange={this.onChangeHandler} >
								  <option>{this.state.profile.state}</option>
								 {this.state.states?this.state.states.map((option, key) => (<option key={key.id} value={option.name}>{option.name}</option>)):''}
								 
								</select>
							  </div>
							  
							</div>
						  </div>
						  <div className="form-group">
							<div className="row">
							  <div className="col-lg-1 col-md-2 col-sm-2 required">
								<label for="city">City</label>
							  </div>
							  <div className="col-lg-5 col-md-4 col-sm-4">
								<select className="form-control" name="city" onChange={this.onChangeHandler} >
								  <option>{this.state.profile.city}</option>
								  {this.state.cities?this.state.cities.map((option, key) => (<option key={key.id} value={option.name}>{option.name}</option>)):''}
								 
								</select>
							  </div>
							  <div className="col-lg-1 col-md-2 col-sm-2 required">
								<label for="zip-code">ZIP Code</label>
							  </div>
							  <div className="col-lg-5 col-md-4 col-sm-4">
								<input type="text" className="form-control" name="zip_code"  id="zip-code" placeholder="" value={this.state.profileSetting.zip_code || this.state.profile.zip_code} onChange={this.onChangeHandler} />
							  </div>
							</div>
						  </div>
						  
						  <div className="form-group">
							<div className="row">
							  <div className="col-lg-1 col-md-2 col-sm-2 required">
								<label for="mobile-no">Mobile No</label>
							  </div>
							  <div className="col-lg-5 col-md-4 col-sm-4">
								<input type="text" className="form-control" name="mobile_no"  id="mobile-no" placeholder="" value={this.state.profileSetting.mobile_no || this.state.profile.mobile_no}  onChange={this.onChangeHandler} />
							  </div>
							  <div className="col-md-1">
								<label for="landline_no">Landline</label>
							  </div>
							  <div className="col-lg-5 col-md-4 col-sm-4">
								<input type="text" className="form-control" name="landline_no"  value={this.state.profileSetting.landline_no || this.state.profile.landline_no} id="landline"  placeholder="" onChange={this.onChangeHandler} />
							  </div>
							</div>
						  </div>
						  <div className="form-group">
							<div className="row">
							  <div className="col-lg-1 col-md-2 col-sm-2 required">
								<label for="profile_photo">Profile Img</label>
							  </div>
							  <div className="col-lg-5 col-md-4 col-sm-4">
								<input type="file" className="form-control" name="profile_photo"  id="u"  placeholder="" onChange={this.onChangeHandler} ref={this.fileInput} />
							  </div>
							  <div className="col-lg-1 col-md-2 col-sm-2 required">
								<label for="about_us">About Me</label>
							  </div>
							  <div className="col-lg-5 col-md-4 col-sm-4">
								<textarea type="text" className="form-control" name="about_us"  value={this.state.profileSetting.about_us || this.state.profile.about_us} id="about_us-no"  placeholder="" onChange={this.onChangeHandler}></textarea>
							  </div>
							</div>
						  </div>
						</fieldset>
						<fieldset title="2">
						  <h4>Social Profiles</h4>
						  <div className="row m-t-20">
							<div className="col-sm-4">
							  <div className="form-group">
								<div className="input-group"> <span className="input-group-addon"><i className="mdi mdi-facebook"></i></span>
								  <input type="text" className="form-control" name="facebook_link"  placeholder="Facebook url"value={this.state.profileSetting.facebook_link || this.state.profile.facebook_link}  onChange={this.onChangeHandler}/>
								</div>
							  </div>
							</div>
							<div className="col-sm-4">
							  <div className="form-group">
								<div className="input-group"> <span className="input-group-addon"><i className="mdi mdi-linkedin"></i></span>
								  <input type="text" className="form-control" name="linkedin_link" value={this.state.profileSetting.linkedin_link || this.state.profile.linkedin_link}  placeholder="Linkdin url" onChange={this.onChangeHandler}/>
								</div>
							  </div>
							</div>
							<div className="col-sm-4">
							  <div className="form-group">
								<div className="input-group"> <span className="input-group-addon"><i className="mdi mdi-twitter"></i></span>
								  <input type="text" className="form-control" name="twitter_link" value={this.state.profileSetting.twitter_link || this.state.profile.twitter_link}  placeholder="Twitter url" onChange={this.onChangeHandler}/>
								</div>
							  </div>
							</div>
						  </div>
						</fieldset>
						   <div > {/*style={{display: '-webkit-box'}} */}
						<div className="col-md-12 text-right">
						  <button type="submit" className="btn btn-primary stepy-finish text-right" onClick={this.profileSubmit}>Submit </button>
						</div>
						</div>
					  </div>:<div className="container"  style={{marginTop:'10%',marginLeft:'50%'}}><img src="http://wordpress.templaza.net/real-estate/wp-content/themes/real-estate/images/loading_blue_64x64.gif"/></div>
	
        );
    }
}
export default connect(state=>({ userData: state.userData }))(ProfileInfo)