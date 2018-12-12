import React from 'react'
import API_URL from '../../../../app-config'
import {loadFile} from '../../../js/external'
// import './style.css'
import Cookies from 'js-cookie';
import $ from 'jquery'
//import Customwithmodal from "./CustomWithModal";
import swal from 'sweetalert';
//var i
var i =1;

export default class VCreate extends React.Component{
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
    this.onChangeHandler=this.onChangeHandler.bind(this)
    this.createAgreement=this.createAgreement.bind(this)
	this.editAgreement=this.editAgreement.bind(this)
    this.headerImage = React.createRef();
    this.waterMarkImage = React.createRef();
  }

  componentWillReceiveProps(nextProps) {
    // console.log('nextProps ', nextProps)
      if (nextProps.editAgreement) {
		  var tinymce=window.tinyMCE;
		  const agreementForm=this.state.createForm;
		  let agreement = nextProps.editAgreement;
		  this.setState({editAgreementStatus:true,agreement_id:agreement.agreement_id,createForm:{agreement_title:agreement.agreement_title,agreement_doc_content:agreement.agreement_doc_content,header_content:agreement.header_content}})
		  
          $('input[name="agreement_title"]').val(agreement.agreement_title);
          $('input[name="headerContent"]').val(agreement.header_content);
		  tinymce.get("editor").setContent(agreement.agreement_doc_content);
		  
		  
      }
  }
  componentDidMount() {

      $(document).on('click', '#stepy-navigator',function () {
          this.updatePage();
      }.bind(this));
     
	this.getTemplatesName();
  }
	getTemplatesName(){
	fetch(`${API_URL}assetsapi/agreement_template_name/${JSON.parse(this.state.userData).session_id}`, {
        method: 'get'
      })
    .then(res => res.json())
		.then(
		  (result) => {
			//console.log("data 2: "+JSON.stringify(result.profile))
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
  onChangeHandler(e){
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
createAgreement(){
  // debugger;
  var tinymce=window.tinyMCE,$=window.$
  var content = tinymce.get("editor").getContent();
  const agreementForm=this.state.createForm
  agreementForm.agreement_doc_content=content
  agreementForm.session_id=JSON.parse(this.state.userData).session_id
  agreementForm.user_id=JSON.parse(this.state.userData).assets_id
  
  agreementForm.agreement_title=	$('input[name="agreement_title"]').val()
	agreementForm.header_content=	  $('input[name="headerContent"]').val();
	agreementForm.footer_content=	  $('textArea[name="footerContent"]').val();
	// console.log('agreementForm'+JSON.stringify(agreementForm))
  if(agreementForm.agreement_title!==''&&agreementForm.agreement_doc_content!=='')
  {
	 
	  $("#loaderDiv").show();
  fetch(`${API_URL}assetsapi/checkPermissions/${JSON.parse(this.state.userData).assets_id}/create_agreement`, {
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
						$("#actionType").val("No");
						   $("#hiddenURL").val("agreement");
						   $(".confirm-body").html(data.msg);
						   $("#BlockUIConfirm").show();
						   
				}else if(data.success===0){
					$("#loaderDiv").show();
						fetch(`${API_URL}assetsapi/add_agreement/`, {
						  method: "post",
						  body: JSON.stringify(agreementForm)
						})
						  .then(response => {
							return response.json();
						  })
						  .then((data) => {
							//debugger;
							//console.log('dataaaa:  ', data);
							if(data){
							  // var userid = data.user.assets_id
							  // localStorage.setItem('userid',userid)
							  $("#loaderDiv").hide();
								$("#actionType").val("Yes");
										   $("#hiddenURL").val("broker-agreement");
										   $(".confirm-body").html(data.msg);
										   $("#BlockUIConfirm").show();
										   
							}
						  
						  }
						).catch((error) => {
							console.log('error: ', error);
						  });
					}
		  
		  }
		).catch((error) => {
			console.log('error: ', error);
		  });
	  
    
  }
  else{
    alert('Please add title and content to create agreement')
  }
}
editAgreement(){
  // debugger;
  var tinymce=window.tinyMCE,$=window.$
  var content = tinymce.get("editor").getContent();
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
			$("#actionType").val("Yes");
					   $("#hiddenURL").val("broker-agreement");
					   $(".confirm-body").html(data.msg);
					   $("#BlockUIConfirm").show();
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
    demoTemplate(item)
	  {
		  // console.log(templateDescription);
		  var tinymce=window.tinyMCE,$=window.$
		 tinymce.get("editor").setContent(item.templateDescription);
		 $('input[name="agreement_title"]').val(item.templateTitle)
		  $('input[name="headerContent"]').val(item.header_content);
		  $('textArea[name="footerContent"]').val(item.footer_content);
		   // $('input[name="headerImage"]').val(item.header_image);
		  // $('input[name="waterMarkImage"]').val(item.footer_image);
		  
		   
	}
  
	
	insertComponent(e)
      {
        //i = parseInt(i, 10) ? i+1 : 0;
		
		i = i+1;
		
        var compName=e.target.value,tinymce=window.tinyMCE;
        var ed = tinymce.get('editor');     
        
		//alert(i);
		
        var content = tinymce.get("editor").getContent();
          
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
    showSideOption()
      {
          var $=window.$
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
      saveAgreementRemainder(){
        swal("Assets Watch","Please submit to save the agreement");
      }
    render(){
    {window.tinyMCE.get("editor") && window.$('#previewDiv').html(window.tinyMCE.get("editor").getContent())}
    return (
    <div className="tab-pane" id="v-create">
      <div className="bdr">      
      <form id="default-wizard">
        <fieldset title="1" id="default-wizard-step-0" className="stepy-step">
          <legend style={{display: 'none'}}>Create</legend>
          <div className="form-group">
            <div className="col-md-12">
              <div className="row m-t-20">
                <div className=" col-sm-2">
                 <label><b>Title<span className="required"/> :</b></label>
                </div>
                <div className="col-sm-10">
                  <input type="text" onChange={this.onChangeHandler} name="agreement_title" className="form-control" />
                </div>
              </div>
            </div>
          </div>
          <div className="row" >
            <div className="col-md-12">                               
              {/* <!-- sample modal content -->                             */}
              <div className="fixed-action-btn hide-on-large-only">
              <a className="btn-floating btn-large teal" onClick={this.showSideOption}>
                <i className="large fi-menu"></i> </a>               
              </div>
              <div className="custome-temp" id="sideTogle" style={{display: 'none'}}>                              
                <div className="slimScrollDiv" style={{position: 'relative', overflow: 'hidden', width: 'auto', height:' 282px'}}>
                  <div className="autohide1-scroll" style={{height: '282px',"overflow-x": 'none',"overflow-y": 'scroll', width: 'auto'}}>
                    <div id="accordion" className="m-b-10">
                      <div className="card m-b-5">
                        <div onClick={this.handleSectionOpen.bind(this,"collapseOne")} className="card-header  btn btn-success" role="tab" id="headingOne">
                          <h5 className="mb-0 mt-0"> <a className="font-blk" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne"> Header Section </a> </h5>
                        </div>
                        <div id="collapseOne" className="collapse" role="tabpanel" aria-labelledby="headingOne">
                          <div className="card-block">
                            <div className="row">
                              <div className="col-sm-12">
                                <label><b>Header Content</b></label>
                                <input type="text" name="headerContent" onChange={this.onChangeHandler} className="form-control" maxlength="15" />
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-12">
                                <label><b>Header Image</b></label>
                                <input type="file" name="headerImage" onChange={this.onChangeHandler} ref={this.headerImage} className="form-control" />
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-12">
                                <label><b>Water Mark Image</b></label>
                                <input type="file" name="waterMarkImage" onChange={this.onChangeHandler} ref={this.waterMarkImage} className="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card m-b-5">
                        <div onClick={this.handleSectionOpen.bind(this,"collapseTwo")} className="card-header  btn btn-success waves-effect w-md waves-light" role="tab" id="headingTwo">
                          <h5 className="mb-0 mt-0"> <a className="font-blk" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Footer Section </a> </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
                          <div className="card-block">
                            <div className="row">
                              <div className="col-sm-12">
                                <label><b>Footer Content</b></label>
                                <textarea className="form-control" name="footerContent" onChange={this.onChangeHandler} maxlength="30"></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card m-b-5">
                        <div onClick={this.handleSectionOpen.bind(this,"collapseThree")} className="card-header  btn btn-success waves-effect w-md waves-light" role="tab" id="headingThree">
                          <h5 className="mb-0 mt-0">
                            <a className="font-blk" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> Agreement Template </a> </h5>
                        </div>
                        <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree">
                          <div className="card-block">
						  {this.state.templateList?this.state.templateList.map((item)=>( 
                            <div className="add-name">
							<a href="#" onClick={this.demoTemplate.bind(this,item)} key={item.templateId}>{item.templateTitle}</a>
								{/* <a href="#" onClick={this.demoTemplate}>Template 2</a><br />
								<a href="#" onClick={this.demoTemplate}>Template 3</a>  */ }                  
                            </div>)):''}
                          </div>
                        </div>
                      </div>  
                      <div className="card m-b-5">
                        <div  onClick={this.handleSectionOpen.bind(this,"collapseFour")}className="card-header btn btn-success waves-effect w-md waves-light" role="tab" id="headingFour">
                          <h5 className="mb-0 mt-0"> <a className="font-blk" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour"> Insert Dynamic Value </a> </h5>
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
								<input type="button" value="Owner Full Name" onClick={this.insertComponent.bind(this)} />
								<input type="button" value="Owner Email" onClick={this.insertComponent.bind(this)} />
								<input type="button" value="Owner Mobile" onClick={this.insertComponent.bind(this)} />
								<input type="button" value="Owner Address" onClick={this.insertComponent.bind(this)} />
								<input type="button" value="Owner City" onClick={this.insertComponent.bind(this)} />
								<input type="button" value="Owner State" onClick={this.insertComponent.bind(this)} />
								<input type="button" value="Agent Full Name" onClick={this.insertComponent.bind(this)} />
								<input type="button" value="Agent Email" onClick={this.insertComponent.bind(this)} />
								<input type="button" value="Agent Mobile" onClick={this.insertComponent.bind(this)} />
								<input type="button" value="Agent Address" onClick={this.insertComponent.bind(this)} />
								<input type="button" value="Agent City" onClick={this.insertComponent.bind(this)} />
								<input type="button" value="Agent State" onClick={this.insertComponent.bind(this)} />
								<input type="button" value="Tenant Full Name" onClick={this.insertComponent.bind(this)} />
								<input type="button" value="Tenant Email" onClick={this.insertComponent.bind(this)} />
								<input type="button" value="Tenant Mobile" onClick={this.insertComponent.bind(this)} />
								<input type="button" value="Tenant Address" onClick={this.insertComponent.bind(this)} />
								<input type="button" value="Tenant City" onClick={this.insertComponent.bind(this)} />
								<input type="button" value="Tenant State" onClick={this.insertComponent.bind(this)} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div  onClick={this.handleSectionOpen.bind(this,"collapseFive")} className="card-header btn btn-success waves-effect w-md waves-light" role="tab" id="headingFive">
                          <h5 className="mb-0 mt-0"> <a className="font-blk" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive"> Insert Components </a> </h5>
                        </div>
                        <div id="collapseFive" className="collapse" role="tabpanel" aria-labelledby="headingFive">
                          <div className="card-block">
                            <div className="add-name">
                              <input type="button" value="Insert Signature Block" onClick={this.insertComponent.bind(this)} />
                                      <input type="button" value="Insert Text Box" onClick={this.insertComponent.bind(this)} />
                                      <input type="button" value="Insert Date Box" onClick={this.insertComponent.bind(this)} />
                                    
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>      
                  </div>
                  <div className="slimScrollBar" style={{background: 'rgb(158, 165, 171)', width:' 5px', position: 'absolute', top: '0px', opacity: '1', display: 'block', borderRadius: '7px', zIndex: '99', right: '1px'}}></div>
                  <div className="slimScrollRail" style={{width: '5px', height: '100%', position: 'absolute', top: '0px', display: 'none', borderRadius: '7px', background: 'rgb(51, 51, 51)', opacity: '0.2', zIndex: '90', right: '1px'}}>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row" >
          <div className="col-sm-12">
          <textarea name="agreement_doc_content" onChange={this.onChangeHandler} id="editor" style={{position:'absolute',left:'0'}} className="tinymce"></textarea>            
          </div>
          </div>
          
        </fieldset>
        <fieldset title="2"  id="default-wizard-step-1" className="stepy-step" style={{display: 'none'}}>
          <legend style={{display: 'none'}}>Preview</legend>
          <div className="row m-t-20">
            {/* <div className="row">*/}
              <div className="col-sm-12"> 
                <div className="slimScrollDiv" style={{position: 'relative', "overflow-x": 'hidden',"overflow-y": 'scroll', height: '780px'}}>
                <div id="previewDiv" className="row m-t-20 signature  autohide-scroll" style={{height: '300px', width: '100%', padding: '12px'}}>
                </div>
                <div className="slimScrollBar" style={{background: 'rgb(158, 165, 171)', width:' 5px', position:' absolute', top: '0px', opacity: '0.4', display: 'block', borderRadius: '7px', zIndex: '99', right: '1px'}}>
                </div>
                <div className="slimScrollRail" style={{width:' 5px', height: '100%', position: 'absolute', top:' 0px', display: 'none', borderRadius: '7px', background: 'rgb(51, 51, 51)', opacity: '0.2', zIndex: '90', right:' 1px'}}>
                </div></div>
              {/* </div> */}
            </div>
          </div>
        
        </fieldset>
        <fieldset   title="3" id="default-wizard-step-2" className="stepy-step" style={{display:' none'}}>
        <div  style={{fontSize:14,fontWeight:500,textAlign:"center"}}>Please submit to save the agreement</div> 
          <legend style={{display: 'none'}}>Save</legend>
          <div className="row m-t-20 signature"> </div>
        {/* <div className="stepy-navigator"> */}
        
       <button style={{float:"right",marginTop:10}} id="stepy-navigator" type="button" onClick={this.state.editAgreementStatus?this.editAgreement:this.createAgreement} className="btn btn-primary stepy-finish">Submit</button></fieldset>       
      </form>
    </div>
     <div id = "vcreatepermission" style={{position: 'absolute', top: 0, width: '100%', height: '100%', backgroundColor: '#333', opacity: 0.4, zIndex: 1000,display:'none'}}></div>
  </div>
  );}
  }