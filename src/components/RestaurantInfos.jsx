import React from "react";

function RestaurantInfos({ restaurant }) {
  if (!restaurant) return null;
  
  return (
    <section className="restaurant-infos">
      <img src={restaurant.picture} alt={restaurant.name} />
      <div>
        <h1>{restaurant.name}</h1>
        <p>{restaurant.description}</p>
      </div>
    </section>
  );
}

export default RestaurantInfos;