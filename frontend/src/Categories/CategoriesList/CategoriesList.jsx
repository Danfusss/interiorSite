import React from "react";
import axios from "axios";

import CategoriesItems from "./CategoriesItems/CategoriesItems";

import { useEffect, useState } from "react";

export default function CategoriesList() {
  const [massiveCategories, massiveSave] = useState([]);
  useEffect(() => {
    axios("http://127.0.0.1:3000/getCategories").then((res) => {
      massiveSave(res.data);
    });
  }, []);

  return (
    <>
      {massiveCategories.map((categories, i) => (
        <CategoriesItems key={i} categories={categories} />
      ))}
    </>
  );
}
