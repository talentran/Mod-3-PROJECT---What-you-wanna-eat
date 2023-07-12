import React from 'react';

function RandomFoodPicker({ food, onAgree, onChooseAgain, onSkip }) {
  if (!food) {
    return null;
  }

  return (
    <div>
      <h2>{food.name}</h2>
      <button onClick={onAgree}>Take!</button>
      <button onClick={onChooseAgain}>Pick Again</button>
      <button onClick={onSkip}>Skip!</button>
    </div>
  );
}

export default RandomFoodPicker;
