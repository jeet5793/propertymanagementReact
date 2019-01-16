import React from 'react'
import img_not_available from '../../../images/img_not_available.png'
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import API_URL from "../../../app-config";
class ServiceView extends React.Component {
    constructor(props) {
        super(props);
        
        }
      
    render() {
        // console.log(JSON.stringify(this.props));
        return (
		 <div className="view-reslt" style={{ display: 'none' }}>
                                {this.props.serviceDetail.map((item) => (
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="card-box">
                                                <h4 className="m-t-0 header-title">Service Details </h4>
                                                <div className="search-item">
                                                    <div className="media">
                                                        <img onError={this.addDefaultSrc} className="d-flex mr-3 rounded-circle" src={item.profile_photo != '' ? API_URL + item.profile_photo : img_not_available} alt="Generic placeholder image" height="54" />
                                                        <div className="media-body">
                                                            <h5 className="media-heading">
                                                                <a href="#" className="text-dark">{item.first_name + item.last_name}</a>
                                                            </h5>
                                                            <p className="m-b-5 font-14">
                                                                <span> <b>Status : </b>
                                                                    <span>{item.service_status == 1 ? 'Resolved' : 'Pending'}</span>
                                                                </span>&nbsp;
                                                                <span>|</span>&nbsp;
                                                                <span>
                                                                    <b>Requested Date : </b>
                                                                    <span>{item.initiatedDate}</span>
                                                                </span>&nbsp;
                                                                <span>|</span>&nbsp;
                                                                <span>
                                                                    <b>Resolve Date : </b>
                                                                    <span>{item.resolvedDate?item.resolvedDate:''}</span>
                                                                </span>
                                                            </p>
                                                            <p className="m-b-5 font-14">
                                                                <b>Property Title : </b>
                                                                <span className="text-muted">{item.property_name}</span>
                                                            </p>
                                                            <p className="font-14">
                                                                <b>Discription : </b>
                                                                <br />
                                                                <span className="text-muted">{item.description}</span>
                                                            </p>
                                                            <p className="m-b-0">
                                                                <ul className="serv-fil-down">
                                                                    <li><a href=""><span>File Name</span>&nbsp; <i className="fi fi-inbox m-r-5"></i> </a></li>
                                                                    <li><a href=""><span>File Name</span>&nbsp; <i className="fi fi-inbox m-r-5"></i> </a></li>
                                                                </ul>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
        );
    }
}
export default connect(state => ({ userData: state.userData, userProfile: state.userProfile }))(ServiceView)