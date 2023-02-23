import React from "react";
import Navbar from "./Navbar/NavBar";
import HomeScreen from "./HomeScreen/HomeScreen";
import NewProduct from "./NewProduct/NewProduct";
import Categories from "./Categories/Categories";
import Feedback from "./Feedback/Feedback";
import Popular from "./Popular/Popular";
import Advantages from "./Аdvantages/Advantages";
import Article from "./Articl(es)/Articles";
import FooterFeedback from "./FooterFeedback/FooterFeedback";
import Footer from "./Footer/Footer";

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
        <Popular />
        <Advantages />
        <Article />
        <FooterFeedback />
        <Footer />
      </div>
    </>
  );
}
