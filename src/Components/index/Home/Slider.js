import React from 'react'
import revoslider from '../../../images/revoslider.jpg'
import night_dark_hotel_luxury from '../../../images/night-dark-hotel-luxury.jpg'
import img1 from '../../../images/11619641833_5a64c42cce_k-e1464016780977.jpg';
import img2 from '../../../images/3888165079_ccda0ebacb_o.jpg'
import overlay from '../../../images/overlay.png'
import {loadFile} from '../../js/external'
export default class Slider extends React.Component{
    componentWillMount(){
        // loadFile("js/Slider.js","js")
    }
    componentDidMount(){
var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.onload = function() {
    var jQuery=window.$;
    var $=window.$;
    var tz_realestate_ResizeImage = function(obj) {
        'use strict';
        var widthStage;
        var heightStage;
        var widthImage;
        var heightImage;
        var resizeImage = function(widthImage,heightImage,widthStage,heightStage) {
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
        obj.each(function(i,el) {
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
    var slider_images = jQuery(".tz-slider-images")
    slider_images.slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: false,
        infinite: true,
        pauseOnHover: false,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        mobileFirst: true,
        adaptiveHeight: false
    });
    tz_realestate_ResizeImage(jQuery(".tz-slider-item"));
}
script.src = 'js/Slider.js';
head.appendChild(script);    
    }
    render(){
        return(
            <div className="wpb_wrapper">
            <div className="tz-homeslide-image">
              <div className="tz-slider-images">
                <div className="tz-slider-item"> <img src={revoslider} alt="revoslider" width="1920" height="800" /> </div>
                <div className="tz-slider-item"> <img src={night_dark_hotel_luxury} alt="night-dark-hotel-luxury" width="1920" height="800" /> </div>
                <div className="tz-slider-item"> <img src={img1} alt="11619641833_5a64c42cce_k" width="1920" height="800" /> </div>
                <div className="tz-slider-item"> <img src={img2} alt="3888165079_ccda0ebacb_o" width="1920" height="800" /> </div>
              </div>
              <div className="tz-center-content">
                <div className="tz-overlay"><img src={overlay} width="1920px" height="171px" alt="Assets Watch" /></div>
                <h2>FIND YOUR PERFECT HOME TODAY</h2>
                {/*<p>WE HAVE 200.000 FOR YOU TO CHOOSE FROM</p>*/}
              </div>
            </div>
          </div>
        );
    }
}