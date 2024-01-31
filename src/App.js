import { Route,Routes,Link } from "react-router-dom";
import './App.css'
import Layout from "./pages/Layout/Layout";
import Home from "./pages/home/Home";
import OneMeal from "./pages/oneMeal/OneMeal";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route path="/" element={<Home/>}/>
        <Route path="oneMeal/:id" element={<OneMeal/>}/>
      </Route>

    </Routes>
    </>
  );
}

export default App;
