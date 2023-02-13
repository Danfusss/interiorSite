import React from "react";
import Navbar from "./Navbar/NavBar";
import HomeScreen from "./HomeScreen/HomeScreen";
import Categories from "./Categories/Categories";

import "./App.css";

export default function App() {
  return (
    <>
      <div className="navBarBox">
        <Navbar />
        <HomeScreen />
        <Categories />
      </div>
    </>
  );
}
