import React from 'react'
import { connect } from 'react-redux';
import { setUser } from '../../../../actions';
import Profile from '../Profile/Profile';
import { Switch, Route } from 'react-router';
import Header from '../Header/BrokerHeader';
import Footer from '../Footer/BrokerFooter';
import Agreement from '../Agreement/BrokerAgreement';
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
import BGVPayment from '../Owner/PaymentGateway'
class AgentBrokerDashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      url:"agent-broker",
      userInfo:props.userData,
      userData:Cookies.get('profile_data')
    }
    //console.log("owner props"+JSON.stringify(this.state.userInfo))
    if (!this.state.userData) {
      console.log("owner props"+JSON.stringify(props))
      this.props.history.replace('/');
     console.log("owner props"+JSON.stringify(props));
    }
    console.log("owner props"+JSON.stringify(props));
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
			<Route exact path='/broker-owner-bgvpayment' component={BGVPayment} />
          </Switch>

          <Footer />
        </div>
      )
    }
  }
}

export default connect(state=>({ userData: state.userData }), { setUser })(AgentBrokerDashboard);
