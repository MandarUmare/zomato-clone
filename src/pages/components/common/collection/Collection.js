import React from 'react';
import Slider from 'react-slick';
import "./collection.css";
import NextArrow from '../carousel/nextArrow';
import PrevArrow from '../carousel/prevArrow';

var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};

const Collection = ({ list }) => {
    return (
        <div className='collection-wrapper'>
            <div className='max-width collection'>
                <div className='collection-title'>Collection</div>
                <div className='collection-subtitle-row'>
                    <div className='collection-subtitle-text'>
                        Explore curated lists of top restaurants, cafes, pubs, and bars in Mumbai, based on trends

                    </div>
                    <div className='collection-location'>
                        <div>All collection in luckhnow</div>
                        <img className='caret-icon absolute-center' src="https://img.icons8.com/ios-glyphs/30/null/sort-right.png" />

                    </div>
                </div>


                <Slider {...settings}>
                   
                        {list.map((item) => (

                            <div>

                                <div className='collection-cover '>
                                    <img
                                        src=
                                        {item.cover}
                                        className="collection-image"
                                        alt={item.title}
                                    />
                                    <div className='gradient-bg'></div>
                                    <div className='collection-card-title'>{item.title}</div>
                                    <div className='collection-card-subtitle'>
                                        <div>{item.places}</div>
                                        <img className='caret-icon absolute-center' src="https://img.icons8.com/ios-glyphs/30/null/sort-right.png" />
                                    </div>
                                </div>
                            </div>

                        ))}
                  

                </Slider>
            </div>

          </div>

            );
};


            export default Collection;
