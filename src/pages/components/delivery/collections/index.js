import React from 'react';
import "./collection.css";
import Slider from "react-slick";


const deliveryitems=[

]
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    // nextArrow:dfd,
    // prevArrow:dfd,
  };

const Deliverycollections = () => {
  return (
    <div className='delivery-collection'>
    <div className='max-width'>
    <div className='collection-title'>
    Inspiration for your first order
    </div>
  
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  

    </div>
      
    </div>
  )
}

export default Deliverycollections;
