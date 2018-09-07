import React from 'react';

export default class BrokerOnlinePayment extends React.Component{
	render(){
		return(
			  <div>
        {/* Logo container*/}
        <div className="logo text-center"> 
          {/* Text Logo */} 
          {/*<a href="index.html" class="logo">*/} 
          {/*Adminox*/} 
          {/*</a>*/} 
          {/* Image Logo */} 
          <a href="#" className="logo"> <img src="assets/images/logo_dark.png" alt className="logo-lg" /></a></div>
        <div className="payment-warp">
          <div className="container"> 
            {/* end page title end breadcrumb */}
            <div className="row">
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-md-3" />
                  <div className="col-sm-6 pay-now">
                    <div className="card-box widget-box-four">
                      <div className="card-body p-5">
                        <div className="amount-sec">
                          <div className="row">
                            <div className="col-md-7">
                              <h5>Pay Now</h5>
                              <p>Register</p>
                            </div>
                            <div className="col-md-5 text-right">
                              <h5>Total Amount</h5>
                              <h5>$ 119.00</h5>
                            </div>
                          </div>
                        </div>
                        <div className="bref-detail">
                          <div className="row">
                            <div className="col-md-2">
                              <label>Name :</label>
                            </div>
                            <div className="col-md-5">
                              <label>Name Kumar</label>
                            </div>
                            <div className="col-md-2">
                              <label>Date :</label>
                            </div>
                            <div className="col-md-3">
                              <label>15/06/2018</label>
                            </div>
                          </div>
                        </div>
                        <form role="form" className="card-dtl">
                          <div className="form-group">
                            <label htmlFor="name">Full Name (Card)</label>
                            <input type="text" className="form-control" name="name" placeholder required />
                          </div> {/* form-group.// */}
                          <div className="form-group">
                            <label htmlFor="cardNumber">Card Number</label>
                            <input type="text" className="form-control" name="cardNumber" placeholder />
                          </div> {/* form-group.// */}
                          <div className="row">
                            <div className="col-sm-8">
                              <div className="form-group">
                                <label><span className="hidden-xs">Exp</span> </label>
                                <div className="form-inline">
                                  <select className="form-control" style={{width: '45%'}}>
                                    <option>MM</option>
                                    <option>01 - Janiary</option>
                                    <option>02 - February</option>
                                    <option>03 - February</option>
                                  </select>
                                  <span style={{width: '10%', textAlign: 'center'}}> / </span>
                                  <select className="form-control" style={{width: '45%'}}>
                                    <option>YY</option>
                                    <option>2018</option>
                                    <option>2019</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="form-group">
                                <label data-toggle="tooltip" title data-original-title="3 digits code on back side of the card">CVV <i className="fa fa-question-circle" /></label>
                                <input className="form-control" required type="text" />
                              </div> {/* form-group.// */}
                            </div>
                          </div> {/* row.// */}
                          <div className="col-md-12 text-center">
                            <button type="button" className="btn btn-success uppercase" onclick>Confirm</button>
                          </div>
                        </form>
                      </div> {/* card-body.// */}
                    </div> {/* card.// */}
                  </div>
                  <div className="col-md-3" />
                </div>
              </div>
              <div className="col-md-12 text-center">
                <li className="list-inline-item"> <button type="button" className="btn btn-warning waves-effect w-md waves-light"><i className="dripicons-home" /> Back to Home</button></li>
              </div>
            </div>
            {/* end row */}
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
        {/* Counter js  */} 
        {/* App js */} 
      </div>


			)
	}
}