import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Item from "./components/Item";
import Meal from "./components/Meal";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/meal" element={<Meal />} />
          <Route path="/item" element={<Item />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
