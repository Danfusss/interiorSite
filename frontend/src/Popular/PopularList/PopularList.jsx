import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import PopularListItem from "./PopularListItem/PopularListItem";

import "./PopularList.css";

export default function PopularList() {
  const [massivePopular, massiveGet] = useState([]);
  useEffect(() => {
    axios("http://127.0.0.1:3000/getPopular").then((res) => {
      massiveGet(res.data);
    });
  }, []);

  return (
    <>
      {massivePopular.map((stuff, i) => (
        <PopularListItem key={i} stuff={stuff} />
      ))}
    </>
  );
}
