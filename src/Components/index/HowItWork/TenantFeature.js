import React from 'react'

import InviteTenantAgent from '../../../images/helpImage/tenant-invite-find-agents.png'
import InviteTenantOwner from '../../../images/helpImage/tenant-invite-find-owners.png'
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';


import SmartSignTenant from '../../../images/helpImage/smart-sign-tenant.png'
import SendSmsTenantAgent from '../../../images/helpImage/send-sms-tenant-agent.png'
import SendSmsTenantOwner from '../../../images/helpImage/send-sms-tenant-owner.png'
import img_not_available from '../../../images/img_not_available.png'

const TenantFeature = ()=>(
    <AccordionItem>
                <AccordionItemTitle className="accordianHead">
                    <h3 className="u-position-relative">
                        Tenant Features
                        <div className="accordion__arrow" role="presentation" />
                    </h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                <div className="row row-margin-bottom">
                        
                        
                        <div className="col-md-12 no-padding lib-item" data-category="view">
                            <div className="lib-panel">
                                
                                <div className="box-shadow">
                                    
                                    
                                    <div className="col-md-12">
                                        <div className="lib-row lib-header">
                                            <h4 className="helpHeading">How to find Agents?</h4>
                                            <div className="lib-header-seperator"></div>
                                        </div>
                                    </div>	
                                    
                                    <div className="col-md-12">
                                        <img className="lib-img-show helpImg" src={InviteTenantAgent}/>
                                    </div>
                                    
                                    <div className="col-md-12">
                                        
                                        <br/>
                                        <div className="lib-row lib-desc">
                                            <ul>
                                                
                                                <li></li>
                                                
                                                
                                            </ul>
                                            
                                        </div>
                                    </div>
                                    
                                    
                                </div>


                                <div className="box-shadow">
                                    
                                    
                                    <div className="col-md-12">
                                        <div className="lib-row lib-header">
                                            <h4 className="helpHeading">How to find Owners?</h4>
                                            <div className="lib-header-seperator"></div>
                                        </div>
                                    </div>	
                                    
                                    <div className="col-md-12">
                                        <img className="lib-img-show helpImg" src={InviteTenantOwner}/>
                                    </div>
                                    
                                    <div className="col-md-12">
                                        
                                        <br/>
                                        <div className="lib-row lib-desc">
                                            <ul>
                                                
                                                <li></li>
                                                
                                                
                                            </ul>
                                            
                                        </div>
                                    </div>
                                    
                                    
                                </div>


                                <div className="box-shadow">
                                    
                                    
                                    <div className="col-md-12">
                                        <div className="lib-row lib-header">
                                            <h4 className="helpHeading">Send Message to Owner/Agent</h4>
                                            <div className="lib-header-seperator"></div>
                                        </div>
                                    </div>	
                                    
                                    <div className="col-md-12">
                                        <img className="lib-img-show helpImg" src={SendSmsTenantAgent}/>
                                        <img className="lib-img-show helpImg" src={SendSmsTenantOwner}/>
                                    </div>
                                    
                                    <div className="col-md-12">
                                        
                                        <br/>
                                        <div className="lib-row lib-desc">
                                            <ul>
                                                
                                                <li></li>
                                                
                                                
                                            </ul>
                                            
                                        </div>
                                    </div>
                                    
                                    
                                </div>

                            

                             

                            {/*     <div className="box-shadow">
                                    
                                    
                                    <div className="col-md-12">
                                        <div className="lib-row lib-header">
                                            <h4 className="helpHeading">Smart Payment</h4>
                                            <div className="lib-header-seperator"></div>
                                        </div>
                                    </div>	
                                    
                                    <div className="col-md-12">
                                         <img className="lib-img-show helpImg" src=''/> 
                                    </div>
                                    
                                    <div className="col-md-12">
                                        
                                        <br/>
                                        <div className="lib-row lib-desc">
                                            <ul>
                                                
                                                <li></li>
                                                
                                                
                                            </ul>
                                            
                                        </div>
                                    </div>
                                    
                                    
                                </div> */}

                                {/* <div className="box-shadow">
                                    
                                    
                                    <div className="col-md-12">
                                        <div className="lib-row lib-header">
                                            <h4 className="helpHeading">Initiate service request to Owner/Agent</h4>
                                            <div className="lib-header-seperator"></div>
                                        </div>
                                    </div>	
                                    
                                    <div className="col-md-12">
                                         <img className="lib-img-show helpImg" src=''/> 
                                    </div>
                                    
                                    <div className="col-md-12">
                                        
                                        <br/>
                                        <div className="lib-row lib-desc">
                                            <ul>
                                                
                                                <li></li>
                                                
                                                
                                            </ul>
                                            
                                        </div>
                                    </div>
                                    
                                    
                                </div> */}

                                <div className="box-shadow">
                                    
                                    
                                    <div className="col-md-12">
                                        <div className="lib-row lib-header">
                                            <h4 className="helpHeading">Smart Signature</h4>
                                            <div className="lib-header-seperator"></div>
                                        </div>
                                    </div>	
                                    
                                    <div className="col-md-12">
                                        <img className="lib-img-show helpImg" src={SmartSignTenant}/>
                                    </div>
                                    
                                    <div className="col-md-12">
                                        
                                        <br/>
                                        <div className="lib-row lib-desc">
                                            <ul>
                                                
                                                <li></li>
                                                
                                                
                                            </ul>
                                            
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                                




                            </div>
                        </div>
                        
                    </div>
                </AccordionItemBody>
            </AccordionItem>
   );
   export default TenantFeature;