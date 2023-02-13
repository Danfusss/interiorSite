import React from "react";
import axios from "axios";
import { useEffect } from "react";

export default function CategoriesList() {
  useEffect(() => {
    axios("http://127.0.0.1:3000/getItem").then((res) => {
      console.log(res.data);
    });
  }, []);
  return;
}
