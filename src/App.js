import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Item from "./components/Item";
import Meal from "./components/Meal";

function App() {
  const [days, setDays] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/days`)
      .then((res) => res.json())
      .then((res) => {
        setDays(res);
      });
  }, []);
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home days={days} />} />
          <Route path="/meal" element={<Meal days={days} />} />
          <Route path="/item" element={<Item />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
