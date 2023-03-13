import React from 'react';
import './filter.css';
import Filteritems from './filteritem';

const Filters = ({filterlist}) => {
  return (
    <div className='filters max-width'>
      { filterlist && filterlist.map((filter)=>{
            return(
               <Filteritems filter={filter} key={filter.id}/>
            )
        })
      }
      </div>
  )
}

export default Filters;
