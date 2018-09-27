import React from 'react'

class TenantOwnerProfile extends React.Component {
    render() {
        return (
            <div>
            {/* Navigation Bar*/}
            <header id="topnav">
            <div className="topbar-main">
                <div className="container"> 
                {/* Logo container*/}
                <div className="logo"> 
                    {/* Text Logo */} 
                    {/*<a href="index.html" class="logo">*/} 
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
                    <li> <a href="profile.html"><i className="fi-air-play" />Profile</a> </li>
                    <li> <a href="agreement.html"><i className="fi-paper" />Agreement</a> </li>
                    <li> <a href="my-property.html"><i className="fi-box" />My Property</a> </li>
                    <li> <a href="service.html"><i className="fi-tag " />Services</a> </li>
                    <li> <a href="payment.html"><i className="fi-briefcase " />Payments</a> </li>
                    <li className="has-submenu active"> <a href="owner.html"><i className="fi-head " />Owner</a> </li>
                    <li> <a href="agent.html"><i className="fi-head " />Agent</a> </li>
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
                    <li><a href="owner.html" className="btn waves-light waves-effect w-md btn-custom"><i className="fi-reply" />&nbsp;&nbsp;Back</a></li>
                    </ol>
                </div>
                <h4 className="page-title">Owners</h4>
                </div>
                {/* end page title end breadcrumb */}
                <div className="row">
                <div className="col-md-12 col-lg-12 second-profiles-details">
                    <div className="card-box">
                    <div className="col-md-12">
                        <div className="row">
                        <div className="col-md-8"> <span className="pull-left m-r-15"><img src="assets/images/users/avatar-1.jpg" alt className="second-profiles rounded-circle" /></span>
                            <div className="details-dec ">
                            <h4 className="m-t-5 m-b-5 font-18 ellipsis">Owner 01</h4>
                            <p className="font-13 m-b-3"> Owner Profile</p>
                            <p className="text-muted m-b-3"><i className="icon-phone" />&nbsp; 09999999999</p>
                            <p className="text-muted m-b-3 "><i className="icon-envelope" />&nbsp; owner@info.com</p>
                            <p className="text-muted m-b-3"><i className="icon-location-pin" />&nbsp; #0, 22nd Floor, 27th main, #0, 22nd Floor, 27th main</p>
                            <div className="count">
                                <ul>
                                <li> <span>40</span>
                                    <p>Owners</p>
                                </li>
                                <li> <span>40</span>
                                    <p>Agents</p>
                                </li>
                                <li> <span>40</span>
                                    <p>Owners</p>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <ul className="social-links list-inline m-t-20 m-b-0">
                            <li className="list-inline-item"> <a title data-placement="top" data-toggle="tooltip" className="tooltips" href data-original-title="Facebook"><i className="fa fa-facebook" /></a> </li>
                            <li className="list-inline-item"> <a title data-placement="top" data-toggle="tooltip" className="tooltips" href data-original-title="Twitter"><i className="fa fa-twitter" /></a> </li>
                            <li className="list-inline-item"> <a title data-placement="top" data-toggle="tooltip" className="tooltips" href data-original-title="Skype"><i className="fa fa-skype" /></a> </li>
                            </ul>
                            <a href="#" data-toggle="modal" data-target="#send-msg" className="btn waves-light waves-effect w-md btn-custom m-t-30	"><i className="fi-mail" />&nbsp;&nbsp;Send Message</a> </div>
                        </div>
                    </div>
                    <hr />
                    <div className="col-md-12">
                        <div className="row">
                        <div className="col-md-8">
                            <h4>About:</h4>
                            <p>Suspendisse vel quam malesuada, aliquet sem sit amet, fringilla elit. Morbi tempor tincidunt tempor. Etiam id turpis viverra, vulputate sapien nec, varius sem. Curabitur ullamcorper fringilla eleifend. In ut eros hendrerit est consequat posuere et at velit.</p>
                        </div>
                        </div>
                    </div>
                    </div>
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
                <div className="col-12 text-center"> © 2018 Assets Watch. All Rights Reserved</div>
                </div>
            </div>
            </footer>
            {/* End Footer */}
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
            {/* Sparkline charts */} 
            {/* App js */} 
            </div>
        )
    }
}  

export default TenantOwnerProfile;