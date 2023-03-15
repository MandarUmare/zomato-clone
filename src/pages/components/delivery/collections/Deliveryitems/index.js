import React from 'react';
import "./deliveryitem.css";
import $ from 'jquery';


$(document).ready(function(){
    $(window).scroll(function(){
    var positiontop = $(document).scrollTop();
  
    console.log(positiontop);
   if(positiontop>50){
   
   $(".delivery-item-image").addClass("animate__rotateOutDownRight");
   
   
   }else{
  
   }
    });
  });
const Deliveryitems = (props) => {
    return (
        <div className="delivery-container " >
            <div className='delivery-item-cover'>
                <img src={props.cover} className="delivery-item-image" alt='img' />

            </div>
            <div className='delivery-item-title'> {props.title}</div>
        </div>
    )
}

export default Deliveryitems;
