import React from 'react';
import Filters from '../common/filter';
import "./delivery.css";
import Deliverycollections from './collections';
import Topbrands from './collections/Deliveryitems/topbrand/Topbrands';


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

// const restaurantlist=restaurants;

const Delivery = () => {
  return (
    <div>
    <div className='max-width'></div>
      <Filters filterlist={deliveryfilter}>
        
      </Filters>
      <Deliverycollections></Deliverycollections>
      <Topbrands/>
      {/* <Explore list={restaurantlist}/> */}
    </div>
  )
}

export default Delivery;
