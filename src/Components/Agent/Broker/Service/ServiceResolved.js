import React from 'react'
import img_not_available from '../../../../images/img_not_available.png'
import Cookies from 'js-cookie';
import { connect } from 'react-redux';


class ServiceResolved extends React.Component {
    constructor(props) {
        super(props);
        
        }
      
    render() {
        
        return (
             <div className="tab-pane" id="v-Resolve">
                                                        {this.props.resolvedList && (this.props.resolvedList.length > 0) ?
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
                                                                        {(this.props.resolvedList.length > 0) ? this.props.resolvedList.map((item) => (
                                                                            <tr>
                                                                                <td className="tbl-text-overflow">{item.property_name}</td>
                                                                                <td>{item.first_name + '' + item.last_name}</td>
                                                                                <td>{item.entry_date}</td>
                                                                                <td>{item.service_status == 1 ? 'Resolved' : 'Pending'}</td>
                                                                                <td className="text-center"><a href="#" className="table-action-btn view-rqu" onClick={this.onClickView.bind(this, item.service_id)}><i className="mdi mdi-eye"></i></a></td>
                                                                            </tr>))
                                                                            : <tr><td style={{ textAlign: 'center' }} colSpan={5}>No Service Resolved</td></tr>}

                                                                    </tbody>
                                                                </table>
                                                            </div> : <div className=" table-responsive" style={{ textAlign: 'center' }}>No record available </div>}
                                                    </div>
        );
    }
}
export default connect(state => ({ userData: state.userData, userProfile: state.userProfile }))(ServiceResolved)