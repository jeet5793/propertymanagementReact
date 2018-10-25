import React from 'react';
import {Link} from 'react-router-dom'
import API_URL from '../../../../app-config';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import img_not_available from '../../../../images/img_not_available.png'
import $ from 'jquery';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
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
		  propertyImg:[],
		   propertyDetail:[]
			
		}
		this.onClickDownload = this.onClickDownload.bind(this);
		this.viewProperty = this.viewProperty.bind(this);
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
             // console.log("set user data"+JSON.stringify(this.state.property))
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
	viewProperty(property_id){
		 $("#loaderDiv").show();
        fetch(`${API_URL}assetsapi/property_details/`+property_id, {
          method: 'get'
        })
        .then(res => res.json())
        .then(
          (result) => {
			$("#loaderDiv").hide();
            if (result.success) {
              $(".proeprty-sec").show();
			 this.setState({propertyDetail: result.property});
			 // this.setState({propertyImg: result.property.img_path});
				  
            } 
              // console.log("property##"+JSON.stringify(result.property[0].img_path))
          },
        (error) => {
          console.log('error')
        }
      )
		 
		 
	 }
	 onClickClose(){
		$(".proeprty-sec").hide(); 
	 }
	 changeTabs(id) {
        if (id == "details") {
            $("#descriptionTab").removeClass("active")
            $("#locationTab").removeClass("active")

        } else if (id == "location") {
            $("#descriptionTab").removeClass("active")
            $("#detailsTab").removeClass("active")
        }
        else {
            $("#detailsTab").removeClass("active")
            $("#locationTab").removeClass("active")
        }
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
                                          	
                                           <a onClick = {this.viewProperty.bind(this,element.property_id)}  id="view-property" className="table-action-btn">
                                                <i style={{cursor:'pointer'}} className="mdi mdi-eye"></i>
                                            </a>
                                            <a title="Download"  href="#" className="table-action-btn view-rqu"><i className="mdi mdi-download" onClick={() => this.onClickDownload(element.deal_id)}></i></a>
												{/* <Link to={{pathname:'/broker-deal-payment',state:{rent:element.rent,deal_id:element.deal_id,userId:JSON.parse(this.state.userData).assets_id,paidFor:element.property_status}}}  className="table-action-btn"> 
                                                <button className="btn btn-success">{element.property_status}</button>
                                            </Link>*/}
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
					{/* =========================property view==========================================*/}
				
				
				 <div className="row proeprty-sec" id="">
                    <div className="col-12">
                        <div className="card-box">
                            <h4 className="header-title m-t-0 view-property-title">Property Title</h4>
							<div className=" view-property-close">
                                   <a href="#" onClick={this.onClickClose} id="close-property"><i className="mdi mdi-close"></i></a>
                                </div>
							<div className="col-12 no-padding">
                            <div className="single-item slider ">
							{/*this.state.propertyImg.map((item)=>(
							
                                <div>
                                    <img src={API_URL+item.img_path} alt="slider-img" className="img-fluid"/>
                                </div>
                              ))*/}
							  <Carousel showThumbs={false}>
							  {this.state.propertyDetail.map((item)=>(
								item.img_path.map((element)=>(
									<div>
										<img src={API_URL+element.img_path} alt="slider-img" className="img-fluid"/>
									</div>
									))
                              ))}
							  </Carousel>
                            </div>
                            </div>
							<ul className="nav nav-tabs tabs-bordered">
								<li className="nav-item"> <a href="#description" onClick={this.changeTabs.bind(this, "description")} id ="descriptionTab" data-toggle="tab" aria-expanded="true" className="nav-link font-16 active">Description  </a> </li>
								<li className="nav-item"> <a href="#details" data-toggle="tab" onClick={this.changeTabs.bind(this, "details")} id ="detailsTab"  aria-expanded="false" className="nav-link font-16">Details  </a> </li>
								<li className="nav-item"> <a href="#location" data-toggle="tab" onClick={this.changeTabs.bind(this, "location")} id ="locationTab"  aria-expanded="false" className="nav-link font-16">Location  </a> </li>
                            </ul>
							<div className="col-12 no-padding m-t-15">
						 {this.state.propertyDetail.map((item)=>(
							<div className="tab-content">
								<div className="tab-pane active" id="description">
									<div className="row">
										{item.description}
									</div>
						  
								</div>
								
							<div className="tab-pane" id="details">
								
									<p className="tz-property-detail"> Price:&nbsp; <strong> ${item.total_amount} </strong> </p>
										<p className="tz-property-detail"> Area:&nbsp; <strong> {item.square_feet}&nbsp; </strong> </p>
										<p className="tz-property-detail"> Type:&nbsp; <strong> {item.property_type} </strong> </p>
										<p className="tz-property-detail"> Bedrooms:&nbsp; <strong>  {item.bedroom} </strong> </p>
										<p className="tz-property-detail"> Bathrooms:&nbsp; <strong>  {item.bathroom} </strong> </p>
										<p className="tz-property-detail"> Status:&nbsp; <strong>  {item.property_status} </strong> </p>
								
						   </div>
						  
						   <div className="tab-pane" id="location">
								<div className="row">
									 <iframe style={{width:'100%',height:'450px'}} src={item.geo_location} allowfullscreen></iframe>
								</div>
						   </div>
						</div>
						 ))}
							
                           
							</div>
                        </div>
                    </div>
				</div> 
				{/* =========================property view end==========================================*/}
                    
                </div>
                {/* <!-- end container -->  */}
                </div>
				
				
            </div>


			)
	}
}