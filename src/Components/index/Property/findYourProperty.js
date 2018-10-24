import React from 'react'
import { Route } from 'react-router';
// import jQuery from 'jquery'
import API_URL from '../../../app-config';

export default class FindYourProperty extends React.Component{
  constructor(props){
    super(props)
    this.state={
    keyword:'',
    city:'',
    property_type:'',
    property_status:'',
    area:'',
    min_price:'',
    max_price:'',
    status:''
    }
    this.onChangeHandler=this.onChangeHandler.bind(this);
    this.searchPropertys=this.searchPropertys.bind(this)
  }
  onChangeHandler(e){
      this.setState({[e.target.name]:e.target.value})
  }
  searchPropertys(){
    var opts=this.state
    fetch(`${API_URL}assetsapi/property_search`, {
    method: 'post',    
    body: JSON.stringify(opts)
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    if(data.success===1)
    {
      // console.log(data);    
      // window.location.href='http://'+window.location.hostname+':'+window.location.port+'/property-detail'
      // window.location.pathname="/property-detail"
      
      // <Redirect to={{pathname:'/property-detail'}} />
    }
    this.props.onUpdateHandler(data);
  }.bind(this));
}
 	render(){
 		return(
    <div className="form" action="property.html" method="POST" >
      <div className="tz-form-search">
        <div className="col-md-12 col-sm-12 col-xs-12 text-center">
          <h5 className="search-header">Find your property</h5>
        </div>
        <div className="col-md-3 col-sm-3 col-xs-12">
		  <label style={{border:'none'}}>KEY WORD</label>
          <input type="text" onChange={this.onChangeHandler}  id="keyword1" name="keyword" placeholder="Enter your keyword..."   />
        </div>
        <div className="col-md-3 col-sm-3 col-xs-12 location">
          <label style={{border:'none'}}>LOCATION</label>
          <input type="text" onChange={this.onChangeHandler} className="cbp-search-input " id="address" name="city" placeholder="City"  />
          <input type="hidden" id="latitude" name="latitude" value="" />
          <input type="hidden" id="longitude" name="longitude" value="" />
        </div>
        <div className="col-md-3 col-sm-3 col-xs-12 type tz-select">
          <label style={{border:'none'}}>PROPERTY TYPE</label>
          <select onChange={this.onChangeHandler} name="property_type" className="cbp-search-select">
            <option selected="" value="">Type</option>
            <option value="priApartment">Private Apartment</option>
            <option value="Apartment">Apartment</option>
            <option value="house">House</option>
            <option value="Flat">Flat</option>
          </select>
        </div>
        <div className="col-md-3 col-sm-3 col-xs-12 status tz-select">
          <label style={{width:"100%",border:'none'}}>PROPERTY STATUS</label>
          <select onChange={this.onChangeHandler} name="property_status" className="cbp-search-select">
            <option value="">Status</option>
            <option value="Rent">For Rent</option>
            <option value="Sale">For Sale</option>
           
          </select>
        </div>
        <div  id="text">
          <div className="col-md-3 col-sm-3 col-xs-12 key">
            <label style={{border:'none'}}>Area</label>
            <input type="text" onChange={this.onChangeHandler} className="cbp-search-input tz-pro-search-input" id="area" name="area" placeholder="Sq Ft" value="" />
          </div>
          <div className="col-md-3 col-sm-3 col-xs-12 key">
            <label style={{border:'none'}}>Min Price</label>
            <input type="text" className="cbp-search-input tz-pro-search-input" id="min_price" name="min_price" placeholder="Min Price" value="" />
          </div>
          <div className="col-md-3 col-sm-3 col-xs-12 key">
            <label style={{border:'none'}}>Max Price</label>
            <input type="text" className="cbp-search-input tz-pro-search-input" id="max_price" name="max_price" placeholder="Max Price" value="" />
          </div>
        </div>
       <div className="col-md-9 col-sm-8 col-xs-12"></div>
	   <div className="col-md-3 col-sm-4 col-xs-12">
        <div className="col-md-6 col-sm-6 col-xs-6 advance-serch">
         <a id="toggle" style={{textDecoration:'underline'}}><div>Advance Search</div></a>
          </div>
        <div className="col-md-6 col-sm-6 col-xs-6">
          <button  id="submit" name="submit" onClick={this.searchPropertys} className="btn btn-default tz-pro-search-btn home-searchbtn">Search </button>
        </div>
			</div>
      </div>
    </div>);
 	}
 }