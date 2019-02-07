import React from 'react'
import { Link } from 'react-router-dom'

export default class NavLinks extends React.Component{
	NavItem(){
    return (
        <ul className="nav navbar-nav"  id="menu-menu-home">
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
	
        <nav className="navbar navbar-inverse"> 
		<div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-3">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
			<div className="collapse navbar-collapse" id="navbar-collapse-3">        
          {this.NavItem(this)}        
		  </div>
        </nav>

	);
	}
}