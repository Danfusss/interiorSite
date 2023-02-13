import React from "react";
import CategoriesList from "./CategoriesList/CategoriesList";
import CategoriesTitle from "./CategoriesTitle/CategoriesTitle";

export default function Categories() {
  return (
    <div>
      <h2>{"POPULAR PRODUCT"}</h2>
      <CategoriesTitle />
      <CategoriesList />
    </div>
  );
}
