import React from 'react'
import avatar_7 from '../../../images/Owner/users/avatar-7.jpg'
import avatar_6 from '../../../images/Owner/users/avatar-6.jpg'
import avatar_2 from '../../../images/Owner/users/avatar-2.jpg'
import Header from '../Header/Header'
import avatar_3 from '../../../images/Owner/users/avatar-3.jpg'
import avatar_5 from '../../../images/Owner/users/avatar-5.jpg'
import avatar_4 from '../../../images/Owner/users/avatar-4.jpg'
import img_not_available from '../../../images/img_not_available.png'
import { connect } from 'react-redux';
import API_URL from "../../../app-config";
import Cookies from 'js-cookie';
import {Link} from 'react-router-dom'
import Pagination from 'react-js-pagination';
import swal from 'sweetalert';
 import Select from 'react-select';
 import BackgroundVerification from './BackgroundVerification';
import SendEmail from '../../Owner/Agent/SendEmail';

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

class Tenants extends React.Component{
	constructor(props) {
    super(props);
	this.sendRequest = this.sendRequest.bind(this)
	this.sendMessage = this.sendMessage.bind(this)
    this.state = {
      
	  userInfo:props.userData,
	  userData:Cookies.get('profile_data'),
		 property_list:[],
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
		 sendForm:{
				sender:'',
				receiver:'',
				message:'',
				session_id:''
			},
			
		activePageReq: 1,
        activePageJoined: 1,
        itemsCountPerPageReq: 1,
        itemsCountPerPageJoined: 1,
		autocompleteData: [],
		selectedOption: null,
		profileData:[]
    };
	this.onChangeHandler=this.onChangeHandler.bind(this)
	this.acceptRequest=this.acceptRequest.bind(this)
	this.messagerec=this.messagerec.bind(this)
	this.onChangeSMHandler = this.onChangeSMHandler.bind(this)
	 this.handlePageChangeRequestedList = this.handlePageChangeRequestedList.bind(this);
    this.handlePageChangeJoinedList = this.handlePageChangeJoinedList.bind(this)

		this.onClickProfile = this.onClickProfile.bind(this);
		this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (selectedOption) => {

		this.setState({ selectedOption });
     console.log(`Option selected:`, selectedOption);
  }
	 hideModel()
		{
			var $=window.$;
			$(".modal-backdrop").hide();
		}
  componentDidMount(){  
  const session = JSON.parse(this.state.userData).session_id; 
    loadScript('assets/js/bootstrap.min.js',function(){
      var $=window.$;
    $('[data-toggle="tooltip"]').tooltip();  
    })
    // var $=window.$;
    // $('[data-toggle="tooltip"]').tooltip();  
    var msgicon
    var veiw
    for(var i=1;i<=6;i++)
    {
      // msgicon=document.getElementById('msg'+i);
      // msgicon.setAttribute('class','mesg-icon')
      // msgicon.setAttribute('style','color:white')
      // msgicon.setAttribute('data-toggle','modal')
      // veiw=document.getElementById('view'+1)
      // veiw.setAttribute('class','view-icon')
    }
    

    // var msgicon2=document.getElementById('msg2');
    // msgicon2.setAttribute('class','mesg-icon')
    // msgicon2.setAttribute('style','color:white')
    // msgicon2.setAttribute('data-toggle','modal')
    // var veiw2=document.getElementById('view2')
    // veiw2.setAttribute('class','view-icon')

    // var msgicon3=document.getElementById('msg3');
    // msgicon3.setAttribute('class','mesg-icon')
    // msgicon3.setAttribute('style','color:white')
    // msgicon3.setAttribute('data-toggle','modal')
    // var veiw3=document.getElementById('view3')
    // veiw3.setAttribute('class','view-icon')

    // var msgicon4=document.getElementById('msg4');
    // msgicon4.setAttribute('class','mesg-icon')
    // msgicon4.setAttribute('style','color:white')
    // msgicon4.setAttribute('data-toggle','modal')
    // var veiw4=document.getElementById('view4')
    // veiw4.setAttribute('class','view-icon')

    // var msgicon5=document.getElementById('msg5');
    // msgicon5.setAttribute('class','mesg-icon')
    // msgicon5.setAttribute('style','color:white')
    // msgicon5.setAttribute('data-toggle','modal')
    // var veiw5=document.getElementById('view5')
    // veiw5.setAttribute('class','view-icon')

    // var msgicon1=document.getElementById('msg6');
    // msgicon1.setAttribute('class','mesg-icon')
    // msgicon1.setAttribute('style','color:white')
    // msgicon1.setAttribute('data-toggle','modal')
    // var veiw1=document.getElementById('view6')
    // veiw1.setAttribute('class','view-icon')

    // document.getElementById('act1').setAttribute('class','accept-icon')
    // document.getElementById('act2').setAttribute('class','accept-icon')
    // document.getElementById('act3').setAttribute('class','accept-icon')
	this.inviteDropdowns();
	this.joinedList();
	this.requestedList();
	if (this.state.requestedList) {
          this.handlePageChangeRequestedList(this.state.activePageReq);
      }
      if (this.state.joinedList) {
          this.handlePageChangeJoinedList(this.state.activePageJoined);
      }
	  
	  var $=window.$;
	 $('#react-select-2-input').keyup(function(e){

		 const selVal = $('#react-select-2-input').val();
		 
		 // retrieveDataAsynchronously(selVal);
		 let _this = this;

       const opts ={assets_type:3,keyword:selVal,session_id:session}
	   console.log(opts);
		fetch(`${API_URL}assetsapi/user_search`, {
			  method: 'POST',
			body: JSON.stringify(opts)
			})
			.then(res => res.json())
			.then(
			  (result) => {
				//console.log("data 2: "+JSON.stringify(profile))
				//alert("data 2: "+JSON.stringify(result));
				if (result.success) {
				  
					    this.setState({autocompleteData:result.search_userlist})
						
						
				} 
				 console.log("autocompleteData"+JSON.stringify(this.state.autocompleteData))
				// console.log("user_list"+JSON.stringify(this.state.user_list))
			  },
			(error) => {
			  console.log('error')
			}
		  ) 
	 }.bind(this));
  }
  onClickProfile(id)
	 {
		
		 fetch(`${API_URL}assetsapi/profile/`+id+`/${JSON.parse(this.state.userData).session_id}`, {
        method: 'get'
      })
    .then(res => res.json())
		.then(
		  (result) => {
			//console.log("data 2: "+JSON.stringify(result.profile))
			if (result.success) {
			  this.setState({profileData:result.profile})
			  
			} 
			console.log("set user data"+JSON.stringify(this.state.profileData))
		  },
			(error) => {
			  console.log('error')
			}
		)
	
	 }
  inviteDropdowns(){
	   
		fetch(`${API_URL}assetsapi/invite_request/${JSON.parse(this.state.userData).assets_id}/3/${JSON.parse(this.state.userData).session_id}/`, {
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
		  )       
	}
	
	joinedList(){
		const joinedData = this.state.joinedPost;
		joinedData.session_id=JSON.parse(this.state.userData).session_id;
		joinedData.user_id=JSON.parse(this.state.userData).assets_id;
		joinedData.assets_type="3";
		this.setState({joinedPost:joinedData})
		const options = this.state.joinedPost;
		fetch(`${API_URL}assetsapi/joined/}`,{
			 method: 'post',          
        body: JSON.stringify(options)
        }).then((response) => {
          return response.json();
        }).then((result) => {
			if(result.success){
				this.setState({joinedList:result.joined})
			}
			//console.log(this.state.joinedTenant)
		},
		(error)=>{console.log('error')}
		)
	}
	requestedList(){
		const requestData = this.state.requestedPost;
		requestData.session_id=JSON.parse(this.state.userData).session_id;
		requestData.user_id=JSON.parse(this.state.userData).assets_id;
		requestData.assets_type="3";
		this.setState({requestedPost:requestData})
		const options = this.state.requestedPost;
		fetch(`${API_URL}assetsapi/requested/}`,{
			 method: 'post',          
        body: JSON.stringify(options)
        }).then((response) => {
          return response.json();
        }).then((result) => {
			if(result.success){
				this.setState({requestedList:result.requested})
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
		const opts = this.state.sendReq;
		opts.invite_id = document.getElementsByName("invite_id")[0].value
		// console.log(document.getElementsByName("invite_id")[0].value);
		// console.log(opts);
		if(!opts.property_id){
        alert('Property should not be blank');
        return;
      }
	  if(!opts.invite_id){
        alert('Tenant should not be blank');
        return;
      }
	  if(!opts.message){
        alert('Message should not be blank');
        return;
      }
		fetch(`${API_URL}assetsapi/invite/`, {
        method: 'post',          
        body: JSON.stringify(opts)
        }).then((response) => {
          return response.json();
        }).then((data) => {
          console.log('dataaaa:  ', data);
          if(data.msg.indexOf("Invitation send successfully")!=-1 || data.msg.indexOf("Now you both are connected")!=-1)
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
	acceptRequest(id)
	{
		const invite_id = id;
		
		//const sess =this.state.userInfo.session_id;
		//alert(invite_id);
		//console.log(sess);
	fetch(`${API_URL}assetsapi/invite_accept/${JSON.parse(this.state.userData).assets_id}/`+invite_id+`/${JSON.parse(this.state.userData).session_id}`, {
        method: 'get'
        }).then((response) => {
          return response.json();
        }).then((data) => {
          console.log('dataaaa:  ', data);
          if(data.msg.indexOf("Invitation Accepted successfully")!=-1)
          {
            swal("Assets Watch", data.msg);
			 
			 window.location.reload();
            //document.getElementsById("hidemodal").style.display = "none";
			// const m = document.getElementById('hidemodal');
			// m.style.display='none';
			//alert(m);
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
	
	messagerec(id,name)
	{ console.log(id+''+name);
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
		console.log(this.state.sendForm);
	}
	sendMessage(){
		const opts = this.state.sendForm
		fetch(`${API_URL}assetsapi/send_message`, {
        method: 'post',
		body:JSON.stringify(opts)
      })
    .then(res => res.json())
    .then(
      (result) => {
        //console.log("data 2: "+JSON.stringify(result.profile))
        if (result.success) {
          //this.setState({sendForm:result.notification})
			alert(result.msg)
			const m = document.getElementById('hidemodal2');
			m.style.display='none';
          
        } 
        console.log("notification"+JSON.stringify(this.state.sendForm))
      },
		(error) => {
		  console.log('error')
		}
	)
	}
    render(){
		const { selectedOption } = this.state;
      // if(this.props.owner===undefined)
      //   window.location.href='http://'+window.location.host
	const propertyList = this.state.property_list;
	const userList = this.state.user_list;
	const requestedUserList= this.state.requestedList;
	const joinedUserList= this.state.joinedList;
	const pagedRequestedUserList= this.state.pagedRequestedList || this.state.requestedList;
	const pagedJoinedUserList= this.state.pagedJoinedList || this.state.joinedList;
	//console.log(joinedUserList.length);
        return(
            <div>
                {/* <Header name="tenant"
                logoutLink={this.logoutLink} 
                first_name={this.props.owner.first_name} 
                last_name={this.props.owner.last_name}
                /> */}
                <div style={{marginTop:'3%',marginBottom:'3%'}} className="wrapper">
  <div className="container agentdis"> 
  <div className="page-title-box">
      <div className="btn-group pull-right">
        <ol className="breadcrumb hide-phone p-0 m-0">
			<li><a href="#" data-toggle="modal" data-target="#send-email" className="btn waves-light waves-effect w-md btn-custom"><i className="fi-open"></i>&nbsp;&nbsp;Send Email</a></li>
          <li><a href="#" data-toggle="modal" data-target="#send-invite" className="btn waves-light waves-effect w-md btn-custom"><i className="fi-open"></i>&nbsp;&nbsp;Send Invite</a></li>
        </ol>
      </div>
      <h4 className="page-title">Tenant</h4>
    </div>
    {/* <!-- end page title end breadcrumb --> */}
    
    
    {/* <!-- end row --> */}
   <div className="search-result-box card-box">
        <ul className="nav nav-tabs tabs-bordered">
          <li className="nav-item"> <a href="#joined-agent" data-toggle="tab" aria-expanded="true" className="nav-link active font-16">Joined Tenants <span className="badge badge-success m-l-10">{joinedUserList.length}</span> </a> </li>
          <li className="nav-item"> <a href="#agent-request" data-toggle="tab" aria-expanded="false" className="nav-link font-16">Tenant Requested <span className="badge badge-danger m-l-10">{requestedUserList.length}</span> </a> </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane active" id="joined-agent">
            <div className="row">
			{joinedUserList.map((item)=>(
              <div className="col-md-4" key={item.profile_id}>
                <div className="card-box">
                  <div className="member-card-alt">
                    <div className="thumb-xl member-thumb m-b-10 pull-left"> 
                    <img src={item.profile_photo!=''?API_URL+item.profile_photo:img_not_available} className="img-thumbnail" alt="profile-image" /> 
                    <i className="mdi mdi-star-circle member-star text-success" title="verified user"></i> </div>
                    <div className="member-card-alt-info">
                      <h4 className="m-b-5 m-t-0 font-18">{item.name}</h4>
                      <p className="text-muted m-b-3"><i className="icon-phone"></i>&nbsp; {item.mobile_no}</p>
                      <p className="text-muted m-b-3 "><i className="icon-envelope"></i>{item.email}</p>
                      <p className="text-muted m-b-3 text-overflow"><i className="icon-location-pin"></i>&nbsp; {item.country}</p>
                      <ul className="list-inline m-t-10 m-b-0 text-right">
					  <li className="list-inline-item"> <a className="bgv-icon" data-toggle="modal" data-target="#background-verifi" title="background Verification" href="" onClick={this.onClickProfile.bind(this,item.profile_id)}><i className="icon-magnifier"></i></a> </li>
					   <li className="list-inline-item"> <a className="mesg-icon" data-toggle="modal" data-target="#send-msg" title="Message" href="#" onClick={this.messagerec.bind(this,item.profile_id,item.name)}><i className="icon-bubble" /></a> </li>
                        <li className="list-inline-item"> <Link to={{"pathname":"/profile-details",state:{profileid:item.profile_id,session:JSON.parse(this.state.userData).session_id}}} className="view-icon"><i className="icon-eye"></i></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
			  ))}
              {/* <!-- end col --> */}
              
              
   
              
           
              {/* <!-- end col -->  */}
            </div>
            {/* <!-- end row --> */}
			{joinedUserList.length>0?
			<Pagination
                  activePage={this.state.activePageJoined}
                  itemsCountPerPage={this.state.itemsCountPerPageJoined}
                  totalItemsCount={joinedUserList.length}
                  pageRangeDisplayed={5}
                  activeLinkClass={'btn-success'}
                  onChange={this.handlePageChangeJoinedList}
				/>:'No Tenant Joined'}
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
          
          {/* <!-- end All results tab -->  */}
          
          {/* <!-- Users tab --> */}
          <div className="tab-pane" id="agent-request">
            <div className="row">
			
			    {requestedUserList.map((item)=> (
              <div className="col-md-4">
                <div className="card-box">
                  <div className="member-card-alt">
                    <div className="thumb-xl member-thumb m-b-10 pull-left"> 
                    <img src={item.profile_photo!=''?API_URL+item.profile_photo:img_not_available} className="img-thumbnail" alt="profile-image" /> 
                    <i className="mdi mdi-star-circle member-star text-success" title="verified user"></i> </div>
                    <div className="member-card-alt-info">
                   <h4 className="m-b-5 m-t-0 font-18" >{item.name}</h4> 
                      <p className="text-muted m-b-3"><i className="icon-phone"></i>&nbsp; {item.mobile_no}</p>
                      <p className="text-muted m-b-3 "><i className="icon-envelope"></i>&nbsp; {item.email}</p>
                    	 <p className="text-muted m-b-3 text-overflow"><i className="icon-location-pin"></i>&nbsp; {item.country}</p>
                      <ul className="list-inline m-t-10 m-b-0 text-right">
                        <li className="list-inline-item badge badge-success m-l-10" > <a className="accept-icon" id="act1" title="" data-placement="top" data-toggle="tooltip"  href="#" data-original-title="Accept" onClick={this.acceptRequest.bind(this, item.assets_id)}><i className="icon-check"></i></a> </li>

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
			/>:'No Tenant Requested'}
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
          {/* <!-- end Users tab -->  */}
          
        </div>
      </div>
  </div>
  {/* <!-- end container -->  */}
</div>

{/* ========== BG Verification =====================*/}
			  <BackgroundVerification profileData={this.state.profileData}/>
{/* <!-- Modal --> */}
<div id="send-invite" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display:'none'}}>
  <div className="modal-dialog">
    <div className="modal-content"  id="hidemodal">
      <div className="modal-header">
        <button type="button" onClick={this.hideModel} className="close" data-dismiss="modal" aria-hidden="true">×</button>
        <h4 className="modal-title">Send Invite</h4>
      </div>
      <div className="modal-body">
          <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label for="field-1" className="control-label">Property</label>
              <div className="input-group">
			   <select className="form-control" name="property_id" onChange={this.onChangeHandler}>
				   <option>Please Select</option>
						{propertyList.map((option,key)=> (<option key={key.id} value={option.id}>{option.title}</option>))}
											   
				  </select>	  
               <span className="input-group-addon bg-custom b-0"><i className="mdi mdi-magnify text-white"></i></span>
               </div>
            </div>
          </div>
        </div>
		<div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label for="field-1" className="control-label">Tenant</label>
              <div className="">
            
						<Select
							className="basic-single"
							classNamePrefix="select"
							value={selectedOption}
							onChange={this.handleChange}
							
							 // loadOptions={this.handleChange}
							 // onKeyUp={this.onKeyUp}
							
							name="invite_id"
							id="invite_id"
							options={this.state.autocompleteData}
							/>
							{/* <select className="form-control" name="invite_id" onChange={this.onChangeHandler}>
				   <option>Please Select</option>
						{userList.map((option,key)=> (<option key={key.assets_id} value={option.assets_id}>{option.first_name+" "+option.last_name}</option>))}
											   
					</select>	 */}
               </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group no-margin">
              <label for="field-7" className="control-label" >Message</label>
              <textarea className="form-control" id="field-7" placeholder="" name="message" onChange={this.onChangeHandler}></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary waves-effect" data-dismiss="modal" onClick={this.hideModel}>Close</button>
        <button type="submit" className="btn btn-success waves-effect waves-light" onClick={this.sendRequest}>Send</button>
      </div>
    </div>
  </div>
</div>
 
		<div id="send-msg" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: 'none'}}>
                <div className="modal-dialog">
                    <div className="modal-content" id="hidemodal2">
                    <div className="modal-header">
                        <button type="button" onClick={this.hideModel} className="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 className="modal-title">Send </h4>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                            <label for="receiver" className="control-label">Name</label>
                            <input type="hidden" className="form-control" placeholder=""  name="receiver" id="receiver" onChange={this.onChangeSMHandler}/>
							<input type="text" className="form-control" placeholder="" name="receiver_name" id="receiver_name" />
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-12">
                            <div className="form-group no-margin">
                            <label for="field-7" className="control-label">Message</label>
                            <textarea className="form-control" id="field-7" placeholder="" name="message" onChange={this.onChangeSMHandler}></textarea>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary waves-effect" onClick={this.hideModel} data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-success waves-effect waves-light" onClick={this.sendMessage}>Send</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default connect(state=>({ userData: state.userData, userProfile: state.userProfile }))(Tenants)