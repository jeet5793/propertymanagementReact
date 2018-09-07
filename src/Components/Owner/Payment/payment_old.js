import React from 'react'
import avatar_1 from '../../../images/Owner/users/avatar-1.jpg'
import Header from '../Header/Header'
export default class Payment extends React.Component{

  constructor(props) {
    super(props);

    this.state = {};

    this.userInfo = this.userInfo.bind(this);
  }
    componentDidMount(){
      this.userInfo();
      // if ( this.props.owner) {
      //   console.log('yyyyayyyyy')
      //   var $=window.$;
      //   $(".view-rqu").click(function(){
      //       $(".view-reslt").toggle();
      //   });

      //   $('.datatable').DataTable();

      //   //Buttons examples
      //   $('#datatable-buttons').DataTable({
      //       lengthChange: false,
      //       buttons: ['copy', 'excel', 'pdf', 'colvis']
      //   });

      // }
    }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.owner && this.props.owner) {
  //     console.og('yayayay22')
  //   }
  // }

    componentDidUpdate(prevProps) {
      if (!prevProps.owner && this.props.owner) {
        var $=window.$;
        $(".view-rqu").click(function(){
            $(".view-reslt").toggle();
        });

        $('.datatable').DataTable();

        //Buttons examples
        $('#datatable-buttons').DataTable({
            lengthChange: false,
            buttons: ['copy', 'excel', 'pdf', 'colvis']
        }); 

      }
    }

userInfo() {
  var id=this.props.location.search.replace('?Id=','');
  fetch("https://devstg.assetswatch.com:444/assetsapi/profile/"+id)
        .then(res => res.json())
        .then(
          (result) => {
            // debugger;
            this.props.updateInfo(result.profile);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
}
render(){
  // if(this.props.owner)
    return(
    <div>
    {/* <Header logoutLink={this.logoutLink} 
    name="payment" 
    first_name={this.props.owner.first_name} 
    last_name={this.props.owner.last_name} /> */}
        <div style={{marginTop:'3%',marginBottom:'3%'}} className="wrapper">
<div className="container">
  <div className="page-title-box">
    {/* <!--<div className="btn-group pull-right">
      <ol className="breadcrumb hide-phone p-0 m-0">
        <li><a  data-toggle="modal" data-target="#send-request" className="btn btn-custom waves-light waves-effect w-md"><i className="fi-outbox"></i>&nbsp;&nbsp;Send Request</a></li>
      </ol>
    </div>--> */}
    <h4 className="page-title">Payment</h4>
  </div>
  <div className="row">
    <div className="col-12">
      <div className="card-box">
        <div className="tabs-vertical-env">
          <div className="row">
            <div className="col-md-2">
              <ul className="nav tabs-vertical">
                <li className="nav-item"> <a href="#v-received" className="nav-link active" data-toggle="tab" aria-expanded="false">Received</a> </li>
                <li className="nav-item"> <a href="#v-pay" className="nav-link" data-toggle="tab" aria-expanded="true">Pay</a> </li>
              </ul>
            </div>
            <div className="col-md-10">
              <div className="tab-content">
                <div className="tab-pane active" id="v-received">
                  <div className=" table-responsive">
                    <table id="" className="table table-bordered datatable">
                      <thead>
                        <tr>
                          <th>Property Title</th>
                          <th>Tenant Name</th>
                          <th>Amount</th>
                          <th>Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="tbl-text-overflow">Property Title Property Title Property Title</td>
                          <td>Tiger Nixon</td>
                          <td><i className="mdi mdi-currency-usd text-warning"></i> 366 </td>
                          <td>10/05/2018</td>
                          <td className="text-center"><a  className="table-action-btn view-rqu"><i className="mdi mdi-printer"></i></a></td>
                        </tr>
                        <tr>
                          <td className="tbl-text-overflow">Garrett Winters</td>
                          <td>Garrett Winters</td>
                          <td><i className="mdi mdi-currency-usd text-warning"></i> 366 </td>
                          <td>10/05/2018</td>
                          <td className="text-center"><a  className="table-action-btn view-rqu"><i className="mdi mdi-printer"></i></a></td>
                        </tr>
                        <tr>
                          <td className="tbl-text-overflow">Ashton Cox</td>
                          <td>Ashton Cox</td>
                          <td><i className="mdi mdi-currency-usd text-warning"></i> 366 </td>
                          <td>10/05/2018</td>
                          <td className="text-center"><a  className="table-action-btn view-rqu"><i className="mdi mdi-printer"></i></a></td>
                        </tr>
                        <tr>
                          <td className="tbl-text-overflow">Cedric Kelly</td>
                          <td>Cedric Kelly</td>
                          <td><i className="mdi mdi-currency-usd text-warning"></i> 366 </td>
                          <td>10/05/2018</td>
                          <td className="text-center"><a  className="table-action-btn view-rqu"><i className="mdi mdi-printer"></i></a></td>
                        </tr>
                        <tr>
                          <td className="tbl-text-overflow">Airi Satou</td>
                          <td>Airi Satou</td>
                          <td><i className="mdi mdi-currency-usd text-warning"></i> 366 </td>
                          <td>10/05/2018</td>
                          <td className="text-center"><a  className="table-action-btn view-rqu"><i className="mdi mdi-printer"></i></a></td>
                        </tr>
                        <tr>
                          <td className="tbl-text-overflow">Brielle Williamson</td>
                          <td>Brielle Williamson</td>
                          <td><i className="mdi mdi-currency-usd text-warning"></i> 366 </td>
                          <td>10/05/2018</td>
                          <td className="text-center"><a  className="table-action-btn view-rqu"><i className="mdi mdi-printer"></i></a></td>
                        </tr>
                        <tr>
                          <td className="tbl-text-overflow">Herrod Chandler</td>
                          <td>Herrod Chandler</td>
                          <td><i className="mdi mdi-currency-usd text-warning"></i> 366 </td>
                          <td>10/05/2018</td>
                          <td className="text-center"><a  className="table-action-btn view-rqu"><i className="mdi mdi-printer"></i></a></td>
                        </tr>
                        <tr>
                          <td className="tbl-text-overflow">Rhona Davidson</td>
                          <td>Rhona Davidson</td>
                          <td><i className="mdi mdi-currency-usd text-warning"></i> 366 </td>
                          <td>10/05/2018</td>
                          <td className="text-center"><a  className="table-action-btn view-rqu"><i className="mdi mdi-printer"></i></a></td>
                        </tr>
                        <tr>
                          <td className="tbl-text-overflow">Colleen Hurst</td>
                          <td>Colleen Hurst</td>
                          <td><i className="mdi mdi-currency-usd text-warning"></i> 366 </td>
                          <td>10/05/2018</td>
                          <td className="text-center"><a  className="table-action-btn view-rqu"><i className="mdi mdi-printer"></i></a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="tab-pane" id="v-pay">
                 <div className=" table-responsive">
                    <table id="" className="table table-bordered datatable">
                      <thead>
                        <tr>
                          <th>Property Title</th>
                          <th>Name</th>
                          <th>Date</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="tbl-text-overflow">Property Title Property Title Property Title</td>
                          <td>Tiger Nixon</td>
                          <td>10/05/2018</td>
                          <td>System Architect</td>
                          <td className="text-center"><a  className="table-action-btn view-rqu"><i className="mdi mdi-printer"></i></a></td>
                        </tr>
                        <tr>
                          <td className="tbl-text-overflow">Garrett Winters</td>
                          <td>Garrett Winters</td>
                          <td>10/05/2018</td>
                          <td>Accountant</td>
                          <td className="text-center"><a  className="table-action-btn view-rqu"><i className="mdi mdi-printer"></i></a></td>
                        </tr>
                        <tr>
                          <td className="tbl-text-overflow">Ashton Cox</td>
                          <td>Ashton Cox</td>
                          <td>10/05/2018</td>
                          <td>Junior Technical Author</td>
                          <td className="text-center"><a  className="table-action-btn view-rqu"><i className="mdi mdi-printer"></i></a></td>
                        </tr>
                        <tr>
                          <td className="tbl-text-overflow">Cedric Kelly</td>
                          <td>Cedric Kelly</td>
                          <td>10/05/2018</td>
                          <td>Senior Javascript Developer</td>
                          <td className="text-center"><a  className="table-action-btn view-rqu"><i className="mdi mdi-printer"></i></a></td>
                        </tr>
                        <tr>
                          <td className="tbl-text-overflow">Airi Satou</td>
                          <td>Airi Satou</td>
                          <td>10/05/2018</td>
                          <td>Accountant</td>
                          <td className="text-center"><a  className="table-action-btn view-rqu"><i className="mdi mdi-printer"></i></a></td>
                        </tr>
                        <tr>
                          <td className="tbl-text-overflow">Brielle Williamson</td>
                          <td>Brielle Williamson</td>
                          <td>10/05/2018</td>
                          <td>Integration Specialist</td>
                          <td className="text-center"><a  className="table-action-btn view-rqu"><i className="mdi mdi-printer"></i></a></td>
                        </tr>
                        <tr>
                          <td className="tbl-text-overflow">Herrod Chandler</td>
                          <td>Herrod Chandler</td>
                          <td>10/05/2018</td>
                          <td>Sales Assistant</td>
                          <td className="text-center"><a  className="table-action-btn view-rqu"><i className="mdi mdi-printer"></i></a></td>
                        </tr>
                        <tr>
                          <td className="tbl-text-overflow">Rhona Davidson</td>
                          <td>Rhona Davidson</td>
                          <td>10/05/2018</td>
                          <td>Integration Specialist</td>
                          <td className="text-center"><a  className="table-action-btn view-rqu"><i className="mdi mdi-printer"></i></a></td>
                        </tr>
                        <tr>
                          <td className="tbl-text-overflow">Colleen Hurst</td>
                          <td>Colleen Hurst</td>
                          <td>10/05/2018</td>
                          <td>Javascript Developer</td>
                          <td className="text-center"><a  className="table-action-btn view-rqu"><i className="mdi mdi-printer"></i></a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- end row --> */}
    <div className="view-reslt" style={{display: 'none'}}>
      <div className="row">
        <div className="col-12">
          <div className="card-box">
            <h4 className="m-t-0 header-title">View</h4>
            <div className="search-item">
                                        <div className="media">
                                            <img className="d-flex mr-3 rounded-circle" alt="avatar" src={avatar_1} alt="Generic placeholder image" height="54" />
                                            <div className="media-body">
                                                <h5 className="media-heading">
                                                    <a  className="text-dark">Chadengle</a>
                                                </h5>
                                                <p className="font-13">
                                                    <b>Status:</b>
                                                    <span>Pending</span>
                                                </p>
                                                   <p className="font-13">
                                                    <b>Requested Date:</b>
                                                    <span>09-05-2018</span>
                                                </p><p className="font-13">
                                                    <b>Resolve Date:</b>
                                                    <span>10-05-2018</span>
                                                </p>
                                                <p className="m-b-0 font-13">
                                                    <b>Discription:</b>
                                                    <br />
                                                    <span className="text-muted">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- end row -->  */}
    
  </div>
  {/* <!-- end container -->  */}
</div>
</div>
<div id="send-request" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: 'none'}}>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
        <h4 className="modal-title">Send Request</h4>
      </div>
      <div className="modal-body">
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label for="field-1" className="control-label">Select </label>
              <select className="form-control">
                <option></option>
                <option></option>
                <option></option>
                <option></option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group no-margin">
              <label for="field-7" className="control-label">Description</label>
              <textarea className="form-control" id="field-7" placeholder=""></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-success waves-effect waves-light">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
    // )
    // else{
    //   return null;
    //   // window.location.href='http://'+window.location.host
   // }
    )}
}