import React from 'react'
import API_URL from '../../../app-config';
import Cookies from 'js-cookie';
import $ from 'jquery';
import Customwithmodal from "../../Owner/Agreement/CustomWithModal";

const VRequested=(props)=>{
    return(
        <div className="tab-pane active" id="v-requested">
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

              {(props.ragreement!=undefined)?props.ragreement.map(element=>(
                  <tr>
                    <td>{element.agreement_title}</td>
                    <td>{element.initiated_date}</td>
                    <td><a title="Edit" href="#preview" onClick={() => props.previewAgreement(element)} data-toggle="tab" className="table-action-btn view-rqu"><i className="mdi mdi-border-color"></i></a><a title="Delete" href="#" className="table-action-btn view-rqu"><i className="mdi mdi-close"></i></a><a title="Send" href="#" className="table-action-btn view-rqu" data-toggle="modal" data-target="#send-msg"><i className="mdi mdi-redo-variant"></i></a></td>
                  </tr>
              )):<tr></tr>}

              </tbody>
            </table>
          </div>
        </div>
    );
}

const VExecute=(props)=>{
    return(
        <div className="tab-pane" id="v-execute">
          <div className=" table-responsive">
            <table className="table bdr">
              <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Action1</th>
              </tr>
              </thead>
              <tbody>
              {props.ragreement && props.ragreement.length>0?props.agreement.map(element=>(
                  <tr>
                    <td>{element.agreement_title}</td>
                    <td>{element.created_date}</td>
                    <td><a title="Edit" href="#" className="table-action-btn view-rqu"><i className="mdi mdi-border-color"></i></a><a title="Delete" href="#" className="table-action-btn view-rqu"><i className="mdi mdi-close"></i></a><a title="Send" href="#" className="table-action-btn view-rqu" data-toggle="modal" data-target="#send-msg"><i className="mdi mdi-redo-variant"></i></a></td>
                  </tr>
              )):<div>No data </div>}
              </tbody>
            </table>
          </div>
        </div>
    );
};
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
export default class TenantAgreement extends React.Component {
	constructor(props) {
    super(props);
    this.state={
        user : JSON.parse(Cookies.get('profile_data')),
    };
    this.getRequestedAgreement=this.getRequestedAgreement.bind(this);
    this.getExecutedAgreement=this.getExecutedAgreement.bind(this);
    this.verticalNavbar=this.verticalNavbar.bind(this);
    this.previewAgreement=this.previewAgreement.bind(this);
    this.submitAgreement=this.submitAgreement.bind(this);
  }
  componentDidMount() {
    $.getScript('assets 21/js/jquery.slimscroll.js', function () {
       console.log('assets 21/js/jquery.slimscroll.js');
    });
    this.getRequestedAgreement();
    this.getExecutedAgreement();
    // $('a[data-toggle="collapse"]').click(function (e) {
    //     console.log($(e.target).attr('aria-controls'))
    //     var element = $('#'+$(e.target).attr('aria-controls'));
    //     var classes = element.attr('class');
    //     if (classes.indexOf('in') > -1) {
    //         setTimeout(function () {
    //         $(element).removeClass('in');
    //       }, 500)
    //         // $('#'+element).addClass(classes.split(" ")[0]);
    //     }
    //     console.log(classes, typeof classes, classes.split(" ")[0])
    // })
  }
  getRequestedAgreement(){
        let { user } = this.state;
        fetch(`${API_URL}assetsapi/requested_agreement/${user.assets_id}/${user.session_id}`, {
            method: 'get'
        })
            .then(res => res.json())
            .then(
                (data) => {
                    // debugger;
                    //console.log("data 2: "+JSON.stringify(result.profile))
                    if (data.success) {
                        this.setState({requestedAgreement:data.requested_agreements, agrLoaded:true})
                        console.log(this.state.requestedAgreement);

                    }
                    //console.log("set user data"+JSON.stringify(this.state.profileData))
                },
                (error) => {
                    console.log('error')
                }
            )
    }
	getExecutedAgreement() {
        let { user } = this.state;
        fetch(`${API_URL}assetsapi/execute_agreement/${user.assets_id}/${user.session_id}`, {
            method: 'get'
        })
            .then(res => res.json())
            .then(
                (data) => {
                    // debugger;
                    //console.log("data 2: "+JSON.stringify(result.profile))
                    if (data.success) {
                        this.setState({executedAgreement:data.agreement_detail,agrLoaded:true})
                        console.log(this.state.executedAgreement);
                    }
                    //console.log("set user data"+JSON.stringify(this.state.profileData))
                },
                (error) => {
                    console.log('error')
                }
            )
    }
	submitAgreement() {
		
		
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
                    if (data.success) {
						alert(JSON.stringify(data.data));
                        console.log(data);
                    }
                    //console.log("set user data"+JSON.stringify(this.state.profileData))
                },
                (error) => {
                    console.log('error')
                }
            )
    }
	verticalNavbar(e)
    {
        var activeclassName="nav-link agreement-fa active";
        var normalclassName="nav-link agreement-fa";
        if(e.target.id==="saved")
        {
            document.getElementById(e.target.id).setAttribute('class',activeclassName)
            document.getElementById("create").setAttribute('class',normalclassName)
            document.getElementById("request").setAttribute('class',normalclassName)
            document.getElementById("execute").setAttribute('class',normalclassName)
        }
        else if(e.target.id==="create")
        {
            document.getElementById(e.target.id).setAttribute('class',activeclassName)
            document.getElementById("saved").setAttribute('class',normalclassName)
            document.getElementById("request").setAttribute('class',normalclassName)
            document.getElementById("execute").setAttribute('class',normalclassName)
        }
        else if(e.target.id==="request")
        {
            document.getElementById(e.target.id).setAttribute('class',activeclassName)
            // document.getElementById("saved").setAttribute('class',normalclassName)
            // document.getElementById("create").setAttribute('class',normalclassName)
            document.getElementById("execute").setAttribute('class',normalclassName)
        }
        else if(e.target.id==="execute")
        {
            document.getElementById(e.target.id).setAttribute('class',activeclassName)
            // document.getElementById("saved").setAttribute('class',normalclassName)
            // document.getElementById("create").setAttribute('class',normalclassName)
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
          target.append("<p><div contenteditable='false' class='sigDiv' id='sigId"+i+"' style='width:300px;height:100px;border:1px solid #eee; border-top:0' data-toggle='modal' data-target='#custom-width-modal' onclick='addplaceId(this.id)'>"+compName+"</div></p>")
        }
        else if(compName=='Insert Text Box')
        {
           target.append("<p><input class='inner' type='text' id='textId"+i+"'  style='width:300px;height:20px;border:1px solid #eee;' placeholder='Enter text value'/></p>");
        }
        else if(compName=='Insert Date Box')
        {
            target.append("<p><input class='datepickerWithoutTime' type='text' id='dateId"+i+"'  style='width:120px;height:20px;border:1px solid #eee;' placeholder='dd/mm/yyyy' /></p>");
        }
        else if(compName=='Insert Check Box')
        {
            target.append("<p><input class='inner' type='checkbox' id='dateId"+i+"' /></p>");
        }
        else
        {
            target.append("<p><span class='inner' style='background:#57bb57;padding:2px 10px;border-radius:2px;font-size: 14px;color: #fff;float: left;margin-right: 5px;'>"+compName+"</span></p>");

            // tinymce.get("editor").setContent(content+" "+"<span class='inner' style='background:#57bb57;padding:2px 10px;border-radius:2px;font-size: 14px;color: #fff;float: left;margin-right: 5px;'>"+compName+"</span>");
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

    render() {
        return (
            <div>
        <div className="wrapper" style={{marginTop:'3%',marginBottom:'5%'}}>
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
                      <div className="col-md-2">
                        <ul className="nav tabs-vertical">
                          {/*   <li class="nav-item"> <a href="#v-saved" class="nav-link agreement-fa active" data-toggle="tab" aria-expanded="false"><i class="icon-folder-alt"></i>&nbsp;&nbsp;Saved</a> </li>
                  <li class="nav-item"> <a href="#v-create" class="nav-link agreement-fa" data-toggle="tab" aria-expanded="true"><i class="icon-plus"></i>&nbsp;&nbsp;Create</a> </li>*/}
                          <li className="nav-item"> <a href="#v-requested" id="request" onClick={this.verticalNavbar} className="nav-link agreement-fa active" data-toggle="tab" aria-expanded="true"><i className="icon-note" />&nbsp;&nbsp;Requested</a> </li>
                          <li className="nav-item"> <a href="#v-execute" id="execute" onClick={this.verticalNavbar} className="nav-link agreement-fa" data-toggle="tab" aria-expanded="true"><i className="icon-compass" />&nbsp;&nbsp;Execute</a> </li>
                        </ul>
                      </div>
                      <div className="col-md-10">
                        <div className="tab-content">
                          {<VRequested previewAgreement={this.previewAgreement} ragreement={this.state.requestedAgreement || []}/>}
                          <VExecute ragreement={this.state.executedAgreement}/>
                          <div className="tab-pane" id="preview">
                            <div id="contentPreview"></div>
                            <div id="commentBox"></div>
                            <div id="signature"></div>
                            <button type="button" onClick={this.submitAgreement} class="btn btn-primary stepy-finish">Accept</button>
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
              <div class="row">
                <div class="col-md-12">
                    {/* <!-- sample modal content -->                             */}
						{/* <div class="fixed-action-btn hide-on-large-only">
                    <a class="btn-floating btn-large teal" onClick={this.showSideOption}>
                      <i class="large fi-menu"></i> </a>
						</div> */}
                  <div class="custome-temp" id="sideTogle" style={{display: 'none'}}>
                    <div class="slimScrollDiv"
                         style={{position: 'relative', overflow: 'hidden', width: 'auto', height: ' 282px'}}>
                      <div class="autohide1-scroll" style={{height: '282px', overflow: 'hidden', width: 'auto'}}>
                        <div id="accordion" class="m-b-10">

                          <div class="card">
                            <div class="card-header btn btn-success waves-effect w-md waves-light" role="tab"
                                 id="headingFive">
                              <h5 class="mb-0 mt-0"><a class="font-blk" data-toggle="collapse" data-parent="#accordion"
                                                       href="#collapseFive" aria-expanded="false"
                                                       aria-controls="collapseFive"> Insert Components </a></h5>
                            </div>
                            <div id="collapseFive" class="collapse" role="tabpanel" aria-labelledby="headingFive">
                              <div class="card-block">
                                <div class="add-name">
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
                      <div class="slimScrollBar" style={{
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
                      <div class="slimScrollRail" style={{
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
        <Customwithmodal/>
      </div>
        );
    }
}