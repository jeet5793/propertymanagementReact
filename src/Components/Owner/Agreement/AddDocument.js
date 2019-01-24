import React from 'react';
import {Link} from 'react-router-dom'
import API_URL from '../../../app-config';
import Cookies from 'js-cookie';
import img_not_available from '../../../images/img_not_available.png'
import DatePicker from 'react-date-picker';
// import Select from 'react-select';
import $ from "jquery";
export default class AddDocument extends React.Component{
	constructor(props) {
    super(props);
    this.state = {
		documentFormState:{
			document_type:'',
			issue_date:'',
			expires_date:'',
			doc_case:'',
			applicant_name:'',
			document:'',
			issuer:'',
			issuer_country:'',
			issuer_state:'',
			issuer_city:'',
			physical_location:'',
			region_where_valid:'',
			document_version:'',
			description:'',
			userId:'',
			doc_path:'',
			session_id:''
			
		},
		userData:Cookies.get('profile_data'),	
      // startDate: new Date(),
	  // selectedOption: null,
	  // countryListItem:[],
	  errors: {},
	  file: '',
	  imagePreviewUrl: '',
	  countries: [],
      states: [],
      cities: [],
	  startDate: "",
			endDate: "",
    };
	this.countryList = this.countryList.bind(this);
	this.handleChange = this.handleChange.bind(this);
	this.handleStChange = this.handleStChange.bind(this);
	this.handleEdChange =this.handleEdChange.bind(this);
  }
  componentDidMount(){
	  
	  this.countryList();
  }
  countryList(){
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
	handleSubmit = (e)=>{
		e.preventDefault();
		let optsObj = this.state.documentFormState;
		 optsObj.issue_date=this.state.startDate;
		optsObj.expires_date=this.state.endDate;
		// console.log(JSON.stringify(optsObj));
		 if(this.handleValidation()){
		$("#loaderDiv").show();
		  fetch(`${API_URL}assetsapi/store_document_information`, {
			method: 'post',          
			body: JSON.stringify(optsObj)
			}).then((response) => {
			  return response.json();
			}).then((data) => {
			  // console.log('dataaaa:  ', data);
			  $("#loaderDiv").hide();
				 $("#actionType").val("Yes");
				 $("#hiddenURL").val("add-document");
				 $(".confirm-body").html(data.msg);
				 $("#BlockUIConfirm").show();
				 
			}).catch((error) => {
			  console.log('error: ', error);
			});
				 
			 } 
	}
	
	
	
	handleChange(e){
		// console.log(e );
		// console.log(e.target.name +" :: "+e.target.value );
		 // e.preventDefault();
		 let docForm = this.state.documentFormState;
		if (e.target.name === "document_type")
			docForm.document_type=e.target.value
		if(e.target.name=="doc_case")
			docForm.doc_case=e.target.value
		if(e.target.name=="applicant_name")
			docForm.applicant_name=e.target.value
		if(e.target.name=="document")
			docForm.document=e.target.value
		if(e.target.name=="issuer")
			docForm.issuer=e.target.value
		if(e.target.name=="issuer_country"){
			docForm.issuer_country=e.target.value
			 this.stateLists(docForm.issuer_country); 
		}
		if(e.target.name=="issuer_state"){
			docForm.issuer_state=e.target.value;
			this.cityList(docForm.issuer_state);
		}
		if(e.target.name=="issuer_city")
			docForm.issuer_city=e.target.value
		if(e.target.name=="physical_location")
			docForm.physical_location=e.target.value
		if(e.target.name=="region_where_valid")
			docForm.region_where_valid=e.target.value
		if(e.target.name=="document_version")
			docForm.document_version=e.target.value
		
		if(e.target.name=="description")
			docForm.description=e.target.value
		if(e.target.name=="doc_path"){
			 let reader = new FileReader();
			let file = e.target.files[0];

			reader.onloadend = () => {
			  this.setState({
				file: file,
				imagePreviewUrl: reader.result
			  });
			  docForm.doc_path=reader.result
			}
			
			reader.readAsDataURL(file)
			 
		}
		
		docForm.userId = JSON.parse(this.state.userData).assets_id;
		docForm.session_id = JSON.parse(this.state.userData).session_id;
		this.setState({ documentFormState:docForm});	
		// console.log(JSON.stringify(this.state.documentFormState));   
	}
	handleStChange(date) {
		// console.log(date)
    this.setState({
      startDate: date
    });
	  }
	  handleEdChange(date){
	this.setState({
      endDate: date
    });
  }
	
	  handleValidation(){
	  let opts = this.state.documentFormState;
		
		let errors = {};
        let formIsValid = true;
   
	if (!opts.document_type) {
		  formIsValid = false;
          errors["document_type"] = "Document type must be selected.";
        
    }
	
   /*  if (!opts.issue_date) {
		formIsValid = false;
        errors["issue_date"] = "Issue date should not be blank";
      
    }
    if (!opts.expires_date) {
		formIsValid = false;
        errors["expires_date"] = "Expire date should not be blank";
      
    }
    if (!opts.doc_case) {
		formIsValid = false;
        errors["doc_case"] = "Case should not be blank";
      
    }
    if (!opts.applicant_name) {
		formIsValid = false;
        errors["applicant_name"] = "Applicant name should not be blank";
      
    }
    if (!opts.document) {
		formIsValid = false;
        errors["document"] = "Document should not be blank";
    }
    if (!opts.issuer) {
		formIsValid = false;
        errors["issuer"] = "Issuer should not be blank";
      
    }
	if (!opts.issuer_country) {
		formIsValid = false;
        errors["issuer_country"] = "Issuer country should not be blank";
      
    }
    if (!opts.issuer_state) {
		formIsValid = false;
        errors["issuer_state"] = "Issuer state should not be blank";
      
    }
	if (!opts.issuer_city) {
		formIsValid = false;
        errors["issuer_city"] = "Issuer city should not be blank";
      
    }
    
    if (!opts.physical_location) {
		formIsValid = false;
        errors["physical_location"] = "Physical location should not be blank";
     
    }
    if (!opts.region_where_valid) {
		formIsValid = false;
        errors["region_where_valid"] = "Region where valid should not be blank";
      
    }
    if(!opts.document_version){
		formIsValid = false;
        errors["document_version"] = "Document version should be ticked";
      
    }

		if(!opts.description){
			formIsValid = false;
			errors["description"] = "Description should not be blank.";
		}
      
    
	 if (!opts.doc_path) {
		formIsValid = false;
        errors["doc_path"] = "Image Can not be empty.";
      
     } */
	 this.setState({errors: errors});
       return formIsValid;
	 // else if (this.state.Registeration.assets_type) {
      // {'email':'testnow1@yopmail.com','password':'test123'}
	  
    // }
  }
	// handleChangeCountry = (selectedOption,e)=>{
			// this.setState({ selectedOption });
		// console.log(`Option selected:`, selectedOption);
	// }
	
	render(){
	let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }
	

		return(
				<div className="wrapper">
                    <div className="container">
                        <div className="page-title-box">
							<div className="btn-group pull-right">
                                <ol className="breadcrumb hide-phone p-0 m-0">
                                    <li><Link to='/my-documents' className="btn btn-custom waves-light waves-effect w-md"> BACK</Link></li>
                                </ol>
							</div>
                            <h4 className="page-title">Add Document</h4>
                        </div>
                      <div className="card-box">
                          <form onSubmit={(e)=>this.handleSubmit(e)}>
								   <div className="row">
								   <div className="col-md-6 col-sm-6">
										
											<div className="form-group" >
												<select className ="form-control" name="document_type" onChange={this.handleChange} >
													<option value="" disabled selected>Document Type</option>
													<option value="Passport">Passport</option>
													<option value="Will Contract">Will Contract</option>
													<option value="Rent Agreement">Rent Agreement</option>
													<option value="UID">UID</option>
												</select>
												 <span style={{color: "red"}}>{this.state.errors["document_type"]}</span>
											</div>
										
										
										<div className="row">
											<div className="col-md-6">
												<div className="form-group">
													<DatePicker  name = "issue_date" className="form-control"  onChange={this.handleStChange}
                    value={this.state.startDate} placeholder="Issue Date"/>
													 <span style={{color: "red"}}>{this.state.errors["issue_date"]}</span>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<DatePicker placeholder = "Expires Date" className="form-control" onChange={this.handleEdChange}  name = "expires_date" value={this.state.endDate} />
													<span style={{color: "red"}}>{this.state.errors["expires_date"]}</span>
												</div>
											</div>
										</div>
											
												<div className="form-group">
													<input
													  className="form-control form-control-solid placeholder-no-fix"
													  type="text"
													  autoComplete="off"
													  onChange={this.handleChange} 
													  placeholder="Case#"
													  name="doc_case"
													  
													/>
													 <span style={{color: "red"}}>{this.state.errors["doc_case"]}</span>
												</div>
											
												<div className="form-group">
													<input
													  className="form-control form-control-solid placeholder-no-fix"
													  type="text"
													  autoComplete="off"
													  onChange={this.handleChange} 
													  placeholder="Applicant Name"
													  name="applicant_name"
													  
													/>
													 <span style={{color: "red"}}>{this.state.errors["applicant_name"]}</span>
												</div>
											
											
											
											
										<div className="row">
											<div className="col-md-6">
												<div className="form-group">
													<input className="form-control" type="text" name="title" onChange={this.handleChange}  placeholder="Title#" />
													<span style={{color: "red"}}>{this.state.errors["title"]}</span>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<input className="form-control" type="text" onChange={this.handleChange}  name="document" placeholder="Document#" />
													<span style={{color: "red"}}>{this.state.errors["document"]}</span>
												</div>
											</div>
										</div>
											
												<div className="form-group">
													<input className="form-control" type="text" onChange={this.handleChange}  name="issuer" placeholder="Issuer" />
													<span style={{color: "red"}}>{this.state.errors["issuer"]}</span>
												</div>
									
											
												<div className="form-group">
												{/* <Select
													  isClearable
														value={this.state.selectedOption}
														onChange={this.handleChange} 
														options={this.state.countryListItem}
														placeholder="Issuer Country"
														name="issuer_country"
												/> */}
													  <select className="form-control" name="issuer_country"  placeholder="Issuer Country" onChange={this.handleChange} >
													 <option value="" disabled selected>Issuer Country</option>
												{this.state.countries.map((option, key) => (<option key={key} value={option.name}>{option.name}</option>))}
								 
												</select>
													  <span style={{color: "red"}}>{this.state.errors["issuer_country"]}</span>
												</div>
											
											
												<div className="form-group">
												<select className="form-control" name="issuer_state"  placeholder="Issuer State" onChange={this.handleChange} >
												<option value="" disabled selected>Issuer State</option>
													 {this.state.states?this.state.states.map((option, key) => (<option key={key}>{option.name}</option>)):''}
													 
													</select>
													{/*<Select
													  isClearable
														value={this.state.selectedOption}
														onChange={this.handleChange} 
														options={this.state.countryListItem}
														placeholder="Issuer State/Province"
														name="issuer_state"
													  />*/}
													  <span style={{color: "red"}}>{this.state.errors["issuer_state"]}</span>
												</div>
											
											
												<div className="form-group">
												<select className="form-control" name="issuer_city" placeholder="Issuer City" onChange={this.handleChange} >
												 <option value="" disabled selected>Issuer City</option>
												  {this.state.cities?this.state.cities.map((option, key) => (<option key={key} value={option.name}>{option.name}</option>)):''}
												 
												</select>
													{/*<Select
													  isClearable
														value={this.state.selectedOption}
														onChange={this.handleChange} 
														options={this.state.countryListItem}
														placeholder="Issuer City"
														name="issuer_city"
													  />*/}
													  <span style={{color: "red"}}>{this.state.errors["issuer_city"]}</span>
												</div>
											
											
												<div className="form-group">
													<input
													  className="form-control form-control-solid placeholder-no-fix"
													  type="text"
													  autoComplete="off"
													 onChange={this.handleChange} 
													  placeholder="Physical Location"
													  name="physical_location"
													  
													/>
													 <span style={{color: "red"}}>{this.state.errors["physical_location"]}</span>
												</div>
											
											<div className="row">
												<div className="col-md-6">
													<div className="form-group">
														<input className="form-control" type="text" onChange={this.handleChange}  name="region_where_valid" placeholder="Region Where Valid" />
														<span style={{color: "red"}}>{this.state.errors["region_where_valid"]}</span>
													</div>
												</div>
												<div className="col-md-6">
													<div className="form-group">
														<input className="form-control" type="text" onChange={this.handleChange}  name="document_version" placeholder="Document Version" />
														<span style={{color: "red"}}>{this.state.errors["document_version"]}</span>
													</div>
												</div>
											</div>
											
												<div className="form-group">
													<textarea className="form-control" name="description" onChange={this.handleChange}  placeholder="Description" />
													<span style={{color: "red"}}>{this.state.errors["description"]}</span>
												</div>
											
										</div>
										<div className="col-md-6 col-sm-6">
											<div className="imgPreview">
											  {$imagePreview}
											</div>
											<input className="form-control" type="file" name = "doc_path" onChange={this.handleChange}  />
											<span style={{color: "red"}}>{this.state.errors["doc_path"]}</span>
											<small style={{color: "red"}}><span>Note : Only Image and PDF can applicable.</span></small>
										</div>
										</div>
										 
										<button className="btn btn-primary stepy-finish text-right" type="submit" >Submit</button> 
										
									</form>
                                </div>
                    </div>
                </div>

			);
	}
}