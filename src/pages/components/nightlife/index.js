import React from 'react';
import {nightLife} from "../data/nightLife";
import "./nightlife.css";
import Collection from '../common/collection/Collection';
import Filters from '../common/filter';
import Exploresection from '../common/Exploresection';

const collectionList=[
  {
    id:"1",
    title:"trending this week",
    cover:"https://b.zmtcdn.com/data/collections/d6c20926317f6753461c59af08d566f1_1674824942.jpg",
    places:"12 places",
  },
  {
    id:"2",
    title:"trending this week",
    cover:"https://b.zmtcdn.com/data/collections/a9362905a0378c532acc0c146dbf472c_1675078887.jpg",
    places:"12 places"
  },
  {
    id:"3",
    title:"trending this week",
    cover:"https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1674824266.jpg?output-format=webp",
    places:"12 places"
  },
  {
    id:"4",
    title:"trending this week",
    cover:"https://b.zmtcdn.com/data/collections/1b191329f2c37a474c428131841d488b_1674826227.jpg?output-format=webp",
    places:"12 places"
  },
  {
    id:"5",
    title:"trending this week",
    cover:"https://b.zmtcdn.com/data/collections/edd5abbddd239a8cfb8099c63b1baaf0_1675247359.jpg?output-format=webp",
    places:"12 places"
  },
  {
    id:"6",
    title:"trending this week",
    cover:"https://b.zmtcdn.com/data/collections/d6c20926317f6753461c59af08d566f1_1674824942.jpg?output-format=webp",
    places:"12 places"
  },
  {
    id:"7",
    title:"trending this week",
    cover:"https://b.zmtcdn.com/data/collections/edd5abbddd239a8cfb8099c63b1baaf0_1675247359.jpg?output-format=webp",
    places:"12 places"
  },
  
  
];
const nightfilter=[
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

const nightlist=nightLife
const Nightlife = () => {
  return (
    <div>
      <Collection  list={collectionList}/>
      <div className='max-width'>
      <Filters filterlist={nightfilter}/>
      </div>
      <Exploresection list={nightlist}
        collectionname="Explore curated lists of top restaurants, cafes, pubs, and bars in Mumbai, based on trends"
      />
    </div>
  )
}

export default Nightlife;
