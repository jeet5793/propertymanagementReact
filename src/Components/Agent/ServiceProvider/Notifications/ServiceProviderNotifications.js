import React from 'react';
import './ServiceProviderNotifications.css';
export default class ServiceProviderNotifications extends React.Component{
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
                        <h5 className="text-overflow"><small>Hi,Agent Name</small> </h5>
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
                  <li> <a href="profile.html"><i className="fi-air-play" />Profile</a> </li>
                  <li> <a href="service.html"><i className="fi-tag " />Services</a> </li>
                  <li> <a href="users.html"><i className="fi-head " />Users</a> </li>
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
            <div className="page-title-box">
              <div className="btn-group pull-right">
                <ol className="breadcrumb hide-phone p-0 m-0">
                  <li><a href="#" data-toggle="modal" data-target="#con-close-modal" className="btn btn-success waves-light waves-effect w-md"><i className="fi-bell" />&nbsp;&nbsp;Send Notification</a></li>
                </ol>
              </div>
              <h4 className="page-title">Notifications</h4>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card-box">
                  <div className="timeline timeline-left">
                    <article className="timeline-item alt">
                      <div className="text-left">
                        <div className="time-show first"> <a href="#" className="btn btn-primary w-lg">Today</a> </div>
                      </div>
                    </article>
                    <article className="timeline-item">
                      <div className="timeline-desk">
                        <div className="panel">
                          <div className="timeline-box"> <span className="arrow" /> <span className="timeline-icon"><i className="mdi mdi-checkbox-blank-circle-outline" /></span>
                            <h4 className>Assets Watch</h4>
                            <p className="timeline-date text-muted"><small>09-05-2018, 08:25 am</small></p>
                            <p>Dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? </p>
                            <a href="#" className="delete-nitifi"><i className="fa fa-trash m-r-5" /></a>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article className="timeline-item ">
                      <div className="timeline-desk">
                        <div className="panel">
                          <div className="timeline-box"> <span className="arrow" /> <span className="timeline-icon"><i className="mdi mdi-checkbox-blank-circle-outline" /></span>
                            <h4 className>Tenant Name</h4>
                            <p className="timeline-date text-muted"><small>09-05-2018, 08:25 am</small></p>
                            <p>consectetur adipisicing elit. Iusto, optio, dolorum <a href="#">John deon</a> provident rerum aut hic quasi placeat iure tempora laudantium </p>
                            <a href="#" className="delete-nitifi"><i className="fa fa-trash m-r-5" /></a>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article className="timeline-item">
                      <div className="timeline-desk">
                        <div className="panel">
                          <div className="timeline-box"> <span className="arrow" /> <span className="timeline-icon"><i className="mdi mdi-checkbox-blank-circle-outline" /></span>
                            <h4 className>Owner Name</h4>
                            <p className="timeline-date text-muted"><small>09-05-2018, 08:25 am</small></p>
                            <p>Outdoor visit at California State Route 85 with John Boltana &amp;
                              Harry Piterson regarding to setup a new show room.</p>
                            <a href="#" className="delete-nitifi"><i className="fa fa-trash m-r-5" /></a>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article className="timeline-item">
                      <div className="timeline-desk">
                        <div className="panel">
                          <div className="timeline-box"> <span className="arrow" /> <span className="timeline-icon"><i className="mdi mdi-checkbox-blank-circle-outline" /></span>
                            <h4 className>Owner Name</h4>
                            <p className="timeline-date text-muted"><small>09-05-2018, 08:25 am</small></p>
                            <p>Jonatha Smith added new milestone <span><a href="#">Pathek</a></span> Lorem ipsum dolor sit amet consiquest dio</p>
                            <a href="#" className="delete-nitifi"><i className="fa fa-trash m-r-5" /></a>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  {/* end timeline */} 
                </div>
                {/* end card-box */} 
              </div>
              {/* end col */} 
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
        <div id="con-close-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: 'none'}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 className="modal-title">Send Nitification</h4>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="field-1" className="control-label">Select To</label>
                      <select className="form-control">
                        <option />
                        <option>Owner</option>
                        <option>Agent</option>
                        <option>Tenant</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="field-3" className="control-label">Find Name</label>
                      <input type="text" className="form-control" id="field-3" placeholder />
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
                <button type="button" className="btn btn-success waves-effect waves-light">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        {/* jQuery  */} 
        {/* Tether for Bootstrap */} 
        {/* App js */} 
      </div>
			


			)
	}
}