import React from 'react';
import './ServiceProviderSettings.css';
//import ProfileInfo from './profileInfo'
import EmailSMSSettings from './EmailSMSSettings'
// import PasswordSettings from './passwordSetting'
import { connect } from 'react-redux';
import $ from 'jquery'
class ServiceProviderSettings extends React.Component{
	constructor(props){
    super(props)
    this.state={
		userInfo:props.userData,
      }
 
	}
	/* changeTabs(id){
    if(id=="profile-info"){
      $("#passwordTab").removeClass("active")
    }else{
      $("#profileTab").removeClass("active")
    } 
  }*/
	render(){
		return(
			  <div>
			<div className="wrapper">
                  <div className="container"> 
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="page-title-box">
                          <h4 className="page-title">Settings</h4>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="card-box" enctype="multipart/form-data">
                          <form id="default-wizard" encType="multipart/form-data">
                          <ul className="nav nav-pills navtab-bg "> {/*nav-justified */}
                                 {/*  <li className="nav-item"> <a id="profileTab" onClick={this.changeTabs.bind(this,"profile-info")} href="#profile-info" data-toggle="tab" aria-expanded="false" className="nav-link active"> Profile Information </a> </li>
                              
                          <li className="nav-item" id="passNavItem"> <a id="passwordTab" onClick={this.changeTabs.bind(this,"password-settings")} href="#password-settings" data-toggle="tab" aria-expanded="false" className="nav-link"> Password Setting </a> </li>
							  */ }     </ul>
                            <div className="tab-content set-form">
                              {/*<ProfileInfo />
							   
                              <PasswordSettings />*/}
							  <EmailSMSSettings /> 
                            </div>                            
                          </form>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
            </div>

			)
	}
}
export default connect(state=>({ userData: state.userData, userSettings: state.userSettings }))(ServiceProviderSettings)