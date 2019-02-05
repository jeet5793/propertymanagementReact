import React from 'react'
import Header from '../Header/Header'
import img_not_available from '../../../images/img_not_available.png'
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import API_URL from "../../../app-config";
import swal from 'sweetalert';
import $ from 'jquery';

import ServiceRequested from './ServiceRequested';
import ServiceCreate from './ServiceCreate';
import ServiceResolved from './ServiceResolved';
import ServiceView from './ServiceView';
class Service extends React.Component {
    constructor(props) {
        super(props);
        this.sendRequest = this.sendRequest.bind(this)
        this.getSendedList = this.getSendedList.bind(this)
        this.getRequestedList = this.getRequestedList.bind(this)
        this.getResolvedList = this.getResolvedList.bind(this)
        this.state = {
            userInfo: props.userData,
            userData: Cookies.get('profile_data'),
            profileData: '',
            property_list: [],
            user_list: [],
            sendReq: {
                property_id: '',
                send_by: '',
                service_provider: '',
                service_msg: '',
                service_photo: ''
            },
            sendedList: [],
            resolvedList: [],
            requestedList: [],
            serviceDetail: [],
			value: '',
			 suggestions: [],
			 searchValue:'',
             searchInputData:[],
             errors:false
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.fileInput = React.createRef();
        this.onClickView = this.onClickView.bind(this);
		  this.getSuggestionValue = this.getSuggestionValue.bind(this);
		    this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
		this.onClickClear = this.onClickClear.bind(this);

    }
	getSuggestions() {
			 return this.state.propertyByUser.filter(lang =>
				 lang.label
			 );
	 };

	 getSuggestionValue(suggestion) {
		// console.log("onSuggestionSelected",suggestion)
		 this.setState({
			 searchValue: suggestion.label,
			 receive_user_id: suggestion.value
		 },()=>{
			  this.onSuggestionSelected();
		 })
		 return suggestion.label!="No Results Found"?suggestion.label:""
	 }
	 renderSuggestion(suggestion) {
		 return (
			 <span>
				 <i style={{marginRight:10}}  aria-hidden="true"></i>
				 {suggestion.label!="No Results Found"?suggestion.label:"No records found.!!!"}
			 </span>
		 )
	 }

	 onChange = (event, { newValue }) => {
	// console.log("onChange ",newValue)
		 this.setState({
			 value: newValue
		 },()=>{
			this.searchUser()
		 });
	 };

	 onSuggestionSelected = () => {
		var searchValue = $('.react-autosuggest__input').val()
		this.setState({
			searchInputData:searchValue
		})
	};

	onSuggestionsFetchRequested = () => {
		this.searchUser()
	};

	onSuggestionsClearRequested = () => {
		// console.log("onSuggestionsClearRequested ")
		this.setState({
			suggestions: []
		});
    };
    componentDidMount(){
        this.searchUser();
    }
	searchUser() {
        let sendTo = this.state.sendReq.sendto
        let errors = {};
        if(!sendTo){
            errors['sendto']="Please select atleast one from Send To.!!!";
            this.setState({errors:errors});
        }else{
            this.setState({errors:errors});
            var searchValue = $('.react-autosuggest__input').val()
            const session = JSON.parse(this.state.userData).session_id;  
            const assetsId = JSON.parse(this.state.userData).assets_id;  
            // console.log("selVal"+searchValue);
            const opts ={keyword:searchValue,session_id:session,assetsId:assetsId,sendTo:sendTo}
            // console.log("optsssss1111"+JSON.stringify(opts));
            fetch(`${API_URL}assetsapi/service_provider_search`, {
                method: 'POST',
            body: JSON.stringify(opts)
            })
            .then(res => res.json())
            .then(
                (result) => {
                // console.log("data22222: "+JSON.stringify(result))
                if (result.success) {
                
                    // console.log("ifffff: "+JSON.stringify(result))
                            this.setState({propertyByUser:result.search_userlist},()=>{
                                this.setState({
                                    suggestions: this.getSuggestions()
                                });
                            })
                        
                } else{
                    // console.log("elseee"+JSON.stringify(result))
                    this.setState({propertyByUser:[{"value":"","label":"No Results Found"}]},()=>{
                        this.setState({
                            suggestions: this.getSuggestions()
                        });
                    })
                }
                // console.log("autocompleteData"+JSON.stringify(this.state.propertyByUser))
                },
            (error) => {
                console.log('error',error)
            }
            ) 
        }
		
}
    onChangeHandler(e) {
        let formData = new FormData();
        const requestForm = this.state.sendReq;
        if (e.target.name == "property_id")
            requestForm.property_id = e.target.value
       if (e.target.name == "sendto"){
            requestForm.sendto = e.target.value;
            
       }
        if (e.target.name == "service_provider")
            requestForm.service_provider = e.target.value
        if (e.target.name == "service_msg")
            requestForm.service_msg = e.target.value
        if (e.target.name == "service_photo") {
            let file = this.fileInput.current.files[0]
            let reader = new FileReader();
            reader.onload = () => {

                let result = reader.result;
                requestForm.service_photo = result;
            };
            reader.onerror = () => {
                console.log('image read error')
            };
            // reader.readAsBinaryString(file);
            reader.readAsDataURL(file);
            formData.append('file', this.fileInput.current.files[0])
        }
        // requestForm.service_photo=e.target.files[0]

        requestForm.session_id = JSON.parse(this.state.userData).session_id;
        requestForm.send_by = JSON.parse(this.state.userData).assets_id;
        this.setState({ sendReq: requestForm });
        this.setState({ formData: formData });
        // console.log(this.state.sendReq)
    }
    sendRequest() {
        const opts = this.state.sendReq;
		opts.service_provider = this.state.receive_user_id;
		 // console.log(JSON.stringify(opts));
        if (!opts.property_id) {
            alert('Property should not be blank');
            return;
        }
        if (!opts.sendto) {
            alert('Select atleast one from Send To');
            return;
        }
        if (!opts.service_provider) {
            alert('Service Provider should not be blank');
            return;
        }
        if (!opts.service_msg) {
            alert('Message should not be blank');
            return;
        }


        // document.getElementById("FormCancel").click();
        $("#loaderDiv").show();

        fetch(`${API_URL}assetsapi/service_request_send/`, {
            method: 'post',
            body: JSON.stringify(opts)
        }).then((response) => {
            return response.json();
        }).then((data) => {
            // console.log('dataaaa:  ', data);
            if (data) {
                /*  swal("Assets Watch", data.msg);
                 //document.getElementsById("hidemodal").style.display = "none";
                 const m = document.getElementById('hidemodal');
                 m.style.display='none';
                 window.location.reload(); */
                $("#loaderDiv").hide();
                $("#actionType").val("No");
                $("#hiddenURL").val("service");
                $(".confirm-body").html(data.msg);
                $("#BlockUIConfirm").show();
				document.getElementById('ServiceView').reset();
				this.setState({
						value: ''
					});
                //alert(m);
            }

        }).catch((error) => {
            console.log('error: ', error);
        });
    }
    componentDidMount() {
        var $ = window.$
        $(".view-rqu").click(function () {

            $(".view-reslt").toggle();
        });
        // $('.datatable').DataTable();        
        // Buttons examples
        // var table = $('#datatable-buttons').DataTable({
        // lengthChange: false,
        // buttons: ['copy', 'excel', 'pdf', 'colvis']
        // });  
        this.getDropdownList();
		this.getRequestedList();
		this.getSendedList();
    }

    getDropdownList() {
        fetch(`${API_URL}assetsapi/service_request/${JSON.parse(this.state.userData).assets_id}/${JSON.parse(this.state.userData).session_id}/`, {
            method: 'get',
        })
            .then(res => res.json())
            .then(
                (result) => {
                    //console.log("data 2: "+JSON.stringify(profile))
                    //alert("data 2: "+JSON.stringify(result));
                    if (result.success) {
                        this.setState({ property_list: result.service.property_list });
                        this.setState({ user_list: result.service.users })

                    }
                    // console.log("property_list"+JSON.stringify(this.state.property_list))
                    // console.log("user_list"+JSON.stringify(this.state.user_list))
                },
                (error) => {
                    console.log('error')
                }
            )
    }
    getSendedList() {
		$("#loaderDiv").show();
        fetch(`${API_URL}assetsapi/service_send/${JSON.parse(this.state.userData).assets_id}/${JSON.parse(this.state.userData).session_id}/`, {
            method: 'get',
        })
            .then(res => res.json())
            .then(
                (result) => {
                    //console.log("data 2: "+JSON.stringify(profile))
                    //alert("data 2: "+JSON.stringify(result));
					$("#loaderDiv").hide();
                    if (result.success) {

                        this.setState({ sendedList: result.service });
                        // console.log(this.state.sendedList)

                    }
                    // console.log("property_list"+JSON.stringify(this.state.property_list))
                    // console.log("user_list"+JSON.stringify(this.state.user_list))
                },
                (error) => {
                    console.log('error')
                }
            )
    }
    getRequestedList() {
		this.getSendedList();
        var $ = window.$
        $(".view-reslt").hide();
		$("#loaderDiv").show();
        fetch(`${API_URL}assetsapi/service_requested/${JSON.parse(this.state.userData).assets_id}/${JSON.parse(this.state.userData).session_id}/`, {
            method: 'get',
        })
            .then(res => res.json())
            .then(
                (result) => {
                    //console.log("data 2: "+JSON.stringify(profile))
                    //alert("data 2: "+JSON.stringify(result));
					$("#loaderDiv").hide();
                    if (result.success) {
                        this.setState({ requestedList: result.service });
                        // console.log(this.state.requestedList)

                    }
                    // console.log("property_list"+JSON.stringify(this.state.property_list))
                    // console.log("user_list"+JSON.stringify(this.state.user_list))
                },
                (error) => {
                    console.log('error')
                }
            )
    }
    getResolvedList() {
        var $ = window.$
        $(".view-reslt").hide();
$("#loaderDiv").show();
        fetch(`${API_URL}assetsapi/service_resolve/${JSON.parse(this.state.userData).assets_id}/${JSON.parse(this.state.userData).session_id}/`, {
            method: 'get',
        })
            .then(res => res.json())
            .then(
                (result) => {
					$("#loaderDiv").hide();
                    //console.log("data 2: "+JSON.stringify(profile))
                    //alert("data 2: "+JSON.stringify(result));
                    if (result.success) {
						
                        this.setState({ resolvedList: result.service });
                        // console.log(this.state.resolvedList)

                    }
                    // console.log("property_list"+JSON.stringify(this.state.property_list))
                    // console.log("user_list"+JSON.stringify(this.state.user_list))
                },
                (error) => {
                    console.log('error')
                }
            )
    }
    onClickView(service_id) {
        const serviceid = service_id;
        var $ = window.$
        // $(".view-rqu").click(function(){

        // $(".view-reslt").toggle();
        // });
		$("#loaderDiv").show();
        fetch(`${API_URL}assetsapi/service_detail/${JSON.parse(this.state.userData).assets_id}/` + serviceid + `/${JSON.parse(this.state.userData).session_id}/`, {
            method: 'get',
        })
            .then(res => res.json())
            .then(
                (result) => {
                    //console.log("data 2: "+JSON.stringify(profile))
                    //alert("data 2: "+JSON.stringify(result));
					$("#loaderDiv").hide();
                    if (result.success) {

                        this.setState({ serviceDetail: result.service });
                        // console.log(this.state.serviceDetail)
                        /*  const elmnt = document.getElementsByClassName("view-reslt");
                         alert(elmnt);
                         elmnt.style.display='block'; */
                        $(".view-reslt").show();
                    }
                    // console.log("property_list"+JSON.stringify(this.state.property_list))
                    // console.log("user_list"+JSON.stringify(this.state.user_list))
                },
                (error) => {
                    console.log('error')
                }
            )

    }
    hideModel() {
        var $ = window.$;
        $(".modal-backdrop").hide();
    }

    changeTabs(id) {
		 if (id == "v-create") {
            $("#requestedTab").removeClass("active")
            $("#resolveTab").removeClass("active")
        }
        else if (id == "v-requested") {
            $("#createTab").removeClass("active")
            $("#resolveTab").removeClass("active")

        } 
      else if (id == "v-Resolve") {
            $("#createTab").removeClass("active")
            $("#requestedTab").removeClass("active")
        }
    }
	addDefaultSrc(ev){
	  ev.target.src = img_not_available;
	}
	changeTabs2(id) {
        if (id == "received") {
            $("#sentTab").removeClass("active")

        }
        else {
            $("#receivedTab").removeClass("active")
           
        }
    }
	onClickClear(){
		document.getElementById('ServiceView').reset();
				this.setState({
						value: ''
					});
	}
    render() {
        // if(this.props.owner===undefined)
        // window.location.href='http://'+window.location.host
        const propertyList = this.state.property_list;
        const userList = this.state.user_list;
		  const { value, suggestions,selectedOption,property_list,autocompleteData } = this.state;
		  const inputProps = {
				placeholder: 'Search',
				value,
				onChange: this.onChange
			};

        return (
            <div>
                {/* <Header logoutLink={this.logoutLink} 
            name="service" 
            first_name={this.props.owner.first_name} 
            last_name={this.props.owner.last_name} /> */}
                <div className="wrapper">
                    <div className="container">
                        <div className="page-title-box">
						{ /* <div className="btn-group pull-right">
                                <ol className="breadcrumb hide-phone p-0 m-0">
                                    <li><a href="#" data-toggle="modal" data-target="#send-request" className="btn btn-custom waves-light waves-effect w-md"><i className="fi-outbox"></i>&nbsp;&nbsp;Send Request</a></li>
                                </ol>
	</div> */}
                            <h4 className="page-title">Services</h4>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="card-box">
                                    <div className="tabs-vertical-env">
                                        <div className="row">
                                            <div className="col-md-2">
                                                <ul className="nav tabs-vertical">
													<li className="nav-item" onClick={this.changeTabs.bind(this, "v-create")}> <a id="createTab" href="#v-create" className="nav-link active" data-toggle="tab" aria-expanded="true" onClick={this.getSendedList}>Create</a> </li>
                                                    <li className="nav-item" onClick={this.changeTabs.bind(this, "v-requested")}> <a id="requestedTab" href="#v-requested" className="nav-link" data-toggle="tab" aria-expanded="false" onClick={this.getRequestedList}>Requested</a> </li>
                                                    <li className="nav-item" onClick={this.changeTabs.bind(this, "v-Resolve")}> <a id="resolveTab"  href="#v-Resolve" className="nav-link" data-toggle="tab" aria-expanded="false" onClick={this.getResolvedList}>Resolved</a> </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-10">
                                                <div className="tab-content">
                                                    
                                                    
                                                    <ServiceCreate 
														propertyList={propertyList} 
														inputProps={inputProps} 
														suggestions={suggestions} 
														renderSuggestion={this.renderSuggestion}  
														onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
														onSuggestionsClearRequested={this.onSuggestionsClearRequested} 
														getSuggestionValue={this.getSuggestionValue} 
														onSuggestionSelected={this.onSuggestionSelected}
														sendRequest={this.sendRequest}
														onChangeHandler={this.onChangeHandler}
														 fileInput={ this.fileInput}
                                                         onClickClear = {this.onClickClear}
                                                         errors = {this.state.errors}
														/>
													<ServiceRequested requestedList={this.state.requestedList} sendedList={this.state.sendedList} changeTabs2={this.changeTabs2} onClickView = {this.onClickView}/>
													<ServiceResolved resolvedList={this.state.resolvedList}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
								<ServiceView serviceDetail={this.state.serviceDetail}/>
                            </div>
                            
                        </div>
                        {/* <!-- end container -->  */}
                    </div>
                </div>
				
                <div>
                   
                </div>
            </div>
        );
    }
}
export default connect(state => ({ userData: state.userData, userProfile: state.userProfile }))(Service)