import React from 'react';
import img1 from '../../../images/en.png'
import img2 from '../../../images/vn.png';
import img3 from '../../../images/fr.png';
import { Link } from 'react-router-dom'
//import '../../../css/main.css'

export default class LanguageSelect extends React.Component{
  render(){
    return(
 <div id="lang_sel" style={{marginTop:'-8%'}}>
  <ul>
    <li> <Link className="lang_sel_sel icl-en" to="#" style={{color:'#404040'}}> English 
    <img className="iclflag" width="18" height="12" alt="en" src={img1} /> </Link>
      <ul>
        <li className="icl-vi"> <Link to="#"> Viet Nam <img className="iclflag" title="Viet Nam" width="18" height="12" alt="ru" src={img2} /> </Link> </li>
        <li className="icl-fr"> <Link to="#"> French <img className="iclflag" title="French" width="18" height="12" alt="fr" src={img3} /> </Link> </li>
      </ul>
    </li>
  </ul>
</div>
      );
  }
}