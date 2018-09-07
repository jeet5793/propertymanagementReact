import React from 'react'

export default class TenantProfile extends React.Component {

  render(){
    return(
    <div>
        {/* Navigation Bar*/}
        <header id="topnav">
          <div className="topbar-main">
            <div className="container">
              {/* Logo container*/}
              <div className="logo">
                {/* Text Logo */}
                {/*<a href="index.html" class="logo">*/}
                {/*Adminox*/}
                {/*</a>*/}
                {/* Image Logo */}
                <a href="index.html" className="logo"> <img src="assets/images/logo_dark.png" alt className="logo-lg" /> <img src="assets/images/logo_sm.png" alt className="logo-sm" /> </a> </div>
              {/* End Logo container*/}
              <div className="menu-extras topbar-custom">
                <ul className="list-inline float-right mb-0">
                  <li className="menu-item list-inline-item">
                    {/* Mobile menu toggle*/}
                    <a className="navbar-toggle nav-link">
                      <div className="lines"> <span /> <span /> <span /> </div>
                    </a>
                    {/* End mobile menu toggle*/}
                  </li>
                  <li className="list-inline-item">
                    <button type="button" className="btn btn-warning waves-effect w-md waves-light">Upgrade Plan</button>
                  </li>
                  <li className="list-inline-item dropdown notification-list"> <a className="nav-link dropdown-toggle arrow-none waves-light waves-effect" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false"> <i className="dripicons-bell noti-icon" /> <span className="badge badge-pink noti-icon-badge">4</span> </a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-arrow dropdown-lg" aria-labelledby="Preview">
                      {/* item*/}
                      <div className="dropdown-item noti-title">
                        <h5><span className="badge badge-danger float-right">5</span>Notification</h5>
                      </div>
                      {/* item*/}
                      <a href="javascript:void(0);" className="dropdown-item notify-item">
                        <div className="notify-icon bg-success"><i className="icon-bubble" /></div>
                        <p className="notify-details">Robert S. Taylor commented on Admin<small className="text-muted">1 min ago</small></p>
                      </a>
                      {/* item*/}
                      <a href="javascript:void(0);" className="dropdown-item notify-item">
                        <div className="notify-icon bg-info"><i className="icon-user" /></div>
                        <p className="notify-details">New user registered.<small className="text-muted">1 min ago</small></p>
                      </a>
                      {/* item*/}
                      <a href="javascript:void(0);" className="dropdown-item notify-item">
                        <div className="notify-icon bg-danger"><i className="icon-like" /></div>
                        <p className="notify-details">Carlos Crouch liked <b>Admin</b><small className="text-muted">1 min ago</small></p>
                      </a>
                      {/* All*/}
                      <a href="notifications.html" className="dropdown-item notify-item notify-all"> View All </a> </div>
                  </li>
                  <li className="list-inline-item dropdown notification-list"> <a className="nav-link dropdown-toggle waves-effect waves-light nav-user" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false"> <img src="assets/images/users/avatar-1.jpg" alt="user" className="rounded-circle" /><span className="profile-name">Profile Name</span> </a>
                    <div className="dropdown-menu dropdown-menu-right profile-dropdown " aria-labelledby="Preview">
                      {/* item*/}
                      <div className="dropdown-item noti-title">
                        <h5 className="text-overflow"><small>Hi,Tenant Name</small> </h5>
                      </div>
                      {/* item*/}
                      <a href="javascript:void(0);" className="dropdown-item notify-item"> <i className="dripicons-user" /> <span>Profile</span> </a>
                      {/* item*/}
                      <a href="javascript:void(0);" className="dropdown-item notify-item"> <i className="dripicons-gear" /> <span>Settings</span> </a>
                      {/* item*/}
                      <a href="javascript:void(0);" className="dropdown-item notify-item"> <i className="dripicons-power" /> <span>Logout</span> </a> </div>
                  </li>
                </ul>
              </div>
              {/* end menu-extras */}
              <div className="clearfix" />
            </div>
            {/* end container */}
          </div>
          {/* end topbar-main */}
          <div className="navbar-custom">
            <div className="container">
              <div id="navigation">
                {/* Navigation Menu*/}
                <ul className="navigation-menu">
                  <li className="has-submenu active"> <a href="profile.html"><i className="fi-air-play" />Profile</a> </li>
                  <li> <a href="agreement.html"><i className="fi-paper" />Agreement</a> </li>
                  <li> <a href="my-property.html"><i className="fi-box" />My Property</a> </li>
                  <li> <a href="service.html"><i className="fi-tag " />Services</a> </li>
                  <li> <a href="payment.html"><i className="fi-briefcase " />Payments</a> </li>
                  <li> <a href="" onClick={()=>{this.props.history.push('/ownerprofile')}}><i className="fi-head " />Owner</a> </li>
                  <li> <a href="" onClick={()=>{this.props.history.push('/tenantprofile')}}><i className="fi-head " />Agent</a> </li>
                  <li> <a href="settings.html"><i className="fi-cog " />Settings</a> </li>
                </ul>
                {/* End navigation menu */}
              </div>
              {/* end #navigation */}
            </div>
            {/* end container */}
          </div>
          {/* end navbar-custom */}
        </header>
        {/* End Navigation Bar*/}
        <div className="wrapper">
          <div className="container">
            {/* end page title end breadcrumb */}
            <div className="row">
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="profile-user-box"> <span className="pull-left m-r-15"><img src="assets/images/users/avatar-1.jpg" alt className="thumb-lg rounded-circle" /></span>
                      <div className="media-body">
                        <h4 className="m-t-5 m-b-5 font-18 ellipsis">Michael A. Franklin</h4>
                        <p className="font-13"> User Experience Specialist</p>
                        <p className="text-muted m-b-0"><small>California, United States</small></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-sm-3">
                        <div className="card-box widget-box-four">
                          <div id="dashboard-1" className="widget-box-four-chart" />
                          <div className="wigdet-four-content">
                            <h4 className="m-t-0 font-18 m-b-5" title="Property">Property</h4>
                            <h3 className="m-b-0 m-t-35"><span>10</span> <span data-plugin="counterup" className="profile-icon"><i className="fi-box" /></span></h3>
                          </div>
                          <div className="clearfix" />
                        </div>
                      </div>
                      {/* end col */}
                      <div className="col-sm-3">
                        <div className="card-box widget-box-four">
                          <div id="dashboard-2" className="widget-box-four-chart" />
                          <div className="wigdet-four-content">
                            <h4 className="m-t-0 font-18 m-b-5" title="Owner">Owner</h4>
                            <h3 className="m-b-0 m-t-35"><span>0</span> <span data-plugin="counterup" className="profile-icon"><i className="fi-head " /></span></h3>
                          </div>
                          <div className="clearfix" />
                        </div>
                      </div>
                      {/* end col */}
                      <div className="col-sm-3">
                        <div className="card-box widget-box-four">
                          <div id="dashboard-3" className="widget-box-four-chart" />
                          <div className="wigdet-four-content">
                            <h4 className="m-t-0 font-18 m-b-5" title="Agent">Agent</h4>
                            <h3 className="m-b-0 m-t-35"><span>0</span> <span data-plugin="counterup" className="profile-icon"><i className="fi-head " /></span></h3>
                          </div>
                          <div className="clearfix" />
                        </div>
                      </div>
                      {/* end col */}
                      <div className="col-sm-3">
                        <div className="card-box widget-box-four">
                          <div id="dashboard-3" className="widget-box-four-chart" />
                          <div className="wigdet-four-content">
                            <h4 className="m-t-0 font-18 m-b-5" title="Agreement">Agreement</h4>
                            <h3 className="m-b-0 m-t-35"><span>0</span> <span data-plugin="counterup" className="profile-icon"><i className="fi-paper" /></span></h3>
                          </div>
                          <div className="clearfix" />
                        </div>
                      </div>
                      {/* end col */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end row */}
            <div className="row">
              <div className="col-md-4">
                {/* Personal-Information */}
                <div className="card-box">
                  <h4 className="header-title mt-0 m-b-20">Personal Information</h4>
                  <div className="panel-body">
                    <p className="text-muted font-13"> Hye, I’m Johnathan Doe residing in this beautiful world. I create websites and mobile apps with great UX and UI design. I have done work with big companies like Nokia, Google and Yahoo. Meet me or Contact me for any queries. One Extra line for filling space. Fill as many you want. </p>
                    <hr />
                    <div className="text-left">
                      <p className="text-muted font-13"><strong>Full Name :</strong> <span className="m-l-15">Johnathan Deo</span></p>
                      <p className="text-muted font-13"><strong>Mobile :</strong><span className="m-l-15">(+12) 123 1234 567</span></p>
                      <p className="text-muted font-13"><strong>Email :</strong> <span className="m-l-15">coderthemes@gmail.com</span></p>
                      <p className="text-muted font-13"><strong>Location :</strong> <span className="m-l-15">USA</span></p>
                    </div>
                    <ul className="social-links list-inline m-t-20 m-b-0">
                      <li className="list-inline-item"> <a title data-placement="top" data-toggle="tooltip" className="tooltips" href data-original-title="Facebook"><i className="fa fa-facebook" /></a> </li>
                      <li className="list-inline-item"> <a title data-placement="top" data-toggle="tooltip" className="tooltips" href data-original-title="Twitter"><i className="fa fa-twitter" /></a> </li>
                      <li className="list-inline-item"> <a title data-placement="top" data-toggle="tooltip" className="tooltips" href data-original-title="Skype"><i className="fa fa-skype" /></a> </li>
                    </ul>
                  </div>
                </div>
                {/* Personal-Information */}
              </div>
              <div className="col-md-8">
                <div className="card-box">
                  <h4 className="mt-0">Recent Owner Contact</h4>
                  <div className="table-responsive">
                    <table className="table table-hover m-0 table-actions-bar">
                      <thead>
                        <tr>
                          <th> </th>
                          <th>Name</th>
                          <th>Location</th>
                          <th>Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><img src="assets/images/users/avatar-2.jpg" alt="contact-img" title="contact-img" className="rounded-circle thumb-sm" /></td>
                          <td><h5 className="m-b-0 m-t-0 font-600">Tomaslau</h5></td>
                          <td><i className="mdi mdi-map-marker text-primary" /> New York </td>
                          <td>23/02/2018 </td>
                          <td><a href="#" className="table-action-btn"><i className="mdi mdi-eye" /></a></td>
                        </tr>
                        <tr>
                          <td><img src="assets/images/users/avatar-3.jpg" alt="contact-img" title="contact-img" className="rounded-circle thumb-sm" /></td>
                          <td><h5 className="m-b-0 m-t-0 font-600">Erwin E. Brown</h5></td>
                          <td><i className="mdi mdi-map-marker text-primary" /> California </td>
                          <td>23/02/2018 </td>
                          <td><a href="#" className="table-action-btn"><i className="mdi mdi-eye" /></a></td>
                        </tr>
                        <tr>
                          <td><img src="assets/images/users/avatar-4.jpg" alt="contact-img" title="contact-img" className="rounded-circle thumb-sm" /></td>
                          <td><h5 className="m-b-0 m-t-0 font-600">Margeret V. Ligon</h5></td>
                          <td><i className="mdi mdi-map-marker text-primary" /> New York </td>
                          <td>23/02/2018 </td>
                          <td><a href="#" className="table-action-btn"><i className="mdi mdi-eye" /></a></td>
                        </tr>
                        <tr>
                          <td><img src="assets/images/users/avatar-5.jpg" alt="contact-img" title="contact-img" className="rounded-circle thumb-sm" /></td>
                          <td><h5 className="m-b-0 m-t-0 font-600">Jose D. Delacruz</h5></td>
                          <td><i className="mdi mdi-map-marker text-primary" /> New York </td>
                          <td>23/02/2018 </td>
                          <td><a href="#" className="table-action-btn"><i className="mdi mdi-eye" /></a></td>
                        </tr>
                        <tr>
                          <td><img src="assets/images/users/avatar-8.jpg" alt="contact-img" title="contact-img" className="rounded-circle thumb-sm" /></td>
                          <td><h5 className="m-b-0 m-t-0 font-600">Luke J. Sain</h5></td>
                          <td><i className="mdi mdi-map-marker text-primary" /> Australia </td>
                          <td>23/02/2018 </td>
                          <td><a href="#" className="table-action-btn"><i className="mdi mdi-eye" /></a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                {/* Personal-Information */}
                <div className="card-box">
                  <h4 className="header-title mt-0 m-b-20">Recent Added Property</h4>
                  <div className="panel-body"> <img id="single-image" src="assets/images/small/img-1.jpg" alt="image-1" className="img-fluid" />
                    <hr />
                    <p className="text-muted font-13">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </p>
                    <a className="btn btn-custom waves-light waves-effect w-md">View</a> </div>
                </div>
                {/* Personal-Information */}
              </div>
              <div className="col-md-8">
                <div className="card-box">
                  <h4 className="mt-0">Recent Agent Contact</h4>
                  <div className="table-responsive">
                    <table className="table table-hover m-0 table-actions-bar">
                      <thead>
                        <tr>
                          <th> </th>
                          <th>Name</th>
                          <th>Location</th>
                          <th>Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><img src="assets/images/users/avatar-2.jpg" alt="contact-img" title="contact-img" className="rounded-circle thumb-sm" /></td>
                          <td><h5 className="m-b-0 m-t-0 font-600">Tomaslau</h5></td>
                          <td><i className="mdi mdi-map-marker text-primary" /> New York </td>
                          <td>23/02/2018 </td>
                          <td><a href="#" className="table-action-btn"><i className="mdi mdi-eye" /></a></td>
                        </tr>
                        <tr>
                          <td><img src="assets/images/users/avatar-3.jpg" alt="contact-img" title="contact-img" className="rounded-circle thumb-sm" /></td>
                          <td><h5 className="m-b-0 m-t-0 font-600">Erwin E. Brown</h5></td>
                          <td><i className="mdi mdi-map-marker text-primary" /> California </td>
                          <td>23/02/2018 </td>
                          <td><a href="#" className="table-action-btn"><i className="mdi mdi-eye" /></a></td>
                        </tr>
                        <tr>
                          <td><img src="assets/images/users/avatar-4.jpg" alt="contact-img" title="contact-img" className="rounded-circle thumb-sm" /></td>
                          <td><h5 className="m-b-0 m-t-0 font-600">Margeret V. Ligon</h5></td>
                          <td><i className="mdi mdi-map-marker text-primary" /> New York </td>
                          <td>23/02/2018 </td>
                          <td><a href="#" className="table-action-btn"><i className="mdi mdi-eye" /></a></td>
                        </tr>
                        <tr>
                          <td><img src="assets/images/users/avatar-5.jpg" alt="contact-img" title="contact-img" className="rounded-circle thumb-sm" /></td>
                          <td><h5 className="m-b-0 m-t-0 font-600">Jose D. Delacruz</h5></td>
                          <td><i className="mdi mdi-map-marker text-primary" /> New York </td>
                          <td>23/02/2018 </td>
                          <td><a href="#" className="table-action-btn"><i className="mdi mdi-eye" /></a></td>
                        </tr>
                        <tr>
                          <td><img src="assets/images/users/avatar-8.jpg" alt="contact-img" title="contact-img" className="rounded-circle thumb-sm" /></td>
                          <td><h5 className="m-b-0 m-t-0 font-600">Luke J. Sain</h5></td>
                          <td><i className="mdi mdi-map-marker text-primary" /> Australia </td>
                          <td>23/02/2018 </td>
                          <td><a href="#" className="table-action-btn"><i className="mdi mdi-eye" /></a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* end col */}
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
        {/* jQuery  */}
        {/* Tether for Bootstrap */}
        {/* Counter js  */}
        {/* App js */}
      </div>

    )
  }
}
