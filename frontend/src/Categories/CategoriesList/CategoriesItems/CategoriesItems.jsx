import React from "react";

import "./CategoriesItems.css";

export default function CategoriesItems({ categories }) {
  return (
    <div className="categoriesItemsBox">
      <p className="categoriesItemName"> {categories.title} </p>
      <button className="categoriesItemButton"> {"SHOP NOW"}</button>
    </div>
  );
}
