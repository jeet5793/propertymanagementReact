import React from 'react'
import Header from '../Header/Header'
import avatar_1 from '../../../images/Owner/users/avatar-1.jpg'

export default class AgentProperty extends React.Component{
    componentDidMount(){
        var $=window.$;
        $('[data-toggle="tooltip"]').tooltip();  
    }
    render(){
        if(this.props.owner===undefined)
        window.location.href='http://'+window.location.host
        return(
            <div>
                <div>
                <Header logoutLink={this.logoutLink} 
                    name="agent" 
                    first_name={this.props.owner.first_name} 
                    last_name={this.props.owner.last_name} />
                </div>
                <div className="wrapper">
                <div class="container">                     
                    <div class="page-title-box">
                        <div class="btn-group pull-right">
                            <ol class="breadcrumb hide-phone p-0 m-0">
                                <li>
                                    <a href="agent.html" class="btn waves-light waves-effect w-md btn-custom"><i class="fi-reply"></i>&nbsp;&nbsp;Back</a>
                                </li>
                            </ol>
                        </div>
                        <h4 class="page-title">Agents</h4>
                    </div>
                    {/* <!-- end page title end breadcrumb --> */}                    
                    <div class="row">
                     <div class="col-md-12 col-lg-12 second-profiles-details">
                       <div class="card-box"> 
                        <div class="col-md-12"> 
                         <div class="row"> 
                          <div class="col-md-8">
                          <span class="pull-left m-r-15">
                          <img src={avatar_1} alt="" class="second-profiles rounded-circle" /></span>
                            <div class="details-dec ">
                             <h4 class="m-t-5 m-b-5 font-18 ellipsis">Agent 01</h4>
                             <p class="font-13 m-b-3"> Agent Profile</p>
                             <p class="text-muted m-b-3"><i class="icon-phone"></i>&nbsp; 09999999999</p>
                             <p class="text-muted m-b-3 "><i class="icon-envelope"></i>&nbsp; agent@info.com</p>
                             <p class="text-muted m-b-3"><i class="icon-location-pin"></i>&nbsp; #0, 22nd Floor, 27th main, #0, 22nd Floor, 27th main</p>
                              <div class="count">
                                <ul>
                                    <li>
                                        <span>40</span>
                                        <p>Owners</p>
                                    </li>
                                    <li>
                                        <span>40</span>
                                        <p>Tenants</p>
                                    </li>
                                    <li>
                                        <span>40</span>
                                        <p>Owners</p>
                                    </li>
                                </ul>
                              </div>	
                            </div>
                          </div>
                          <div class="col-md-4">
                            <ul class="social-links list-inline m-t-20 m-b-0">
                             <li class="list-inline-item"> 
                              <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Facebook"><i class="fa fa-facebook"></i></a> 
                             </li>
                             <li class="list-inline-item">
                              <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Twitter"><i class="fa fa-twitter"></i></a> 
                             </li>
                             <li class="list-inline-item"> 
                              <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Skype"><i class="fa fa-skype"></i></a> 
                             </li>
                            </ul>
                            <a href="#" data-toggle="modal" data-target="#send-msg" class="btn waves-light waves-effect w-md btn-custom m-t-30	"><i class="fi-mail"></i>&nbsp;&nbsp;Send Message</a>
                          </div>	
                         </div>	
                        </div>	
                        <hr />
                        <div class="col-md-12">
                          <div class="row">
                            <div class="col-md-8">
                             <h4>About:</h4>
                             <p>Suspendisse vel quam malesuada, aliquet sem sit amet, fringilla elit. Morbi tempor tincidunt tempor. Etiam id turpis viverra, vulputate sapien nec, varius sem. Curabitur ullamcorper fringilla eleifend. In ut eros hendrerit est consequat posuere et at velit.</p>
                            </div>
                          </div>
                        </div>
                       </div>
                     </div>
                    {/* <!-- end col --> */}
                    </div>
                    {/* <!-- end row --> */}
                    
                </div>
                </div>
                <div id="send-msg" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: 'none'}}>
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 className="modal-title">Send</h4>
                </div>
                <div class="modal-body">
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="nme" class="control-label">Name</label>
                      <input type="text" class="form-control" placeholder="" defaultValue="Agent1" id="nme" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group no-margin">
                      <label for="field-7" class="control-label">Message</label>
                      <textarea class="form-control" id="field-7" placeholder=""></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
              <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-success waves-effect waves-light">Send</button>
            </div>
                </div>
            </div>
            </div>
                                   
            </div>
        );
    }
}