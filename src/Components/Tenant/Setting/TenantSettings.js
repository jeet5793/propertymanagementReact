import React from 'react'
import Header from '../Header/TenantHeader'
import ProfileInfo from './profileInfo'
import PasswordSettings from './passwordSetting'
import { connect } from 'react-redux';

class TenantSetting extends React.Component {
	constructor(props){
    super(props)
    this.state={
		userInfo:props.userData,
      }
 
	}
    render() {
        return (
            <div>
    
    <div className="wrapper" style={{minHeight:600,marginBottom:'6%'}}>
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
                <form id="default-wizard">
                <ul className="nav nav-pills navtab-bg">
                    <li className="nav-item"> <a href="#profile-info" data-toggle="tab" aria-expanded="false" className="nav-link active"> Profile Information </a> </li>
                    <li className="nav-item"> <a href="#password-settings" data-toggle="tab" aria-expanded="false" className="nav-link"> Password Setting </a> </li>
                </ul>
                <div className="tab-content">
                    
					<ProfileInfo />
                     
                   <PasswordSettings />
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