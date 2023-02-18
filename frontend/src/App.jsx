import React from "react";
import Navbar from "./Navbar/NavBar";
import HomeScreen from "./HomeScreen/HomeScreen";
import NewProduct from "./NewProduct/NewProduct";
import Categories from "./Categories/Categories";
import Feedback from "./Feedback/Feedback";

import "./App.css";

export default function App() {
  return (
    <>
      <div className="navBarBox">
        <Navbar />
        <HomeScreen />
        <Categories />
        <NewProduct />
        <Feedback />
      </div>
    </>
  );
}
