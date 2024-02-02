import { Route,Routes,Link } from "react-router-dom";
import './App.css'
import Layout from "./pages/Layout/Layout";
import Home from "./pages/home/Home";
import OneMeal from "./pages/oneMeal/OneMeal";
import MealItem from "./pages/oneMeal-search/MealItem";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route path="/" element={<Home/>}/>
        <Route path="oneMeal/:id" element={<OneMeal/>}/>
        <Route path="mealItem/:id" element={<MealItem/>}/>
      </Route>

    </Routes>
    </>
  );
}

export default App;
