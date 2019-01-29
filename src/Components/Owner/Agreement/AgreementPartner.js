import React from 'react'

import API_URL from '../../../app-config'
import {Link} from 'react-router-dom'
// import { Redirect } from 'react-router';
// import './style.css'
import Cookies from 'js-cookie';
import $ from 'jquery'

import Select from 'react-select';
//var i
var i =1;

export default class AgreementPartner extends React.Component{
   constructor(props){
    super(props)
    this.state={
		userProperty:[],
		userData : Cookies.get('profile_data'),
        ownerList:[],
        selectedOption: null,
        selectedOptionTenant:null,
        errors: {}
    };
    
   
	this.onSubmitHandle = this.onSubmitHandle.bind(this);
  }

  componentDidMount() {
     this.OwnerList()
     this.TenantList()
  }
  OwnerList(){
		
    $("#loaderDiv").show();
    fetch(`${API_URL}assetsapi/owner_list/${JSON.parse(this.state.userData).assets_id}/${JSON.parse(this.state.userData).session_id}`, {
      method: 'get'
    })
    .then(res => res.json())
    .then(
      (result) => {
          $("#loaderDiv").hide();
        //console.log("data 2: "+JSON.stringify(result.profile))
        if (result.success) {
          this.setState({ownerList:result.ownerList})
          
        } 
          //console.log("ownerList"+JSON.stringify(this.state.ownerList))
      },
    (error) => {
      console.log('error')
    }
  )
    
}
TenantList(){
		
    $("#loaderDiv").show();
    fetch(`${API_URL}assetsapi/tenant_list/${JSON.parse(this.state.userData).assets_id}/${JSON.parse(this.state.userData).session_id}`, {
      method: 'get'
    })
    .then(res => res.json())
    .then(
      (result) => {
          $("#loaderDiv").hide();
        //console.log("data 2: "+JSON.stringify(result.profile))
        if (result.success) {
          this.setState({tenantList:result.tenantList})
          
        } 
          //console.log("ownerList"+JSON.stringify(this.state.ownerList))
      },
    (error) => {
      console.log('error')
    }
  )
    
}
   
	

	onSubmitHandle(e){
        e.preventDefault();
        let Owners =this.state.selectedOption;
        let Tenants =this.state.selectedOptionTenant;
        //console.log(`Option Owners:`, selectedOwners);
        let dataToSend = {
            assets_id : JSON.parse(this.state.userData).assets_id,
            session_id : JSON.parse(this.state.userData).session_id,
            Owners : Owners,
            Tenants : Tenants,
            deal_id : this.props.location.state.deal_id,
        }
        $("#loaderDiv").show();
        fetch(`${API_URL}assetsapi/agreement_partner_signature`, {
          method: 'POST',
          body:JSON.stringify(dataToSend)
        })
        .then(res => res.json())
        .then(
          (result) => {
              $("#loaderDiv").hide();
            //console.log("data 2: "+JSON.stringify(result.profile))
            if (result.success) {
              //this.setState({tenantList:result.tenantList})
              $("#actionType").val("No");
				 //$("#hiddenURL").val("/");
				 $(".confirm-body").html(result.msg);
                 $("#BlockUIConfirm").show();
                 this.setState({selectedOptionTenant:null,selectedOption:null})
                 
            } 
              //console.log("ownerList"+JSON.stringify(this.state.ownerList))
          },
        (error) => {
          console.log('error')
        }
      )

		
    }
    handleChange = (selectedOption) => {
        let errors = {};
        if(selectedOption.length<3){
            this.setState({ selectedOption });
        }else{
            errors["owner"] = "Maximum selection limit is 2.";
            this.setState({errors: errors});

        }
        
        //console.log(`Option selected:`, selectedOption);
        //console.log(`Option selected:`, selectedOption.length);
      }
      handleChangeTenant = (selectedOptionTenant) => {
        let errors = {};
        if(selectedOptionTenant.length<3){
            this.setState({ selectedOptionTenant });
        }else{
            errors["tenant"] = "Maximum selection limit is 2.";
            this.setState({errors: errors});

        }
        
        //console.log(`Option selected:`, selectedOptionTenant);
      }
    render(){
			
        const { selectedOption,selectedOptionTenant } = this.state;
            const propsData = this.props.location.state;
    return (
		
			<div className="wrapper">
				<div className="container">                     
					<div className="page-title-box">
						<div className="btn-group pull-right">
                        	<ol className="breadcrumb hide-phone p-0 m-0">
                       		 	<li>
									<Link to={this.props.location.state.loc}><span className="btn waves-light waves-effect w-md btn-custom"><i className="fi-reply"></i>&nbsp;&nbsp;Back</span></Link>
								</li>
                        	</ol>
                    	</div>
						<h4 className="page-title">Agreement Partner Signature</h4>
						
					</div>
					
					<div className="row">
						<div className="col-sm-12">
							<div className="card-box">
								<form onSubmit={this.onSubmitHandle}>
								
								<div className="row">
                                    <label>Agreement Title :  {propsData.agreement_title}</label>
                                </div>
                                <div className="row">
                                    <label>Property Title : {propsData.property}</label>
                                </div>
                                <div className="row">
                                     <label>Property Address : {propsData.propertyAddress}</label>
                                </div>
                                {/*<div className="row">
                                    <label> Sent To : {propsData.sentTo}</label>
                                </div>*/}
                                
								<div className="row">
									<div className="col-md-5">
										<div className="form-group">
											<label for="owner" className="control-label">Owner<span className="required"/></label>
											<Select
                                                //defaultValue={[colourOptions[2], colourOptions[3]]}
                                                isMulti
                                                name="owner"
                                                value={selectedOption}
                                                onChange={this.handleChange}
                                                options={this.state.ownerList}
                                                className="basic-multi-select"
                                                classNamePrefix="select"
                                            />
                                            <small style={{color: "red"}}>Maximum selection limit is 2</small><br/>
                                            <span style={{color: "red"}}>{this.state.errors["owner"]}</span>
										</div>
									</div>
								

								
									<div className="col-md-5">
										<div className="form-group">
											<label for="tenant" className="control-label">Tenant<span className="required"/></label>
											<Select
                                                //defaultValue={[colourOptions[2], colourOptions[3]]}
                                                isMulti
                                                name="tenant"
                                                value={selectedOptionTenant}
                                                onChange={this.handleChangeTenant}
                                                options={this.state.tenantList}
                                                className="basic-multi-select"
                                                classNamePrefix="select"
                                            />
                                            <small style={{color: "red"}}>Maximum selection limit is 2</small><br/>
                                            <span style={{color: "red"}}>{this.state.errors["tenant"]}</span>
										</div>
									</div>
								
								</div>	
								
									<button type="reset"  className="btn btn-secondary waves-effect" data-dismiss="modal">Reset</button>&nbsp;
									<button type="submit" className="btn btn-success waves-effect waves-light">Submit</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			
  );}
  }