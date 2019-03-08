import React from 'react'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import API_URL from '../../../app-config'
//import {loadFile} from '../../js/external'
// import './style.css'
import Cookies from 'js-cookie';
import $ from 'jquery'
//import Customwithmodal from "./CustomWithModal";
import swal from 'sweetalert';
import { Editor } from '@tinymce/tinymce-react';
import {Link} from 'react-router-dom'
//var i
//var i =1;

export default class VEdit extends React.Component{
  constructor(props){
    super(props)
    // console.log('props ', props);
    this.state={
      userData : Cookies.get('profile_data'),
      sectionOpenId:"",
	  editAgreementStatus:false,
      collapseStatus:false,
	  agreement_id:"",
      createForm:{
        user_id:"",
		agreement_id:"",
        agreement_title:"",
        agreement_doc_content:"",
        session_id:"",
		
      },
		templateList:[],
		templateDetails:[]
    }
    this.onChangeHandlerEdit=this.onChangeHandlerEdit.bind(this)
	this.editAgreement=this.editAgreement.bind(this)
    this.headerImage = React.createRef();
    this.waterMarkImage = React.createRef();
  }

  
   
  componentDidMount() {
	 
	  var tinymce=window.tinyMCE;
		  //const agreementForm=this.state.createForm;
		  let agreement = this.props.location.state.editAgreement;
		  this.setState({editAgreementStatus:true,agreement_id:agreement.agreement_id,createForm:{agreement_title:agreement.agreement_title,agreement_doc_content:agreement.agreement_doc_content,header_content:agreement.header_content}})
		   //console.log(agreement)
		    // console.log('tinymce ', tinymce)
		   // console.log(agreement.agreement_doc_content)
          $('input[id="agreement_title"]').val(agreement.agreement_title);
          $('input[id="headerContent"]').val(agreement.header_content);
		   // tinymce.get("editor2").setContent(agreement.agreement_doc_content);
		   var activeEditor = tinymce.get('editor2');
			var content = agreement.agreement_doc_content;
			if(activeEditor!==null){
				activeEditor.setContent(content);
			} else {

				$('#editor2').val(content);
			}
		   // $('#editor2').val(agreement.agreement_doc_content);

      $(document).on('click', '#stepy-navigator',function () {
          this.updatePage();
      }.bind(this));
     
	this.getTemplatesName();
	
	var current_fs, next_fs, previous_fs; //fieldsets
	var left, opacity, scale; //fieldset properties which we will animate
	var animating; //flag to prevent quick multi-click glitches

	$(".next").click(function(){
		if(animating) return false;
		animating = true;
		
		current_fs = $(this).parent();
		next_fs = $(this).parent().next();
		
		//activate next step on progressbar using the index of next_fs
		$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
		
		//show the next fieldset
		next_fs.show(); 
		//hide the current fieldset with style
		current_fs.animate({opacity: 0}, {
			step: function(now, mx) {
				//as the opacity of current_fs reduces to 0 - stored in "now"
				//1. scale current_fs down to 80%
				scale = 1 - (1 - now) * 0.2;
				//2. bring next_fs from the right(50%)
				left = (now * 50)+"%";
				//3. increase opacity of next_fs to 1 as it moves in
				opacity = 1 - now;
				current_fs.css({'transform': 'scale('+scale+')'});
				next_fs.css({'left': left, 'opacity': opacity});
			}, 
			complete: function(){
				current_fs.hide();
				animating = false;
			}, 
			//this comes from the custom easing plugin
			//easing: 'easeInOutBack'
		});
	});

	$(".previous").click(function(){
		if(animating) return false;
		animating = true;
		
		current_fs = $(this).parent();
		previous_fs = $(this).parent().prev();
		
		//de-activate current step on progressbar
		$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
		
		//show the previous fieldset
		previous_fs.show(); 
		//hide the current fieldset with style
		current_fs.animate({opacity: 0}, {
			step: function(now, mx) {
				//as the opacity of current_fs reduces to 0 - stored in "now"
				//1. scale previous_fs from 80% to 100%
				scale = 0.8 + (1 - now) * 0.2;
				//2. take current_fs to the right(50%) - from 0%
				left = ((1-now) * 50)+"%";
				//3. increase opacity of previous_fs to 1 as it moves in
				opacity = 1 - now;
				current_fs.css({'left': left});
				previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
			}, 
			complete: function(){
				current_fs.hide();
				animating = false;
			}, 
			//this comes from the custom easing plugin
			//easing: 'easeInOutBack'
		});
	});
	
	
  }

		getTemplatesName(){
			$("#loaderDiv").show();
			fetch(`${API_URL}assetsapi/checkPermissions/${JSON.parse(this.state.userData).assets_id}/customize_template`, {
				method: "GET"
			})
				.then(response => {
				return response.json();
				})
				.then((data) => {
				//debugger;
				//console.log('dataaaa:  ', data);
				$("#loaderDiv").hide();
				if(data.success===1){
					$("#loaderDiv").show();
					fetch(`${API_URL}assetsapi/templates_by/${JSON.parse(this.state.userData).assets_id}/${JSON.parse(this.state.userData).session_id}`, {
								method: 'get'
							})
						.then(res => res.json())
						.then(
							(result) => {
							//console.log("data 2: "+JSON.stringify(result.profile))
							$("#loaderDiv").hide();
							if (result.success) {
								this.setState({templateList:result.template_list})
								
							} 
							// console.log("templateList"+JSON.stringify(this.state.templateList))
							},
							(error) => {
								console.log('error')
							}
						)
								 
					}
				
				}
			).catch((error) => {
				console.log('error: ', error);
				});
		}
	
  onChangeHandlerEdit(e){
    // debugger;
      const agreementForm=this.state.createForm;
      if(e.target.name==="agreement_title")
      {
        agreementForm.agreement_title=e.target.value;
      }
      else if(e.target.name==="agreement_doc_content")
      {
        agreementForm.agreement_doc_content=e.target.value;
      }
      else if(e.target.name==="headerContent")
      {
          agreementForm.header_content=e.target.value;
      }
      else if(e.target.name==="footerContent")
      {
          agreementForm.footer_content=e.target.value;
      }
      else if(e.target.name === 'headerImage') {
          let file = this.headerImage.current.files[0];
          let reader = new FileReader();
          reader.onload = function () {
              agreementForm.header_image = reader.result;
          };
          reader.onerror = function () {
              console.log('Error reading header image ')
          };
          reader.readAsDataURL(file)
      }
      else if(e.target.name === 'waterMarkImage') {
          let file = this.waterMarkImage.current.files[0];
          let reader = new FileReader();
          reader.onload = function () {
              agreementForm.watermark_image = reader.result;
          };
          reader.onerror = function () {
              console.log('Error reading header image ')
          };
          reader.readAsDataURL(file)
      }
      this.setState({createForm:agreementForm})
      // this.setState({[e.target.name]:e.target.value})    
  }

editAgreement(){
  // debugger;
  var tinymce=window.tinyMCE,$=window.$
  var content = tinymce.get("editor2").getContent();
  const agreementForm=this.state.createForm
  agreementForm.agreement_doc_content=content
  agreementForm.agreement_id=this.state.agreement_id
  agreementForm.session_id=JSON.parse(this.state.userData).session_id
  agreementForm.user_id=JSON.parse(this.state.userData).assets_id
  //alert(JSON.stringify(agreementForm))
  if(agreementForm.agreement_title!==''&&agreementForm.agreement_doc_content!=='')
  {
	$("#loaderDiv").show();
    fetch(`${API_URL}assetsapi/edit_agreement/`, {
      method: "post",
      body: JSON.stringify(agreementForm)
    })
    .then((response) => {
      return response.json()
  }).then((data) => {
    // console.log('EDDDDDIT'+JSON.stringify(data));
        // alert(data)
        if(data){
		  // swal("Assets Watch", data.msg);
         // window.location.reload()
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
									this.props.history.push('/agreement')
						onClose()}}>Ok</button>
					  </div>
					)
				  }
				})
        }
      }
    ).catch((error) => {
      // swal("Assets Watch", "Agreement Edited Successfully");
      // window.location.reload()
      });
  }
  else{
    alert('Please add title and content to create agreement')
  }
}
    demoTemplate2(item)
	  {
		  // console.log(templateDescription);
		  var tinymce=window.tinyMCE,$=window.$
		 tinymce.get("editor2").setContent(item.templateDescription);
		 $('input[id="agreement_title"]').val(item.templateTitle)
		  $('input[id="headerContent"]').val(item.header_content);
		  $('textArea[id="footerContent"]').val(item.footer_content);
		   // $('input[name="headerImage"]').val(item.header_image);
		  // $('input[name="waterMarkImage"]').val(item.footer_image);
		  
		   
	}
  
	
	insertComponent(e)
      {
        //i = parseInt(i, 10) ? i+1 : 0;
		
		//i = i+1;
		var i = Math.floor((Math.random() * 100000000) + 1);
        var compName=e.target.value,tinymce=window.tinyMCE;
        var ed = tinymce.get('editor2');     
        
		//alert(i);
		
        var content = tinymce.get("editor2").getContent();
          
          if(compName=='Insert Signature Block')
            {
				tinymce.activeEditor.execCommand('mceInsertContent', false, "&nbsp;<span contenteditable='false' class='sigDiv' id='sigId"+i+"' style='width:222px;height:40px;border-radius: 4px;padding:10px;border:1px solid #57bb57;background-color:#f2f3f2;color:#ea1010;' data-toggle='modal' data-target='#custom-width-modal' onclick='addplaceId(this.id)'>"+compName+"</span>&nbsp;"); 		
          }

          else if(compName=='Insert Text Box')
          {
            tinymce.activeEditor.execCommand('mceInsertContent', false, "&nbsp;<span id='textDivId"+i+"' class='textDiv'><input class='inner' type='text' id='textId"+i+"'  style='width:300px;padding-left:2px;height:22px;margin-right:3px;border:1px solid #57bb57;' placeholder='Enter text value' /></span>&nbsp;");
          }
          else if(compName=='Insert Date Box')
          {
            tinymce.activeEditor.execCommand('mceInsertContent', false, "&nbsp;<span id='dateDivId"+i+"' class='dateDiv'><input class='datepickerWithoutTime' type='text' id='dateId"+i+"'  style='width:120px;height:22px;padding-left:2px;margin-right:3px;border:1px solid #57bb57;' placeholder='MM/DD/YYYY' /></span>&nbsp;");
          }
          else if(compName=='Insert Check Box')
          {
            tinymce.activeEditor.execCommand('mceInsertContent', false, "&nbsp;<span id='checkDivId"+i+"'><input style='width:120px;height:30px;padding-left:10px;margin-right:10px;class='inner' type='checkbox' id='dateId"+i+"' /></span>&nbsp;");
          }
          else
          {
			 
				tinymce.activeEditor.execCommand('mceInsertContent', false, "&nbsp;<span class='inner' style='background-color:#57bb57;padding:0px 2px;border-radius:2px;font-size:12px;color: #fff;margin-right:2px;'>"+compName+"</span>&nbsp;"); 

          }
          this.updatePage();

      }
	  
	  
	 
	  
	  
	updatePage() {
        this.setState({dumy: true});
    }
    handleSectionOpen(id){
      //alert(id+"===="+this.state.sectionOpenId+"==="+this.state.collapseStatus)
      if(this.state.sectionOpenId==id){
        if(this.state.collapseStatus){
        //   $('#'+id).removeClass('collapse');
       //   alert("no show")
        //   $('#'+id).addClass("collapse in show");
        //   $('#'+id).hide();
          $('#'+id).attr("style", "display: none !important");
        //  $('#'+id).css('display,') == 'none'
          this.setState({collapseStatus:false})
        }else{
        // alert("yes show")
        //  $('#'+id).removeClass("collapse in show");
        //   $('#'+id).addClass('collapse');
        //   $('#'+id).css('display') == 'block'
        $('#'+id).attr("style", "display: block !important");
         
         //$('#' +id).show();
          this.setState({collapseStatus:true})
        }
      }
      else{
       // alert("yes there is not equal")
        if(this.state.sectionOpenId){
          $('#' + this.state.sectionOpenId).hide()
          $('#'+id).show();
          this.setState({sectionOpenId:id,collapseStatus:true})
        }
        else{
          $('#'+id).show();
          this.setState({sectionOpenId:id,collapseStatus:true})
        }
      }
    }
    showSideOption1()
      {
          var $=window.$
          // debugger;
		  if($('#sideTogle2').css('display') == 'none')
		  {
			$('#sideTogle2').show();
		  }
		  else
		  {
			$('#sideTogle2').hide();
		  }		
      }
      saveAgreementRemainder(){
        swal("Assets Watch","Please submit to save the agreement");
      }
	  previewDivShow=(e)=>{
		  // alert('next');
		  // window.tinyMCE.get("editor2"); 
		  // window.$('#previewDiv2').html(window.tinyMCE.get("editor2").getContent());
		  // $('#previewDiv2').show();
	  }
    render(){
		//console.log(this.props)
    {window.tinyMCE.get("editor2") && window.$('#previewDiv2').html(window.tinyMCE.get("editor2").getContent())}
    return (
		
		
		<div className="tab-pane" id="v-edit" >
		
				 <div className="wrapper">
                <div className="container"> 
				<div className="page-title-box" style={{marginBottom: "24px"}}>
                    <div className="btn-group pull-right">
                        <ol className="breadcrumb hide-phone p-0 m-0">
                        <li>
						<Link to={'/agreement'}><span className="btn waves-light waves-effect w-md btn-custom"><i className="fi-reply"></i>&nbsp;&nbsp;Back</span></Link></li>
                        </ol>
                    </div>
                   
                    </div>
				
			<div className="bdr" style={{marginBottom: "30px;",padding: "20px",borderRadius: "10px",backgroundColor: "#f1f1f1"}}>
				<form id="msform">
					<ul id="progressbar">
						<li className="active">Edit</li>
						<li>Preview</li>
						<li>Save</li>
					</ul>
					
					<fieldset>
					
						<div className="form-group">
							<div className="col-md-12">
								<div className="row m-t-20">
									<div className=" col-sm-2">
										<label><b>Agreement Title:</b></label>
									</div>
									<div className="col-sm-10">
										<input type="text" id="agreement_title" onChange={this.onChangeHandlerEdit} name="agreement_title" className="form-control" />
									</div>
								</div>
							</div>
						</div>
						
						<div className="row">
							<div className="col-md-12">
								<div className="fixed-action-btn hide-on-large-only">
									<a className="btn-floating btn-large teal" onClick={this.showSideOption1}> <i className="large fi-menu"></i> </a> 
								</div>
								<div className="custome-temp" id="sideTogle2" style={{display:"none"}}>
									<div className="autohide1-scroll" style={{height: "282px",overflowY: "scroll"}}>
										<div id="accordion"  className="m-b-10">
													{/* =================== Owner Start==========================================*/}
										<div className="card m-b-5">
												<div className="card-header  btn btn-success waves-effect w-md waves-light" role="tab" id="headingOne">
													<h5 className="mb-0 mt-0"> <a className="font-blk" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne"> Owner Section </a> </h5>
												</div>
												
												<div id="collapseOne" className="collapse" role="tabpanel" aria-labelledby="headingOne">
													<div className="card-block">
														<div className="add-name">
															
														<input type="button" value="Primary_Owner_Full_Name" onClick={this.insertComponent.bind(this)} />
																<input type="button" value="Second_Owner_Full_Name" onClick={this.insertComponent.bind(this)} />
																<input type="button" value="Third_Owner_Full_Name" onClick={this.insertComponent.bind(this)} />
																<input type="button" value="Primary_Owner_Email" onClick={this.insertComponent.bind(this)} />
																<input type="button" value="Primary_Owner_Mobile" onClick={this.insertComponent.bind(this)} />
																<input type="button" value="Primary_Owner_Address" onClick={this.insertComponent.bind(this)} />
																<input type="button" value="Primary_Owner_City" onClick={this.insertComponent.bind(this)} />
																<input type="button" value="Primary_Owner_State" onClick={this.insertComponent.bind(this)} />
																
														</div>
													</div>
												</div>
												
										</div>	
						{/* =================== Owner End==========================================*/}	
						
						{/* =================== Agent Start==========================================*/}

										<div className="card m-b-5">
											<div className="card-header  btn btn-success waves-effect w-md waves-light" role="tab" id="headingTwo">
												<h5 className="mb-0 mt-0"> <a className="font-blk" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Agent Section </a> </h5>
											</div>
											<div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
												<div className="card-block">
													<div className="add-name">
															<input type="button" value="Agent Full Name" onClick={this.insertComponent.bind(this)} />
															<input type="button" value="Agent Email" onClick={this.insertComponent.bind(this)} />
															<input type="button" value="Agent Mobile" onClick={this.insertComponent.bind(this)} />
															<input type="button" value="Agent Address" onClick={this.insertComponent.bind(this)} />
															<input type="button" value="Agent City" onClick={this.insertComponent.bind(this)} />
															<input type="button" value="Agent State" onClick={this.insertComponent.bind(this)} />
													</div>
												</div>
											</div>
										</div>



						{/* =================== Agent End==========================================*/}		

						{/* =================== Tenant Start==========================================*/}

									<div className="card m-b-5">
										<div className="card-header  btn btn-success waves-effect w-md waves-light" role="tab" id="headingThree">
											<h5 className="mb-0 mt-0"> <a className="font-blk" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> Tenant Section </a> </h5>
										</div>
										<div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree">
											<div className="card-block">
												<div className="add-name">
												<input type="button" value="Primary_Tenant_Full_Name" onClick={this.insertComponent.bind(this)} />
													<input type="button" value="Second_Tenant_Full_Name" onClick={this.insertComponent.bind(this)} />
													<input type="button" value="Third_Tenant_Full_Name" onClick={this.insertComponent.bind(this)} />
													<input type="button" value="Primary_Tenant_Email" onClick={this.insertComponent.bind(this)} />
													<input type="button" value="Primary_Tenant_Mobile" onClick={this.insertComponent.bind(this)} />
													<input type="button" value="Primary_Tenant_Address" onClick={this.insertComponent.bind(this)} />
													<input type="button" value="Primary_Tenant_City" onClick={this.insertComponent.bind(this)} />
													<input type="button" value="Primary_Tenant_State" onClick={this.insertComponent.bind(this)} />
												</div>
											</div>
										</div>
									</div>

						{/* =================== Tenant End==========================================*/}
														
														
														<div className="card m-b-5">
														  <div className="card-header btn btn-success waves-effect w-md waves-light" role="tab" id="headingFour">
															<h5 className="mb-0 mt-0"> <a className="font-blk" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour"> Property Section </a> </h5>
														  </div>
														  <div id="collapseFour" className="collapse" role="tabpanel" aria-labelledby="headingFour">
															<div className="card-block">
															  <div className="add-name">
																<input type="button" value="Property Address" onClick={this.insertComponent.bind(this)} />
																<input type="button" value="Property Rent Amount" onClick={this.insertComponent.bind(this)} />
																<input type="button" value="Property Selling Amount" onClick={this.insertComponent.bind(this)} />
																<input type="button" value="Property Deposit Amount" onClick={this.insertComponent.bind(this)} />
																<input type="button" value="Tenure Start Date" onClick={this.insertComponent.bind(this)} />
																<input type="button" value="Tenure End Date" onClick={this.insertComponent.bind(this)} />
																<input type="button" value="Property City" onClick={this.insertComponent.bind(this)} />
																<input type="button" value="Property State" onClick={this.insertComponent.bind(this)} />
																
															</div>
															</div>
														  </div>
														</div>
														
														
														
														<div className="card m-b-5">
														  <div className="card-header btn btn-success waves-effect w-md waves-light" role="tab" id="headingFive">
															<h5 className="mb-0 mt-0"> <a className="font-blk" data-toggle="collapse" data-parent="#accordion" href="#collapseFive2" aria-expanded="false" aria-controls="collapseFive2"> Insert Components </a> </h5>
														  </div>
														  <div id="collapseFive2" className="collapse" role="tabpanel" aria-labelledby="headingFive">
															<div className="card-block">
															  <div className="add-name">
																<input type="button" value="Insert Signature Block" onClick={this.insertComponent.bind(this)} />
																  <input type="button" value="Insert Text Box" onClick={this.insertComponent.bind(this)} />
																  <input type="button" value="Insert Date Box" onClick={this.insertComponent.bind(this)} />
															 </div>
															</div>
														  </div>
														</div>
														
														{/*this.state.templateList && <div className="card m-b-5">
                                      <div className="card-header  btn btn-success waves-effect w-md waves-light" role="tab" id="headingSix">
                                        <h5 className="mb-0 mt-0"> <a className="font-blk" data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix"> Agreement Template </a> </h5>
                                      </div>
                                      <div id="collapseSix" className="collapse" role="tabpanel" aria-labelledby="headingSix">
                                        <div class="card-block">
																				{this.state.templateList?this.state.templateList.map((item)=>( 
																					<div className="add-name" style={{textAlign:'left'}}>
																					
																					<a href="#" onClick={this.demoTemplate.bind(this,item)} key={item.templateId}>{item.templateTitle}</a>
																										
																					</div>)):<div className="add-name">No template available to use.!!!</div>}
                                        </div>
                                      </div>
                                    </div>
																				*/} 
														
														
													  </div>
													  
													</div>
												  </div>
												</div>
											  </div>
											  <div className="row m-t-20">
												<div className="col-sm-12">
												
												{/*  <textarea name="editor" id="editor2" className="tinymce"></textarea> */}
												 <Editor 
												 initialValue={this.props.location.state.editAgreement.agreement_doc_content || this.state.createForm.agreement_doc_content}
												 name="agreement_doc_content"
												 id="editor2"
												 onChange={this.onChangeHandlerEdit}
												  init={{ 
												theme: "modern",
												
												  plugins:[
															"advlist autolink lists link image charmap print preview hr anchor pagebreak",
															"searchreplace wordcount visualblocks visualchars code fullscreen",
															"insertdatetime media nonbreaking save table contextmenu directionality",
															"emoticons template paste textcolor colorpicker textpattern imagetools"
														],
												  toolbar1: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons",
												
												image_advtab: true, height : "300" }}
												/>
												</div>
											  </div>
											  <br/>
					<button type="button" name="next" className="btn btn-primary waves-effect waves-light next pull-right" value="" >Next</button>
					</fieldset>

					<fieldset>
						<div className="row">
							 <div className="col-sm-12" >
								<div id="previewDiv2" className="row m-t-20 signature  autohide-scroll" style={{height:"600px",width:"100%",padding: "12px",overflow: "hidden",overflowY: "scroll",display: "block"}}>
								</div>
							</div>
						</div>
						 <br/>
						<button type="button" name="previous" className="previous button-back btn btn-default waves-effect pull-left" value="" >Back</button>
						<button type="button" name="next" className="btn btn-primary waves-effect waves-light next  pull-right" value="" >Next</button>
					</fieldset>



						<fieldset>
							<div className="row m-t-20 signature"> </div>
							<button type="button" name="previous" className="previous button-back btn btn-default waves-effect pull-left" value="" >Back</button>
							<div  style={{fontSize:14,fontWeight:500,textAlign:"center"}}>Click on submit to save the edited agreement.</div> 
							<button type="button" name="submit" className="btn btn-primary waves-effect waves-light submit pull-right" value="" onClick={this.editAgreement}>Submit</button>
						</fieldset>
					</form>

                 </div>
</div>				 
                    </div>
	</div>
  );}
  }