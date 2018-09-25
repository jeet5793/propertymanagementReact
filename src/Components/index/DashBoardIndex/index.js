import React from 'react'
import { connect } from 'react-redux';
import { setUser } from '../../../actions';

import Header from '../Header/Header1';
import { Switch, Route } from 'react-router';
import Footer from '../footer/footer';

import Home from '../Home/Home';
import Aaboutus from '../AboutUs/aboutus';
import ContactUs from '../ContactUs/Contactus';
import Plans from '../Plans/Plans';
import Blog from '../Blogs/Blogs';
import Property from '../Property/property';
import PropertyDetails from '../Property/propertyDetails';
import PlansReg from '../Plans/PlanAfterReg';

import BlogsDetails from '../Blogs/BlogsDetails';
import Registration from '../Registration/Registration';
import PlanPayment from '../Registration/Payment';
import privacyPolicy from '../PrivacyAndPolicy/privacyPolicy';
import TermsCondition from '../TermsAndCondotion/TermsCondition';
import ResetPassword from '../ResetPassword/ResetPassword'
import SocialLogin from '../SocialLogin/SocialLogin'
import SocailExternal from '../SocialLogin/externalSocialLogin'


class DashBoardIndex extends React.Component {



  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.userData) {
  //     console.log('*******:  ', this.props);
  //     this.props.history.replace('/user');
  //   }
  // }

  render() {
    return (
      <div>
        <link rel='stylesheet' href='../css/theme.css' type='text/css' media='all' />
        <Header/>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/aboutus' component={Aaboutus} />
          <Route exact path='/contactus' component={ContactUs} />
          <Route exact path='/plans' component={Plans} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/blog-detail' component={BlogsDetails} />
          <Route exact path='/register' component={Registration} />
          <Route exact path='/register-plans' component={PlansReg} />
          <Route exact path='/properties' component={Property} />
          <Route exact path='/property-detail' component={PropertyDetails} />
		  {/* <Route exact path='/property-details' component={PropertySearchDetails} /> */}
          <Route exact path='/payment/:UserId/:PlanId/:type' component={PlanPayment} />
		  <Route exact path='/privacy-policy' component={privacyPolicy} />
		  <Route exact path='/terms-condition' component={TermsCondition} />
		   <Route exact path='/reset-password' component={ResetPassword} />
		     <Route exact path='/social' component={SocialLogin} />  
		    {/*<Route exact path='/social-login' component={SocailExternal} />*/}
		 
        </Switch>

        <Footer />
      </div>
    )
  }
}

export default connect(state=>({ userData: state.userData }), { setUser })(DashBoardIndex);
