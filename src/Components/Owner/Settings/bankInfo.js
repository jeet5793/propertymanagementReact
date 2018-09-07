import React from 'react'

export default class BankInfo extends React.Component{
    render(){
        return(
            <div className="tab-pane fade" id="bank-info">
                <div className="form-group">
                    <div className="row">
                    <div className="col-md-6">
                        <label for="holder-name">Account Holder Name</label>
                    <input type="text" className="form-control" id="holder-name" placeholder="" />
                    </div>
                    <div className="col-md-6">
                        <label for="account-number">Account Number</label>
                    <input type="text" className="form-control" id="account-number" placeholder="" />
                    </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                    <div className="col-md-6">
                        <label for="branch">Branch</label>
                    <input type="text" className="form-control" id="branch" placeholder="" />
                    </div>
                    <div className="col-md-6">
                        <label for="bank-name">Bank Name</label>
                    <input type="text" className="form-control" id="bank-name" placeholder="" />
                    </div>
                    </div>
                </div>
                <div className="col-md-12 text-right">
                    <button type="submit" className="btn btn-primary stepy-finish text-right">Submit</button>
                </div>
            </div>
        );
    }
}