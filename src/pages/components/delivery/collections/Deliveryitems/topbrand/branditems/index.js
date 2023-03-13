import React from 'react';

const Branditem = (props) => {
    return (
        <div className="delivery-container " >
            <div className='delivery-item-cover'>
                <img src={props.cover} className="delivery-item-image" alt='img' />

            </div>
            <div className='delivery-item-title'> {props.title}</div>
        </div>
    )
}

export default Branditem;
