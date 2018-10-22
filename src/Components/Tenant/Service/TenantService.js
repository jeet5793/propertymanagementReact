import React from 'react'
import Header from '../Header/TenantHeader'
import avatar_1 from '../../../images/Owner/users/avatar-1.jpg'
import img_not_available from '../../../images/img_not_available.png'
import Cookies from 'js-cookie';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import API_URL from "../../../app-config";
import swal from 'sweetalert';
import $ from 'jquery';
class TenantService extends React.Component {
	constructor(props){
    super(props);
	this.sendRequest = this.sendRequest.bind(this)
	this.getSendedList = this.getSendedList.bind(this)
	this.getRequestedList = this.getRequestedList.bind(this)
	this.getResolvedList = this.getResolvedList.bind(this)
    this.state = {
			userInfo:props.userData,
			userData:Cookies.get('profile_data'),
			profileData:'',
			property_list:[],
			user_list:[],
			sendReq : {
				property_id:'',
				send_by : '',
				service_provider :'',
				service_msg : '',
				service_photo:''
			},
			sendedList:[],
			resolvedList:[],
			requestedList:[],
			serviceDetail:[]
		}
	this.onChangeHandler=this.onChangeHandler.bind(this)
	 this.fileInput = React.createRef();
	 this.onClickView = this.onClickView.bind(this)
	}
	onChangeHandler(e){
		let formData = new FormData();
		const requestForm = this.state.sendReq;
		if(e.target.name=="property_id")
			requestForm.property_id=e.target.value
		if(e.target.name=="service_provider")
			requestForm.service_provider=e.target.value
		if(e.target.name=="service_msg")
			requestForm.service_msg=e.target.value
		if(e.target.name=="service_photo")
		{
			let file = this.fileInput.current.files[0]
			let reader = new FileReader();
			reader.onload = () => {

			let result = reader.result;
			requestForm.service_photo = result;
			};
			reader.onerror = () => {
				console.log('image read error')
			};
			// reader.readAsBinaryString(file);
			 reader.readAsDataURL(file);
            formData.append('file', this.fileInput.current.files[0])
		}
			// requestForm.service_photo=e.target.files[0]
		
		requestForm.session_id=JSON.parse(this.state.userData).session_id;
		requestForm.send_by=JSON.parse(this.state.userData).assets_id;
		this.setState({sendReq:requestForm});
		this.setState({formData:formData});
		// console.log(this.state.sendReq)
	}
	sendRequest(){
		const opts = this.state.sendReq
		if(!opts.property_id){
        alert('Property should not be blank');
        return;
      }
	  if(!opts.service_provider){
        alert('Service Provider should not be blank');
        return;
      }
	  if(!opts.service_msg){
        alert('Message should not be blank');
        return;
      }
		
		

		fetch(`${API_URL}assetsapi/service_request_send/`, {
        method: 'post', 
		body: JSON.stringify(opts)
        }).then((response) => {
          return response.json();
        }).then((data) => {
          // console.log('dataaaa:  ', data);
          if(data.msg.indexOf("Service request send successfully")!=-1)
          {
            swal("Assets Watch", data.msg);
            //document.getElementsById("hidemodal").style.display = "none";
			const m = document.getElementById('hidemodal');
			m.style.display='none';
			window.location.reload();
			//alert(m);
          }
        else alert(data.msg)
        }).catch((error) => {
          console.log('error: ', error);
        });
	}
    componentDidMount(){
        var $=window.$
        $(".view-rqu").click(function(){
			
            $(".view-reslt").toggle();
        });
        // $('.datatable').DataTable();        
        // Buttons examples
        // var table = $('#datatable-buttons').DataTable({
            // lengthChange: false,
            // buttons: ['copy', 'excel', 'pdf', 'colvis']
        // });  
			this.getDropdownList();
    }
	
	getDropdownList(){
		fetch(`${API_URL}assetsapi/service_request/${JSON.parse(this.state.userData).assets_id}/${JSON.parse(this.state.userData).session_id}/`, {
			  method: 'get',
			})
			.then(res => res.json())
			.then(
			  (result) => {
				//console.log("data 2: "+JSON.stringify(profile))
				//alert("data 2: "+JSON.stringify(result));
				if (result.success) {
				   this.setState({property_list:result.service.property_list});
				   this.setState({user_list:result.service.users})
				  
				} 
				// console.log("property_list"+JSON.stringify(this.state.property_list))
				// console.log("user_list"+JSON.stringify(this.state.user_list))
			  },
			(error) => {
			  console.log('error')
			}
		  )       
	}
	getSendedList()
	{
		fetch(`${API_URL}assetsapi/service_send/${JSON.parse(this.state.userData).assets_id}/${JSON.parse(this.state.userData).session_id}/`, {
			  method: 'get',
			})
			.then(res => res.json())
			.then(
			  (result) => {
				//console.log("data 2: "+JSON.stringify(profile))
				//alert("data 2: "+JSON.stringify(result));
				if (result.success) {
				   this.setState({sendedList:result.service});
				   console.log(this.state.sendedList)
				  
				} 
				// console.log("property_list"+JSON.stringify(this.state.property_list))
				// console.log("user_list"+JSON.stringify(this.state.user_list))
			  },
			(error) => {
			  console.log('error')
			}
		  )       
	}
	getRequestedList()
	{
		var $=window.$
		$(".view-reslt").hide(); 
		fetch(`${API_URL}assetsapi/service_requested/${JSON.parse(this.state.userData).assets_id}/${JSON.parse(this.state.userData).session_id}/`, {
			  method: 'get',
			})
			.then(res => res.json())
			.then(
			  (result) => {
				//console.log("data 2: "+JSON.stringify(profile))
				//alert("data 2: "+JSON.stringify(result));
				if (result.success) {
				   this.setState({requestedList:result.service});
				   console.log(this.state.requestedList)
				  
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
		 
		fetch(`${API_URL}assetsapi/service_resolve/${JSON.parse(this.state.userData).assets_id}/${JSON.parse(this.state.userData).session_id}/`, {
			  method: 'get',
			})
			.then(res => res.json())
			.then(
			  (result) => {
				//console.log("data 2: "+JSON.stringify(profile))
				//alert("data 2: "+JSON.stringify(result));
				if (result.success) {
				   this.setState({resolvedList:result.service});
				   console.log(this.state.resolvedList)
				  
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
		fetch(`${API_URL}assetsapi/service_detail/`+serviceid+`/${JSON.parse(this.state.userData).session_id}/`, {
			  method: 'get',
			})
			.then(res => res.json())
			.then(
			  (result) => {
				//console.log("data 2: "+JSON.stringify(profile))
				//alert("data 2: "+JSON.stringify(result));
				if (result.success) {
				   this.setState({serviceDetail:result.service});
				   console.log(this.state.serviceDetail)
				  /*  const elmnt = document.getElementsByClassName("view-reslt");
				   alert(elmnt);
				   elmnt.style.display='block'; */
				   $(".view-reslt").toggle();
				} 
				// console.log("property_list"+JSON.stringify(this.state.property_list))
				// console.log("user_list"+JSON.stringify(this.state.user_list))
			  },
			(error) => {
			  console.log('error')
			}
		  )       
          
	}
	hideModel()
	{
		var $=window.$;
		$(".modal-backdrop").hide();
	}
	changeTabs(id) {
        if (id == "v-requested") {
            $("#sendTab").removeClass("active")
            $("#resolveTab").removeClass("active")

        } else if (id == "v-send") {
            $("#requestedTab").removeClass("active")
            $("#resolveTab").removeClass("active")
        }
        else {
            $("#sendTab").removeClass("active")
            $("#requestedTab").removeClass("active")
        }
    }
    render() {
		const propertyList = this.state.property_list;
	const userList = this.state.user_list;
        return (
            <div>
                
                 <div className="wrapper">
                    <div className="container">
                        <div className="page-title-box">
                            <div className="btn-group pull-right">
                                <ol className="breadcrumb hide-phone p-0 m-0">
                                    <li><a href="#" data-toggle="modal" data-target="#send-request" className="btn btn-custom waves-light waves-effect w-md"><i className="fi-outbox"></i>&nbsp;&nbsp;Send Request</a></li>
                                </ol>
                            </div>
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
                                                    <li className="nav-item" onClick={this.changeTabs.bind(this, "v-send")}> <a id="sendTab" href="#v-send" className="nav-link" data-toggle="tab" aria-expanded="true" onClick={this.getSendedList}>Send</a> </li>
                                                    <li className="nav-item" onClick={this.changeTabs.bind(this, "v-Resolve")}> <a id="resolveTab"  href="#v-Resolve" className="nav-link" data-toggle="tab" aria-expanded="false" onClick={this.getResolvedList}>Resolve</a> </li>
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
                                                                    <td>{item.first_name+''+item.last_name}</td>
                                                                    <td>{item.entry_date}</td>
                                                                    <td>{item.service_status==1?'Resolved':'Pending'}</td>
                                                                    <td className="text-center"><a href="#" className="table-action-btn view-rqu" onClick={this.onClickView.bind(this,item.service_id)}><i className="mdi mdi-eye"></i></a></td>
                                                                    </tr>))
																	:<tr><td style={{textAlign:'center'}} colSpan={5}>No Request Available</td></tr>}
                                                                    
                                                                   
                                                                </tbody>
                                                            </table>
														
                                                         </div>:<div className=" table-responsive" style={{textAlign:'center'}}>No record available </div>}
                                                    </div>
                                                    <div className="tab-pane" id="v-send">
													{this.state.sendedList && (this.state.sendedList.length>0)?
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
																{(this.state.sendedList.length>0)?this.state.sendedList.map((item)=>( 
                                                                    <tr>
                                                                    <td className="tbl-text-overflow">{item.property_name}</td>
                                                                    <td>{item.first_name+''+item.last_name}</td>
                                                                    <td>{item.entry_date}</td>
                                                                    <td>{item.service_status==1?'Resolved':'Pending'}</td>
                                                                    <td className="text-center"><a href="#" className="table-action-btn view-rqu" onClick={this.onClickView.bind(this,item.service_id)}><i className="mdi mdi-eye"></i></a></td>
                                                                    </tr>))
																	:<tr><td style={{textAlign:'center'}} colSpan={5}>No Request Send</td></tr>}
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
                                                                    <td>{item.first_name+''+item.last_name}</td>
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
                            </div>
                            {/* <!-- end row --> */}
						
                            <div className="view-reslt" style={{display:'none'}}>
							{this.state.serviceDetail.map((item)=>( 
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card-box">
                                            <h4 className="m-t-0 header-title">Service Details </h4>
                                            <div className="search-item">
                                                <div className="media">
                                                    <img className="d-flex mr-3 rounded-circle" src={item.profile_photo!=''?API_URL+item.profile_photo:img_not_available} alt="Generic placeholder image" height="54" />
                                                    <div className="media-body">
                                                        <h5 className="media-heading">
                                                            <a href="#" className="text-dark">{item.first_name + item.last_name}</a>
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
                            </div>
							
                            {/* <!-- end row -->  */}
                            
                        </div>
                    {/* <!-- end container -->  */}
                    </div>
                </div>
                <div>
                    {/* modal body start */}
                        <div id="send-request" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: 'none'}}>
						
                            <div className="modal-dialog">
                                <div className="modal-content" id="hidemodal">
                                <div className="modal-header">
                                    <button type="button" onClick={this.hideModel} className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    <h4 className="modal-title">Send Request</h4>
                                </div>
                                <div className="modal-body">
                                    <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                        <label for="property_id" className="control-label">Property<span className="required"/> </label>
                                        <select className="form-control" name="property_id" onChange={this.onChangeHandler}>
										   <option>Please Select</option>
												{propertyList.map((option,key)=> (<option key={key.property_id} value={option.property_id}>{option.property_name}</option>))}
																	   
										  </select>	 
                                        </div>
                                    </div>
                                    </div> 
									<div className="row">
										<div className="col-md-12">
											<div className="form-group no-margin">
												<label for="service_provider" className="control-label">Name<span className="required"/></label>
													<select className="form-control" name="service_provider" onChange={this.onChangeHandler}>
													   <option>Please Select</option>
															{userList.map((option,key)=> (<option key={key.assets_id} value={option.profile_id}>{option.name}</option>))}
																				   
													  </select>	
											</div>
										</div>
									</div>									
                                    <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group no-margin">
                                        <label for="service_msg" className="control-label">Description<span className="required"/></label>
                                        <textarea className="form-control" id="field-7" placeholder="" name="service_msg" onChange={this.onChangeHandler}></textarea>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                                <input type="file" name="service_photo" onChange={this.onChangeHandler} id="u" placeholder="" ref={this.fileInput}/>
                                            </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary waves-effect" data-dismiss="modal" onClick={this.hideModel}>Close</button>
                                    <button type="button" className="btn btn-success waves-effect waves-light" onClick={this.sendRequest}>Save changes</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    {/* modal body end */}
                </div>
            </div>
        )
    }
}  

export default TenantService;