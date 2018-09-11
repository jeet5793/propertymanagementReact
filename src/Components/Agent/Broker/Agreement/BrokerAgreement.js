import React from 'react';
import './BrokerAgreement.css';
import API_URL from '../../../../app-config';
import Cookies from 'js-cookie';
import $ from 'jquery';
import Customwithmodal from '../../../Owner/Agreement/CustomWithModal';
import VCreate from '../../../Owner/Agreement/VCreate'
import {loadFile} from '../../../js/external'
import SendMsg from './SendMSG'
import swal from 'sweetalert';
import '../../../Owner/Agreement/style.css'
import './icons.css'
// import SendMsgExecute from './SendMsgExecute';
const Saved=(props)=>{
  return(                                            
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
          {(props.agreement!=undefined)? props.agreement.map(element=>(
            <tr>
              <td>{element.agreement_title}</td>
              <td>{element.created_date}</td>
              <td><a title="Edit" href="#" onClick={() => props.editAgreement(element)} className="table-action-btn view-rqu"><i className="mdi mdi-border-color"></i></a><a title="Delete" href="#" className="table-action-btn view-rqu"><i className="mdi mdi-close"></i></a><a title="Send" href="#" className="table-action-btn view-rqu" data-toggle="modal" data-target="#send-msg"><i className="mdi mdi-redo-variant" onClick={() => props.selectedAgreement(element)}></i></a></td>
            </tr>
          )):<div>No data </div>}         
        </tbody>
      </table>
    </div>
  </div>);
}
const VRequested=(props)=>{
    return(
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

              {(props.ragreement!=undefined)?props.ragreement.map(element=>(
                    <tr>
              <td>{element.agreement_title}</td>
              <td>{element.initiated_date}</td>
              <td><a title="Edit" href="#preview" onClick={() => props.previewAgreement(element)} data-toggle="tab" className="table-action-btn view-rqu"><i className="mdi mdi-eye"></i></a><a title="Delete" href="#" className="table-action-btn view-rqu"><i className="mdi mdi-close"></i></a><a title="Send" href="#" className="table-action-btn view-rqu" data-toggle="modal" data-target="#send-msg"><i className="mdi mdi-redo-variant"></i></a></td>
            </tr>
          )):<div>No data </div>}

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
				<th>Status</th>
                <th>Action</th>
              </tr>
              </thead>
              <tbody>
              {props.ragreement.length>0?props.ragreement.map(element=>(
            <tr>
              <td>{element.agreement_title}</td>
              <td>{element.initiated_date}</td>
			  <td>{element.status}</td>
              <td><a title="Edit" href="#executePreview" data-toggle="tab" onClick={() => props.selectedExecutedAgreement(element)} className="table-action-btn view-rqu"><i className="mdi mdi-eye"></i></a><a title="Send" href="#" className="table-action-btn view-rqu"><i className="mdi mdi-download" onClick={() => props.onClickDownload(element.deal_id)}></i></a><a title="Send" href="#" className="table-action-btn view-rqu" data-toggle="modal" onClick={() => props.selectedExecutedAgreement(element)} data-target="#send-msg"><i className="mdi mdi-redo-variant"></i></a></td>
            </tr>
          )):<div>No data </div>}
              </tbody>
            </table>
          </div>
        </div>
    );
}
const AgreementTemplate=(props)=>{
  return(
    <div id="agreeTemplate" style={{display:'none'}}>
    <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style={{fontsize:'24px'}}>&nbsp;&nbsp;<u><strong>RENTAL AGREEMENT </strong></u></span></p>
    <p contenteditable="false">The Tenant(s) known as ____________________________________, hereby agree to rent the dwelling located at _________ __________________________________________________________________________. The premises are to be occupied by the above named tenants only. Tenant may not sublet premises.</p>
    <p><strong>TERM </strong>The term shall commence on ___________________________, at $____________ per month payable on the _________ of each month in full.</p>
    <p><strong>LATE FEES</strong> In the event rent is not paid by the _______(_5th) day after due date, Tenant agrees to pay a late charge of $_________</p>
    <p><strong>UTILITIES </strong>Tenant shall be responsible for the payment of the following utilities: water, electric, gas, heating fuel, Telephone. <strong>APPLIANCES</strong> Appliances provided in this rental are: stove, refrigerator, dishwasher, washing machine, dryer, ___air conditioner(s), ____________________________. Repairs will be born by said Tenants if damage is due to negligence of Tenants.</p>
    <p><strong>SECURITY </strong>Amount of security deposit is $____________. Security shall be held by Landlord until the time said Tenants have vacated the premises and Landlord has inspected it for damages. Tenant shall not have the right to apply Security Deposit in payment of any rent. Security deposits must be raised proportionately with rent increases.</p>
    <p><strong>INSURANCE </strong>Tenant is responsible for liability/fire insurance coverage on premises. Tenant agrees to obtain a &quot;Renter&#39;s Insurance&quot; policy and to provide Owner or agent with a copy of policy within seven (7) days of lease execution.</p>
    <p><strong>NOTICES </strong>Should tenant decide to vacate the premises, a ________ day written notice to the landlord is required. Should landlord decide to have tenants vacated, a ________ day written notice is required. Tenant agrees to allow premises to be shown at any and all reasonable times for re-rental.</p>
    <p><strong>REAL ESTATE COMMISSION</strong> (If applicable) In the event a commission was earned by a real estate broker, Tenant shall not take possession of the premises unless all fees due broker are paid in full as agreed. Commission is payable when this lease is signed by the Tenant(s). It is solely for locating the rental for the Tenant and is not refundable under any circumstances regardless of any disputes or conditions between the Landlord and Tenant before or after occupancy is taken.</p>
    <p><strong>ACKNOWLEDGMENT </strong>Tenants hereby acknowledge that they have read, understand and agree to all parts of this document, and have received a copy.</p>
    <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<strong> AMOUNT RECEIVED&nbsp; &nbsp; </strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <strong>BALANCE DUE </strong></p>
    <p><strong>RENT </strong>:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ______________________&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; _________________</p>
    <p><strong>SECURITY</strong>:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ______________________&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; __________________</p>
    <p><strong>BROKER&#39;S FEE</strong>:&nbsp; ______________________&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;___________________</p>
    <p>________________________________________________________________________________________________________ ________________________________________________________________________________________________________ ________________________________________________________________________________________________________</p>
    <p>&nbsp;</p>
    <p><strong>THE UNDERSIGNED TENANT(S) ACKNOWLEDGES RECEIPT OF A COPY HEREOF. </strong></p>
    <p><strong>DATE: </strong>________________________________________________________</p>
    <p><strong>OWNER/AGENT__________________&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; TENANT_______________________________ ADDRESS________________________&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;TENANT ______________________________ PHONE__________________________&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;PHONE________________________________&nbsp;</strong>&nbsp;</p>
    <p>&nbsp;</p>
    <p><u><strong>Basic Rental Agreement Form Tips:</strong></u></p>
    <p><strong>When filling out your LPA form, please take note of the following: </strong></p>
    <ol>
      <li>To avoid the shifting of lines when you type, don&rsquo;t forget to activate your &ldquo;Overtype&rdquo; feature on your word processing program. This can be done by hitting you &ldquo;Insert&rdquo; or &ldquo;Ins&rdquo; key on your keyboard. Most programs will show you an &ldquo;OVR&rdquo; indicator at the bottom of your window.</li>
      <li>In MS Word, the document is best viewed in &ldquo;Print Layout View&rdquo;.</li>
      <li>State Specific Lease Inserts: Please Note: Be familiar with state requirements before signing your lease or rental agreement. The LPA Lease is used successfully in all United States and also in many other countries. In the US, some states have limitations on certain lease items. Look up your state requirements on our easy to use State Specific Lease Inserts page (http://www.thelpa.com/lpa/forms/state-lease ) Each state link contains State Specific Lease - Rental Agreement clause inserts concerning notice periods for&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &bull; Notice to Terminate Tenancy,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &bull; Notice to Pay Rent or Quit (cure default or lease violation),&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &bull; Maximum Security Deposit allowed by state,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &bull; Late fee and screening fee limitations where applicable They are listed with the corresponding lease clause&nbsp;numbers to make any adjustments quick and easy.</li>
      <li>Sample Filled in copy: If you&rsquo;re not sure what to write or type in any of the blanks of the lease, we&rsquo;ve prepared a sample copy below on the next page.</li>
      <li>Paper size: The LPA Basic Rental Agreement is a short basic version of a rental agreement for very basic simple agreement. For a more detailed Lease Rental Agreement, please visit our Essential Landlord Forms page a http://www.thelpa.com/lpa/forms.html More helpful information concerning LPA forms is available at FAQ - Forms (http://www.thelpa.com/lpa/faq-forms.html ) Legal Disclaimer The Landlord Protection Agency recommends that you seek legal advice before using any of the material offered on this web site, and makes no guarantee on the effectiveness, compliance with local laws or success of any of the material offered on this web site.</li>
    </ol>
    <p>______________________________________________________<br />
    Landlord&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Date&nbsp;&nbsp;</p>
    <p>______________________________________________________<br />
    Landlord&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Date</p>
    <p>By:____________________________________________________<br />
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Date</p>
    <p>____________________________________________________________________________<br />
    Broker&#39;s Associate&#39;s Printed Name</p>
    <p>____________________________________________________________________________<br />
    Broker&#39;s Printed NameLicense No</p>
    <p>_______________________________________________________<br />
    Firm Name</p>
    <p>________________________________________________________<br />
    Tenant&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Date</p>
    <p><div className="sig"></div><br />
    Signature </p>
    <p>____________________________________________________________________________<br />
    TenantDate</p>
    <p>__</p>
  </div>
  );
}
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
export default class BrokerAgreement extends React.Component{

  constructor(props) {
    super(props);
    this.state={
			 userData : Cookies.get('profile_data'),
			  agreement:[],
			  agrLoaded:false,
			  ragreement:[],
			  rLoaded:false,
			  executedAgreement:[],
			  user: JSON.parse(Cookies.get('profile_data'))
    };
    this.getRequestedAgreement=this.getRequestedAgreement.bind(this);
    this.getExecuteAgreement=this.getExecuteAgreement.bind(this);
    this.verticalNavbar=this.verticalNavbar.bind(this);
    this.previewAgreement=this.previewAgreement.bind(this);
    this.submitAgreement=this.submitAgreement.bind(this);
	this.onClickChangeStatus =this.onClickChangeStatus.bind(this);
	
  }
  componentWillMount(){
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
    $.getScript('assets 21/js/jquery.slimscroll.js', function () {
      console.log('assets 21/js/jquery.slimscroll.js');
   });
    $.getScript('assets/js/jquery.scrollTo.min.jss', ()=> {
      console.log('assets/js/jquery.scrollTo.min.js');
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
    $.getScript('assets/js/jquery.core.js', ()=> {
      console.log('assets/js/jquery.core.js');
      });
      $.getScript('assets/js/jquery.app.js', ()=> {
        console.log('assets/js/jquery.app.js');
        });
        

  }
  componentDidMount() {
	  loadFile("assets 21/tiny/plugin/tinymce/tinymce.min.js","js")
    loadFile("assets 21/tiny/plugin/tinymce/init-tinymce.js","js")
	
    $.getScript('assets 21/js/jquery.slimscroll.js', function () {
       console.log('assets 21/js/jquery.slimscroll.js');
    });
		
	  this.getAgreement()
	  this.getRequestedAgreement();
      this.getExecuteAgreement();
      this.getPropertyList();
      this.selectedAgreement = this.selectedAgreement.bind(this)
      this.editAgreement = this.editAgreement.bind(this)
      this.selectedExecutedAgreement = this.selectedExecutedAgreement.bind(this)
	   this.onClickDownload = this.onClickDownload.bind(this);
	   
	   var tinymce=window.tinyMCE
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
  selectedAgreement(agreement) {
        this.setState({forwardAgreement: agreement});
    }
	onClickDownload(deal_id){
		 // alert("dsahfh");
		 // <a href={`${API_URL}assetsapi/download_agreement/`+deal_id}/>
		  window.open(`${API_URL}assetsapi/download_agreement/`+deal_id)
		//console.log("deal_id"+JSON.stringify(deal_id));
		 
			
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


    editAgreement(agreement) {
       this.setState({editAgreement: agreement}, () => {
           console.log('editAgreement ', agreement)
           $('#create')[0].click();
       })
    }
  getAgreement(){
    const { user } = this.state;
    fetch(`${API_URL}assetsapi/saved_agreement/${user.assets_id}/${user.session_id}`, {
      method: 'get'
    })
    .then(res => res.json())
    .then(
      (data) => {
        //debugger;
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
                        // console.log(this.state.requestedAgreement);

                    }
                    //console.log("set user data"+JSON.stringify(this.state.profileData))
                },
                (error) => {
                    console.log('error')
                }
            )
    }

    getExecuteAgreement() {
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
						swal("Assets Watch", data.data);
						window.location.reload();
                        // console.log(data);
                    }
                    //console.log("set user data"+JSON.stringify(this.state.profileData))
                },
                (error) => {
                    console.log('error')
                }
            )
    }
	onClickChangeStatus()
	{
		 let { user, updatedAgreement } = this.state;
	
		// console.log('dsafgas'+JSON.stringify(this.state));
		
        let data = {
          property_id:updatedAgreement.property_id
          // user_id: user.assets_id
        };
		// console.log('dsafgas'+JSON.stringify(data));
		
		 
		fetch(`${API_URL}assetsapi/change_status_execute`, {
            method: 'post',
            body:JSON.stringify(data)
        })
            .then(res => res.json())
            .then(
                (data) => {
                    // debugger;
                    //console.log("data 2: "+JSON.stringify(result.profile))
                    if (data.success) {
						swal("Assets Watch", data.msg);
						window.location.reload();
                        // console.log(data);
                    }
                    //console.log("set user data"+JSON.stringify(this.state.profileData))
                },
                (error) => {
                    console.log('error')
                }
            )
	}
	/* getExecuteAgreement(){
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
getPropertyList() {
        fetch(`${API_URL}assetsapi/service_request/${JSON.parse(this.state.userData).assets_id}/${JSON.parse(this.state.userData).session_id}`, {
            method: 'get'
        })
            .then(res => res.json())
            .then(
                (data) => {
                    //console.log("data 2: "+JSON.stringify(result.profile))
                    if (data.success) {
                        debugger;
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

	render(){
		return(

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
                          <li className="nav-item"> <a href="#v-execute" id="execute" onClick={this.verticalNavbar.bind(this,"execute")} className="nav-link agreement-fa" data-toggle="tab" aria-expanded="true"><i className="icon-compass" />&nbsp;&nbsp;Execute</a> </li>
                        </ul>
                      </div>
                      <div className="col-md-10">
                        <div className="tab-content">
						
						{this.state.agrLoaded?<Saved editAgreement={this.editAgreement} selectedAgreement={this.selectedAgreement} agreement={this.state.agreement}/>:<div></div>}
						 <VCreate userData={this.state.userData} editAgreement={this.state.editAgreement} />
                          {<VRequested previewAgreement={this.previewAgreement} ragreement={this.state.requestedAgreement || []}/>}
                          <VExecute ragreement={this.state.executedAgreement} selectedExecutedAgreement={this.selectedExecutedAgreement} onClickDownload={this.onClickDownload}/>
						  <div className="tab-pane" id="executePreview">
                                      <div id="executePreviewContainer"></div>
									  <button type ="button" className="btn btn-success" onClick={this.onClickChangeStatus} >Execute</button>
                                  </div>
                          <div className="tab-pane" id="preview">
                            <div id="contentPreview"></div>
                            <div id="commentBox"></div>
                            <div id="signature"></div>
                            <button type="button" onClick={this.submitAgreement} className="btn btn-primary stepy-finish">Accept</button>
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
						{/* <div class="fixed-action-btn hide-on-large-only">
                    <a class="btn-floating btn-large teal" onClick={this.showSideOption}>
                      <i class="large fi-menu"></i> </a>
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
        <AgreementTemplate />
        <Customwithmodal />
      </div>


			)
	}
}