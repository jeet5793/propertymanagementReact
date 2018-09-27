import React from 'react';
import './ServiceProviderService.css';
export default class ServiceProviderService extends React.Component{
	render(){
		return(

			 <div>
       
        <div className="wrapper">
          <div className="container">
            <div className="page-title-box">
              <div className="btn-group pull-right">
                <ol className="breadcrumb hide-phone p-0 m-0">
                  <li><a href="#" data-toggle="modal" data-target="#send-request" className="btn btn-custom waves-light waves-effect w-md"><i className="fi-outbox" />&nbsp;&nbsp;Send Request</a></li>
                </ol>
              </div>
              <h4 className="page-title">Services</h4>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card-box">
                  <div className="tabs-vertical-env">
                    <div className="row">
                      <div className="col-md-2">
                        <ul className="nav tabs-vertical">
                          <li className="nav-item"> <a href="#v-requested" className="nav-link active" data-toggle="tab" aria-expanded="false">Requested</a> </li>
                          <li className="nav-item"> <a href="#v-send" className="nav-link" data-toggle="tab" aria-expanded="true">Send</a> </li>
                          <li className="nav-item"> <a href="#v-Resolve" className="nav-link" data-toggle="tab" aria-expanded="false">Resolve</a> </li>
                        </ul>
                      </div>
                      <div className="col-md-10">
                        <div className="tab-content">
                          <div className="tab-pane active" id="v-requested">
                            <div className=" table-responsive">
                              <table id className="table table-bordered datatable">
                                <thead>
                                  <tr>
                                    <th>Property Title</th>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="tbl-text-overflow">Property Title Property Title Property Title</td>
                                    <td>Tiger Nixon</td>
                                    <td>10/05/2018</td>
                                    <td>System Architect</td>
                                    <td className="text-center"><a href="#" className="table-action-btn view-rqu"><i className="mdi mdi-eye" /></a></td>
                                  </tr>
                                  <tr>
                                    <td className="tbl-text-overflow">Garrett Winters</td>
                                    <td>Garrett Winters</td>
                                    <td>10/05/2018</td>
                                    <td>Accountant</td>
                                    <td className="text-center"><a href="#" className="table-action-btn view-rqu"><i className="mdi mdi-eye" /></a></td>
                                  </tr>
                                  <tr>
                                    <td className="tbl-text-overflow">Ashton Cox</td>
                                    <td>Ashton Cox</td>
                                    <td>10/05/2018</td>
                                    <td>Junior Technical Author</td>
                                    <td className="text-center"><a href="#" className="table-action-btn view-rqu"><i className="mdi mdi-eye" /></a></td>
                                  </tr>
                                  <tr>
                                    <td className="tbl-text-overflow">Cedric Kelly</td>
                                    <td>Cedric Kelly</td>
                                    <td>10/05/2018</td>
                                    <td>Senior Javascript Developer</td>
                                    <td className="text-center"><a href="#" className="table-action-btn view-rqu"><i className="mdi mdi-eye" /></a></td>
                                  </tr>
                                  <tr>
                                    <td className="tbl-text-overflow">Airi Satou</td>
                                    <td>Airi Satou</td>
                                    <td>10/05/2018</td>
                                    <td>Accountant</td>
                                    <td className="text-center"><a href="#" className="table-action-btn view-rqu"><i className="mdi mdi-eye" /></a></td>
                                  </tr>
                                  <tr>
                                    <td className="tbl-text-overflow">Brielle Williamson</td>
                                    <td>Brielle Williamson</td>
                                    <td>10/05/2018</td>
                                    <td>Integration Specialist</td>
                                    <td className="text-center"><a href="#" className="table-action-btn view-rqu"><i className="mdi mdi-eye" /></a></td>
                                  </tr>
                                  <tr>
                                    <td className="tbl-text-overflow">Herrod Chandler</td>
                                    <td>Herrod Chandler</td>
                                    <td>10/05/2018</td>
                                    <td>Sales Assistant</td>
                                    <td className="text-center"><a href="#" className="table-action-btn view-rqu"><i className="mdi mdi-eye" /></a></td>
                                  </tr>
                                  <tr>
                                    <td className="tbl-text-overflow">Rhona Davidson</td>
                                    <td>Rhona Davidson</td>
                                    <td>10/05/2018</td>
                                    <td>Integration Specialist</td>
                                    <td className="text-center"><a href="#" className="table-action-btn view-rqu"><i className="mdi mdi-eye" /></a></td>
                                  </tr>
                                  <tr>
                                    <td className="tbl-text-overflow">Colleen Hurst</td>
                                    <td>Colleen Hurst</td>
                                    <td>10/05/2018</td>
                                    <td>Javascript Developer</td>
                                    <td className="text-center"><a href="#" className="table-action-btn view-rqu"><i className="mdi mdi-eye" /></a></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="tab-pane" id="v-send">
                            <div className=" table-responsive">
                              <table id className="table table-bordered datatable">
                                <thead>
                                  <tr>
                                    <th>Property Title</th>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="tbl-text-overflow">Property Title Property Title Property Title</td>
                                    <td>Tiger Nixon</td>
                                    <td>10/05/2018</td>
                                    <td>System Architect</td>
                                    <td className="text-center"><a href="#" className="table-action-btn view-rqu"><i className="mdi mdi-eye" /></a></td>
                                  </tr>
                                  <tr>
                                    <td className="tbl-text-overflow">Garrett Winters</td>
                                    <td>Garrett Winters</td>
                                    <td>10/05/2018</td>
                                    <td>Accountant</td>
                                    <td className="text-center"><a href="#" className="table-action-btn view-rqu"><i className="mdi mdi-eye" /></a></td>
                                  </tr>
                                  <tr>
                                    <td className="tbl-text-overflow">Ashton Cox</td>
                                    <td>Ashton Cox</td>
                                    <td>10/05/2018</td>
                                    <td>Junior Technical Author</td>
                                    <td className="text-center"><a href="#" className="table-action-btn view-rqu"><i className="mdi mdi-eye" /></a></td>
                                  </tr>
                                  <tr>
                                    <td className="tbl-text-overflow">Cedric Kelly</td>
                                    <td>Cedric Kelly</td>
                                    <td>10/05/2018</td>
                                    <td>Senior Javascript Developer</td>
                                    <td className="text-center"><a href="#" className="table-action-btn view-rqu"><i className="mdi mdi-eye" /></a></td>
                                  </tr>
                                  <tr>
                                    <td className="tbl-text-overflow">Airi Satou</td>
                                    <td>Airi Satou</td>
                                    <td>10/05/2018</td>
                                    <td>Accountant</td>
                                    <td className="text-center"><a href="#" className="table-action-btn view-rqu"><i className="mdi mdi-eye" /></a></td>
                                  </tr>
                                  <tr>
                                    <td className="tbl-text-overflow">Brielle Williamson</td>
                                    <td>Brielle Williamson</td>
                                    <td>10/05/2018</td>
                                    <td>Integration Specialist</td>
                                    <td className="text-center"><a href="#" className="table-action-btn view-rqu"><i className="mdi mdi-eye" /></a></td>
                                  </tr>
                                  <tr>
                                    <td className="tbl-text-overflow">Herrod Chandler</td>
                                    <td>Herrod Chandler</td>
                                    <td>10/05/2018</td>
                                    <td>Sales Assistant</td>
                                    <td className="text-center"><a href="#" className="table-action-btn view-rqu"><i className="mdi mdi-eye" /></a></td>
                                  </tr>
                                  <tr>
                                    <td className="tbl-text-overflow">Rhona Davidson</td>
                                    <td>Rhona Davidson</td>
                                    <td>10/05/2018</td>
                                    <td>Integration Specialist</td>
                                    <td className="text-center"><a href="#" className="table-action-btn view-rqu"><i className="mdi mdi-eye" /></a></td>
                                  </tr>
                                  <tr>
                                    <td className="tbl-text-overflow">Colleen Hurst</td>
                                    <td>Colleen Hurst</td>
                                    <td>10/05/2018</td>
                                    <td>Javascript Developer</td>
                                    <td className="text-center"><a href="#" className="table-action-btn view-rqu"><i className="mdi mdi-eye" /></a></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="tab-pane" id="v-Resolve">
                            <div className=" table-responsive">
                              <table id className="table table-bordered datatable">
                                <thead>
                                  <tr>
                                    <th>Property Title</th>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="tbl-text-overflow">Property Title Property Title Property Title</td>
                                    <td>Tiger Nixon</td>
                                    <td>10/05/2018</td>
                                    <td>System Architect</td>
                                    <td className="text-center"><a href="#" className="table-action-btn view-rqu"><i className="mdi mdi-eye" /></a></td>
                                  </tr>
                                  <tr>
                                    <td className="tbl-text-overflow">Garrett Winters</td>
                                    <td>Garrett Winters</td>
                                    <td>10/05/2018</td>
                                    <td>Accountant</td>
                                    <td className="text-center"><a href="#" className="table-action-btn view-rqu"><i className="mdi mdi-eye" /></a></td>
                                  </tr>
                                  <tr>
                                    <td className="tbl-text-overflow">Ashton Cox</td>
                                    <td>Ashton Cox</td>
                                    <td>10/05/2018</td>
                                    <td>Junior Technical Author</td>
                                    <td className="text-center"><a href="#" className="table-action-btn view-rqu"><i className="mdi mdi-eye" /></a></td>
                                  </tr>
                                  <tr>
                                    <td className="tbl-text-overflow">Cedric Kelly</td>
                                    <td>Cedric Kelly</td>
                                    <td>10/05/2018</td>
                                    <td>Senior Javascript Developer</td>
                                    <td className="text-center"><a href="#" className="table-action-btn view-rqu"><i className="mdi mdi-eye" /></a></td>
                                  </tr>
                                  <tr>
                                    <td className="tbl-text-overflow">Airi Satou</td>
                                    <td>Airi Satou</td>
                                    <td>10/05/2018</td>
                                    <td>Accountant</td>
                                    <td className="text-center"><a href="#" className="table-action-btn view-rqu"><i className="mdi mdi-eye" /></a></td>
                                  </tr>
                                  <tr>
                                    <td className="tbl-text-overflow">Brielle Williamson</td>
                                    <td>Brielle Williamson</td>
                                    <td>10/05/2018</td>
                                    <td>Integration Specialist</td>
                                    <td className="text-center"><a href="#" className="table-action-btn view-rqu"><i className="mdi mdi-eye" /></a></td>
                                  </tr>
                                  <tr>
                                    <td className="tbl-text-overflow">Herrod Chandler</td>
                                    <td>Herrod Chandler</td>
                                    <td>10/05/2018</td>
                                    <td>Sales Assistant</td>
                                    <td className="text-center"><a href="#" className="table-action-btn view-rqu"><i className="mdi mdi-eye" /></a></td>
                                  </tr>
                                  <tr>
                                    <td className="tbl-text-overflow">Rhona Davidson</td>
                                    <td>Rhona Davidson</td>
                                    <td>10/05/2018</td>
                                    <td>Integration Specialist</td>
                                    <td className="text-center"><a href="#" className="table-action-btn view-rqu"><i className="mdi mdi-eye" /></a></td>
                                  </tr>
                                  <tr>
                                    <td className="tbl-text-overflow">Colleen Hurst</td>
                                    <td>Colleen Hurst</td>
                                    <td>10/05/2018</td>
                                    <td>Javascript Developer</td>
                                    <td className="text-center"><a href="#" className="table-action-btn view-rqu"><i className="mdi mdi-eye" /></a></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end row */}
              <div className="view-reslt" style={{display: 'none'}}>
                <div className="row">
                  <div className="col-12">
                    <div className="card-box">
                      <h4 className="m-t-0 header-title">Service Details From Tenant</h4>
                      <div className="search-item">
                        <div className="media">
                          <img className="d-flex mr-3 rounded-circle" src="assets/images/users/avatar-1.jpg" alt="Generic placeholder image" height={54} />
                          <div className="media-body">
                            <h5 className="media-heading">
                              <a href="#" className="text-dark">Chadengle</a>
                            </h5>
                            <p className="m-b-5 font-14">
                              <span> <b>Status:</b>
                                <span>Pending</span>
                              </span>
                              <span>|</span>
                              <span>
                                <b>Requested Date:</b>
                                <span>09-05-2018</span>
                              </span>
                              <span>|</span>
                              <span>
                                <b>Resolve Date:</b>
                                <span>10-05-2018</span>
                              </span>
                            </p>
                            <p className="m-b-5 font-14">
                              <b>Property Title:</b>
                              <span className="text-muted">Cras sit amet nibh libero</span>
                            </p>
                            <p className="font-14">
                              <b>Discription:</b>
                              <br />
                              <span className="text-muted">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</span>
                            </p>
                            <p className="m-b-0">
                            </p><ul className="serv-fil-down">
                              <li><a href><span>File Name</span>&nbsp; <i className="fi fi-inbox m-r-5" /> </a></li>
                              <li><a href><span>File Name</span>&nbsp; <i className="fi fi-inbox m-r-5" /> </a></li>
                            </ul>
                            <p />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end row */} 
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
          <div id="send-request" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: 'none'}}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                  <h4 className="modal-title">Send Request</h4>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="field-1" className="control-label">Select </label>
                        <select className="form-control">
                          <option />
                          <option />
                          <option />
                          <option />
                        </select>
                      </div>
                    </div>
                  </div>     
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group no-margin">
                        <label htmlFor="field-7" className="control-label">Description</label>
                        <textarea className="form-control" id="field-7" placeholder defaultValue={""} />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input type="file" id="u" placeholder />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-success waves-effect waves-light">Save changes</button>
                </div>
              </div>
            </div>
          </div>
          {/* jQuery  */} 
          {/* Tether for Bootstrap */} 
          {/* Required datatable js */} 
          {/* Responsive examples */} 
          {/* App js */} 
        </div></div>
			


			)
	}
}