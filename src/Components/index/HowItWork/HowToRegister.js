import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import registerOwner from '../../../images/helpImage/registration-owner.png';
import registerAgent from '../../../images/helpImage/registration-agent.png'
import registerTenant from '../../../images/helpImage/registration-tenant.png'

const HowToRegister = ()=>(
                                    <AccordionItem>
                                        <AccordionItemTitle className="accordianHead">
                                            <h3 className="u-position-relative">
                                            How to register?
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
                                                                    <h4 className="helpHeading">How to register as an Owner?</h4>
                                                                    <div className="lib-header-seperator"></div>
                                                                </div>
                                                            </div>	
                                                            
                                                            <div className="col-md-12">
                                                                <img className="lib-img-show helpImg" src={registerOwner}/>
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
                                                                    <h4 className="helpHeading">How to register as an Agent?</h4>
                                                                    <div className="lib-header-seperator"></div>
                                                                </div>
                                                            </div>	
                                                            
                                                            <div className="col-md-12">
                                                                <img className="lib-img-show helpImg" src={registerAgent}/>
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
                                                                    <h4 className="helpHeading">How to register as an Tenant?</h4>
                                                                    <div className="lib-header-seperator"></div>
                                                                </div>
                                                            </div>	
                                                            
                                                            <div className="col-md-12">
                                                                <img className="lib-img-show helpImg" src={registerTenant}/>
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
   export default HowToRegister;