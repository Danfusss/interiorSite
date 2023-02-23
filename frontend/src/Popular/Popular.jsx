import React from "react";
import PopularList from "./PopularList/PopularList";

import "./Popular.css";

export default function Popular() {
  return (
    <div className="popularBox">
      <h3 className="boxTitle">
        <span className="blockTitle">{"PROFESSIONAL TEAM"}</span>
      </h3>
      <h4 className="productName">
        <span className="productTitle">{"Top Special Product"}</span>
      </h4>
      <PopularList />
    </div>
  );
}
