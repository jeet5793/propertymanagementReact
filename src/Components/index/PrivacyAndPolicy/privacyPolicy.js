import React from 'react'
// import img1 from '../../../images/1.jpg'
import $ from 'jquery'
import { Link } from 'react-router-dom'
import API_URL from '../../../app-config';
export default class PrivacyPolicy extends React.Component{
  constructor(props){
		super(props)
		this.state={
			portal_content:[]
		}
	}
	componentDidMount(){
		setTimeout(function(){ $('#tzloadding').remove(); }, 800);
		document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;

			var request = new Request(`${API_URL}assetsapi/portal_content/privacy_policy`, {
			
			});

		fetch(request)
		.then((response)=> {				
			response.json().then((data)=>{
				
				this.setState({portal_content:data.portal_content[0]['description']})
				console.log(this.state.portal_content)
			})
		});
	}
    render(){
        return(
          <div className="mg-top-129">
            {/*<Header />*/}
           
            <div className="vc_row wpb_row vc_row-fluid tz-responsive-bottom vc_custom_1465552428823 vc_row-has-fill trms-privc">
            <div className="container">
              <div className="row">
                <div className="tz-width-mobile wpb_column vc_column_container vc_col-sm-12">
                  <div className="vc_column-inner vc_custom_1465553727693">
                    <div className="wpb_wrapper">
                      <div className="tz-home-title  title  text-center">
                        <div className="tz-content ">
                          <h3 className="text-center"><a >Privacy Policy</a></h3>
                          <div className="tz-title-content">
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
               
               <section className="section-policy">
                   <p dangerouslySetInnerHTML={{__html: this.state.portal_content}} />
                  
                </section>
              </div>
            </div>
          </div>
          </div>
        );
    }
}