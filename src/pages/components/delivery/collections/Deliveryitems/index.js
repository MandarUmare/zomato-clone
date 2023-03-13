import React from 'react';
import "./deliveryitem.css";


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
