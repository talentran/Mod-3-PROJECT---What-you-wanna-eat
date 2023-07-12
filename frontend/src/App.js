import React, { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import FoodList from './components/FoodList';
import RandomFoodPicker from './components/RandomFoodPicker';
import ExitOptions from './components/ExitOptions';
import Spinner from './components/Spinner';
import axios from 'axios';
import './App.css';

function App() {
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState({ ingredient: '', country: '' });
  const [sublist, setSublist] = useState([]);
  const [randomFood, setRandomFood] = useState(null);
  const [isExitApp, setIsExitApp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [showList, setShowList] = useState(true);

  useEffect(() => {
    const fetchFoods = async () => {
      // console.log(`https://food-api-c4eu.onrender.com/foods?ingredient=${search.ingredient}&country=${search.country}`)
      // const response = await axios({
      //   url: `https://food-api-c4eu.onrender.com/foods?ingredient=${search.ingredient}&country=${search.country}`,
      //   method: 'GET'
      // })
      // console.log(response.data)
      setIsLoading(true);
      const response = await axios.get(`https://food-api-c4eu.onrender.com/foods?ingredient=${search.ingredient}&country=${search.country}`);
      const fetchedFoods = response.data;
      setFoods(fetchedFoods);
      setSublist(fetchedFoods);
      setIsLoading(false);
    };
    if (isSearchClicked) { 
      fetchFoods();
      setIsSearchClicked(false);
    }
  }, [search, isSearchClicked]);

  const handlePickForMe = () => {
    setSublist(foods);
    const randomFoodIndex = Math.floor(Math.random() * foods.length);
    const randomFood = foods[randomFoodIndex];
    setRandomFood(randomFood);
    setShowList(false);
  };
  
  const handleAgree = () => {
    setRandomFood(null);
    setSublist([]);
    setIsExitApp(true);
  };

  const handleChooseAgain = () => {
    const newSublist = sublist.filter(food => food.id !== randomFood.id);
    const newFoodIndex = Math.floor(Math.random() * newSublist.length);
    const newFood = newSublist[newFoodIndex];
    setSublist(newSublist);
    setRandomFood(newFood);
  };

  const handleSkip = () => {
    const newSublist = sublist.filter(food => food.id !== randomFood.id);
    const newFoodIndex = Math.floor(Math.random() * newSublist.length);
    const newFood = newSublist[newFoodIndex];
    setSublist(newSublist);
    setRandomFood(newFood);
  };

  const handleThanks = () => {
    setIsExitApp(false);
    setSearch({ ingredient: '', country: '' });
    setRandomFood(null);
    setSublist([]);
  };

  const handleGoodbye = () => {
    setIsExitApp(true);
  };

  return isExitApp ? null : (
    <div>
      {isLoading ? <Spinner /> :
        <>
          <SearchForm onSearch={(query) => { setSearch(query); setIsSearchClicked(true); }} />
          <FoodList foods={foods} />
          {foods.length > 0 && <button onClick={handlePickForMe}>Pick for me</button>}
          {sublist.length > 0 && <RandomFoodPicker food={randomFood} onAgree={handleAgree} onChooseAgain={handleChooseAgain} onSkip={handleSkip} />}
          {!showList && <button onClick={() => setShowList(true)}>Hiện danh sách</button>}
          {randomFood && <ExitOptions onThanks={handleThanks} onGoodbye={handleGoodbye} />}
        </>
      }
    </div>
  );  
}

export default App;