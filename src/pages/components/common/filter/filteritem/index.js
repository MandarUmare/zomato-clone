import React from 'react';
import "./filteritem.css";

const Filteritems = ({filter}) => {
  return (
   
       <div className='filter-item'>
                    <div className='filter-icon' >{filter.icon && filter.icon}</div>
                    <div className='filtername'>{filter.name}</div>
                </div>
   
  )
}

export default Filteritems;
