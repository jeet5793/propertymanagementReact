import React from 'react'
import Header from '../Header/Header'
import {Link} from 'react-router-dom'
import API_URL from '../../../app-config';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import img_not_available from '../../../images/img_not_available.png'
import $ from 'jquery';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
class Property extends React.Component{
    constructor(props){
        super(props)
        this.imgServer=API_URL,
        this.state = {
            propertiesLoading:false,
            flag:true,
			userInfo:props.userData,
			  userData:Cookies.get('profile_data'),
			  profileData:'',
            property:[],
			propertyImg:[],
			 propertyDetail:[],
            loggedOwner:props.owner,
            owner_id:props.owner_id
            
            }
        this.getPropertiesByType=this.getPropertiesByType.bind(this)
        this.deleteProperty=this.deleteProperty.bind(this);
		this.viewProperty = this.viewProperty.bind(this);
    }
    componentDidMount(){
        if(this.state.flag)
        {
            this.getPropertiesByType("Rent")
        }


        // if(this.state.flag)
        // fetch('assetsapi/property/')
		// .then((response)=> {				
		// 	response.json().then((data)=>{
		// 		this.setState({property:data.property,flag:false})
		// 		console.log(this.state.properties)
		// 	})
        // });
        // debugger;
		$("#loaderDiv").show();
		fetch(`${API_URL}assetsapi/property_by/${JSON.parse(this.state.userData).assets_id}/${JSON.parse(this.state.userData).session_id}`, {
		  method: 'get'
		})
		.then(res => res.json())
		.then(
		  (data) => {
            // console.log("data22: "+JSON.stringify(data))
            this.setState({propertiesLoading:true})
            // debugger;
			$("#loaderDiv").hide();
			if (data.success) {
				
			  this.setState({property:data.property,propertiesLoading:true})
			  //console.log(this.state.statics);
			} 
			//console.log("set user data"+JSON.stringify(this.state.profileData))
		  },
		(error) => {
		  console.log('error')
		}
	  )

    }
    getPropertiesByType(type){
//         var opts={"property_status":type}
//         var temp=[]
//         fetch('assetsapi/property_search', {
//                 method: 'post',    
//                 body: JSON.stringify(opts)
//             })
//             .then(res => res.json())
//             .then(json =>{    
//                 json.value.forEach(element => {
//                 var tmp={};
//                 tmp=element
//                 temp.push(tmp);
//             });                                                                                   
//             this.setState({property:temp,flag:false})             
//    });   
    }
    deleteProperty=(id)=>(e)=>{
        var session_id=JSON.parse(this.state.userData).session_id;
		const properties=this.state.property;
		 $(".confirm-body").html("Do you want to delete property..?");
		$("#DelBlockUIConfirm").show();
		$(".row-dialog-btn").click(function(){
						const action = this.value;
						// alert(action);
						if(action==="Yes"){
								 $("#loaderDiv").show();
								
								var tempProperty=[]
								var opts={'property_id':id,'session_id':session_id}
								fetch(`${API_URL}assetsapi/delete_property`,{
									method: 'POST',          
									body: JSON.stringify(opts)
									})
									.then(res => res.json())
									.then(data =>{ 
									if(data.msg==="Property deleted successfully !!!")  
										{
												$("#loaderDiv").hide();
												// properties.forEach(propr=>{
												// if(propr.id!==id)
													// tempProperty.push(propr)                    
												// })
												// this.setState({property:tempProperty})
												$("#actionType").val("Yes");
											   $("#hiddenURL").val("my-property");
											   $(".confirm-body").html(data.msg);
											   $("#BlockUIConfirm").show();
										}else{
												$("#loaderDiv").hide();
												$("#actionType").val("Yes");
											   $("#hiddenURL").val("my-property");
											   $(".confirm-body").html(data.msg);
											   $("#BlockUIConfirm").show();
										}
									})
								/* fetch(`${API_URL}assetsapi/delete_property`,{
									method: 'POST',          
									body: JSON.stringify(opts)
									})
									.then(res => res.json())
									.then(data =>{ 
									$("#loaderDiv").hide();
									
										if(data.msg==="Property deleted successfully !!!")  
										{
											// swal("Assets Watch", data.msg);
								
											// properties.forEach(propr=>{
												// if(propr.id!==id)
												// tempProperty.push(propr)                    
											// })
											// this.setState({property:tempProperty})
											 $("#actionType").val("Yes");
											   $("#hiddenURL").val("my-property");
											   $(".confirm-body").html(data.msg);
											   $("#BlockUIConfirm").show();
										}
											   
											  
										
									 }) */
						}else if(action==="Cancel"){
							$("#DelBlockUIConfirm").hide();
						}
		})
        // if(window.confirm('Do you want to delete property..?'))
        // {
			
        // }
    }
	editProperty(property) {
        this.setState({editProperty: property}, () => {
            // console.log('editProperty ', property)
            Cookies.set("editProperty",property);
            this.props.history.push("/edit-property")
            
        })
     }
	 viewProperty(property){
		 $(".proeprty-sec").show();
		  $("#table").hide();
		
		 this.setState({propertyDetail: property});
		 this.setState({propertyImg: property.img_path});
	 }
	 onClickClose(){
		$(".proeprty-sec").hide(); 
		  $("#table").show();
	 }
	 changeTabs(id) {
        if (id == "location") {
            $("#detailsTab").removeClass("active");
			 $("#descriptionTab").removeClass("active");

        }else if(id == "details"){
			$("#locationTab").removeClass("active");
			 $("#descriptionTab").removeClass("active");
		}
        else {
            $("#locationTab").removeClass("active");
			$("#detailsTab").removeClass("active");
			
        }
    }
	//in your component
	addDefaultSrc(ev){
	  ev.target.src = img_not_available;
	}
    render(){
        const imgSer=this.imgServer
        // console.log("propertyloading..."+JSON.stringify(this.state.propertiesLoading))
        // if(this.props.owner===undefined)
        // window.location.href='http://'+window.location.host
        return(
            <div>
                {/*<Header name="property" />*/}
                <Header logoutLink={this.logoutLink} 
                name="property" 
                first_name={window.localStorage.getItem('firstName')} 
                last_name={window.localStorage.getItem('lastName')} />
                <div className="wrapper">
                <div className="container">                     
                <div className="page-title-box">
                <div className="btn-group pull-right">
                    <ol className="breadcrumb hide-phone p-0 m-0">
                    <li><Link to={{pathname:'/add-property'}} className="btn btn-custom waves-light waves-effect w-md"><i className="fi fi-circle-plus"></i>&nbsp;&nbsp;Add Property</Link></li>
                    </ol>
                </div>
                <h4 className="page-title">My Properties</h4>
                </div>
                {this.state.property.length>0?
                                  
                    <div className="row" id="table">
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
                                            <img onError={this.addDefaultSrc} src={(element.img_path && element.img_path.length>0)?imgSer+element.img_path[0].img_path:img_not_available} alt="contact-img" title="contact-img" className="rounded-circle property-img" />
                                        </td>
                                        <td><h5 className="m-b-0 m-t-0 font-600">{element.title}</h5></td>
                                        {/* <td><i className="mdi mdi-map-marker text-primary"></i> #0,22ndFloor,27th Main NewYork </td> */}
                                        <td><i className="mdi mdi-map-marker text-primary"></i>{element.city+","+element.state+","+element.country}</td>
                                        {/*<td><i className="mdi mdi-currency-usd text-warning"></i> 2333 </td>*/}
                                        <td>{element.property_type}</td>
                                        {/* <td><i className="mdi mdi-currency-usd text-warning"></i> 366 </td> */}
                                        <td><i></i> {element.property_status}</td>
                                        <td><i></i> {element.entry_date} </td>
                                        <td>
                                         <a onClick={this.editProperty.bind(this,element)} id={element.id} className="table-action-btn">
                                                <i style={{cursor:'pointer'}} className="mdi mdi-pencil"></i>
                                            </a> 	
                                           <a onClick = {this.viewProperty.bind(this,element)}  id="view-property" className="table-action-btn">
                                                <i style={{cursor:'pointer'}} className="mdi mdi-eye"></i>
                                            </a>
                                            <a onClick={this.deleteProperty(element.id)} id={element.id} className="table-action-btn">
                                                <i style={{cursor:'pointer'}} className="mdi mdi-close"></i>
                                            </a>
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
                    
					{/* =========================property view==========================================*/}
				
				
				 <div className="row proeprty-sec" id="">
                    <div className="col-12">
                        <div className="card-box">
							<div className=" view-property-close">
								<button type="button" className="btn btn-primary waves-effect waves-light" onClick={this.onClickClose}>Back</button>
                            </div>
                            <h4 className="header-title m-t-0 view-property-title">{this.state.propertyDetail.title}</h4>
							
							<div className="col-12 no-padding">
                            <div className="single-item slider ">
								<Carousel showThumbs={false}>
									{this.state.propertyImg.map((item)=>(
									
										<div>
											<img onError={this.addDefaultSrc} src={API_URL+item.img_path} alt="slider-img" className="img-fluid"/>
										</div>
									  ))}
								</Carousel>
                            </div>
                            </div>
							<ul className="nav nav-tabs tabs-bordered">
								<li className="nav-item"> <a href="#description" onClick={this.changeTabs.bind(this, "description")} id="descriptionTab"data-toggle="tab" aria-expanded="true" className="nav-link font-16 active" >Description  </a> </li>
								<li className="nav-item"> <a href="#details" data-toggle="tab" aria-expanded="false" className="nav-link font-16" onClick={this.changeTabs.bind(this, "details")} id="detailsTab">Details  </a> </li>
								<li className="nav-item"> <a href="#location" data-toggle="tab" aria-expanded="false" className="nav-link font-16" onClick={this.changeTabs.bind(this, "location")} id="locationTab">Location  </a> </li>
                            </ul>
							<div className="col-12 no-padding m-t-15">
							<div className="tab-content">
								<div className="tab-pane active" id="description">
									<div className="row">
										{this.state.propertyDetail.description}
									</div>
						  
								</div>
							<div className="tab-pane" id="details">
								
									<p className="tz-property-detail"> Price:&nbsp; <strong> ${this.state.propertyDetail.total_amount} </strong> </p>
										<p className="tz-property-detail"> Area:&nbsp; <strong> {this.state.propertyDetail.square_feet}&nbsp; </strong> </p>
										<p className="tz-property-detail"> Type:&nbsp; <strong> {this.state.propertyDetail.property_type} </strong> </p>
										<p className="tz-property-detail"> Bedrooms:&nbsp; <strong>  {this.state.propertyDetail.bedroom} </strong> </p>
										<p className="tz-property-detail"> Bathrooms:&nbsp; <strong>  {this.state.propertyDetail.bathroom} </strong> </p>
										<p className="tz-property-detail"> Status:&nbsp; <strong>  {this.state.propertyDetail.property_status} </strong> </p>
								
						   </div>
						   <div className="tab-pane" id="location">
								<div className="row">
									 <iframe style={{width:'100%',height:'450px'}} src={this.state.propertyDetail.map} allowfullscreen></iframe>
								</div>
						   </div>
						</div>
	
							
                           
							</div>
                        </div>
                    </div>
				</div> 
				{/* =========================property view end==========================================*/}
					
                    <div className="row">
                    <div className="col-sm-12"> </div>
                    </div>
                    {/* <!-- end Panel -->  */}
                    
                </div>
                {/* <!-- end container -->  */}
                </div>
				
				<div id="DelBlockUIConfirm" className="BlockUIConfirm" style={{display:"none"}}>
					<div className="blockui-mask"></div>
						<div className="RowDialogBody">
							<div className="confirm-header row-dialog-hdr-success">
								Notification
							</div>
							<div className="confirm-body">
						
						</div>
						<div className="confirm-btn-panel text-center">
							<div className="btn-holder">
								<input type="hidden" id="hiddenURL" />
								<input type="hidden" id="actionType" />
								<input type="button" className="row-dialog-btn btn btn-success" value="Yes" />
								<input type="button" className="row-dialog-btn btn btn-naked" value="Cancel"  />
							</div>
						</div>
					</div>
				</div>
				
            </div>
        );
    }
}
export default connect(state=>({ userData: state.userData, userProfile: state.userProfile }))(Property)