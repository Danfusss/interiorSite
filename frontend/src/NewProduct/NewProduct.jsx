import React from "react";
import axios from "axios";
import NewProductItems from "./NewProductItems/NewProductItems";

import "./NewProduct.css";

import { useEffect, useState } from "react";

export default function NewProduct() {
  const [massiveItems, massiveLoading] = useState([]);

  useEffect(() => {
    axios("http://127.0.0.1:3000/getItem").then((res) => {
      massiveLoading(res.data);
    });
  }, []);

  return (
    <div className="productBox">
      <h3 className="boxTitle">{"PROFESSIONAL TEAM"}</h3>
      <h4 className="productTitle">{"The Best New Arrivals"}</h4>
      <div className="productItemBox">
        {massiveItems.map((item, i) => (
          <NewProductItems key={i} item={item} />
        ))}
      </div>
    </div>
  );
}
