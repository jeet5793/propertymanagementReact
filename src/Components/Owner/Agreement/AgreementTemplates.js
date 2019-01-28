import React from 'react';
import {Link} from 'react-router-dom'
import API_URL from '../../../app-config';
import Cookies from 'js-cookie';
import $ from 'jquery';


 
export default class AgreementTemplates extends React.Component{
	constructor(props){
    super(props)

		this.state = {
			 userData : Cookies.get('profile_data'),
			 templateList:[]
		}

		this.getTemplatesList =this.getTemplatesList.bind(this);
	}
	componentDidMount(){
		
	  this.getTemplatesList();
	}
	getTemplatesList(){
		$("#loaderDiv").show();
	fetch(`${API_URL}assetsapi/get_templates_by/${JSON.parse(this.state.userData).assets_id}/${JSON.parse(this.state.userData).session_id}`, {
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
	
	pdfViewAgreement(agreement_id){
		
		  window.open(`${API_URL}assetsapi/agreement_template_pdf_view/${JSON.parse(this.state.userData).assets_id}/`+agreement_id+`/${JSON.parse(this.state.userData).session_id}`, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
	 }  
	 onClickBuy=(item)=>{
			  // this.props.history.push('/owner-agreement-payment')
			  fetch(`${API_URL}assetsapi/check_agreement_payment/${JSON.parse(this.state.userData).assets_id}/`+item.templateId, {
						  method: "GET"
						})
						  .then(response => {
							return response.json();
						  })
						  .then((data) => {
							if(data.success==0){

								this.props.history.push({
									  pathname: '/owner-agreement-payment',
									    state: {payType:item.paytype, Amount:item.amount,Currency:item.currency, templateId:item.templateId,userId:JSON.parse(this.state.userData).assets_id, loc: '/agreement-templates',Validity:item.validity }
									})
							}
						  }
						).catch((error) => {
							console.log('error: ', error);
						  });

	 }
	render(){

		return(
			<div>
        {/* Navigation Bar*/}
        {/* End Navigation Bar*/}
		
        <div className="wrapper">
                <div className="container">                     
               
			   <div className="page-title-box">
					
                <h4 className="page-title">Agreement Templates</h4>
					
					
					
                </div>
               

			   {(this.state.templateList && this.state.templateList.length>0)?
                    
					
					
                    <div className="row" id="table">
                    <div className="col-sm-12">
                        <div className="card-box">
                        <div className="table-responsive">
					
                            <table className="table table-hover m-0 table-actions-bar">
                            <thead>
                                <tr>
								<th>#</th>
                                <th>Name</th>
                                <th>Type</th>
								<th>Fee</th>
                                <th>Duration</th>
                                <th>Expire</th>                                
                                <th>Manage</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.templateList.map((item,i)=>(
                                    <tr key={item.templateId}>
                                        <td>{i+1}</td>
                                        <td><h5 className="m-b-0 m-t-0 font-600">{item.templateTitle}</h5></td>
										<td>{item.paytype}</td>
										<td>{item.amount}</td>
                                        <td>{item.paytype=='Free' && "Lifetime" }{item.paytype=="Paid" && item.validity}</td>
										<td>{item.paytype=='Free' && "Never"}{item.paytype=="Paid" && "N/A"}</td>
										<td><a title="view" href="#" onClick={() => this.pdfViewAgreement(item.templateId)} data-toggle="tab" className="table-action-btn view-rqu"><i className="mdi mdi-eye"></i></a>
										{item.paytype=="Free" || item.paidStatus=='Active'?<Link to={{pathname:'/owner-agreement-send',state:{TemplateId:item.templateId,templateDescription:item.templateDescription,agreement_type:'Template',loc:'/agreement-templates'}}} title="Send" className="table-action-btn view-rqu" ><i className="mdi mdi-redo-variant"></i></Link>:<a  className="table-action-btn" >
                                                <button onClick = {()=>this.onClickBuy(item)} className="btn btn-success" style={{cursor:'pointer'}}>Buy</button>
												</a>}</td>
                                    </tr>
							))}      
                                
                               
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    </div>
                    :<div className="container"><div style={{textAlign:'center'}} colSpan={7}>No Agreement Templates Added</div></div>
                }
                    {/* <!-- end row --> */}
                    
                    <div className="row">
                    <div className="col-sm-12"> </div>
                    </div>
                    {/* <!-- end Panel -->  */}
							
					
                    
                </div>
                {/* <!-- end container -->  */}
                </div>
				
				
            </div>
			
			
			);
	}
}