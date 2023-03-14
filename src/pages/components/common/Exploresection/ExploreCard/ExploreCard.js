import React from 'react';
import "./ExploreCard.css";

const ExploreCard = ({ restaurant }) => {
    const name = restaurant.info.name;
    const image = restaurant.info.image.url;
    const time = restaurant.order.deliveryTime;
    const rating = restaurant.info.rating.aggregate_rating;
    const offer = restaurant.bulkOffers;

    const goldoff = restaurant.gold.text;
    const price = restaurant.info.cfo.text;
    const cuisine = restaurant.info.cuisine.map((item) => item.name).slice(0, 3);
    const bottomContainers = restaurant.bottomContainers;
    const proOff = offer.length > 1 ? offer[0].text : null;
    const discount = offer.length > 1 ? offer[1].text : offer.length === 1 ? offer.text : null;
    return (

        <div className='explore-card cur-po'>
            <div className='explore-card-cover'>
                <img src={image} alt={name} className="explore-card-image " />
                <div className='delivery-time'>{time}</div>
                {proOff && <div className='pro-off'>{proOff}</div>}
                {goldoff && <div className='gold-off absolute-center'>{goldoff}</div>}
                {discount && <div className='discount absolute-center'>{discount}</div>}
            </div>
            <div className='res-row'>
                <div className='res-name'>{name}</div>
                {rating && (<div className='res-rating absolute-center'>{rating}
                    <img className='star absolute-center ' src="https://img.icons8.com/ios/50/null/star--v1.png" />
                </div>)}
            </div>
            <div className='res-row'>
                {cuisine.length && (
                    <div className='res-cuisine'>
                    {cuisine.map((item, i) => {
                        return (<span className='res-cuisine-tag'>{item}{i !== cuisine.length - 1 && ","}</span>);
                    })}

                </div>)}
                {price && <div className='res-price'>{price}</div>}
            </div>
            {bottomContainers.length > 0 &&
                <div >
                    <div className='card-seprator'></div>
                    <div className='explore-bottom'>
                        <img src={bottomContainers[0].image.url}
                            style={{ height: "18px" }}
                            alt={bottomContainers[0].text}
                        />
                        <div className='explore-bottom-text res-cuisine-tag'>{bottomContainers[0].text}</div>
                    </div>
                </div>}
        </div>

    )
}

export default ExploreCard;
