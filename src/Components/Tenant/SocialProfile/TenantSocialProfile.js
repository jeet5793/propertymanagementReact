import React from 'react'

class TenantSocialProfile extends React.Component {
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
                                <h5 className="text-overflow"><small>Hi,Owner Name</small> </h5>
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
                    <div className="profile-save">
                    <div className="navbar-custom">
                    </div>
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
                            <div className="col-md-2" />
                            <div className="col-md-8">
                            <div className="card-box widget-box-four">
                                {/* BEGIN LOGIN FORM */}
                                <form id="login_form" className="login-form" action="#" method="post">
                                <div className="form-group">
                                    <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                        <input className="form-control form-control-solid placeholder-no-fix" type="text" autoComplete="off" placeholder="First Name" name id />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                        <input className="form-control form-control-solid placeholder-no-fix" type="text" autoComplete="off" placeholder="Last Name" name id />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                        <input className="form-control form-control-solid placeholder-no-fix" type="text" autoComplete="off" placeholder="Email" name id />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                        <div className="col-md-12">
                                            <div className="row">
                                            <div className="col-md-6">
                                                <div className="radio radio-custom" style={{marginTop: 6}}>
                                                <input type="radio" name="radio" id="radioind" defaultValue="option2" />
                                                <label htmlFor="radioind"> Individual </label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="radio radio-custom" style={{marginTop: 6}}>
                                                <input type="radio" name="radio" id="radioorg" defaultValue="orgnaize" />
                                                <label htmlFor="radioorg"> Organize </label>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="orgnaize box" style={{display: 'none'}}>
                                    <div className="form-group">
                                    <div className="row">
                                        <div className="col-md-6">
                                        <input className="form-control form-control-solid placeholder-no-fix" type="text" autoComplete="off" placeholder="Company Name" name id />
                                        </div>
                                        <div className="col-md-6">
                                        <input className="form-control form-control-solid placeholder-no-fix" type="text" autoComplete="off" placeholder="Website URL" name id />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                        <input className="form-control form-control-solid placeholder-no-fix" type="password" autoComplete="off" placeholder="Password" name id />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                        <input className="form-control form-control-solid placeholder-no-fix" type="password" autoComplete="off" placeholder="Confirm Password" name id />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                        <select className="form-control form-control-solid placeholder-no-fix">
                                            <option>Select City</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                        <select className="form-control form-control-solid placeholder-no-fix">
                                            <option>Select State</option>
                                        </select>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                    <div className="col-md-6">
                                        <select className="form-control form-control-solid placeholder-no-fix">
                                        <option>Select Country</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                        <input className="form-control form-control-solid placeholder-no-fix" type="text" autoComplete="off" placeholder="ZIP Code" name id />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                        <input className="form-control form-control-solid placeholder-no-fix" type="text" autoComplete="off" placeholder="Mobile" name id />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                        <input className="form-control form-control-solid placeholder-no-fix" type="text" autoComplete="off" placeholder="Landline" name id />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-xs-12 text-center">
                                    <button type="button" className="btn btn-success uppercase" onclick>Save</button>
                                </div>
                                </form>
                                {/* END LOGIN FORM */} 
                            </div>
                            </div>
                            <div className="col-md-2" />
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
                {/* jQuery  */} 
                {/* Tether for Bootstrap */} 
                {/* Counter js  */} 
                {/* App js */} 
            </div>
        )
    }
}  

export default TenantSocialProfile;