import React from 'react'
import API_URL from '../../../app-config';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.submitContactUsFor = this.submitContactUsFor.bind(this)
  }
  onChangeHandler(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  submitContactUsFor() {
    var opts = this.state
    if (this.state.name && this.state.email && this.state.phone && this.state.message && this.state.subject) {
      fetch(`${API_URL}assetsapi/contact`, {
        method: 'post',

        body: JSON.stringify(opts)
      }).then((response) => {
        return response.json();
      }).then((data) => {
        alert('Successfully Submitted');
        console.log(data);
        this.setState({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
      });
    }
  }
  render() {
    return (
      <div className="wpb_wrapper">
        <div role="form" className="wpcf7" id="wpcf7-f322-p304-o1" lang="en-US" dir="ltr">
          <div className="screen-reader-response"></div>
          <form className="wpcf7-form" novalidate>
            <div style={{ display: 'none' }}>
              <input type="hidden" name="_wpcf7" value="322" />
              <input type="hidden" name="_wpcf7_version" value="5.0.1" />
              <input type="hidden" name="_wpcf7_locale" value="en_US" />
              <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f322-p304-o1" />
              <input type="hidden" name="_wpcf7_container_post" value="304" />
            </div>
            <div className="tz-contactform row">
              <div className="col-md-6"> <span className="wpcf7-form-control-wrap your-name">
                <input type="text" name="name" value={this.state.name} onChange={this.onChangeHandler} placeholder="Enter your name" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" />
              </span> </div>
              <div className="col-md-6"> <span className="wpcf7-form-control-wrap your-mail">
                <input type="text" name="email" value={this.state.email} onChange={this.onChangeHandler} placeholder="Enter your mail" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" />
              </span> </div>
              <div className="col-md-6"> <span className="wpcf7-form-control-wrap subject">
                <input type="text" name="subject" value={this.state.subject} onChange={this.onChangeHandler} placeholder="Subject" size="40" className="wpcf7-form-control wpcf7-text" aria-invalid="false" />
              </span> </div>
              <div className="col-md-6"> <span className="wpcf7-form-control-wrap phone">
                <input type="text" name="phone" value={this.state.phone} onChange={this.onChangeHandler} placeholder="Phone" size="40" className="wpcf7-form-control wpcf7-text" aria-invalid="false" />
              </span> </div>
              <div className="col-md-12"> <span className="wpcf7-form-control-wrap your-message">
                <textarea name="message" value={this.state.message} onChange={this.onChangeHandler} cols="40" rows="10" className="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Message"></textarea>
              </span> </div>
              <div className="tz-submit col-md-12">
                <input onClick={this.submitContactUsFor} type="button" value="SUBMIT MESSAGE" className="wpcf7-form-control wpcf7-submit" />
              </div>
            </div>
            <div className="wpcf7-response-output wpcf7-display-none"></div>
          </form>
        </div>
      </div>

    );
  }
}