import React from 'react'
import RestaurantCard from './RestaurantCard';
import restaurantList from './utils/mockData';

const Body = () => {
    return (
      <div className="restaurant-list">
        {restaurantList.map((restaurant) => {
          return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
        })}
      </div>
    );
  };

export default Body
