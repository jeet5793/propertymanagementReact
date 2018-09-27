import React from "react"
// import img1 from"../../../images/logo-white.png"
import $ from "jquery"
import RegistrationForm from "./RegistrationForm"

export default class Registration extends React.Component {
  registerNow() {

  }
  componentDidMount() {
    setTimeout(function () { $('#tzloadding').remove(); }, 2000)
    $('html, body').animate({ scrollTop: 0 }, 1500);
  }
  render() {
    return (
      <div>
        <link rel='stylesheet' href='../css/fonts.css' media='all' />
        <link rel='stylesheet' href='../css/comp-main.css' type='text/css' media='all' />
        <link rel='stylesheet' href='../css/custom-main.css' type='text/css' media='all' />
        <script type='text/javascript' src='../js/jquery.js'></script>
        <script type='text/javascript' src='../js/jquery/jquery-migrate.min.js'></script>
        <script type='text/javascript' src='../js/main.min.js'></script>
        <div className="tz-Breadcrumb">
          <div className="tzOverlayBreadcrumb">
            <div className="container">
              <h1> Register </h1>
              <div className="tz-breadcrumb-navxt">
                {/*<!--Breadcrumbs--> */}
                {/*<!-- Breadcrumb NavXT 6.0.4 --> */}

              </div>
            </div>
            {/*<!-- end class container --> */}

          </div>
        </div>
        {/*<!-- end class tzbreadcrumb -->*/}
        <div className="container">
          <div className="tz_page_content">
            <div className="post-1083 page type-page status-publish hentry">
              <div id="login-2" className="bootstrap-wrapper tz-login">
                <div className="menu-toggler sidebar-toggler" />
                {/*<!-- END SIDEBAR TOGGLER BUTTON --> 
          <!-- BEGIN LOGO -->          
          <!-- END LOGO --> 
          <!-- BEGIN LOGIN -->*/}
                <div className="col-md-8 col-md-offset-2">
                  <div className="content">
                    {/*<!-- BEGIN LOGIN FORM -->*/}
                    <RegistrationForm history={this.props.history} />

                    {/*<!-- END LOGIN FORM --> */}
                  </div>
                </div>
              </div>
            </div>
            {/*<!--    Comments    --> */}
            {/*<!--    End-Comments    --> */}
          </div>
        </div>

        {/*<!--end class tz-footer--> */}
      </div>
    );
  }
}