import React from 'react'
import AddProperty from '../../../images/helpImage/Add-property.png';
import InviteAgent from '../../../images/helpImage/owner-invite-find-agent.png'
import InviteTenant from '../../../images/helpImage/owner-invite-find-tenant.png'

const OwnerFeature = ()=>(
    <div className="panel panel-default">
    <div className="panel-heading">
        <h4 className="panel-title">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Owner Feature</a>
        </h4>
    </div>
    <div id="collapse2" className="panel-collapse collapse">
        <div className="panel-body">
        
                        
                    
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
                                            <h4 className="helpHeading">How to find Agents?</h4>
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



                                




                            </div>
                        </div>
                        
                    </div>
        
        
        
        
        </div>
    </div>
    </div>
   );
   export default OwnerFeature;