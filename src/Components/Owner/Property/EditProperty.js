import React from 'react'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import API_URL from '../../../app-config';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import swal from 'sweetalert';
import Dropzone from 'react-dropzone'
import $ from 'jquery'
import img_not_available from '../../../images/img_not_available.png'
class EditProperty extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      propertyInfo: Cookies.get('editProperty'),
      userInfo: props.userData,
      profileData: '',
      files: [],
      images: [],
      imagesList: [],
      base64images: [],
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
        "owner_id": "",
        "property_id": "",
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
        "agent_perc": "",
        "bedroom": "",
        "bathroom": "",
        "total_amount": "",
		"rent":"",
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
        zip_code: ""
      }]
    }
    this.editProperty = this.editProperty.bind(this)
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onDrop = this.onDrop.bind(this);
    this.removeImage = this.removeImage.bind(this);
  }

  componentWillMount() {
    // console.log("receeeeeived123456..."+ JSON.parse(this.state.propertyInfo))
    if (this.state.propertyInfo) {
      const propertyDetails = JSON.parse(this.state.propertyInfo)
      // console.log("receeeeeived123456..."+ JSON.stringify(propertyDetails))
      this.setState({
        formData: { property_id: propertyDetails.id, title: propertyDetails.title, address: propertyDetails.address, address2: propertyDetails.address2, country: propertyDetails.country, state: propertyDetails.state, city: propertyDetails.city, zip_code: propertyDetails.zip_code, property_type: propertyDetails.property_type, property_status: propertyDetails.property_status, geo_location: propertyDetails.geo_location, square_feet: propertyDetails.square_feet, agent_perc: propertyDetails.agent_perc, description: propertyDetails.description, bedroom: propertyDetails.bedroom, bathroom: propertyDetails.bathroom, total_amount: propertyDetails.total_amount, rent: propertyDetails.rent, advance: propertyDetails.advance, advance: propertyDetails.advance,property_access: propertyDetails.property_access }, base64images: propertyDetails.img_path, shareholders: propertyDetails.owner_details
      }, () => {
        this.stateLists(propertyDetails.country);
        this.cityList(propertyDetails.state);
        // console.log("base646465666...... " + this.state.base64images.length);
       this.state.base64images.map((img, key) => {
            this.state.images.push(img.img_path)
             // console.log("base6464...... " + this.state.images); // myBase64 is the base64 string
        })
        
      })

    }
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
        zip_code: ""
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

  onChangeHandler(e, count) {
    const formData = this.state.formData
    if (e.target.name != "img_path" && e.target.name != "owner_details") {
      if (e.target.name == "title")
        formData.title = e.target.value
      else if (e.target.name == "address")
        formData.address = e.target.value
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
      else if (e.target.name == "property_status")
	  {
		   if(e.target.value==="Rent"){
				$('#rent').show();
				$('#total_amount').hide();
		  }else if(e.target.value==="Sale"){
				$('#total_amount').show();
				$('#rent').hide();
		  }else if(e.target.value==="Rented"){
				$('#rent').show();
				$('#total_amount').hide();
		  }else if(e.target.value==="Sold"){
				$('#total_amount').show();
				$('#rent').hide();
		  }else if(e.target.value==="Private"){
			   $('#total_amount').show();
				$('#rent').show();
				
		  }
        formData.property_status = e.target.value
	  }
      else if (e.target.name == "description")
        formData.description = e.target.value
      else if (e.target.name == "geo_location")
        formData.geo_location = e.target.value
	else if (e.target.name == "property_access")
        formData.property_access = e.target.value
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
      else if (e.target.name == "advance")
        formData.advance = e.target.value
      else if (e.target.name === 'owner_name' + count) {
        this.state.shareholders[count].owner_name = e.target.value
      }
      else if (e.target.name === 'country' + count) {
        this.state.shareholders[count].country = e.target.value
        var SelectCountry = e.target.value;
        this.stateLists(SelectCountry);
      }
      else if (e.target.name === 'address' + count) {
        this.state.shareholders[count].address = e.target.value
      }

      else if (e.target.name === 'city' + count) {
        this.state.shareholders[count].city = e.target.value
      }
      else if (e.target.name === 'state' + count) {
        this.state.shareholders[count].state = e.target.value
        var SelectState = e.target.value;
        this.cityList(SelectState);
      }

      else if (e.target.name === 'zip_code' + count) {
        this.state.shareholders[count].zip_code = e.target.value
      }
      formData.session_id = JSON.parse(this.state.userData).session_id;
      formData.owner_id = JSON.parse(this.state.userData).assets_id;
      formData.property_id = JSON.parse(this.state.propertyInfo).id;
    }
    else {
      formData.img_path.push(e.target.value)
    }
    this.setState({ formData: formData })

  }
 

  editProperty() {
    var opts = this.state.formData
    opts.owner_details = this.state.shareholders
      opts.img_path = this.state.images;
    opts.session_id = JSON.parse(this.state.userData).session_id;
    opts.owner_id = JSON.parse(this.state.userData).assets_id;
    opts.property_id = JSON.parse(this.state.propertyInfo).id;

     console.log("imgpathhh" + JSON.stringify(opts))
    $("#loaderDiv").show();

    fetch(`${API_URL}assetsapi/edit_property/`, {
      method: 'post',
      body: JSON.stringify(opts)
    }, { 'Content-type': 'multipart/form-data' }).then((response) => {
      return response.json();
    }).then((data) => {
      // console.log("responseeeee" + JSON.stringify(data));
      if (data) {
        $("#loaderDiv").hide();

        $("#actionType").val("Yes");
        $("#hiddenURL").val("my-property");
        $(".confirm-body").html(data.msg);
        $("#BlockUIConfirm").show();
		if(data.sucess===1){
			this.props.history.push('/my-property');
		}
      }
    }).catch((error) => {
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
           //console.log("helllllllllllllllo " + JSON.stringify(this.state.images))
        })
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    })
  }
  removeImage(preview) {
    
	// console.log(JSON.stringify(preview));
	$("#loaderDiv").show();
	
	var opts = {image:preview};
	fetch(`${API_URL}assetsapi/delete_image`, {
      method: 'post',
	  body: JSON.stringify(opts)
		}, 
		{ 'Content-type': 'multipart/form-data' })
		.then((response) => {
		  return response.json();
		}).then((data) => {
		  // console.log("responseeeee" + JSON.stringify(data));
		  if (data) {
			$("#loaderDiv").hide();
			let { images } = this.state;
				var index = images.indexOf(preview);
				if (index > -1) {
				  images.splice(index, 1);
				}
				this.setState({ images });
			$("#actionType").val("Yes");
			$("#hiddenURL").val("my-property");
			$(".confirm-body").html(data.msg);
			$("#BlockUIConfirm").show();
			
		  }
		}).catch((error) => {
		  console.log('error: ', error);
		});
  }
addDefaultSrc(ev){
	  ev.target.src = img_not_available;
	}
  render() {
    const editPropertyInfo = this.state.formData
    const { base64images } = this.state
    // console.log("renderrrr..."+JSON.stringify(editPropertyInfo));
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
        <Header name="property" first_name={window.localStorage.getItem('firstName')}
          last_name={window.localStorage.getItem('firstName')} />
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
                          <input value={editPropertyInfo.title} name="title" onChange={this.onChangeHandler} type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-lg-2 col-md-3 col-sm-3 col-form-label required">Address1</label>
                        <div className="col-lg-10 col-md-9 col-sm-9">
                          <input name="address" value={editPropertyInfo.address} onChange={this.onChangeHandler} placeholder='Property address1' type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-lg-2 col-md-3 col-sm-3 col-form-label">Address2</label>
                        <div className="col-lg-10 col-md-9 col-sm-9">
                          <input name="address2" value={editPropertyInfo.address2} onChange={this.onChangeHandler} placeholder='Property address2' type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-lg-2 col-md-3 col-sm-3 col-form-label required">Country</label>
                        <div className="col-lg-4 col-md-9 col-sm-9 adpro-lbl">
                          <select value={editPropertyInfo.country} className="form-control" name='country' onChange={this.onChangeHandler} >
                            <option>Please select a country</option>
                            {this.state.countries.map((option, key) => (<option key={key.id} value={option.name}>{option.name}</option>))}
                          </select>
                        </div>

                        <label className="col-lg-2 col-md-3 col-sm-3 col-form-label required">State</label>
                        <div className="col-lg-4 col-md-9 col-sm-9 adpro-lbl">
                          <select value={editPropertyInfo.state} className="form-control" name="state" onChange={this.onChangeHandler} >
                            <option>Please select a state</option>
                            {this.state.states ? this.state.states.map((option, key) => (<option key={key.id} value={option.name}>{option.name}</option>)) : ''}
                          </select>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-lg-2 col-md-3 col-sm-3 col-form-label required">City</label>
                        <div className="col-lg-4 col-md-9 col-sm-9 adpro-lbl">
                          <select value={editPropertyInfo.city} className="form-control" name="city" onChange={this.onChangeHandler} >
                            <option>Please select a city</option>
                            {this.state.cities ? this.state.cities.map((option, key) => (<option key={key.id} value={option.name}>{option.name}</option>)) : ''}
                          </select>
                        </div>
                        <label className="col-lg-2 col-md-3 col-sm-3 col-form-label required">Zip Code</label>
                        <div className="col-lg-4 col-md-9 col-sm-9 adpro-lbl">
                          <input value={editPropertyInfo.zip_code} type="text" className="form-control" name="zip_code" onChange={this.onChangeHandler} />
                        </div>
                      </div>
                      <hr style={{ color: '#f0ad4e', backgroundColor: '#f0ad4e', height: 2 }} />
                      <a className="btn btn-custom waves-light waves-effect w-md add-owner" onClick={this.handleAddShareholder}>
                        Add Owner
                      </a>
                      {this.state.shareholders.map((shareholder, idx) => {
                        // this.stateLists(shareholder.country)
                        // this.cityList(shareholder.state)
                        return <div>
                          <div className="form-group row">
                            <label className="col-lg-2 col-md-3 col-sm-3 col-form-label required">Owner {idx + 1}</label>
                            <div className="col-lg-10 col-md-9 col-sm-9">
                              <input type="text" value={this.state.shareholders[idx].owner_name} name={'owner_name' + (idx)} placeholder={`Owner #${idx + 1} owner_name`} className="form-control" onChange={(e) => { this.onChangeHandler(e, idx) }} />
                            </div>
                          </div>
                          {/*add second owner*/}
                          <div className="form-group row">
                            <label className="col-lg-2 col-md-3 col-sm-3 col-form-label">Address1</label>
                            <div className="col-lg-10 col-md-9 col-sm-9">
                              <input type="text" value={this.state.shareholders[idx].address} name={'address' + (idx)} placeholder={`Owner #${idx + 1} address1`} onChange={(e) => { this.onChangeHandler(e, idx) }} className="form-control" />


                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-lg-2 col-md-3 col-sm-3 col-form-label">Address2</label>
                            <div className="col-lg-10 col-md-9 col-sm-9">
                              <input type="text" value={this.state.shareholders[idx].address2} name={'address2' + (idx)} placeholder={`Owner #${idx + 1} address2`} onChange={(e) => { this.onChangeHandler(e, idx) }} className="form-control" />

                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-lg-2 col-md-3 col-sm-3 col-form-label required">Country</label>
                            <div className="col-lg-4 col-md-9 col-sm-9 adpro-lbl">
                              <select value={this.state.shareholders[idx].country} className="form-control" name={'country' + (idx)} onChange={(e) => { this.onChangeHandler(e, idx) }} >
                                <option>Please select a country</option>
                                {this.state.countries.map((option, key) => (<option key={key.id} value={option.name}>{option.name}</option>))}
                              </select>
                            </div>


                            <label className="col-lg-2 col-md-3 col-sm-3 col-form-label required">State</label>
                            <div className="col-lg-4 col-md-9 col-sm-9 adpro-lbl">
                              <select value={this.state.shareholders[idx].state} className="form-control" name={'state' + (idx)} onChange={(e) => { this.onChangeHandler(e, idx) }} >
                                <option>Please select a state</option>
                                {this.state.states ? this.state.states.map((option, key) => (<option key={key.id} value={option.name}>{option.name}</option>)) : ''}
                              </select>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-lg-2 col-md-3 col-sm-3 col-form-label required">City</label>
                            <div className="col-lg-4 col-md-9 col-sm-9 adpro-lbl">
                              <select value={this.state.shareholders[idx].city} className="form-control" name={'city' + (idx)} onChange={(e) => { this.onChangeHandler(e, idx) }} >
                                <option>Please select a city</option>
                                {this.state.cities ? this.state.cities.map((option, key) => (<option key={key.id} value={option.name}>{option.name}</option>)) : ''}
                              </select>
                            </div>
                            <label className="col-lg-2 col-md-3 col-sm-3 col-form-label required">ZIP Code</label>
                            <div className="col-lg-4 col-md-9 col-sm-9 adpro-lbl">
                              <input value={this.state.shareholders[idx].zip_code} type="text" className="form-control" name={'zip_code' + (idx)} onChange={(e) => { this.onChangeHandler(e, idx) }} />
                            </div>
                          </div>
                          <div className="form-group row">
                            <div className="col-8"></div>
                            <div className="col-2"><button type="button" onClick={this.handleRemoveShareholder(idx)} className="btn btn-danger waves-effect w-md waves-light small">Remove--</button></div>
                          </div>
                        </div>
                      })}
                      <hr style={{ color: '#f0ad4e', backgroundColor: '#f0ad4e', height: 2 }} />
                      <div className="form-group row">
                        <label className="col-lg-2 col-md-3 col-sm-3 col-form-label required">Property Type</label>
                        <div className="col-lg-4 col-md-9 col-sm-9 adpro-lbl">
                          <select value={editPropertyInfo.property_type} className="form-control" name="property_type" onChange={this.onChangeHandler}>
                            <option selected>Please Select</option>
                            <option value="Private Apartment">Private Apartment</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Flat">Flat</option>
                            <option value="House">House</option>
                          </select>
                        </div>
                        <label className="col-lg-2 col-md-3 col-sm-3 col-form-label required">Property Status</label>
                        <div className="col-lg-4 col-md-9 col-sm-9 adpro-lbl">
                          <select value={editPropertyInfo.property_status} className="form-control" name="property_status" onChange={this.onChangeHandler}>
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
                          <textarea value={editPropertyInfo.description} id="elm1" className="w-100 form-control" name="description" onChange={this.onChangeHandler}></textarea>
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
                          <input value={editPropertyInfo.square_feet} name="square_feet" onChange={this.onChangeHandler} type="text" className="form-control" />
                        </div>
                        <label className="col-lg-2 col-md-3 col-sm-3 col-form-label">Agent (%)</label>
                        <div className="col-lg-4 col-md-9 col-sm-9 adpro-lbl">
                          <input value={editPropertyInfo.agent_perc} name="agent_perc" onChange={this.onChangeHandler} type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-lg-2 col-md-3 col-sm-3 col-form-label required">Bedrooms</label>
                        <div className="col-lg-4 col-md-9 col-sm-9 adpro-lbl">
                          <input type="text" value={editPropertyInfo.bedroom} name="bedroom" onChange={this.onChangeHandler} className="form-control" />
                        </div>
                        <label className="col-lg-2 col-md-3 col-sm-3 col-form-label required">Bathrooms</label>
                        <div className="col-lg-4 col-md-9 col-sm-9 adpro-lbl">
                          <input value={editPropertyInfo.bathroom} type="text" name="bathroom" className="form-control" onChange={this.onChangeHandler} />
                        </div>
                      </div>
					    <div className="form-group row">
                        <label className="col-lg-2 col-md-3 col-sm-3 col-form-label required">Property access</label>
                        <div className="col-lg-4 col-md-9 col-sm-9 adpro-lbl">
                          <select className="form-control" value={editPropertyInfo.property_access} name="property_access" onChange={this.onChangeHandler}>
                            <option>Please Select</option>
                            <option value="Public ">Public </option>
							<option value="Private">Private</option>
                           
                          </select>
                        </div>
						
                      </div>
                      <div className="form-group row">
					  {editPropertyInfo.property_status==="Sale" || editPropertyInfo.property_status==="Sold"? 
                        <div className="col-lg-4 col-md-9 col-sm-9 adpro-lbl" id="total_amount">
						<label className="col-lg-2 col-md-3 col-sm-3 col-form-label required">Total Amount</label>
                          <input value={editPropertyInfo.total_amount} type="text" className="form-control" name="total_amount" onChange={this.onChangeHandler} />
                        </div>:''
					  }
					   {editPropertyInfo.property_status==="Rent" || editPropertyInfo.property_status==="Rented"? 
						<div className="col-lg-4 col-md-9 col-sm-9 adpro-lbl" id="rent">
						<label className="col-lg-2 col-md-3 col-sm-3 col-form-label required">Rent</label>
                          <input value={editPropertyInfo.rent} type="text" className="form-control" name="rent" onChange={this.onChangeHandler} />
                        </div>:''
                       }
                        <div className="col-lg-4 col-md-9 col-sm-9 adpro-lbl">
						 <label className="col-lg-2 col-md-3 col-sm-3 col-form-label">Advance</label>
                          <input value={editPropertyInfo.advance} type="text" className="form-control" name="advance" onChange={this.onChangeHandler} />
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
                              <ul className="jFiler-items-list jFiler-items-grid no-padding propertyimg-upld">
                                {
                                  this.state.images && this.state.images.length > 0 ? this.state.images.map((image, key) => (
                                    <li className="jFiler-item">
                                      <div className="jFiler-item-container">
                                        <div className="jFiler-item-inner">
                                          <div className="jFiler-item-thumb">
                                            <div className="jFiler-item-status"></div>
                                            <div className="jFiler-item-info">
                                              <span className="jFiler-item-title"><b title="{{file.name}}"></b></span>
                                              <span className="jFiler-item-others"></span>
                                            </div>
                                            <img onError={this.addDefaultSrc} src={image.indexOf("assets")>=0 ?API_URL+image:image} />
                                            {/* <img src={image.img_path ? API_URL + image.img_path : image} /> */}
                                          </div>
                                          <div className="jFiler-item-assets jFiler-row">
                                            {/*<ul class="list-inline pull-left">*/}
                                            {/*<li>fi-progressBar</li>*/}
                                            {/*</ul>*/}
                                            <ul className="list-inline pull-right">
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
                          <button type="button" onClick={this.editProperty} className="btn btn-success waves-effect w-md waves-light">Submit</button>

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
export default withRouter(connect(state => ({ userData: state.userData, userProfile: state.userProfile }))(EditProperty))