import React from 'react'
import { connect } from 'react-redux';
import { setUser } from '../../../actions';
import Header from '../Header/TenantHeader';
import Footer from '../Footer/TenantFooter'
import Profile from '../Profile/TenantProfile';
import Agreement from '../Agreement/TenantAgreement';
import Property from '../Property/TenantMyProperty';
import Settings from '../Setting/TenantSettings';
import Services from '../Service/TenantService';
import Owner from '../Owner/TenantOwner';
import TOprofile from '../Owner/ProfileDetails';
import TAprofile from '../Agent/ProfileDetails';
import Agent from '../Agent/Agent';
import TenantPlan from '../UpgradePlan/Plan';
import Upgrade from '../UpgradePlan/Payment';
import Notification from '../Notificaitons/TenantNotification';
import { Switch, Route } from 'react-router';
import Cookies from 'js-cookie';
import Report from '../Reports/Report'
import ReportTable from '../Reports/ReporTable'
import DealPayment from '../Property/DealPayment'
import $ from 'jquery';
import API_URL from '../../../app-config';
import ProfileEdit from '../Setting/profileInfo';
import ChangePassword from '../Setting/passwordSetting';
import TenantPartnerSign from '../Agreement/TenantPartnerSign';
class TenantDashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      url:"tenant",
      userInfo:props.userData,
      userData:Cookies.get('profile_data'),
    }
    //console.log("owner props"+JSON.stringify(this.state.userInfo))
    // if (!this.state.userData) {
      // console.log("owner props"+JSON.stringify(props))
      // this.props.history.replace('/');
     // console.log("owner props"+JSON.stringify(props));
    // }
	 // console.log("owner dashboard userInfo props"+JSON.stringify(this.props.userData))
    if (!this.state.userData) {
      // console.log("owner props"+JSON.stringify(props))
      this.props.history.replace('/');
     // console.log("owner props"+JSON.stringify(props));
    }else{
		const profile=JSON.parse(this.state.userData);
			fetch(`${API_URL}assetsapi/session_check/${profile.assets_id}/${profile.session_id}`, {
				method: 'get'
			  })
			.then(res => res.json())
			.then(
			  (result) => {
				//console.log("data 2: "+JSON.stringify(result.profile))
				$("#loaderDiv").hide();
				if (result.success===0) {
				  // this.setState({auth:result.auth})
				   // this.props.history.replace('/');
				   window.location.href='/';
				  
				} 
				// console.log("index"+JSON.stringify(this.state.profile))
			  },
			(error) => {
			  console.log('error')
			}
		  )
	}
    // console.log("owner props"+JSON.stringify(this.state.userData));
  }
  componentWillMount(){
    var urlIndex=window.location.href.lastIndexOf('/')
    var urlLength=window.location.href.length;
    var urlSlice=window.location.href.slice(urlIndex+1,urlLength)
    this.setState({
      url:urlSlice
    })
  }

  componentWillReceiveProps(nextProps) {
    var urlLength=nextProps.match.url.length;
    var urlSlice=nextProps.match.url.slice(1,urlLength)
    if (!nextProps) {
      this.setState({
        url: urlSlice
      })
    } else {
      this.setState({
        url: urlSlice
      })
    }
  }

  

  render() {
    if (!this.state.userData) {
      return null;
    } else {
      return (
        <div>
		{/*  <link rel='stylesheet' href='../css/theme.css' type='text/css' media='all' /> */}
          <Header logoutLink={this.logoutLink} name={this.state.url} first_name={'jomin'} last_name={'john'} />

          <Switch>
            <Route exact path='/tenant' component={Profile} />
            <Route exact path='/tenant-profile' component={Profile} />
            <Route exact path='/tenant-agreement' component={Agreement} />
            <Route exact path='/tenant-myproperty' component={Property} />
            <Route exact path='/tenant-settings' component={Settings} />
			<Route exact path='/tenant-report' component={Report} />
            <Route exact path='/tenant-report-table' component={ReportTable} />
            <Route exact path='/tenant-service' component={Services} />
            <Route exact path='/tenant-agent' component={Agent} />
            <Route exact path='/tenant-owner' component={Owner} />
			<Route  path='/tenant-owner-profile' component={TOprofile} />
			<Route  path='/tenant-agent-profile' component={TAprofile} />
			<Route  path='/tenant-plan' component={TenantPlan} />
			<Route  path='/tenant-upgrade' component={Upgrade} />
			<Route  path='/tenant-notifications' component={Notification} />
			<Route  path='/tenant-deal-payment' component={DealPayment} />
			<Route exact path='/tenant-profile-edit' component={ProfileEdit} />
			<Route exact path='/tenant-change-password' component={ChangePassword} />
      <Route exact path='/tenant-partner-sign' component={TenantPartnerSign} />
          </Switch>

          <Footer />
        </div>
      )
    }
  }
}

export default connect(state=>({ userData: state.userData }), { setUser })(TenantDashboard);
