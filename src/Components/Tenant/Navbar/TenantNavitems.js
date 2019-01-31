import React, {Component} from 'react'
import Link from 'react-router-dom/Link';


export default class TenantNavitems extends Component{
    GetItems(){
        if(this.props.name==="tenant" || this.props.name==="tenant-profile" || this.props.name==="tenant-profile-edit")
            {
            return( 
                <ul className="navigation-menu">
              
                    <li className="has-submenu active">
                    <Link to={{pathname:'/tenant-profile'}}>
                        <i className="fi-air-play"></i>Profile
                    </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/tenant-agreement'}}>
                            <i className="fi-paper"></i>Agreement
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/tenant-myproperty'}}>
                            <i className="fi-box"></i>My Property
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/tenant-service'}}>
                            <i className="fi-tag "></i>Services                
                        </Link>
                    </li>
					<li>
                        <Link to={{pathname:'/tenant-report'}}>
                            <i className="fi-cog "></i>Reports
                        </Link>
                    </li>  
                    <li>
                        <Link to={{pathname:'/tenant-owner'}}>
                            <i className="fi-head "></i>Owner
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/tenant-agent'}}>
                            <i className="fi-head "></i>Agent
                        </Link>
                    </li>
                   
                    <li>
                        <Link to={{pathname:'/tenant-settings'}}>
                            <i className="fi-cog "></i>Settings
                        </Link>
                    </li>  
                </ul>
            
            );
            }
        else if(this.props.name==="tenant-agreement" || this.props.name==="tenant-partner-sign")
            {
            return( 
                <ul className="navigation-menu">
              
                <li>
                        <Link to={{pathname:'/tenant-profile'}}>
                            <i className="fi-air-play"></i>Profile
                        </Link>
                    </li>
                    <li  className="has-submenu active">
                        <Link to={{pathname:'/tenant-agreement'}}>
                            <i className="fi-paper"></i>Agreement
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/tenant-myproperty'}}>
                            <i className="fi-box"></i>My Property
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/tenant-service'}}>
                            <i className="fi-tag "></i>Services                
                        </Link>
                    </li>
					<li>
                        <Link to={{pathname:'/tenant-report'}}>
                            <i className="fi-cog "></i>Reports
                        </Link>
                    </li>  
                    <li>
                        <Link to={{pathname:'/tenant-owner'}}>
                            <i className="fi-head "></i>Owner
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/tenant-agent'}}>
                            <i className="fi-head "></i>Agent
                        </Link>
                    </li>
                   
                    <li>
                        <Link to={{pathname:'/tenant-settings'}}>
                            <i className="fi-cog "></i>Settings
                        </Link>
                    </li>  
                </ul>
            );
            }
        else if(this.props.name==="tenant-myproperty" || this.props.name==="tenant-deal-payment")
            {
            return( 
                <ul className="navigation-menu">
              
                <li>
                        <Link to={{pathname:'/tenant-profile'}}>
                            <i className="fi-air-play"></i>Profile
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/tenant-agreement'}}>
                            <i className="fi-paper"></i>Agreement
                        </Link>
                    </li>
                    <li  className="has-submenu active">
                        <Link to={{pathname:'/tenant-myproperty'}}>
                            <i className="fi-box"></i>My Property
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/tenant-service'}}>
                            <i className="fi-tag "></i>Services                
                        </Link>
                    </li>
					<li>
                        <Link to={{pathname:'/tenant-report'}}>
                            <i className="fi-cog "></i>Reports
                        </Link>
                    </li>  
                    <li>
                        <Link to={{pathname:'/tenant-owner'}}>
                            <i className="fi-head "></i>Owner
                        </Link>
                    </li>
                    <li >
                        <Link to={{pathname:'/tenant-agent'}}>
                            <i className="fi-head "></i>Agent
                        </Link>
                    </li>
                   
                    <li>
                        <Link to={{pathname:'/tenant-settings'}}>
                            <i className="fi-cog "></i>Settings
                        </Link>
                    </li>  
                </ul>
            );
            }
        else if(this.props.name==="tenant-service")
            {
            return( 
                <ul className="navigation-menu">
              
                <li>
                        <Link to={{pathname:'/tenant-profile'}}>
                            <i className="fi-air-play"></i>Profile
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/tenant-agreement'}}>
                            <i className="fi-paper"></i>Agreement
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/tenant-myproperty'}}>
                            <i className="fi-box"></i>My Property
                        </Link>
                    </li>
                    <li className="has-submenu active">
                        <Link to={{pathname:'/tenant-service'}}>
                            <i className="fi-tag "></i>Services                
                        </Link>
                    </li>
					<li>
                        <Link to={{pathname:'/tenant-report'}}>
                            <i className="fi-cog "></i>Reports
                        </Link>
                    </li>  
                    <li>
                        <Link to={{pathname:'/tenant-owner'}}>
                            <i className="fi-head "></i>Owner
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/tenant-agent'}}>
                            <i className="fi-head "></i>Agent
                        </Link>
                    </li>
                   
                    <li>
                        <Link to={{pathname:'/tenant-settings'}}>
                            <i className="fi-cog "></i>Settings
                        </Link>
                    </li>  
                </ul>
                );
            }
        
        else if(this.props.name==="tenant-agent" || this.props.name==="tenant-agent-profile")
            {
            return( 
                <ul className="navigation-menu">
              
                <li>
                        <Link to={{pathname:'/tenant-profile'}}>
                            <i className="fi-air-play"></i>Profile
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/tenant-agreement'}}>
                            <i className="fi-paper"></i>Agreement
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/tenant-myproperty'}}>
                            <i className="fi-box"></i>My Property
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/tenant-service'}}>
                            <i className="fi-tag "></i>Services                
                        </Link>
                    </li>
					<li>
                        <Link to={{pathname:'/tenant-report'}}>
                            <i className="fi-cog "></i>Reports
                        </Link>
                    </li>  
                    <li>
                        <Link to={{pathname:'/tenant-owner'}}>
                            <i className="fi-head "></i>Owner
                        </Link>
                    </li>
                    <li  className="has-submenu active">
                        <Link to={{pathname:'/tenant-agent'}}>
                            <i className="fi-head "></i>Agent
                        </Link>
                    </li>
                   
                    <li >
                        <Link to={{pathname:'/tenant-settings'}}>
                            <i className="fi-cog "></i>Settings
                        </Link>
                    </li>  
                </ul>
                );
            }
        else if(this.props.name==="tenant-owner" || this.props.name==="tenant-owner-profile")
            {
            return( 
                <ul className="navigation-menu">
              
                <li>
                        <Link to={{pathname:'/tenant-profile'}}>
                            <i className="fi-air-play"></i>Profile
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/tenant-agreement'}}>
                            <i className="fi-paper"></i>Agreement
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/tenant-myproperty'}}>
                            <i className="fi-box"></i>My Property
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/tenant-service'}}>
                            <i className="fi-tag "></i>Services                
                        </Link>
                    </li>
					<li>
                        <Link to={{pathname:'/tenant-report'}}>
                            <i className="fi-cog "></i>Reports
                        </Link>
                    </li>  
                    <li  className="has-submenu active">
                        <Link to={{pathname:'/tenant-owner'}}>
                            <i className="fi-head "></i>Owner
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/tenant-agent'}}>
                            <i className="fi-head "></i>Agent
                        </Link>
                    </li>
                   
                    <li>
                        <Link to={{pathname:'/tenant-settings'}}>
                            <i className="fi-cog "></i>Settings
                        </Link>
                    </li>  
                </ul>
                );
            }
			else if(this.props.name==="tenant-report" || this.props.name==="tenant-report-table?property" || this.props.name==="tenant-report-table?Transaction" || this.props.name==="tenant-report-table")
            {
            return( 
                <ul className="navigation-menu">
              
                <li>
                        <Link to={{pathname:'/tenant-profile'}}>
                            <i className="fi-air-play"></i>Profile
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/tenant-agreement'}}>
                            <i className="fi-paper"></i>Agreement
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/tenant-myproperty'}}>
                            <i className="fi-box"></i>My Property
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/tenant-service'}}>
                            <i className="fi-tag "></i>Services                
                        </Link>
                    </li>
					<li className="has-submenu active">
                        <Link to={{pathname:'/tenant-report'}}>
                            <i className="fi-cog "></i>Reports
                        </Link>
                    </li>  
                    <li>
                        <Link to={{pathname:'/tenant-owner'}}>
                            <i className="fi-head "></i>Owner
                        </Link>
                    </li>
                    <li >
                        <Link to={{pathname:'/tenant-agent'}}>
                            <i className="fi-head "></i>Agent
                        </Link>
                    </li>
                   
                    <li>
                        <Link to={{pathname:'/tenant-settings'}}>
                            <i className="fi-cog "></i>Settings
                        </Link>
                    </li>  
                </ul>
                );
            }
        else if(this.props.name==="tenant-settings" || this.props.name==="tenant-change-password")
            {
            return( 
                <ul className="navigation-menu">
              
                <li>
                        <Link to={{pathname:'/tenant-profile'}}>
                            <i className="fi-air-play"></i>Profile
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/tenant-agreement'}}>
                            <i className="fi-paper"></i>Agreement
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/tenant-myproperty'}}>
                            <i className="fi-box"></i>My Property
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/tenant-service'}}>
                            <i className="fi-tag "></i>Services                
                        </Link>
                    </li>
					<li>
                        <Link to={{pathname:'/tenant-report'}}>
                            <i className="fi-cog "></i>Reports
                        </Link>
                    </li>  
                    <li>
                        <Link to={{pathname:'/tenant-owner'}}>
                            <i className="fi-head "></i>Owner
                        </Link>
                    </li>
                    <li >
                        <Link to={{pathname:'/tenant-agent'}}>
                            <i className="fi-head "></i>Agent
                        </Link>
                    </li>
                   
                    <li className="has-submenu active">
                        <Link to={{pathname:'/tenant-settings'}}>
                            <i className="fi-cog "></i>Settings
                        </Link>
                    </li>  
                </ul>
                );
            }
			else if(this.props.name==="tenant-plan")
            {
            return( 
                <ul className="navigation-menu">
              
                <li>
                        <Link to={{pathname:'/tenant-profile'}}>
                            <i className="fi-air-play"></i>Profile
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/tenant-agreement'}}>
                            <i className="fi-paper"></i>Agreement
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/tenant-myproperty'}}>
                            <i className="fi-box"></i>My Property
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/tenant-service'}}>
                            <i className="fi-tag "></i>Services                
                        </Link>
                    </li>
					<li>
                        <Link to={{pathname:'/tenant-report'}}>
                            <i className="fi-cog "></i>Reports
                        </Link>
                    </li>  
                    <li>
                        <Link to={{pathname:'/tenant-owner'}}>
                            <i className="fi-head "></i>Owner
                        </Link>
                    </li>
                    <li >
                        <Link to={{pathname:'/tenant-agent'}}>
                            <i className="fi-head "></i>Agent
                        </Link>
                    </li>
                   
                    <li>
                        <Link to={{pathname:'/tenant-settings'}}>
                            <i className="fi-cog "></i>Settings
                        </Link>
                    </li>  
                </ul>
                );
            }
			else if(this.props.name==="tenant-notifications")
            {
            return( 
                <ul className="navigation-menu">
              
                <li>
                        <Link to={{pathname:'/tenant-profile'}}>
                            <i className="fi-air-play"></i>Profile
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/tenant-agreement'}}>
                            <i className="fi-paper"></i>Agreement
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/tenant-myproperty'}}>
                            <i className="fi-box"></i>My Property
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/tenant-service'}}>
                            <i className="fi-tag "></i>Services                
                        </Link>
                    </li>
					<li>
                        <Link to={{pathname:'/tenant-report'}}>
                            <i className="fi-cog "></i>Reports
                        </Link>
                    </li>  
                    <li>
                        <Link to={{pathname:'/tenant-owner'}}>
                            <i className="fi-head "></i>Owner
                        </Link>
                    </li>
                    <li >
                        <Link to={{pathname:'/tenant-agent'}}>
                            <i className="fi-head "></i>Agent
                        </Link>
                    </li>
                   
                    <li>
                        <Link to={{pathname:'/tenant-settings'}}>
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