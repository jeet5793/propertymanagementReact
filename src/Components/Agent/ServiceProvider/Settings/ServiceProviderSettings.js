import React from 'react';
import './ServiceProviderSettings.css';
export default class ServiceProviderSettings extends React.Component{
	render(){
		return(
			  <div>
    <div style={{marginTop:'3%',marginBottom:'5%',minHeight:600}} className="wrapper">
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
                      <div className="tab-pane fade show active" id="profile-info">
                        <fieldset title={1}>
                          <h4>Basic Information</h4>
                          <div className="form-group">
                            <div className="row">
                              <div className="col-md-1">
                                <label htmlFor="firstname">First Name</label>
                              </div>
                              <div className="col-md-5">
                                <input type="text" className="form-control" id="firstname" placeholder required />
                              </div>
                              <div className="col-md-1">
                                <label htmlFor="lastname">Last Name</label>
                              </div>
                              <div className="col-md-5">
                                <input type="text" className="form-control" id="lastname" placeholder required />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="row">
                              <div className="col-md-1">
                                <label htmlFor="firstname">D.O.B</label>
                              </div>
                              <div className="col-md-2">
                                <input type="text" className="form-control" id="datepicker-autoclose" placeholder required />
                              </div>
                              <div className="col-md-1">
                                <label htmlFor="firstname">Gender</label>
                              </div>
                              <div className="col-md-2">
                                <select className="form-control" required>
                                  <option />
                                  <option>Male</option>
                                  <option>Female</option>
                                </select>
                              </div>
                              <div className="col-md-1">
                                <label htmlFor="lastname">SSN/EIN</label>
                              </div>
                              <div className="col-md-5">
                                <input type="text" className="form-control" id="lastname" placeholder required />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="row">
                              <div className="col-md-1">
                                <label htmlFor="email">Email</label>
                              </div>
                              <div className="col-md-5">
                                <input type="email" className="form-control" id="email" placeholder required />
                              </div>
                              <div className="col-md-1">
                                <label htmlFor="user-type">User Type</label>
                              </div>
                              <div className="col-md-5">
                                <input type="text" className="form-control" defaultValue="Individual" readOnly />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="row">
                              <div className="col-md-1">
                                <label htmlFor="city">City</label>
                              </div>
                              <div className="col-md-5">
                                <input type="text" className="form-control" id="city" placeholder required />
                              </div>
                              <div className="col-md-1">
                                <label htmlFor="state">State</label>
                              </div>
                              <div className="col-md-5">
                                <input type="text" className="form-control" id="state" placeholder required />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="row">
                              <div className="col-md-1">
                                <label htmlFor="country">Country</label>
                              </div>
                              <div className="col-md-5">
                                <input type="text" className="form-control" id="country" placeholder required />
                              </div>
                              <div className="col-md-1">
                                <label htmlFor="zip-code">ZIP Code</label>
                              </div>
                              <div className="col-md-5">
                                <input type="text" className="form-control" id="zip-code" placeholder required />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="row">
                              <div className="col-md-1">
                                <label htmlFor="mobile-no">Mobile No</label>
                              </div>
                              <div className="col-md-5">
                                <input type="text" className="form-control" id="mobile-no" placeholder required />
                              </div>
                              <div className="col-md-1">
                                <label htmlFor="landline">Landline</label>
                              </div>
                              <div className="col-md-5">
                                <input type="text" className="form-control" id="landline" placeholder required />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="row">
                              <div className="col-md-1">
                                <label htmlFor="landline">Profile Img</label>
                              </div>
                              <div className="col-md-5">
                                <input type="file" className="form-control" id="u" placeholder required />
                              </div>
                              <div className="col-md-1">
                                <label htmlFor="mobile-no">About Me</label>
                              </div>
                              <div className="col-md-5">
                                <textarea type="text" className="form-control" id="mobile-no" placeholder required defaultValue={""} />
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        <fieldset title={2}>
                          <h4>Social Profiles</h4>
                          <div className="row m-t-20">
                            <div className="col-sm-4">
                              <div className="form-group">
                                <div className="input-group"> <span className="input-group-addon"><i className="mdi mdi-facebook" /></span>
                                  <input type="text" className="form-control" placeholder="Facebook url" />
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="form-group">
                                <div className="input-group"> <span className="input-group-addon"><i className="mdi mdi-linkedin" /></span>
                                  <input type="text" className="form-control" placeholder="Linkdin url" />
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="form-group">
                                <div className="input-group"> <span className="input-group-addon"><i className="mdi mdi-twitter" /></span>
                                  <input type="text" className="form-control" placeholder="Twitter url" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        <div className="col-md-12 text-right">
                          <button type="submit" className="btn btn-primary stepy-finish text-right">Submit</button>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="password-settings">
                        <div className="form-group">
                          <div className="row">
                            <div className="col-md-2">
                              <label htmlFor="old-password">Old Password</label>
                            </div>
                            <div className="col-md-4">
                              <input type="password" className="form-control" id="old-password" placeholder required />
                            </div>
                            <div className="col-md-2">
                              <label htmlFor="new-password">New Password</label>
                            </div>
                            <div className="col-md-4">
                              <input type="password" className="form-control" id="new-password" placeholder required />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <div className="col-md-2">
                              <label htmlFor="confirm-password">Confirm Password</label>
                            </div>
                            <div className="col-md-4">
                              <input type="password" className="form-control" id="confirm-password" placeholder required />
                            </div>
                            {/*<div class="col-md-6">
                      <label for="new-password">New Password</label>
                      <input type="password" class="form-control" id="new-password" placeholder="">
                    </div>*/} 
                          </div>
                        </div>
                        <div className="col-md-12 text-right">
                          <button type="submit" className="btn btn-primary stepy-finish text-right">Submit</button>
                        </div>
                      </div>
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