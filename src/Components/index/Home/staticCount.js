import React from 'react'
import img21 from '../../../images/icons/property.png'
import img22 from '../../../images/icons/tenant.png'
import img23 from '../../../images/icons/owners.png'
import img24 from '../../../images/icons/deals.png'
import API_URL from '../../../app-config';

export default class StaticCount extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			statics_count: []
		}
	}
	componentDidMount() {
		

		fetch(`${API_URL}assetsapi/statics_count/`)
			.then((response) => {
				response.json().then((data) => {
					this.setState({ statics_count: data.statics_count[0] });
					console.log(this.state.statics_count)
				})
			});
	}
    render(){
        return(<div className="vc_row wpb_row vc_row-fluid">
        <div className="no_container">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner ">
              <div className="wpb_wrapper">
                <div className="tz-partner count">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-3"> <img src={img21} />
                        <h4>{this.state.statics_count.Property}</h4>
                        <h5>Property</h5>
                      </div>
                      <div className="col-md-3"> <img src={img22} />
                        <h4>{this.state.statics_count.Tenant}</h4>
                        <h5>Tenant</h5>
                      </div>
                      <div className="col-md-3"> <img src={img23} />
                        <h4>{this.state.statics_count.Owner}</h4>
                        <h5>Owners</h5>
                      </div>
                      <div className="col-md-3"> <img src={img24} />
                        <h4>{this.state.statics_count.Deal}</h4>
                        <h5>Deals</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>);
    }
}