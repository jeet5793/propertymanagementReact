import React from 'react';
import $ from 'jquery'
import {loadFile} from '../../js/external'

export default class Customwithmodal extends React.Component{
    constructor(props) {
        super(props);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.imgInp = React.createRef();
    }
    componentDidMount(){
		
		
		
		
        // $('.sigPad').signaturePad();
       
	   $(document).on('click', '.sigDiv', function () {
            // console.log('this ', this);
			
            $("#placeId").val(this.id);            
        });
		
        $("#imgInp").change(function() {            
            // this.readURL(this);
        });
		
		$(".typeIt").click(function() {            
            $(".textBox").show();
        });
		
		$(".drawIt").click(function() {            
            $(".textBox").hide();
        });
		
        $('.sigNav').click(function (e) {
           var href = e.target.href;
           if(href) {
               if (href.indexOf('type-it') > -1) {
                   $('a[href="#type-it"]').addClass('current');
                   $('a[href="#draw-it"]').removeClass('current');
                   $('.clearButton').css('display', 'none');
                   $('.sigWrapper').removeClass('current');
                   $('#typedPadId').css('display', 'block');
               } else if (href.indexOf('draw-it') > -1) {
                   $('a[href="#type-it"]').removeClass('current');
                   $('a[href="#draw-it"]').addClass('current');
                   $('.clearButton').css('display', 'list-item');
                   $('.sigWrapper').addClass('current');
                   $('#typedPadId').css('display', 'none');
               }
           }

        });

        $(document).ready(function () {
            $.getScript('assets/signature/numeric-1.2.6.min.js', function () {
                // console.log('assets/signature/numeric-1.2.6.min.js ')
            });
            $.getScript('assets/signature/bezier.js', function () {
                // console.log('assets/signature/bezier.js ')
            });
            $.getScript('assets/signature/jquery.signaturepad.js', function () {
                // console.log('assets/signature/jquery.signaturepad.js ');
                var int = setInterval(function () {
                    if (window.$('.sigPad').signaturePad){
                        // console.log('interval ');
                        window.$('.sigPad').signaturePad();
                        clearInterval(int);
                    }
                },1000)
            });
            $.getScript('assets/signature/json2.min.js', function () {
                // console.log('assets/signature/json2.min.js ')
            });
            loadFile("assets/signature/jquery.signaturepad.css", "css");
        });
		
		
		
		
		 // TEXT BOX EDITOR SCRIPT -->

		   $(document).on('change', '.inner', function () {
				
				var compId = this.id;
				
				if(compId.indexOf("textId") != -1)
				{
					var value = $("#"+compId).val();
					var seqId = compId.replace('textId','');
					
					//alert(value);
					
					if(value=='')
					{
						$("#textDivId"+seqId).html("<input class='inner' type='text' id='textId"+seqId+"' value='' style='width:300px;height:22px;border:1px solid #eee;' placeholder='Enter text value'>");
					}
					else
					{
						$("#textDivId"+seqId).html("<span class='textClass' id='"+seqId+"'><u><b>&nbsp; "+value+" &nbsp;</b></u></span>")
					}					
				}
				
			});
			
			$(document).on('click', '.textClass', function () {
				
				var seqId = this.id;
				
				var text = $("#"+seqId).text();
				
				$("#textDivId"+seqId).html("<input class='inner' type='text' id='textId"+seqId+"' value='"+text+"' style='width:300px;height:22px;border:1px solid #eee;' placeholder='Enter text value'>");
			});
			
	// END OF TEXT BOX EDITOR SCRIPT -->
	 
	
	
	// DATE BOX EDITOR SCRIPT -->

		   $(document).on('change', '.datepickerWithoutTime', function () {
				
				var compId = this.id;
				
				if(compId.indexOf("dateId") != -1)
				{
					var value = $("#"+compId).val();
					var seqId = compId.replace('dateId','');
					
					if(value=='')
					{
						$("#dateDivId"+seqId).html("<input class='datepickerWithoutTime' type='text' id='dateId"+seqId+"' value='' style='width:120px;height:22px;border:1px solid #eee;' placeholder='MM/DD/YYYY' />");
					}
					else
					{
						$("#dateDivId"+seqId).html("<span class='dateClass' id='"+seqId+"'><b>&nbsp; "+value+" &nbsp;</b></span>")
					}
				}
				
			});
			
			$(document).on('click', '.dateClass', function () {
				
				var seqId = this.id;
				
				var text = $("#"+seqId).text();
				
				$("#dateDivId"+seqId).html("<input class='datepickerWithoutTime' type='text' id='dateId"+seqId+"' value='"+text+"' style='width:120px;height:22px;border:1px solid #eee;' placeholder='MM/DD/YYYY' />");
			});
			
	 // END OF DATE BOX EDITOR SCRIPT -->
	 	
	  
    }
     onChangeHandler(e) {
        var placeId = $("#placeId").val();
        let file = this.imgInp.current.files[0];
        if (!file) {
            return;
        }
        let reader = new FileReader();
        reader.onload = function() {
            console.log(reader.result);
            var image = $($("#"+placeId).html("<img id='sigImg' src='"+reader.result+"' style='width:220px;height:38px;'/>")).html();
            var tinymce=window.tinyMCE;
            // tinymce.activeEditor.execCommand('mceInsertContent', false, image)
            tinymce.get("editor").setContent(image);
            // $('#sigImg').attr('src', reader.result);
            $('.fileupload-exists').removeClass('fileupload-exists');
            document.getElementById("closeButtonId").click();
        };
        reader.onerror = function() {
            console.log('error reading file')
        };
        reader.readAsDataURL(file);
    }
	
    canvasToImg() {        
        var placeId = $("#placeId").val();        
        var name = $("#name").val();        
         if(name!="")
        {			
		  $("#"+placeId).css({"background-color":""});
			
		  $("#"+placeId).html("<span style='padding: 0 3px;z-index: 90;cursor: default;color: #145394;font-size: 1.875em;line-height: 25px;font-family: Journal, Georgia, Times, serif;'>"+name+"</span>");
          
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
            newImg.style="width:220px;height:38px;";            
            $("#"+placeId).html(newImg);            
            document.getElementById("closeButtonId").click();
        }
	$(".modal-backdrop").hide();		
	
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
	hideModel()
	{
		var $=window.$;
		$(".modal-backdrop").hide();
	}
    render(){
        return(
            <div id="custom-width-modal" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="custom-width-modalLabel" aria-hidden="true" style={{display: 'none'}}>
            <div className="modal-dialog">			
            <div className="modal-content">				
              <div className="modal-header">
                <button type="button" onClick={this.hideModel} className="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 className="modal-title" id="custom-width-modalLabel">Import Signature</h4>
              </div>		
                <div className="modal-body">          
                  <form method="post" action="" className="sigPad form-horizontal">            
                             
                    <div className="form-group">              
                      <ul className="sigNav" style={{display: "block"}}>
                        <li className="typeIt"><a href="#type-it" className="current">Type It</a></li>
                        <li className="drawIt"><a href="#draw-it" >Draw It</a></li>
                        <li className="upload">  
                          <div className="fileupload fileupload-new m-0" data-provides="fileupload">
                            <button type="button" className="btn btn-secondary btn-file slt-sig">
                              <span className="fileupload-new"><i className="fa fa-paper-clip"></i> Select file</span>
                              <input type="file" className="btn-secondary" ref={this.imgInp} onChange={this.onChangeHandler}  name='imgInp' id='imgInp' />
                            </button>
                          </div>
                        </li>
                        <li className="clearButton"><a href="#clear">Clear</a></li>
                      </ul>    
						<div className="form-group textBox">      
                      <input type="text" name="name" id="name" className="name form-control" />   
                      {/*<label for="name">Print your name</label>   */}            
                      {/*<p className="typeItDesc">Review your signature</p>
                      <p className="drawItDesc">Draw your signature</p>*/}
                    </div>  					  
                      <div className="sig sigWrapper" style={{display: "block"}}>
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
                  <button type="button" id="closeButtonId" className="btn btn-secondary waves-effect" data-dismiss="modal" onClick={this.hideModel}>Close</button>
                  <button type="button" className="btn btn-primary waves-effect waves-light" onClick={this.canvasToImg.bind(this)}>Import</button>
                </div>										
                    </div>
                </div>
            </div>
          );
    }
}