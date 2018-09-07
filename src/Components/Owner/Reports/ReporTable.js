import React from 'react'
import Header from '../Header/Header'
import './style.css'
import {loadFile,removejscssfile} from '../../js/external'
import API_URL from '../../../app-config';
import Cookies from 'js-cookie';

const TableReprt=(props)=>{
    debugger;
    var expens=0;
   for(var i=0;i<props.report.length;i++){
       expens=Number(expens)+Number(props.report[i].transactionamount)
   }
    return(
        <div class=" table-responsive">
                    <table id="" class="table">
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
						  <td>01</td>
                          <td class="tbl-text-overflow">{element.title}</td>
                          <td>{element.transactiondate}</td>
                          <td></td>
                          <td>{element.transactionamount} </td>
                        </tr>)}
					</tbody>:'No Contact Available'}
						<tfoot>
						<tr>
							<td colspan="3" class="text-right"><b>Total :</b></td>
							<td><b>566</b></td>
							<td><b>{expens}</b></td>
							</tr>
						</tfoot>
                    </table>
                  </div>
    );
}
const FilterCriteria=(props)=>{
    var flag=false;
    // alert(window.location.search)
    // if(window.location.search=='?property')
    // flag=true;
    return(
        <div class="row">
              <div class="col-md-1">
                <label><b>Filter By:</b></label>
              </div>
          <div class="col-md-3">
                <select name="prop_name" class="form-control" id="paymentmode" onChange={props.change}>
                  <option>All</option>
                  {props.property.map(element=>(
                      <option value={element.id}>{element.title}</option>
                  ))}
                </select>
              </div>
				<div class="col-md-1">
                <label><b>Date:</b></label>
              </div>
              <div class="col-md-2" id="">
			  <input type="text" name="from_date" onChange={props.change} class="form-control test datepicker-autoclose" placeholder="From Date" /> 
				
				{/* <DatePicker id="fromDate" name="from_date" className="form-control" placeholder="From Date"
								dateFormat="DD-MM-YYYY"

									onChange={props.change}
				/> */}
              </div>
              <div class="col-md-2" id="">
			  <input type="text" name="to_date" onChange={props.change} class="form-control test datepicker-autoclose" placeholder="To Date"  id="" /> 
				
				{/* <DatePicker id="dobdate" name="to_date" className="form-control" placeholder="To Date"
								dateFormat="DD-MM-YYYY"
									onChange={props.change}
								/>*/}
              </div>
              <div class="col-md-1">
                <button type="button" onClick={props.submit} class="btn btn-icon waves-effect waves-light btn-success"> Go </button>
              </div>
				<div class="col-md-2 text-right">
				{/*  <button type="button" class="btn btn-icon waves-effect waves-light btn-success"><i class="fi-download "></i> Download </button> */}
              </div>
            </div>
    );
}
const ReportTableHeader=()=>{
    return(
        <div class="page-title-box">
                <div class="btn-group pull-right">
            <ol class="breadcrumb hide-phone p-0 m-0">
                <li><a href="report" class="btn btn-custom waves-light waves-effect w-md">
                    <i class="fi-outbox"></i>&nbsp;&nbsp;Back</a>
                </li>
            </ol>
            </div>
            <h4 class="page-title">Property Report</h4>
            </div>
    );
}
export default class ReportTable extends React.Component{
    constructor(props){
        super(props)
        
       


        this.imgServer=API_URL+'assetsadmin/',
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
            reports:{report:[{"title":"","transactiondate":"","transactionamount":""}]},
            formType:''
            }
            this.onChangeHandler=this.onChangeHandler.bind(this)
            this.submit=this.submit.bind(this)
    }
    submit(){
		
        // debugger;
        var formData={}
        if(this.state.formType=='?property')
        formData=this.state.createForm
        else
        formData=this.state.createForm
        if(this.state.formType==='?property'){
        fetch(`${API_URL}assetsapi/property_report`,{
            method:'post',
            body: JSON.stringify(formData)
        }).then(res=>res.json())
        .then((data)=>{
            debugger;
            console.log(data)
            if(data.success){
                this.setState({reports:data.report})
            }
        })}        
        else if(this.state.formType==='?Transaction'){
            fetch(`${API_URL}assetsapi/transaction_report`,{
                method:'post',
                body: JSON.stringify(formData)
            }).then(res=>res.json())
            .then((data)=>{
                debugger;
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
                debugger;
                console.log(data)
                if(data.success){
                    this.setState({reports:data.report})
                }
            })
        }
    }
    componentWillMount(){
       
        loadFile("assets 21/css/bootstrap.min.css",'css')
        loadFile("assets 21/css/style.css",'css')
        loadFile("assets 21/js/jquery.min.js",'js')
        loadFile("assets 21/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js",'js')
        
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
             $('.test').datepicker();
        }
        script.src = 'assets 21/js/jquery.min.js';
        head.appendChild(script);
        $('.datepicker-autoclose').datepicker({
            autoclose: true,
            todayHighlight: true
        });
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
        var ReportTable={}
        // if(this.state.formType=='?property')
        // ReportTable=this.state.createForm
        // else
        ReportTable=this.state.createForm
        // debugger;
        //   const ReportTable=this.state.createForm
          var tmp=e.value;
          if(e.target.name==="prop_name")
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
			ReportTable.prop_name=e.target.value
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
    render(){
        debugger;
        const report=this.state.reports
        return(

<div>
    <Header logoutLink={this.logoutLink} 
    name="report" 
    first_name={window.localStorage.getItem('firstName')} 
    last_name={window.localStorage.getItem('firstName')} />
    <div class="wrapper" style={{marginTop:'5%'}}>
        <div class="container agentdis">
            <ReportTableHeader />
            <div class="card-box">
                <div class="form-group search-sec">
                    <FilterCriteria property={this.state.property} submit={this.submit} change={this.onChangeHandler} />
                </div>
                <TableReprt report={report.report} />
            </div>
        </div>
    </div>
</div>
        );
    }
}