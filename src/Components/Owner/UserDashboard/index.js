import React from 'react'
import { connect } from 'react-redux';
import { setUser } from '../../../actions';
import Profile from '../Profile/profile';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import API_URL from '../../../app-config';

import { Switch, Route } from 'react-router';
// import Agreement from '../Agreement/OwnerAgreement';
import Agreement from '../Agreement/OwnerAgreement1';
import VEdit from '../Agreement/VEdit';
 import VCreate from '../Agreement/VCreate';
import Property from '../Property/Property';
import AddProperty from '../Property/addProperty';
import EditProperty from '../Property/EditProperty';
import Settings from '../Settings/Settings';
import ProfileEdit from '../Settings/profileInfo';
import ChangePassword from '../Settings/passwordSetting';
import Payment from '../Payment/payment';
import Services from '../Service/Service';
import Agent from '../Agent/Agent';
import Tenant from '../Tenants/Tenants';
// import TenantProfile from '../Tenants/tenantProfile'
import ProfileDetails from '../Tenants/ProfileDetails'
import AgentProfileDetails from '../Agent/ProfileDetails'
import Notifications from '../Notifications/Notifications'
import OwnerPlan from '../UpgradePlan/Plan'
import Upgrade from '../UpgradePlan/Payment'
//import "../../../css/style_pro.css";
//import '../Agreement/style.css'
import Cookies from 'js-cookie';
import Report from '../Reports/Report'
import ReportTable from '../Reports/ReporTable'
import BGVPayment from '../Agent/PaymentGateway';
import OTBGVPayment from '../Tenants/PaymentGateway';
import AgreementPayment from '../Agreement/AgreementPayment';
import ManageBranding from '../Settings/ManageBranding';
import $ from 'jquery';
import MyDocuments from '../Agreement/MyDocuments';
import AgreementTemplates from '../Agreement/AgreementTemplates';
import AddDocument from '../Agreement/AddDocument';
import AgreementSendTemplate from '../Agreement/AgreementSendTemplate';
import AgreementPreview from '../Agreement/AgreementPreview';
import AgreementPartner from '../Agreement/AgreementPartner';
import OwnerPartnerSign from '../Agreement/OwnerPartnerSign';
class UserDashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      url:"user",
      userInfo:props.userData,
      userData:Cookies.get('profile_data')
    }
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
          {/* <link rel='stylesheet' href='../css/theme.css' type='text/css' media='all' /> */}
          <Header logoutLink={this.logoutLink} name={this.state.url} first_name={''} last_name={''} />

          <Switch>
            <Route exact path='/user' component={Profile} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/agreement' component={Agreement} />
            <Route exact path='/my-property' component={Property} />
			<Route exact path='/add-property' component={AddProperty} />
			<Route exact path='/edit-property' component={EditProperty} />
            <Route exact path='/settings' component={Settings} />
            <Route exact path='/owner-payment' component={Payment} />

            <Route exact path='/owner-report' component={Report} />
            <Route exact path='/owner-report-table' component={ReportTable} />

            <Route exact path='/service' component={Services} />
            <Route exact path='/owner-agent' component={Agent} />
            <Route exact path='/owner-tenant' component={Tenant} />
				{/* <Route exact path='/tenant-profile' component={TenantProfile} /> */}
			<Route exact path='/profile-details' component={ProfileDetails} />
			<Route exact path='/owner-agent-profile' component={AgentProfileDetails} />
			<Route exact path='/owner-notifications' component={Notifications} />
			<Route exact path='/owner-plan' component={OwnerPlan} />
			<Route exact path='/owner-upgrade' component={Upgrade} />
			<Route exact path='/bgvpayment' component={BGVPayment} />
			<Route exact path='/owner-tenant-bgvpayment' component={OTBGVPayment} />
			<Route exact path='/owner-agreement-edit' component={VEdit} />
			<Route exact path='/owner-agreement-create' component={VCreate} />
			<Route exact path='/owner-agreement-payment' component={AgreementPayment} />
			<Route exact path='/owner-profile-edit' component={ProfileEdit} />
			<Route exact path='/owner-change-password' component={ChangePassword} />
			<Route exact path='/owner-branding' component={ManageBranding} />
			<Route exact path='/my-documents' component={MyDocuments} />
			<Route exact path='/agreement-templates' component={AgreementTemplates} />
			<Route exact path='/add-document' component={AddDocument} />
			<Route exact path='/owner-agreement-send' component={AgreementSendTemplate} />
			<Route exact path='/owner-agreement-preview' component={AgreementPreview} />
      <Route exact path='/owner-agreement-partner' component={AgreementPartner} />
      <Route exact path='/owner-partner-sign' component={OwnerPartnerSign} />
          </Switch>
          <Footer />
        </div>
      )
    }
  }
}

export default connect(state=>({ userData: state.userData }), { setUser })(UserDashboard);
