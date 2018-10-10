import React from 'react'
import Header from '../Header/Header'
import {removejscssfile} from '../../js/external'
export default class Report extends React.Component{
  clickFuction(e){

  }
  componentDidMount(){
    // debugger;
    removejscssfile('http:\\'+window.location.hostname+':'+window.location.port+'\assets\jqnew.js','js')
  }
    render(){
        return(

<div>
  <Header logoutLink={this.logoutLink} 
  name="report" 
  first_name={window.localStorage.getItem('firstName')} 
  last_name={window.localStorage.getItem('firstName')} />
  <div className="wrapper">
  <div className="container agentdis">
    <div className="page-title-box">
      <h4 className="page-title">Reports</h4>
    </div>
    <div className="col-md-12">
      <div className="row">
            <div className="col-md-12">
              <div className="card-box">
				  <h4 className="m-b-5 m-t-0 font-18">Property Report</h4>
				  <p className="text-muted m-b-15">Generate Property Report on Property or time interval based income and outcome.</p>
				  <a className="btn btn-custom waves-light waves-effect w-md" href="owner-report-table?property">View</a>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card-box">
				  <h4 className="m-b-5 m-t-0 font-18">Transaction Report</h4>
				  <p className="text-muted m-b-15 ">Generate Transaction Report on Property or time interval based income and outcome.</p>
				  <a className="btn btn-custom waves-light waves-effect w-md" href="owner-report-table?Transaction">View</a>
              </div>
            </div>
            {/* <!-- end col --> */}
            
			{/*  <div className="col-md-4">
              <div className="card-box">
				  <h4 className="m-b-5 m-t-0 font-18">Contact Report</h4>
				  <p className="text-muted m-b-15 ">Generate Contact Report on Property or time interval  based income and outcome.</p>
				  <a className="btn btn-custom waves-light waves-effect w-md" href="owner-report-table?Contact">View</a>
              </div>
	</div> */}
            {/* <!-- end col -->  */}
          </div>
    </div>
  </div>
  {/* <!-- end container -->  */}
</div>
</div>
        );
    }
}