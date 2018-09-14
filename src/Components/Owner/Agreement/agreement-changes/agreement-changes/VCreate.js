import React from 'react'
import API_URL from '../../../app-config'
import {loadFile} from '../../js/external'
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
    console.log('props ', props);
    this.state={
      userData : Cookies.get('profile_data'),
      sectionOpenId:"",
      collapseStatus:false,
      createForm:{
        user_id:"3",
        agreement_title:"",
        agreement_doc_content:"",
        session_id:"",
      }      
    }
    this.onChangeHandler=this.onChangeHandler.bind(this)
    this.createAgreement=this.createAgreement.bind(this)
    this.headerImage = React.createRef();
    this.waterMarkImage = React.createRef();
  }
  componentWillMount(){
    window.$.getScript("assets 21/plugins/jquery.stepy/jquery.stepy.min.js", function () {
        console.log("assets 21/plugins/jquery.stepy/jquery.stepy.min.js");
    });
    window.$('<link/>',{rel: 'stylesheet', href: 'assets/css/bootstrap.min.css'})
    window.$('<link/>',{rel: 'stylesheet', href: 'assets/css/style.css'})
    // loadFile("assets 21/plugins/jquery.stepy/jquery.stepy.min.js","js")
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps ', nextProps)
      if (nextProps.editAgreement) {
		  var tinymce=window.tinyMCE;
      let agreement = nextProps.editAgreement;
          $('input[name="agreement_title"]').val(agreement.agreement_title);
          $('input[name="headerContent"]').val(agreement.header_content);
		  tinymce.get("editor").setContent(agreement.agreement_doc_content);
      $.getScript('assets/js/jquery.min.js', ()=> {
        console.log('assets/pages/jquery.wizard-init.js');
     });
     $.getScript('"assets/js/tether.min.js', ()=> {
      console.log('"assets/js/tether.min.js');
      });
     $.getScript('assets/js/bootstrap.min.js', ()=> {
      console.log('assets/js/bootstrap.min.js');
      });
      $.getScript('assets/js/waves.js', function () {
        console.log('assets/js/waves.js');
     });
        $.getScript('assets/plugins/ckeditor/ckeditor.js', ()=> {
          console.log('assets/plugins/ckeditor/ckeditor.js');
          });
          $.getScript('assets/pages/jquery.scrollbar.js', ()=> {
            console.log('assets/pages/jquery.scrollbar.js');
            });
           
      $.getScript('assets/plugins/jquery.stepy/jquery.stepy.min.js', ()=> {
        console.log('assets/plugins/jquery.stepy/jquery.stepy.min.js');
      });
      $.getScript('assets/pages/jquery.wizard-init.js', ()=> {
        console.log('assets/pages/jquery.wizard-init.js');
      });
      $.getScript("assets/js/jquery.slimscroll.js", function () {
        console.log('assets/js/jquery.slimscroll.js');
     });
      $.getScript('js/jquery.scrollTo.min.jss', ()=> {
        console.log('assets/js/jquery.scrollTo.min.js');
        });
      $.getScript('assets/js/jquery.core.js', ()=> {
        console.log('assets/js/jquery.core.js');
        });
        $.getScript('assets/js/jquery.app.js', ()=> {
          console.log('assets/js/jquery.app.js');
          });
      }
  }
  componentDidMount() {
    $.getScript('assets 21/tiny/plugin/tinymce/tinymce.min.js', ()=> {
      console.log('assets 21/tiny/plugin/tinymce/tinymce.min.js');
      });
      $.getScript('assets 21/tiny/plugin/tinymce/init-tinymce.js', ()=> {
        console.log('assets 21/tiny/plugin/tinymce/tinymce.min.js');
        });
    $.getScript('assets 21/js/jquery.slimscroll.js', function () {
      console.log('assets 21/js/jquery.slimscroll.js');
   });
    $.getScript('assets/js/jquery.scrollTo.min.jss', ()=> {
      console.log('assets/js/jquery.scrollTo.min.js');
      });
      $(document).on('click', '.stepy-navigator',function () {
          this.updatePage();
      }.bind(this));
    //   $("#default-wizard-step-1").on('click', '.button-next',function () {
    //     this.saveAgreementRemainder()
    // }.bind(this));
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
  if(agreementForm.agreement_title!==''&&agreementForm.agreement_doc_content!==''&&
    agreementForm.header_content!==''&&agreementForm.footer_content!==''&&
    agreementForm.header_image!==''&&agreementForm.watermark_image!=='')
  {
    fetch(`${API_URL}assetsapi/add_agreement/`, {
      method: "post",
      body: JSON.stringify(agreementForm)
    })
      .then(response => {
        return response.json();
      })
      .then((data) => {
        debugger;
        console.log('dataaaa:  ', data);
        if(data){
          // var userid = data.user.assets_id
          // localStorage.setItem('userid',userid)
		  swal("Assets Watch", data.msg);
          window.location.reload()
        }
      //   if(data.msg.indexOf("Registered Successfully")!=-1)
      //   {
      //     let userType = 'owner';
      //     if (this.state.RegType==='2') {
      //       userType = 'agent'
      //     } else if (this.state.RegType==='3') {
      //       userType = 'tenant'
      //     }
      //   }
      // else alert(data.msg)
      }
    ).catch((error) => {
        console.log('error: ', error);
      });
  }
  else{
    alert('Please add title and content to create agreement')
  }
}
    demoTemplate()
	  {
			debugger;
			var tinymce=window.tinyMCE,$=window.$
		  var agreeTemplate = $("#agreeTemplate").html();		                                                
		tinymce.get("editor").setContent(agreeTemplate);
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
            tinymce.activeEditor.execCommand('mceInsertContent', false, "<p><div contenteditable='false' class='sigDiv' id='sigId"+i+"' style='width:300px;height:85px;padding-top:5px;padding-left:10px;margin-right:10px;border:1px solid #eee;' data-toggle='modal' data-target='#custom-width-modal' onclick='addplaceId(this.id)'>"+compName+"</div></p>");
                // tinymce.get("editor").setContent( content + " " + "<p><div contenteditable='false' class='sigDiv' id='sigId"+i+"' style='width:300px;height:100px;border:1px solid #eee; border-top:0' data-toggle='modal' data-target='#custom-width-modal' onclick='addplaceId(this.id)'>"+compName+"</div></p>");
          }
          else if(compName=='Insert Text Box')
            {
            tinymce.activeEditor.execCommand('mceInsertContent', false, "<p id='textDivId"+i+"'><input class='inner' type='text' id='textId"+i+"'  style='width:300px;padding-left:10px;height:30px;margin-right:10px;border:1px solid #eee;' placeholder='Enter text value' /></p>");
          }
          else if(compName=='Insert Date Box')
            {
            tinymce.activeEditor.execCommand('mceInsertContent', false, "<p id='dateDivId"+i+"'><input class='datepickerWithoutTime' type='text' id='dateId"+i+"'  style='width:120px;height:30px;padding-left:10px;margin-right:10px;border:1px solid #eee;' placeholder='dd/mm/yyyy' /></p>");
          }
          else if(compName=='Insert Check Box')
            {
            tinymce.activeEditor.execCommand('mceInsertContent', false, "<p id='checkDivId"+i+"'><input style='width:120px;height:30px;padding-left:10px;margin-right:10px;class='inner' type='checkbox' id='dateId"+i+"' /></p>");
          }
          else
          {
            tinymce.activeEditor.execCommand('mceInsertContent', false, "<div class='row col-12'><p><span class='inner' style='display:flex;width:200px;background:#57bb57;padding:2px 10px;border-radius:2px;font-size: 14px;color: #fff;margin-right: 10px;float:left'>"+compName+"</span></p></div>"); 
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
          $('#'+id).attr("style", "display: none !important");
          this.setState({collapseStatus:false})
        }else{
        $('#'+id).attr("style", "display: block !important");
          this.setState({collapseStatus:true})
        }
      }
      else{
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
        <fieldset title="1" id="default-wizard-step-0" class="stepy-step">
          <legend style={{display: 'none'}}>Create</legend>
          <div class="form-group">
            <div class="col-md-12">
              <div class="row m-t-20">
                <div class=" col-sm-2">
                 <label><b>Agreement Title:</b></label>
                </div>
                <div class="col-sm-10">
                  <input type="text" onChange={this.onChangeHandler} name="agreement_title" class="form-control" />
                </div>
              </div>
            </div>
          </div>
          <div class="row" >
            <div class="col-md-12">                               
              {/* <!-- sample modal content -->                             */}
              <div class="fixed-action-btn hide-on-large-only">
              <a class="btn-floating btn-large teal" onClick={this.showSideOption}>
                <i class="large fi-menu"></i> </a>               
              </div>
              <div class="custome-temp" id="sideTogle" style={{display: 'none'}}>                              
                <div class="slimScrollDiv" style={{position: 'relative', overflow: 'hidden', width: 'auto', height:' 282px'}}>
                  <div class="autohide1-scroll" style={{height: '282px', overflow: 'hidden', width: 'auto'}}>
                    <div id="accordion" class="m-b-10">
                      <div class="card m-b-5">
                        <div onClick={this.handleSectionOpen.bind(this,"collapseOne")} class="card-header  btn btn-success" role="tab" id="headingOne">
                          <h5 class="mb-0 mt-0"> <a class="font-blk" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne"> Header Section </a> </h5>
                        </div>
                        <div id="collapseOne" class="collapse" role="tabpanel" aria-labelledby="headingOne">
                          <div class="card-block">
                            <div class="row">
                              <div class="col-sm-12">
                                <label><b>Header Content</b></label>
                                <input type="text" name="headerContent" onChange={this.onChangeHandler} class="form-control" maxlength="15" />
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-sm-12">
                                <label><b>Header Image</b></label>
                                <input type="file" name="headerImage" onChange={this.onChangeHandler} ref={this.headerImage} class="form-control" />
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-sm-12">
                                <label><b>Water Mark Image</b></label>
                                <input type="file" name="waterMarkImage" onChange={this.onChangeHandler} ref={this.waterMarkImage} class="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card m-b-5">
                        <div onClick={this.handleSectionOpen.bind(this,"collapseTwo")} class="card-header  btn btn-success waves-effect w-md waves-light" role="tab" id="headingTwo">
                          <h5 class="mb-0 mt-0"> <a class="font-blk" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Footer Section </a> </h5>
                        </div>
                        <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo">
                          <div class="card-block">
                            <div class="row">
                              <div class="col-sm-12">
                                <label><b>Footer Content</b></label>
                                <textarea class="form-control" name="footerContent" onChange={this.onChangeHandler} maxlength="30"></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card m-b-5">
                        <div onClick={this.handleSectionOpen.bind(this,"collapseThree")} class="card-header  btn btn-success waves-effect w-md waves-light" role="tab" id="headingThree">
                          <h5 class="mb-0 mt-0">
                            <a class="font-blk" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> Agreement Template </a> </h5>
                        </div>
                        <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree">
                          <div class="card-block">
                            <div class="add-name">
                              <a href="#" onClick={this.demoTemplate}>Template 1</a><br />
                              <a href="#" onClick={this.demoTemplate}>Template 2</a><br />
                              <a href="#" onClick={this.demoTemplate}>Template 3</a>                    
                            </div>
                          </div>
                        </div>
                      </div>  
                      <div class="card m-b-5">
                        <div  onClick={this.handleSectionOpen.bind(this,"collapseFour")}class="card-header btn btn-success waves-effect w-md waves-light" role="tab" id="headingFour">
                          <h5 class="mb-0 mt-0"> <a class="font-blk" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour"> Insert Dynamic Value </a> </h5>
                        </div>
                        <div id="collapseFour" class="collapse" role="tabpanel" aria-labelledby="headingFour">
                          <div class="card-block">
                            <div class="add-name">
                                  <input type="button" value="Rent Amount" onClick={this.insertComponent.bind(this)} />
                                <input type="button" value="Selling Amount" onClick={this.insertComponent.bind(this)} />
                                <input type="button" value="Deposit Amount" onClick={this.insertComponent.bind(this)} />
                              <input type="button" value="Owner Full Name" onClick={this.insertComponent.bind(this)} />
                              <input type="button" value="Agent Full Name" onClick={this.insertComponent.bind(this)} />
                              <input type="button" value="Tenant Full Name" onClick={this.insertComponent.bind(this)} />
                                <input type="button" value="Agent Address" onClick={this.insertComponent.bind(this)} />
                                <input type="button" value="Owner Address" onClick={this.insertComponent.bind(this)} />
                                <input type="button" value="Tenant Address" onClick={this.insertComponent.bind(this)} />
                              <input type="button" value="Property Address" onClick={this.insertComponent.bind(this)} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div  onClick={this.handleSectionOpen.bind(this,"collapseFive")} class="card-header btn btn-success waves-effect w-md waves-light" role="tab" id="headingFive">
                          <h5 class="mb-0 mt-0"> <a class="font-blk" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive"> Insert Components </a> </h5>
                        </div>
                        <div id="collapseFive" class="collapse" role="tabpanel" aria-labelledby="headingFive">
                          <div class="card-block">
                            <div class="add-name">
                              <input type="button" value="Insert Signature Block" onClick={this.insertComponent.bind(this)} />
                                      <input type="button" value="Insert Text Box" onClick={this.insertComponent.bind(this)} />
                                      <input type="button" value="Insert Date Box" onClick={this.insertComponent.bind(this)} />
                                    <input type="button" value="Insert Check Box" onClick={this.insertComponent.bind(this)} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>      
                  </div>
                  <div class="slimScrollBar" style={{background: 'rgb(158, 165, 171)', width:' 5px', position: 'absolute', top: '0px', opacity: '1', display: 'block', borderRadius: '7px', zIndex: '99', right: '1px'}}></div>
                  <div class="slimScrollRail" style={{width: '5px', height: '100%', position: 'absolute', top: '0px', display: 'none', borderRadius: '7px', background: 'rgb(51, 51, 51)', opacity: '0.2', zIndex: '90', right: '1px'}}>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row " style={{float:'left',marginBottom:15}}>
          <div class="col-sm-12">
          <textarea name="agreement_doc_content" onChange={this.onChangeHandler} id="editor" style={{position:'absolute',left:'0'}} class="tinymce"></textarea>            
          </div>
          </div>
          
        </fieldset>
        <fieldset title="2"  id="default-wizard-step-1" class="stepy-step" style={{display: 'none'}}>
          <legend style={{display: 'none'}}>Preview</legend>
          <div class="row m-t-20">
            <div class="row">
              <div class="col-sm-12">
                <div class="slimScrollDiv" style={{position: 'relative', overflow: 'hidden', width: '330px', height: '780px'}}>
                <div id="previewDiv" class="row m-t-20 signature  autohide-scroll" style={{height: '300px', width: '100%', padding: '12px',marginLeft:15,marginRight:15}}>
                </div><br/>
                <div class="slimScrollBar" style={{background: 'rgb(158, 165, 171)', width:' 5px', position:' absolute', top: '0px', opacity: '0.4', display: 'block', borderRadius: '7px', zIndex: '99', right: '1px'}}>
                </div>
                <div class="slimScrollRail" style={{width:' 5px', height: '100%', position: 'absolute', top:' 0px', display: 'none', borderRadius: '7px', background: 'rgb(51, 51, 51)', opacity: '0.2', zIndex: '90', right:' 1px'}}>
                </div></div>
              </div>
            </div>
          </div>
        
        </fieldset>
        <fieldset   title="3" id="default-wizard-step-2" class="stepy-step" style={{display:' none'}}>
        <div  style={{fontSize:14,fontWeight:500,textAlign:"center"}}>Please submit to save the agreement</div> 
          <legend style={{display: 'none'}}>Save</legend>
          <div class="row m-t-20 signature"> </div>
        <p class="stepy-navigator">
        
        <button type="button" onClick={this.createAgreement} class="btn btn-primary stepy-finish">Submit</button></p></fieldset>        
      </form>
    </div>
     
  </div>
  );}
  }