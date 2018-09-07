import React from 'react'

class TenantMyProperty extends React.Component {
    render() {
        return (
            <div>
          
            <div className="wrapper">
              <div className="container">
                <div className="page-title-box">
                  <div className="btn-group pull-right my-proprty">
                    <li><a href="#" className="btn btn-custom waves-light waves-effect w-md m-r-10 search-btn"><i className="fi fi-search" />&nbsp;&nbsp;Search</a></li>
                    {/*<li><a href="add-property.html" class="btn btn-custom waves-light waves-effect w-md"><i class="fi fi-circle-plus"></i>&nbsp;&nbsp;Add Property</a></li>*/}
                  </div>
                  <h4 className="page-title">My Propertys</h4>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="card-box">
                      <div className="form-group search-sec" style={{display: 'none'}}>
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
                      </div>
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
                            <tr>
                              <td><img src="assets/images/property/property-01.jpg" alt="contact-img" title="contact-img" className="rounded-circle property-img" /></td>
                              <td><h5 className="m-b-0 m-t-0 font-600">Real Property Investment</h5></td>
                              <td><i className="mdi mdi-map-marker text-primary" /> #0,22ndFloor,27th Main NewYork </td>
                              <td><i className="mdi mdi-currency-usd text-warning" /> 2333 </td>
                              <td><i className="mdi mdi-currency-usd text-warning" /> 366 </td>
                              <td><i /> Pending </td>
                              <td><i /> 28/02/2018 </td>
                              <td><a href="#" className="table-action-btn"><i className="mdi mdi-pencil" /></a> <a href="#" className="table-action-btn"><i className="mdi mdi-eye" /></a> <a href="#" className="table-action-btn"><i className="mdi mdi-close" /></a></td>
                            </tr>
                            <tr>
                              <td><img src="assets/images/property/img-1.jpg" alt="contact-img" title="contact-img" className="rounded-circle property-img" /></td>
                              <td><h5 className="m-b-0 m-t-0 font-600">Real Property Investment</h5></td>
                              <td><i className="mdi mdi-map-marker text-primary" /> #0,22ndFloor,27th Main NewYork </td>
                              <td><i className="mdi mdi-currency-usd text-warning" /> 2333 </td>
                              <td><i className="mdi mdi-currency-usd text-warning" /> 366 </td>
                              <td><i /> Pending </td>
                              <td><i /> 28/02/2018 </td>
                              <td><a href="#" className="table-action-btn"><i className="mdi mdi-pencil" /></a> <a href="#" className="table-action-btn"><i className="mdi mdi-eye" /></a> <a href="#" className="table-action-btn"><i className="mdi mdi-close" /></a></td>
                            </tr>
                            <tr>
                              <td><img src="assets/images/property/img-1.jpg" alt="contact-img" title="contact-img" className="rounded-circle property-img" /></td>
                              <td><h5 className="m-b-0 m-t-0 font-600">Real Property Investment</h5></td>
                              <td><i className="mdi mdi-map-marker text-primary" />#0,22ndFloor,27th Main NewYork </td>
                              <td><i className="mdi mdi-currency-usd text-warning" /> 2333 </td>
                              <td><i className="mdi mdi-currency-usd text-warning" /> 366 </td>
                              <td><i />Pending </td>
                              <td><i /> 28/02/2018 </td>
                              <td><a href="#" className="table-action-btn"><i className="mdi mdi-pencil" /></a> <a href="#" className="table-action-btn"><i className="mdi mdi-eye" /></a> <a href="#" className="table-action-btn"><i className="mdi mdi-close" /></a></td>
                            </tr>
                            <tr>
                              <td><img src="assets/images/property/img-1.jpg" alt="contact-img" title="contact-img" className="rounded-circle property-img" /></td>
                              <td><h5 className="m-b-0 m-t-0 font-600">Real Property Investment</h5></td>
                              <td><i className="mdi mdi-map-marker text-primary" /> #0,22ndFloor,27th Main NewYork </td>
                              <td><i className="mdi mdi-currency-usd text-warning" /> 2333 </td>
                              <td><i className="mdi mdi-currency-usd text-warning" /> 366 </td>
                              <td><i /> Pending </td>
                              <td><i /> 28/02/2018 </td>
                              <td><a href="#" className="table-action-btn"><i className="mdi mdi-pencil" /></a> <a href="#" className="table-action-btn"><i className="mdi mdi-eye" /></a> <a href="#" className="table-action-btn"><i className="mdi mdi-close" /></a></td>
                            </tr>
                            <tr>
                              <td><img src="assets/images/property/img-1.jpg" alt="contact-img" title="contact-img" className="rounded-circle property-img" /></td>
                              <td><h5 className="m-b-0 m-t-0 font-600">Real Property Investment</h5></td>
                              <td><i className="mdi mdi-map-marker text-primary" /> #0,22ndFloor,27th Main NewYork </td>
                              <td><i className="mdi mdi-currency-usd text-warning" /> 2333 </td>
                              <td><i className="mdi mdi-currency-usd text-warning" /> 366 </td>
                              <td><i /> Pending </td>
                              <td><i /> 28/02/2018 </td>
                              <td><a href="#" className="table-action-btn"><i className="mdi mdi-pencil" /></a> <a href="#" className="table-action-btn"><i className="mdi mdi-eye" /></a> <a href="#" className="table-action-btn"><i className="mdi mdi-close" /></a></td>
                            </tr>
                            <tr>
                              <td><img src="assets/images/property/img-1.jpg" alt="contact-img" title="contact-img" className="rounded-circle property-img" /></td>
                              <td><h5 className="m-b-0 m-t-0 font-600">Real Property Investment</h5></td>
                              <td><i className="mdi mdi-map-marker text-primary" /> #0,22ndFloor,27th Main NewYork </td>
                              <td><i className="mdi mdi-currency-usd text-warning" /> 2333 </td>
                              <td><i className="mdi mdi-currency-usd text-warning" /> 366 </td>
                              <td><i /> Pending </td>
                              <td><i /> 28/02/2018 </td>
                              <td><a href="#" className="table-action-btn"><i className="mdi mdi-pencil" /></a> <a href="#" className="table-action-btn"><i className="mdi mdi-eye" /></a> <a href="#" className="table-action-btn"><i className="mdi mdi-close" /></a></td>
                            </tr>
                            <tr>
                              <td><img src="assets/images/property/img-1.jpg" alt="contact-img" title="contact-img" className="rounded-circle property-img" /></td>
                              <td><h5 className="m-b-0 m-t-0 font-600">Real Property Investment</h5></td>
                              <td><i className="mdi mdi-map-marker text-primary" /> #0,22ndFloor,27th Main NewYork </td>
                              <td><i className="mdi mdi-currency-usd text-warning" /> 2333 </td>
                              <td><i className="mdi mdi-currency-usd text-warning" /> 366 </td>
                              <td><i /> Pending </td>
                              <td><i /> 28/02/2018 </td>
                              <td><a href="#" className="table-action-btn"><i className="mdi mdi-pencil" /></a> <a href="#" className="table-action-btn"><i className="mdi mdi-eye" /></a> <a href="#" className="table-action-btn"><i className="mdi mdi-close" /></a></td>
                            </tr>
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
            <footer className="footer">
              <div className="container">
                <div className="row">
                  <div className="col-12 text-center"> © 2018 Assets Watch. All Rights Reserved </div>
                </div>
              </div>
            </footer>
            {/* End Footer */} 
            {/* jQuery  */} 
            {/* Tether for Bootstrap */} 
            {/* Examples */} 
            {/* App js */} 
          </div>
        )
    }
}  

export default TenantMyProperty;