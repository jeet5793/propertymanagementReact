import React from 'react';
import {Link} from 'react-router-dom'
import Header from '../Header/Header';
import API_URL from '../../../app-config';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import img_not_available from '../../../images/img_not_available.png'
import $ from 'jquery';



export default class MyDocuments extends React.Component{
	
	render(){

		return(
			<div>
                <Header name="agreement"  first_name={window.localStorage.getItem('firstName')} 
                last_name={window.localStorage.getItem('firstName')} />
                <div className="wrapper">
					<div className="container"> 
						<h1 style={{textAlign:"center", textTransform:"uppercase"}}>Comming Soon...</h1>
						
					</div>
				</div>
			</div>
			);
	}
}