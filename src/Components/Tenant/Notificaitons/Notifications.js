import React from 'react'
import avatar_1 from '../../../images/Owner/users/avatar-1.jpg'
import Header from '../Header/Header'
import { connect } from 'react-redux';
import API_URL from '../../../app-config'
import Cookies from 'js-cookie';
import $ from 'jquery';
class Notifications extends React.Component{
	constructor(props){
		super(props)
		this.onClickHandle = this.onClickHandle.bind(this);
		this.state = {
			userData : Cookies.get('profile_data'),
			notification:[],
			property_list:[],
			 user_list:[],
			 notiFormField:{
				sender:'',
				receiver:'',
				assets_type: '',
				message : '',
				session_id : ''
			 }
		}
		this.onChangeUserType = this.onChangeUserType.bind(this)
		this.onChangeHandle = this.onChangeHandle.bind(this)
	}
	
    hideModel()
	{
		var $=window.$;
		$(".modal-backdrop").hide();
	}
	onChangeUserType(e)
	{
		const assets_type = e.target.value; 
		// alert(assets_type);
		fetch(`${API_URL}assetsapi/userlist_notification/${JSON.parse(this.state.userData).assets_id}/`+assets_type+`/${JSON.parse(this.state.userData).session_id}/`, {
			  method: 'get',
			})
			.then(res => res.json())
			.then(
			  (result) => {
				
				if (result.success) {
				    this.setState({user_list:result.userlist});
					this.setState({assetsType:assets_type})

				} 
				
			  },
			(error) => {
			  console.log('error')
			}
		  )       
	}
	onChangeHandle(e)
	{
		const notiForm = this.state.notiFormField;
		
		if(e.target.name==='receiver')
			notiForm.receiver = e.target.value
		if(e.target.name === 'message')
			notiForm.message = e.target.value
		
		notiForm.sender = JSON.parse(this.state.userData).assets_id;
		notiForm.session_id = JSON.parse(this.state.userData).session_id;
		notiForm.assets_type = this.state.assetsType;
		
		this.setState({notiFormField:notiForm})
	}
	onClickHandle(){
		const opts = this.state.notiFormField;
		if (!opts.sender) {
		  alert("User Name should not be blank");
		  return;
		}
		if (opts.sender!==''){
			document.getElementById("notifyFormCancel").click();
			$("#loaderDiv").show();
			
			fetch(`${API_URL}assetsapi/send_notification/`, {
			method: 'post',          
			body: JSON.stringify(opts)
			}).then((response) => {
			  return response.json();
			}).then((data) => {
			  console.log('dataaaa:  ', data);
			  if(data)
			  {
					$("#loaderDiv").hide();
					   
					   $("#actionType").val("Yes");
					   $("#hiddenURL").val("tenant-notifications");
					   $(".confirm-body").html(data.msg);
					   $("#BlockUIConfirm").show();
					   
				/* swal("Assets Watch", data.msg);
					
				//document.getElementsById("hidemodal").style.display = "none";
				const m = document.getElementById('hidemoda');
				m.style.display='none';
				window.location.reload(); */
				//alert(m);
			  }
			
			}).catch((error) => {
			  console.log('error: ', error);
			});
		}
		
		
		
	}
    componentDidMount(){
        
			this.getNotification();
    }
	
	getNotification(){
		$("#loaderDiv").show();
		fetch(`${API_URL}assetsapi/notification/${JSON.parse(this.state.userData).assets_id}/${JSON.parse(this.state.userData).session_id}/`, {
			  method: 'get',
			})
			.then(res => res.json())
			.then(
			  (result) => {
				$("#loaderDiv").hide();
				if (result.success) {
					
				   this.setState({notification:result.notification});

				} 
				
			  },
			(error) => {
			  console.log('error')
			}
		  )       
	}
	// getDropdowns(){
		// fetch(`${API_URL}assetsapi/userSearch/`+notify_id+`/${JSON.parse(this.state.userData).session_id}/`, {
			  // method: 'get',
			// })
			// .then(res => res.json())
			// .then(
			  // (result) => {
				 // if(result.msg.indexOf("Notification deleted successfully")!=-1){
				   // alert(result.msg);
					 // window.location.reload();
				// } 
			  // },
			// (error) => {
			  // console.log('error')
			// }
		  // )       
	// }
	functDelete(notify_id){
		
		$("#loaderDiv").show();
		fetch(`${API_URL}assetsapi/delete_notification/`+notify_id+`/${JSON.parse(this.state.userData).session_id}/`, {
			  method: 'get',
			})
			.then(res => res.json())
			.then(
			  (result) => {
				   $("#loaderDiv").hide();
				 if(result){
				   
				  
				   
				   $("#actionType").val("Yes");
				   $("#hiddenURL").val("tenant-notifications");
				   $(".confirm-body").html(result.msg);
				   $("#BlockUIConfirm").show();
				   
				} 
			  },
			(error) => {
			  console.log('error')
			}
		  )       
	}
	
	
    render(){
     
	
        return(
            <div>
				<Header name="notifications"  first_name={window.localStorage.getItem('firstName')} 
                last_name={window.localStorage.getItem('firstName')} />
		<div className="wrapper">
			  <div className="container">
				<div className="page-title-box">
				  <div className="btn-group pull-right">
					<ol className="breadcrumb hide-phone p-0 m-0">
					  <li><a href="#" data-toggle="modal" data-target="#con-close-modal" className="btn btn-success waves-light waves-effect w-md"><i className="fi-bell" onClick={this.getDropdowns}></i>&nbsp;&nbsp;Send Notification</a></li>
					</ol>
				  </div>
				  <h4 className="page-title">Notifications</h4>
				</div>
				<div className="row">
				  <div className="col-12">
					<div className="card-box">
					  <div className="timeline timeline-left">
						<article className="timeline-item alt">
						  <div className="text-left">
							<div className="time-show first"> <a href="#" className="btn btn-primary w-lg">List</a> </div>
						  </div>
						</article>
						{this.state.notification.length>0?this.state.notification.map((item) => ( 
						<article className="timeline-item">
						  <div className="timeline-desk">
							<div className="panel">
							  <div className="timeline-box"> <span className="arrow"></span> <span className="timeline-icon"><i className="mdi mdi-checkbox-blank-circle-outline"></i></span>
								<h4 className="">{item.sender}</h4>
								<p className="timeline-date text-muted"><small>{item.date}</small></p>
								<p>{item.message}</p>
								<a href="#" className="delete-nitifi" onClick={this.functDelete.bind(this,item.notify_id)}><i className="fa fa-trash m-r-5"></i></a>
							  </div>
							</div>
						  </div>
						</article>
						)):<article className="timeline-item">
						  <div className="timeline-desk">
							<div className="panel">
							  <div className="timeline-box"> <span className="arrow"></span> <span className="timeline-icon"><i className="mdi mdi-checkbox-blank-circle-outline"></i></span>
								<h4 className="" style={{textAlign:'center'}}>No Notification Received</h4>
								</div>
							</div>
						  </div>
						</article>}
						
						
						
					  </div>
					  {/*<!-- end timeline --> */}
					</div>
					{/*<!-- end card-box --> */}
				  </div>
				  {/*<!-- end col --> */}
				</div>
				{/*<!-- end row --> */}
				
			  </div>
			 {/* <!-- end container --> */}
			</div>
			{/*<!-- end wrapper --> */}
			{/*<!-- Footer -->*/}
				<footer className="footer">
				  <div className="container">
					<div className="row">
					  <div className="col-12 text-center"> © 2018 Assets Watch. All Rights Reserved </div>
					</div>
				  </div>
				</footer>
				{/*<!-- End Footer -->*/}
				
				<div id="con-close-modal" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: "none"}}>
					  <div className="modal-dialog">
						<div className="modal-content">
						  <div className="modal-header">
							<button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
							<h4 className="modal-title">Send Notification</h4>
						  </div>
						  <div className="modal-body">
							<div className="row">
							  <div className="col-md-12">
								<div className="form-group">
								  <label for="field-1" className="control-label">Select To</label>
								  <select className="form-control">
									<option></option>
									<option>Owner</option>
									<option>Agent</option>
									<option>Tenant</option>
								  </select>
								</div>
							  </div>
							</div>
							<div className="row">
							  <div className="col-md-12">
								<div className="form-group">
								  <label for="field-3" className="control-label">Find Name</label>
								  <input type="text" className="form-control" id="field-3" placeholder=""/>
								</div>
							  </div>
							</div>
							<div className="row">
							  <div className="col-md-12">
								<div className="form-group no-margin">
								  <label for="field-7" className="control-label">Message</label>
								  <textarea className="form-control" id="field-7" placeholder=""></textarea>
								</div>
							  </div>
							</div>
						  </div>
						  <div className="modal-footer">
							<button type="button" id = "notifyFormCancel" className="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
							<button type="button" className="btn btn-success waves-effect waves-light">Save changes</button>
						  </div>
						</div>
					  </div>
					</div>
            </div>
        );
    }
}
export default connect(state=>({ userData: state.userData, userProfile: state.userProfile }))(Notifications)