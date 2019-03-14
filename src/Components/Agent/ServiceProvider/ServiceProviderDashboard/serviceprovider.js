import React from 'react'
import { connect } from 'react-redux';
import { setUser } from '../../../../actions';
import Profile from '../Profile/ServiceProfile';
import Settings from '../Settings/ServiceProviderSettings';
import ServiceProviderUsers from '../Users/ServiceProviderUsers';
import Services from '../Service/ServiceProviderService';
import Header from '../Header/ServiceHeader';
import Footer from '../Footer/ServiceFooter';
import ServiceProviderNotifications from '../Notifications/ServiceProviderNotifications';
import Plan from '../UpgradePlan/Plan';
import Upgrade from '../UpgradePlan/Payment';
import Cookies from 'js-cookie';
import ProfileEdit from '../Settings/profileInfo';
import ChangePassword from '../Settings/passwordSetting';
//import API_URL from '../../../app-config';

import { Switch, Route } from 'react-router';
// import Agreement from '../Agreement/Agreement';
// import "../../../css/style_pro.css";

class AgentBrokerDashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      url:"agent-serviceprovider",
      userInfo:props.userData,
      userData:Cookies.get('profile_data')
    }
    //console.log("owner props"+JSON.stringify(this.state.userInfo))
    if (!this.state.userData) {
      // console.log("owner props"+JSON.stringify(props))
      this.props.history.replace('/');
    }
 
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
          <link rel='stylesheet' href='../css/theme.css' type='text/css' media='all' />
          <Header logoutLink={this.logoutLink} name={this.state.url} first_name={''} last_name={''} />

          <Switch>
            <Route exact path='/agent-serviceprovider' component={Profile} />
            <Route exact path='/agentprovider-services' component={Services} />
            <Route exact path='/agentprovider-users' component={ServiceProviderUsers} />
            <Route exact path='/agentprovider-settings' component={Settings} />
			<Route exact path='/agentprovider-notifications' component={ServiceProviderNotifications} />
			<Route exact path='/agentprovider-plan' component={Plan} />
			<Route exact path='/agentprovider-upgrade' component={Upgrade} />
			<Route exact path='/agentprovider-profile-edit' component={ProfileEdit} />
			<Route exact path='/agentprovider-change-password' component={ChangePassword} />
          </Switch>

          <Footer />
        </div>
      )
    }
  }
}

export default connect(state=>({ userData: state.userData }), { setUser })(AgentBrokerDashboard);
