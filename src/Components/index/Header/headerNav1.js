import React from 'react'
// import vn from '../../../images/vn.png'
// import En1 from '../../../images/en.png'
// import fr from '../../../images/fr.png'
import API_URL from '../../../app-config';

import $ from 'jquery'
import LanguageSelect from './languageSelect'
export default class Headernav extends React.Component{
    constructor(props){
        super(props)
        this.owner=React.createRef(); 
        this.agent=React.createRef(); 
        this.tenants=React.createRef(); 
        this.LoginForm=React.createRef();
        this.activeSignIn=this.activeSignIn.bind(this);
        this.Login=this.Login.bind(this)
        this.state={
          email:'',
          password:'',
          flag:false
        }
       
        this.onChangeHandler=this.onChangeHandler.bind(this);
        this.activeSignIn=this.activeSignIn.bind(this)
        this.Login=this.Login.bind(this)
    }
    onChangeHandler(e){
          this.setState({[e.target.name]:e.target.value})
      }
      Login(){
                var opts=this.state;
                var $=window.$;
                //{'email':'testnow1@yopmail.com','password':'test123'}
                fetch(`${API_URL}assetsapi/login/`, {
                method: 'post',
                body: JSON.stringify(opts)
            }).then(function(response) {
                return response.json();
            }).then(function(data) {
                if(data.msg==="Invalid Email or Password")
                {
                alert(data.msg)
                $(".login-open").fadeToggle();
                }
                else{
                // console.log(data);
                localStorage.setItem('myData', data);
                sessionStorage.setItem('myData', data);
                //window.location.pathname='/Owner'
                window.location.href='http://assetsowner.s3-website.us-east-2.amazonaws.com/'
                // window.location.href="http://localhost:3001/?data=Hai"
                }
            });
      }
      activeSignIn(actionId){
        if(actionId==="agent")
        {
            if(!this.state.flag){
                // document.getElementById('loginDiv').setAttribute('style','left:22% !important')
                this.LoginForm.current.setAttribute('style','left:22% !important')
                $(".login-open").fadeToggle();
                this.setState({flag:true})
            }
            else{
                $(".login-open").hide();
                this.setState({flag:false})
            }
             
        }
        else if(actionId==="tenant")
        {
            if(!this.state.flag1)
            {                
                this.LoginForm.current.setAttribute('style','left:37% !important')
                $(".login-open").fadeToggle();
                this.setState({flag1:true})
            }
            else{
                $(".login-open").hide();
                this.setState({flag1:false})
            }
        }
        else{

            if(!this.state.flag2)
            {                
                this.LoginForm.current.setAttribute('style','left:8% !important')
                $(".login-open").fadeToggle();
                this.setState({flag2:true})
            }
            else{
                $(".login-open").hide();
                this.setState({flag2:false})
            }
        }
      }
      coponentDidMount(){
       
      }
    render(){

        return(
            <div className="typ-2 col-lg-6 col-md-5 col-sm-4 col-xs-4 tz-res-none ownr">
        <div className="pull-right">
        <a className= "typeli login" id="owner"   onClick={()=>this.activeSignIn("owner")}>Owners<span></span></a>
                <div ref={this.LoginForm} id="loginDiv" className="login-1 text-left  login-open">
                <form className="form-signin">
                    <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" name="username" placeholder="Email Address"/>
                    </div>
                    <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Password"/>
                    </div>
                    <div className="remember-checkbox">
                    <input type="checkbox" name="one" id="one" />
                    <label className="remember" for="one">Remember me</label>
                    </div>
                    <a className="button"> <span>Login</span> </a> <span>-or-</span> <a href="registration" className="button button-grey"> <span>Register</span> </a> <a href="">Forgot password ?</a>
                </form>
                <div className="login-with"> <span>Login With: </span> <a className="fb">
                 <i className="fa fa-facebook"></i></a> 
                 <a className="twitter"><i className="fa fa-twitter"></i></a> 
                 <a className="google-plus"><i className="fa fa-google-plus"></i></a> 
                 <a className="linkedin"><i className="fa fa-linkedin"></i></a> </div>
                </div>
                <a className="typeli login" id="agent" onClick={()=>this.activeSignIn("agent")}>Agents<span></span></a> 
                <a className="typeli login" id="tenant" onClick={()=>this.activeSignIn("tenant")}>Tenants<span></span></a> 
        </div>
        <div className="tz-header-top-right">
            <div className="tz-header-wpml pull-right">
            <LanguageSelect />
            </div>
        </div>
        </div>
    );
    }
}