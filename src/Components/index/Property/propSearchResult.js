import React from 'react'
import PropertItem from './propertyItems'
import API_URL from '../../../app-config';
export default class Search extends React.Component{
    state={
        properties:[]
    }
    componentWillMount(){
        if(this.state.location.state!=undefined){
            var props=this.props.location.state
            this.setState({properties:props})
        }
    }
    componentDidMount(){
        var $=window.$;
        setTimeout(function(){       
          var jQuery=window.$;       
          var tz_realestate_ResizeImage=function(obj){
              'use strict';
              var widthStage;
              var heightStage;
              var widthImage;
              var heightImage;
              var resizeImage=function(widthImage,heightImage,widthStage,heightStage){
              var escImageX=widthStage/widthImage;
              var escImageY=heightStage/heightImage;
              var escalaImage=(escImageX>escImageY)?escImageX:escImageY;
              var widthV=widthImage*escalaImage;
              var heightV=heightImage*escalaImage;
              var posImageY=0;
              var posImageX=0;
              if(heightV>heightStage){
                  posImageY=(heightStage-heightV)/2;
              }
              if(widthV>widthStage){
                  posImageX=(widthStage-widthV)/2;
              }
              return{top:posImageY,left:posImageX,width:widthV,height:heightV};
              };
                  obj.each(function(i,el){
                  heightStage=jQuery(this).height();
                  widthStage=jQuery(this).width();
                  var img_url=jQuery(this).find('img').attr('src');
                  var image=new Image();
                  image.src=img_url;
                  widthImage=image.naturalWidth;
                  heightImage=image.naturalHeight;
                  var tzimg=new resizeImage(widthImage,heightImage,widthStage,heightStage);
                  jQuery(this).find('img').css({top:tzimg.top,left:tzimg.left,width:tzimg.width,height:tzimg.height});
                  });
              } 
            
            $('#tzloadding').remove();
          var gapHorizontal,gapVertical;
          if(jQuery(window).width() > 993 ){
            gapHorizontal = 0;
            gapVertical = 26;
          }else{
            gapHorizontal = 0;
            gapVertical = 20;
          }
          try{
            if( jQuery('#js-grid-meet-the-team').length){
              if(jQuery('#js-grid-meet-the-team').cubeportfolio!=undefined)
              jQuery('#js-grid-meet-the-team').cubeportfolio({
                defaultFilter: '*',
                filters: '#js-filters-meet-the-team',
                layoutMode: 'grid',
                animationType: 'rotateRoom',
                gapHorizontal: gapHorizontal,
                gapVertical: gapVertical,
                gridAdjustment: 'responsive',
                mediaQueries: [{
                  width: 1500,
                  cols: 5
                }, {
                  width: 993,
                  cols: 3       }, {
                  width: 768,
                  cols: 3       }, {
                  width: 460,
                  cols: 2
                }, {
                  width: 0,
                  cols: 1
                }],
                caption: 'fadeIn',
                displayType: 'lazyLoading',
                displayTypeSpeed: 100
              });
              tz_realestate_ResizeImage(jQuery('.tz-property-thum'));
            }
          }   
          catch(error){
            if( jQuery('#js-grid-meet-the-team').length){
              if(jQuery('#js-grid-meet-the-team').cubeportfolio!=undefined)
              jQuery('#js-grid-meet-the-team').cubeportfolio('destroy')
              jQuery('#js-grid-meet-the-team').cubeportfolio({
                defaultFilter: '*',
                filters: '#js-filters-meet-the-team',
                layoutMode: 'grid',
                animationType: 'rotateRoom',
                gapHorizontal: gapHorizontal,
                gapVertical: gapVertical,
                gridAdjustment: 'responsive',
                mediaQueries: [{
                  width: 1500,
                  cols: 5
                }, {
                  width: 993,
                  cols: 3       }, {
                  width: 768,
                  cols: 3       }, {
                  width: 460,
                  cols: 2
                }, {
                  width: 0,
                  cols: 1
                }],
                caption: 'fadeIn',
                displayType: 'lazyLoading',
                displayTypeSpeed: 100
              });
              tz_realestate_ResizeImage(jQuery('.tz-property-thum'));
            }
          }
           }, 500);
      }
      componentWillReceiveProps(nextProps){
        var $=window.$;
        setTimeout(function(){       
          var jQuery=window.$;       
          var tz_realestate_ResizeImage=function(obj){
              'use strict';
              var widthStage;
              var heightStage;
              var widthImage;
              var heightImage;
              var resizeImage=function(widthImage,heightImage,widthStage,heightStage){
              var escImageX=widthStage/widthImage;
              var escImageY=heightStage/heightImage;
              var escalaImage=(escImageX>escImageY)?escImageX:escImageY;
              var widthV=widthImage*escalaImage;
              var heightV=heightImage*escalaImage;
              var posImageY=0;
              var posImageX=0;
              if(heightV>heightStage){
                  posImageY=(heightStage-heightV)/2;
              }
              if(widthV>widthStage){
                  posImageX=(widthStage-widthV)/2;
              }
              return{top:posImageY,left:posImageX,width:widthV,height:heightV};
              };
                  obj.each(function(i,el){
                  heightStage=jQuery(this).height();
                  widthStage=jQuery(this).width();
                  var img_url=jQuery(this).find('img').attr('src');
                  var image=new Image();
                  image.src=img_url;
                  widthImage=image.naturalWidth;
                  heightImage=image.naturalHeight;
                  var tzimg=new resizeImage(widthImage,heightImage,widthStage,heightStage);
                  jQuery(this).find('img').css({top:tzimg.top,left:tzimg.left,width:tzimg.width,height:tzimg.height});
                  });
              } 
            
            $('#tzloadding').remove();
          var gapHorizontal,gapVertical;
          if(jQuery(window).width() > 993 ){
            gapHorizontal = 0;
            gapVertical = 26;
          }else{
            gapHorizontal = 0;
            gapVertical = 20;
          }
          try{
            if( jQuery('#js-grid-meet-the-team').length){
              if(jQuery('#js-grid-meet-the-team').cubeportfolio!=undefined)
              jQuery('#js-grid-meet-the-team').cubeportfolio({
                defaultFilter: '*',
                filters: '#js-filters-meet-the-team',
                layoutMode: 'grid',
                animationType: 'rotateRoom',
                gapHorizontal: gapHorizontal,
                gapVertical: gapVertical,
                gridAdjustment: 'responsive',
                mediaQueries: [{
                  width: 1500,
                  cols: 5
                }, {
                  width: 993,
                  cols: 3       }, {
                  width: 768,
                  cols: 3       }, {
                  width: 460,
                  cols: 2
                }, {
                  width: 0,
                  cols: 1
                }],
                caption: 'fadeIn',
                displayType: 'lazyLoading',
                displayTypeSpeed: 100
              });
              tz_realestate_ResizeImage(jQuery('.tz-property-thum'));
            }
          }   
          catch(error){
            if( jQuery('#js-grid-meet-the-team').length){
              if(jQuery('#js-grid-meet-the-team').cubeportfolio!=undefined)
              jQuery('#js-grid-meet-the-team').cubeportfolio('destroy')
              jQuery('#js-grid-meet-the-team').cubeportfolio({
                defaultFilter: '*',
                filters: '#js-filters-meet-the-team',
                layoutMode: 'grid',
                animationType: 'rotateRoom',
                gapHorizontal: gapHorizontal,
                gapVertical: gapVertical,
                gridAdjustment: 'responsive',
                mediaQueries: [{
                  width: 1500,
                  cols: 5
                }, {
                  width: 993,
                  cols: 3       }, {
                  width: 768,
                  cols: 3       }, {
                  width: 460,
                  cols: 2
                }, {
                  width: 0,
                  cols: 1
                }],
                caption: 'fadeIn',
                displayType: 'lazyLoading',
                displayTypeSpeed: 100
              });
              tz_realestate_ResizeImage(jQuery('.tz-property-thum'));
            }
          }
           }, 500);
      }
    render()
    {    
        return(
            <div id="js-grid-meet-the-team" className="cbp cbp-l-grid-team grid">
                {this.state.properties.map(property=>(
                <PropertItem updatePropertyGrid={this.updatePropertyGrid} ownerDetails={this.state.owners} property={property} total_amount={property.total_amount}  Title={property.title} description={property.description} square_feet={property.square_feet} src={(property.img_path!=undefined&&property.img_path.length>0&&property.img_path[0].img_path!=undefined)?API_URL+"/assetsadmin/"+property.img_path[0].img_path:''} PropertyStatus={property.property_status} />
                ))}
            </div>
        );
    }
}