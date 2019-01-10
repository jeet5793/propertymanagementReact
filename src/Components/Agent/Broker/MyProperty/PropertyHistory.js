import React from 'react'
import {Link} from 'react-router-dom'
import API_URL from '../../../../app-config';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import img_not_available from '../../../../images/img_not_available.png'
import $ from 'jquery';

import NumberFormat from 'react-number-format';

class PropertyHistory extends React.Component {
	constructor(props){
    super(props)

	}
	
	addDefaultSrc(ev){
	  ev.target.src = img_not_available;
	}
    render() {
		
        return (
            
                                  
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card-box">
							<div className="table-responsive">
					
                            <table className="table table-hover m-0 table-actions-bar">
                            <thead>
                                <tr>
                                <th>Sl.No.</th>
                                <th>Name</th>
                                <th>User Type</th>
                                <th>Property Name</th>                                
                                <th>Status</th>
                                <th>Initiated Date</th>
                                <th>Terminated Date</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.props.propertyHistoryList.map((element,i)=>(
                                    <tr>
                                        
                                        <td>{i+1}</td>
                                       <td>{element.name}</td>
                                        <td>{element.assetsType=='1'?'Owner':element.assetsType=='2'?'Agent':element.assetsType=='3'?'Tenant':''}</td>
                                      
                                        <td>{element.title}</td>
                                   
                                        <td> {element.status}</td>
                                        <td> {element.initiatedDate} </td>
                                        <td>
                                          	{(element.terminationDate && element.terminationDate!="00/00/0000 00:00:00")?element.terminationDate:''}
                                           
                                        </td>
                                    </tr>
                           ))}      
                                
                               
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    </div>
                 
        );
    }
}  

export default PropertyHistory;