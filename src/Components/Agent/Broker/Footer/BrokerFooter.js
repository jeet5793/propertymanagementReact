import React, {Component} from 'react'
import $ from 'jquery'
import APP_VERSION from "../../../../app-version";
export default class BrokerFooter extends Component{
	submitAlert()
	{		
		var actionType = $("#actionType").val();
		if(actionType=="No")
		{
			$("#BlockUIConfirm").hide();
		}
		else if(actionType=="Yes")
		{
			var url = $("#hiddenURL").val();
			//$("#BlockUIConfirm").hide();
			 window.location.href= url;
			// HIT URL 
		}
		else{
			var compId = $("#hiddenURL").val();
			$('#'+compId)[0].click();
			$("#BlockUIConfirm").hide();
		}
	}
    render(){
        return(
           <footer className="footer">
            <div className="container">
              <div className="row">
                <div className="col-12 text-center"> © {new Date().getFullYear()} Assets Watch. All Rights Reserved. ( {APP_VERSION} ) </div>
              </div>
            </div>
			<div id="loaderDiv" className="preloader">

				<div className="cssload-loader">Assets Watch</div>

			</div>
			
			
			{/* ALERT DIV*/}
			<div id="BlockUIConfirm" className="BlockUIConfirm" style={{display:"none"}}>
				<div className="blockui-mask"></div>
				<div className="RowDialogBody">
					<div className="confirm-header row-dialog-hdr-success">
						Response Message
					</div>
					<div className="confirm-body">
						
					</div>
					<div className="confirm-btn-panel text-center">
						<div className="btn-holder">
							<input type="hidden" id="hiddenURL" />
							<input type="hidden" id="actionType" />
							<input type="button" className="row-dialog-btn btn btn-success" value="Ok" onClick={this.submitAlert} />
							{/*<!-- <input type="button" className="row-dialog-btn btn btn-naked" value="No, Cancel" onclick="$('#BlockUIConfirm').hide();" /> -->*/}
						</div>
					</div>
				</div>
			</div>
			
			
			
			
          </footer>
        );
    }
}