import React from 'react'
import Header from '../Header/Header'

export default class OwnerAgreement extends React.Component {
    constructor(props){
        super(props);
        //alert("agreement"+JSON.stringify(props));
    }
    componentWillMount(){
       // alert("agreement");
    }
  
    render() {
        // if (this.props.owner) {
            return (
                <div>
                    <div style={{ marginTop: '3%', marginBottom: '3%' }} className="wrapper">
                        <div className="container">

                            {/* <!-- Page-Title --> */}
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="page-title-box">
                                        <h4 className="page-title">Agreement</h4>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end page title end breadcrumb --> */}

                            <div className="row">

                                {/* <!-- Right Sidebar --> */}
                                <div className="col-lg-12">
                                    <div className="card-box">
                                        <div className="tabs-vertical-env">
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <ul className="nav tabs-vertical">
                                                        <li className="nav-item"> <a href="#v-saved" className="nav-link agreement-fa active" data-toggle="tab" aria-expanded="false"><i className="icon-folder-alt"></i>&nbsp;&nbsp;Saved</a> </li>
                                                        <li className="nav-item"> <a href="#v-create" className="nav-link agreement-fa" data-toggle="tab" aria-expanded="true"><i className="icon-plus"></i>&nbsp;&nbsp;Create</a> </li>
                                                        <li className="nav-item"> <a href="#v-requested" className="nav-link agreement-fa" data-toggle="tab" aria-expanded="true"><i className="icon-note"></i>&nbsp;&nbsp;Requested</a> </li>
                                                        <li className="nav-item"> <a href="#v-execute" className="nav-link agreement-fa" data-toggle="tab" aria-expanded="true"><i className="icon-compass"></i>&nbsp;&nbsp;Execute</a> </li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-10">
                                                    <div className="tab-content">
                                                        <div className="tab-pane active" id="v-saved">
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
                                                                        <tr>
                                                                            <td>Property Title Property Title Property Title</td>
                                                                            <td>10/05/2018</td>
                                                                            <td><a href="#" className="table-action-btn view-rqu"><i className="mdi mdi-border-color"></i></a><a href="#" className="table-action-btn view-rqu"><i className="mdi mdi-close"></i></a><a href="#" className="table-action-btn view-rqu"><i className=" mdi mdi-redo-variant"></i></a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Property Title Property Title Property Title</td>
                                                                            <td>10/05/2018</td>
                                                                            <td><a href="#" className="table-action-btn view-rqu"><i className="mdi mdi-border-color"></i></a><a href="#" className="table-action-btn view-rqu"><i className="mdi mdi-close"></i></a><a href="#" className="table-action-btn view-rqu"><i className=" mdi mdi-redo-variant"></i></a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Property Title Property Title Property Title</td>
                                                                            <td>10/05/2018</td>
                                                                            <td><a href="#" className="table-action-btn view-rqu"><i className="mdi mdi-border-color"></i></a><a href="#" className="table-action-btn view-rqu"><i className="mdi mdi-close"></i></a><a href="#" className="table-action-btn view-rqu"><i className=" mdi mdi-redo-variant"></i></a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Property Title Property Title Property Title</td>
                                                                            <td>10/05/2018</td>
                                                                            <td><a href="#" className="table-action-btn view-rqu"><i className="mdi mdi-border-color"></i></a><a href="#" className="table-action-btn view-rqu"><i className="mdi mdi-close"></i></a><a href="#" className="table-action-btn view-rqu"><i className=" mdi mdi-redo-variant"></i></a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Property Title Property Title Property Title</td>
                                                                            <td>10/05/2018</td>
                                                                            <td><a href="#" className="table-action-btn view-rqu"><i className="mdi mdi-border-color"></i></a><a href="#" className="table-action-btn view-rqu"><i className="mdi mdi-close"></i></a><a href="#" className="table-action-btn view-rqu"><i className=" mdi mdi-redo-variant"></i></a></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
				{/* =================Create==========================*/}
							<div className="tab-pane" id="v-create">
								<div className="bdr">
								  <form id="default-wizard">
									<fieldset title="1">
									  <legend>Create</legend>
									  <div className="form-group">
										<div className="col-md-12">
										  <div className="row m-t-20">
											<div className=" col-sm-2">
											  <label><b>Agreement Title:</b></label>
											</div>
											<div className="col-sm-10">
											  <input type="text" className="form-control"/>
											</div>
										  </div>
										</div>
									  </div>
									  <div className="row">
										<div className="col-md-12">
                               
							   {/*<!-- sample modal content -->*/}
									<div className="fixed-action-btn hide-on-large-only">
										<a className="btn-floating btn-large teal" onclick="showSideOption()"> <i className="large fi-menu"></i> </a> 
									  </div>
                              
							  
							  <div className="custome-temp" id="sideTogle" style={{display: "none"}}>
                                <div className="autohide1-scroll" style={{height: "100px"}}>
                                  <div id="accordion" role="tablist" aria-multiselectable="true" className="m-b-10">
                                    <div className="card m-b-5">
                                      <div className="card-header  btn btn-warning waves-effect w-md waves-light" role="tab" id="headingOne">
                                        <h5 className="mb-0 mt-0"> <a className="font-blk" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne"> Header Section </a> </h5>
                                      </div>
                                      <div id="collapseOne" className="collapse" role="tabpanel" aria-labelledby="headingOne">
                                        <div className="card-block">
                                          <div className="row">
                                            <div className="col-sm-12">
                                              <label><b>Header Content</b></label>
                                              <input type="text" className="form-control" maxlength="15"/>
                                            </div>
                                          </div>
                                          <div className="row">
                                            <div className="col-sm-12">
                                              <label><b>Header Image</b></label>
                                              <input type="file" className="form-control"/>
                                            </div>
                                          </div>
                                          <div className="row">
                                            <div className="col-sm-12">
                                              <label><b>Water Mark Image</b></label>
                                              <input type="file" className="form-control"/>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="card m-b-5">
                                      <div className="card-header  btn btn-warning waves-effect w-md waves-light" role="tab" id="headingTwo">
                                        <h5 className="mb-0 mt-0"> <a className="font-blk" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Footer Section </a> </h5>
                                      </div>
                                      <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
                                        <div className="card-block">
                                          <div className="row">
                                            <div className="col-sm-12">
                                              <label><b>Footer Content</b></label>
                                              <textarea className="form-control"  maxlength="30"></textarea>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                   
								   <div className="card m-b-5">
                                      <div className="card-header  btn btn-warning waves-effect w-md waves-light" role="tab" id="headingThree">
                                        <h5 className="mb-0 mt-0"> <a className="font-blk" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> Agreement Template </a> </h5>
                                      </div>
                                      <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree">
                                        <div className="card-block">
                                          <div className="add-name">
                                            <a href="#" onclick="demoTemplate()">Template 1</a><br/>
                                            <a href="#" onclick="demoTemplate()">Template 2</a><br/>
                                            <a href="#" onclick="demoTemplate()">Template 3</a>
											
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    
									
									<div className="card">
                                      <div className="card-header btn btn-warning waves-effect w-md waves-light" role="tab" id="headingFour">
                                        <h5 className="mb-0 mt-0"> <a className="font-blk" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour"> Insert Custom </a> </h5>
                                      </div>
                                      <div id="collapseFour" className="collapse" role="tabpanel" aria-labelledby="headingFour">
                                        <div className="card-block">
                                          <div className="add-name">
                                            <input type="button" value="Rent Amount" onclick="insertComponent(this.value)"/>
                                            <input type="button" value="Selling Amount" onclick="insertComponent(this.value)"/>
                                            <input type="button" value="Deposit Amount" onclick="insertComponent(this.value)"/>
                                            <input type="button" value="Owner Full Name" onclick="insertComponent(this.value)"/>
                                            <input type="button" value="Agent Full Name" onclick="insertComponent(this.value)"/>
                                            <input type="button" value="Tenant Full Name" onclick="insertComponent(this.value)"/>
                                            <input type="button" value="Agent Address" onclick="insertComponent(this.value)"/>
                                            <input type="button" value="Owner Address" onclick="insertComponent(this.value)"/>
                                            <input type="button" value="Tenant Address" onclick="insertComponent(this.value)"/>
                                            <input type="button" value="Property Address" onclick="insertComponent(this.value)"/>
											<input type="button" value="Insert Signature Block" onclick="insertComponent(this.value)"/>
											<input type="button" value="Insert Text Box" onclick="insertComponent(this.value)"/>
											<input type="button" value="Insert Date Box" onclick="insertComponent(this.value)"/>
										 </div>
                                        </div>
                                      </div>
                                    </div>
									
									
									
                                  </div>
								  
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row m-t-20">
                            <div className="col-sm-12">
                             



							{/* <!-- <textarea name="editor" id="editor" className="text"></textarea> -->*/}
							 
							 <textarea name="editor" id="editor" className="tinymce"></textarea>
							 

                            </div>
                          </div>
                        
						
						
						  <p className="stepy-navigator">
							  <a href="#" className="button-next btn btn-primary waves-effect waves-light" onclick="showContent()">Next <i className="mdi mdi-arrow-right-bold"></i>
							  </a>
						  </p>
						
						
						
						</fieldset>
                       





					   <fieldset title="2">
							<legend>Preview</legend>
								<div className="row m-t-20">
									<div className="row">
										<div className="col-sm-12" >
											<div id="previewDiv" className="row m-t-20 signature" style={{height:"600px",padding: "12px",overflowY: "scroll"}}>
											</div>
										</div>
									</div>
								</div>
                        </fieldset>
                        <fieldset title="3">
                          <legend>Save</legend>
                          <div className="row m-t-20 signature"> </div>
                        </fieldset>
                        <button type="submit" className="btn btn-primary stepy-finish">Submit</button>
                      </form>
                   
                  </div>
                  <div className="tab-pane" id="v-requested">
                    <div className=" table-responsive">
                      <table className="table bdr">
                        <thead>
                          <tr>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          
						  <tr>
                            <td>Property Title Property Title Property Title</td>
                            <td>10/05/2018</td>
                            <td><a title="View" href="#" className="table-action-btn view-rqu accordion-toggle" data-toggle="collapse" data-target="#collapseOne"><i className="mdi mdi-eye"></i></a><a title="Send" href="#" className="table-action-btn view-rqu" data-toggle="modal" data-target="#send-msg"><i className="mdi mdi-redo-variant"></i></a></td>
                          </tr>
                          
						  <tr>
                            <td colspan="5" className="no-border"><div id="collapseOne" className="collapse in">
                                <div className="list-box">
                                  <div className="row">
                                    <div className="col-md-8">
                                      <p>Property Title Property Title Property Title</p>
                                    </div>
                                    <div className="col-md-2">
                                      <p>10/05/2018</p>
                                    </div>
                                    <div className="col-md-2"> <a title="View" href="#" className="table-action-btn view-rqu"><i className="mdi mdi-eye"></i></a><a title="Send" href="#" className="table-action-btn view-rqu" data-toggle="modal" data-target="#send-msg"><i className="mdi mdi-redo-variant"></i></a> </div>
                                  </div>
                                </div>
                                <div className="list-box">
                                  <div className="row">
                                    <div className="col-md-8">
                                      <p>Property Title Property Title Property Title</p>
                                    </div>
                                    <div className="col-md-2">
                                      <p>10/05/2018</p>
                                    </div>
                                    <div className="col-md-2"> <a title="View" href="#" className="table-action-btn view-rqu"><i className="mdi mdi-eye"></i></a><a title="Send" href="#" className="table-action-btn view-rqu" data-toggle="modal" data-target="#send-msg"><i className="mdi mdi-redo-variant"></i></a> </div>
                                  </div>
                                </div>
                              </div></td>
                          </tr>
                          
						  <tr>
                            <td>Property Title Property Title Property Title</td>
                            <td>10/05/2018</td>
                            <td><a title="View" href="#" className="table-action-btn view-rqu accordion-toggle" data-toggle="collapse" data-target="#collapseTwo"><i className="mdi mdi-eye"></i></a><a title="Send" href="#" className="table-action-btn view-rqu" data-toggle="modal" data-target="#send-msg"><i className="mdi mdi-redo-variant"></i></a></td>
                          </tr>
                         
						 <tr>
                            <td colspan="5" className="no-border"><div id="collapseTwo" className="collapse in">
                                <div className="list-box">
                                  <div className="row">
                                    <div className="col-md-8">
                                      <p>Property Title Property Title Property Title</p>
                                    </div>
                                    <div className="col-md-2">
                                      <p>10/05/2018</p>
                                    </div>
                                    <div className="col-md-2"> <a title="View" href="#" className="table-action-btn view-rqu"><i className="mdi mdi-eye"></i></a><a title="Send" href="#" className="table-action-btn view-rqu" data-toggle="modal" data-target="#send-msg"><i className="mdi mdi-redo-variant"></i></a> </div>
                                  </div>
                                </div>
                                <div className="list-box">
                                  <div className="row">
                                    <div className="col-md-8">
                                      <p>Property Title Property Title Property Title</p>
                                    </div>
                                    <div className="col-md-2">
                                      <p>10/05/2018</p>
                                    </div>
                                    <div className="col-md-2"> <a title="View" href="#" className="table-action-btn view-rqu"><i className="mdi mdi-eye"></i></a><a title="Send" href="#" className="table-action-btn view-rqu" data-toggle="modal" data-target="#send-msg"><i className="mdi mdi-redo-variant"></i></a> </div>
                                  </div>
                                </div>
                              </div></td>
                          </tr>
						  
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                                {/* <!-- end Col -->  */}

                            </div>
                            {/* <!-- End row -->  */}

                        </div>
                        {/* <!-- end container -->  */}
                    </div>
					
			


                </div>
            );
        // }
        // else {
        //     window.location.href='http://'+window.location.host
        // }
    }
}