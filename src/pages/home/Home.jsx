import React, { useEffect, useState} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import './Home.css'
function Home() {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    axios('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(({ data }) => {
        setRandom(data.meals); 
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching random meal:', error);
      });
  }, []);

  return (
    <div className='container'>
  {random.map((el) => (
    <div key={el.idMeal} className="meal-container">
      <div className="name-meals">
        <p className="meal-day">Meal of the Day</p>
        <Link to={`oneMeal/${el.idMeal}`} className="link">
        <p className="meal-name">{el.strMeal}</p>
        </Link>
        <p className="meal-country">{el.strCategory} | <span>{el.strCategory}</span></p>
      </div>
      <Link to={`oneMeal/${el.idMeal}`}>
      <div className="meal-img">
        <img src={el.strMealThumb} alt={el.strMeal} className="img" />
      </div>
      </Link>
    </div>
  ))}
</div>

  );
}

export default Home;

