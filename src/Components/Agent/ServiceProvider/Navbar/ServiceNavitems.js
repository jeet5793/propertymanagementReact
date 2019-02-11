import React, {Component} from 'react'
import Link from 'react-router-dom/Link';


export default class ServiceNavitems extends Component{
    GetItems(){
        if(this.props.name==="agent-serviceprovider")
            {
            return( <ul className="navigation-menu">            
                
            <li className="has-submenu active">
                <Link to={{pathname:'/agent-serviceprovider'}}>
                    <i className="fi-air-play"></i>Profile
                </Link>
            </li>
            <li>
                <Link to={{pathname:'/agentprovider-services'}}>
                    <i className="fi-paper"></i>Service
                </Link>
            </li>
            {/* <li>
                <Link to={{pathname:'/agentprovider-users'}}>
                    <i className="fi-box"></i>Users
                </Link>
            </li> */}
            <li>
                <Link to={{pathname:'/agentprovider-settings'}}>
                    <i className="fi-cog "></i>Settings
                </Link>
            </li>                                                
            </ul>);
            }
        else if(this.props.name==="agentprovider-services")
            {
            return( 
                <ul className="navigation-menu">            
                
            <li >
                <Link to={{pathname:'/agent-serviceprovider'}}>
                    <i className="fi-air-play"></i>Profile
                </Link>
            </li>
            <li className="has-submenu active">
                <Link to={{pathname:'/agentprovider-services'}}>
                    <i className="fi-paper"></i>Service
                </Link>
            </li>
            {/* <li>
                <Link to={{pathname:'/agentprovider-users'}}>
                    <i className="fi-box"></i>Users
                </Link>
            </li> */}
            <li>
                <Link to={{pathname:'/agentprovider-settings'}}>
                    <i className="fi-cog "></i>Settings
                </Link>
            </li>                                                
            </ul>
            );
            }
        else if(this.props.name==="agentprovider-users")
            {
            return( 
                <ul className="navigation-menu">            
                
                <li >
                    <Link to={{pathname:'/agent-serviceprovider'}}>
                        <i className="fi-air-play"></i>Profile
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/agentprovider-services'}}>
                        <i className="fi-paper"></i>Service
                    </Link>
                </li>
                {/* <li className="has-submenu active">
                    <Link to={{pathname:'/agentprovider-users'}}>
                        <i className="fi-box"></i>Users
                    </Link>
                </li> */}
                <li>
                    <Link to={{pathname:'/agentprovider-settings'}}>
                        <i className="fi-cog "></i>Settings
                    </Link>
                </li>                                                
                </ul>
            );
            }
        else if(this.props.name==="agentprovider-settings")
            {
            return( 
                <ul className="navigation-menu">            
                
                <li>
                    <Link to={{pathname:'/agent-serviceprovider'}}>
                        <i className="fi-air-play"></i>Profile
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/agentprovider-services'}}>
                        <i className="fi-paper"></i>Service
                    </Link>
                </li>
               {/*  <li>
                    <Link to={{pathname:'/agentprovider-users'}}>
                        <i className="fi-box"></i>Users
                    </Link>
                </li> */}
                <li  className="has-submenu active">
                    <Link to={{pathname:'/agentprovider-settings'}}>
                        <i className="fi-cog "></i>Settings
                    </Link>
                </li>                                                
                </ul>
                );
            }
			else if(this.props.name==="agentprovider-notifications")
            {
            return( 
                <ul className="navigation-menu">            
                
                <li>
                    <Link to={{pathname:'/agent-serviceprovider'}}>
                        <i className="fi-air-play"></i>Profile
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/agentprovider-services'}}>
                        <i className="fi-paper"></i>Service
                    </Link>
                </li>
                {/* <li>
                    <Link to={{pathname:'/agentprovider-users'}}>
                        <i className="fi-box"></i>Users
                    </Link>
                </li> */}
                <li>
                    <Link to={{pathname:'/agentprovider-settings'}}>
                        <i className="fi-cog "></i>Settings
                    </Link>
                </li>                                                
                </ul>
                );
            }
			else if(this.props.name==="agentprovider-plan")
            {
            return( 
                <ul className="navigation-menu">            
                
                <li>
                    <Link to={{pathname:'/agent-serviceprovider'}}>
                        <i className="fi-air-play"></i>Profile
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/agentprovider-services'}}>
                        <i className="fi-paper"></i>Service
                    </Link>
                </li>
              {/*   <li>
                    <Link to={{pathname:'/agentprovider-users'}}>
                        <i className="fi-box"></i>Users
                    </Link>
                </li> */}
                <li>
                    <Link to={{pathname:'/agentprovider-settings'}}>
                        <i className="fi-cog "></i>Settings
                    </Link>
                </li>                                                
                </ul>
                );
            }
			else if(this.props.name==="agentprovider-upgrade")
            {
            return( 
                <ul className="navigation-menu">            
                
                <li>
                    <Link to={{pathname:'/agent-serviceprovider'}}>
                        <i className="fi-air-play"></i>Profile
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:'/agentprovider-services'}}>
                        <i className="fi-paper"></i>Service
                    </Link>
                </li>
              {/*   <li>
                    <Link to={{pathname:'/agentprovider-users'}}>
                        <i className="fi-box"></i>Users
                    </Link>
                </li> */}
                <li>
                    <Link to={{pathname:'/agentprovider-settings'}}>
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