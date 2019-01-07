import React from 'react'
import { connect } from 'react-redux';
import { setUser } from '../../../../actions';
import Profile from '../Profile/Profile';
import { Switch, Route } from 'react-router';
import Header from '../Header/BrokerHeader';
import Footer from '../Footer/BrokerFooter';
import Agreement from '../Agreement/BrokerAgreement';
import AgreementPayment from '../Agreement/AgreementPayment';
import VEdit from '../Agreement/VEdit';
 import VCreate from '../Agreement/VCreate';
import Property from '../MyProperty/BrokerMyProperty';
import Settings from '../Settings/BrokerSettings';
import Payment from '../Payment/BrokerPayment';
import Services from '../Service/BrokerService';
import Owner from '../Owner/BrokerOwner';
import Tenant from '../Tenant/BrokerTenant';
import Cookies from 'js-cookie';
import BOProfile from '../Owner/ProfileDetails';
import BTProfile from '../Tenant/ProfileDetails';
import BrokerPlan from '../UpgradePlan/Plan'
import Upgrade from '../UpgradePlan/Payment'
import Notifications from '../Notifications/BrokerNotifications'
import Report from '../Reports/Report'
import ReportTable from '../Reports/ReporTable'
import BGVPayment from '../Tenant/PaymentGateway'
import ProfileEdit from '../Settings/profileInfo';
import $ from 'jquery';
import API_URL from '../../../../app-config';
class AgentBrokerDashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      url:"agent-broker",
      userInfo:props.userData,
      userData:Cookies.get('profile_data')
    }
    //console.log("owner props"+JSON.stringify(this.state.userInfo))
    // if (!this.state.userData) {
      // console.log("owner props"+JSON.stringify(props))
      // this.props.history.replace('/');
     // console.log("owner props"+JSON.stringify(props));
    // }
    // console.log("owner props"+JSON.stringify(props));
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
          {/*<link rel='stylesheet' href='../css/theme.css' type='text/css' media='all' />*/}
          <Header logoutLink={this.logoutLink} name={this.state.url} first_name={'jomin'} last_name={'john'} />
          <Switch>
            <Route exact path='/agent-broker' component={Profile} />
            <Route exact path='/broker-profile' component={Profile} />
            <Route exact path='/broker-agreement' component={Agreement} />
            <Route exact path='/broker-property' component={Property} />
            <Route exact path='/broker-settings' component={Settings} />
            <Route exact path='/broker-payment' component={Payment} />
			<Route exact path='/broker-report' component={Report} />
            <Route exact path='/broker-report-table' component={ReportTable} />
            <Route exact path='/broker-service' component={Services} />
            <Route exact path='/broker-owner' component={Owner} />
            <Route exact path='/broker-tenant' component={Tenant} />
			<Route exact path='/broker-tenant-profile' component={BTProfile} />
			<Route exact path='/broker-owner-profile' component={BOProfile} />
			<Route exact path='/broker-plan' component={BrokerPlan} />
			<Route exact path='/broker-upgrade' component={Upgrade} />
			<Route exact path='/broker-notifications' component={Notifications} />
			<Route exact path='/broker-tenant-bgvpayment' component={BGVPayment} />
			<Route exact path='/broker-agreement-edit' component={VEdit} />
			<Route exact path='/broker-agreement-create' component={VCreate} />
			<Route exact path='/broker-agreement-payment' component={AgreementPayment} />
			<Route exact path='/broker-profile-edit' component={ProfileEdit} />
          </Switch>

          <Footer />
        </div>
      )
    }
  }
}

export default connect(state=>({ userData: state.userData }), { setUser })(AgentBrokerDashboard);
