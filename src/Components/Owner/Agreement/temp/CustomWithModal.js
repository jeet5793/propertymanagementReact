import React from 'react';
import $ from 'jquery'
// import {loadFile} from '../external'

export default class Customwithmodal extends React.Component{
    componentDidMount(){
        // $('.sigPad').signaturePad();
        $(document).on('click', '.sigDiv', function () {            
            $("#placeId").val(this.id);            
        });
        $("#imgInp").change(function() {            
            this.readURL(this);	                
        });
    }
    canvasToImg() {        
        var placeId = $("#placeId").val();        
        var name = $("#name").val();        
        if(name!="")
        {
          $("#"+placeId).html("<div class='typed' style='display: block; font-size: 36.25px;'>"+name+"</div>");
          
          $("#name").val("");
          $("#typedPadId").html("");          
          document.getElementById("closeButtonId").click();
        }
        else
        {
            var canvas = document.getElementById("signaturePadId");
            var ctx=canvas.getContext("2d");
            var url = canvas.toDataURL();
            var newImg = document.createElement("img"); // create img tag
            newImg.src = url;  
            newImg.style="width:297px;height:97px;";            
            $("#"+placeId).html(newImg);            
            document.getElementById("closeButtonId").click();
        }	    
    }
    readURL(input) {          
        var placeId = $("#placeId").val();          
        if (input.files && input.files[0]) {
            $("#"+placeId).html("<img id='sigImg' src='#'style='width:297px;height:97px;'/>");          
            var reader = new FileReader();  
            reader.onload = function(e) {
            $('#sigImg').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);          
            document.getElementById("closeButtonId").click();
        }
    }
    render(){
        return(
            <div id="custom-width-modal" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="custom-width-modalLabel" aria-hidden="true" style={{display: 'none'}}>
            <div className="modal-dialog" style={{width:'55%'}}>			
            <div className="modal-content">				
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 className="modal-title" id="custom-width-modalLabel">Make Signature</h4>
              </div>		
                <div className="modal-body">          
                  <form method="post" action="" className="sigPad form-horizontal">            
                    <div className="form-group">
                      <label for="name">Print your name</label>            
                      <input type="text" name="name" id="name" className="name form-control" />            
                      <p className="typeItDesc">Review your signature</p>
                      <p className="drawItDesc">Draw your signature</p>
                    </div>            
                    <div className="form-group">              
                      <ul className="sigNav">
                        <li className="typeIt"><a href="#type-it" className="current">Type It</a></li>
                        <li className="drawIt"><a href="#draw-it" >Draw It</a></li>
                        <li className="upload">  
                          <div className="fileupload fileupload-new m-0" data-provides="fileupload">
                            <button type="button" className="btn btn-secondary btn-file slt-sig">
                              <span className="fileupload-new"><i className="fa fa-paper-clip"></i> Select file</span>
                              <input type="file" className="btn-secondary"  name='imgInp' id='imgInp' />
                            </button>
                          </div>
                        </li>
                        <li className="clearButton"><a href="#clear">Clear</a></li>
                      </ul>          
                      <div className="sig sigWrapper">
                        <div className="typed" id="typedPadId"></div>
                        <canvas id="signaturePadId" className="pad" width="450" height="65"></canvas>
                        <input id="drawId" type="hidden" name="output" className="output form-control" />
                        <input id="placeId" value="" type="hidden" name="placeId" />
                      </div>              
                    </div>
                    <div className="form-group">
                      <label><input type="checkbox" /> I agree with the signature which i create/draw/uploaded for the agreement.</label>
                    </div>            
                  </form>        
                </div>		
                <div className="modal-footer">
                  <button type="button" id="closeButtonId" lass="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary waves-effect waves-light" onClick={this.canvasToImg.bind(this)}>Import</button>
                </div>										
                    </div>
                </div>
            </div>
          );
    }
}