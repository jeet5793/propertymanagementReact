import React, {Component} from 'react'
import Link from 'react-router-dom/Link';


export default class Navitems extends Component{
    GetItems(){
        if(this.props.name==="profile" || this.props.name==="user")
            {
            return( <ul className="navigation-menu">                     
            <li className="has-submenu active">
                <Link to={{pathname:'/profile'}}>
                    <i className="fi-air-play"></i>Profile
                </Link>
            </li>
            <li>
                <a href="/agreement">
                    <i className="fi-paper"></i>Agreement
                </a>
            </li>
            <li>
                <Link to={{pathname:'/my-property'}}>
                    <i className="fi-box"></i>My Property
                </Link>
            </li>
            <li>
                <Link to={{pathname:'/service'}}>
                    <i className="fi-tag "></i>Services                
                </Link>
            </li>
            <li>
                <Link to={{pathname:'/owner-payment'}}>
                    <i className="fi-briefcase "></i>Payments
                </Link>
            </li>
            <li>
                <Link to={{pathname:'/owner-report'}}>
                    <i className="fi-briefcase "></i>Reports
                </Link>
            </li>
            <li>
                <Link to={{pathname:'/owner-agent'}}>
                    <i className="fi-head "></i>Agent
                </Link>
            </li>
            <li>
                <Link to={{pathname:'/owner-tenant'}}>
                    <i className="fi-head "></i>Tenant
                </Link>
            </li>
            <li>
                <Link to={{pathname:'/settings'}}>
                    <i className="fi-cog "></i>Settings
                </Link>
            </li>                                                
            </ul>);
            }
        else if(this.props.name==="agreement")
            {
            return( 
                <ul className="navigation-menu">
                    <li>
                        <Link to={{pathname:'/profile'}}>
                            <i className="fi-air-play"></i>Profile
                        </Link>
                    </li>
                    <li className="has-submenu active">
                        <a href="/agreement">
                            <i className="fi-paper"></i>Agreement
                        </a>
                    </li>
                    <li>
                        <Link to={{pathname:'/my-property'}}>
                            <i className="fi-box"></i>My Property
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/service'}}>
                            <i className="fi-tag "></i>Services                
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-payment'}}>
                            <i className="fi-briefcase "></i>Payments
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-report'}}>
                            <i className="fi-briefcase "></i>Reports
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-agent'}}>
                            <i className="fi-head "></i>Agent
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-tenant'}}>
                            <i className="fi-head "></i>Tenant
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/settings'}}>
                            <i className="fi-cog "></i>Settings
                        </Link>
                    </li>                                                
                </ul>
            );
            }
        else if(this.props.name==="property")
            {
            return( 
                <ul className="navigation-menu">
                    <li>
                        <Link to={{pathname:'/profile'}}>
                            <i className="fi-air-play"></i>Profile
                        </Link>
                    </li>
                    <li>
                    <a href="/agreement">
                            <i className="fi-paper"></i>Agreement
                     </a>
                    </li>
                    <li className="has-submenu active">
                        <Link to={{pathname:'/my-property'}}>
                            <i className="fi-box"></i>My Property
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/service'}}>
                            <i className="fi-tag "></i>Services                
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-payment'}}>
                            <i className="fi-briefcase "></i>Payments
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-report'}}>
                            <i className="fi-briefcase "></i>Reports
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-agent'}}>
                            <i className="fi-head "></i>Agent
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-tenant'}}>
                            <i className="fi-head "></i>Tenant
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/settings'}}>
                            <i className="fi-cog "></i>Settings
                        </Link>
                    </li>  
                </ul>
            );
            }
        else if(this.props.name==="service")
            {
            return( 
                <ul className="navigation-menu">
                    <li>
                        <Link to={{pathname:'/profile'}}>
                            <i className="fi-air-play"></i>Profile
                        </Link>
                    </li>
                    <li>
                        <a href="/agreement">
                            <i className="fi-paper"></i>Agreement
                        </a>
                    </li>
                    <li>
                        <Link to={{pathname:'/my-property'}}>
                            <i className="fi-box"></i>My Property
                        </Link>
                    </li>
                    <li className="has-submenu active">
                        <Link to={{pathname:'/service'}}>
                            <i className="fi-tag "></i>Services                
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-payment'}}>
                            <i className="fi-briefcase "></i>Payments
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-report'}}>
                            <i className="fi-briefcase "></i>Reports
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-agent'}}>
                            <i className="fi-head "></i>Agent
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-tenant'}}>
                            <i className="fi-head "></i>Tenant
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/settings'}}>
                            <i className="fi-cog "></i>Settings
                        </Link>
                    </li>  
                </ul>
                );
            }
        else if(this.props.name==="owner-payment")
            {
            return( 
                <ul className="navigation-menu">
                    <li>
                        <Link to={{pathname:'/profile'}}>
                            <i className="fi-air-play"></i>Profile
                        </Link>
                    </li>
                    <li>
                        <a href="/agreement">
                            <i className="fi-paper"></i>Agreement
                        </a>
                    </li>
                    <li>
                        <Link to={{pathname:'/my-property'}}>
                            <i className="fi-box"></i>My Property
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/service'}}>
                            <i className="fi-tag "></i>Services                
                        </Link>
                    </li>
                    <li className="has-submenu active">
                        <Link to={{pathname:'/owner-payment'}}>
                            <i className="fi-briefcase "></i>Payments
                        </Link>
                    </li>

                    <li>
                        <Link to={{pathname:'/owner-report'}}>
                            <i className="fi-briefcase "></i>Reports
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-agent'}}>
                            <i className="fi-head "></i>Agent
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-tenant'}}>
                            <i className="fi-head "></i>Tenant
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/settings'}}>
                            <i className="fi-cog "></i>Settings
                        </Link>
                    </li>  
                </ul>
                );
            }
        else if(this.props.name==="owner-agent")
            {
            return( 
                <ul className="navigation-menu">
                <li>
                        <Link to={{pathname:'/profile'}}>
                            <i className="fi-air-play"></i>Profile
                        </Link>
                    </li>
                    <li>
                        <a href="/agreement">
                            <i className="fi-paper"></i>Agreement
                        </a>
                    </li>
                    <li>
                        <Link to={{pathname:'/my-property'}}>
                            <i className="fi-box"></i>My Property
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/service'}}>
                            <i className="fi-tag "></i>Services                
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-payment'}}>
                            <i className="fi-briefcase "></i>Payments
                        </Link>
                    </li>
                    <li>
                    <Link to={{pathname:'/owner-report'}}>
                        <i className="fi-briefcase "></i>Reports
                    </Link>
                    </li>
                    <li className="has-submenu active">
                        <Link to={{pathname:'/owner-agent'}}>
                            <i className="fi-head "></i>Agent
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-tenant'}}>
                            <i className="fi-head "></i>Tenant
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/settings'}}>
                            <i className="fi-cog "></i>Settings
                        </Link>
                    </li>  
                </ul>
                );
            }
        else if(this.props.name==="owner-tenant")
            {
            return( 
                <ul className="navigation-menu">
              
                <li>
                        <Link to={{pathname:'/profile'}}>
                            <i className="fi-air-play"></i>Profile
                        </Link>
                    </li>
                    <li>
                        <a href="/agreement">
                            <i className="fi-paper"></i>Agreement
                        </a>
                    </li>
                    <li>
                        <Link to={{pathname:'/my-property'}}>
                            <i className="fi-box"></i>My Property
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/service'}}>
                            <i className="fi-tag "></i>Services                
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-payment'}}>
                            <i className="fi-briefcase "></i>Payments
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-report'}}>
                            <i className="fi-briefcase "></i>Reports
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-agent'}}>
                            <i className="fi-head "></i>Agent
                        </Link>
                    </li>
                    <li className="has-submenu active">
                        <Link to={{pathname:'/owner-tenant'}}>
                            <i className="fi-head "></i>Tenant
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/settings'}}>
                            <i className="fi-cog "></i>Settings
                        </Link>
                    </li>  
                </ul>
                );
            }
        else if(this.props.name==="report")
            {
            return( 
                <ul className="navigation-menu">
         
                <li>
                        <Link to={{pathname:'/profile'}}>
                            <i className="fi-air-play"></i>Profile
                        </Link>
                    </li>
                    <li>
                        <a href="/agreement">
                            <i className="fi-paper"></i>Agreement
                        </a>
                    </li>
                    <li>
                        <Link to={{pathname:'/my-property'}}>
                            <i className="fi-box"></i>My Property
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/service'}}>
                            <i className="fi-tag "></i>Services                
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-payment'}}>
                            <i className="fi-briefcase "></i>Payments
                        </Link>
                    </li>
                    <li className="has-submenu active">
                        <Link to={{pathname:'/owner-report'}}>
                            <i className="fi-briefcase "></i>Reports
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-agent'}}>
                            <i className="fi-head "></i>Agent
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-tenant'}}>
                            <i className="fi-head "></i>Tenant
                        </Link>
                    </li>
                    <li >
                        <Link to={{pathname:'/settings'}}>
                            <i className="fi-cog "></i>Settings
                        </Link>
                    </li>  
                </ul>
                );
            }
			else if(this.props.name==="settings")
            {
            return( 
                <ul className="navigation-menu">
         
                <li>
                        <Link to={{pathname:'/profile'}}>
                            <i className="fi-air-play"></i>Profile
                        </Link>
                    </li>
                    <li>
                        <a href="/agreement">
                            <i className="fi-paper"></i>Agreement
                        </a>
                    </li>
                    <li>
                        <Link to={{pathname:'/my-property'}}>
                            <i className="fi-box"></i>My Property
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/service'}}>
                            <i className="fi-tag "></i>Services                
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-payment'}}>
                            <i className="fi-briefcase "></i>Payments
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-report'}}>
                            <i className="fi-briefcase "></i>Reports
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-agent'}}>
                            <i className="fi-head "></i>Agent
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-tenant'}}>
                            <i className="fi-head "></i>Tenant
                        </Link>
                    </li>
                    <li className="has-submenu active" >
                        <Link to={{pathname:'/settings'}}>
                            <i className="fi-cog "></i>Settings
                        </Link>
                    </li>  
                </ul>
                );
            }
			else if(this.props.name==="notifications")
            {
            return( 
                <ul className="navigation-menu">
         
                <li>
                        <Link to={{pathname:'/profile'}}>
                            <i className="fi-air-play"></i>Profile
                        </Link>
                    </li>
                    <li>
                        <a href="/agreement">
                            <i className="fi-paper"></i>Agreement
                        </a>
                    </li>
                    <li>
                        <Link to={{pathname:'/my-property'}}>
                            <i className="fi-box"></i>My Property
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/service'}}>
                            <i className="fi-tag "></i>Services                
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-payment'}}>
                            <i className="fi-briefcase "></i>Payments
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-report'}}>
                            <i className="fi-briefcase "></i>Reports
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-agent'}}>
                            <i className="fi-head "></i>Agent
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-tenant'}}>
                            <i className="fi-head "></i>Tenant
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/settings'}}>
                            <i className="fi-cog "></i>Settings
                        </Link>
                    </li>  
                </ul>
                );
            }
			else if(this.props.name==="owner-plan")
            {
            return( 
                <ul className="navigation-menu">
         
                    <li>
                        <Link to={{pathname:'/profile'}}>
                            <i className="fi-air-play"></i>Profile
                        </Link>
                    </li>
                    <li>
                        <a href="/agreement">
                            <i className="fi-paper"></i>Agreement
                        </a>
                    </li>
                    <li>
                        <Link to={{pathname:'/my-property'}}>
                            <i className="fi-box"></i>My Property
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/service'}}>
                            <i className="fi-tag "></i>Services                
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-payment'}}>
                            <i className="fi-briefcase "></i>Payments
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-report'}}>
                            <i className="fi-briefcase "></i>Reports
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-agent'}}>
                            <i className="fi-head "></i>Agent
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-tenant'}}>
                            <i className="fi-head "></i>Tenant
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/settings'}}>
                            <i className="fi-cog "></i>Settings
                        </Link>
                    </li>  
                </ul>
                );
            }
			else if(this.props.name==="owner-upgrade")
            {
            return( 
                <ul className="navigation-menu">
         
                <li>
                        <Link to={{pathname:'/profile'}}>
                            <i className="fi-air-play"></i>Profile
                        </Link>
                    </li>
                    <li>
                        <a href="/agreement">
                            <i className="fi-paper"></i>Agreement
                        </a>
                    </li>
                    <li>
                        <Link to={{pathname:'/my-property'}}>
                            <i className="fi-box"></i>My Property
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/service'}}>
                            <i className="fi-tag "></i>Services                
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-payment'}}>
                            <i className="fi-briefcase "></i>Payments
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-report'}}>
                            <i className="fi-briefcase "></i>Reports
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-agent'}}>
                            <i className="fi-head "></i>Agent
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-tenant'}}>
                            <i className="fi-head "></i>Tenant
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/settings'}}>
                            <i className="fi-cog "></i>Settings
                        </Link>
                    </li>  
                </ul>
                );
            }
            else if(this.props.name==="owner-payment")
            {
            return( 
                <ul className="navigation-menu">
         
                <li>
                        <Link to={{pathname:'/profile'}}>
                            <i className="fi-air-play"></i>Profile
                        </Link>
                    </li>
                    <li>
                        <a href="/agreement">
                            <i className="fi-paper"></i>Agreement
                        </a>
                    </li>
                    <li>
                        <Link to={{pathname:'/my-property'}}>
                            <i className="fi-box"></i>My Property
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/service'}}>
                            <i className="fi-tag "></i>Services                
                        </Link>
                    </li>
                    <li className="has-submenu active">
                        <Link to={{pathname:'/owner-payment'}}>
                            <i className="fi-briefcase "></i>Payments
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-report'}}>
                            <i className="fi-briefcase "></i>Reports
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-agent'}}>
                            <i className="fi-head "></i>Agent
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/owner-tenant'}}>
                            <i className="fi-head "></i>Tenant
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/settings'}}>
                            <i className="fi-cog "></i>Settings
                        </Link>
                    </li>  
                </ul>
                );
            }
    }
    render(){        
        return(        
            <div id="navigation"> 
                {/*<!-- Navigation Menu-->*/}
               {this.GetItems(this)}
                {/*<!-- End navigation menu --> */}
            </div>
               
        );
    }
}