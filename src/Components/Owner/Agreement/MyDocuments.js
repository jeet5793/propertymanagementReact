import React from 'react';
import {Link} from 'react-router-dom'
import API_URL from '../../../app-config';
import Cookies from 'js-cookie';
import img_not_available from '../../../images/img_not_available.png'
import $ from 'jquery';



export default class MyDocuments extends React.Component{
	constructor(props) {
    super(props);
    this.state = {
		userData:Cookies.get('profile_data'),
			ListofDoc:[],
			docListStatus:false,
			viewStatus:false,
			docInfo:[]
		}
		this.onClickDelete = this.onClickDelete.bind(this);
		this.onClickView = this.onClickView.bind(this);
	}		
	componentDidMount(){
		this.documentList();
	}
	documentList(){
		$("#loaderDiv").show();
		  fetch(`${API_URL}assetsapi/get_document_info/${JSON.parse(this.state.userData).assets_id}/${JSON.parse(this.state.userData).session_id}`, {
			method: 'GET',          
			}).then((response) => {
			  return response.json();
			}).then((data) => {
			  // console.log('dataaaa:  ', data);
			  $("#loaderDiv").hide();
				 if(data.success){
					 this.setState({ListofDoc:data.documentInfo,docListStatus:!this.state.docListStatus});
				 }
			}).catch((error) => {
			  console.log('error: ', error);
			});
	}
	onClickView(docId){
		$("#loaderDiv").show();
		  fetch(`${API_URL}assetsapi/get_document_info_by/${JSON.parse(this.state.userData).assets_id}/`+docId+`/${JSON.parse(this.state.userData).session_id}`, {
			method: 'GET',          
			}).then((response) => {
			  return response.json();
			}).then((data) => {
			  // console.log('dataaaa:  ', data);
			  $("#loaderDiv").hide();
				 if(data.success){
					 
					  this.setState({docInfo:data.doc_info,viewStatus:!this.state.viewStatus,docListStatus:!this.state.docListStatus});
					  $('#table').hide();
				 }
			}).catch((error) => {
			  console.log('error: ', error);
			});
	}
	onClickDelete(id){
		 var assets_id=JSON.parse(this.state.userData).assets_id;
		 var session_id=JSON.parse(this.state.userData).session_id;
		 $(".confirm-body").html("Do you want to delete socument..?");
		$("#DelBlockUIConfirm").show();
		$(".row-dialog-btn").click(function(){
						const action = this.value;
						// alert(action);
						if(action==="Yes"){
							$("#loaderDiv").show();
							  fetch(`${API_URL}assetsapi/delete_document/`+assets_id+`/`+id+`/`+session_id, {
								method: 'GET',          
								}).then((response) => {
								  return response.json();
								}).then((data) => {
									$("#DelBlockUIConfirm").hide();
								  // console.log('dataaaa:  ', data);
								  $("#loaderDiv").hide();
									 if(data){
										 
										 $("#actionType").val("Yes");
										 $("#hiddenURL").val("my-documents");
										 $(".confirm-body").html(data.msg);
										 $("#BlockUIConfirm").show();
										this.documentList();
									 }
								}).catch((error) => {
								  console.log('error: ', error);
								});
						}else{
							$("#DelBlockUIConfirm").hide();
						}
		});
		
	}
	back(){
		this.setState({docListStatus:!this.state.docListStatus,viewStatus:!this.state.viewStatus});
		 $('#table').show();
	}
	
	render(){

		return(
				<div className="wrapper">
                    <div className="container">
                        <div className="page-title-box">
							<div className="btn-group pull-right">
                                <ol className="breadcrumb hide-phone p-0 m-0">
									 <li>
									{this.state.viewStatus && <button type="button"  onClick={()=>this.back()}  className="btn btn-default stepy-finish">Back</button>} &nbsp;
                                    <Link to='/add-document' className="btn btn-custom waves-light waves-effect w-md"> Add a document</Link></li>
                                </ol>
							</div>
                            <h4 className="page-title">My Documents</h4>
                        </div>
				 {this.state.ListofDoc && this.state.ListofDoc.length>0?
                                  
                    <div className="row" id="table">
                    <div className="col-sm-12">
                        <div className="card-box">
                        <div className="table-responsive">
					
                            <table className="table table-hover m-0 table-actions-bar">
                            <thead>
									<tr>
										<th>#</th>
										<th>Applicant Name</th>
										<th>Document Type</th>                              
										<th>Expiration Date</th>
										<th>Date of Issue</th>
										<th>Document Number</th>
										<th>Case Number</th>
										<th>Action</th>
									</tr>
                            </thead>
                            <tbody>
                           { this.state.ListofDoc.map((element,i)=>(
                                    <tr key={element.id}>
												<td>{i+1}</td>
												<td><h5 className="m-b-0 m-t-0 font-600">{element.applicant_name}</h5></td>
												<td>{element.document_type} </td>
												<td>{element.expireDate} </td>
												<td>{element.issueDate} </td>
												<td>{element.document} </td>
												<td>{element.doc_case} </td>
												<td>
												
												   <a className="table-action-btn" title="View Details">
														<i style={{cursor:'pointer'}} onClick={this.onClickView.bind(this,element.id)} className="mdi mdi-eye"></i>
													</a>
													<a className="table-action-btn" title="Delete Document">
														<i style={{cursor:'pointer'}} onClick={this.onClickDelete.bind(this,element.id)} className="mdi mdi-close"></i>
													</a>
												</td>
											</tr>
                           ))}      
                                
                               
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    </div>
                    :<div className="container"><div style={{textAlign:'center'}} colSpan={7}>No Document Added</div></div>
                }
							
				{(this.state.viewStatus && this.state.docInfo) &&
				<div className="row">
                    <div className="col-md-12">
                        <div className="card-box">
                            
							
							<div className="row">
                                
								

                                <div className="col-sm-6 m-t-20">
                                    <h4 className="m-t-0 header-title">{this.state.docInfo.document_type}</h4>
                                    <p className="text-muted m-b-30 font-13">
                                        Added Date : {this.state.docInfo.addedDate}
                                    </p>

                                    <dl className="dl-horizontal">
                                        
										<dt>Start Date :</dt>
                                        <dd>{this.state.docInfo.issueDate} </dd>
                                        
										<dt>End Date :</dt>
                                        <dd>{this.state.docInfo.expireDate} </dd>
                                        
										<dt>Case Number :</dt>
                                        <dd>{this.state.docInfo.doc_case}</dd>
                                        
										<dt>Applicant Name :</dt>
										<dd>{this.state.docInfo.applicant_name}</dd>
                                        
										
										<dt>Issuer :</dt>
                                        <dd>{this.state.docInfo.issuer}</dd>
                                        
										
										<dt>Physical Location :</dt>
                                        <dd>{this.state.docInfo.physical_location}
                                        </dd>
										
										<dt>Region Where Valid :</dt>
                                        <dd>{this.state.docInfo.region_where_valid}</dd>
                                        
										
										<dt>Document Version</dt>
                                        <dd>{this.state.docInfo.document_version}</dd>
                                        
										
										<dt>Description</dt>
                                        <dd>{this.state.docInfo.description}
                                        </dd>
										
										
                                    </dl>

                                </div>
								
								
								<div className="col-sm-6 m-t-20">
                                    <h4 className="m-t-0 header-title">Document Preview</h4>
                                   
								   {/* <!-- IF file is image then show below div else hide other div-->*/}
						{this.state.docInfo.extension==="png" &&
                                    <div className="thumbnail">
										<img src={this.state.docInfo.extension==="png" && API_URL+this.state.docInfo.doc_path}  width="100%" style={{height:"360px ! important"}} className="img-responsive"/>
										<br/>
										<div className="caption">
											<p>
												<a href={API_URL+this.state.docInfo.doc_path}  className="btn btn-primary waves-effect waves-light" role="button">Download</a>
											</p>
										</div>
									</div>
						}
									{/* <!-- IF file is PDF then show below div else hide other div -->*/}
								{this.state.docInfo.extension==="pdf" &&	 
									<div className="thumbnail">
										
										<embed src={this.state.docInfo.extension==="pdf" && API_URL+this.state.docInfo.doc_path} width="100%" style={{height:"360px"}} className="img-responsive"/>
										<br/>
										<div className="caption">
											<p>
												<a href={API_URL+this.state.docInfo.doc_path}   className="btn btn-primary waves-effect waves-light" role="button">Download</a>
											</p>
										</div>
									</div>
								}
                                </div>
								
                            </div>
						</div>
                    </div>

				</div>}
                    </div>
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