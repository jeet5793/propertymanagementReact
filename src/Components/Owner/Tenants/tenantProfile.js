import React from 'react'
import Header from '../Header/Header'
import avatar_1 from '../../../images/Owner/users/avatar-1.jpg'
export default class TenantProfile extends React.Component{
    componentDidMount(){
        var $=window.$;
        $('[data-toggle="tooltip"]').tooltip();  
    }
    render(){
        // if(this.props.owner===undefined)
        // window.location.href='http://'+window.location.host
        return(
            <div>
                <Header name="property"  first_name={window.localStorage.getItem('firstName')} 
                last_name={window.localStorage.getItem('firstName')} />
                <div className="wrapper">
                <div className="container"> 
                    
                    <div className="page-title-box">
                    <div className="btn-group pull-right">
                        <ol className="breadcrumb hide-phone p-0 m-0">
                        <li><a href="tenant.html" className="btn waves-light waves-effect w-md btn-custom"><i className="fi-reply"></i>&nbsp;&nbsp;Back</a></li>
                        </ol>
                    </div>
                    <h4 className="page-title">Tenants</h4>
                    </div>
                    {/* <!-- end page title end breadcrumb --> */}
                    
                    <div className="row">
                    <div className="col-md-12 col-lg-12 second-profiles-details">
                        <div className="card-box"> 
                        <div className="col-md-12"> 
                        <div className="row"> 
                        <div className="col-md-8">
                        <span className="pull-left m-r-15">
                        <img src={avatar_1} alt="" className="second-profiles rounded-circle" /></span>
                        <div className="details-dec ">
                                <h4 className="m-t-5 m-b-5 font-18 ellipsis">Tenant 01</h4>
                                <p className="font-13 m-b-3"> Tenant Profile</p>
                                <p className="text-muted m-b-3"><i className="icon-phone"></i>&nbsp; 09999999999</p>
                                <p className="text-muted m-b-3 "><i className="icon-envelope"></i>&nbsp; agent@info.com</p>
                                <p className="text-muted m-b-3"><i className="icon-location-pin"></i>&nbsp; #0, 22nd Floor, 27th main, #0, 22nd Floor, 27th main</p>
                                <div className="count">
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
                            <div className="col-md-4">
                                <ul className="social-links list-inline m-t-20 m-b-0">
                            <li className="list-inline-item"> <a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Facebook"><i className="fa fa-facebook"></i></a> </li>
                            <li className="list-inline-item"> <a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Twitter"><i className="fa fa-twitter"></i></a> </li>
                            <li className="list-inline-item"> <a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Skype"><i className="fa fa-skype"></i></a> </li>
                            </ul>
                            <a href="#" data-toggle="modal" data-target="#send-msg" className="btn waves-light waves-effect w-md btn-custom m-t-30	"><i className="fi-mail"></i>&nbsp;&nbsp;Send Message</a>
                            </div>	
                            </div>	
                            </div>	
                            <hr />
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-8">
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
                {/* <!-- end container -->  */}
                </div>
                <div id="send-msg" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: 'none'}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 className="modal-title">Send </h4>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                            <label for="nme" className="control-label">Name</label>
                            <input type="text" className="form-control" placeholder="" defaultValue="Tenant1" id="nme" />
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-12">
                            <div className="form-group no-margin">
                            <label for="field-7" className="control-label">Message</label>
                            <textarea className="form-control" id="field-7" placeholder=""></textarea>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-success waves-effect waves-light">Send</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );        
    }
}