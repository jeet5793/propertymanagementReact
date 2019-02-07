import React, { Component } from 'react';
//jomin-start
import DashBoardIndex from './Components/index/DashBoardIndex';
import { connect } from 'react-redux';
import { setUser } from './actions';
import OwnerProfile from './Components/Owner/Profile/profile';
import UserDashboard from './Components/Owner/UserDashboard/index';
import AgentBrokerDashboard from './Components/Agent/Broker/BrokerDashBoard/broker';
import AgentServiceProviderDashboard from './Components/Agent/ServiceProvider/ServiceProviderDashboard/serviceprovider';
import TenantDashboard from './Components/Tenant/UserDashboard/Tenant';
// jomin-end

import loading_blue from './images/loading_blue_64x64.gif'
import Home from './Components/index/Home/Home'
import Footer from './Components/index/footer/footer'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Aboutus from './Components/index/AboutUs/aboutus'
import Property from './Components/index/Property/property'
import Blog from './Components/index/Blogs/Blogs'
import BlogDetails from './Components/index/Blogs/BlogsDetails'
import Plans from './Components/index/Plans/Plans'
import ContactUs from './Components/index/ContactUs/Contactus'
import Regisgtration from './Components/index/Registration/Registration'
import PlanPayment from './Components/index/Registration/Payment'
import PlansReg from './Components/index/Plans/PlanAfterReg'
import ResetPassword from './Components/index/ResetPassword/ResetPassword'
import PrivacyPlans from './Components/index/PrivacyAndPolicy/privacyPolicy'
import TermsCondition from './Components/index/TermsAndCondotion/TermsCondition'

//Phase2
import OwnerPayment1 from './Components/Owner/Payment/payment'
import OwnerHeader from './Components/Owner/Header/Header'
// import Footer from './Components/Owner/Footer/Footer'

 import OwnerAgreement from './Components/Owner/Agreement/OwnerAgreement1'
import OwnerProperty from './Components/Owner/Property/Property'
import OwnerService from './Components/Owner/Service/Service'
import OwnerSettings from './Components/Owner/Settings/Settings'
import OwnerAgent from './Components/Owner/Agent/Agent'
import OwnerTenant from './Components/Owner/Tenants/Tenants'
// import OwnerTenanprofilet from './Components/Owner/Tenants/tenantProfile'
// './Components/Owner/Tenants/tanetProfile'
import OwnerAddproperty from './Components/Owner/Property/addProperty'
import OwnerTenantProfileDetails from './Components/Owner/Tenants/ProfileDetails'
import OwnerAgentprofile from './Components/Owner/Agent/ProfileDetails'
// import UnderConstruction from './Components/underconstruction'
import FooterOwner from './Components/Owner/Footer/Footer'
import NoMatch from './Components/Owner/NoMatch'

import { loadFile, removejscssfile } from './Components/js/external'
import Cookies from 'js-cookie';

const MINUTES_UNITL_AUTO_LOGOUT = 1 // in mins
const CHECK_INTERVAL = 15000 // in ms
const STORE_KEY =  'lastAction';
 
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // location: '/index',
      couter: 0,
      user: {
        isLoggedIn: true
      },
      loading: false,
      userData:Cookies.get('profile_data')
    };
    this.homePaths = ["/", "/Home", "/index", "/AboutUs", "/aboutus", "about", "/property", "/properties", "/blog", "/blog-detail", "/plans", "/contact", "/contactus", "/registration", "/register", "/property-detail", "/register-plans",  "/privacy-policy", "/terms-condition","/social","password-reset"]
    this.FtrCheck = this.FtrCheck.bind(this)
    this.LoggedIn = this.LoggedIn.bind(this)
    this.updateProfileInfo = this.updateProfileInfo.bind(this)
    this.logOut = this.logOut.bind(this)
    this.check();
    this.initListener();
    this.initInterval();
  }
  getLastAction() {
    return parseInt(localStorage.getItem(STORE_KEY));
  }
  setLastAction(value) {
    localStorage.setItem(STORE_KEY, value.toString());
  }
 
  initListener() {
    document.body.addEventListener('click', () => this.reset());
    document.body.addEventListener('mouseover',()=> this.reset());
    document.body.addEventListener('mouseout',() => this.reset());
    document.body.addEventListener('keydown',() => this.reset());
    document.body.addEventListener('keyup',() => this.reset());
    document.body.addEventListener('keypress',() => this.reset());
  }
 
  reset() {
    this.setLastAction(Date.now());
  }
 
  initInterval() {
    setInterval(() => {
    this.check();
    }, CHECK_INTERVAL);
  }
 
  check() {
    //alert("isLoggedIn"+JSON.stringify(this.state));
   if(this.state.couter=='1'){
    const now = Date.now();
    const timeleft = this.getLastAction() + MINUTES_UNITL_AUTO_LOGOUT * 60 * 1000;
    const diff = timeleft - now;
    const isTimeout = diff < 0;
    if (isTimeout) {
      alert('logout'); // Call here logout function, expire session
      localStorage.clear();
      Cookies.set('profile_data', '', -1);
      //this.props.history.push('/');
      window.location.href="/";
    }
   }
   
}
  logOut() {
    this.setState({ user: { isLoggedIn: false } })
  }
  updateProfileInfo(profile) {
    this.setState({ profile: profile })
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: true }), 4000); // simulates an async action, and hides the spinner
  }

  componentWillMount() {
    if (window.location.pathname == "/agreement" || window.location.pathname == "/broker-agreement") {
      this.setState({ loading: true })
    }

    if (this.homePaths.indexOf(window.location.pathname) === -1) {
      this.addUserDashboardFiles()
      // this.removeMain();
      this.setState({ couter: 1 })
    } else {
  
      this.addIndexHeaderFiles();
    }
  }
  addIndexHeaderFiles() {
    // loadFile('assets/css/bootstrap.min.css','css')
    loadFile('assets/css/main.css', 'css')
    loadFile('assets/css/fonts.css', 'css')
    loadFile('assets/css/comp-main.css', 'css')
    loadFile('assets/css/custom-main.css', 'css')
    loadFile('assets/css/plans1.css', 'css')
    loadFile('assets/css/theme.css', 'css')
    loadFile('assets/css/responsive_index.css', 'css')
	

  }
  addUserDashboardFiles() {
    loadFile('assets/css/bootstrap.min.css', 'css')
    //loadFile('assets/css/main.css','css')
    loadFile('assets/plugins/custombox/css/custombox.min.css', 'css')
    loadFile('assets/plugins/jquery.filer/css/jquery.filer.css', 'css')
    loadFile('assets/plugins/jquery.filer/css/themes/jquery.filer-dragdropbox-theme.css', 'css')
    loadFile('assets/plugins/bootstrap-fileupload/bootstrap-fileupload.css', 'css')
    loadFile('assets/plugins/datatables/dataTables.bootstrap4.min.css', 'css')
    loadFile('assets/plugins/datatables/responsive.bootstrap4.min.css', 'css')
    loadFile('assets/plugins/slick-slider/slick.css', 'css')
    loadFile('assets/plugins/slick-slider/slick-theme.css', 'css')
    loadFile('assets/css/icons.css', 'css')
    loadFile('assets/css/style.css', 'css')
    loadFile('assets/css/custom-style.css', 'css')
    loadFile('assets/css/responsive.css', 'css');
	
	
  }
  FtrCheck() {
    return <FooterOwner />
  }

  LoggedIn(userId) {
   
    fetch(`API_URL+assetsapi/profile/` + userId)
      .then(res => res.json())
      .then(
        (result) => {
          window.localStorage.setItem('firstName', result.profile.first_name)
          window.localStorage.setItem('secondName', result.profile.last_name)
          this.setState({
            isLoaded: true,
            profile: result.profile,
            isLoggedIn: true
          });
          window.location.href = 'http://' + window.location.host + '/profile?Id=' + userId
          // this.props.history.push('/profile')
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        })
  }
  render() {
    // if (this.state.isLoggedIn === true) {
    //   return <Redirect to={{
    //     pathname: '/profile',
    //     state: { user: this.state.profile }
    // }} />
    // }
    // alert(this.state.user.isLoggedIn);
    return (
      this.state.loading ?
        <div className="">
          <Switch>
            <Route path='/user' component={UserDashboard} />
            <Route path='/agent-broker' component={AgentBrokerDashboard} />
            <Route path='/agent-serviceprovider' component={AgentServiceProviderDashboard} />
            <Route path='/tenant' component={TenantDashboard} />

            {/* Owner Dashboard */}
            <Route path='/profile' component={UserDashboard} />
            <Route path='/agreement' component={UserDashboard} />
            <Route path='/settings' component={UserDashboard} />
            <Route path='/my-property' component={UserDashboard} />
            <Route path='/add-property' component={UserDashboard} />
            <Route path='/edit-property' component={UserDashboard} />
            <Route path='/profile-detail' component={UserDashboard} />
            <Route path='/profile-details' component={UserDashboard} />
            <Route path='/owner-report' component={UserDashboard} />
            <Route path='/owner-report-table' component={UserDashboard} />
            <Route path='/owner-payment' component={UserDashboard} />
            <Route path='/service' component={UserDashboard} />
            <Route path='/owner-agent' component={UserDashboard} />
            <Route path='/owner-tenant' component={UserDashboard} />
            <Route path='/owner-agent-profile' component={UserDashboard} />
            <Route exact path='/owner-notifications' component={UserDashboard} />
            <Route exact path='/owner-plan' component={UserDashboard} />
            <Route exact path='/owner-upgrade' component={UserDashboard} />
            <Route exact path='/social-login' component={UserDashboard} />
            <Route exact path='/bgvpayment' component={UserDashboard} />
			<Route path='/owner-tenant-bgvpayment' component={UserDashboard} />
			<Route path='/owner-agreement-edit' component={UserDashboard} />
			<Route path='/owner-agreement-create' component={UserDashboard} />
			<Route path='/owner-agreement-payment' component={UserDashboard} />
			<Route path='/owner-profile-edit' component={UserDashboard} />
			<Route path='/owner-change-password' component={UserDashboard} />
			<Route path='/owner-branding' component={UserDashboard} />
			<Route path='/my-documents' component={UserDashboard} />
			<Route path='/agreement-templates' component={UserDashboard} />
			<Route path='/add-document' component={UserDashboard} />
			<Route path='/owner-agreement-send' component={UserDashboard} />
			<Route path='/owner-agreement-preview' component={UserDashboard} />
      <Route path='/owner-agreement-partner' component={UserDashboard} />
      <Route path='/owner-partner-sign' component={UserDashboard} />
            {/* Broker Dashboard */}
            <Route path='/broker-tenant' component={AgentBrokerDashboard} />
            <Route path='/broker-profile' component={AgentBrokerDashboard} />
            <Route path='/broker-agreement' component={AgentBrokerDashboard} />
            <Route path='/broker-settings' component={AgentBrokerDashboard} />
            <Route path='/broker-property' component={AgentBrokerDashboard} />
            <Route path='/broker-payment' component={AgentBrokerDashboard} />
            <Route path='/broker-service' component={AgentBrokerDashboard} />
            <Route path='/broker-owner' component={AgentBrokerDashboard} />
            <Route path='/broker-tenant' component={AgentBrokerDashboard} />
            <Route path='/broker-owner-profile' component={AgentBrokerDashboard} />
            <Route path='/broker-tenant-profile' component={AgentBrokerDashboard} />
            <Route exact path='/broker-plan' component={AgentBrokerDashboard} />
            <Route exact path='/broker-upgrade' component={AgentBrokerDashboard} />
            <Route exact path='/broker-notifications' component={AgentBrokerDashboard} />
            <Route path='/broker-report' component={AgentBrokerDashboard} />
            <Route path='/broker-report-table' component={AgentBrokerDashboard} />
            <Route path='/broker-tenant-bgvpayment' component={AgentBrokerDashboard} />
			<Route path='/broker-agreement-edit' component={AgentBrokerDashboard} />
			<Route path='/broker-agreement-payment' component={AgentBrokerDashboard} />
			<Route path='/broker-agreement-create' component={AgentBrokerDashboard} />
			<Route path='/broker-profile-edit' component={AgentBrokerDashboard} />
			<Route path='/broker-change-password' component={AgentBrokerDashboard} />
			<Route path='/broker-branding' component={AgentBrokerDashboard} />
			<Route path='/connected-owner-property' component={AgentBrokerDashboard} />
      <Route path='/broker-agreement-templates' component={AgentBrokerDashboard} />
			<Route path='/broker-agreement-send' component={AgentBrokerDashboard} />
			<Route path='/broker-agreement-preview' component={AgentBrokerDashboard} />
      <Route path='/broker-agreement-partner' component={AgentBrokerDashboard} />
      <Route path='/broker-documents' component={AgentBrokerDashboard} />
			<Route path='/broker-document-add' component={AgentBrokerDashboard} />
            {/* Service Provider Dashboard */}
            <Route path='/agent-serviceprovider' component={AgentServiceProviderDashboard} />
            <Route path='/agentprovider-services' component={AgentServiceProviderDashboard} />
            <Route path='/agentprovider-users' component={AgentServiceProviderDashboard} />
            <Route path='/agentprovider-settings' component={AgentServiceProviderDashboard} />
			<Route path='/agentprovider-notifications' component={AgentServiceProviderDashboard} />
			<Route path='/agentprovider-plan' component={AgentServiceProviderDashboard} />
			<Route path='/agentprovider-upgrade' component={AgentServiceProviderDashboard} />

            {/* Tenant Dashboard */}
            <Route path='/tenant-profile' component={TenantDashboard} />
            <Route path='/tenant-agreement' component={TenantDashboard} />
            <Route path='/tenant-settings' component={TenantDashboard} />
            <Route path='/tenant-myproperty' component={TenantDashboard} />
            <Route path='/tenant-service' component={TenantDashboard} />
            <Route path='/tenant-owner' component={TenantDashboard} />
            <Route path='/tenant-agent' component={TenantDashboard} />
            <Route path='/tenant-owner-profile' component={TenantDashboard} />
            <Route path='/tenant-agent-profile' component={TenantDashboard} />
            <Route path='/tenant-plan' component={TenantDashboard} />
            <Route path='/tenant-upgrade' component={TenantDashboard} />
            <Route exact path='/tenant-notifications' component={TenantDashboard} />
            <Route path='/tenant-report' component={TenantDashboard} />
            <Route path='/tenant-report-table' component={TenantDashboard} />
            <Route path='/tenant-deal-payment' component={TenantDashboard} />
			<Route path='/tenant-profile-edit' component={TenantDashboard} />
			<Route path='/tenant-change-password' component={TenantDashboard} />
      <Route path='/tenant-partner-sign' component={TenantDashboard} />

            <Route path='/' component={DashBoardIndex} />
            <Route exact path='/plans' render={props => <Plans {...props} login={this.LoggedIn} />} />
            <Route exact path='/' render={props => <Home {...props} login={this.LoggedIn} />} />
            <Route exact path='/Home' render={props => <Home {...props} login={this.LoggedIn} />} />
            <Route exact path='/index' render={props => <Home {...props} login={this.LoggedIn} />} />
            {/* <Route exact path='/AboutUs' render={props=><Aboutus {...props} login={this.LoggedIn} />} /> */}
            <Route exact path='/aboutus' render={props => <Aboutus {...props} login={this.LoggedIn} />} />
            <Route exact path='/property' render={props => <Property {...props} login={this.LoggedIn} />} />
            {/* <Route exact path='/blog' render={props=><Blog {...props} login={this.LoggedIn} />} /> */}
            <Route exact path='/blog-detail' render={props => <BlogDetails {...props} login={this.LoggedIn} />} />

            {/* <Route exact path='/contact' render={props=><ContactUs {...props} login={this.LoggedIn} />} /> */}
            <Route exact path='/registration' render={props => <Regisgtration {...props} login={this.LoggedIn} />} />
            <Route exact path='/register-plans' render={props => <PlansReg {...props} login={this.LoggedIn} />} />
            <Route exact path='/password-reset' render={props => <ResetPassword {...props} login={this.LoggedIn} />} />
            <Route exact path='/privacy-policy' render={props => <PrivacyPlans {...props} login={this.LoggedIn} />} />
            <Route exact path='/terms-condition' render={props => <TermsCondition {...props} login={this.LoggedIn} />} />
            {/* TermsCondition */}

            {/* //Owner */}
            <Route exact path="/user" render={(props) => (
              this.state.user.isLoggedIn ?
                (<OwnerProfile {...props} logOut={this.logOut} updateInfo={this.updateProfileInfo} user={this.state.profile} />)
                : (<Redirect to="/" />))} />
             <Route exact path="/agreement" render={(props)=>(
          this.state.user.isLoggedIn?
          (<OwnerAgreement owner_id={this.state.owner_id} updateInfo={this.updateProfileInfo} logOut={this.logOut} {...props} logoutLink={this.logoutLink} owner={this.state.profile} />)
          :(<Redirect to="/" />))} /> 
            <Route exact path="/planPayment" render={(props) => (
              this.state.user.isLoggedIn ?
                (<PlanPayment owner_id={this.state.owner_id} updateInfo={this.updateProfileInfo} logOut={this.logOut} {...props} logoutLink={this.logoutLink} owner={this.state.profile} />)
                : (<Redirect to="/" />))} />
            <Route exact path="/my-property" render={(props) => (
              this.state.user.isLoggedIn ?
                (<OwnerProperty owner_id={this.state.owner_id} {...props} logoutLink={this.logoutLink} owner={this.state.profile} />)
                : (<Redirect to="/" />))} />
            <Route exact path="/payment" render={(props) => (
              this.state.user.isLoggedIn ?
                (<OwnerPayment1 owner_id={this.state.owner_id} updateInfo={this.updateProfileInfo} {...props} logoutLink={this.logoutLink} owner={this.state.profile} />)
                : (<Redirect to="/" />))} />
            <Route exact path="/add-property" render={(props) => (
              this.state.user.isLoggedIn ?
                (<OwnerAddproperty owner_id={this.state.owner_id} {...props} logoutLink={this.logoutLink} owner={this.state.profile} />)
                : (<Redirect to="/" />))} />
            <Route exact path="/profile-details" render={(props) => (
              this.state.user.isLoggedIn ?
                (<OwnerTenantProfileDetails owner_id={this.state.owner_id} {...props} logoutLink={this.logoutLink} owner={this.state.profile} />)
                : (<Redirect to="/" />))} />
            <Route exact path="/settings" render={(props) => (
              this.state.user.isLoggedIn ?
                (<OwnerSettings owner_id={this.state.owner_id} {...props} logoutLink={this.logoutLink} owner={this.state.profile} />)
                : (<Redirect to="/" />))} />
            <Route exact path="/tenant" render={(props) => (
              this.state.user.isLoggedIn ?
                (<OwnerTenant owner_id={this.state.owner_id} {...props} logoutLink={this.logoutLink} owner={this.state.profile} />)
                : (<Redirect to="/" />))} />
            {/* <Route exact path="/tenant-profile" render={(props)=>(
            this.state.user.isLoggedIn?
            (<OwnerTenanprofilet owner_id={this.state.owner_id} {...props} logoutLink={this.logoutLink} owner={this.state.profile} />)
  :(<Redirect to="/" />))} /> */}
            <Route exact path="/agent" render={(props) => (
              this.state.user.isLoggedIn ?
                (<OwnerAgent owner_id={this.state.owner_id} {...props} logoutLink={this.logoutLink} owner={this.state.profile} />)
                : (<Redirect to="/" />))} />
            <Route exact path="/owner-agent-profile" render={(props) => (
              this.state.user.isLoggedIn ?
                (<OwnerAgentprofile owner_id={this.state.owner_id} {...props} logoutLink={this.logoutLink} owner={this.state.profile} />)
                : (<Redirect to="/" />))} />
            <Route exact path="/service" render={(props) => (
              this.state.user.isLoggedIn ?
                (<OwnerService owner_id={this.state.owner_id} {...props} logoutLink={this.logoutLink} owner={this.state.profile} />)
                : (<Redirect to="/" />))} />
            <Route component={NoMatch} />
          </Switch>

          {/* {this.state.couter===0 ?  <Footer />: <FooterOwner />} */}
        </div> : <div style={{ marginTop: '25%', marginLeft: '50%' }}><img className="loadding_img" src="/static/media/loading_blue_64x64.07401db4.gif" alt="loading..." /></div>
    );
  }
}

// export default connect(state=>({ userData: state.userData }), { setUser })(App);
