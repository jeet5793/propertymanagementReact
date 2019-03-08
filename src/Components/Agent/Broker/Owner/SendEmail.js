import React from 'react'
import API_URL from "../../../../app-config";
import swal from 'sweetalert';
import $ from 'jquery';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
export default class SendEmail extends React.Component{
	constructor(props){
		super(props);
		this.state={
			email:''
		}
		this.onChangeEmail = this.onChangeEmail.bind(this)
		this.sendEmailToNonUser = this.sendEmailToNonUser.bind(this)
	}
	hideModel()
	{
		var $=window.$;
		$(".modal-backdrop").hide();
	}
	onChangeEmail(e)
	{
		this.setState({email:e.target.value});
	}
	sendEmailToNonUser()
	{
		const opts = this.state;
		// console.log(opts);
		if(!opts.email){
			return;
		}else{	
		document.getElementById("emailFormCancel").click();
			$("#loaderDiv").show();
		fetch(`${API_URL}assetsapi/send_emailto_non_register`, {
			  method: 'post',
			  body:JSON.stringify(opts)
			})
			.then(res => res.json())
			.then(
			  (result) => {
				  $("#loaderDiv").hide(); 
				if (result) {
					// $("#actionType").val("Yes");
				    // $("#hiddenURL").val("broker-owner");
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
	}
	render(){
		return(
				 <div id="send-email" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: 'none'}}>
                <div className="modal-dialog">
                    <div className="modal-content" id="hidemodal2">
                    <div className="modal-header">
                        <button type="button" onClick={this.hideModel} className="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 className="modal-title">Send Email</h4>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                        <div className="col-md-12">
                            <div className="form-group no-margin">
                            <label for="field-7" className="control-label">Emails<span className="required"/></label>
                            <textarea className="form-control" id="field-7" placeholder="" name="email" onChange={this.onChangeEmail}></textarea>
                            </div>
							<span style={{color: "red"}}>Note: Use comma(,) for sending the notification to multiple email id/User.</span>
                        </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" id="emailFormCancel" className="btn btn-secondary waves-effect" data-dismiss="modal" onClick={this.hideModel}>Close</button>
                        <button type="button" className="btn btn-success waves-effect waves-light" onClick={this.sendEmailToNonUser}>Send</button>
                    </div>
                    </div>
                </div>
                </div>

				);
	}
}