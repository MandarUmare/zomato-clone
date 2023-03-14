import React from 'react';
import Collection from '../common/collection/Collection';
import Exploresection from '../common/Exploresection';
import Filters from '../common/filter';
import { dinningOut } from '../data/diningOut';
import "./Dinningout.css";



const collectionList=[
  {
    id:"1",
    title:"trending this week",
    cover:"https://b.zmtcdn.com/data/collections/2da2ac4aea6e3c8241ab7de09fddf173_1674823998.jpg?output-format=webp",
    places:"12 places",
  },
  {
    id:"2",
    title:"trending this week",
    cover:"https://b.zmtcdn.com/data/collections/b90a3bc172dab4f5befb3389950ffcab_1674824072.jpg?output-format=webp",
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

const diningfilter=[
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

const  dininglist=dinningOut;


const DinningOut = () => {
  return (
    <div >
      <Collection  list={collectionList}/>
      <Filters filterlist={diningfilter}/>
      <Exploresection list={dininglist} collectionname={"Delivery Restaurants in Mumbai"}/>
    </div>
  )
}

export default DinningOut;
