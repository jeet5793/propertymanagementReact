import React from 'react'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import API_URL from '../../../app-config'
import {Link} from 'react-router-dom'
// import { Redirect } from 'react-router';
// import './style.css'
import Cookies from 'js-cookie';
import $ from 'jquery'
//import Autosuggest from 'react-autosuggest';
//import DatePicker from 'react-date-picker';
import CustomWithModal from './CustomWithModal'
//var i
var i =1;

export default class AgreementPreview extends React.Component{
   constructor(props){
    super(props)
    this.state={
		userData : Cookies.get('profile_data'),
		
    },
    this.templateRef = React.createRef();
   	this.onClickSend = this.onClickSend.bind(this);
    
  }

  
   
  componentDidMount() {
	 //this.getPropertyList()
  }
  onClickSend(e){
	  e.preventDefault();
	  const templateData = document.getElementById("contentPreview").innerHTML;//this.templateRef.current;
	  //console.log(templateData);
	  //alert(templateData);
	  let dataProps = this.props.location.state.dataToSend;

	  let objToSend = {
		templateData:templateData,
		agreement_id: dataProps.agreement_id,
		description: dataProps.description,
		loginUserId: dataProps.loginUserId,
		paid_to: dataProps.paid_to,
		property_id: dataProps.property_id,
		receiver_id: dataProps.receiver_id,
		sender_id: dataProps.sender_id,
		session_id: dataProps.session_id,
		tenure_end_date: dataProps.tenure_end_date,
		tenure_start_date: dataProps.tenure_start_date,
		agreement_type:dataProps.agreement_type,
	  }
	  //console.log(objToSend);
	  $("#loaderDiv").show();
	  fetch(`${API_URL}assetsapi/template_agreement_send`, {
		method: 'post',
		body: JSON.stringify(objToSend)
	})
		.then(res => res.json())
		.then(
			(data) => {
				$("#loaderDiv").hide();
				if (data.success) {
					/* $("#actionType").val("No");
					//$("#hiddenURL").val("owner-agent");
					$(".confirm-body").html(data.msg);
					$("#BlockUIConfirm").show(); */
					//this.setState({previewAgreement:data.replacedTemplate});
					
					confirmAlert({
					  customUI: ({ onClose }) => {
						return (
						  <div className='custom-ui'>
							<h4>Notification</h4>
							<p>{data.msg}</p>
							<button onClick={()=>{
										this.props.history.push({pathname:this.props.location.state.locCommon});
							onClose()}}>Ok</button>
						  </div>
						)
					  }
					})
				}else{
					/* $("#actionType").val("No");
					//$("#hiddenURL").val("owner-agent");
					$(".confirm-body").html(data.msg);
					$("#BlockUIConfirm").show(); */
					confirmAlert({
					  customUI: ({ onClose }) => {
						return (
						  <div className='custom-ui'>
							<h4>Notification</h4>
							<p>{data.msg}</p>
							<button onClick={()=>{
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
	

    render(){
		//console.log('preview '+JSON.stringify(this.props.location.state));
		
			const propsData = this.props.location.state;
    return (
		
			<div className="wrapper">
				<div className="container">                     
					<div className="page-title-box">
					<div className="btn-group pull-right">
                        	<ol className="breadcrumb hide-phone p-0 m-0">
                       		 	<li>
									<Link to={{pathname:propsData.loc,state:{loc:propsData.locCommon,TemplateId:this.props.location.state.dataToSend.agreement_id,templateDescription:propsData.PreviewAgreement,agreement_type:this.props.location.state.dataToSend.agreement_type}}}><span className="btn waves-light waves-effect w-md btn-custom"><i className="fi-reply"></i>&nbsp;&nbsp;Back</span></Link>
								</li>
                        	</ol>
                    	</div>
						<h4 className="page-title">Agreement Preview</h4>
					</div>
					
					<div className="row">
						<div className="col-sm-12">
							<div className="card-box">
								
								<div className="tab-pane" id="preview">
									<div id="contentPreview" ref={this.templateRef} dangerouslySetInnerHTML={{__html: propsData.PreviewAgreement}}></div>
									<div id="commentBox"></div>
									<div id="signature"></div>
								</div>
								<button type="submit" onClick = {this.onClickSend} className="btn btn-success waves-effect waves-light">Send</button>
							</div>
						</div>
					</div>
				</div>
				<CustomWithModal/>
			</div>
			
  );}
  }