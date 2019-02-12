import React from 'react'
import AddProperty from '../../../images/helpImage/Add-property.png';
import InviteAgent from '../../../images/helpImage/owner-invite-find-agent.png'
import InviteTenant from '../../../images/helpImage/owner-invite-find-tenant.png'
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

import OwnerInitiatePropertyContract from '../../../images/helpImage/owner-initiate-property-contract.png'
import OwnerAgentBgv from '../../../images/helpImage/owner-agent-bgv.png'
import OwnerTenantBgv from '../../../images/helpImage/owner-tenant-bgv.png'
import MerchantOwner from '../../../images/helpImage/merchant-owner.png'
import SendSmsOwnerAgent from '../../../images/helpImage/send-sms-owner-agent.png'
import SendSmsOwnerTenant from '../../../images/helpImage/send-sms-owner-tenant.png'
import SmartAgreement from '../../../images/helpImage/smart-agreement.png'

const OwnerFeature = ()=>(
            <AccordionItem>
                <AccordionItemTitle className="accordianHead">
                    <h3 className="u-position-relative">
                             Owner Features
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
                                            <h4 className="helpHeading">How to add a Property?</h4>
                                            <div className="lib-header-seperator"></div>
                                        </div>
                                    </div>	
                                    
                                    <div className="col-md-12">
                                        <img className="lib-img-show helpImg" src={AddProperty}/>
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
                                            <h4 className="helpHeading">How to find Agents?</h4>
                                            <div className="lib-header-seperator"></div>
                                        </div>
                                    </div>	
                                    
                                    <div className="col-md-12">
                                        <img className="lib-img-show helpImg" src={InviteAgent}/>
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
                                            <h4 className="helpHeading">How to find Tenants?</h4>
                                            <div className="lib-header-seperator"></div>
                                        </div>
                                    </div>	
                                    
                                    <div className="col-md-12">
                                        <img className="lib-img-show helpImg" src={InviteTenant}/>
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
                                            <h4 className="helpHeading">Smart Agreement</h4>
                                            <div className="lib-header-seperator"></div>
                                        </div>
                                    </div>	
                                    
                                    <div className="col-md-12">
                                        <img className="lib-img-show helpImg" src={SmartAgreement}/>
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
                                            <h4 className="helpHeading">Initiate a property contract</h4>
                                            <div className="lib-header-seperator"></div>
                                        </div>
                                    </div>	
                                    
                                    <div className="col-md-12">
                                        <img className="lib-img-show helpImg" src={OwnerInitiatePropertyContract}/>
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
                                            <h4 className="helpHeading">Create Merchent Account for payment receive.</h4>
                                            <div className="lib-header-seperator"></div>
                                        </div>
                                    </div>	
                                    
                                    <div className="col-md-12">
                                        <img className="lib-img-show helpImg" src={MerchantOwner}/>
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
                                            <h4 className="helpHeading">Check BGV for Agent & Tenant</h4>
                                            <div className="lib-header-seperator"></div>
                                        </div>
                                    </div>	
                                    
                                    <div className="col-md-12">
                                        <img className="lib-img-show helpImg" src={OwnerAgentBgv}/>
                                        <img className="lib-img-show helpImg" src={OwnerTenantBgv}/>
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
                                            <h4 className="helpHeading">Send Message to Agent/Tenant</h4>
                                            <div className="lib-header-seperator"></div>
                                        </div>
                                    </div>	
                                    
                                    <div className="col-md-12">
                                        <img className="lib-img-show helpImg" src={SendSmsOwnerAgent}/>
                                        <img className="lib-img-show helpImg" src={SendSmsOwnerTenant}/>
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

                               {/*  <div className="box-shadow">
                                    
                                    
                                    <div className="col-md-12">
                                        <div className="lib-row lib-header">
                                            <h4 className="helpHeading">Smart Signature</h4>
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


                                




                            </div>
                        </div>
                        
                    </div>
                </AccordionItemBody>
            </AccordionItem>
    
   );
   export default OwnerFeature;