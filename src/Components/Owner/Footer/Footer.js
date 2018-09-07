import React, {Component} from 'react'

export default class Footer extends Component{
    render(){
        return(
            <footer className="footer" style={
              {
                position: 'fixed',
                left: '0',
                bottom: '0',
                width: '100%',
          }}>
            <div className="container">
              <div className="row">
                <div className="col-12 text-center"> © 2018 Assets Watch. All Rights Reserved </div>
              </div>
            </div>
          </footer>
        );
    }
}