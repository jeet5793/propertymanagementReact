import React from 'react'
 import overview from '../../../images/helpImage/overview.png'
 import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
 
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import HowToRegister from "./HowToRegister"
import OwnerFeature from './OwnerFeature';
import AgentBrokerFeatrure from './AgentBrokerFeatrure';
import TenantFeature from './TenantFeature';
import $ from 'jquery';

export default class HowItWork extends React.Component {
	constructor(props){
    super(props);

	}
  componentDidMount() {

    setTimeout(function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      $('#tzloadding').remove();
    }, 800);
}
    render() {
        return (
    <div className="mg-top-129">
          <div className="vc_row wpb_row vc_row-fluid">
            <div className="no_container">
            <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner ">
                <div className="wpb_wrapper">
                    <div className="tz-Breadcrumb">
                    <div className="tzOverlayBreadcrumb">
                        <div className="container">
                        <h1> How it works </h1>
                        </div>
                        {/* <!-- end className container -->  */}
                    </div>
                    </div>
                    {/* <!-- end className tzbreadcrumb -->  */}
                    
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="vc_row wpb_row vc_row-fluid tz-responsive-bottom vc_custom_1465552428823 vc_row-has-fill">
            <div className="container">
                 <div className="row">
                    <div className="tz-width-mobile wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner vc_custom_1465553727693">
                            <div className="wpb_wrapper">
                                <div className="tz-home-title  title  text-center">
                                    <div className="tz-content ">
                                        <h3 className="text-center">Our Motivation</h3>
                                    <div className="tz-title-content">
                                        <p>We are making a transparent platform or bridge between Owner,Agent and Tenant.</p>
                                        <p>Easy and hassle free property management dashboard for all customer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-xs-12">
                <div className="vc_column-inner ">
                    <div className="wpb_wrapper">
                    
                            <div className="col-md-12">
                                <img style={{width: "80%",height:"433px",marginLeft: "103px"}} className="lib-img-show" src={overview}/>
                            </div>

                    {/* <!-- <div className="tz-home-title  icon  text-center">
                        
                        <div className="tz-content ">
                        
                        
                        
                        
                        </div>
                    </div> --> */}
                    
                    
                    </div>
                </div>
                </div>
                
            </div>
            </div>
        </div>
        
        
        <br/><br/>
        <br/><br/>
        <div className="vc_row wpb_row vc_row-fluid tz-responsive-bottom vc_custom_1465552428823 vc_row-has-fill">
            <div className="container">
                <div className="row">
                    
                    <div className="tz-width-mobile wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner vc_custom_1465553727693">
                            <div className="wpb_wrapper">
                                <div className="tz-home-title  title  text-center">
                                    <div className="tz-content ">
                                        <h3 className="text-center">Quick Overview of AssetsWatch</h3>
                                        <div className="tz-title-content">
                                            <p>Have quick overview of the application to understand more.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-xs-12">
                        <div className="vc_column-inner ">
                            <div className="wpb_wrapper">
                                <div className="container">
                                    <Accordion accordion={false}>
                                        <HowToRegister/>
                                        <OwnerFeature/>
                                        <AgentBrokerFeatrure/>
                                        <TenantFeature/>
                                    </Accordion>
                                    <div className="panel-group" id="accordion">
                                       
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <br/><br/>
    </div>
);
}
}

