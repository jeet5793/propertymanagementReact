import React from 'react'
import img_not_available from '../../../images/img_not_available.png'
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import API_URL from "../../../app-config";
import Autosuggest from 'react-autosuggest';
class ServiceCreate extends React.Component {
    constructor(props) {
        super(props);
        
        }
      
    render() {
        
        return (
			<div className="tab-pane active" id="v-create">
			<form id="ServiceView">
									<div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label for="property_id" className="control-label">Property<span className="required" /> </label>
                                                <select className="form-control" name="property_id" onChange={this.props.onChangeHandler}>
                                                    <option>Please Select</option>
                                                    {this.props.propertyList && this.props.propertyList.map((option, key) => (<option key={key.property_id} value={option.property_id}>{option.property_name}</option>))}

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group no-margin">
                                                <label for="service_provider" className="control-label">Name<span className="required" /></label>
												{ /* <select className="form-control" name="service_provider" onChange={this.onChangeHandler}>
                                                    <option>Please Select</option>
                                                    {userList.map((option, key) => (<option key={key.assets_id} value={option.profile_id}>{option.name}</option>))}

												</select> */}
												<Autosuggest className="form-control"
												  suggestions={this.props.suggestions}
												  onSuggestionsFetchRequested={this.props.onSuggestionsFetchRequested.bind(this)}
												  onSuggestionsClearRequested={this.props.onSuggestionsClearRequested.bind(this)}
												  getSuggestionValue={this.props.getSuggestionValue.bind(this)}
												  renderSuggestion={this.props.renderSuggestion.bind(this)}
												  onSuggestionSelected={this.props.onSuggestionSelected.bind(this)}
												  inputProps={this.props.inputProps}
												  alwaysRenderSuggestions={true}
												/>	
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group no-margin">
                                                <label for="service_msg" className="control-label">Description<span className="required" /></label>
                                                <textarea className="form-control" id="field-7" placeholder="" name="service_msg" onChange={this.props.onChangeHandler}></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="file" name="service_photo" onChange={this.onChangeHandler} id="u" placeholder="" ref={this.props.fileInput} />
                                            </div>
                                        </div>
                                    </div>
									<div className="">
										<button type="reset"  className="btn btn-secondary waves-effect" data-dismiss="modal" onClick={this.props.onClickClear}>Clear</button>&nbsp;
										<button type="button" className="btn btn-success waves-effect waves-light" onClick={this.props.sendRequest}>Save changes</button>
									</div>
									</form>
                                </div>
        );
    }
}
export default connect(state => ({ userData: state.userData, userProfile: state.userProfile }))(ServiceCreate)