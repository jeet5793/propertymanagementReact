import React from 'react'
// import img1 from '../../../images/blog-detl.jpg'
import LeaveComment from './leaveComment'
import $ from 'jquery'
import API_URL from '../../../app-config';
export default class BlogsDetails extends React.Component{
	constructor(props) {
		super(props);
   this.state = {
			blog:[
				{
					blog_name:" ",
					commenter:null,
					comments_count:"",
					description:"",
					entry_date:"",
					id:"",
					img_path:"",
					views_count:""
				}]
	 };
	 this.updateViewCount=this.updateViewCount.bind(this)
	}
	
	componentDidMount(){		
		if(this.props.location.state!==undefined)
		{
		const propertyDetail=this.props.location.state
		this.updateViewCount(propertyDetail.id)
		this.getBlogDetails(propertyDetail.id)		
		}
		setTimeout(function(){ $('#tzloadding').remove(); }, 5000)		
	}
	updateViewCount(id){
		var opts={"blog_id":id}
		if(this.state.blog.id!=='')
			fetch(`${API_URL}assetsapi/blog_views_update`, {
			method: 'post',    
			body: JSON.stringify(opts)
			})
			.then((response) =>{
				return response.json();
				}).then((data)=> {
				// alert(data.msg)
				});		
	}
	getBlogDetails(id){
		fetch(`${API_URL}assetsapi/blog_details/`+id)
		.then((response)=> {        
		  response.json().then((data)=>{
			this.setState({blog:data.blog})
		  })
		});
	  }
	render(){
		return(
			<div className="mg-top-129">
			{this.state.blog.map(blogData=>(				
				<div>
					<div className="tz-Breadcrumb">
						<div className="tzOverlayBreadcrumb">
							<div className="container">
								{/* <h1> How to choose a real estate agent </h1> */}
								<h1>{blogData.blog_name}</h1>
								<div className="tz-breadcrumb-navxt"> 
								</div>
							</div>
							{/*<!-- end class container --> */}
						</div>
					</div>
				
					<div className="tz-post tz-single">
						<div className="container">
							<div className="row">
								<div className="col-lg-9 col-md-8 col-sm-8 col-xs-12 tz-has-sidebar">
									<div id='post-523' className="tz-post-item">
										<div className="tz-post-top">
											{/* <h1 className="tz-post-title">How to choose a real estate agent</h1> */}
											<h1 className="tz-post-title">{blogData.name}</h1>
											<div className="tz-post-information">
												<div className="tz-width-auto">
												 <span className="TzAuthor"> 
												 <span className="tz-post-author"> Posted by <a className="single-author-name"> Smith Doe </a> </span> 
												 </span> 
												</div>
												<div className="tz-width-auto"> 
												 <span className="TzDate"> 
												 <i className="icon-calendar-full"></i> 
												 <span className="tz-post-date"> 
												 {/* <a href="#">May 20, 2016</a>  */}
												 <a>{blogData.entry_date}</a> 
												 </span> 
												 </span> 
												</div>
												<div className="tz-width-auto"> 
												 <span className="TzViews"> <i className="icon-eye"></i> 
												 {/* <span className="">47 Views</span> </span>  */}
												 <span className="">{blogData.views_count}</span> </span> 
												</div>
												<div className="tz-width-auto"> 
													<span className="TZCommentCount"> 
														<i className="icon-bubbles"></i> 
														<a>{blogData.comments_count}</a> 
													</span> 
												</div>
											</div>
										</div>
										<div className="tz-post-content">
											<div className="tz-post-thumbbox tz-post-thumbnail"> 
											<img width="880" height="405" src={`${API_URL}assetsadmin/`+blogData.img_path} className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt=""  sizes="(max-width: 880px) 100vw, 880px" />
											</div>
											<div className="tz-post-excerpt" dangerouslySetInnerHTML={{__html: blogData.description}} />
												{/* <p>Real estate has been a driving force in world economies since the days of Babylon, one of the most fantastic developments the world has ever known, and the desire to create, not destroy, is alive and well. As the world grows more populous and available land diminishes, the opportunities that real estate development has to offer are vast and obtainable. As we descend from the booming 90s and find ourselves burdened with the realities of our own self-inflicted economic implosion cause by greed and speculation, many investors find solace in the tangible world of real estate. Moreover, the malignant affects of September the 11th are still cascading down through our economy, which is causing an ever-increasing desire for a more concrete wealth-building option not offered by many paper investments. Many investors are still coping with the fall of such giants as Enron and WorldCom, while others are looking for the stability that the real estate market offers, and when you add all these ingredients to the grossly over-priced US stock market, one finds a more appealing meal in the fascinating world of real estate.<span id="more-523"></span></p>
												<p>I have been a student of the real estate market for almost five years, and throughout these years, I have learned many of the fascinating dynamics of this genre of investing. The importance of choosing a career and goals early in one&#8217;s life cannot be understated, and more importantly, goals should be aligned with one&#8217;s interests and passions. To enter the realm of real estate development requires vision, direction, and risk acceptance, but a knowledgeable investor will take calculated risks that are in line with his or her overall investment goals. In this paper, I will give a synopsis of real estate development as a process, and its indirect affects on the social area in which it takes place and how governments try to stimulate this all important growth instrument.</p> */}
											
										{/* </div> */}
									</div>
									
									{/*<!--    Comments    -->*/}




									<LeaveComment blogDetail={this.state.blog} />


								</div>
								<div className="col-lg-3 col-md-4 col-sm-4 col-xs-12 tz-sidebar-right">
									
									
								</div>
							</div>
						</div>
					 </div>
					</div>
				</div>
			))}   
			   
			 
		 {/*<link rel='stylesheet' href='css/theme.css' type='text/css' media='all' />*/}
			<script type='text/javascript' src='js/validate.js'></script> 
			<script type='text/javascript' src='js/propr.js'></script> 
			<script type='text/javascript' src='js/realestatecookie.js'></script> 
			<script type='text/javascript' src='js/custom.js'></script> 
			<script type='text/javascript' src='js/validatejq.js'></script> 
			<script type='text/javascript' src='js/embed.min.js'></script> 
			<script type='text/javascript' src='js/markerclusterer.js'></script> 
			<script type='text/javascript' src='js/property-list.js'></script> 
			<script type='text/javascript' src='js/cubeportfolio.min.js'></script>
			
			</div>
			);
	}
}