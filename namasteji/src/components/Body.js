import React from 'react'
import RestaurantCard from './RestaurantCard';
import restaurantList from './utils/mockData';
import { useState } from 'react';

// state hook
 

const Body = () => {
  const[listofRestaurants,setlistofRestaurants] = useState(restaurantList);
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn"  
          onClick={  () => {
            const filteredlist = listofRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setlistofRestaurants(filteredlist);
            console.log("hello")
            }}
          >
          
            Top Rated Restaurants
          </button>

        </div>
          <div className="restaurant-list">
            {restaurantList.map((restaurant) => {
              return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
            })}
      </div>
      </div>
    );
  };

export default Body