import React from "react";

import "./HomeScreen.css";

export default function HomeScreen() {
  return (
    <div className="homeBox">
      <div className="homeBoxBlock">
        <h2>{"INTERIOR"}</h2>
        <p className="homeBoxTitle">
          <span> {"Home Designs Made Easy"}</span>
        </p>
        <p>
          <span className="homeBoxCost">{"$416.00"}</span>
        </p>
        <button className="homeBoxButton"> {"SHOP NOW"}</button>
      </div>
    </div>
  );
}
