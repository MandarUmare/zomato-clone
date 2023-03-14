import React from 'react';
import "./Exploresection.css";
import ExploreCard from './ExploreCard/ExploreCard';

const Exploresection = ({ list, collectionname }) => {
    return (
        <div className='max-width explore-section'>
            <div className='collection-title'>
                {collectionname}
            </div>
            <div className='explore-grid'>
                {list.map((restaurant) => {
                    return <ExploreCard restaurant={restaurant}
                    />;
                })}

            </div>

        </div>
    )
}

export default Exploresection;
