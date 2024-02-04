import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './OneMeal.css' 

function MealItem() {
  const { id } = useParams();
  const [random, setRandom] = useState({});

  useEffect(() => {
    axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(({ data }) => {
        setRandom(data.meals[0]);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching meal details:', error);
      });
  }, [id]);

  return (
    <div className='container-meal' key={random.idMeal}>
      <div className="meal-description">
        <div className="meal-title">
          <h2 className='name'>{random.strMeal}</h2>
          <p className="country">{random.strCategory} | <span>{random.strArea}</span></p>
          <ul className='meal-ul'>
            <li className='meal-li'>- {random.strIngredient1} <span>{random.strMeasure1}</span> </li>
            <li className='meal-li'>- {random.strIngredient2} <span>{random.strMeasure2}</span></li>
            <li className='meal-li'>- {random.strIngredient3} <span>{random.strMeasure3}</span></li>
            <li className='meal-li'>- {random.strIngredient4} <span>{random.strMeasure4}</span></li>
            <li className='meal-li'>- {random.strIngredient5} <span>{random.strMeasure5}</span></li>
            <li className='meal-li'>- {random.strIngredient6}  <span>{random.strMeasure6}</span></li>
            <li className='meal-li'>- {random.strIngredient7} <span>{random.strMeasure7}</span></li> 
          </ul>
        </div>
        <div className="meal-images">
          <img src={random.strMealThumb} alt={random.strMeal} className="img-meal" />
        </div>
      </div>
      <div className="instructions">
        <p className='inst-p'>Instruction</p>
        <p className='text'>{random.strInstructions}</p>
      </div>
      <div className="meal-btn">
        <a href={random.strYoutube} className='btn'>
          Watch on YouTube
        </a>
      </div>
    </div>
  ) 
}

export default MealItem;
