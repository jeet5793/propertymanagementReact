import React from 'react'
import API_URL from '../../../app-config';
import Cookies from 'js-cookie';
//import {loadFile} from '../../js/external'
//import VCreate from './VCreate'
//import VEdit from './VEdit'
import $ from 'jquery'
import CustomWithModal from './CustomWithModal'
import SendMsg from './SendMSG'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
//import './bootstrap.min.css'
//import './style.css'
//import './icons.css'
//import swal from 'sweetalert';
//import { withRouter } from "react-router";
import {Link} from 'react-router-dom'

const Saved=(props)=>{
	//console.log(props);
  return(                                            
  <div className="tab-pane active" id="v-saved">
  
  {(props.agreement!=undefined && props.agreement.length>0)?
    <div className=" table-responsive">
      <table className="table	bdr">
        <thead>
          <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {(props.agreement!=undefined)?props.agreement.map(element=>(
            <tr>
              <td>{element.agreement_title}</td>
              <td>{element.created_date}</td>
              <td><Link to={{"pathname":"/owner-agreement-edit",state:{editAgreement:element,loc: '/agreement'}}} title="Edit"   className="table-action-btn view-rqu"><i className="mdi mdi-border-color"></i></Link><a title="view" href="#" onClick={() => props.pdfViewAgreement(element.agreement_id)} data-toggle="tab" className="table-action-btn view-rqu"><i className="mdi mdi-eye"></i></a><a title="Delete" href="#" onClick={() => props.deleteAgreement(element.agreement_id)} className="table-action-btn view-rqu"><i className="mdi mdi-close"></i></a>
              <Link to={{pathname:'/owner-agreement-send',state:{TemplateId:element.agreement_id,templateDescription:element.agreement_doc_content,agreement_type:'Custom',loc:'/agreement'}}} title="Send" className="table-action-btn view-rqu" ><i className="mdi mdi-redo-variant"></i></Link></td>
            </tr>
          )):<div>No data </div>}        
        </tbody>
      </table>
    </div>:<div className=" table-responsive" style={{textAlign:'center'}}>No record available </div>}
		
	
	
  </div>);
}
const VRequested=(props)=>{
  //debugger;
  return(
    <div className="tab-pane" id="v-requested">
						<ul className="nav nav-tabs tabs-bordered">
								<li className="nav-item"> <a href="#sent" data-toggle="tab" onClick={props.changeTabs.bind(this, "sent")} id="sentTab" aria-expanded="true" className="nav-link font-16 active">Sent  </a> </li>
								<li className="nav-item"> <a href="#received" data-toggle="tab" onClick={props.changeTabs.bind(this, "received")} id="receivedTab" aria-expanded="false" className="nav-link font-16">Received  </a> </li>
                <li className="nav-item"> <a href="#partnerSign" data-toggle="tab" onClick={props.changeTabs.bind(this, "partnerSign")} id="partnerSignTab" aria-expanded="false" className="nav-link font-16">Partner Sign  </a> </li>
                            </ul>
							
							<div className="tab-content">
								<div className="tab-pane active" id="sent">
									<div className="row">
										{(props.sendedAgreement!=undefined && props.sendedAgreement.length>0)?
	
										<div className=" table-responsive">
										  <table className="table bdr">
											<thead>
											  <tr>
												<th>Title</th>
                        <th>Agreement Type</th>
												<th>Date</th>
												<th>Sent To</th>
												<th>Assets Type</th>
												<th>Action</th>
											  </tr>
											</thead>
											<tbody>                                    
											 
										{(props.sendedAgreement!=undefined)?props.sendedAgreement.map(element=>(
												<tr>
												  <td>{element.agreement_title}</td>
                          <td>{element.agreement_type}</td>
												  <td>{element.initiated_date}</td>
												  <td>{element.sentTo}</td>
												  <td>{element.assets_type==1?'Owner':(element.assets_type==2?'Agent':(element.assets_type==3)?'Tenant':'')}</td>
												  <td><a title="Edit" href="#" onClick={() => props.dealPdfView(element.deal_id)} data-toggle="tab" className="table-action-btn view-rqu"><i className="mdi mdi-eye"></i></a>
                          
                          </td>
												</tr>
											  )):<div>No record available </div>}
											
										  </tbody>
										</table>
										</div>:<div className=" table-responsive" style={{textAlign:'center'}}>No record available </div>}
									</div>
						  
								</div>


							<div className="tab-pane" id="received">
								<div className="row">
								{(props.ragreement!=undefined && props.ragreement.length>0)?
									<div className=" table-responsive">
										  <table className="table bdr">
											<thead>
											  <tr>
												<th>Title</th>
												<th>Date</th>
												<th>Sender</th>
												<th>Assets Type</th>
												<th>Action</th>
											  </tr>
											</thead>
											<tbody>                                    
											 
										   {(props.ragreement!=undefined)?props.ragreement.map(element=>(
												<tr>
												  <td>{element.agreement_title}</td>
												  <td>{element.initiated_date}</td>
												   <td>{element.sender}</td>
												  <td>{element.assets_type==1?'Owner':(element.assets_type==2?'Agent':(element.assets_type==3)?'Tenant':'')}</td>
												  <td><a title="Edit" href="#preview" onClick={() => props.previewAgreement(element)} data-toggle="tab" className="table-action-btn view-rqu"><i className="mdi mdi-eye"></i></a><a title="Delete"  href="#" className="table-action-btn view-rqu"><i className="mdi mdi-close"></i></a><a title="Send" href="#" className="table-action-btn view-rqu" data-toggle="modal" data-target="#send-msg"><i className="mdi mdi-redo-variant"></i></a></td>
												</tr>
											  )):<div>No record available </div>}
											
										  </tbody>
										</table>
									</div>:<div className=" table-responsive" style={{textAlign:'center'}}>No record available </div>}
								</div>
						   </div>

               <div className="tab-pane" id="partnerSign">
                                <div className="row">
								{(props.partnerSignInfo!=undefined && props.partnerSignInfo.length>0)?
									<div className=" table-responsive">
										  <table className="table bdr">
											<thead>
											  <tr>
												<th>Agreement title</th>
												<th>Property Title </th>
												<th>Sent Date</th>
												<th>Status</th>
												<th>Manage</th>
											  </tr>
											</thead>
											<tbody>                                    
											 
										   {(props.partnerSignInfo!=undefined)?props.partnerSignInfo.map(element=>(
												<tr>
												  <td>{element.agreement_title}</td>
												  <td>{element.property}</td>
												   <td>{element.SentDate}</td>
												  <td>{element.status}</td>
												  <td>{element.status=='Pending'  && <Link to={{pathname:'/owner-partner-sign',state:{deal_id:element.deal_id,loc:'/agreement',PreviewAgreement:element.replaced_template}}} title="Send" className="btn btn-primary" >Partner Sign</Link>}{element.status=='Completed' && <a title="Edit" href="#"  onClick={() => props.dealPdfView(element.deal_id)} data-toggle="tab" className="table-action-btn view-rqu"><i className="mdi mdi-eye"></i></a>}</td>
												</tr>
											  )):<div>No record available </div>}
											
										  </tbody>
										</table>
									</div>:<div className=" table-responsive" style={{textAlign:'center'}}>No record available </div>}
				                </div>
						  
								</div>

						</div>
	
  </div>
  );
}
const VExecute=(props)=>{
	//console.log("hello"+JSON.stringify(props))
  return(
    <div className="tab-pane" id="v-execute">
	{props.ragreement.length>0?
    <div className=" table-responsive">
      <table className="table bdr">
        <thead>
          <tr>
            <th>Title</th>
			<th>Property Name</th>
                <th>Date</th>
				<th>Status</th>
				<th>Tenure Start Date</th>
				<th>Tenure End Date</th>
                <th>Action</th>
          </tr>
        </thead>
        <tbody>                          
        {props.ragreement.length>0?props.ragreement.map(element=>(
            <tr>
              <td>{element.agreement_title}</td>
			   <td>{element.property}</td>
              <td>{element.initiated_date}</td>
			  <td>{element.dealStatus}</td>
			   <td>{element.tenure_start_date}</td>
			    <td>{element.tenure_end_date}</td>
              <td>{element.dealStatus==="Inprocess"?
              <span>
                  <a title="Edit" href="#executePreview" data-toggle="tab" onClick={() => props.selectedExecutedAgreement(element)} className="table-action-btn view-rqu">
                    <i className="mdi mdi-book-open-page-variant"></i></a> {(element.sender_id==props.assetsId) && <a href = "#" title="Send" onClick={()=>props.checkPartnerInfo(element)} className="btn btn-primary" >Partner Sign</a>}
                        </span>:
                    (element.dealStatus==="Completed" || element.dealStatus==="Terminated" || element.dealStatus==="Rejected")?
                     <span> <a title="view" href="#" onClick={() => props.dealPdfView(element.deal_id)} data-toggle="tab" className="table-action-btn view-rqu">
                        <i className="mdi mdi-eye"></i></a>
                        {(element.sender_id==props.assetsId && element.dealStatus==="Completed") && <a href = "#" title="Send" onClick={()=>props.checkPartnerInfo(element)} className="btn btn-primary" >Partner Sign</a>}
                        </span>:''}<a title="Download"  href="#" className="table-action-btn view-rqu">
						<i className="mdi mdi-download" onClick={() => props.onClickDownload(element.deal_id)}></i></a>
						<a title="Send"  href="#" className="table-action-btn view-rqu" data-toggle="modal" onClick={() => props.selectedExecutedAgreement(element)} data-target="#send-msg"><i className="mdi mdi-redo-variant"></i></a>
						{(element.dealStatus!="Terminated" && element.sender_id==props.assetsId) && <a title="Terminate" href="#" onClick={() => props.terminateAgreement(element.deal_id)} className="table-action-btn view-rqu"><i className="mdi mdi-close"></i></a>}</td>
            </tr>
          )):<div>No data </div>}
      </tbody>
    </table>
  </div>:<div className=" table-responsive" style={{textAlign:'center'}}>No record available </div>}
  </div>
  );
}
/* const AgreementTemplate=(props)=>{
  return(
    <div id="agreeTemplate" style={{display:'none'}}>
    
  </div>
  );
} */
const AgreementHeader=(props)=>{
  return(
    <div className="row">
    <div className="col-sm-12">
        <div className="page-title-box">
        <h4 className="page-title">Agreement</h4>
        </div>
    </div>
  </div>
  );
}
var i;
export default class container extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    userData : Cookies.get('profile_data'),
      agreement:[],
      agrLoaded:false,
      ragreement:[],
      rLoaded:false,
      executedAgreement:[],
      refreshState:false,
      user: JSON.parse(Cookies.get('profile_data')),
	  editFormDiv:false
    };
	this.getRequestedAgreement=this.getRequestedAgreement.bind(this);
	this.getSendedAgreement=this.getSendedAgreement.bind(this);
    this.getExecuteAgreement=this.getExecuteAgreement.bind(this);
    this.verticalNavbar=this.verticalNavbar.bind(this);
    this.previewAgreement=this.previewAgreement.bind(this);
    this.submitAgreement=this.submitAgreement.bind(this);
	this.onClickChangeStatus =this.onClickChangeStatus.bind(this);
	this.onClickChangeStatusReject =this.onClickChangeStatusReject.bind(this);
	this.onClickCheckPermission = this.onClickCheckPermission.bind(this);
  this.terminateAgreement = this.terminateAgreement.bind(this);
  this.changeTabs = this.changeTabs.bind(this);
  this.partnerDetail = this.partnerDetail.bind(this);
  this.checkPartnerInfo = this.checkPartnerInfo.bind(this)
  }
  componentWillMount(){
   
  //   $.getScript('assets/js/jquery.min.js', ()=> {
  //     console.log('assets/pages/jquery.wizard-init.js');
  //  });
  //  $.getScript('"assets/js/tether.min.js', ()=> {
  //   console.log('"assets/js/tether.min.js');
  //   });
  //  $.getScript('assets/js/bootstrap.min.js', ()=> {
  //   console.log('assets/js/bootstrap.min.js');
  //   });
  //   $.getScript('assets/js/waves.js', function () {
  //     console.log('assets/js/waves.js');
  //  });
   
  //   $.getScript('assets/js/jquery.slimscroll.js', function () {
  //     console.log('assets/js/jquery.slimscroll.js');
  //  });
  //   $.getScript('assets/js/jquery.scrollTo.min.jss', ()=> {
  //     console.log('assets/js/jquery.scrollTo.min.js');
  //     });
  //     $.getScript('assets/plugins/ckeditor/ckeditor.js', ()=> {
  //       console.log('assets/plugins/ckeditor/ckeditor.js');
  //       });
  //       $.getScript('assets/pages/jquery.scrollbar.js', ()=> {
  //         console.log('assets/pages/jquery.scrollbar.js');
  //         });
    
  //   $.getScript('assets/js/jquery.core.js', ()=> {
  //     console.log('assets/js/jquery.core.js');
  //     });
  //     $.getScript('assets/js/jquery.app.js', ()=> {
  //       console.log('assets/js/jquery.app.js');
  //       });
        

  }
  componentDidMount(){
    // loadFile("assets/tiny/plugin/tinymce/tinymce.min.js","js")
    // loadFile("assets/tiny/plugin/tinymce/init-tinymce.js","js")
	  // loadFile("ssets/js/jquery.scrollTo.min.js","js")
    // loadFile("assets/js/jquery.slimscroll.js","js")
    // $.getScript('assets/tiny/plugin/tinymce/tinymce.min.js', ()=> {
    //   console.log('assets/tiny/plugin/tinymce/tinymce.min.js');
    //   });
    //   $.getScript('assets/tiny/plugin/tinymce/init-tinymce.js', ()=> {
    //     console.log('assets/tiny/plugin/tinymce/tinymce.min.js');
    //     });
	  
	  this.getAgreement()
	  this.getRequestedAgreement();
	  this.getSendedAgreement();
      this.getExecuteAgreement();
      this.getPropertyList();
      this.selectedAgreement = this.selectedAgreement.bind(this)
      // this.editAgreementHandle = this.editAgreementHandle.bind(this)
      this.selectedExecutedAgreement = this.selectedExecutedAgreement.bind(this)
	   this.onClickDownload = this.onClickDownload.bind(this)
	    this.pdfViewAgreement = this.pdfViewAgreement.bind(this);
		  this.dealPdfView = this.dealPdfView.bind(this);
		this.deleteAgreement = this.deleteAgreement.bind(this);
      var tinymce=window.tinyMCE
      // fetch('http://ec2-18-191-70-215.us-east-2.compute.amazonaws.com:8080/assetsapi/saved_agreement/2/qvtod9f0pqe9li38nsdsc03mu6hb0u2n')
      
  }
    selectedAgreement(agreement) {
        this.setState({forwardAgreement: agreement});
    }
	onClickDownload(deal_id){
		 // alert("dsahfh");
		 // <a href={`${API_URL}assetsapi/download_agreement/`+deal_id}/>
		  window.open(`${API_URL}assetsapi/download_agreement/`+deal_id,'_self')
		//console.log("deal_id"+JSON.stringify(deal_id));
		 
			
	 }
	 pdfViewAgreement(agreement_id){
		 let { user } = this.state;
		  window.open(`${API_URL}assetsapi/agreement_pdf_view/`+agreement_id+`/${user.session_id}`, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
	 }
	  dealPdfView(deal_id){
		 let { user } = this.state;
		  window.open(`${API_URL}assetsapi/deal_agreement_pdf_view/${user.assets_id}/`+deal_id+`/${user.session_id}`, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
	 }
	 deleteAgreement(id){
		 // console.log('props'+JSON.stringify(this.props));
		 var propsroute = this.props;
        var session_id=JSON.parse(this.state.userData).session_id;
		
		confirmAlert({
		  customUI: ({ onClose }) => {
			return (
			  <div className='custom-ui'>
				<h4>Are you sure?</h4>
				<p>You want to delete this agreement?</p>
				<button onClick={onClose}>No</button>
				<button onClick={() => {
					// this.handleClickDelete()
					// onClose()
					$("#loaderDiv").show();
					 $("#loaderDiv").show();
								fetch(`${API_URL}assetsapi/delete_agreement/`+id+`/`+session_id,{
									method: 'GET'
									})
									.then(res => res.json())
									.then(data =>{ 
									if(data.msg==="Agreement deleted successfully. !!!")  
										{
												$("#loaderDiv").hide();
												
												/* $("#actionType").val("Yes");
											   $("#hiddenURL").val("agreement");
											   $(".confirm-body").html(data.msg);
											   $("#BlockUIConfirm").show();
											   $("#DelBlockUIConfirm").hide(); */
											   confirmAlert({
													  customUI: ({ onClose }) => {
														return (
														  <div className='custom-ui'>
															<p>{data.msg}</p>
															<button onClick={()=>{
															this.componentDidMount();
															onClose()}}>Ok</button>
														  </div>
														)
													  }
													})
											    // this.props.history.push('/agreement')
											   // Router.refresh()
											   
										}else{
												 $("#loaderDiv").hide();
												// $("#actionType").val("Yes");
											   // $("#hiddenURL").val("agreement");
											   // $(".confirm-body").html(data.msg);
											   // $("#BlockUIConfirm").show();
											   confirmAlert({
													  customUI: ({ onClose }) => {
														return (
														  <div className='custom-ui'>
															<p>{data.msg}</p>
															<button onClick={()=>{
															this.componentDidMount();
															onClose()}}>Ok</button>
														  </div>
														)
													  }
													})
											  
										}
									})
									  
				}}>Yes, Delete it!</button>
			  </div>
			)
		  }
		}) 
		
		
	/* 	 $(".confirm-body").html("Do you want to delete agreement..?");
		$("#DelBlockUIConfirm").show();
		$(".row-dialog-btn").click(function(){
						const action = this.value;
						// alert(action);
						if(action==="Yes"){
								 $("#loaderDiv").show();
								fetch(`${API_URL}assetsapi/delete_agreement/`+id+`/`+session_id,{
									method: 'GET'
									})
									.then(res => res.json())
									.then(data =>{ 
									if(data.msg==="Agreement deleted successfully. !!!")  
										{
												$("#loaderDiv").hide();
												
												$("#actionType").val("Yes");
											   $("#hiddenURL").val("agreement");
											   $(".confirm-body").html(data.msg);
											   $("#BlockUIConfirm").show();
											   $("#DelBlockUIConfirm").hide();
											    // this.props.history.push('/agreement')
											   // Router.refresh()
											    propsroute.history.push('/agreement')
										}else{
												// $("#loaderDiv").hide();
												// $("#actionType").val("Yes");
											   // $("#hiddenURL").val("agreement");
											   // $(".confirm-body").html(data.msg);
											   // $("#BlockUIConfirm").show();
											   
											   propsroute.history.push('/agreement')
										}
									})
								
						}else if(action==="Cancel"){
							$("#DelBlockUIConfirm").hide();
							// console.log('props'+JSON.stringify(this.props));
							// propsroute.history.push('/agreement')
							// propsroute.history.replace('/agreement')
							 
						}
		}) */
    }
    selectedExecutedAgreement(agreement) {
        let data = {id: agreement.deal_id};
        fetch(`${API_URL}assetsapi/view_submitted_deal`, {
            method: 'post',
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(
                ({success, data}) => {
                    if (success) {
                        $('#execute').parent().removeClass('active')
                        $('#execute').removeClass('active');
                        $('#executePreviewContainer').html(data.replaced_template);
						this.setState({updatedAgreement: data});
                    }
                },
                (error) => {
                    console.log('error')
                }
            )
    }


    /* editAgreementHandle(agreement) {
		 
       this.setState({editAgreement: agreement,editAgreementStatus:true}, () => {
           // console.log('editAgreement ', JSON.stringify(this.state.editAgreement));
           //$('#create')[0].click();
		   //$('#v-edit').show();
       })
	   
	   // this.setState({editAgreement: agreement,editFormDiv:true});
    } */
  getAgreement(){
	  $("#loaderDiv").show();
    const { user } = this.state;
    fetch(`${API_URL}assetsapi/saved_agreement/${user.assets_id}/${user.session_id}`, {
      method: 'get'
    })
    .then(res => res.json())
    .then(
      (data) => {
		   $("#loaderDiv").hide();
        // debugger;
      //console.log("data 2: "+JSON.stringify(result.profile))
      if (data.success) {
        this.setState({agreement:data.saved_agreement,agrLoaded:true})
        // console.log(this.state.agreement);
      } 
      //console.log("set user data"+JSON.stringify(this.state.profileData))
      },
    (error) => {
      console.log('error')
    }
    )
  }
  getRequestedAgreement(){
	   $("#loaderDiv").show();
      let { user } = this.state;
    fetch(`${API_URL}assetsapi/requested_agreement/${user.assets_id}/${user.session_id}`, {
      method: 'get'
    })
    .then(res => res.json())
    .then(
      (data) => {
      //console.log("data 2: "+JSON.stringify(result.profile))
       $("#loaderDiv").hide();
      if (data.success) {
        // debugger;
        this.setState({requestedAgreement:data.requested_agreements, agrLoaded:true})
        // console.log(this.state.ragreement);
      } 
      //console.log("set user data"+JSON.stringify(this.state.profileData))
      },
    (error) => {
      console.log('error')
    }
    )
  }
getSendedAgreement(){
	$("#loaderDiv").show();
      let { user } = this.state;
    fetch(`${API_URL}assetsapi/sended_agreement/${user.assets_id}/${user.session_id}`, {
      method: 'get'
    })
    .then(res => res.json())
    .then(
      (data) => {
      //console.log("data 2: "+JSON.stringify(result.profile))
       $("#loaderDiv").hide();
      if (data.success) {
        // debugger;
        this.setState({sendedAgreement:data.sended_agreements, agrLoaded:true})
        // console.log(this.state.ragreement);
      } 
      //console.log("set user data"+JSON.stringify(this.state.profileData))
      },
    (error) => {
      console.log('error')
    }
    )
}	
  //have set the object
 /*  getExecuteAgreement(){
      let { user } = this.state;
      let data = {user_id: user.assets_id}
    fetch(`${API_URL}assetsapi/get_submitted_deal`, {
      method: 'post',
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(
      ({success, data}) => {
        // debugger;
      //console.log("data 2: "+JSON.stringify(result.profile))
      if (success) {
        // debugger;
          if (data.length > 0) {
             data = data.filter((item) => item && item.hasOwnProperty('deal_id'));
             this.setState({executedAgreement:data})
          }
        // console.log(this.state.executedAgreement);
      } 
      //console.log("set user data"+JSON.stringify(this.state.profileData))
      },
    (error) => {
      console.log('error')
    }
    )
  } */
  getExecuteAgreement() {
	   $("#loaderDiv").show();
        let { user } = this.state;
        fetch(`${API_URL}assetsapi/execute_agreement/${user.assets_id}/${user.session_id}`, {
            method: 'get'
        })
            .then(res => res.json())
            .then(
                (data) => {
                    // debugger;
					 $("#loaderDiv").hide();
                    //console.log("data 2: "+JSON.stringify(result.profile))
                    if (data.success) {
                        this.setState({executedAgreement:data.execute_agreements,agrLoaded:true})
                        // console.log(this.state.executedAgreement);
                    }
                    //console.log("set user data"+JSON.stringify(this.state.profileData))
                },
                (error) => {
                    console.log('error')
                }
            )
    }
  submitAgreement() {
		 $("#loaderDiv").show();
		
		const agreementContent = document.getElementById("contentPreview").innerHTML;
		// alert(agreementContent)
		// console.log(agreementContent);
		
		
        let { previewAgreement, user, selectedAgreement } = this.state;
        let data = {
          deal_id: selectedAgreement.deal_id,
          agreement_content: agreementContent,
          user_id: user.assets_id,
          comment: '',
          signature_content: '',
          signature_type: '',
          div_id: '',
        };
		//console.log(data);
        fetch(`${API_URL}assetsapi/agreement_acceptance`, {
            method: 'post',
            body:JSON.stringify(data)
        })
            .then(res => res.json())
            .then(
                (data) => {
                    // debugger;
				
                    //console.log("data 2: "+JSON.stringify(result.profile))
                    if (data) {
						$("#loaderDiv").hide();
						/*  $("#actionType").val("Yes");
						 $("#hiddenURL").val("agreement");
						 $(".confirm-body").html(data.msg);
						 $("#BlockUIConfirm").show(); */
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
                        // console.log(data);
                    }
                    //console.log("set user data"+JSON.stringify(this.state.profileData))
                },
                (error) => {
                    console.log('error')
                }
            )
    }
    /* getPropertyList() {
        fetch(`${API_URL}assetsapi/invite_request/${JSON.parse(this.state.userData).assets_id}/${JSON.parse(this.state.userData).assetsTypeId}/${JSON.parse(this.state.userData).session_id}`, {
            method: 'get'
        })
            .then(res => res.json())
            .then(
                (data) => {
                    //console.log("data 2: "+JSON.stringify(result.profile))
                    if (data.success) {
                        debugger;
                        this.setState({propertyByUser: data.invitation})
                        console.log(this.state.propertyByUser);
                    }
                    //console.log("set user data"+JSON.stringify(this.state.profileData))
                },
                (error) => {
                    console.log('error')
                }
            )
    } */
	onClickChangeStatus(Status)
	{
		 let { user, updatedAgreement } = this.state;
	
		// console.log('dsafgas'+JSON.stringify(this.state));
		// var status = $('#status').val();
        let data = {
          property_id:updatedAgreement.property_id,
		   status:Status,
           user_id: user.assets_id
        };
		 //console.log('dsafgas'+JSON.stringify(data));
		 $("#loaderDiv").show();
		 
		fetch(`${API_URL}assetsapi/change_status_execute`, {
            method: 'post',
            body:JSON.stringify(data)
        })
            .then(res => res.json())
            .then(
                (data) => {
                    // debugger;
                    //console.log("data 2: "+JSON.stringify(result.profile))
                    if (data) {
						$("#loaderDiv").hide();
						 // $("#actionType").val("Yes");
						 // $("#hiddenURL").val("agreement");
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
                        // console.log(data);
                    }
                    //console.log("set user data"+JSON.stringify(this.state.profileData))
                },
                (error) => {
                    console.log('error')
                }
            )
	}
	onClickChangeStatusReject(Status)
	{
		 let { user, selectedAgreement } = this.state;
	
		// console.log('dsafgas'+JSON.stringify(this.state));
		// var status = $('#status').val();
        let data = {
          property_id:selectedAgreement.property_id,
		   status:Status,
           user_id: user.assets_id
        };
		 //console.log('dsafgas'+JSON.stringify(data));
		 $("#loaderDiv").show();
		 
		fetch(`${API_URL}assetsapi/change_status_rejected`, {
            method: 'post',
            body:JSON.stringify(data)
        })
            .then(res => res.json())
            .then(
                (data) => {
                    // debugger;
                    //console.log("data 2: "+JSON.stringify(result.profile))
                    if (data) {
						 $("#loaderDiv").hide();
						/* $("#actionType").val("Yes");
						 $("#hiddenURL").val("agreement");
						 $(".confirm-body").html(data.msg);
						 $("#BlockUIConfirm").show(); */
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
                        // console.log(data);
                    }
                    //console.log("set user data"+JSON.stringify(this.state.profileData))
                },
                (error) => {
                    console.log('error')
                }
            )
	}
getPropertyList() {
        fetch(`${API_URL}assetsapi/service_request/${JSON.parse(this.state.userData).assets_id}/${JSON.parse(this.state.userData).session_id}`, {
            method: 'get'
        })
            .then(res => res.json())
            .then(
                (data) => {
                    //console.log("data 2: "+JSON.stringify(result.profile))
                    if (data.success) {
                        // debugger;
                        this.setState({propertyByUser: data.service.property_list})
                        // console.log('pp'+JSON.stringify(this.state.propertyByUser));
                    }
                    //console.log("set user data"+JSON.stringify(this.state.profileData))
                },
                (error) => {
                    console.log('error')
                }
            )
    }
  verticalNavbar(value,e)
  {
      var activeclassName="nav-link agreement-fa active";
      var normalclassName="nav-link agreement-fa";
      if(e.target.id==="saved")
      {
		  //window.location.reload();
          document.getElementById(e.target.id).setAttribute('class',activeclassName)
          document.getElementById("create").setAttribute('class',normalclassName)
          document.getElementById("request").setAttribute('class',normalclassName)
          document.getElementById("execute").setAttribute('class',normalclassName)
		  $('#v-edit').hide();
      }
      else if(e.target.id==="create")
      { 
		  this.onClickCheckPermission('create_agreement');
         
		  document.getElementById(e.target.id).setAttribute('class',activeclassName)
          document.getElementById("saved").setAttribute('class',normalclassName)
          document.getElementById("request").setAttribute('class',normalclassName)
          document.getElementById("execute").setAttribute('class',normalclassName)
      }
      else if(e.target.id==="request")
      {
          document.getElementById(e.target.id).setAttribute('class',activeclassName)
          document.getElementById("saved").setAttribute('class',normalclassName)
          document.getElementById("create").setAttribute('class',normalclassName)
          document.getElementById("execute").setAttribute('class',normalclassName)
      }
      else if(e.target.id==="execute")
      {
          document.getElementById(e.target.id).setAttribute('class',activeclassName)
          document.getElementById("saved").setAttribute('class',normalclassName)
          document.getElementById("create").setAttribute('class',normalclassName)
          document.getElementById("request").setAttribute('class',normalclassName)   
      }
  }
  previewAgreement(agreement) {
        let data = {deal_id: agreement.deal_id};
        this.setState({selectedAgreement: agreement});
        fetch(`${API_URL}assetsapi/agreement_content`, {
            method: 'post',
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(
                ({success, data}) => {
                    if (success) {
                        this.setState({previewAgreement:data.replaced_template, agrLoaded:true}, () => {
                          $('#contentPreview').html(data.replaced_template);
                        });
                    }
                },
                (error) => {
                    console.log('error')
                }
            )
    }
	insertComponent(e) {
      let compName = e.target.value;
       i = parseInt(i, 10) ? i+1 : 0;
       var target = $('#signature')
        if(compName=='Insert Signature Block') {
          target.append("<p><div contenteditable='false' className='sigDiv' id='sigId"+i+"' style='width:300px;height:100px;border:1px solid #eee; border-top:0' data-toggle='modal' data-target='#custom-width-modal' onclick='addplaceId(this.id)'>"+compName+"</div></p>")
        }
        else if(compName=='Insert Text Box')
        {
           target.append("<p><input className='inner' type='text' id='textId"+i+"'  style='width:300px;height:20px;border:1px solid #eee;' placeholder='Enter text value'/></p>");
        }
        else if(compName=='Insert Date Box')
        {
            target.append("<p><input className='datepickerWithoutTime' type='text' id='dateId"+i+"'  style='width:120px;height:20px;border:1px solid #eee;' placeholder='dd/mm/yyyy' /></p>");
        }
        else if(compName=='Insert Check Box')
        {
            target.append("<p><input className='inner' type='checkbox' id='dateId"+i+"' /></p>");
        }
        else
        {
            target.append("<p><span className='inner' style='background:#57bb57;padding:2px 10px;border-radius:2px;font-size: 14px;color: #fff;float: left;margin-right: 5px;'>"+compName+"</span></p>");

            // tinymce.get("editor").setContent(content+" "+"<span className='inner' style='background:#57bb57;padding:2px 10px;border-radius:2px;font-size: 14px;color: #fff;float: left;margin-right: 5px;'>"+compName+"</span>");
        }
    }

    showSideOption()
    {
        // var $=window.$
        // debugger;
        if($('#sideTogle').css('display') == 'none')
        {
            $('#sideTogle').show();
        }
        else
        {
            $('#sideTogle').hide();
        }
    }
	changeTabs(id) {
        if (id == "received") {
            $("#sentTab").removeClass("active")
            $("#partnerSignTab").removeClass("active")
            
        }else if (id == "partnerSign") {
          $("#sentTab").removeClass("active")
          $("#receivedTab").removeClass("active")
          this.partnerDetail();
          
      }else {
            $("#receivedTab").removeClass("active")
            $("#partnerSignTab").removeClass("active")
           
        }
    }
onClickCheckPermission(feature){
	$("#loaderDiv").show();
	// console.log(JSON.stringify(this.state.editAgreement));
	// if(this.state.editAgreement==undefined ||this.state.editAgreement==''){
		
		fetch(`${API_URL}assetsapi/checkPermissions/${JSON.parse(this.state.userData).assets_id}/`+feature, {
		  method: "GET"
		})
		  .then(response => {
			return response.json();
		  })
		  .then((data) => {
			//debugger;
			//console.log('dataaaa:  ', data);
			if(data.success===1){
			  // var userid = data.user.assets_id
			  // localStorage.setItem('userid',userid)
						 $("#loaderDiv").hide();
						 // $("#actionType").val("No");
						   // $("#hiddenURL").val("saved");
						   var msg = "<div style='font-size:14;font-weight:500;text-align:center'>"+data.msg+"</div>"
						   $("#v-create").html(msg);
						   // $(".confirm-body").html(msg);
						    // $("#BlockUIConfirm").show();
						   $('#v-create').show()
						  // $(".row-dialog-btn").click(function(){
							    // $('#vcreatepermission').show()
						   // })
							   
				}else{
					$("#loaderDiv").hide();
					this.props.history.push('/owner-agreement-create');
				}
		  }
		).catch((error) => {
			console.log('error: ', error);
		  });
	// }
	 // else{
		 
		 // $("#loaderDiv").hide();
		  // this.setState({editAgreement: ''});
	 // }
	
  
	  
    
  }
	terminateAgreement(deal_id){
		$("#loaderDiv").show();
		  fetch(`${API_URL}assetsapi/agreement_terminate/${JSON.parse(this.state.userData).assets_id}/`+deal_id, {
				  method: "GET"
				})
				  .then(response => {
					return response.json();
				  })
				  .then((data) => {
					//debugger;
					//console.log('dataaaa:  ', data);
					if(data.success===1){
					  // var userid = data.user.assets_id
					  // localStorage.setItem('userid',userid)
								$("#loaderDiv").hide();
								// $("#actionType").val("Yes");
								   // $("#hiddenURL").val("agreement");
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
								  
								  // $(".row-dialog-btn").click(function(){
										// $('#vcreatepermission').show()
								   // })
									   
						}else{
							$("#loaderDiv").hide();
						}
				  }
				).catch((error) => {
					console.log('error: ', error);
				  });
  }
  partnerDetail(){
    $("#loaderDiv").show();
   
    fetch(`${API_URL}assetsapi/get_partner_detail_by/${JSON.parse(this.state.userData).assets_id}/${JSON.parse(this.state.userData).session_id}`, {
       method: 'GET'
   })
       .then(res => res.json())
       .then(
           (data) => {
               // debugger;
               //console.log("data 2: "+JSON.stringify(result.profile))
               if (data) {
                   $("#loaderDiv").hide();
                   this.setState({partnerSignInfo:data.partnerSignInfo})
                   // console.log(data);
               }
               //console.log("set user data"+JSON.stringify(this.state.profileData))
           },
           (error) => {
               console.log('error')
           }
       )
}
checkPartnerInfo(element){
  //console.log(JSON.stringify(element))
  $("#loaderDiv").show();
   
    fetch(`${API_URL}assetsapi/partenerinfo_by_deal/`+element.deal_id, {
       method: 'GET'
   })
       .then(res => res.json())
       .then(
           (data) => {
               // debugger;
               //console.log("data 2: "+JSON.stringify(result.profile))
               if (data) {
                   $("#loaderDiv").hide();
                   if(data.success=='1'){
                    // $("#actionType").val("No");
                    // $("#hiddenURL").val("agreement");
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
                    
                   }else{
                    this.props.history.push({pathname:'/owner-agreement-partner',state:{deal_id:element.deal_id,agreement_title:element.agreement_title,property:element.property,propertyAddress:element.propertyAddress,propertyId:element.property_id, loc:'/agreement'}});
                   }
                  
                   // console.log(data);
               }
               //console.log("set user data"+JSON.stringify(this.state.profileData))
           },
           (error) => {
               console.log('error')
           }
       )
  

}
  render(){
      return(
    <div>
     <div className="wrapper">
          <div className="container"> 
            {/* Page-Title */}
            <AgreementHeader/>
            {/* end page title end breadcrumb */}
            <div className="row"> 
              {/* Right Sidebar */}
              <div className="col-lg-12">
                <div className="card-box">
                  <div className="tabs-vertical-env">
                    <div className="row">
                      <div style={{marginTop:-10}} className="col-md-2">
                        <ul className="nav tabs-vertical">
                          <li className="nav-item">
                                    <a id="saved" onClick={this.verticalNavbar.bind(this,"saved")} href="#v-saved" className="nav-link agreement-fa active" data-toggle={"tab"} aria-expanded={false}>
                                        <i className="icon-folder-alt"></i>&nbsp;&nbsp;Saved
                                    </a> 
                                </li>
                                <li className="nav-item">
                                    <a id="create" href="#v-create" onClick={this.verticalNavbar.bind(this,"create")} className="nav-link agreement-fa" data-toggle={"tab"} aria-expanded={true}>
                                        <i className="icon-plus"></i>&nbsp;&nbsp;Create
                                    </a> 
                                </li>
                          <li className="nav-item"> <a href="#v-requested" id="request" onClick={this.verticalNavbar.bind(this,"request")} className="nav-link agreement-fa" data-toggle="tab" aria-expanded="true"><i className="icon-note" />&nbsp;&nbsp;Requested</a> </li>
                          <li className="nav-item"> <a href="#v-execute" id="execute" onClick={this.verticalNavbar.bind(this,"execute")} className="nav-link agreement-fa" data-toggle="tab" aria-expanded="true"><i className="icon-compass" />&nbsp;&nbsp;Executed</a> </li>
                        </ul>
                      </div>
                      <div className="col-md-10">
                        <div className="tab-content">
						<Saved selectedAgreement={this.selectedAgreement} agreement={this.state.agreement} pdfViewAgreement={this.pdfViewAgreement} deleteAgreement={this.deleteAgreement}  />
							{/*  <VCreate userData={this.state.userData}/>  */}
						<div className="tab-pane" id="v-create" style={{display:'none'}}></div>
                         {<VRequested previewAgreement={this.previewAgreement} ragreement={this.state.requestedAgreement || []} sendedAgreement={this.state.sendedAgreement || []} dealPdfView={this.dealPdfView} changeTabs = {this.changeTabs} partnerSignInfo={this.state.partnerSignInfo}/>}
                          <VExecute ragreement={this.state.executedAgreement} selectedExecutedAgreement={this.selectedExecutedAgreement} onClickDownload={this.onClickDownload} dealPdfView={this.dealPdfView} terminateAgreement={this.terminateAgreement} assetsId = {JSON.parse(this.state.userData).assets_id} checkPartnerInfo={this.checkPartnerInfo}/>
						  	
						  <div className="tab-pane" id="executePreview">
                                      <div id="executePreviewContainer"></div>
									  {this.state.updatedAgreement && this.state.updatedAgreement.status==="Inprocess" && (this.state.updatedAgreement.receiver_id!== JSON.parse(this.state.userData).assets_id)?
									  <div className="row">
									  {/* < select className="form-control" id="status">
										  <option>Please Select</option>
											<option value="Inprocess">Inprocess</option>
											<option value="Completed">Completed</option>
									  </select> */}
										   <button type ="button" className="btn btn-success" onClick={this.onClickChangeStatus.bind(this,'Completed')} >Execute</button> 
										   
									   </div>: ''
									   }
                                  </div>
                          <div className="tab-pane" id="preview">
                            <div id="contentPreview"></div>
                            <div id="commentBox"></div>
                            <div id="signature"></div>
                            <button type="button" onClick={this.submitAgreement} className="btn btn-primary stepy-finish">Accept</button> &nbsp;
							<button type ="button" className="btn btn-warning" onClick={this.onClickChangeStatusReject.bind(this,'Rejected')} >Reject</button>
                          </div>
						  
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix" />
				
				  
                </div>
              </div>
              {/* end Col */} 
            </div>
              {$('#preview').hasClass('active') &&
              <div className="row">
                <div className="col-md-12">
                    {/* <!-- sample modal content -->                             */}
						{/* <div className="fixed-action-btn hide-on-large-only">
                    <a className="btn-floating btn-large teal" onClick={this.showSideOption}>
                      <i className="large fi-menu"></i> </a>
						</div> */}
                  <div className="custome-temp" id="sideTogle" style={{display: 'none'}}>
                    <div className="slimScrollDiv"
                         style={{position: 'relative', overflow: 'hidden', width: 'auto', height: ' 282px'}}>
                      <div className="autohide1-scroll" style={{height: '282px', overflow: 'hidden', width: 'auto'}}>
                        <div id="accordion" className="m-b-10">

                          <div className="card">
                            <div className="card-header btn btn-success waves-effect w-md waves-light" role="tab"
                                 id="headingFive">
                              <h5 className="mb-0 mt-0"><a className="font-blk" data-toggle="collapse" data-parent="#accordion"
                              href="#collapseFive" aria-expanded="false"
                              aria-controls="collapseFive"> Insert Components </a></h5>
                            </div>
                            <div id="collapseFive" className="collapse" role="tabpanel" aria-labelledby="headingFive">
                              <div className="card-block">
                                <div className="add-name">
                                  <input type="button" value="Insert Signature Block"
                                         onClick={this.insertComponent.bind(this)}/>
                                  <input type="button" value="Insert Text Box"
                                         onClick={this.insertComponent.bind(this)}/>
                                  <input type="button" value="Insert Date Box"
                                         onClick={this.insertComponent.bind(this)}/>
                                  <input type="button" value="Insert Check Box"
                                         onClick={this.insertComponent.bind(this)}/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slimScrollBar" style={{
                          background: 'rgb(158, 165, 171)',
                          width: ' 5px',
                          position: 'absolute',
                          top: '0px',
                          opacity: '1',
                          display: 'block',
                          borderRadius: '7px',
                          zIndex: '99',
                          right: '1px'
                      }}></div>
                      <div className="slimScrollRail" style={{
                          width: '5px',
                          height: '100%',
                          position: 'absolute',
                          top: '0px',
                          display: 'none',
                          borderRadius: '7px',
                          background: 'rgb(51, 51, 51)',
                          opacity: '0.2',
                          zIndex: '90',
                          right: '1px'
                      }}>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              }
            {/* End row */} 
          </div>
          {/* end container */} 
        </div>
        {/* end wrapper */} 
        {/* Footer */}

        {/* End Footer */}

        {/* jQuery  */} 
        {/* Tether for Bootstrap */} 
        {/*   */} 
        {/* init */} 
        {/*Form Wizard*/} 
        {/*wizard initialization*/} 
        {/* App js */} 
        {/* Page JS Code */} 
        {/*   */} 

        {/*- Signature POUP */} 
        {/* <div data-toggle="modal" data-target="#custom-width-modal">Custom width Modal</div> */}

        {/*  */}

        {/* /.modal */} 
        {/* EOD Signature POPUP */}
		<SendMsg userProperty={this.state.propertyByUser}
                 users={this.state.propertyByUser && this.state.propertyByUsers}
                 agreement={this.state.forwardAgreement}
				 UpdAgreement={this.state.updatedAgreement}
                 session_id={JSON.parse(this.state.userData).session_id}
        />
      
        <CustomWithModal/>
	
		<div id="DelBlockUIConfirm" className="BlockUIConfirm" style={{display:"none"}}>
					<div className="blockui-mask"></div>
						<div className="RowDialogBody">
							<div className="confirm-header row-dialog-hdr-success">
								Notification
							</div>
							<div className="confirm-body">
						
						</div>
						<div className="confirm-btn-panel text-center">
							<div className="btn-holder">
								<input type="hidden" id="hiddenURL" />
								<input type="hidden" id="actionType" />
								<input type="button" className="row-dialog-btn btn btn-success" value="Yes" />
								<input type="button" className="row-dialog-btn btn btn-naked" value="Cancel"  />
							</div>
						</div>
					</div>
				</div>
      </div>
      );
  }    
}