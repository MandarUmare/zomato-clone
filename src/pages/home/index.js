import React, { useState } from 'react';
import Header from '../components/common/header/index';
import Taboption from '../components/common/tabOption/index';
import Footer from '../components/common/footer/';
import Delivery from '../components/delivery';
import DinningOut from '../components/Dinning Out';
import Nightlife from '../components/nightlife';


const HomePage=()=>{

const [activetab, setactivetab]=useState("Delivery");


  return (
    <div>
     <Header/>
     <Taboption activetab={activetab} setactivetab={setactivetab}/>
     
      {getcorrectscreen(activetab)}
     
     <Footer/>
    </div>
  )
}

const getcorrectscreen=(tab)=>{
  switch(tab){
   case "Delivery":
   return <Delivery/>;

   case "Dinning Out":
   return <DinningOut/>;

   case "Night life":
   return <Nightlife/>;

   default:
     return <Delivery/>;
  }
 
}



export default HomePage;
