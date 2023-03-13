import React from 'react';
import "./header.css";


const header = () => {
  return (
    <div className='max-width header'>
      <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' alt="logo"
        className='header-logo'
      />
      <div className='header-right'>
        <div className='header-location-search-container'>
          <div className='location-wrapper'>
            <div className='location-icon-name'>
              <img className=' location-icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAABlElEQVR4nGNgwAIuuLpyXw4JKbgWEzMXhEHsMz4+XAzEgIuBgX730tMvf+ns/P+9vx+MQWyQ2IXgYB+8mi/7+1s9LSp6DNOIjp8UFj6+FBBgidOAmwkJO2GK37S0/H/YP/H/owkT/79pbYUbAlKDVfMxNzehJ4WFz0GKPnZ0/H+8fuP/T7/+g/HjdRv/f+roABvwtKjo2X57ewEMA466uuq8qqn5BVZUX///w4evcANA7Gd19WADQGpOOjpqYxhwyMND9Hlp6RuQonetrf+fHT4ON+DZoWP/30O98bys7PVJZ2dhrN64l5FxEebXZ80t/x/OmQfGz1sQYXAvI+M8zkC8ERs773tfH9YYAOO+vv+gdIHTgFOBgTovy8tf4TLgRVnZ6/O+vpj+RwbXY2LW4jLgRmzsKgZC4Ly7u8Lj/PwH6Jof5eU9OOXvL8tADLgUFFTxvqXlO0zzu+bmH5dCQiqJ0ozklQ3f+vr+g/D16Oj1JGkGgcPe3oK3k5PP305JuXQmNJSfZANA4Ly/v8E5b299fIoADQBn5/subgsAAAAASUVORK5CYII="></img>
              <div className='city-name'>Banglore</div>

            </div>
            <img className='caret-icon' src="https://img.icons8.com/ios-glyphs/30/null/sort-down.png" />
          </div>
          <div className='location-search-separartor'></div>
          <div className='header-searchbar'>
            <img className='search-icon' src="https://img.icons8.com/ios/50/null/search--v1.png" />
            <input  placeholder='Search for a restaurant,cuisine or dish ' className='search-input'></input>
          </div>
        </div>
        <div className='profile-wrapper'>
        <img  className='header-profile-image' src="https://img.icons8.com/material/24/cab1e8/user-male-circle--v1.png"/>
           <span className='header-user-name'>Mandar</span>
          <img className='caret-icon' src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/null/external-arrow-arrows-those-icons-lineal-color-those-icons-1.png"/>
        </div>
      </div>
    </div>
  )
}

export default header
