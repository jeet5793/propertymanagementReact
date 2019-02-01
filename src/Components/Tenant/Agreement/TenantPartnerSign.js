import React from 'react'

import API_URL from '../../../app-config'
import {Link} from 'react-router-dom'
// import { Redirect } from 'react-router';
// import './style.css'
import Cookies from 'js-cookie';
import $ from 'jquery'
//import Autosuggest from 'react-autosuggest';
//import DatePicker from 'react-date-picker';
import CustomWithModal from "../../Owner/Agreement/CustomWithModal";
//var i
var i =1;

export default class TenantPartnerSign extends React.Component{
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
	  let dataProps = this.props.location.state;

	  let objToSend = {
		templateData:templateData,
		deal_id: dataProps.deal_id,
		userId: JSON.parse(this.state.userData).assets_id,
		session_id: JSON.parse(this.state.userData).session_id
	  }
	//   console.log(objToSend);
	  $("#loaderDiv").show();
	  fetch(`${API_URL}assetsapi/partner_sign_status_update`, {
		method: 'post',
		body: JSON.stringify(objToSend)
	})
		.then(res => res.json())
		.then(
			(data) => {
				$("#loaderDiv").hide();
				if (data.success) {
					$("#actionType").val("No");
					//$("#hiddenURL").val("owner-agent");
					$(".confirm-body").html(data.msg);
					$("#BlockUIConfirm").show();
					//this.setState({previewAgreement:data.replacedTemplate});
					this.props.history.push({pathname:this.props.location.state.loc});
				}else{
					$("#actionType").val("No");
					//$("#hiddenURL").val("owner-agent");
					$(".confirm-body").html(data.msg);
					$("#BlockUIConfirm").show();
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
		
		<div className="container">                     
			<div className="wrapper">
					<div className="page-title-box">
					<div className="btn-group pull-right">
                        	<ol className="breadcrumb hide-phone p-0 m-0">
                       		 	<li>
									<Link to={{pathname:propsData.loc}}><span className="btn waves-light waves-effect w-md btn-custom"><i className="fi-reply"></i>&nbsp;&nbsp;Back</span></Link>
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