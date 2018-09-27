import React from 'react'
import underConstruction from '../../images/Owner/underConstruction.jpg'
// import Header from './Header/Header'
export default class Underconstruction extends React.Component{
    render(){
        return(
            <div>
           
            <div style={{textAlign:'center',marginTop:'10%'}}>
                <img src={underConstruction} alt="Under Construction" />
            </div>
            </div>
        );
    }
}