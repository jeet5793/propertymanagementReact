import React from 'react'
import Header from '../Header/TenantHeader'
//import './style.css'
import {loadFile,removejscssfile} from '../../js/external'
import API_URL from '../../../app-config';
import Cookies from 'js-cookie';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
const TableReprt=(props)=>{
    // debugger;
    var expens=0;
   for(var i=0;i<props.report.length;i++){
       expens=Number(expens)+Number(props.report[i].transactionamount)
   }
   console.log(props);
    return(
        <div className=" table-responsive">
		{props.formType==='?property'?
                    <table id="" className="table">
                      <thead>
                        <tr>
						<th>Sl.No</th>
                          <th>Property Name</th>
                          <th>Date</th>
                          <th>Income</th>
                          <th>Expenses</th>
                        </tr>
                      </thead>
					{ props.report?
                      <tbody>
						{props.report.map(element=><tr>
						  <td></td>
                          <td className="tbl-text-overflow">{element.title}</td>
                          <td>{element.transactiondate}</td>
                          <td></td>
                          <td>{element.transactionamount} </td>
                        </tr>)}
					</tbody>:'No Contact Available'}
						<tfoot>
						<tr>
							<td colspan="3" className="text-right"><b>Total :</b></td>
							<td><b></b></td>
							<td><b>{expens}</b></td>
							</tr>
						</tfoot>
                    </table>
		:''}
		{(props.formType==='?Transaction')?
					<table id="" className="table">
                      <thead>
                        <tr>
						<th>Sl.No</th>
                          <th>Transaction For</th>
                          <th>Date</th>
                          <th>Transaction Amount</th>
                          <th>Invoice Number</th>
                        </tr>
                      </thead>
					{ props.report?
                      <tbody>
						{props.report.map((element,index)=><tr>
						  <td>{index + 1}</td>
                          <td className="tbl-text-overflow">{element.trans_for}</td>
                          <td>{element.transactiondate}</td>
                          
                          <td>{element.transactionamount} </td>
						  <td><button className="btn-success" onClick={props.incoiceDownload.bind(this,element.invoice_number)}>{element.invoice_number}</button></td>
                        </tr>)}
					</tbody>: <tbody><td colSpan={5}>'No transaction Available'</td> </tbody>}
						<tfoot>
						<tr>
							<td colspan="3" className="text-right"><b>Total :</b></td>
							<td><b>{expens}</b></td>
							<td><b></b></td>
							</tr>
						</tfoot>
                    </table>:''}
				</div>
    );
}
const FilterCriteria=(props)=>{
    var flag=false;
    // alert(window.location.search)
    // if(window.location.search=='?property')
    // flag=true;
    return(
        <div className="row">
		 
		 {props.formType==='?property'?
				  <div className="col-md-1">
					<label><b>Filter By:</b></label>
				  </div>:''}
				 {props.formType==='?property'?
				  <div className="col-md-3">
					<select name="property_id" className="form-control" id="paymentmode" onChange={props.change}>
					  <option>All</option>
					  {props.property.map(element=>(
						  <option value={element.id}>{element.title}</option>
					  ))}
					</select>
				  </div>
			  :''}
				<div className="col-md-1">
                <label><b>Date:</b></label>
              </div>
              <div className="col-md-2" id="">
			  
				
				<DatePicker
					className='form-control'
					name='from_date'
					dateFormat="DD-MM-YYYY"
					selected={props.startDate}
					onChange={props.handleStChange}
				/>
              </div>
              <div className="col-md-2" id="">
			  <DatePicker
					className='form-control'
					name='to_date'
					dateFormat="DD-MM-YYYY"
					selected={props.endDate}
					onChange={props.handleEdChange}
				/>
              </div>
              <div className="col-md-1">
                <button type="button" onClick={props.submit} className="btn btn-icon waves-effect waves-light btn-success"> Go </button>
              </div>
				<div className="col-md-2 text-right">
				{/*  <button type="button" className="btn btn-icon waves-effect waves-light btn-success"><i className="fi-download "></i> Download </button> */}
              </div>
            </div>
    );
}
const ReportTableHeader=(props)=>{
    return(
        <div className="page-title-box">
                <div className="btn-group pull-right">
            <ol className="breadcrumb hide-phone p-0 m-0">
                <li><a href="owner-report" className="btn btn-custom waves-light waves-effect w-md">
                    <i className="fi-outbox"></i>&nbsp;&nbsp;Back</a>
                </li>
            </ol>
            </div>
            <h4 className="page-title"> {props.formType==='?property'?"Property Report":(props.formType==='?Transaction')?"Transaction Report":''} </h4>
            </div>
    );
}
export default class ReportTable extends React.Component{
    constructor(props){
        super(props)
        
       


        this.imgServer=API_URL,
        this.state = {
            flag:true,
			userInfo:props.userData,
			  userData:Cookies.get('profile_data'),
			  profileData:'',
            property:[],
            loggedOwner:props.owner,
            owner_id:props.owner_id,
            createForm:{
                property_id:"",
                user_id:"",
                from_date:"",
                to_date:"",
				session_id:""
            },
            // createForm1:{
                // user_id:"",
                // from_date:"",
                // to_date:""                
            // },
            reports:[],
            formType:'',
			startDate: moment(),
			endDate: moment()
            }
			 this.handleChange = this.handleChange.bind(this);
			 this.handleEdChange =this.handleEdChange.bind(this);
            this.onChangeHandler=this.onChangeHandler.bind(this)
            this.submit=this.submit.bind(this);
			this.incoiceDownload = this.incoiceDownload.bind(this)
    }
    submit(){
		
        // debugger;
		
        var formData=this.state.createForm;
		 formData.user_id = JSON.parse(this.state.userData).assets_id;
		 formData.session_id = JSON.parse(this.state.userData).session_id;
		  formData.from_date = this.state.startDate;
		 formData.to_date = this.state.endDate;
        
        if(this.state.formType==='?property'){
        fetch(`${API_URL}assetsapi/property_report`,{
            method:'post',
            body: JSON.stringify(formData)
        }).then(res=>res.json())
        .then((data)=>{
            // debugger;
            console.log(data)
            if(data.success){
                this.setState({reports:data.report})
            }
        })}        
        else if(this.state.formType==='?Transaction'){
			console.log('Transaction'+JSON.stringify(formData))
            fetch(`${API_URL}assetsapi/transaction_report`,{
                method:'post',
                body: JSON.stringify(formData)
            }).then(res=>res.json())
            .then((data)=>{
                // debugger;
                console.log(data)
                if(data.success){
                    this.setState({reports:data.report})
                }
            })  
        }
        else if(this.state.formType==='?Contact'){
            fetch(`${API_URL}assetsapi/contact_report`,{
                method:'post',
                body: JSON.stringify(formData)
            }).then(res=>res.json())
            .then((data)=>{
                // debugger;
                console.log(data)
                if(data.success){
                    this.setState({reports:data.report})
                }
            })
        }
    }
    componentWillMount(){
       
        loadFile("assets/css/bootstrap.min.css",'css')
        loadFile("assets/css/style.css",'css')
        loadFile("assets/js/jquery.min.js",'js')
        loadFile("assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js",'js')
        
    }
    componentDidMount(){
        // debugger;
        this.loadDatePicker();
        this.loadPropertyList();
        if(this.state.formType===''){
            this.setState({formType:window.location.search})
        }
    }
    loadDatePicker(){
        var $=window.$;
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
		
        script.onload = function() {
             // $('.test').datepicker();
        }
        script.src = 'assets/js/jquery.min.js';
        head.appendChild(script);
        // $('.datepicker-autoclose').datepicker({
            // autoclose: true,
            // todayHighlight: true
        // });
    }
    loadPropertyList(){
        // debugger;
		fetch(`${API_URL}assetsapi/property_by/${JSON.parse(this.state.userData).assets_id}/${JSON.parse(this.state.userData).session_id}`, {
		  method: 'get'
		})
		.then(res => res.json())
		.then(
		  (data) => {
            //console.log("data 2: "+JSON.stringify(result.profile))
            debugger;
			if (data.success) {
			  this.setState({property:data.property})
			  //console.log(this.state.statics);
			} 
			//console.log("set user data"+JSON.stringify(this.state.profileData))
		  },
		(error) => {
		  console.log('error')
		}
	  )
    }
    onChangeHandler(e){
		// var temp = e.target.name+"::"+e.target.value;
        var ReportTable={}
        // if(this.state.formType=='?property')
        // ReportTable=this.state.createForm
        // else
        ReportTable=this.state.createForm
        // debugger;
        //   const ReportTable=this.state.createForm
          var tmp=e.value;
          if(e.target.name==="property_id")
          {
            // agreementForm.agreement_title=e.target.value;
            // alert(e.target.value)
            // var property=this.state.property
            // property.forEach(function(element,index){
                // debugger;
                // if(element.title=== ReportTable.property_id)
                // ReportTable.property_id=element.id
            // })
            // ReportTable.property_id=e.target.value
			ReportTable.property_id=e.target.value
          }
          else if(e.target.name==="from_date")
          {
            ReportTable.from_date=e.target.value
          }
          else if(e.target.name==="to_date")
          {
            ReportTable.to_date=e.target.value
          }
		  
		  ReportTable.user_id = JSON.parse(this.state.userData).assets_id;
		  ReportTable.session_id = JSON.parse(this.state.userData).session_id;
		  
          // if(this.state.formType==='?property')
          this.setState({createForm:ReportTable})
          // else
          // this.setState({createForm1:ReportTable})
	  console.log(this.state.createForm);
      }
	  handleChange(date) {
    this.setState({
      startDate: date
    });
	  }
	  handleEdChange(date){
	this.setState({
      endDate: date
    });
  }
  incoiceDownload(invoiceNumber){
	 window.open(`${API_URL}assetsapi/download_trans_invoice_report/`+invoiceNumber,'_self');
  }
    render(){
        // debugger;
        const Report=this.state.reports
        return(

<div>
    <Header logoutLink={this.logoutLink} 
    name="report" 
    first_name={window.localStorage.getItem('firstName')} 
    last_name={window.localStorage.getItem('firstName')} />
    <div className="wrapper">
        <div className="container agentdis">
            <ReportTableHeader formType = {this.state.formType}/>
            <div className="card-box">
                <div className="form-group search-sec">
                    <FilterCriteria property={this.state.property} submit={this.submit} formType = {this.state.formType} change={this.onChangeHandler} startDate = {this.state.startDate} endDate = {this.state.endDate} handleStChange={this.handleChange} handleEdChange={this.handleEdChange}/>
                </div>
                <TableReprt report={Report}  incoiceDownload = {this.incoiceDownload} formType = {this.state.formType}/>
            </div>
        </div>
    </div>
</div>
        );
    }
}