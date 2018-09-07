import React from 'react'
import API_URL from '../../../app-config';

export default class SendMSG extends React.Component{
  constructor(props){
    super(props);
    this.state={};
    this.sendAgreement = this.sendAgreement.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
    onChangeHandler(e) {
        if (e.target.name === 'property_id') {
            this.setState({property_id: e.target.value})
        } else if (e.target.name === 'sender_id') {
            this.setState({sender_id: e.target.value})
        } else if (e.target.name === 'user_id') {
            this.setState({user_id: e.target.value})
        }else if (e.target.name === 'description') {
            this.setState({description: e.target.value})
        }

    }

    sendAgreement() {
      let { property_id, sender_id, user_id, description } = this.state;
      if (!property_id || !sender_id || !user_id || !description) {
        return;
      }
      let data = {
          sender_id: sender_id,
          receiver_id: user_id,
          agreement_id: this.props.agreement.agreement_id,
          property_id: property_id,
          description: description,
          session_id: this.props.session_id,
      };

        fetch(`${API_URL}assetsapi/send_agreement`, {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(
                (data) => {
                    //console.log("data 2: "+JSON.stringify(result.profile))
                    if (data.success) {
                        alert('send_agreement ', JSON.stringify(data));
                        // console.log(this.state.propertyByUser);
                        window.$('.close').click()
                    }
                    //console.log("set user data"+JSON.stringify(this.state.profileData))
                },
                (error) => {
                  alert('Error sending data')
                    console.log('error')
                }
            );

    }
    render(){
        return(
            <div id="send-msg" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: 'none'}}>
            <div className="modal-dialog">
              <div className="modal-content">      
                <div className="modal-header">        
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                  <h4 className="modal-title">Agreement Title </h4>      
                </div>      
                <div className="modal-body">        
                  <div className="row">
                      { this.props.userProperty && this.props.userProperty.length > 0 &&
                        <div className="col-md-12">
                          <div className="form-group">
                            <label for="nme" className="control-label">Property</label>
                            <select  className="form-control" name="property_id" onChange={this.onChangeHandler}>
                              <option>Please Select</option>
                                {this.props.userProperty.map(prp => <option value={prp.id}>{prp.title}</option>)}
                            </select>
                          </div>
                        </div>
                      }
                    <div className="col-md-12">
                  <div className="form-group">
                    <label for="nme" className="control-label">Send To</label>
                    <select  className="form-control" name="sender_id" onChange={this.onChangeHandler}>
                      <option>Please Select</option>
                      <option value="1">Owner</option>
                      <option value="2">Agent</option>
                      <option value="3">Tenant</option>
                    </select>
                  </div>
                </div>          
                <div className="col-md-12">
                  <div className="form-group">
                    <label for="nme" className="control-label">User List</label>
                    <select  className="form-control" name="user_id" onChange={this.onChangeHandler}>
                      <option>Please Select</option>
                        {
                            this.props.users && this.props.users.length > 0 &&
                            this.props.users.map(user => <option value={user.asset_id}>{user.first_name}</option>)
                        }
                    </select>
                  </div>
                </div>		  
              </div>        
                  <div className="row">
                <div className="col-md-12">
                  <div className="form-group no-margin">
                    <label for="field-7" className="control-label">Description</label>
                    <textarea className="form-control" name="description" onChange={this.onChangeHandler} id="field-7" placeholder=""></textarea>
                  </div>
                </div>
              </div>		
              </div>     
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-success waves-effect waves-light" onClick={this.sendAgreement}>Send</button>
              </div>  
              </div>
            </div>
          </div>
        );
    }
}