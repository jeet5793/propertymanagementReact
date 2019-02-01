import React from 'react'

import API_URL from '../../../../app-config'
import {Link} from 'react-router-dom'
// import { Redirect } from 'react-router';
// import './style.css'
import Cookies from 'js-cookie';
import $ from 'jquery'
import Autosuggest from 'react-autosuggest';
import DatePicker from 'react-date-picker';
//var i
var i =1;

export default class AgreementSendTemplate extends React.Component{
   constructor(props){
    super(props)
    this.state={
		userProperty:[],
		userData : Cookies.get('profile_data'),
		userlist:[],
		value: '',
		suggestions: [],
		searchValue:'',
		searchInputData:[],
		startDate: "",
		endDate: "",
		tenure_start_date:'',
		tenure_end_date:'',
		paid_to:'',
		templateDescription:''
    };
    
   this.onChangeHandler = this.onChangeHandler.bind(this);
    this.handleSdChange = this.handleSdChange.bind(this);
	this.handleEdChange =this.handleEdChange.bind(this);
	this.onSubmitHandle = this.onSubmitHandle.bind(this);
	this.searchUser=this.searchUser.bind(this)
	this.PropertyListOption = this.PropertyListOption.bind(this);
  }

  handleSdChange(date) {
		this.setState({
		  startDate: date
		});
	  }
	handleEdChange(date){
		this.setState({
		  endDate: date
		});
	}
   
  componentDidMount() {
	 //this.getPropertyList()
  }
  userlist(assets_type){
	const assetstype = assets_type;
	// alert(assets_type);
	fetch(`${API_URL}assetsapi/userlist_notification/${JSON.parse(this.state.userData).assets_id}/`+assetstype+`/${JSON.parse(this.state.userData).session_id}/`, {
		  method: 'get',
		})
		.then(res => res.json())
		.then(
		  (result) => {
			
			if (result.success) {
				this.setState({user_list:result.userlist});
				this.setState({assetsType:assets_type})

			} 
			
		  },
		(error) => {
		  console.log('error')
		}
	  )     
}
   /* getPropertyList() {
        fetch(`${API_URL}assetsapi/service_request/${JSON.parse(this.state.userData).assets_id}/${JSON.parse(this.state.userData).session_id}`, {
            method: 'get'
        })
            .then(res => res.json())
            .then(
                (data) => {
                    //console.log("data 2: "+JSON.stringify(result.profile))
                    if (data.success) {
                        // debugger;
                        this.setState({userProperty: data.service.property_list})
                        // console.log('pp'+JSON.stringify(this.state.propertyByUser));
                    }
                    //console.log("set user data"+JSON.stringify(this.state.profileData))
                },
                (error) => {
                    console.log('error')
                }
            )
    } */
	onChangeHandler(e){
		e.preventDefault();
		if (e.target.name === 'property_id') {
            this.setState({property_id: e.target.value})
        } else if (e.target.name === 'sender_id') {
            this.setState({sender_id: e.target.value},()=>{
              //this.getPropertyList()
            })
			this.userlist(e.target.value);
        } else if (e.target.name === 'user_id') {
            this.setState({user_id: e.target.value})
        }else if (e.target.name === 'description') {
            this.setState({description: e.target.value})
        }
		else if (e.target.name === 'paid_to') {
            this.setState({paid_to: e.target.value})
        }
		//
	}
	getSuggestions() {
			 return this.state.propertyByUser.filter(lang =>
				 lang.label
			 );
	 };

	 getSuggestionValue(suggestion) {
		// console.log("onSuggestionSelected",suggestion)
		 this.setState({
			 searchValue: suggestion.label,
			 receive_user_id: suggestion.value
		 },()=>{
			 this.onSuggestionSelected()
		 })
		 return suggestion.label!="No Results Found"?suggestion.label:""
	 }
	 renderSuggestion(suggestion) {
		 return (
			 <span>
				 <i style={{marginRight:10}}  aria-hidden="true"></i>
				 {suggestion.label!="No Results Found"?suggestion.label:"No records found.!!!"}
			 </span>
		 )
	 }

	 onChange = (event, { newValue }) => {
	// console.log("onChange ",newValue)
		 this.setState({
			 value: newValue
		 },()=>{
			this.searchUser()
		 });
	 };

	 onSuggestionSelected = () => {
		var searchValue = $('.react-autosuggest__input').val()
		this.setState({
			searchInputData:searchValue
		})
	};

	onSuggestionsFetchRequested = () => {
		this.searchUser()
	};

	onSuggestionsClearRequested = () => {
		// console.log("onSuggestionsClearRequested ")
		this.setState({
			suggestions: []
		});
	};
	searchUser() {
		var searchValue = $('.react-autosuggest__input').val();
		var assetsType = $('#assets_type').val();
		const session = JSON.parse(this.state.userData).session_id;  
		// console.log("selVal"+searchValue);
		const opts ={assets_type:assetsType,string:searchValue,session_id:session,userid:JSON.parse(this.state.userData).assets_id}
		// console.log("optsssss1111"+JSON.stringify(opts));
		fetch(`${API_URL}assetsapi/userSearch`, {
			method: 'POST',
		body: JSON.stringify(opts)
		})
		.then(res => res.json())
		.then(
			(result) => {
			// console.log("data22222: "+JSON.stringify(result))
			if (result.success) {
			
				// console.log("ifffff: "+JSON.stringify(result))
						this.setState({propertyByUser:result.users},()=>{
							this.setState({
								suggestions: this.getSuggestions()
							});
						})
					
			} else{
				// console.log("elseee"+JSON.stringify(result))
				this.setState({propertyByUser:[{"value":"","label":"No Results Found"}]},()=>{
					this.setState({
						suggestions: this.getSuggestions()
					});
				})
			}
			// console.log("autocompleteData"+JSON.stringify(this.state.propertyByUser))
			},
		(error) => {
			console.log('error',error)
		}
		) 

	}
	onSubmitHandle(e){
		e.preventDefault();
		const profile=JSON.parse(this.state.userData)
		if(!this.state.property_option){
		  return alert("Choose atleast one Property from deal or Property from connected owners's.!!!");
	  }
      if(!this.state.property_id){
		  return alert('Property must be selected.!!!');
	  }
    //  console.log("user id"+JSON.stringify(profile))
      let { property_id, sender_id, receive_user_id, description,paid_to } = this.state;
      if (!property_id || !sender_id || !receive_user_id || !description) {
        return;
      }
      let dataToSend = {
          sender_id: profile.assets_id,
          receiver_id: receive_user_id, // agent_id
          agreement_id: this.props.location.state.TemplateId,
          property_id: property_id,
          description: description,
          session_id: this.props.session_id,
					tenure_start_date :this.state.startDate,
					tenure_end_date :this.state.endDate,
					paid_to:paid_to,
					templateDescription:this.props.location.state.templateDescription,
					session_id:JSON.parse(this.state.userData).session_id,
					loginUserId:JSON.parse(this.state.userData).assets_id,
					agreement_type:this.props.location.state.agreement_type,
		};
		//console.log(JSON.stringify(dataToSend))
		 $("#loaderDiv").show();
	  fetch(`${API_URL}assetsapi/agreement_replace_values`, {
		method: 'post',
		body: JSON.stringify(dataToSend)
	})
		.then(res => res.json())
		.then(
			(data) => {
				$("#loaderDiv").hide();
				if (data.success) {
					this.setState({previewAgreement:data.replacedTemplate});
					this.props.history.push({pathname:'/broker-agreement-preview',state:{dataToSend:dataToSend,PreviewAgreement:this.state.previewAgreement,loc:'/broker-agreement-send',locCommon:this.props.location.state.loc}});
				}
			},
			(error) => {
				console.log('error')
			}
		) 
	  //console.log(JSON.stringify(this.props));
	  //console.log(JSON.stringify(dataToSend));
		//this.props.history.push({pathname:'/owner-agreement-preview',state:{dataToSend}});
		//
	}
	PropertyListOption(optionName){
		this.setState({property_option:optionName});
		$("#loaderDiv").show();
		fetch(`${API_URL}assetsapi/property_list_broker_agreement/${JSON.parse(this.state.userData).assets_id}/`+optionName, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(
                (data) => {
                    //console.log("data 2: "+JSON.stringify(result.profile))
                    if (data) {
                        $("#loaderDiv").hide();
						this.setState({userProperty: data.property_list_broker_agreement});
					   if(!this.state.userProperty){
						   document.getElementById("FormCancel").click();
						    $("#actionType").val("No");
						   $("#hiddenURL").val("broker-agreement");
						   $(".confirm-body").html("You don't have property to send agreement.");
						   $("#BlockUIConfirm").show();
					   }
					  
                    }
                    //console.log("set user data"+JSON.stringify(this.state.profileData))
                },
                (error) => {
                  alert('Error sending data')
                    console.log('error')
                }
            );
	}
    render(){
			//console.log('send '+JSON.stringify(this.props.location.state));
		const { value, suggestions } = this.state;
			// Autosuggest will pass through all these props to the input.
			const inputProps = {
				placeholder: 'Search',
				value,
				onChange: this.onChange
			};
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
						<h4 className="page-title">Agreement Send Form</h4>
						
					</div>
					
					<div className="row">
						<div className="col-sm-12">
							<div className="card-box">
								<form onSubmit={this.onSubmitHandle}>
									<div className="col-md-12">
					
										<div className="radio radio-custom">
											<input type="radio" name="property_option" id="fromDeal" value="deal" onChange={this.PropertyListOption.bind(this,'deal')}/>
											<label htmlFor="fromDeal"> Property from Deal </label>
										</div>

										<div className="radio radio-custom">
											<input type="radio" name="property_option" id="fromConnected" value="connected" onChange={this.PropertyListOption.bind(this,'connected')}/>
											<label htmlFor="fromConnected"> Property from Connected Owners's </label>
										</div>
						
							</div>
								<div className="row">
								 { this.state.userProperty && this.state.userProperty.length > 0 &&
									<div className="col-md-5">
									  <div className="form-group">
										<label for="nme" className="control-label">Property<span className="required"/></label>
										<select  className="form-control" name="property_id" onChange={this.onChangeHandler}>
										  <option>Please Select</option>
											{this.state.userProperty.map(prp => <option value={prp.property_id}>{prp.property_name}</option>)}
										</select>
									  </div>
									</div>
								  }
								
									<div className="col-md-5">
										<div className="form-group">
											<label for="nme" className="control-label">Send To Assets Type<span className="required"/></label>
											<select  className="form-control" name="sender_id" id = "assets_type" onChange={this.onChangeHandler}>
												<option>Please Select</option>
												<option value="1">Owner</option>
												<option value="3">Tenant</option>
											</select>
										</div>
									</div>
								</div>
								<div className="row">	
									<div className="col-md-5">
										<div className="form-group">
											<label for="nme" className="control-label">Send To<span className="required"/></label>
											 <Autosuggest className="form-control"
												  suggestions={suggestions}
												  onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)}
												  onSuggestionsClearRequested={this.onSuggestionsClearRequested.bind(this)}
												  getSuggestionValue={this.getSuggestionValue.bind(this)}
												  renderSuggestion={this.renderSuggestion.bind(this)}
												  onSuggestionSelected={this.onSuggestionSelected.bind(this)}
												  inputProps={inputProps}
												  alwaysRenderSuggestions={true}
											/>	 
										</div>
									</div>
								
									<div className="col-md-5">
										<div className="form-group">
											<label for="tenure_start_date" className="control-label">Tenure Start Date<span className="required"/></label>
											<DatePicker className="form-control"
											onChange={this.handleSdChange}
											value={this.state.startDate}
											/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-5">
										<div className="form-group">
											<label for="tenure_start_date" className="control-label">Tenure End Date<span className="required"/></label>
											<DatePicker className="form-control"
											onChange={this.handleEdChange}
											value={this.state.endDate}
											/>
										</div>
									</div>
								

									{!this.props.UpdAgreement && 
									<div className="col-md-5">
										<div className="form-group">
											<label for="paid_to" className="control-label">Rent Paid To<span className="required"/></label>
											<select  className="form-control" name="paid_to" id = "paid_to" onChange={this.onChangeHandler}>
											  <option>Please Select</option>
											  <option value="Owner">Owner</option>
											  <option value="Agent">Agent</option>
											</select>
										</div>
									</div>
								}
								</div>	
									<div className="col-md-5">
										<div className="form-group">
											<label for="field-7" className="control-label">Description<span className="required"/></label>
											<textarea className="form-control" name="description" onChange={this.onChangeHandler} id="field-7" placeholder=""></textarea>
										</div>
									</div>
									<button type="reset"  className="btn btn-secondary waves-effect" data-dismiss="modal">Reset</button>&nbsp;
									<button type="submit" className="btn btn-success waves-effect waves-light">Next</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			
  );}
  }