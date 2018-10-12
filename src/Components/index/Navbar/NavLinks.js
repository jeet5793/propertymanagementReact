import React from 'react'
import { Link } from 'react-router-dom'

export default class NavLinks extends React.Component{
	NavItem(){
    return (
        <ul className="nav navbar-nav tz-menu mobile-menu">
            <li className={this.props.normalClass}><Link to={{pathname:'/'}}>Home</Link> </li>
            {/*<li className={this.props.normalClass}><Link to={{pathname:'/AboutUs'}}>About Us</Link></li>*/}
              <li className={this.props.normalClass}><Link to={{pathname:'/aboutus'}}>About Us</Link></li>
            <li className={this.props.normalClass}><Link to={{pathname:'/properties'}}>Properties</Link></li>
            <li className={this.props.normalClass}><Link to={{pathname:'/plans'}}>Plans</Link></li>
            <li className={this.props.normalClass}><Link to={{pathname:'/blog'}}>Blog</Link> </li>
            <li className={this.props.normalClass}><Link to={{pathname:'/contactus'}}>Contact Us</Link></li>
        </ul>
      )
	}
	render(){
	return(
	<div className="tz-header-bottom tz-slick text-center">
    <div className="tz-menu">
      <div className="tz-header-menu tz-slick text-center">
        <nav className="nav-collapse">         
          {this.NavItem(this)}        
        </nav>
      </div>
    </div>
  </div>
	);
	}
}