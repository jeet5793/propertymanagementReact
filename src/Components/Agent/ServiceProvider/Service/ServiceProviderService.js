import React from 'react';
import './ServiceProviderService.css';
import img_not_available from '../../../../images/img_not_available.png'
import Cookies from 'js-cookie';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import API_URL from "../../../../app-config";
import swal from 'sweetalert';
import $ from 'jquery';
import ServiceView from '../../../Owner/Service/ServiceView';
export default class ServiceProviderService extends React.Component{
constructor(props){
    super(props);
	this.getRequestedList = this.getRequestedList.bind(this)
	this.getResolvedList = this.getResolvedList.bind(this)
    this.state = {
			userInfo:props.userData,
			userData:Cookies.get('profile_data'),
			profileData:'',
			resolvedList:[],
			requestedList:[],
			serviceDetail:[]
		}

	 this.onClickView = this.onClickView.bind(this)
	}
	componentDidMount(){
		this.getRequestedList();
	}
	getRequestedList()
	{
		var $=window.$
		$(".view-reslt").hide();
$("#loaderDiv").show();		
		fetch(`${API_URL}assetsapi/service_requested/${JSON.parse(this.state.userData).assets_id}/${JSON.parse(this.state.userData).session_id}/`, {
			  method: 'get',
			})
			.then(res => res.json())
			.then(
			  (result) => {
				  $("#loaderDiv").hide();
				//console.log("data 2: "+JSON.stringify(profile))
				//alert("data 2: "+JSON.stringify(result));
				if (result.success) {
				   this.setState({requestedList:result.service});
				   // console.log(this.state.requestedList)
				  
				} 
				// console.log("property_list"+JSON.stringify(this.state.property_list))
				// console.log("user_list"+JSON.stringify(this.state.user_list))
			  },
			(error) => {
			  console.log('error')
			}
		  )       
	}
	getResolvedList()
	{
		var $=window.$
		 $(".view-reslt").hide();
		 $("#loaderDiv").show();	
		fetch(`${API_URL}assetsapi/service_resolve/${JSON.parse(this.state.userData).assets_id}/${JSON.parse(this.state.userData).session_id}/`, {
			  method: 'get',
			})
			.then(res => res.json())
			.then(
			  (result) => {
				  $("#loaderDiv").hide();	
				//console.log("data 2: "+JSON.stringify(profile))
				//alert("data 2: "+JSON.stringify(result));
				if (result.success) {
				   this.setState({resolvedList:result.service});
				   // console.log(this.state.resolvedList)
				  
				} 
				// console.log("property_list"+JSON.stringify(this.state.property_list))
				// console.log("user_list"+JSON.stringify(this.state.user_list))
			  },
			(error) => {
			  console.log('error')
			}
		  )       
	}
	onClickView(service_id)
	{
		const serviceid = service_id;
		var $=window.$
				// $(".view-rqu").click(function(){
					
					// $(".view-reslt").toggle();
				// });
		fetch(`${API_URL}assetsapi/service_detail/${JSON.parse(this.state.userData).assets_id}/`+serviceid+`/${JSON.parse(this.state.userData).session_id}/`, {
			  method: 'get',
			})
			.then(res => res.json())
			.then(
			  (result) => {
				//console.log("data 2: "+JSON.stringify(profile))
				//alert("data 2: "+JSON.stringify(result));
				if (result.success) {
				   this.setState({serviceDetail:result.service});
				   // console.log(this.state.serviceDetail)
				  /*  const elmnt = document.getElementsByClassName("view-reslt");
				   alert(elmnt);
				   elmnt.style.display='block'; */
				   $(".view-reslt").show();
				} 
				// console.log("property_list"+JSON.stringify(this.state.property_list))
				// console.log("user_list"+JSON.stringify(this.state.user_list))
			  },
			(error) => {
			  console.log('error')
			}
		  )       
          
	}
	changeTabs(id) {
        if (id == "v-requested") {
            $("#resolveTab").removeClass("active")

        }
        else {
            $("#requestedTab").removeClass("active")
        }
    }
	addDefaultSrc(ev){
	  ev.target.src = img_not_available;
	}
	render(){
		return(

			 <div>
       
        <div className="wrapper">
          <div className="container">
            <div className="page-title-box">
              
              <h4 className="page-title">Services</h4>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card-box">
                  <div className="tabs-vertical-env">
                    <div className="row">
                      <div className="col-md-2">
                        <ul className="nav tabs-vertical">
                          <li className="nav-item" onClick={this.changeTabs.bind(this, "v-requested")}> <a id="requestedTab" href="#v-requested" className="nav-link active" data-toggle="tab" aria-expanded="false" onClick={this.getRequestedList}>Requested</a> </li>
							  {/* <li className="nav-item" onClick={this.changeTabs.bind(this, "v-Resolve")}> <a id="resolveTab"  href="#v-Resolve" className="nav-link" data-toggle="tab" aria-expanded="false" onClick={this.getResolvedList}>Resolve</a> </li> */}
                        </ul>
                      </div>
                      <div className="col-md-10">
                        <div className="tab-content">
                          <div className="tab-pane active" id="v-requested">
                            {this.state.requestedList && (this.state.requestedList.length>0)?
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
                                        {(this.state.requestedList.length>0)?this.state.requestedList.map((item)=>( 
                                            <tr>
                                                <td className="tbl-text-overflow">{item.property_name}</td>
                                                <td>{item.first_name+' '+item.last_name}</td>
                                                <td>{item.entry_date}</td>
                                                <td>{item.service_status==1?'Resolved':'Pending'}</td>
                                                <td className="text-center"><a style={{cursor: "pointer"}} className="table-action-btn view-rqu" onClick={this.onClickView.bind(this,item.service_id)}><i className="mdi mdi-eye"></i></a></td>
                                                </tr>)):<tr><td style={{textAlign:'center'}} colSpan={5}>No Request Available</td></tr>}
                                       </tbody>
                                    </table>
														
                                </div>:<div className=" table-responsive" style={{textAlign:'center'}}>No record available </div>}
                             </div>
                          
                          <div className="tab-pane" id="v-Resolve">
													{this.state.resolvedList && (this.state.resolvedList.length>0)?
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
															{(this.state.resolvedList.length>0)?this.state.resolvedList.map((item)=>(
                                                                <tr>
                                                                    <td className="tbl-text-overflow">{item.property_name}</td>
                                                                    <td>{item.first_name+' '+item.last_name}</td>
                                                                    <td>{item.entry_date}</td>
                                                                    <td>{item.service_status==1?'Resolved':'Pending'}</td>
                                                                    <td className="text-center"><a href="#" className="table-action-btn view-rqu" onClick={this.onClickView.bind(this,item.service_id)}><i className="mdi mdi-eye"></i></a></td>
                                                                    </tr>))
																	:<tr><td style={{textAlign:'center'}} colSpan={5}>No Service Resolved</td></tr>}
                                                                
                                                            </tbody>
                                                        </table>
                                                    </div>:<div className=" table-responsive" style={{textAlign:'center'}}>No record available </div>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
								<ServiceView serviceDetail={this.state.serviceDetail}/>
                            </div>
              {/* end row */}
				  {/*<div className="view-reslt" style={{display:'none'}}>
							{this.state.serviceDetail.map((item)=>( 
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card-box">
                                            <h4 className="m-t-0 header-title">Service Details </h4>
                                            <div className="search-item">
                                                <div className="media">
                                                    <img onError={this.addDefaultSrc} className="d-flex mr-3 rounded-circle" src={item.profile_photo!=''?API_URL+item.profile_photo:img_not_available} alt="Generic placeholder image" height="54" />
                                                    <div className="media-body">
                                                        <h5 className="media-heading">
                                                            <a href="#" className="text-dark">{item.first_name +' '+  item.last_name}</a>
                                                        </h5>
                                                        <p className="m-b-5 font-14">
                                                        <span> <b>Status:</b>
                                                            <span>{item.service_status==1?'Resolved':'Pending'}</span>
                                                            </span>
                                                            <span>|</span>
                                                            <span>
                                                                <b>Requested Date:</b>
                                                            <span>{item.entry_date}</span>
                                                            </span>
                                                            <span>|</span>
                                                            <span>
                                                                <b>Resolve Date:</b>
                                                            <span>10-05-2018</span>
                                                            </span>
                                                        </p>
                                                        <p className="m-b-5 font-14">
                                                            <b>Property Title:</b>
                                                            <span className="text-muted">{item.property_name}</span>
                                                        </p>
                                                        <p className="font-14">
                                                            <b>Discription:</b>
                                                            <br />
                                                            <span className="text-muted">{item.description}</span>
                                                        </p>
                                                        <p className="m-b-0">
                                                        <ul className="serv-fil-down">
                                                            <li><a href=""><span>File Name</span>&nbsp; <i className="fi fi-inbox m-r-5"></i> </a></li>
                                                            <li><a href=""><span>File Name</span>&nbsp; <i className="fi fi-inbox m-r-5"></i> </a></li>
                                                        </ul>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
								))}
	</div>*/}
							
                            {/* <!-- end row -->  */}
                            
                        </div>
                    {/* <!-- end container -->  */}
                    </div>
                </div>
                <div>
          {/* end wrapper */} 
          {/* Footer */}
          
          {/* End Footer */}
          
          {/* jQuery  */} 
          {/* Tether for Bootstrap */} 
          {/* Required datatable js */} 
          {/* Responsive examples */} 
          {/* App js */} 
        </div></div>
			


			)
	}
}