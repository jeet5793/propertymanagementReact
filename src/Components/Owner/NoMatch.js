import React from 'react'
import NoImg from '../../images/Owner/404.jpg'
// '../../../images/Owner/404-bk_2.jpg'
export default class Nomatch extends React.Component{
    render(){
        return(<div style={{marginTop:'10%',textAlign:'center'}}>
            <img src={NoImg} alt="404 Error"/>
        </div>);
    }
}