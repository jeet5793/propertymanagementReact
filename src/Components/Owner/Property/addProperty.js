import React from 'react'
import { Link } from 'react-router-dom'
import API_URL from '../../../app-config';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import swal from 'sweetalert';
import Dropzone from 'react-dropzone'
import $ from 'jquery'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
class AddProperty extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: props.userData,
      profileData: '',
      files: [],
      images: [],
      userData: Cookies.get('profile_data'),
      countries: [{ name: "Afghanistan" }],
      states: [],
      addressCount: 1,
      cities: [],
      photos: [],
      loggedOwner: props.owner,
      isLoaded: true,
      countrySelected: '',
      formData: {
        //"owner_id":"",
        "title": "",
        "address": "",
		"address2": "",
        "city": '',
        "state": "",
        "country": [],
        "zip_code": "",
        "property_type": "",
        "property_status": "",
        "description": " ",
        "geo_location": "",
        "square_feet": "",
		"agent_perc":"",
        "bedroom": "",
        "bathroom": "",
        "total_amount": "",
        "advance": "",
        "owner_details": [],
        "img_path": [],
        "session_id": "",
		"property_access":""
      },
      owner_name: '',
      shareholders: [{
        owner_name: "",
        address: "",
		address2: "",
        city: "",
        state: "",
        country: "",
        zip_code: "",
        mobile_no:"",
        email:""
      }]
    }
    this.createProperty = this.createProperty.bind(this)
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onDrop = this.onDrop.bind(this);
    this.removeImage = this.removeImage.bind(this);
  }
  handleShareholderNameChange = (idx) => (evt) => {
    const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, owner_name: evt.target.value };
    });

    this.setState({ shareholders: newShareholders });
  }

  handleAddShareholder = () => {
    this.setState({
      shareholders: this.state.shareholders.concat([{
        owner_name: "",
        address: "",
		address2: "",
        city: "",
        state: "",
        country: "",
        zip_code: "",
        mobile_no:"",
        email:""
      }])
    }, () => {
      // console.log("shareholdersList" + JSON.stringify(this.state.shareholders))
    });
  }

  handleRemoveShareholder = (idx) => () => {
    this.setState({
      shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx)
    });
  }

  componentDidMount() {
    var $ = window.$;
    $(".add-owner").click(function () {
      $(".owner-field").toggle();
    });
    this.Countries()
  }

  Countries() {
    fetch(`${API_URL}assetsapi/country/`).then(response => {
      response.json().then(data => {
        this.setState({ countries: data.countries });
      });
    });
  }

  stateLists(SelectCountry) {
    fetch(`${API_URL}assetsapi/state/` + SelectCountry).then(response => {
      response.json().then(data => {
        this.setState({ states: data.states });
      });
    });
  }

  cityList(SelectState) {
    fetch(`${API_URL}assetsapi/city/` + SelectState).then(response => {
      response.json().then(data => {
        this.setState({ cities: data.cities });
      });
    });
  }
  stateListsShare(SelectCountry,cnt) {
    
    fetch(`${API_URL}assetsapi/state/` + SelectCountry).then(response => {
      response.json().then(data => {
        //this.setState({ shareStates: data.states });
        //console.log(this.state.shareStates);
       // ('#state'+cnt).html( this.state.shareStates.filter( '[value="' + this.value + '"]' ) );
       //
       //$("#state"+cnt).html(<option value="hdftyhfuj">dsfgdhfgj</option>);
       $('#state'+cnt).html("");
       $.each(data.states, function (j, item) {
        $('#state'+cnt).append($('<option>', {
            value: item.name,
            text: item.name,
        }, '</option>'));
    });
       //let opt = this.state.shareStates.map((option, key) => (<option key={key.id} value={option.name}>{option.name}</option>));
       //console.log(opt);
       //$("#state"+cnt).html(opt);
      });
    });
  }
  cityListShare(SelectState,cnt) {
   
    fetch(`${API_URL}assetsapi/city/` + SelectState).then(response => {
      response.json().then(data => {
        //this.setState({ cities: data.cities });
        $('#city'+cnt).html("");
        $.each(data.cities, function (j, item) {
          $('#city'+cnt).append($('<option>', {
              value: item.name,
              text: item.name,
          }, '</option>'));
      });
      });
    });
  }

  onChangeHandler(e, count) {
    const formData = this.state.formData
    if (e.target.name != "img_path" && e.target.name != "owner_details") {
      if (e.target.name == "title")
        formData.title = e.target.value
      else if (e.target.name == "address")
        formData.address = e.target.value
	else if (e.target.name == "address2")
        formData.address2 = e.target.value
      else if (e.target.name == "country") {
        formData.country = e.target.value
        var SelectCountry = formData.country;
        this.stateLists(SelectCountry);
      }
      else if (e.target.name == "state") {
        formData.state = e.target.value
        var SelectState = formData.state;
        this.cityList(SelectState);
      }

      else if (e.target.name == "city")
        formData.city = e.target.value
      else if (e.target.name == "zip_code")
        formData.zip_code = e.target.value
      else if (e.target.name == "property_type")
        formData.property_type = e.target.value
      else if (e.target.name == "property_status"){
		  // formData.property_status = e.target.value
		  if(e.target.value==="Rent"){
				$('#rent').show();
				$('#advance').show();
				$('#total_amount').hide();
		  }else if(e.target.value==="Sale"){
				$('#total_amount').show();
				$('#advance').show();
				$('#rent').hide();
		  }else if(e.target.value==="Rented"){
				$('#rent').show();
				$('#advance').show();
				$('#total_amount').hide();
		  }else if(e.target.value==="Sold"){
				$('#total_amount').show();
				$('#advance').show();
				$('#rent').hide();
		  }
		  formData.property_status = e.target.value
	  }
       else if (e.target.name == "description")
        formData.description = e.target.value
	else if (e.target.name == "property_access")
        formData.property_access = e.target.value
      else if (e.target.name == "geo_location")
        formData.geo_location = e.target.value
      else if (e.target.name == "square_feet")
        formData.square_feet = e.target.value
	 else if (e.target.name == "agent_perc")
        formData.agent_perc = e.target.value
      else if (e.target.name == "bedroom")
        formData.bedroom = e.target.value
      else if (e.target.name == "bathroom")
        formData.bathroom = e.target.value
      else if (e.target.name == "total_amount")
        formData.total_amount = e.target.value
	else if (e.target.name == "rent")
        formData.rent = e.target.value
      else if (e.target.name == "advance")
        formData.advance = e.target.value
      else if (e.target.name === 'owner_name' + count) {
        this.state.shareholders[count].owner_name = e.target.value
      }
      else if (e.target.name === 'country' + count) {
        this.state.shareholders[count].country = e.target.value
        var SelectCountry = e.target.value;
        this.stateListsShare(SelectCountry,count);
      }
      else if (e.target.name === 'address' + count) {
        this.state.shareholders[count].address = e.target.value
      }
	  else if (e.target.name === 'address2' + count) {
        this.state.shareholders[count].address2 = e.target.value
      }

      else if (e.target.name === 'city' + count) {
        this.state.shareholders[count].city = e.target.value
      }
      else if (e.target.name === 'state' + count) {
        this.state.shareholders[count].state = e.target.value
        var SelectState = e.target.value;
        this.cityListShare(SelectState,count);
      }

      else if (e.target.name === 'zip_code' + count) {
        this.state.shareholders[count].zip_code = e.target.value
      } 
      else if (e.target.name === 'email' + count) {
        this.state.shareholders[count].email = e.target.value
      }
      else if (e.target.name === 'mobile_no' + count) {
        this.state.shareholders[count].mobile_no = e.target.value
      }
      formData.session_id = JSON.parse(this.state.userData).session_id;
      formData.owner_id = JSON.parse(this.state.userData).assets_id;
    }
    else {
      formData.img_path.push(e.target.value)
    }
    this.setState({ formData: formData })

  }
  createProperty() {
    var opts = this.state.formData
    opts.owner_details = this.state.shareholders
    opts.img_path = this.state.images;
	$("#loaderDiv").show();
  fetch(`${API_URL}assetsapi/checkPermissions/${JSON.parse(this.state.userData).assets_id}/upload_image_per_property`, {
		  method: "GET"
		})
		  .then(response => {
			return response.json();
		  })
		  .then((data) => {
			//debugger;
			// console.log('opts.img_path.length:  ', opts.img_path.length);
			if(data.success===0){
			  // var userid = data.user.assets_id
			  // localStorage.setItem('userid',userid)
						$("#loaderDiv").hide();
						
						   if(opts.img_path.length>data.limit)
						   {
							   $("#actionType").val("No");
							   var msg = "You can upload maximum "+data.limit+ " images.";
							   // $("#hiddenURL").val("");
							   // $(".confirm-body").html(msg);
							   // $("#BlockUIConfirm").show();
							   confirmAlert({
								  customUI: ({ onClose }) => {
									return (
									  <div className='custom-ui'>
										<h4>Notification</h4>
										<p>{msg}</p>
										<button onClick={()=>{
										onClose()}}>Ok</button>
									  </div>
									)
								  }
								})
						   }else{
							    $("#loaderDiv").show();
							// console.log("imgpathhh" + JSON.stringify(this.state.images))
							fetch(`${API_URL}assetsapi/add_property/`, {
							  method: 'post',
							  body: JSON.stringify(opts)
							}, { 'Content-type': 'multipart/form-data' }).then((response) => {
							  return response.json();
							}).then((data) => {
							  //console.log("responseeeee" + JSON.stringify(data));
							  if (data) {
								// swal("Assets Watch", data.msg);
								// window.location.href = '/my-property'
											$("#loaderDiv").hide();
											   
											   /* $("#actionType").val("Yes");
											   // $("#hiddenURL").val("my-property");
											   $(".confirm-body").html(data.msg);
											   $("#BlockUIConfirm").show();
											   this.props.history.push('my-property'); */
											   confirmAlert({
												  customUI: ({ onClose }) => {
													return (
													  <div className='custom-ui'>
														<h4>Notification</h4>
														<p>{msg}</p>
														<button onClick={()=>{
															 this.props.history.push('my-property');
														onClose()}}>Ok</button>
													  </div>
													)
												  }
												})
											   
							  }
							}).catch((error) => {
							  console.log('error: ', error);
							}); 
						   }
				}else{
					$("#loaderDiv").hide();
				}
		  }
		).catch((error) => {
			console.log('error: ', error);
		  });
	  
	
  }

  onDrop(acceptedFiles) {
	 
     acceptedFiles.forEach(file => {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // console.log("base64base64" + reader.result);
        const fileAsBinaryString = reader.result;
        this.state.images.push(fileAsBinaryString)
        this.setState({ files: [file, ...this.state.files], images: this.state.images }, () => {
          // console.log("helllllllllllllllo " + JSON.stringify(this.state.images))
		   // console.log(acceptedFiles.length);
        })
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    }) 
  }
  removeImage(preview) {
    let { images } = this.state;
    var index = images.indexOf(preview);
    if (index > -1) {
      images.splice(index, 1);
    }
    this.setState({ images })
  }

  render() {
    const contries = this.state.countries
    var coptions = contries.map(function (item) {
      var selectValue = 'India'
      if (selectValue === item.name) {
        return <option selected value={item.name} > {item.name} </option>;
      } else {
        return <option style={{ color: 'black' }} value={item.name} > {item.name} </option>;
      }

    })

    return (
      <div>
    
        <div className="wrapper">
          <div className="container">
            <div className="page-title-box">
              <div className="btn-group pull-right">
                <ol className="breadcrumb hide-phone p-0 m-0">
                  <li> <Link to={{ pathname: '/my-property' }} className="btn btn-custom waves-light waves-effect w-md"><i className="fi-reply"></i>&nbsp;&nbsp;My Property</Link></li>
                </ol>
              </div>
              <h4 className="page-title">Add Property</h4>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card-box add-property">
                 <form  className="form-horizontal">
                  <div className="row">
                    <div className="col-md-8 col-sm-8">
                      <div className="form-group row">
                        <label className="col-lg-2 col-md-3 col-sm-3 col-form-label required">Property Title</label>
                        <div className="col-lg-10 col-md-9 col-sm-9">
                          <input name="title" onChange={this.onChangeHandler} type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-lg-2 col-md-3 col-sm-3 col-form-label required">Address1</label>
                        <div className="col-lg-10 col-md-9 col-sm-9">
						<input name="address" onChange={this.onChangeHandler} placeholder='Property address1' type="text" className="form-control" />
                        </div>
                      </div>
					  <div className="form-group row">
                        <label className="col-lg-2 col-md-3 col-sm-3 col-form-label">Address2</label>
                        <div className="col-lg-10 col-md-9 col-sm-9">
						<input name="address2" onChange={this.onChangeHandler} placeholder='Property address2' type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-lg-2 col-md-3 col-sm-3 col-form-label required">Country</label>
                        <div className="col-lg-4 col-md-9 col-sm-9 adpro-lbl">
                          <select className="form-control" name='country' onChange={this.onChangeHandler} >
                            <option>Please select a country</option>
                            {this.state.countries.map((option, key) => (<option key={key.id} value={option.name}>{option.name}</option>))}
                          </select>
                        </div>

                        <label className="col-lg-2 col-md-3 col-sm-3 col-form-label required">State</label>
                        <div className="col-lg-4 col-md-9 col-sm-9 adpro-lbl">
                          <select className="form-control" name="state" onChange={this.onChangeHandler} >
                            <option>Please select a state</option>
                            {this.state.states ? this.state.states.map((option, key) => (<option key={key.id} value={option.name}>{option.name}</option>)) : ''}
                          </select>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-lg-2 col-md-3 col-sm-3 col-form-label required">City</label>
                        <div className="col-lg-4 col-md-9 col-sm-9 adpro-lbl">
                          <select className="form-control" name="city" onChange={this.onChangeHandler} >
                            <option>Please select a city</option>
                            {this.state.cities ? this.state.cities.map((option, key) => (<option key={key.id} value={option.name}>{option.name}</option>)) : ''}
                          </select>
                        </div>
                        <label className="col-lg-2 col-md-3 col-sm-3 col-form-label required">ZIP code</label>
                        <div className="col-lg-4 col-md-9 col-sm-9 adpro-lbl">
                          <input type="text" className="form-control" name="zip_code" onChange={this.onChangeHandler} />
                        </div>
                      </div>
                      <hr style={{ color: '#f0ad4e', backgroundColor: '#f0ad4e', height: 2 }} />
                      <a className="btn btn-custom waves-light waves-effect w-md add-owner" onClick={this.handleAddShareholder}>
                        Add Owner
                      </a>
                      {this.state.shareholders.map((shareholder, idx) => (
                        <div>
                          <div className="form-group row">
                            <label className="col-lg-2 col-md-3 col-sm-3 col-form-label required">Owner {idx + 2}</label>
                            <div className="col-lg-10 col-md-9 col-sm-9">
                              <input type="text" name={'owner_name' + (idx)} placeholder={`Owner #${idx + 2} owner_name`} className="form-control" onChange={(e) => { this.onChangeHandler(e, idx) }} />
                            </div>
                          </div>
                          {/*add second owner*/}
                          <div className="form-group row">
                            <label className="col-lg-2 col-md-3 col-sm-3 col-form-label required">Address1</label>
                            <div className="col-lg-10 col-md-9 col-sm-9">
                             <input type="text" name={'address' + (idx)} placeholder={`Owner #${idx + 2} address1`} onChange={(e) => { this.onChangeHandler(e, idx) }} className="form-control"/>


                            </div>
                          </div>
						  <div className="form-group row">
                            <label className="col-lg-2 col-md-3 col-sm-3 col-form-label">Address2</label>
                            <div className="col-lg-10 col-md-9 col-sm-9">
                              <input type="text" name={'address2' + (idx)} placeholder={`Owner #${idx + 2} address2`} onChange={(e) => { this.onChangeHandler(e, idx) }} className="form-control"/>

                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-lg-2 col-md-3 col-sm-3 col-form-label required">Country</label>
                            <div className="col-lg-4 col-md-9 col-sm-9 adpro-lbl">
                              <select className="form-control" name={'country' + (idx)} onChange={(e) => { this.onChangeHandler(e, idx) }} >
                                <option>Please select a country</option>
                                {this.state.countries.map((option, key) => (<option key={key.id} value={option.name}>{option.name}</option>))}
                              </select>
                            </div>

                            <label className="col-lg-2 col-md-3 col-sm-3 col-form-label required">State</label>
                            <div className="col-lg-4 col-md-9 col-sm-9 adpro-lbl">
                              <select className="form-control" id={'state' + (idx)} name={'state' + (idx)} onChange={(e) => { this.onChangeHandler(e, idx) }} >
                                <option>Please select a state</option>
                                
                              </select>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-lg-2 col-md-3 col-sm-3 col-form-label required">City</label>
                            <div className="col-lg-4 col-md-9 col-sm-9 adpro-lbl">
                              <select className="form-control" id={'city' + (idx)} name={'city' + (idx)} onChange={(e) => { this.onChangeHandler(e, idx) }} >
                                <option>Please select a city</option>
                               
                              </select>
                            </div>
                            <label className="col-lg-2 col-md-3 col-sm-3 col-form-label required">ZIP code</label>
                            <div className="col-lg-4 col-md-9 col-sm-9 adpro-lbl">
                              <input type="text" className="form-control" name={'zip_code' + (idx)} onChange={(e) => { this.onChangeHandler(e, idx) }} />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-lg-2 col-md-3 col-sm-3 col-form-label required">Mobile Number</label>
                            <div className="col-lg-4 col-md-9 col-sm-9 adpro-lbl">
                            <input type="text" className="form-control" name={'mobile_no' + (idx)} onChange={(e) => { this.onChangeHandler(e, idx) }} />
                            </div>
                            <label className="col-lg-2 col-md-3 col-sm-3 col-form-label required">Email</label>
                            <div className="col-lg-4 col-md-9 col-sm-9 adpro-lbl">
                              <input type="text" className="form-control" name={'email' + (idx)} onChange={(e) => { this.onChangeHandler(e, idx) }} />
                            </div>
                          </div>
                          <div className="form-group row">
                            <div className="col-8"></div>
                            <div className="col-2"><button type="button" onClick={this.handleRemoveShareholder(idx)}  className="btn btn-danger waves-effect w-md waves-light small">Remove</button></div>
                          </div>
                        </div>
                      ))}
                      <hr style={{ color: '#f0ad4e', backgroundColor: '#f0ad4e', height: 2 }} />
                      <div className="form-group row">
                        <label className="col-lg-2 col-md-3 col-sm-3 col-form-label required">Property Type</label>
                        <div className="col-lg-4 col-md-9 col-sm-9 adpro-lbl">
                          <select className="form-control" name="property_type" onChange={this.onChangeHandler}>
                            <option selected>Please Select</option>
                            <option value="Private Apartment">Private Apartment</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Flat">Flat</option>
                            <option value="House">House</option>
                          </select>
                        </div>
                        <label className="col-lg-2 col-md-3 col-sm-3 col-form-label required">Property Status</label>
                        <div className="col-lg-4 col-md-9 col-sm-9 adpro-lbl">
                          <select className="form-control" name="property_status" onChange={this.onChangeHandler}>
                            <option>Please Select</option>
                            <option value="Rent">Rent</option>
                            <option value="Sale">Sale</option>
							<option value="Rented">Rented</option>
                            <option value="Sold">Sold</option>
                           
                          </select>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-lg-2 col-md-3 col-sm-3 col-form-label required">Description</label>
                        <div className="col-lg-10 col-md-9 col-sm-9">
                          <textarea id="elm1" className="w-100 form-control" name="description" onChange={this.onChangeHandler}></textarea>
                        </div>
                      </div>

                      { /* <div className="form-group row">
                              <label className="col-lg-2 col-md-3 col-sm-3 col-form-label">GEO Location</label>
                              <div className="col-lg-10 col-md-9 col-sm-9">
                                <div className="geo-loaction-mp">
                                  <div id="gmaps-basic" className="gmaps"></div>
                                </div>
                              </div>
						            </div>*/}

                      <div className="form-group row">
                        <label className="col-lg-2 col-md-3 col-sm-3 col-form-label required">Square Feet</label>
                        <div className="col-lg-4 col-md-9 col-sm-9 adpro-lbl">
                          <input name="square_feet" onChange={this.onChangeHandler} type="text" className="form-control" />
                        </div>
						 <label className="col-lg-2 col-md-3 col-sm-3 col-form-label">Agent (%)</label>
                        <div className="col-lg-4 col-md-9 col-sm-9 adpro-lbl">
                          <input name="agent_perc" onChange={this.onChangeHandler} type="text" className="form-control" />
                        </div>
                      </div>
				
                      <div className="form-group row">
                        <label className="col-lg-2 col-md-3 col-sm-3 col-form-label required">Bedrooms</label>
                        <div className="col-lg-4 col-md-9 col-sm-9 adpro-lbl">
                          <input type="text" name="bedroom" onChange={this.onChangeHandler} className="form-control" />
                        </div>
                        <label className="col-lg-2 col-md-3 col-sm-3 col-form-label required">Bathrooms</label>
                        <div className="col-lg-4 col-md-9 col-sm-9 adpro-lbl">
                          <input type="text" name="bathroom" className="form-control" onChange={this.onChangeHandler} />
                        </div>
                      </div>
					  <div className="form-group row">
                        <label className="col-lg-2 col-md-3 col-sm-3 col-form-label required">Property access</label>
                        <div className="col-lg-4 col-md-9 col-sm-9 adpro-lbl">
                          <select className="form-control" name="property_access" onChange={this.onChangeHandler}>
                            <option>Please Select</option>
                            <option value="Public ">Public </option>
							<option value="Private">Private</option>
                           
                          </select>
                        </div>
						
                      </div>
                      <div className="form-group row">
                       
                        <div className="col-lg-4 col-md-9 col-sm-9 adpro-lbl" id="total_amount" style={{display:'none'}}>
							<label className="col-lg-2 col-md-3 col-sm-3 col-form-label required" id="to" >Total Amount</label>
                          <input type="text" className="form-control" name="total_amount" onChange={this.onChangeHandler} />
                        </div>
						<div className="col-lg-4 col-md-9 col-sm-9 adpro-lbl" id="rent" style={{display:'none'}}>
							<label className="col-lg-2 col-md-3 col-sm-3 col-form-label required"  >Rent</label>
                          <input type="text" className="form-control" name="rent" onChange={this.onChangeHandler} />
                        </div>
                        
                        <div className="col-lg-4 col-md-9 col-sm-9 adpro-lbl" id="advance" style={{display:'none'}} >
						<label className="col-lg-2 col-md-3 col-sm-3 col-form-label" >Advance</label>
                          <input type="text" className="form-control" name="advance" onChange={this.onChangeHandler} />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                       <div className="autohide-scroll">
                        <div className="p-b-0">
                          <div className="form-group">
                            <div className="col-sm-12 padding-left-0 padding-right-0">
                              <Dropzone
                                children={() => <label for="filer_input1" className="browse-label"><div className="jFiler-input-dragDrop">
                                  <div className="jFiler-input-inner">
                                    <div className="jFiler-input-icon">
                                      <i className="icon-jfi-cloud-up-o"></i>
                                    </div>
                                    <div className="jFiler-input-text">
                                      <h3>Drag & Drop files here</h3>
                                      <span style={{ display: 'inline-block', margin: '15px 0' }}>or</span>
                                    </div>
                                    <a className="jFiler-input-choose-btn btn btn-custom waves-effect waves-light">Browse Files</a>
                                  </div>
                                </div></label>}
                                style={{ borderStyle: 'none' }}
                                onDrop={this.onDrop}
                              />
                              <ul class="jFiler-items-list jFiler-items-grid no-padding propertyimg-upld">
                                {
                                  this.state.images && this.state.images.length > 0 ? this.state.images.map(image => (
                                    <li class="jFiler-item">
                                      <div class="jFiler-item-container">
                                        <div class="jFiler-item-inner">
                                          <div class="jFiler-item-thumb">
                                            <div class="jFiler-item-status"></div>
                                            <div class="jFiler-item-info">
                                              <span class="jFiler-item-title"><b title="{{file.name}}"></b></span>
                                              <span class="jFiler-item-others"></span>
                                            </div>
                                            <img src={image} />
                                          </div>
                                          <div class="jFiler-item-assets jFiler-row">
                                            {/*<ul class="list-inline pull-left">*/}
                                            {/*<li>fi-progressBar</li>*/}
                                            {/*</ul>*/}
                                            <ul class="list-inline pull-right">
                                              <li><a onClick={() => this.removeImage(image)} className="icon-jfi-trash jFiler-item-trash-action"></a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  )) : ""
                                }
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-md-8"></div>
                        <div className="col-md-4 submit-btn">
                          <input type="reset" className="btn btn-secondary waves-effect w-md m-r-10" value="Reset"/>
                          <button type="button" onClick={this.createProperty} className="btn btn-success waves-effect w-md waves-light">Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  </form>
                </div>
              </div>
            </div>
            {/* <!-- End row -->  */}

          </div>
          {/* <!-- end container -->  */}
        </div>
      </div>
    );
  }
}
export default withRouter(connect(state => ({ userData: state.userData, userProfile: state.userProfile }))(AddProperty))