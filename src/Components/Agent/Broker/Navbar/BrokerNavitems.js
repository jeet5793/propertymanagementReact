import React, {Component} from 'react'
import Link from 'react-router-dom/Link';


export default class BrokerNavitems extends Component{
    GetItems(){
        if(this.props.name==="broker-profile" || this.props.name==="agent-broker")
            {
            return( <ul className="navigation-menu">            
                
            <li className="has-submenu active">
                <Link to={{pathname:'/broker-profile'}}>
                    <i className="fi-air-play"></i>Profile
                </Link>
            </li>
            <li>
                <Link to={{pathname:'/broker-agreement'}}>
                    <i className="fi-paper"></i>Agreement
                </Link>
            </li>
            <li>
                <Link to={{pathname:'/broker-property'}}>
                    <i className="fi-box"></i>My Property
                </Link>
            </li>
            <li>
                <Link to={{pathname:'/broker-service'}}>
                    <i className="fi-tag "></i>Services                
                </Link>
            </li>
            <li>
                <Link to={{pathname:'/broker-payment'}}>
                    <i className="fi-briefcase "></i>Payments
                </Link>
            </li>
			<li>
                    <Link to={{pathname:'/broker-report'}}>
                        <i className="fi-cog "></i>Reports
                    </Link>
                </li> 
            <li>
                <Link to={{pathname:'/broker-owner'}}>
                    <i className="fi-head "></i>Owner
                </Link>
            </li>
            <li>
                <Link to={{pathname:'/broker-tenant'}}>
                    <i className="fi-head "></i>Tenant
                </Link>
            </li>
            <li>
                <Link to={{pathname:'/broker-settings'}}>
                    <i className="fi-cog "></i>Settings
                </Link>
            </li>                                                
            </ul>);
            }
        else if(this.props.name==="broker-agreement")
            {
            return( 
                <ul className="navigation-menu">            
                
                <li>
                    <Link to={{pathname:'/broker-profile'}}>
                        <i className="fi-air-play"></i>Profile
                    </Link>
                </li>
                <li className="has-submenu active">
                    <Link to={{pathname:'/broker-agreement'}}>
                        <i className="fi-paper"></i>Agreement
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-property'}}>
                        <i className="fi-box"></i>My Property
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-service'}}>
                        <i className="fi-tag "></i>Services                
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-payment'}}>
                        <i className="fi-briefcase "></i>Payments
                    </Link>
                </li>
				<li>
                    <Link to={{pathname:'/broker-report'}}>
                        <i className="fi-cog "></i>Reports
                    </Link>
                </li> 
                <li>
                    <Link to={{pathname:'/broker-owner'}}>
                        <i className="fi-head "></i>Owner
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-tenant'}}>
                        <i className="fi-head "></i>Tenant
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-settings'}}>
                        <i className="fi-cog "></i>Settings
                    </Link>
                </li>                                                
                </ul>
            );
            }
        else if(this.props.name==="broker-property")
            {
            return( 
                <ul className="navigation-menu">            
                
                <li>
                    <Link to={{pathname:'/broker-profile'}}>
                        <i className="fi-air-play"></i>Profile
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-agreement'}}>
                        <i className="fi-paper"></i>Agreement
                    </Link>
                </li>
                <li>
                    <Link className="has-submenu active" to={{pathname:'/broker-property'}}>
                        <i className="fi-box"></i>My Property
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-service'}}>
                        <i className="fi-tag "></i>Services                
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-payment'}}>
                        <i className="fi-briefcase "></i>Payments
                    </Link>
                </li>
				<li>
                    <Link to={{pathname:'/broker-report'}}>
                        <i className="fi-cog "></i>Reports
                    </Link>
                </li> 
                <li>
                    <Link to={{pathname:'/broker-owner'}}>
                        <i className="fi-head "></i>Owner
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-tenant'}}>
                        <i className="fi-head "></i>Tenant
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-settings'}}>
                        <i className="fi-cog "></i>Settings
                    </Link>
                </li>                                                
                </ul>
            );
            }
        else if(this.props.name==="broker-service")
            {
            return( 
                <ul className="navigation-menu">            
                
                <li>
                    <Link to={{pathname:'/broker-profile'}}>
                        <i className="fi-air-play"></i>Profile
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-agreement'}}>
                        <i className="fi-paper"></i>Agreement
                    </Link>
                </li>
                <li>
                    <Link  to={{pathname:'/broker-property'}}>
                        <i className="fi-box"></i>My Property
                    </Link>
                </li>
                <li className="has-submenu active">
                    <Link to={{pathname:'/broker-service'}}>
                        <i className="fi-tag "></i>Services                
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-payment'}}>
                        <i className="fi-briefcase "></i>Payments
                    </Link>
                </li>
				<li>
                    <Link to={{pathname:'/broker-report'}}>
                        <i className="fi-cog "></i>Reports
                    </Link>
                </li> 
                <li>
                    <Link to={{pathname:'/broker-owner'}}>
                        <i className="fi-head "></i>Owner
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-tenant'}}>
                        <i className="fi-head "></i>Tenant
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-settings'}}>
                        <i className="fi-cog "></i>Settings
                    </Link>
                </li>                                                
                </ul>
                );
            }
        else if(this.props.name==="broker-payment")
            {
            return( 
                <ul className="navigation-menu">            
                
                <li>
                    <Link to={{pathname:'/broker-profile'}}>
                        <i className="fi-air-play"></i>Profile
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-agreement'}}>
                        <i className="fi-paper"></i>Agreement
                    </Link>
                </li>
                <li>
                    <Link  to={{pathname:'/broker-property'}}>
                        <i className="fi-box"></i>My Property
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-service'}}>
                        <i className="fi-tag "></i>Services                
                    </Link>
                </li>
                <li className="has-submenu active">
                    <Link to={{pathname:'/broker-payment'}}>
                        <i className="fi-briefcase "></i>Payments
                    </Link>
                </li>
				<li>
                    <Link to={{pathname:'/broker-report'}}>
                        <i className="fi-cog "></i>Reports
                    </Link>
                </li> 
                <li>
                    <Link to={{pathname:'/broker-owner'}}>
                        <i className="fi-head "></i>Owner
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-tenant'}}>
                        <i className="fi-head "></i>Tenant
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-settings'}}>
                        <i className="fi-cog "></i>Settings
                    </Link>
                </li>                                                
                </ul>
                );
            }
        else if(this.props.name==="broker-owner")
            {
            return( 
                <ul className="navigation-menu">            
                
                <li>
                    <Link to={{pathname:'/broker-profile'}}>
                        <i className="fi-air-play"></i>Profile
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-agreement'}}>
                        <i className="fi-paper"></i>Agreement
                    </Link>
                </li>
                <li>
                    <Link  to={{pathname:'/broker-property'}}>
                        <i className="fi-box"></i>My Property
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-service'}}>
                        <i className="fi-tag "></i>Services                
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-payment'}}>
                        <i className="fi-briefcase "></i>Payments
                    </Link>
                </li>
				<li>
                    <Link to={{pathname:'/broker-report'}}>
                        <i className="fi-cog "></i>Reports
                    </Link>
                </li> 
                <li className="has-submenu active">
                    <Link to={{pathname:'/broker-owner'}}>
                        <i className="fi-head "></i>Owner
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-tenant'}}>
                        <i className="fi-head "></i>Tenant
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-settings'}}>
                        <i className="fi-cog "></i>Settings
                    </Link>
                </li>                                                
                </ul>
                );
            }
        else if(this.props.name==="broker-tenant")
            {
            return( 
                <ul className="navigation-menu">            
                
                <li>
                    <Link to={{pathname:'/broker-profile'}}>
                        <i className="fi-air-play"></i>Profile
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-agreement'}}>
                        <i className="fi-paper"></i>Agreement
                    </Link>
                </li>
                <li>
                    <Link  to={{pathname:'/broker-property'}}>
                        <i className="fi-box"></i>My Property
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-service'}}>
                        <i className="fi-tag "></i>Services                
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-payment'}}>
                        <i className="fi-briefcase "></i>Payments
                    </Link>
                </li>
				<li>
                    <Link to={{pathname:'/broker-report'}}>
                        <i className="fi-cog "></i>Reports
                    </Link>
                </li> 
                <li>
                    <Link to={{pathname:'/broker-owner'}}>
                        <i className="fi-head "></i>Owner
                    </Link>
                </li>
                <li className="has-submenu active">
                    <Link to={{pathname:'/broker-tenant'}}>
                        <i className="fi-head "></i>Tenant
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-settings'}}>
                        <i className="fi-cog "></i>Settings
                    </Link>
                </li>                                                
                </ul>
                );
            }
			else if(this.props.name==="broker-report")
            {
            return( 
                <ul className="navigation-menu">            
                
                <li>
                    <Link to={{pathname:'/broker-profile'}}>
                        <i className="fi-air-play"></i>Profile
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-agreement'}}>
                        <i className="fi-paper"></i>Agreement
                    </Link>
                </li>
                <li>
                    <Link  to={{pathname:'/broker-property'}}>
                        <i className="fi-box"></i>My Property
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-service'}}>
                        <i className="fi-tag "></i>Services                
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-payment'}}>
                        <i className="fi-briefcase "></i>Payments
                    </Link>
                </li>
				 <li className="has-submenu active">
                    <Link to={{pathname:'/broker-report'}}>
                        <i className="fi-cog "></i>Reports
                    </Link>
                </li> 
                <li>
                    <Link to={{pathname:'/broker-owner'}}>
                        <i className="fi-head "></i>Owner
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-tenant'}}>
                        <i className="fi-head "></i>Tenant
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-settings'}}>
                        <i className="fi-cog "></i>Settings
                    </Link>
                </li>                                                
                </ul>
                );
            }
        else if(this.props.name==="broker-settings")
            {
            return( 
                <ul className="navigation-menu">            
                
                <li>
                    <Link to={{pathname:'/broker-profile'}}>
                        <i className="fi-air-play"></i>Profile
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-agreement'}}>
                        <i className="fi-paper"></i>Agreement
                    </Link>
                </li>
                <li>
                    <Link  to={{pathname:'/broker-property'}}>
                        <i className="fi-box"></i>My Property
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-service'}}>
                        <i className="fi-tag "></i>Services                
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-payment'}}>
                        <i className="fi-briefcase "></i>Payments
                    </Link>
                </li>
				<li>
                    <Link to={{pathname:'/broker-report'}}>
                        <i className="fi-cog "></i>Reports
                    </Link>
                </li> 
                <li>
                    <Link to={{pathname:'/broker-owner'}}>
                        <i className="fi-head "></i>Owner
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-tenant'}}>
                        <i className="fi-head "></i>Tenant
                    </Link>
                </li>
                <li className="has-submenu active">
                    <Link to={{pathname:'/broker-settings'}}>
                        <i className="fi-cog "></i>Settings
                    </Link>
                </li>                                                
                </ul>
                );
            }
			else if(this.props.name==="broker-plan")
            {
            return( 
                <ul className="navigation-menu">
         
                <li>
                    <Link to={{pathname:'/broker-profile'}}>
                        <i className="fi-air-play"></i>Profile
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-agreement'}}>
                        <i className="fi-paper"></i>Agreement
                    </Link>
                </li>
                <li>
                    <Link  to={{pathname:'/broker-property'}}>
                        <i className="fi-box"></i>My Property
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-service'}}>
                        <i className="fi-tag "></i>Services                
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-payment'}}>
                        <i className="fi-briefcase "></i>Payments
                    </Link>
                </li>
				<li>
                    <Link to={{pathname:'/broker-report'}}>
                        <i className="fi-cog "></i>Reports
                    </Link>
                </li> 
                <li>
                    <Link to={{pathname:'/broker-owner'}}>
                        <i className="fi-head "></i>Owner
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-tenant'}}>
                        <i className="fi-head "></i>Tenant
                    </Link>
                </li>
				<li>
                        <Link to={{pathname:'/broker-settings'}}>
                            <i className="fi-cog "></i>Settings
                        </Link>
                    </li>  
                </ul>
                );
            }
			else if(this.props.name==="broker-upgrade")
            {
            return( 
                <ul className="navigation-menu">
         
                <li>
                    <Link to={{pathname:'/broker-profile'}}>
                        <i className="fi-air-play"></i>Profile
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-agreement'}}>
                        <i className="fi-paper"></i>Agreement
                    </Link>
                </li>
                <li>
                    <Link  to={{pathname:'/broker-property'}}>
                        <i className="fi-box"></i>My Property
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-service'}}>
                        <i className="fi-tag "></i>Services                
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-payment'}}>
                        <i className="fi-briefcase "></i>Payments
                    </Link>
                </li>
				<li>
                    <Link to={{pathname:'/broker-report'}}>
                        <i className="fi-cog "></i>Reports
                    </Link>
                </li> 
                <li>
                    <Link to={{pathname:'/broker-owner'}}>
                        <i className="fi-head "></i>Owner
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-tenant'}}>
                        <i className="fi-head "></i>Tenant
                    </Link>
                </li>
				<li>
                        <Link to={{pathname:'/broker-settings'}}>
                            <i className="fi-cog "></i>Settings
                        </Link>
                    </li>
                </ul>
                );
            }
			else if(this.props.name==="broker-notifications")
            {
            return( 
                <ul className="navigation-menu">
         
                <li>
                    <Link to={{pathname:'/broker-profile'}}>
                        <i className="fi-air-play"></i>Profile
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-agreement'}}>
                        <i className="fi-paper"></i>Agreement
                    </Link>
                </li>
                <li>
                    <Link  to={{pathname:'/broker-property'}}>
                        <i className="fi-box"></i>My Property
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-service'}}>
                        <i className="fi-tag "></i>Services                
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-payment'}}>
                        <i className="fi-briefcase "></i>Payments
                    </Link>
                </li>
				<li>
                    <Link to={{pathname:'/broker-report'}}>
                        <i className="fi-cog "></i>Reports
                    </Link>
                </li> 
                <li>
                    <Link to={{pathname:'/broker-owner'}}>
                        <i className="fi-head "></i>Owner
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/broker-tenant'}}>
                        <i className="fi-head "></i>Tenant
                    </Link>
                </li>
				<li>
                        <Link to={{pathname:'/broker-settings'}}>
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