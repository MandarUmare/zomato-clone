import React from 'react';
import Filters from '../common/filter';
import "./delivery.css";
import Deliverycollections from './collections';




const deliveryfilter=[
    {
        id:1,
        icon:<img className='filter-icon' src="https://img.icons8.com/fluency-systems-regular/48/null/sorting-options.png"></img>,
        name:"Filter"
    }
    ,{
        id:2,
        name:"rating: 4.0+"
    },
    {
        id:3,
        name:"Safe and Hygenic "
    },
    {
        id:4,
        name:"Pure Veg"
    },
    {
        id:5,
        icon:<img className='filter-icon' src="https://img.icons8.com/ios/50/null/timer.png"></img>,
        name:"Delivery Time"
    },
    {
        id:6,
        name:"Great Offers"
    }

]

const Delivery = () => {
  return (
    <div>
    <div className='max-width'></div>
      <Filters filterlist={deliveryfilter}>
        
      </Filters>
      <Deliverycollections></Deliverycollections>
    </div>
  )
}

export default Delivery;
