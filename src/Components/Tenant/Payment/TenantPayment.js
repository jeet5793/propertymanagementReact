import React from 'react'

class TenantPayment extends React.Component {
    render() {
        return (
            <div>
               
                <div className="wrapper">
                <div className="container">
                    <div className="page-title-box"> 
                    {/*<div class="btn-group pull-right">
            <ol class="breadcrumb hide-phone p-0 m-0">
                <li><a href="#" data-toggle="modal" data-target="#send-request" class="btn btn-custom waves-light waves-effect w-md"><i class="fi-outbox"></i>&nbsp;&nbsp;Send Request</a></li>
            </ol>
            </div>*/}
                    <h4 className="page-title">Payment</h4>
                    </div>
                    <div className="row">
                    <div className="col-12">
                        <div className="search-result-box card-box">
                        <ul className="nav nav-tabs tabs-bordered">
                            <li className="nav-item"> <a href="#subscription" data-toggle="tab" aria-expanded="true" className="nav-link active font-16">Subscription </a> </li>
                            <li className="nav-item"> <a href="#card-profile" data-toggle="tab" aria-expanded="false" className="nav-link font-16">Card Profile </a> </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active" id="subscription">
                            <form className>
                                <div className="form-group form cf">
                                <section className="payment-type cf">
                                    <ul className="pay-type">
                                    <li>
                                        <input type="radio" name="portion_selection" id="singular" defaultValue="button_one" />
                                        <label className="credit-label four col" htmlFor="singular"><span className="pay-name">Singularbillpay</span> <img src="assets/images/sing-logo.png" className="center-block img-responsive" width={120} /> </label>
                                    </li>
                                    <li>
                                        <input type="radio" name="portion_selection" id="amazon" defaultValue="button_two" />
                                        <label className="debit-label four col" htmlFor="amazon"> <span className="pay-name">Amazon</span> <img src="assets/images/amazon.png" className="center-block img-responsive" width={120} /> </label>
                                    </li>
                                    <li>
                                        <input type="radio" name="portion_selection" id="paypal" defaultValue="button_three" />
                                        <label className="debit-label four col" htmlFor="paypal"> <span className="pay-name">Paypal</span> <img src="assets/images/paypal.png" className="center-block img-responsive" width={120} />{/* width="110"*/} 
                                        </label>
                                    </li>
                                    </ul>
                                </section>
                                </div>
                                <div className id="portion_one" style={{display: 'none'}}>
                                <div className="form-group">
                                    <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-2">
                                        <label htmlFor="dba-name">DBA Name</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="dba-name" placeholder />
                                        </div>
                                        <div className="col-md-2">
                                        <label htmlFor="legal-name">Legal Name</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="legal-name" placeholder />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-2">
                                        <label htmlFor="business-address1">Business Address1</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="business-address1" placeholder />
                                        </div>
                                        <div className="col-md-2">
                                        <label htmlFor="business city">Business City</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="email" className="form-control" id="fed-tax-id" placeholder />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-2">
                                        <label htmlFor="business-state-province">Business State Province</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="business-state-province" placeholder />
                                        </div>
                                        <div className="col-md-2">
                                        <label htmlFor="business-postal-code">Business Postal Code</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="business-postal-code" placeholder />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-2">
                                        <label htmlFor="business-phone-number">Business Phone No</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="business-phone-number" placeholder />
                                        </div>
                                        <div className="col-md-2">
                                        <label htmlFor="email">E-Mail *</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="email" className="form-control" id="email" placeholder />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-2">
                                        <label htmlFor="principal-first-name">Principal First Name *</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="principal-first-name" placeholder />
                                        </div>
                                        <div className="col-md-2">
                                        <label htmlFor="principal-last-name">Principal Last Name</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="principal-last-name" placeholder />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className>
                                    <div className="col-md-12 text-right"> <a type className="btn btn-primary stepy-finish text-right" data-toggle="modal" data-target="#send-request">Submit</a> </div>
                                </div>
                                </div>
                                <div className id="portion_two" style={{display: 'none'}}>
                                <div className="form-group">
                                    <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-2">
                                        <label htmlFor="dba-name">Amazon Name</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="dba-name" placeholder />
                                        </div>
                                        <div className="col-md-2">
                                        <label htmlFor="legal-name">Legal Name</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="legal-name" placeholder />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-2">
                                        <label htmlFor="business-address1">Business Address1</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="business-address1" placeholder />
                                        </div>
                                        <div className="col-md-2">
                                        <label htmlFor="business city">Business City</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="email" className="form-control" id="fed-tax-id" placeholder />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-2">
                                        <label htmlFor="business-state-province">Business State Province</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="business-state-province" placeholder />
                                        </div>
                                        <div className="col-md-2">
                                        <label htmlFor="business-postal-code">Business Postal Code</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="business-postal-code" placeholder />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-2">
                                        <label htmlFor="business-phone-number">Business Phone No</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="business-phone-number" placeholder />
                                        </div>
                                        <div className="col-md-2">
                                        <label htmlFor="email">E-Mail *</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="email" className="form-control" id="email" placeholder />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-2">
                                        <label htmlFor="principal-first-name">Principal First Name *</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="principal-first-name" placeholder />
                                        </div>
                                        <div className="col-md-2">
                                        <label htmlFor="principal-last-name">Principal Last Name</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="principal-last-name" placeholder />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className>
                                    <div className="col-md-12 text-right">
                                    <button type="submit" className="btn btn-primary stepy-finish text-right">Submit</button>
                                    </div>
                                </div>
                                </div>
                                <div className id="portion_three" style={{display: 'none'}}>
                                <div className="form-group">
                                    <div className="alert alert-warning alert-dismissible fade show text-center" role="alert"> You should check in on some of those
                                    fields below. </div>
                                </div>
                                </div>
                            </form>
                            <div className="clearfix" />
                            </div>
                            {/* end All results tab */} 
                            {/* Users tab */}
                            <div className="tab-pane" id="card-profile">
                            <form className>
                                <div className="form-group form cf">
                                <section className="payment-type cf">
                                    <ul className="pay-type">
                                    <li>
                                        <input type="radio" name="portion_selection" id="singular-card" defaultValue="card-one" />
                                        <label className="credit-label four col" htmlFor="singular-card"><span className="pay-name">Singularbillpay</span> <img src="assets/images/sing-logo.png" className="center-block img-responsive" width={120} /> </label>
                                    </li>
                                    <li>
                                        <input type="radio" name="portion_selection" id="amazon-card" defaultValue="card-two" />
                                        <label className="debit-label four col" htmlFor="amazon-card"> <span className="pay-name">Amazon</span> <img src="assets/images/amazon.png" className="center-block img-responsive" width={120} /> </label>
                                    </li>
                                    <li>
                                        <input type="radio" name="portion_selection" id="paypal-card" defaultValue="card-three" />
                                        <label className="debit-label four col" htmlFor="paypal-card"> <span className="pay-name">Paypal</span> <img src="assets/images/paypal.png" className="center-block img-responsive" width={120} />{/* width="110"*/} 
                                        </label>
                                    </li>
                                    </ul>
                                </section>
                                </div>
                                <div className id="card-one" style={{display: 'none'}}>
                                <div className="form-group">
                                    <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-2">
                                        <label htmlFor="address">Address</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="address" placeholder />
                                        </div>
                                        <div className="col-md-2">
                                        <label htmlFor="city">City</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="city" placeholder />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-2">
                                        <label htmlFor="country">Country</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="country" placeholder />
                                        </div>
                                        <div className="col-md-2">
                                        <label htmlFor="currency">Currency</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="email" className="form-control" id="currency" placeholder />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-2">
                                        <label htmlFor="cvv">Cvv</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="cvv" placeholder />
                                        </div>
                                        <div className="col-md-2">
                                        <label htmlFor="exp-date">Expiry MM-YYYY</label>
                                        </div>
                                        <div className="col-md-4">
                                        <div className="row">
                                            <div className="col-md-6">
                                            <select className="form-control">
                                                <option>Month</option>
                                                <option>01</option>
                                                <option>02</option>
                                                <option>03</option>
                                                <option>04</option>
                                                <option>05</option>
                                                <option>06</option>
                                                <option>07</option>
                                                <option>08</option>
                                                <option>09</option>
                                            </select>
                                            </div>
                                            <div className="col-md-6">
                                            <select className="form-control">
                                                <option>Year</option>
                                                <option>2021</option>
                                                <option>2022</option>
                                            </select>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-2">
                                        <label htmlFor="email">Email</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="email" className="form-control" id="email" placeholder />
                                        </div>
                                        <div className="col-md-2">
                                        <label htmlFor="order-id">Order Id</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="order-id" placeholder />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-2">
                                        <label htmlFor="partner-id">Partner Id</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="partner-id" placeholder />
                                        </div>
                                        <div className="col-md-2">
                                        <label htmlFor="partner-key">Partner Key</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="partner-key" placeholder />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-2">
                                        <label htmlFor="first-name">Payee First Name</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="first-name" placeholder />
                                        </div>
                                        <div className="col-md-2">
                                        <label htmlFor="last-name">Payee Last Name</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="last-name" placeholder />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-2">
                                        <label htmlFor="payee-id">Payee Id</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="payee-id" placeholder />
                                        </div>
                                        <div className="col-md-2">
                                        <label htmlFor="payment-mode">Payment Mode</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="payment-mode" placeholder />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-2">
                                        <label htmlFor="profile-id">Profile Id</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="profile-id" placeholder />
                                        </div>
                                        <div className="col-md-2">
                                        <label htmlFor="routing-number">Routing Number</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="routing-number" placeholder />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-2">
                                        <label htmlFor="state">State</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="state" placeholder />
                                        </div>
                                        <div className="col-md-2">
                                        <label htmlFor="account-number">Account Number</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="account-number" placeholder />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-2">
                                        <label htmlFor="ud-field1">Ud Field1</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="ud-field1" placeholder />
                                        </div>
                                        <div className="col-md-2">
                                        <label htmlFor="ud-field2">Ud Field2</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="ud-field2" placeholder />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-2">
                                        <label htmlFor="ud-field3">Ud Field3</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="ud-field3" placeholder />
                                        </div>
                                        <div className="col-md-2">
                                        <label htmlFor="zip">ZIP</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="zip" placeholder />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className>
                                    <div className="col-md-12 text-right">
                                    <button type="submit" className="btn btn-primary stepy-finish text-right">Submit</button>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="row batchtable-clp">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding batch-list align-item-center">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding">
                                        <div className="dayandtime-clp-batch col-lg-3 col-md-6 col-sm-6 col-xs-12 no-padding">
                                            <div className="days-time-table no-padding day border-right-day"> <span id="days_9226"><span className="time-change-wrapper">Expiry Date</span> </span> ( 06-2022 ) </div>
                                        </div>
                                        <div className="dayandtime-clp-batch col-lg-4 col-md-6 col-sm-6 col-xs-12 no-padding">
                                            <div className="days-time-table no-padding day border-right-day"> <span id="days_9226"><span className="time-change-wrapper">First Name</span> </span> ( First Name ) </div>
                                        </div>
                                        <div className="dayandtime-clp-batch col-lg-4 col-md-6 col-sm-6 col-xs-12 no-padding">
                                            <div className="days-time-table no-padding day border-right-day"> <span id="days_9226"><span className="time-change-wrapper">Account No</span> </span> ( 9879875654xxxx54 ) </div>
                                        </div>
                                        <div className="dayandtime-clp-batch col-lg-2 col-md-6 col-sm-6 col-xs-12 no-padding">
                                            <div className="days-time-table no-padding day "> 
                                            <i className=" mdi mdi-lead-pencil edit-card" />
                                            <i className="mdi mdi-delete delete-card" />
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className id="card-two" style={{display: 'none'}}>
                                <div className="form-group">
                                    <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-2">
                                        <label htmlFor="dba-name">Amazon Name</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="dba-name" placeholder />
                                        </div>
                                        <div className="col-md-2">
                                        <label htmlFor="legal-name">Legal Name</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="legal-name" placeholder />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-2">
                                        <label htmlFor="business-address1">Business Address1</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="business-address1" placeholder />
                                        </div>
                                        <div className="col-md-2">
                                        <label htmlFor="business city">Business City</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="email" className="form-control" id="fed-tax-id" placeholder />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-2">
                                        <label htmlFor="business-state-province">Business State Province</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="business-state-province" placeholder />
                                        </div>
                                        <div className="col-md-2">
                                        <label htmlFor="business-postal-code">Business Postal Code</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="business-postal-code" placeholder />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-2">
                                        <label htmlFor="business-phone-number">Business Phone No</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="business-phone-number" placeholder />
                                        </div>
                                        <div className="col-md-2">
                                        <label htmlFor="email">E-Mail *</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="email" className="form-control" id="email" placeholder />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-2">
                                        <label htmlFor="principal-first-name">Principal First Name *</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="principal-first-name" placeholder />
                                        </div>
                                        <div className="col-md-2">
                                        <label htmlFor="principal-last-name">Principal Last Name</label>
                                        </div>
                                        <div className="col-md-4">
                                        <input type="text" className="form-control" id="principal-last-name" placeholder />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className>
                                    <div className="col-md-12 text-right">
                                    <button type="submit" className="btn btn-primary stepy-finish text-right">Submit</button>
                                    </div>
                                </div>
                                </div>
                                <div className id="card-three" style={{display: 'none'}}>
                                <div className="form-group">
                                    <div className="alert alert-warning alert-dismissible fade show text-center" role="alert"> You should check in on some of those
                                    fields below. </div>
                                </div>
                                </div>
                            </form>
                            <div className="clearfix" />
                            </div>
                            {/* end Users tab */} 
                        </div>
                        </div>
                    </div>
                    {/* end row */}
                    <div className="view-reslt" style={{display: 'none'}}>
                        <div className="row">
                        <div className="col-12">
                            <div className="card-box">
                            <h4 className="m-t-0 header-title">View</h4>
                            <div className="search-item">
                                <div className="media"> <img className="d-flex mr-3 rounded-circle" src="assets/images/users/avatar-1.jpg" alt="Generic placeholder image" height={54} />
                                <div className="media-body">
                                    <h5 className="media-heading"> <a href="#" className="text-dark">Chadengle</a> </h5>
                                    <p className="font-13"> <b>Status:</b> <span>Pending</span> </p>
                                    <p className="font-13"> <b>Requested Date:</b> <span>09-05-2018</span> </p>
                                    <p className="font-13"> <b>Resolve Date:</b> <span>10-05-2018</span> </p>
                                    <p className="m-b-0 font-13"> <b>Discription:</b> <br />
                                    <span className="text-muted">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</span> </p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
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
                {/* Modal */}
                <div id="custom-modal" className="modal-demo">
                    <button type="button" className="close" onclick="Custombox.close();"> <span>×</span><span className="sr-only">Close</span> </button>
                    <h4 className="custom-modal-title">Modal title</h4>
                    <div className="custom-modal-text"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </div>
                </div>
                <div id="send-request" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: 'none'}}>
                    <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <div className>
                        <iframe src="https://devenroll.singularbillpay.com/Enroll/index?cpid=singu_99244" className="iform" />
                        </div>
                    </div>
                    </div>
                </div>
                {/* jQuery  */} 
                {/* Tether for Bootstrap */} 
                {/* Required datatable js */} 
                {/* Responsive examples */} 
                {/* App js */} 
                </div>
            </div>
        )
    }
}  

export default TenantPayment;