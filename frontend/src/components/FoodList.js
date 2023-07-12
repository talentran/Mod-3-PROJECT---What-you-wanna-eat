import React from 'react';
import FoodItem from './FoodItem';

function FoodList({ foods }) {
  return (
    <div className="FoodList">
      {foods.map((food) => (
        <FoodItem key={food.id} food={food} />
      ))}
    </div>
  );
}

export default FoodList;
