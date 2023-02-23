import React from "react";

import "./ArticleListItem.css";

export default function ArticleListItem({ article }) {
  return (
    <div className="articleListItemBox">
      <img src="src\Articl(es)\ForImage\ArticleItem.png"></img>
      <div className="articleListItemDown">
        <p className="ArticleItemAutor">{article.autor}</p>
        <p className="ArticleItemComments">{`${article.number_of_comments} Comments`}</p>
        <p className="ArticleItemName">{article.name}</p>
        <button className="ArticleButton"> {"See More Product"}</button>
      </div>
    </div>
  );
}
