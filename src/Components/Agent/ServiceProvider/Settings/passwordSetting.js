import React from 'react'
import API_URL from "../../../../app-config";
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import swal from 'sweetalert';
import $ from 'jquery';
 class PasswordSettings extends React.Component{
	constructor(props){
    super(props)
    this.formSubmit=this.formSubmit.bind(this)
    this.state={
		userInfo:props.userData,
		 userData:Cookies.get('profile_data'),
      settings:{
			assets_id:"",
			session_id:"",
			old_password:"",
			new_password:"",
			confirm_password:"",
			email:""
      }
      }
      this.onChangeHandler=this.onChangeHandler.bind(this);
	}
	onChangeHandler(e){
    const settingForm=this.state.settings
   
      if(e.target.name==='old_password')
	  {
        settingForm.old_password=e.target.value;
		//alert(settingForm.old_password);
	  }
      else if(e.target.name==='new_password')
        settingForm.new_password=e.target.value
      else if(e.target.name==='confirm_password')
        settingForm.confirm_password=e.target.value
	
	 //console.log(this.state.userInfo);
	 settingForm.email = JSON.parse(this.state.userData).email;
		settingForm.assets_id= JSON.parse(this.state.userData).assets_id;
		settingForm.session_id= JSON.parse(this.state.userData).session_id;
      this.setState({settings:settingForm})
      // this.setState({[e.target.name]:e.target.value})   
 // console.log(this.state.settings);	  
  }
  formSubmit(){
      var opts=this.state.settings

      // console.log(opts.chekname);
     
      if(!opts.old_password){
        alert('Old Password should not be blank');
        return;
      }
      if(!opts.new_password){
        alert('New Password should not be blank');
        return;
      }
      if(!opts.confirm_password){
        alert('Confirm Password should not be blank');
        return;
      }
      
	  if(opts.confirm_password !== opts.new_password)
	  {
		   alert ('Confirm password is not matched.')
	  }
	  
	  if(!opts.old_password && !opts.new_password && !opts.confirm_password && (opts.confirm_password !== opts.new_password)){
		  return;
	  }else{
		  $("#loaderDiv").show();
		 fetch(`${API_URL}assetsapi/setting_password/`, {
        method: 'post',        
        body: JSON.stringify(opts)
        }).then((response) => {
          return response.json();
        }).then((data) => {
          // console.log('dataaaa:  ', data);
          if(data)
          {
				// swal("Assets Watch", data.msg);
            // this.props.history.replace(`/settings`);
			// window.location.reload();
			$("#loaderDiv").hide();
					   
					   $("#actionType").val("Yes");
					   $("#hiddenURL").val("agentprovider-settings");
					   $(".confirm-body").html(data.msg);
					   $("#BlockUIConfirm").show();
          }
       
        }).catch((error) => {
          console.log('error: ', error);
        }); 
	  }
      
      }
  
  
    render(){
		
	 // console.log(this.state);
    // console.log(this.props);
        return(
		
            <div className="tab-pane fade" style={{width:"100%"}} id="password-settings">
						<div className="form-group">
						  <div className="row">
							<div className="col-lg-2 col-md-3 col-sm-3 required">
							  <label for="old-password">Old Password</label>
							</div>
							<div className="col-lg-2 col-md-3 col-sm-3">
							  <input type="password" name="old_password" className="form-control" id="old-password" onChange={this.onChangeHandler} placeholder="" required />
							</div>
							<div className="col-lg-2 col-md-3 col-sm-3 required">
							  <label for="new-password">New Password</label>
							</div>
							<div className="col-lg-2 col-md-3 col-sm-3">
							  <input type="password" name="new_password" className="form-control" id="new-password" onChange={this.onChangeHandler} placeholder="" required />
							</div>
							<div className="col-lg-2 col-md-3 col-sm-3 required">
							  <label for="confirm-password">Confirm Password</label>
							</div>
							<div className="col-lg-2 col-md-3 col-sm-3">
							  <input type="password" name="confirm_password" className="form-control" id="confirm-password" onChange={this.onChangeHandler} placeholder="" required />
							</div>
						 </div>
				</div>
                <div style={{display: '-webkit-box'}}>
                    <div className="col-md-12 text-right">
						  <button type="button" className="btn btn-primary stepy-finish text-right" onClick={this.formSubmit}>Submit</button>
				    </div>
                </div>
            </div>
        );
    }
}
export default connect(state=>({ userData: state.userData }))(PasswordSettings)