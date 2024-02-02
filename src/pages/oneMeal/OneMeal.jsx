import React from 'react'
import { useEffect,useState } from "react";
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './OneMeal.css'
function OneMeal() {
    const {id}= useParams
    const [random, setRandom] = useState([]);
  useEffect(() => {
    axios(`https://www.themealdb.com/api/json/v1/1/random.php/${id}`)
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
        <div className="container-meal" key={el.idMeal}>
          <div className="meal-description">
            <div className="meal-blog">
                
            </div>
            <div className="meal-title">
              <h2 className='name'>{el.strMeal}</h2>
              <p className="country">{el.strCategory} | <span>{el.strArea}</span></p>
              <ul className='meal-ul'>
                <li className='meal-li'>- {el.strIngredient1} <span>{el.strMeasure1}</span> </li>
                <li className='meal-li'>- {el.strIngredient2} <span>{el.strMeasure2}</span></li>
                <li className='meal-li'>- {el.strIngredient3} <span>{el.strMeasure3}</span></li>
                <li className='meal-li'>- {el.strIngredient4} <span>{el.strMeasure4}</span></li>
                <li className='meal-li'>- {el.strIngredient5} <span>{el.strMeasure5}</span></li>
                <li className='meal-li'>- {el.strIngredient6}  <span>{el.strMeasure6}</span></li>
                <li className='meal-li'>- {el.strIngredient7} <span>{el.strMeasure7}</span></li> 
              </ul>
            </div>
            <div className="meal-images">
              <img src={el.strMealThumb} alt={el.strMeal} className="img-meal" />
            </div>
          </div>
          <div className="instructions">
            <p className='inst-p'>Instruction</p>
            <p className='text'>{el.strInstructions}</p>
          </div>
          <div className="meal-btn">
            <a href={el.strYoutube} className='btn'>
                Watch on YouTube
            </a>
          </div>
        </div>
      ))}
    </div>
  );
  
}

export default OneMeal