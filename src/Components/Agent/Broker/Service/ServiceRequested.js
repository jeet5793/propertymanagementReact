import React from 'react'
import img_not_available from '../../../../images/img_not_available.png'
import Cookies from 'js-cookie';
import { connect } from 'react-redux';

class ServiceRequested extends React.Component {
    constructor(props) {
        super(props);
        
        }
      
    render() {
        // console.log(JSON.stringify(this.props));
        return (
		<div className="tab-pane" id="v-requested">
			<ul className="nav nav-tabs tabs-bordered">
								<li className="nav-item"> <a href="#sent" data-toggle="tab" onClick={this.props.changeTabs2.bind(this, "sent")} id="sentTab" aria-expanded="true" className="nav-link font-16 active">Sent  </a> </li>
								<li className="nav-item"> <a href="#received" data-toggle="tab" onClick={this.props.changeTabs2.bind(this, "received")} id="receivedTab" aria-expanded="false" className="nav-link font-16">Received  </a> </li>
                            </ul>
					<div className="tab-content">
						
								<div className="tab-pane active" id="sent">
									<div className="row">
										   {this.props.sendedList && (this.props.sendedList.length > 0) ?
                                                            <div className=" table-responsive">

                                                                <table id="" className="table table-bordered datatable">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Property Title</th>
                                                                            <th>Name</th>
                                                                            <th>Date</th>
                                                                            <th>Status</th>
                                                                            <th>Action</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {(this.props.sendedList.length > 0) ? this.props.sendedList.map((item) => (
                                                                            <tr>
                                                                                <td className="tbl-text-overflow">{item.property_name}</td>
                                                                                <td>{item.first_name + '' + item.last_name}</td>
                                                                                <td>{item.entry_date}</td>
                                                                                <td>{item.service_status == 1 ? 'Resolved' : 'Pending'}</td>
                                                                                <td className="text-center"><a href="#" className="table-action-btn view-rqu" onClick={this.props.onClickView.bind(this, item.service_id)}><i className="mdi mdi-eye"></i></a></td>
                                                                            </tr>))
                                                                            : <tr><td style={{ textAlign: 'center' }} colSpan={5}>No Request Send</td></tr>}
                                                                    </tbody>
                                                                </table>
                                                            </div> : <div className=" table-responsive" style={{ textAlign: 'center' }}>No record available </div>}
									</div>
						  
								</div>


							<div className="tab-pane" id="received">
								<div className="row">
								{this.props.requestedList && (this.props.requestedList.length > 0) ?
                                                            <div className=" table-responsive">

                                                                <table id="" className="table table-bordered datatable">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Property Title</th>
                                                                            <th>Name</th>
                                                                            <th>Date</th>
                                                                            <th>Status</th>
                                                                            <th>Action</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {(this.props.requestedList.length > 0) ? this.props.requestedList.map((item) => (
                                                                            <tr>
                                                                                <td className="tbl-text-overflow">{item.property_name}</td>
                                                                                <td>{item.first_name + '' + item.last_name}</td>
                                                                                <td>{item.entry_date}</td>
                                                                                <td>{item.service_status == 1 ? 'Resolved' : 'Pending'}</td>
                                                                                <td className="text-center"><a href="#" className="table-action-btn view-rqu" onClick={this.props.onClickView.bind(this, item.service_id)}><i className="mdi mdi-eye"></i></a></td>
                                                                            </tr>))
                                                                            : <tr><td style={{ textAlign: 'center' }} colSpan={5}>No Request Available</td></tr>}


                                                                    </tbody>
                                                                </table>

                                                            </div> : <div className=" table-responsive" style={{ textAlign: 'center' }}>No record available </div>}
								</div>
						   </div>
						</div>
					</div>
        );
    }
}
export default connect(state => ({ userData: state.userData, userProfile: state.userProfile }))(ServiceRequested)