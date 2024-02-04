import React from 'react'
import  { useEffect, useState} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import './SearchMeal.css'
function SearchMeal() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      setResults(response.data.meals);
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  
  };
  return (
    <div className='container'>
        <div className="search-container">
        <div className="search">
            <h2 className='search-h2'>Find your Meal</h2>
            <div className="search-box">
                <input type="text" placeholder='Find your meal'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                 className='input' />
                <button 
                onClick={handleSearch}
                className='search-btn'>Search</button>
            </div>
          
        </div>
        </div>
        <div>
       
      </div>
      {results.map((el) => (
          <div key={el.idMeal} className='search-meal-box'>
            <Link to={`mealItem/${el.idMeal}`}>
             <img src={el.strMealThumb} alt={el.strMeal} className='search-img' />
             </Link>
             <div className="search-text">
             <h2 className='search-meal-h2'>{el.strMeal}</h2>
             <p className='search-meal-p'>{el.strCategory} | <span>{el.strArea}</span></p>
             </div>
          </div>
        ))}
    </div>
  )
 
}

export default SearchMeal