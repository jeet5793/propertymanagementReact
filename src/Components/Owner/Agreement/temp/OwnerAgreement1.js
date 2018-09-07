import React from 'react'
import API_URL from '../../../app-config';
import Cookies from 'js-cookie';
import './icons.css'
import {loadFile} from '../../js/external'
import VCreate from './VCreate'
import $ from 'jquery'
import CustomWithModal from './CustomWithModal'
import SendMsg from './SendMSG'
import './style.css'

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
          {props.agreement.map(element=>(
            <tr>
              <td>{element.agreement_title}</td>
              <td>{element.created_date}</td>
              <td><a title="Edit" href="#" className="table-action-btn view-rqu"><i className="mdi mdi-border-color"></i></a><a title="Delete" href="#" className="table-action-btn view-rqu"><i className="mdi mdi-close"></i></a><a title="Send" href="#" className="table-action-btn view-rqu" data-toggle="modal" data-target="#send-msg"><i className="mdi mdi-redo-variant" onClick={() => props.selectedAgreement(element)}></i></a></td>
            </tr>
          ))}        
        </tbody>
      </table>
    </div>
  </div>);
}
const VRequested=(props)=>{
  debugger;
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
              <td><a title="Edit" href="#" className="table-action-btn view-rqu"><i className="mdi mdi-border-color"></i></a><a title="Delete" href="#" className="table-action-btn view-rqu"><i className="mdi mdi-close"></i></a><a title="Send" href="#" className="table-action-btn view-rqu" data-toggle="modal" data-target="#send-msg"><i className="mdi mdi-redo-variant"></i></a></td>
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
        {props.ragreement.length>0?props.agreement.map(element=>(
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
export default class container extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    userData : Cookies.get('profile_data'),
      agreement:[],
      agrLoaded:false,
      ragreement:[],
      rLoaded:false,
      executedAgreement:[]
    }
  }
  componentDidMount(){
    loadFile("assets 21/tiny/plugin/tinymce/tinymce.min.js","js")
    loadFile("assets 21/tiny/plugin/tinymce/init-tinymce.js","js")
      // debugger;
      var tinymce=window.tinyMCE
      // fetch('http://ec2-18-191-70-215.us-east-2.compute.amazonaws.com:8080/assetsapi/saved_agreement/2/qvtod9f0pqe9li38nsdsc03mu6hb0u2n')
      this.getAgreement()
      this.getRequestedAgreement();
      this.getExecuteAgreement();
      this.getPropertyList();
      this.selectedAgreement = this.selectedAgreement.bind(this)
  }
    selectedAgreement(agreement) {
      this.setState({forwardAgreement: agreement});
    }
  getAgreement(){
    
    fetch(`${API_URL}assetsapi/saved_agreement/2/${JSON.parse(this.state.userData).session_id}`, {
      method: 'get'
    })
    .then(res => res.json())
    .then(
      (data) => {
        debugger;
      //console.log("data 2: "+JSON.stringify(result.profile))
      if (data.success) {
        this.setState({agreement:data.saved_agreement,agrLoaded:true})
        console.log(this.state.agreement);
      } 
      //console.log("set user data"+JSON.stringify(this.state.profileData))
      },
    (error) => {
      console.log('error')
    }
    )
  }
  getRequestedAgreement(){
    fetch(`${API_URL}assetsapi/agreement_detail/1/${JSON.parse(this.state.userData).session_id}`, {
      method: 'get'
    })
    .then(res => res.json())
    .then(
      (data) => {
      //console.log("data 2: "+JSON.stringify(result.profile))
      debugger;
      if (data.success) {
        debugger;
        this.setState({ragreement:data.agreement_detail,rLoaded:true})
        console.log(this.state.ragreement);
      } 
      //console.log("set user data"+JSON.stringify(this.state.profileData))
      },
    (error) => {
      console.log('error')
    }
    )
  } 
  //have set the object
  getExecuteAgreement(){
    fetch(`${API_URL}assetsapi/execute_agreement/21/${JSON.parse(this.state.userData).session_id}`, {
      method: 'get'
    })
    .then(res => res.json())
    .then(
      (data) => {
        debugger;
      //console.log("data 2: "+JSON.stringify(result.profile))
      if (data.success) {
        debugger;
        this.setState({executedAgreement:data.agreement_detail})
        console.log(this.state.executedAgreement);
      } 
      //console.log("set user data"+JSON.stringify(this.state.profileData))
      },
    (error) => {
      console.log('error')
    }
    )
  }
    getPropertyList() {
        fetch(`${API_URL}assetsapi/invite_request/2/3/${JSON.parse(this.state.userData).session_id}`, {
            method: 'get'
        })
            .then(res => res.json())
            .then(
                (data) => {
                    //console.log("data 2: "+JSON.stringify(result.profile))
                    if (data.success) {
                        debugger;
                        this.setState({propertyByUser: data.invitation})
                        console.log(this.state.propertyByUser);
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
  render(){
      return(
    <div>
      <div className="wrapper">
          <div className="container">     
            <AgreementHeader />
            <div className="row">         
              <div className="col-lg-12">
                <div className="card-box">
                    <div className="tabs-vertical-env">
                        <div className="row">
                            {/* side navbar */}
                            <div className="col-md-2">
                                <ul className="nav tabs-vertical">
                                <li className="nav-item">
                                    <a id="saved" onClick={this.verticalNavbar.bind(this)} href="#v-saved" className="nav-link agreement-fa active" data-toggle={"tab"} aria-expanded={false}>
                                        <i className="icon-folder-alt"></i>&nbsp;&nbsp;Saved
                                    </a> 
                                </li>
                                <li className="nav-item">
                                    <a id="create" href="#v-create" onClick={this.verticalNavbar.bind(this)} className="nav-link agreement-fa" data-toggle={"tab"} aria-expanded={true}>
                                        <i className="icon-plus"></i>&nbsp;&nbsp;Create
                                    </a> 
                                </li>
                                <li className="nav-item">
                                    <a id="request" href="#v-requested" className="nav-link agreement-fa" onClick={this.verticalNavbar.bind(this)} data-toggle={"tab"} aria-expanded={true}>
                                        <i className="icon-note"></i>&nbsp;&nbsp;Requested
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a id="execute" href="#v-execute" onClick={this.verticalNavbar.bind(this)} className="nav-link agreement-fa" data-toggle={"tab"} aria-expanded={true}>
                                        <i className="icon-compass"></i>&nbsp;&nbsp;Execute
                                    </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-10">
                              <div className="tab-content">
                                {this.state.agrLoaded?<Saved selectedAgreement={this.selectedAgreement} agreement={this.state.agreement}/>:<div></div>}
                                <VCreate userData={this.state.userData} />
                                {this.state.rLoaded?<VRequested ragreement={this.state.ragreement}/>:<div></div>}    
                                <VExecute ragreement={this.state.executedAgreement}/>                                      
                            </div>
                          </div>
                        </div>
                    </div>
                  <div className="clearfix"></div>
                </div>
              </div>                         
            </div >                      
          </div>
        </div>              
        <SendMsg userProperty={this.state.propertyByUser && this.state.propertyByUser.property}
                 users={this.state.propertyByUser && this.state.propertyByUser.users}
                 agreement={this.state.forwardAgreement}
                 session_id={JSON.parse(this.state.userData).session_id}
        />
        <AgreementTemplate />
        <CustomWithModal />
      </div>
      );
  }    
}