import React from 'react'
import Header from '../Header/TenantHeader'
import EmailSMSSettings from './EmailSMSSettings'
// import PasswordSettings from './passwordSetting'
import { connect } from 'react-redux';
import $ from 'jquery'
class TenantSetting extends React.Component {
	constructor(props){
    super(props)
    this.state={
		userInfo:props.userData,
      }
 
	}
	// changeTabs(id){
    // if(id=="email-sms-settings"){
      // $("#passwordTab").removeClass("active")
    // }else{
      // $("#emailSmsTab").removeClass("active")
    // }
  // }
    render() {
        return (
            <div>
    
     <div className="wrapper">
        <div className="container"> 
        {/* Page-Title */}
        <div className="row">
            <div className="col-sm-12">
            <div className="page-title-box">
                <h4 className="page-title">Settings</h4>
            </div>
            </div>
        </div>
        {/* end page title end breadcrumb */} 
        {/* Basic Form Wizard */}
        <div className="row">
            <div className="col-md-12">
            <div className="card-box">
                <form id="default-wizard" encType="multipart/form-data">
                          {/*<ul className="nav nav-pills navtab-bg "> 
                              <li className="nav-item"> <a id="emailSmsTab" onClick={this.changeTabs.bind(this,"email-sms-settings")} href="#email-sms-settings" data-toggle="tab" aria-expanded="false" className="nav-link active"> Settings </a> </li>
                              
                              <li className="nav-item" id="passNavItem"> <a id="passwordTab" onClick={this.changeTabs.bind(this,"password-settings")} href="#password-settings" data-toggle="tab" aria-expanded="false" className="nav-link"> Change Password </a> </li>
                            </ul>*/}
                            <div className="tab-content">
                              <EmailSMSSettings /> 
                              {/* <PasswordSettings />*/}
                            </div>                            
                          </form>
            </div>
            </div>
        </div>
        {/* End row */} 
        {/* Clickable Wizard */} 
        {/* End row */} 
        {/* Clickable Wizard */} 
        </div>
        {/* End row */} 
    </div>
   
</div>
        )
    }
}  

export default connect(state=>({ userData: state.userData, userSettings: state.userSettings }))(TenantSetting);