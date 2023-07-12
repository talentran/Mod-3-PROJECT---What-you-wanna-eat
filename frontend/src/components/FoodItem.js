import React from 'react';

function FoodItem({ food }) {
  return (
    <div className="FoodItem">
      <h3>{food.name}</h3>
      <p>Country: {food.country}</p>
      <p>Ingredient: {food.ingredient}</p>
    </div>
  );
}

export default FoodItem;
