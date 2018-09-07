import React from 'react';
import {Link} from 'react-router-dom'
import API_URL from '../../../../app-config';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import img_not_available from '../../../../images/img_not_available.png'
export default class BrokerMyProperty extends React.Component{
	constructor(props){
    super(props)

		this.state = {
          userInfo:props.userData,
          userData:Cookies.get('profile_data'),
          profileData:'',
          property:[],
			
		}
	}
	componentDidMount(){
		const profile=JSON.parse(this.state.userData)
        fetch(`${API_URL}assetsapi/service_request/${profile.assets_id}/${profile.session_id}`, {
          method: 'get'
        })
        .then(res => res.json())
        .then(
          (result) => {
            //console.log("data 2: "+JSON.stringify(result.profile))
            if (result.success) {
              this.setState({property:result.service.property_list})
              
            } 
             console.log("set user data"+JSON.stringify(this.state.property))
          },
        (error) => {
          console.log('error')
        }
      )
	}
	render(){
		return(

			      <div>
        {/* Navigation Bar*/}
        {/* End Navigation Bar*/}
        <div style={{marginTop:'3%',marginBottom:'5%'}} className="wrapper">
          <div className="container">
            <div className="page-title-box">
              <div className="btn-group pull-right my-proprty">
			  {/*  <li><a href="#" className="btn btn-custom waves-light waves-effect w-md m-r-10 search-btn"><i className="fi fi-search" />&nbsp;&nbsp;Search</a></li> */}
                {/*<li><a href="add-property.html" class="btn btn-custom waves-light waves-effect w-md"><i class="fi fi-circle-plus"></i>&nbsp;&nbsp;Add Property</a></li>*/}
              </div>
              <h4 className="page-title">My Properties</h4>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="card-box">
                  {/* <div className="form-group search-sec" style={{display: 'none'}}>
					  <div className="row">
                      <div className="col-md-1">
                        <label><b>Search By:</b></label>
                      </div>
                      <div className="col-md-3">
                        <select className="form-control" id="paymentmode">
                          <option>Please Select</option>
                          <option value="keyword">Keyword</option>
                          <option value="city">City</option>
                          <option value="property-type">Property Type</option>
                          <option value="property-status">Property Status</option>
                          <option value="area-sqft">Area (Sq Ft)</option>
                          <option value="zip-code">ZIP Code</option>
                        </select>
                      </div>
                      <div className="col-md-3 assignment" id="keyword" style={{display: 'none'}}>
                        <input type="text" className="form-control" placeholder="Keyword" />
                      </div>
                      <div className="col-md-3 assignment" id="city" style={{display: 'none'}}>
                        <input type="text" className="form-control" placeholder="City" />
                      </div>
                      <div className="col-md-3 assignment" id="property-type" style={{display: 'none'}}>
                        <input type="text" className="form-control" placeholder="Property Type" />
                      </div>
                      <div className="col-md-3 assignment" id="property-status" style={{display: 'none'}}>
                        <input type="text" className="form-control" placeholder="Property Status" />
                      </div>
                      <div className="col-md-3 assignment" id="area-sqft" style={{display: 'none'}}>
                        <input type="text" className="form-control" placeholder="Area (Sq Ft)" />
                      </div>
                      <div className="col-md-3 assignment" id="zip-code" style={{display: 'none'}}>
                        <input type="text" className="form-control" placeholder="ZIP Code" />
                      </div>
                      <div className="col-md-3">
                        <button type="button" className="btn btn-icon waves-effect waves-light btn-success"> <i className="fi fi-search" /> </button>
                      </div>
                    </div>
			</div> */}
                  <div className="table-responsive">
                    <table className="table table-hover m-0 table-actions-bar">
                      <thead>
                        <tr>
                          <th> <i className="fi fi-image" /> </th>
                          <th>Title</th>
                          <th>Location</th>
                          <th>Rent</th>
                          <th>Advance</th>
                          <th>Status</th>
                          <th>Posted Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
					  {this.state.property.length>0?this.state.property.map((item)=>(
                        <tr>
                          <td><img src={item.img_path?API_URL+item.img_path:img_not_available} alt="contact-img" title="contact-img" className="rounded-circle property-img" /></td>
                          <td><h5 className="m-b-0 m-t-0 font-600">{item.property_name}</h5></td>
                          <td><i className="mdi mdi-map-marker text-primary" /> {item.address} </td>
                          <td><i className="mdi mdi-currency-usd text-warning" /> {item.rent} </td>
                          <td><i className="mdi mdi-currency-usd text-warning" /> {item.advance} </td>
                          <td><i /> {item.status} </td>
                          <td><i /> {item.initiated_date} </td>
					  <td>{/* <a href="#" className="table-action-btn"><i className="mdi mdi-pencil" /></a>*/} <a href="#" className="table-action-btn"> <i className="mdi mdi-eye" /></a> {/* <a href="#" className="table-action-btn"><i className="mdi mdi-close" /></a> */}</td>
                        </tr>
                       )):<tr><td colSpan={10} style={{textAlign:'center'}}>No Property Available</td></tr>}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* end row */}
            <div className="row">
              <div className="col-sm-12"> </div>
            </div>
            {/* end Panel */} 
          </div>
          {/* end container */} 
        </div>
        {/* end wrapper */} 
        {/* Footer */}
      
      </div>


			)
	}
}