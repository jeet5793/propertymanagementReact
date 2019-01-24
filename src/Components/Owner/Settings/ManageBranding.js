import React from 'react'

import API_URL from "../../../app-config";
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import swal from 'sweetalert';
import $ from 'jquery';
import {Link} from 'react-router-dom'
import img_not_available from '../../../images/img_not_available.png'
 class ManageBranding extends React.Component{
	constructor(props){
    super(props)
    this.formSubmit=this.formSubmit.bind(this)
    this.state={
		userInfo:props.userData,
		 userData:Cookies.get('profile_data'),
		   brandingInfo:[],
		  selectedOption: '',
		  ownBranding:false

      }
      this.onChangeHandler=this.onChangeHandler.bind(this);
	  this.onChangeHandlerBrand=this.onChangeHandlerBrand.bind(this);
	 this.fileInput = React.createRef();
	 this.watermark = React.createRef();
	}
	onChangeHandler(e){
		this.setState({
      selectedOption: e.currentTarget.value
    });
  }
  onChangeHandlerBrand(e){
		this.setState({
      [e.target.name]: e.currentTarget.value
    });
	if(e.target.name=='logo'){
		let formData = new FormData();
		let file = this.fileInput.current.files[0]
			let reader = new FileReader();
			 reader.onload = () => {

			let result = reader.result;
			this.state.logo = result;
			};
			reader.onerror = () => {
				console.log('image read error')
			};
			// reader.readAsBinaryString(file);
			 reader.readAsDataURL(file);
            formData.append('file', this.fileInput.current.files[0])
	}else if(e.target.name=='watermark'){
		let formData = new FormData();
		let file = this.watermark.current.files[0]
			let reader = new FileReader();
			 reader.onload = () => {

			let result = reader.result;
			this.state.watermark = result;
			};
			reader.onerror = () => {
				console.log('image read error')
			};
			// reader.readAsBinaryString(file);
			 reader.readAsDataURL(file);
            formData.append('file', this.watermark.current.files[0])
	}
	
	
	
  }
  
   componentDidMount(){
	  $("#loaderDiv").show();
	  // console.log('fawftgtsyghtjhtrhyt');
	  fetch(`${API_URL}assetsapi/get_branding_information/${JSON.parse(this.state.userData).assets_id}/${JSON.parse(this.state.userData).session_id}`,{method:'GET'}).then((res) => {
          return res.json();
        }).then((rslt) => {
          // console.log('dataaaa:  ', data);
		  $("#loaderDiv").hide();
          if(rslt)
          {
			this.setState({brandingInfo:rslt.branding_information}); 
			this.setState({selectedOption: rslt.branding_information.branding});
				// console.log(this.state.brandingInfo);	
          }
       
        }).catch((error) => {
          console.log('error: ', error);
        });  
		this.checkPermission();
	  } 
	  checkPermission(){
		   fetch(`${API_URL}assetsapi/checkPermissions/${JSON.parse(this.state.userData).assets_id}/branding`, {
					  method: "GET"
					}).then((response) => {
          return response.json();
        }).then((data) => {
          // console.log('dataaaa:  ', data);
          if(data.success==1)
          {
				this.setState({ownBranding:true}); 	   
					 
          }else{
			  this.setState({ownBranding:false}); 
		  }
       
        }).catch((error) => {
          console.log('error: ', error);
        });      
	  }
  
  formSubmit(e){
	  e.preventDefault()
	  console.log('brandingInfo'+JSON.stringify(this.state));
	     //console.log('brandingInfo'+this.state.brandingInfo);
		 
		 if(this.state.brandingInfo==undefined){
			 
			 var ObjectToSend={
				 branding:this.state.selectedOption,
				 header_title:this.state.header_title,
				 footer_title:this.state.footer_title,
				 logo:this.state.logo,
				 watermark:this.state.watermark
			 }
		 }else{
			 var ObjectToSend={
				 branding:(this.state.selectedOption || this.state.brandingInfo.branding ),
				 header_title:this.state.header_title || this.state.brandingInfo.header_title ,
				 footer_title:this.state.footer_title || this.state.brandingInfo.footer_title,
				 
				 logo:this.state.logo || this.state.brandingInfo.branding_logo,
				 watermark:this.state.watermark || this.state.brandingInfo.branding_watermark

			 }
			 // var ObjectToSend = Object.assign(this.state.brandingInfo,Objectdata);
		 }
		 ObjectToSend.assets_id= JSON.parse(this.state.userData).assets_id;
		ObjectToSend.session_id= JSON.parse(this.state.userData).session_id;
		    console.log('ObjectToSend'+JSON.stringify(ObjectToSend));
       // var ObjectToSend=Object.assign(this.state.brandingInfo,this.state.EmailSmsSettings);
		// var ObjectToSend=this.state.EmailSmsSettings;

	 $("#loaderDiv").show();
		  fetch(`${API_URL}assetsapi/manage_branding/`, {
        method: 'post',        
        body: JSON.stringify(ObjectToSend)
        }).then((response) => {
          return response.json();
        }).then((data) => {
          // console.log('dataaaa:  ', data);
          if(data)
          {
				
			$("#loaderDiv").hide();
					   
					   $("#actionType").val("No");
					   // $("#hiddenURL").val("settings");
					   $(".confirm-body").html(data.msg);
					   $("#BlockUIConfirm").show();
					   
					  this.componentDidMount;
          }
       
        }).catch((error) => {
          console.log('error: ', error);
        });       
	  
      
      }
  
  addDefaultSrc(ev){
	  ev.target.src = img_not_available;
	}
    render(){

	  console.log(this.state);
    // console.log(this.props);
        return(
				<div>
				
				<div className="wrapper">
                  <div className="container"> 
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="page-title-box">
                          <h4 className="page-title">Manage Branding</h4>
						  <div className="btn-group pull-right" style={{marginBottom:"10px"}}>
							<ol className="breadcrumb hide-phone p-0 m-0">
							<li>
							<Link to={'/settings'}><span className="btn waves-light waves-effect w-md btn-custom"><i className="fi-reply"></i>&nbsp;&nbsp;Back</span></Link></li>
							</ol>
						</div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="card-box">
                          <form id="default-wizard" encType="multipart/form-data">
							<div className="tab-content">
                               <div className="tab-pane fade show active" style={{width:"100%"}} id="profile-info">
						<fieldset title="1">
						 
							  <div className="form-group">
								<div className="row">
								  <div className="col-lg-3 col-md-3 col-sm-3 required">
										  <label htmlFor="old-password">Branding</label>
										</div>
										<div className="col-lg-3 col-md-3 col-sm-3">
											 <select className="form-control" value={this.state.selectedOption || (this.state.brandingInfo && this.state.brandingInfo.branding)} onChange={this.onChangeHandler}>
												<option value="">Please Select...</option>
												<option value="No">No Branding</option>
												<option value="Default">Default Branding</option>
												{this.state.ownBranding && <option value="Own">Own Branding</option>}
											 </select>
										</div>
								</div>
							  </div>
							  {(this.state.ownBranding && this.state.selectedOption==='Own') &&
								<div>
								<div className="form-group">
									<div className="row">
										<div className="col-lg-3 col-md-3 col-sm-3 ">
										  <label htmlFor="header_title">Header Title</label>
										</div>
										<div className="col-lg-3 col-md-3 col-sm-3">
											 <input type="text" className="form-control" id="header_title" value={this.state.header_title || (this.state.brandingInfo && this.state.brandingInfo.header_title)} onChange={this.onChangeHandlerBrand} name="header_title"/>
										</div>
									</div>
								</div>
								<div className="form-group">
									<div className="row">
										<div className="col-lg-3 col-md-3 col-sm-3 ">
										  <label htmlFor="footer_title">Footer Title</label>
										</div>
										<div className="col-lg-3 col-md-3 col-sm-3">
											 <input type="text" className="form-control" id="footer_title" value={this.state.footer_title || (this.state.brandingInfo && this.state.brandingInfo.footer_title)} onChange={this.onChangeHandlerBrand} name="footer_title"/>
										</div>
									</div>
								</div>
								<div className="form-group">
									<div className="row">
										<div className="col-lg-3 col-md-3 col-sm-3 ">
										  <label htmlFor="logo">Logo</label>
										</div>
										<div className="col-lg-3 col-md-3 col-sm-3">
											 <input type="file" ref={this.fileInput} className="form-control"  onChange={this.onChangeHandlerBrand} id="logo" name="logo"/>
												 {this.state.brandingInfo && <img onError={this.addDefaultSrc} src={API_URL+this.state.brandingInfo.branding_logo} style={{width:'100px',height:'100px'}}/>}
										</div>
									</div>
								</div>
								<div className="form-group">
									<div className="row">
										<div className="col-lg-3 col-md-3 col-sm-3 ">
										  <label htmlFor="watermark">Watermark</label>
										</div>
										<div className="col-lg-3 col-md-3 col-sm-3">
											 <input type="file" ref={this.watermark} className="form-control"  onChange={this.onChangeHandlerBrand} id="watermark" name="watermark"/>
											  {this.state.brandingInfo && <img onError={this.addDefaultSrc} src={API_URL+this.state.brandingInfo.branding_watermark} style={{width:'100px',height:'100px'}}/>}
										</div>
									</div>
								</div>
							  </div>}
						 </fieldset>
						
						   <div > {/*style={{display: '-webkit-box'}} */}
						<div className="col-md-12 text-right">
									  <button type="button" className="btn btn-primary stepy-finish text-right" onClick={this.formSubmit}>Submit</button>
						</div>
						</div>
					  </div>
                            </div>                            
                          </form>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
					 
		</div>
        );
    }
}
export default connect(state=>({ userData: state.userData }))(ManageBranding)