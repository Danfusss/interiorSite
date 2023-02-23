import React from "react";
import ArticleList from "./ArticleList/ArticleList";

import "./Articles.css";

export default function Article() {
  return (
    <div className="articleBox">
      <h3 className="boxTitle">
        <span className="blockTitle">{"POPULAR PRODUCT"}</span>
      </h3>
      <h4 className="productName">
        <span className="productTitle">{"Read Our Latest Articles"}</span>
      </h4>
      <ArticleList />
    </div>
  );
}
