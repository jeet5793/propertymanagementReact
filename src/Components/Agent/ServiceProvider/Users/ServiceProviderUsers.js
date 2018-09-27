import React from 'react';
import './ServiceProviderUsers.css';
export default class ServiceProviderUsers extends React.Component{
	render(){
		return(

			 <div>
        
        <div className="wrapper">
          <div className="container agentdis">
            <div className="page-title-box">
              <div className="btn-group pull-right">
                <ol className="breadcrumb hide-phone p-0 m-0">
                  <li><a href="#" data-toggle="modal" data-target="#send-invite" className="btn waves-light waves-effect w-md btn-custom"><i className="fi-open" />&nbsp;&nbsp;Send Invite</a></li>
                </ol>
              </div>
              <h4 className="page-title">Users</h4>
            </div>
            {/* end page title end breadcrumb */} 
            {/* end row */}
            <div className="search-result-box card-box">
              <ul className="nav nav-tabs tabs-bordered">
                <li className="nav-item"> <a href="#joined-user" data-toggle="tab" aria-expanded="true" className="nav-link active font-16">Joined Users <span className="badge badge-success m-l-10">06</span> </a> </li>
                <li className="nav-item"> <a href="#user-request" data-toggle="tab" aria-expanded="false" className="nav-link font-16">User Requested <span className="badge badge-danger m-l-10">03</span> </a> </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active" id="joined-user">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card-box">
                        <div className="member-card-alt">
                          <div className="thumb-xl member-thumb m-b-10 pull-left"> <img src="assets/images/users/avatar-3.jpg" className="img-thumbnail" alt="profile-image" /> <i className="mdi mdi-star-circle member-star text-success" title="verified user" /> </div>
                          <div className="member-card-alt-info">
                            <h4 className="m-b-5 m-t-0 font-18">Owner 1</h4>
                            <p className="text-muted m-b-3"><i className="icon-user" />&nbsp; Owner</p>
                            <p className="text-muted m-b-3"><i className="icon-phone" />&nbsp; 09999999999</p>
                            <p className="text-muted m-b-3 "><i className="icon-envelope" />&nbsp; owner@info.com</p>
                            <p className="text-muted m-b-3 text-overflow"><i className="icon-location-pin" />&nbsp; #0, 22nd Floor, 27th main</p>
                            <ul className="list-inline m-t-10 m-b-0 text-right">
                              <li className="list-inline-item"> <a className="mesg-icon" data-toggle="modal" data-target="#send-msg" title="Message" href="#"><i className="icon-bubble" /></a> </li>
                              <li className="list-inline-item"> <a className="view-icon" title="View" href="owner-profile.html"><i className="icon-eye" /></a> </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end col */}
                    <div className="col-md-4">
                      <div className="card-box">
                        <div className="member-card-alt">
                          <div className="thumb-xl member-thumb m-b-10 pull-left"> <img src="assets/images/users/avatar-5.jpg" className="img-thumbnail" alt="profile-image" /> <i className="mdi mdi-star-circle member-star text-success" title="verified user" /> </div>
                          <div className="member-card-alt-info">
                            <h4 className="m-b-5 m-t-0 font-18">Agent 1</h4>
                            <p className="text-muted m-b-3"><i className="icon-user" />&nbsp; Agent</p>
                            <p className="text-muted m-b-3"><i className="icon-phone" />&nbsp; 09999999999</p>
                            <p className="text-muted m-b-3 "><i className="icon-envelope" />&nbsp; owner@info.com</p>
                            <p className="text-muted m-b-3 text-overflow"><i className="icon-location-pin" />&nbsp; #0, 22nd Floor, 27th main</p>
                            <ul className="list-inline m-t-10 m-b-0 text-right">
                              <li className="list-inline-item"> <a className="mesg-icon" data-toggle="modal" data-target="#send-msg" title="Message" href="#"><i className="icon-bubble" /></a> </li>
                              <li className="list-inline-item"> <a className="view-icon" title="View" href="owner-profile.html"><i className="icon-eye" /></a> </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end col */}
                    <div className="col-md-4">
                      <div className="card-box">
                        <div className="member-card-alt">
                          <div className="thumb-xl member-thumb m-b-10 pull-left"> <img src="assets/images/users/avatar-2.jpg" className="img-thumbnail" alt="profile-image" /> <i className="mdi mdi-star-circle member-star text-success" title="verified user" /> </div>
                          <div className="member-card-alt-info">
                            <h4 className="m-b-5 m-t-0 font-18">Tenant 1</h4>
                            <p className="text-muted m-b-3"><i className="icon-user" />&nbsp; Tenant</p>
                            <p className="text-muted m-b-3"><i className="icon-phone" />&nbsp; 09999999999</p>
                            <p className="text-muted m-b-3 "><i className="icon-envelope" />&nbsp; owner@info.com</p>
                            <p className="text-muted m-b-3 text-overflow"><i className="icon-location-pin" />&nbsp; #0, 22nd Floor, 27th main</p>
                            <ul className="list-inline m-t-10 m-b-0 text-right">
                              <li className="list-inline-item"> <a className="mesg-icon" data-toggle="modal" data-target="#send-msg" title="Message" href="#"><i className="icon-bubble" /></a> </li>
                              <li className="list-inline-item"> <a className="view-icon" title="View" href="owner-profile.html"><i className="icon-eye" /></a> </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end col */} 
                  </div>
                  {/* end row */}
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card-box">
                        <div className="member-card-alt">
                          <div className="thumb-xl member-thumb m-b-10 pull-left"> <img src="assets/images/users/avatar-4.jpg" className="img-thumbnail" alt="profile-image" /> <i className="mdi mdi-star-circle member-star text-success" title="verified user" /> </div>
                          <div className="member-card-alt-info">
                            <h4 className="m-b-5 m-t-0 font-18">Owner 2</h4>
                            <p className="text-muted m-b-3"><i className="icon-user" />&nbsp; Owner</p>
                            <p className="text-muted m-b-3"><i className="icon-phone" />&nbsp; 09999999999</p>
                            <p className="text-muted m-b-3 "><i className="icon-envelope" />&nbsp; owner@info.com</p>
                            <p className="text-muted m-b-3 text-overflow"><i className="icon-location-pin" />&nbsp; #0, 22nd Floor, 27th main</p>
                            <ul className="list-inline m-t-10 m-b-0 text-right">
                              <li className="list-inline-item"> <a className="mesg-icon" data-toggle="modal" data-target="#send-msg" title="Message" href="#"><i className="icon-bubble" /></a> </li>
                              <li className="list-inline-item"> <a className="view-icon" title="View" href="owner-profile.html"><i className="icon-eye" /></a> </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end col */}
                    <div className="col-md-4">
                      <div className="card-box">
                        <div className="member-card-alt">
                          <div className="thumb-xl member-thumb m-b-10 pull-left"> <img src="assets/images/users/avatar-6.jpg" className="img-thumbnail" alt="profile-image" /> <i className="mdi mdi-star-circle member-star text-success" title="verified user" /> </div>
                          <div className="member-card-alt-info">
                            <h4 className="m-b-5 m-t-0 font-18">Agent 2</h4>
                            <p className="text-muted m-b-3"><i className="icon-user" />&nbsp; Agent</p>
                            <p className="text-muted m-b-3"><i className="icon-phone" />&nbsp; 09999999999</p>
                            <p className="text-muted m-b-3 "><i className="icon-envelope" />&nbsp; owner@info.com</p>
                            <p className="text-muted m-b-3 text-overflow"><i className="icon-location-pin" />&nbsp; #0, 22nd Floor, 27th main</p>
                            <ul className="list-inline m-t-10 m-b-0 text-right">
                              <li className="list-inline-item"> <a className="mesg-icon" data-toggle="modal" data-target="#send-msg" title="Message" href="#"><i className="icon-bubble" /></a> </li>
                              <li className="list-inline-item"> <a className="view-icon" title="View" href="owner-profile.html"><i className="icon-eye" /></a> </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end col */}
                    <div className="col-md-4">
                      <div className="card-box">
                        <div className="member-card-alt">
                          <div className="thumb-xl member-thumb m-b-10 pull-left"> <img src="assets/images/users/avatar-7.jpg" className="img-thumbnail" alt="profile-image" /> <i className="mdi mdi-star-circle member-star text-success" title="verified user" /> </div>
                          <div className="member-card-alt-info">
                            <h4 className="m-b-5 m-t-0 font-18">Tenant 2</h4>
                            <p className="text-muted m-b-3"><i className="icon-user" />&nbsp; Tenant</p>
                            <p className="text-muted m-b-3"><i className="icon-phone" />&nbsp; 09999999999</p>
                            <p className="text-muted m-b-3 "><i className="icon-envelope" />&nbsp; owner@info.com</p>
                            <p className="text-muted m-b-3 text-overflow"><i className="icon-location-pin" />&nbsp; #0, 22nd Floor, 27th main</p>
                            <ul className="list-inline m-t-10 m-b-0 text-right">
                              <li className="list-inline-item"> <a className="mesg-icon" data-toggle="modal" data-target="#send-msg" title="Message" href="#"><i className="icon-bubble" /></a> </li>
                              <li className="list-inline-item"> <a className="view-icon" title="View" href="owner-profile.html"><i className="icon-eye" /></a> </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end col */} 
                  </div>
                  {/* end row */}
                  <ul className="pagination justify-content-end pagination-split mt-0">
                    <li className="page-item"> <a className="page-link" href="#" aria-label="Previous"> <span aria-hidden="true">«</span> <span className="sr-only">Previous</span> </a> </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item active"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                    <li className="page-item"><a className="page-link" href="#">5</a></li>
                    <li className="page-item"> <a className="page-link" href="#" aria-label="Next"> <span aria-hidden="true">»</span> <span className="sr-only">Next</span> </a> </li>
                  </ul>
                  <div className="clearfix" />
                </div>
                {/* end All results tab */} 
                {/* Users tab */}
                <div className="tab-pane" id="user-request">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card-box">
                        <div className="member-card-alt">
                          <div className="thumb-xl member-thumb m-b-10 pull-left"> <img src="assets/images/users/avatar-3.jpg" className="img-thumbnail" alt="profile-image" /> <i className="mdi mdi-star-circle member-star text-success" title="verified user" /> </div>
                          <div className="member-card-alt-info">
                            <h4 className="m-b-5 m-t-0 font-18">Owner</h4>
                            <p className="text-muted m-b-3"><i className="icon-user" />&nbsp; Owner</p>
                            <p className="text-muted m-b-3"><i className="icon-phone" />&nbsp; 09999999999</p>
                            <p className="text-muted m-b-3 "><i className="icon-envelope" />&nbsp; owner@info.com</p>
                            <p className="text-muted m-b-3 text-overflow"><i className="icon-location-pin" />&nbsp; #0, 22nd Floor, 27th main</p>
                            <ul className="list-inline m-t-10 m-b-0 text-right">
                              <li className="list-inline-item"> <a className="accept-icon" title data-placement="top" data-toggle="tooltip" href="#" data-original-title="Accept"><i className="icon-check" /></a> </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end col */}
                    <div className="col-md-4">
                      <div className="card-box">
                        <div className="member-card-alt">
                          <div className="thumb-xl member-thumb m-b-10 pull-left"> <img src="assets/images/users/avatar-5.jpg" className="img-thumbnail" alt="profile-image" /> <i className="mdi mdi-star-circle member-star text-success" title="verified user" /> </div>
                          <div className="member-card-alt-info">
                            <h4 className="m-b-5 m-t-0 font-18">Agent</h4>
                            <p className="text-muted m-b-3"><i className="icon-user" />&nbsp; Agent</p>
                            <p className="text-muted m-b-3"><i className="icon-phone" />&nbsp; 09999999999</p>
                            <p className="text-muted m-b-3 "><i className="icon-envelope" />&nbsp; owner@info.com</p>
                            <p className="text-muted m-b-3 text-overflow"><i className="icon-location-pin" />&nbsp; #0, 22nd Floor, 27th main</p>
                            <ul className="list-inline m-t-10 m-b-0 text-right">
                              <li className="list-inline-item"> <a className="accept-icon" title data-placement="top" data-toggle="tooltip" href="#" data-original-title="Accept"><i className="icon-check" /></a> </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end col */}
                    <div className="col-md-4">
                      <div className="card-box">
                        <div className="member-card-alt">
                          <div className="thumb-xl member-thumb m-b-10 pull-left"> <img src="assets/images/users/avatar-2.jpg" className="img-thumbnail" alt="profile-image" /> <i className="mdi mdi-star-circle member-star text-success" title="verified user" /> </div>
                          <div className="member-card-alt-info">
                            <h4 className="m-b-5 m-t-0 font-18">Tenant</h4>
                            <p className="text-muted m-b-3"><i className="icon-user" />&nbsp; Tenant</p>
                            <p className="text-muted m-b-3"><i className="icon-phone" />&nbsp; 09999999999</p>
                            <p className="text-muted m-b-3 "><i className="icon-envelope" />&nbsp; owner@info.com</p>
                            <p className="text-muted m-b-3 text-overflow"><i className="icon-location-pin" />&nbsp; #0, 22nd Floor, 27th main</p>
                            <ul className="list-inline m-t-10 m-b-0 text-right">
                              <li className="list-inline-item"> <a className="accept-icon" title data-placement="top" data-toggle="tooltip" href="#" data-original-title="Accept"><i className="icon-check" /></a> </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end col */} 
                  </div>
                  <ul className="pagination justify-content-end pagination-split mt-0">
                    <li className="page-item"> <a className="page-link" href="#" aria-label="Previous"> <span aria-hidden="true">«</span> <span className="sr-only">Previous</span> </a> </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item active"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                    <li className="page-item"><a className="page-link" href="#">5</a></li>
                    <li className="page-item"> <a className="page-link" href="#" aria-label="Next"> <span aria-hidden="true">»</span> <span className="sr-only">Next</span> </a> </li>
                  </ul>
                  <div className="clearfix" />
                </div>
                {/* end Users tab */} 
              </div>
            </div>
          </div>
          {/* end container */} 
        </div>
        {/* end wrapper */} 
        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center"> © 2018 Assets Watch. All Rights Reserved </div>
            </div>
          </div>
        </footer>
        {/* End Footer */}
        <div id="background-verifi" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: 'none'}}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 className="modal-title">Background Verification</h4>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-2">
                          <label className="control-label">First Name</label>
                        </div>
                        <div className="col-md-4">
                          <input type="text" className="form-control" defaultValue="Vishnu" required />
                        </div>
                        <div className="col-md-2">
                          <label className="control-label">Last Name</label>
                        </div>
                        <div className="col-md-4">
                          <input type="text" className="form-control" defaultValue="L" required />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-2">
                          <label className="control-label">D.O.B</label>
                        </div>
                        <div className="col-md-4">
                          <input type="text" className="form-control" defaultValue="03/04/1995" id="datepicker-autoclose" />
                        </div>
                        <div className="col-md-2">
                          <label className="control-label">Gender</label>
                        </div>
                        <div className="col-md-4">
                          <select className="form-control" required>
                            <option value="Male" selected>Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-2">
                          <label className="control-label">Address</label>
                        </div>
                        <div className="col-md-4">
                          <input type="text" className="form-control" defaultValue="113 State Hwy 121 " required />
                        </div>
                        <div className="col-md-2">
                          <label className="control-label">City</label>
                        </div>
                        <div className="col-md-4">
                          <input type="text" className="form-control" defaultValue="Bangalore" required />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-2">
                          <label className="control-label">State</label>
                        </div>
                        <div className="col-md-4">
                          <input type="text" className="form-control" defaultValue="Karnataka" required />
                        </div>
                        <div className="col-md-2">
                          <label className="control-label">ZIP Code</label>
                        </div>
                        <div className="col-md-4">
                          <input type="text" className="form-control" defaultValue={56006} required />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-2">
                          <label className="control-label">Phone</label>
                        </div>
                        <div className="col-md-4">
                          <input type="text" className="form-control" defaultValue={9999999999} required />
                        </div>
                        <div className="col-md-2">
                          <label className="control-label">Email</label>
                        </div>
                        <div className="col-md-4">
                          <input type="text" className="form-control" defaultValue="owner@info.com" required />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-2">
                          <label className="control-label">SSN</label>
                        </div>
                        <div className="col-md-4">
                          <input type="text" className="form-control" defaultValue="FD34DS7878" required />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group no-margin">
                      <label htmlFor="field-7" className="control-label"><i className="fa fa-check check-color" />&nbsp;Pay 10$ for background verification report.</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-success waves-effect waves-light">Submit</button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */} 
        {/* Modal */}
        <div id="send-invite" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: 'none'}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 className="modal-title">Send Invite</h4>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="field-1" className="control-label">Select To</label>
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder />
                        <span className="input-group-addon bg-custom b-0"><i className="mdi mdi-magnify text-white" /></span> </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group no-margin">
                      <label htmlFor="field-7" className="control-label">Message</label>
                      <textarea className="form-control" id="field-7" placeholder defaultValue={""} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-success waves-effect waves-light">Send</button>
              </div>
            </div>
          </div>
        </div>
        <div id="send-msg" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: 'none'}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 className="modal-title">Send </h4>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="nme" className="control-label">Name</label>
                      <input type="text" className="form-control" placeholder defaultValue="Owner1" id="nme" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group no-margin">
                      <label htmlFor="field-7" className="control-label">Message</label>
                      <textarea className="form-control" id="field-7" placeholder defaultValue={""} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-success waves-effect waves-light">Send</button>
              </div>
            </div>
          </div>
        </div>
        {/* jQuery  */} 
        {/* Tether for Bootstrap */} 
        {/* Modal-Effect */} 
        {/* plugin js */} 
        {/* Init js */} 
        t&gt; 
        {/* App js */} 
      </div>
			


			)
	}
}