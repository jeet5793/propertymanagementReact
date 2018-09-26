import React from 'react'
import API_URL from '../../../app-config';
import Cookies from 'js-cookie';
import swal from 'sweetalert';
import Autosuggest from 'react-autosuggest';
	import $ from "jquery";
export default class SendMSG extends React.Component{
  constructor(props){
    super(props);
    this.state={
    propertyByUser:[],
    userData : Cookies.get('profile_data'),
	userlist:[],
	value: '',
	suggestions: [],
	searchValue:'',
	searchInputData:[],
    };
    this.sendAgreement = this.sendAgreement.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
	this.searchUser=this.searchUser.bind(this)
	this.sendForwardedAgreement = this.sendForwardedAgreement.bind(this);
  }
    onChangeHandler(e) {
        if (e.target.name === 'property_id') {
            this.setState({property_id: e.target.value})
        } else if (e.target.name === 'sender_id') {
            this.setState({sender_id: e.target.value},()=>{
              this.getPropertyList()
            })
			this.userlist(e.target.value);
        } else if (e.target.name === 'user_id') {
            this.setState({user_id: e.target.value})
        }else if (e.target.name === 'description') {
            this.setState({description: e.target.value})
        }

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
    getPropertyList() {
      fetch(`${API_URL}assetsapi/invite_request/${JSON.parse(this.state.userData).assets_id}/${this.state.sender_id}/${JSON.parse(this.state.userData).session_id}`, {
        method: 'get'
      })
        .then(res => res.json())
        .then(
          (data) => {
            console.log("data.....: "+JSON.stringify(data))
            if (data.success) {
              this.setState({ propertyByUser: data.invitation.users })
              console.log("propertyByUser..."+JSON.stringify(this.state.propertyByUser));
            }
            //console.log("set user data"+JSON.stringify(this.state.profileData))
          },
          (error) => {
            console.log('error')
          }
        )
      }

    sendAgreement() {
		
      const profile=JSON.parse(this.state.userData)
    //  console.log("user id"+JSON.stringify(profile))
      let { property_id, sender_id, receive_user_id, description } = this.state;
      if (!property_id || !sender_id || !receive_user_id || !description) {
        return;
      }
      let data = {
          sender_id: profile.assets_id,
          receiver_id: receive_user_id, // agent_id
          agreement_id: this.props.agreement.agreement_id,
          property_id: property_id,
          description: description,
          session_id: this.props.session_id,
      };
// console.log("hello"+data);
		document.getElementById("FormCancel").click();
			$("#loaderDiv").show();
        fetch(`${API_URL}assetsapi/send_agreement`, {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(
                (data) => {
                    //console.log("data 2: "+JSON.stringify(result.profile))
                    if (data.success) {
						$("#loaderDiv").hide();
					   
					   $("#actionType").val("Yes");
					   $("#hiddenURL").val("agreement");
					   $(".confirm-body").html(data.msg);
					   $("#BlockUIConfirm").show();
                        // swal("Assets Watch", data.msg);
						
                        // console.log(this.state.propertyByUser);
                        // window.$('.close').click();
						// window.location.reload();
                    }
                    //console.log("set user data"+JSON.stringify(this.state.profileData))
                },
                (error) => {
                  alert('Error sending data')
                    console.log('error')
                }
            );

    }
	sendForwardedAgreement() {
      const profile= JSON.parse(this.state.userData);
    //  console.log("user id"+JSON.stringify(profile))
      let { property_id, sender_id, receive_user_id, description } = this.state;
      if (!property_id || !sender_id || !receive_user_id || !description) {
        return;
      }
      let data = {
          sender_id: profile.assets_id,
          receiver_id: receive_user_id, // agent_id
          agreement_id: this.props.UpdAgreement.agreement_id,
          property_id: property_id,
          description: description,
          session_id: this.props.session_id,
		  updatedTemplate: this.props.UpdAgreement.replaced_template,
      };
	  document.getElementById("FormCancel").click();
		$("#loaderDiv").show();
        fetch(`${API_URL}assetsapi/send_forwarded_agreement`, {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(
                (data) => {
                    //console.log("data 2: "+JSON.stringify(result.profile))
                    if (data.success) {
                        /* // alert('send_agreement ', JSON.stringify(data));
						 swal("Assets Watch", data.msg);
                        // console.log(this.state.propertyByUser);
                        window.$('.close').click()
						window.location.reload(); */
						$("#loaderDiv").hide();
					   
					   $("#actionType").val("Yes");
					   $("#hiddenURL").val("agreement");
					   $(".confirm-body").html(data.msg);
					   $("#BlockUIConfirm").show();
                    }
                    //console.log("set user data"+JSON.stringify(this.state.profileData))
                },
                (error) => {
                  alert('Error sending data')
                    console.log('error')
                }
            );

    }
	hideModel()
	{
		var $=window.$;
		$(".modal-backdrop").hide();
	}
	getSuggestions() {
			 return this.state.propertyByUser.filter(lang =>
				 lang.label
			 );
	 };

	 getSuggestionValue(suggestion) {
		console.log("onSuggestionSelected",suggestion)
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
	console.log("onChange ",newValue)
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
		console.log("onSuggestionsClearRequested ")
		this.setState({
			suggestions: []
		});
	};
	searchUser() {
		var searchValue = $('.react-autosuggest__input').val();
		var assetsType = $('#assets_type').val();
		const session = JSON.parse(this.state.userData).session_id;  
		console.log("selVal"+searchValue);
		const opts ={assets_type:assetsType,string:searchValue,session_id:session,userid:JSON.parse(this.state.userData).assets_id}
		console.log("optsssss1111"+JSON.stringify(opts));
		fetch(`${API_URL}assetsapi/userSearch`, {
			method: 'POST',
		body: JSON.stringify(opts)
		})
		.then(res => res.json())
		.then(
			(result) => {
			console.log("data22222: "+JSON.stringify(result))
			if (result.success) {
			
				console.log("ifffff: "+JSON.stringify(result))
						this.setState({propertyByUser:result.users},()=>{
							this.setState({
								suggestions: this.getSuggestions()
							});
						})
					
			} else{
				console.log("elseee"+JSON.stringify(result))
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
    render(){
		const { value, suggestions,selectedOption,property_list,autocompleteData } = this.state;
			// Autosuggest will pass through all these props to the input.
			const inputProps = {
				placeholder: 'Search',
				value,
				onChange: this.onChange
			};
      // console.log("propertyByUser render..."+JSON.stringify(this.state.propertyByUser));
      // console
        return(
            <div id="send-msg" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: 'none'}}>
            <div className="modal-dialog">
              <div className="modal-content">      
                <div className="modal-header">        
                  <button type="button" className="close" onClick={this.hideModel} data-dismiss="modal" aria-hidden="true">×</button>
                  <h4 className="modal-title">Agreement Title </h4>      
                </div>      
                <div className="modal-body">        
                  <div className="row">
                      { this.props.userProperty && this.props.userProperty.length > 0 &&
                        <div className="col-md-12">
                          <div className="form-group">
                            <label for="nme" className="control-label">Property</label>
                            <select  className="form-control" name="property_id" onChange={this.onChangeHandler}>
                              <option>Please Select</option>
                                {this.props.userProperty.map(prp => <option value={prp.property_id}>{prp.property_name}</option>)}
                            </select>
                          </div>
                        </div>
                      }
                    <div className="col-md-12">
                  <div className="form-group">
                    <label for="nme" className="control-label">Send To</label>
                    <select  className="form-control" name="sender_id" id = "assets_type" onChange={this.onChangeHandler}>
                      <option>Please Select</option>
                      <option value="2">Agent</option>
                      <option value="3">Tenant</option>
                    </select>
                  </div>
                </div>          
                <div className="col-md-12">
                  <div className="form-group">
                    <label for="nme" className="control-label">User List</label>
                    {/* <select  className="form-control" name="user_id" onChange={this.onChangeHandler}>
                      <option>Please Select</option>
                        {
                            this.state.user_list && this.state.user_list.length > 0 &&
                            this.state.user_list.map(user => <option value={user.profile_id}>{user.name}</option>)
                        }
	</select> */}<Autosuggest className="form-control"
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
              </div>        
                  <div className="row">
                <div className="col-md-12">
                  <div className="form-group no-margin">
                    <label for="field-7" className="control-label">Description</label>
                    <textarea className="form-control" name="description" onChange={this.onChangeHandler} id="field-7" placeholder=""></textarea>
                  </div>
                </div>
              </div>		
              </div>     
              <div className="modal-footer">
                <button type="button" id = "FormCancel" className="btn btn-secondary waves-effect" data-dismiss="modal" onClick={this.hideModel}>Close</button>
                <button type="button" className="btn btn-success waves-effect waves-light" onClick={this.props.UpdAgreement?this.sendForwardedAgreement:this.sendAgreement}>Send</button>
              </div>  
              </div>
            </div>
          </div>
        );
    }
}