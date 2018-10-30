import React from 'react'
import log_in1 from '../../../images/log-in1.png'
import $ from 'jquery'
import { Link } from 'react-router-dom'
import API_URL from '../../../app-config';
// import {fetch} from 'whatwg-fetch'
import img_not_available from '../../../images/img_not_available.png'
export default class Blog extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			blog: [{  }]
		}
	}
	componentDidMount() {
		setTimeout(function () { $('#tzloadding').remove(); }, 800);
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
$("#loaderDiv").show();
		fetch(`${API_URL}assetsapi/blog/`)
			.then((response) => {
				response.json().then((data) => {
					$("#loaderDiv").hide();
					this.setState({ blog: data.blog });
				})
			});



	}
	addDefaultSrc(ev){
  ev.target.src = img_not_available;
}
	render() {
		return (
			<div className="mg-top-129">
				<div className="tz-Breadcrumb">
					<div className="tzOverlayBreadcrumb">
						<div className="container">
							<h1> Blogs </h1>
						</div>
						{/*} <!-- end class container --> */}
					</div>
				</div>
				{/*<!-- end class tzbreadcrumb -->*/}

				<div className="tz-post tz-blog">
					<div className="container">
						<div className="row">
							{this.state.blog?this.state.blog.map((blog,index) => (
								<div className="col-md-6" key={index}>
									<div className="tz-property-single">
										<div className="tz-project-details">
											<div className="tz-property-box tz-property-author">
												<div className="tz-property-author-left blog-img">
													<a className="tz-property-thumbnail">
														<img onError={this.addDefaultSrc} src={API_URL+'assetsadmin/' + blog.img_path} alt="" />
													</a>
												</div>
												<div className="tz-property-author-right">
													<div className="tz-property-author-title">
														<h4> <Link to={{ 'pathname': "blog-detail", state: { id: blog.id } }}   > {blog.blog_name} </Link> </h4>
															{/*<span className="tz-post-author"> Posted by <a className="single-author-name" href="#"> Smith Doe </a> </span>*/}<span className="TzDate"> <i className="icon-calendar-full"></i> <span className="tz-post-date">
															{/* <a href="#">May 20, 2016</a> */}
															<a className="date-a">{blog.entry_date}</a>
														</span> </span>

														<div className="TzSocialLink">  </div>
													</div>
													<div className="tz-property-author-content" dangerouslySetInnerHTML={{ __html: blog.description }} />
													{/* <p>Praesent vehicula id neque in iaculis. Cras in malesuada tortor. Ut auctor magna nec augue semper, in laoreet metus maximus.&hellip;</p> */}
													<div className="button-holder">
														<Link to={{ 'pathname': "blog-detail", state: { id: blog.id } }}   >
															{/* <a className="TzReadmore blog-read-more-btn"> */}
															<span className="TzReadmore read-more">
																<img src={log_in1} alt="Read More" />&nbsp;&nbsp;<span>Read More</span>
															</span>
															{/* </a> */}
														</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							)):<h3 style={{textAlign:'center'}}>No blog Available</h3>}
						</div>
					</div>
				</div>



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