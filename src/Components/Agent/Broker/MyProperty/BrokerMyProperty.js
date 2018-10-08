import React from 'react';
import {Link} from 'react-router-dom'
import API_URL from '../../../../app-config';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import img_not_available from '../../../../images/img_not_available.png'
import $ from 'jquery';
export default class BrokerMyProperty extends React.Component{
	constructor(props){
    super(props)
this.imgServer=API_URL,
		this.state = {
			 propertiesLoading:false,
          userInfo:props.userData,
          userData:Cookies.get('profile_data'),
          profileData:'',
          property:[],
			
		}
		this.onClickDownload = this.onClickDownload.bind(this)
	}
	componentDidMount(){
		const profile=JSON.parse(this.state.userData)
		$("#loaderDiv").show();
        fetch(`${API_URL}assetsapi/service_request/${profile.assets_id}/${profile.session_id}`, {
          method: 'get'
        })
        .then(res => res.json())
        .then(
          (result) => {
			  $("#loaderDiv").hide();
			   this.setState({propertiesLoading:true})
            //console.log("data 2: "+JSON.stringify(result.profile))
            if (result.success) {
              this.setState({property:result.service.property_list,propertiesLoading:true})
              
            } 
             console.log("set user data"+JSON.stringify(this.state.property))
          },
        (error) => {
          console.log('error')
        }
      )
	}
	onClickDownload(deal_id){
		 // alert("dsahfh");
		 // <a href={`${API_URL}assetsapi/download_agreement/`+deal_id}/>
		  window.open(`${API_URL}assetsapi/download_agreement/`+deal_id,'_self')
		//console.log("deal_id"+JSON.stringify(deal_id));
		 
			
	 }
	render(){
		const imgSer=this.imgServer
		return(

			      <div>
        {/* Navigation Bar*/}
        {/* End Navigation Bar*/}
        <div className="wrapper">
                <div className="container">                     
                <div className="page-title-box">
              
                <h4 className="page-title">My Properties</h4>
                </div>
                {this.state.property.length>0?
                                  
                    <div className="row">
                    <div className="col-sm-12">
                        <div className="card-box">
                        <div className="table-responsive">
					
                            <table className="table table-hover m-0 table-actions-bar">
                            <thead>
                                <tr>
                                <th> <i className="fi fi-image"></i> </th>
                                <th>Title</th>
                                <th>Location</th>
                                <th>Property Status</th>                                
                                <th>Status</th>
                                <th>Posted Date</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                           { this.state.property.map(element=>(
                                    <tr>
                                        <td>
                                            <img src={(element.img_path && element.img_path.length>0)?imgSer+element.img_path:img_not_available} alt="contact-img" title="contact-img" className="rounded-circle property-img" />
                                        </td>
                                        <td><h5 className="m-b-0 m-t-0 font-600">{element.property_name}</h5></td>
                                        {/* <td><i className="mdi mdi-map-marker text-primary"></i> #0,22ndFloor,27th Main NewYork </td> */}
                                        <td><i className="mdi mdi-map-marker text-primary"></i>{element.address}</td>
                                        {/*<td><i className="mdi mdi-currency-usd text-warning"></i> 2333 </td>*/}
                                        <td>{element.property_type}</td>
                                        {/* <td><i className="mdi mdi-currency-usd text-warning"></i> 366 </td> */}
                                        <td><i></i> {element.property_status}</td>
                                        <td><i></i>  </td>
                                        <td>
                                          	
                                           <Link to={{pathname:'/property-detail',state:{id:element.id}}}  className="table-action-btn">
                                                <i className="mdi mdi-eye"></i>
                                            </Link>
                                            <a title="Download"  href="#" className="table-action-btn view-rqu"><i className="mdi mdi-download" onClick={() => this.onClickDownload(element.deal_id)}></i></a>
											<Link to={{pathname:'/broker-deal-payment',state:{rent:element.rent,deal_id:element.deal_id,userId:JSON.parse(this.state.userData).assets_id,paidFor:element.property_status}}}  className="table-action-btn">
                                                <button className="btn btn-success">{element.property_status}</button>
                                            </Link>
                                        </td>
                                    </tr>
                           ))}      
                                
                               
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    </div>
                    :<div className="container"><div style={{textAlign:'center'}} colSpan={7}>No Property Added</div></div>
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


			)
	}
}