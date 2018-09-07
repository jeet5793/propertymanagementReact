import React from 'react'
import Header from '../Header/BrokerHeader'
import ProfileInfo from './profileInfo'
import PasswordSettings from './passwordSetting'
import { connect } from 'react-redux';
class BrokerSettings extends React.Component{
  constructor(props){
    super(props)
    this.state={
		userInfo:props.userData,
      }
 
	}
	render(){
		return(
		<div>
			<div style={{marginTop:'3%',marginBottom:'3%',minHeight:600}} className="wrapper">
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

                  </div>
                </div>
            </div>


			)
	}
}
export default connect(state=>({ userData: state.userData, userSettings: state.userSettings }))(BrokerSettings)