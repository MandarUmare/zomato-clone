import React from 'react';
import Slider from "react-slick";
import NextArrow from '../../../../common/carousel/nextArrow';
import PrevArrow from '../../../../common/carousel/prevArrow';

import Branditem from './branditems';
import "./topbrands.css";

const deliveryitems = [{
    id: 1,
    title: "Pizza",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676520651.png"
  },
  {
    id: 2,
    title: "Burger",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/144bce4c7101359f0c0b54b8fc761a6f_1648017911.png"
  },
  {
    id: 3,
    title: "Sandwitch",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188211.png"
  },
  {
    id: 4,
    title: "Biryani",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/84edd5489389f21069c09f0c88ea8abb_1628179319.png"
  },
  {
    id: 5,
    title: "Chiken",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/efde2eca9cd50d60b03fc90a236def72_1666522017.png"
  },
  {
    id: 6,
    title: "Rolls",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/7e4c022edf3d02b992442f3e94e9dbb6_1605071544.png"
  },
  {
    id: 7,
    title: "Cake",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/2e7fb8511fd082f5aa85cefe5394e9d2_1646387773.png"
  },
  {
    id: 8,
    title: "Thali",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/45137b90df2f1154a8766b00c03c8fc3_1655799691.png"
  },
  {
    id: 9,
    title: "Mommos",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/7bd8d15b440414feab366ee63b046f5d_1672388878.png"
  },
  {
    id: 10,
    title: "Chaat",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/47c22bbd5043ef52b80a4e3d3409a368_1626810451.png"
  }
  
  ];
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  
const Topbrands= () => {
    return (
        <div className='delivery-brand-collection'>
          
          <div className='max-width'>
            <div className='collection-title'>
            Top brands for you
    
            </div>
           
            <Slider  {...settings}>
           
              {
                deliveryitems.map((item) => {
                  return <Branditem
                    id={item.id}
                    title={item.title}
                    cover={item.cover}
                  />
                })
              }
            
            </Slider>
           
    
    
            
          </div>
         
        </div>
      )
}

export default Topbrands;
