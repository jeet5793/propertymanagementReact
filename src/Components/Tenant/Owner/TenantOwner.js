import React from 'react'
import { connect } from 'react-redux';
import API_URL from "../../../app-config";
import img_not_available from '../../../images/img_not_available.png'
import Cookies from 'js-cookie';
import {Redirect,Link} from 'react-router-dom'
import Pagination from 'react-js-pagination';
import SendEmail from './SendEmail';
import swal from 'sweetalert';
 import Select from 'react-select';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
  import Autosuggest from 'react-autosuggest';
	import $ from "jquery";
	
	const loadScript=function(url, callback){

  var script = document.createElement("script")
  script.type = "text/javascript";

  if (script.readyState){  //IE
      script.onreadystatechange = function(){
          if (script.readyState == "loaded" ||
                  script.readyState == "complete"){
              script.onreadystatechange = null;
              callback();
          }
      };
  } else {  //Others
      script.onload = function(){
          callback();
      };
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}
class TenantOwner extends React.Component {
	constructor(props) {
    super(props);
	this.sendRequest = this.sendRequest.bind(this)
	this.sendMessage = this.sendMessage.bind(this)
    this.state = {
      
	  userInfo:props.userData,
	   userData:Cookies.get('profile_data'),
		 property_list:[],
		 receive_user_id:"",
		 propertyByUser:[],
			 value: '',
			 suggestions: [],
			 searchValue:'',
			 searchInputData:[],
		 user_list:[],
		 sendReq : {
			 assets_id:'',
			 invite_id:'',
			 property_id:'',
			 session_id:'',
			 message:''
		 },
		 
		 
		 
		  joinedPost:{
			 user_id:'',
			 assets_type:'',
			 session_id:''
		 },
		 joinedList:[],
		 requestedPost:{
			 user_id:'',
			 assets_type:'',
			 session_id:''
		 },
		 requestedList:[],
		  requestedListConst: 5,
		 sendForm:{
				sender:'',
				receiver:'',
				message:'',
				session_id:''
			},
		activePageReq: 1,
        activePageJoined: 1,
        itemsCountPerPageReq: 3,
        itemsCountPerPageJoined: 3,
		activePageHistory: 1,
		 itemsCountPerPageHistory: 10,
		// value: "",
         autocompleteData: [],
		selectedOption: null,
		profileData:[],
		inviteStatus:[],
		connectionHistory:[]
    };
	this.onChangeHandler=this.onChangeHandler.bind(this)
	this.acceptRequest=this.acceptRequest.bind(this)
	this.messagerec=this.messagerec.bind(this)
	this.onChangeSMHandler = this.onChangeSMHandler.bind(this)
	this.handlePageChangeRequestedList = this.handlePageChangeRequestedList.bind(this);
	this.handlePageChangeJoinedList = this.handlePageChangeJoinedList.bind(this);
	this.handlePageChangeHistory = this.handlePageChangeHistory.bind(this);

		// this.handleChange = this.handleChange.bind(this);
		this.searchUser=this.searchUser.bind(this);
		this.changeTabs = this.changeTabs.bind(this);
		this.TerminateUser = this.TerminateUser.bind(this);
  }
   hideModel()
{
	var $=window.$;
	$(".modal-backdrop").hide();
}
	 getSuggestions() {
			 return this.state.propertyByUser.filter(lang =>
				 lang.label
			 );
	 };

	 getSuggestionValue(suggestion) {
		// console.log("onSuggestionSelected",suggestion)
		 this.setState({
			 searchValue: suggestion.label,
			 receive_user_id: suggestion.value
		 },()=>{
			 this.onSuggestionSelected()
		 })
		 return suggestion.label!="No Results Found"?suggestion.label:""
	 }
	 renderSuggestion(suggestion) {
		 return (
			 <span>
				 <i style={{marginRight:10}}  aria-hidden="true"></i>
				 {suggestion.label!="No Results Found"?suggestion.label:"No records found.!!!"}
			 </span>
		 )
	 }

	 onChange = (event, { newValue }) => {
	// console.log("onChange ",newValue)
		 this.setState({
			 value: newValue
		 },()=>{
			this.searchUser()
		 });
	 };

	 onSuggestionSelected = () => {
		var searchValue = $('.react-autosuggest__input').val()
		this.setState({
			searchInputData:searchValue
		})
	};

	onSuggestionsFetchRequested = () => {
		this.searchUser()
	};

	onSuggestionsClearRequested = () => {
		// console.log("onSuggestionsClearRequested ")
		this.setState({
			suggestions: []
		});
	};
	searchUser() {
		var searchValue = $('.react-autosuggest__input').val()
		const session = JSON.parse(this.state.userData).session_id;  
		// console.log("selVal"+searchValue);
		const opts ={assets_type:1,keyword:searchValue,session_id:session}
		// console.log("optsssss1111"+JSON.stringify(opts));
		fetch(`${API_URL}assetsapi/user_search`, {
			method: 'POST',
		body: JSON.stringify(opts)
		})
		.then(res => res.json())
		.then(
			(result) => {
			// console.log("data22222: "+JSON.stringify(result))
			if (result.success) {
			
				// console.log("ifffff: "+JSON.stringify(result))
						this.setState({propertyByUser:result.search_userlist},()=>{
							this.setState({
								suggestions: this.getSuggestions()
							});
						})
					
			} else{
				// console.log("elseee"+JSON.stringify(result))
				this.setState({propertyByUser:[{"value":"","label":"No Results Found"}]},()=>{
					this.setState({
						suggestions: this.getSuggestions()
					});
				})
			}
			// console.log("autocompleteData"+JSON.stringify(this.state.propertyByUser))
			},
		(error) => {
			console.log('error',error)
		}
		) 

	}
  componentDidMount(){  
   const session = JSON.parse(this.state.userData).session_id;  
    // loadScript('assets/js/bootstrap.min.js',function(){
      // var $=window.$;
    // $('[data-toggle="tooltip"]').tooltip();  
    // })
    
    
	this.inviteDropdowns();
	this.joinedList();
	this.requestedList();
	
	
	 
  }

  inviteDropdowns(){
	   
		/* fetch(`${API_URL}assetsapi/invite_request/1/${JSON.parse(this.state.userData).session_id}/`, {
			  method: 'get',
			})
			.then(res => res.json())
			.then(
			  (result) => {
				//console.log("data 2: "+JSON.stringify(profile))
				//alert("data 2: "+JSON.stringify(result));
				if (result.success) {
				   this.setState({property_list:result.invitation.property});
				   this.setState({user_list:result.invitation.users})
				  
				} 
				// console.log("property_list"+JSON.stringify(this.state.property_list))
				// console.log("user_list"+JSON.stringify(this.state.user_list))
			  },
			(error) => {
			  console.log('error')
			}
		  )      */  
		  fetch(`${API_URL}assetsapi/property/`)
		.then((response)=> {
			response.json().then((data)=>{
				this.setState({ property_list: data.property })
			})
		});
	}
	
	joinedList(){
			$("#loaderDiv").show();
		const joinedData = this.state.joinedPost;
		joinedData.session_id=JSON.parse(this.state.userData).session_id;
		joinedData.user_id=JSON.parse(this.state.userData).assets_id;
		joinedData.assets_type="1";
		this.setState({joinedPost:joinedData})
		const options = this.state.joinedPost;
		fetch(`${API_URL}assetsapi/joined/}`,{
			 method: 'post',          
        body: JSON.stringify(options)
        }).then((response) => {
          return response.json();
        }).then((result) => {
				$("#loaderDiv").hide();
			if(result.success){
				this.setState({joinedList:result.joined})
				if (this.state.joinedList) {
					this.handlePageChangeJoinedList(this.state.activePageJoined);
				}
			}
			//console.log(this.state.joinedTenant)
		},
		(error)=>{console.log('error')}
		)
	}
	requestedList(){
			$("#loaderDiv").show();
		const requestData = this.state.requestedPost;
		requestData.session_id=JSON.parse(this.state.userData).session_id;
		requestData.user_id=JSON.parse(this.state.userData).assets_id;
		requestData.assets_type="1";
		this.setState({requestedPost:requestData})
		const options = this.state.requestedPost;
		fetch(`${API_URL}assetsapi/requested/}`,{
			 method: 'post',          
        body: JSON.stringify(options)
        }).then((response) => {
          return response.json();
        }).then((result) => {
				$("#loaderDiv").hide();
			if(result.success){
				this.setState({requestedList:result.requested})
				if (this.state.requestedList) {
					this.handlePageChangeRequestedList(this.state.activePageReq);
				}
    
			}
			//console.log(this.state.requestedTenant)
		},
		(error)=>{console.log('error')}
		)
	}
	
	onChangeHandler(e){
		const requestForm = this.state.sendReq;
		if(e.target.name=="property_id")
			requestForm.property_id=e.target.value
		if(e.target.name=="invite_id")
			requestForm.invite_id=e.target.value
		if(e.target.name=="message")
			requestForm.message=e.target.value
		
		requestForm.session_id=JSON.parse(this.state.userData).session_id;
		requestForm.assets_id=JSON.parse(this.state.userData).assets_id;
		this.setState({sendReq:requestForm})
	}
	
	
	sendRequest(){
		const opts = this.state.sendReq
		opts.invite_id = this.state.receive_user_id
		/* if(!opts.property_id){
        alert('Property should not be blank');
        return;
      } */
	  if(!opts.invite_id){
        alert('Agent should not be blank');
        return;
      }
	  if(!opts.message){
        alert('Message should not be blank');
        return;
      }
	  if(!opts.invite_id && !opts.message){
		  return;
	  }else{
		  document.getElementById("notifyFormCancel").click();
		  $("#loaderDiv").show();
		  fetch(`${API_URL}assetsapi/invite/`, {
        method: 'post',          
        body: JSON.stringify(opts)
        }).then((response) => {
          return response.json();
        }).then((data) => {
          // console.log('dataaaa:  ', data);
		  $("#loaderDiv").hide();
			 // $("#actionType").val("No");
			 // $("#hiddenURL").val("tenant-owner");
			 // $(".confirm-body").html(data.msg);
			 // $("#BlockUIConfirm").show();
			 confirmAlert({
				  customUI: ({ onClose }) => {
					return (
					  <div className='custom-ui'>
						<h4>Notification</h4>
						<p>{data.msg}</p>
						<button onClick={()=>{
							this.componentDidMount();
						onClose()}}>Ok</button>
					  </div>
					)
				  }
				})
          /* if(data.msg.indexOf("Invitation send successfully")!=-1 || data.msg.indexOf("Now you both are connected")!=-1)
          {
			 
              swal("Assets Watch", data.msg);
            //document.getElementsById("hidemodal").style.display = "none";
			const m = document.getElementById('hidemodal');
			m.style.display='none';
			window.location.reload(); 
			//alert(m);
          }
        else alert(data.msg) */
        }).catch((error) => {
          console.log('error: ', error);
        });
	  }
	}
	
	
	acceptRequest(inv_id)
	{
		const invite_id = inv_id;
		
		//const sess =this.state.userInfo.session_id;
		//alert(invite_id);
		//console.log(sess);
	fetch(`${API_URL}assetsapi/invite_accept/${JSON.parse(this.state.userData).assets_id}/`+invite_id+`/${JSON.parse(this.state.userData).session_id}`, {
        method: 'get'
        }).then((response) => {
          return response.json();
        }).then((data) => {
          // console.log('dataaaa:  ', data);
          if(data.msg.indexOf("Invitation Accepted successfully")!=-1)
          {
           /* swal("Assets Watch", data.msg);
			 window.location.reload();
            //document.getElementsById("hidemodal").style.display = "none";
			// const m = document.getElementById('hidemodal');
			// m.style.display='none';
			//alert(m);
			// <Redirect to={{pathname:'/tenant-owner'}} />
			this.props.history.replace('/tenant-owner'); */
			confirmAlert({
						  customUI: ({ onClose }) => {
							return (
							  <div className='custom-ui'>
								<h4>Notification</h4>
								<p>{data.msg}</p>
								<button onClick={()=>{
											 this.componentDidMount();
								onClose()}}>Ok</button>
							  </div>
							)
						  }
						})
          }
        else alert(data.msg)
        }).catch((error) => {
          console.log('error: ', error);
        });
	}
	
	handlePageChangeRequestedList(pageNum) {
        let number = pageNum - 1;
        const { requestedList, itemsCountPerPageReq } = this.state;
        let propData = requestedList.slice((itemsCountPerPageReq * number), (itemsCountPerPageReq * pageNum));
        this.setState({activePageReq: pageNum, pagedRequestedList: propData })
    }

    handlePageChangeJoinedList(pageNum) {
        let number = pageNum - 1;
        const { joinedList, itemsCountPerPageJoined } = this.state;
        let propData = joinedList.slice((itemsCountPerPageJoined * number), (itemsCountPerPageJoined * pageNum));
        this.setState({activePageJoined: pageNum, pagedJoinedList: propData })
    }
	handlePageChangeHistory(pageNum) {
        let number = pageNum - 1;
		// console.log('pageNum'+pageNum+'::propData'+JSON.stringify(this.state.joinedList))
       const { connectionHistory, itemsCountPerPageHistory } = this.state;;
        let propData = connectionHistory.slice((itemsCountPerPageHistory * number), (itemsCountPerPageHistory * pageNum));
        this.setState({activePageHistory: pageNum, pagedHistory: propData })
		 //console.log('activePageHistory'+this.state.activePageHistory+'::pagedHistory'+JSON.stringify(this.state.pagedHistory))
    }
	messagerec(id,name)
	{ 
	//console.log(id+''+name);
		document.getElementById('receiver').value= id;
		document.getElementById('receiver_name').value= name;
	}
	onChangeSMHandler(e)
	{
		const sendFrm = this.state.sendForm
		sendFrm.message=e.target.value
		sendFrm.receiver=document.getElementById('receiver').value
		sendFrm.sender=JSON.parse(this.state.userData).assets_id
		sendFrm.session_id=JSON.parse(this.state.userData).session_id
		this.setState({sendForm:sendFrm})
		// console.log(this.state.sendForm);
	}
		sendMessage(){
		const opts = this.state.sendForm
		if(!opts.receiver && !opts.message){
			return;
		}else{
			document.getElementById("msgFormCancel").click();
			$("#loaderDiv").show();
			fetch(`${API_URL}assetsapi/send_message`, {
        method: 'post',
		body:JSON.stringify(opts)
			  })
			.then(res => res.json())
			.then(
			  (result) => {
				//console.log("data 2: "+JSON.stringify(result.profile))
				if (result) {
				  //this.setState({sendForm:result.notification})
				  // $("#loaderDiv").hide();
					// alert(result.msg)
					// const m = document.getElementById('hidemodal2');
					// m.style.display='none';
					$("#loaderDiv").hide();
					   
					   // $("#actionType").val("Yes");
					   // $("#hiddenURL").val("tenant-agent");
					   // $(".confirm-body").html(result.msg);
					   // $("#BlockUIConfirm").show();
					   confirmAlert({
						  customUI: ({ onClose }) => {
							return (
							  <div className='custom-ui'>
								<h4>Notification</h4>
								<p>{result.msg}</p>
								<button onClick={()=>{
											this.componentDidMount();
								onClose()}}>Ok</button>
							  </div>
							)
						  }
						})
				  
				} 
				// console.log("notification"+JSON.stringify(this.state.sendForm))
			  },
				(error) => {
				  console.log('error')
				}
			)
		}
	}
	changeTabs(id) {
		if(id == "owner-request") {
            $("#joined").removeClass("active");
			$("#invitestatusTab").removeClass("active");
			$("#connTab").removeClass("active");
        }
        else if (id == "invite-status") {
            $("#joined").removeClass("active");
			 $("#request").removeClass("active");  
			 $("#connTab").removeClass("active");
			 $("#loaderDiv").show();
			fetch(`${API_URL}assetsapi/invite_status/${JSON.parse(this.state.userData).assets_id}/1/${JSON.parse(this.state.userData).session_id}/`, {
			  method: 'get',
			})
			.then(res => res.json())
			.then(
			  (result) => {
				  $("#loaderDiv").hide();
				//console.log("data 2: "+JSON.stringify(profile))
				//alert("data 2: "+JSON.stringify(result));
				if (result.success) {
				    this.setState({inviteStatus:result.invite_status_detail});
				   // this.setState({user_list:result.invitation.users})
				  
				} 
				// console.log("property_list"+JSON.stringify(this.state.property_list))
				// console.log("user_list"+JSON.stringify(this.state.user_list))
			  },
			(error) => {
			  console.log('error')
			}
		  )      
        }else if (id == "connection-history") {
            $("#joined").removeClass("active");
			 $("#request").removeClass("active");  
			 $("#invitestatusTab").removeClass("active");
			 $("#loaderDiv").show();
			fetch(`${API_URL}assetsapi/connection_history/${JSON.parse(this.state.userData).assets_id}/1/${JSON.parse(this.state.userData).session_id}/`, {
			  method: 'get',
			})
			.then(res => res.json())
			.then(
			  (result) => {
				  $("#loaderDiv").hide();
				//console.log("data 2: "+JSON.stringify(profile))
				//alert("data 2: "+JSON.stringify(result));
				if (result.success) {
				    this.setState({connectionHistory:result.connection_history});
					if (this.state.connectionHistory) {
					// console.log('::propData'+JSON.stringify(this.state.joinedList))
					this.handlePageChangeHistory(this.state.activePageHistory);
					}
				   // this.setState({user_list:result.invitation.users})
				  
				} 
				// console.log("property_list"+JSON.stringify(this.state.property_list))
				// console.log("user_list"+JSON.stringify(this.state.user_list))
			  },
			(error) => {
			  console.log('error')
			}
		  )      
        }else{
			$("#request").removeClass("active");
			$("#invitestatusTab").removeClass("active");
			$("#connTab").removeClass("active");
		}
    }
	addDefaultSrc(ev){
	  ev.target.src = img_not_available;
	}
	TerminateUser(id){
		 $("#loaderDiv").show();
			fetch(`${API_URL}assetsapi/terminate_user/${JSON.parse(this.state.userData).assets_id}/`+id+`/${JSON.parse(this.state.userData).session_id}/`, {
			  method: 'get',
			})
			.then(res => res.json())
			.then(
			  (result) => {
				  $("#loaderDiv").hide();
				if (result.success) {
				    // $("#actionType").val("Yes");
					 // $("#hiddenURL").val("tenant-owner");
					 // $(".confirm-body").html(result.msg);
					 // $("#BlockUIConfirm").show();
					 confirmAlert({
						  customUI: ({ onClose }) => {
							return (
							  <div className='custom-ui'>
								<h4>Notification</h4>
								<p>{result.msg}</p>
								<button onClick={()=>{
											 this.componentDidMount();
								onClose()}}>Ok</button>
							  </div>
							)
						  }
						})
				  
				} 
				
			  },
			(error) => {
			  console.log('error')
			}
		  ) 
	}
    render() {
		const { value, suggestions,selectedOption,property_list,autocompleteData } = this.state;
			// Autosuggest will pass through all these props to the input.
			const inputProps = {
				placeholder: 'Search',
				value,
				onChange: this.onChange
			};
		// const propertyList = this.state.property_list;
	const userList = this.state.user_list;
	const requestedUserList= this.state.requestedList;
	const joinedUserList= this.state.joinedList;
	const pagedRequestedUserList= this.state.pagedRequestedList || this.state.requestedList;
	const pagedJoinedUserList= this.state.pagedJoinedList || this.state.joinedList;
	const pagedHistoryList = this.state.pagedHistory || this.state.connectionHistory;
	// console.log(requestedUserList);
        return (
            <div>
    
    <div className="wrapper">
        <div className="container agentdis">
        <div className="page-title-box">
            <div className="pull-right  my-proprty">
		<a href="#" data-toggle="modal" data-target="#send-email" className="btn waves-light waves-effect w-md btn-custom m-r-10"><i className="fi-open"></i>&nbsp;&nbsp;Send Email</a>
        <a href="#" data-toggle="modal" data-target="#send-invite" className="btn waves-light waves-effect w-md btn-custom"><i className="fi-open"></i>&nbsp;&nbsp;Send Invite</a>
       
      </div>
      <h4 className="page-title">Owner</h4>
    </div>
        {/* end page title end breadcrumb */} 
        {/* end row */}
        <div className="search-result-box card-box">
            <ul className="nav nav-tabs tabs-bordered">
            <li className="nav-item"> <a href="#joined-owner" data-toggle="tab" onClick={this.changeTabs.bind(this, "joined-owner")} id="joined" aria-expanded="true" className="nav-link active font-16">Joined Owners <span className="badge badge-success m-l-10">{joinedUserList.length}</span> </a> </li>
            <li className="nav-item"> <a href="#owner-request" data-toggle="tab" onClick={this.changeTabs.bind(this, "owner-request")} id="request" aria-expanded="false" className="nav-link font-16">Owner Requested <span className="badge badge-danger m-l-10">{requestedUserList.length}</span> </a> </li>
				{/* <li className="nav-item"> <a href="#invite-status" onClick={this.changeTabs.bind(this, "invite-status")} id="invitestatusTab"  data-toggle="tab" aria-expanded="false" className="nav-link font-16">Invited Owner </a> </li> */}
			<li className="nav-item"> <a href="#connection-history" onClick={this.changeTabs.bind(this, "connection-history")} id="connTab"  data-toggle="tab" aria-expanded="false" className="nav-link font-16">Connection History </a> </li>
            </ul>
            <div className="tab-content">
            <div className="tab-pane active" id="joined-owner">
                <div className="row">
               {pagedJoinedUserList.map((item)=>(
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="card-box">
                  <div className="member-card-alt">
                    <div className="thumb-xl member-thumb m-b-10 pull-left"> 
                    <img onError={this.addDefaultSrc} src={item.profile_photo!=''?API_URL+item.profile_photo:img_not_available} className="img-thumbnail" alt="profile-image" /> 
                    <i className="mdi mdi-star-circle member-star text-success" title="verified user"></i> </div>
                    <div className="member-card-alt-info">
                      <h4 className="m-b-5 m-t-0 font-18">{item.name}</h4>
                      <p className="text-muted m-b-3"><i className="icon-phone"></i>&nbsp; {item.mobile_no}</p>
                      <p className="text-muted m-b-3 "><i className="icon-envelope"></i>&nbsp; {item.email}</p>
                      <p className="text-muted m-b-3 text-overflow"><i className="icon-location-pin"></i>&nbsp; {item.country}</p>
                      <ul className="list-inline m-t-10 m-b-0 text-right">
                       <li className="list-inline-item"> <a className="mesg-icon" data-toggle="modal" data-target="#send-msg" title="Message" href="#" onClick={this.messagerec.bind(this,item.profile_id,item.name)}><i className="icon-bubble" /></a> </li>
                         <li className="list-inline-item"> <Link to={{"pathname":"/tenant-owner-profile",state:{profileid:item.profile_id,session:JSON.parse(this.state.userData).session_id,loc: this.props.location}}} className="view-icon"><i className="icon-eye"></i></Link></li>
						 <li className="list-inline-item"><a style={{cursor:'pointer'}} title="Terminate" onClick = {this.TerminateUser.bind(this,item.profile_id)} className="bgv-icon"><i className="mdi mdi-close"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
			  ))}
              {/* <!-- end col --> */}
                
                </div>
                
                {/* end row */}
                {joinedUserList.length>0?
			<Pagination
                  activePage={this.state.activePageJoined}
                  itemsCountPerPage={this.state.itemsCountPerPageJoined}
                  totalItemsCount={joinedUserList.length}
                  pageRangeDisplayed={5}
                  activeLinkClass={'btn-success'}
                  onChange={this.handlePageChangeJoinedList}
				/>:'No Owner Joined'}
             {/*<ul className="pagination justify-content-end pagination-split mt-0">
              <li className="page-item"> <a className="page-link" href="#" aria-label="Previous"> <span aria-hidden="true">«</span> <span className="sr-only">Previous</span> </a> </li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item active"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">4</a></li>
              <li className="page-item"><a className="page-link" href="#">5</a></li>
              <li className="page-item"> <a className="page-link" href="#" aria-label="Next"> <span aria-hidden="true">»</span> <span className="sr-only">Next</span> </a> </li>
            </ul>
            <div className="clearfix"></div>*/}
            </div>
            {/* end All results tab */} 
            {/* Users tab */}
            <div className="tab-pane" id="owner-request">
                <div className="row">
                {pagedRequestedUserList.map((item)=> (
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="card-box">
                  <div className="member-card-alt">
                    <div className="thumb-xl member-thumb m-b-10 pull-left"> 
                    <img onError={this.addDefaultSrc} src={item.profile_photo!=''?API_URL+item.profile_photo:img_not_available} className="img-thumbnail" alt="profile-image" /> 
                    <i className="mdi mdi-star-circle member-star text-success" title="verified user"></i> </div>
                    <div className="member-card-alt-info">
                   <h4 className="m-b-5 m-t-0 font-18" >{item.name}</h4> 
                      <p className="text-muted m-b-3"><i className="icon-phone"></i>&nbsp; {item.mobile_no}</p>
                      <p className="text-muted m-b-3 "><i className="icon-envelope"></i>&nbsp; {item.email}</p>
                    	 <p className="text-muted m-b-3 text-overflow"><i className="icon-location-pin"></i>&nbsp; {item.country}</p>
                      <ul className="list-inline m-t-10 m-b-0 text-right">
                        <li className="list-inline-item"> <a className="accept-icon" id="act1" title="" href="#" data-original-title="Accept"  onClick={this.acceptRequest.bind(this, item.assets_id)}><i className="icon-check"></i></a> </li>

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
			 ))}
              {/* <!-- end col --> */}
               
          
                </div>
			{requestedUserList.length>0?
                <Pagination
                  activePage={this.state.activePageReq}
                  itemsCountPerPage={this.state.itemsCountPerPageReq}
                  totalItemsCount={requestedUserList.length}
                  pageRangeDisplayed={5}
                  activeLinkClass={'btn-success'}
                  onChange={this.handlePageChangeRequestedList}
			/>:'No Owner Requested'}
            {/* <ul className="pagination justify-content-end pagination-split mt-0">
              <li className="page-item"> <a className="page-link" href="#" aria-label="Previous"> <span aria-hidden="true">«</span> <span className="sr-only">Previous</span> </a> </li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item active"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">4</a></li>
              <li className="page-item"><a className="page-link" href="#">5</a></li>
              <li className="page-item"> <a className="page-link" href="#" aria-label="Next"> <span aria-hidden="true">»</span> <span className="sr-only">Next</span> </a> </li>
            </ul> 
            <div className="clearfix"></div>*/}
            </div>
            {/* end Users tab */} 
			<div className="tab-pane" id="invite-status">
									<div className="row">
									{this.state.inviteStatus && (this.state.inviteStatus).length>0?
										<div className=" table-responsive tickets-list">
											<table id="" className="table table-bordered datatable">
												<thead>
													<tr>
														<th>#</th>
														<th>Name</th>
														<th>Status</th>
														<th>Date</th>
													</tr>
												</thead>
												<tbody>
											  {this.state.inviteStatus?this.state.inviteStatus.map((item,index)=>(
													<tr>
														<td>{index + 1}</td>
														<td>
															<a href="javascript: void(0);" className ="tickets-list">
																<img onError={this.addDefaultSrc} src={item.profile_photo!=''?API_URL+item.profile_photo:img_not_available} alt="" title="contact-img" className="rounded-circle" />
																<span className="m-l-5"><b>{item.Name}</b></span>
															</a>
														</td>
														<td><span className={item.requestStatus=='Joined'?'label label-success':(item.requestStatus=='Terminated')?'label label-danger':'label label-warning'}>{item.requestStatus}</span></td>
														<td>{item.entry_date}</td>
													</tr>)):<tr><td style={{textAlign:'center'}} colSpan={5}>No Record Available.</td></tr>}
												</tbody>
											</table>
									</div>:<div className=" table-responsive" style={{textAlign:'center'}}>No Record Available.</div>}
									</div>
								</div>
								
								<div className="tab-pane" id="connection-history">
									<div className="row">
									{pagedHistoryList?
										<div className=" table-responsive tickets-list">
											<table id="" className="table table-bordered datatable">
												<thead>
													<tr>
														<th>#</th>
														<th>Name</th>
														<th>Status</th>
														<th>Joined Date</th>
														<th>Terminated Date</th>
													</tr>
												</thead>
												<tbody>
											  {pagedHistoryList.map((item,index)=>(
													<tr>
														<td>{((this.state.itemsCountPerPageHistory * this.state.activePageHistory)-(this.state.itemsCountPerPageHistory))+(index+1)}</td>
														<td>
															<a href="javascript: void(0);" className ="tickets-list">
																<img onError={this.addDefaultSrc} src={item.profile_photo!=''?API_URL+item.profile_photo:img_not_available} alt="" title="contact-img" className="rounded-circle" />
																<span className="m-l-5"><b>{item.name}</b></span>
															</a>
														</td>
														<td><span className={item.request_status=='Joined'?'label label-success':(item.request_status=='Terminated')?'label label-danger':'label label-warning'}>{item.request_status}</span></td>
														<td>{item.EntryDate}</td>
														<td>{(item.TerminationDate && item.TerminationDate!="00/00/0000 00:00:00")?item.TerminationDate:''}</td>
													</tr>))}
												</tbody>
											</table>
									</div>:<div className=" table-responsive" style={{textAlign:'center'}}>No Record Available.</div>}
									 <Pagination
										activePage={this.state.activePageHistory}
										itemsCountPerPage={this.state.itemsCountPerPageHistory}
										totalItemsCount={this.state.connectionHistory.length}
										pageRangeDisplayed={5}
										activeLinkClass={'btn-success'}
										onChange={this.handlePageChangeHistory}

									/>
									</div>
								</div>
            </div>
        </div>
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
    <div id="background-verifi" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: 'none'}}>
        <div className="modal-dialog modal-lg">
        <div className="modal-content">
            <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 className="modal-title">Background Verification</h4>
            </div>
            <div className="modal-body">
            <div className="row">
                <div className="col-md-12">
                <div className="form-group">
                    <div className="row">
                    <div className="col-md-2">
                        <label className="control-label">First Name</label>
                    </div>
                    <div className="col-md-4">
                        <input type="text" className="form-control" defaultValue="Vishnu" required />
                    </div>
                    <div className="col-md-2">
                        <label className="control-label">Last Name</label>
                    </div>
                    <div className="col-md-4">
                        <input type="text" className="form-control" defaultValue="L" required />
                    </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                    <div className="col-md-2">
                        <label className="control-label">D.O.B</label>
                    </div>
                    <div className="col-md-4">
                        <input type="text" className="form-control" defaultValue="03/04/1995" id="datepicker-autoclose" />
                    </div>
                    <div className="col-md-2">
                        <label className="control-label">Gender</label>
                    </div>
                    <div className="col-md-4">
                        <select className="form-control" required>
                        <option value="Male" selected>Male</option>
                        <option value="Female">Female</option>
                        </select>
                    </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                    <div className="col-md-2">
                        <label className="control-label">Address</label>
                    </div>
                    <div className="col-md-4">
                        <input type="text" className="form-control" defaultValue="113 State Hwy 121 " required />
                    </div>
                    <div className="col-md-2">
                        <label className="control-label">City</label>
                    </div>
                    <div className="col-md-4">
                        <input type="text" className="form-control" defaultValue="Bangalore" required />
                    </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                    <div className="col-md-2">
                        <label className="control-label">State</label>
                    </div>
                    <div className="col-md-4">
                        <input type="text" className="form-control" defaultValue="Karnataka" required />
                    </div>
                    <div className="col-md-2">
                        <label className="control-label">ZIP Code</label>
                    </div>
                    <div className="col-md-4">
                        <input type="text" className="form-control" defaultValue={56006} required />
                    </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                    <div className="col-md-2">
                        <label className="control-label">Phone</label>
                    </div>
                    <div className="col-md-4">
                        <input type="text" className="form-control" defaultValue={9999999999} required />
                    </div>
                    <div className="col-md-2">
                        <label className="control-label">Email</label>
                    </div>
                    <div className="col-md-4">
                        <input type="text" className="form-control" defaultValue="owner@info.com" required />
                    </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                    <div className="col-md-2">
                        <label className="control-label">SSN</label>
                    </div>
                    <div className="col-md-4">
                        <input type="text" className="form-control" defaultValue="FD34DS7878" required />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                <div className="form-group no-margin">
                    <label htmlFor="field-7" className="control-label"><i className="fa fa-check check-color" />&nbsp;Pay 10$ for background verification report.</label>
                </div>
                </div>
            </div>
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-success waves-effect waves-light">Submit</button>
            </div>
        </div>
        </div>
    </div>
    {/* Modal */} 
    {/* Modal */}
    <div id="send-invite" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: 'none'}}>
        <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header" id="hidemodal">
            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 className="modal-title">Send Invite</h4>
            </div>
            <div className="modal-body">
			{ /*  <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label for="field-1" className="control-label">Property<span className="required"/></label>
              <div className="input-group">
			   <select className="form-control" name="property_id" onChange={this.onChangeHandler}>
				    <option>Please Select</option>
									{property_list.map((option,key)=> (<option key={key.id} value={option.id}>{option.title}</option>))}
											   
				  </select>	  
               <span className="input-group-addon bg-custom b-0"><i className="mdi mdi-magnify text-white"></i></span>
               </div>
            </div>
          </div>
			</div> */}
		<div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label for="field-1" className="control-label">Owner<span className="required"/></label>
              <div className="">
            <Autosuggest className="form-control"
									  suggestions={suggestions}
									  onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)}
									  onSuggestionsClearRequested={this.onSuggestionsClearRequested.bind(this)}
									  getSuggestionValue={this.getSuggestionValue.bind(this)}
									  renderSuggestion={this.renderSuggestion.bind(this)}
									  onSuggestionSelected={this.onSuggestionSelected.bind(this)}
									  inputProps={inputProps}
									  alwaysRenderSuggestions={true}
									/>	
               </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group no-margin">
              <label for="field-7" className="control-label" >Message<span className="required"/></label>
              <textarea className="form-control" id="field-7" placeholder="" name="message" onChange={this.onChangeHandler}></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" id="notifyFormCancel" className="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-success waves-effect waves-light" onClick={this.sendRequest}>Send</button>
            </div>
        </div>
        </div>
    </div>
    <div id="send-msg" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: 'none'}}>
                <div className="modal-dialog">
                    <div className="modal-content" id="hidemodal2">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 className="modal-title">Send </h4>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                            <label for="receiver" className="control-label">Name<span className="required"/></label>
                            <input type="hidden" className="form-control" placeholder=""  name="receiver" id="receiver" onChange={this.onChangeSMHandler}/>
							<input type="text" className="form-control" placeholder="" name="receiver_name" id="receiver_name" />
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-12">
                            <div className="form-group no-margin">
                            <label for="field-7" className="control-label">Message<span className="required"/></label>
                            <textarea className="form-control" id="field-7" placeholder="" name="message" onChange={this.onChangeSMHandler}></textarea>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" id="msgFormCancel" className="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-success waves-effect waves-light" onClick={this.sendMessage}>Send</button>
                    </div>
                    </div>
                </div>
                </div>
				<SendEmail/>
            </div>
        )
    }
}  

export default connect(state=>({ userData: state.userData }))(TenantOwner)