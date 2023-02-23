import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import ArticleListItem from "./ArticleListItem/ArticleListItem";

import "./ArticleList.css";

export default function ArticleList() {
  const [massiveArticle, getArticle] = useState([]);
  useEffect(() => {
    axios("http://127.0.0.1:3000/getArticle").then((res) => {
      getArticle(res.data);
    });
  }, []);
  return (
    <div className="articleListBox">
      {massiveArticle.map((article, index) => (
        <ArticleListItem index={index} article={article} />
      ))}
    </div>
  );
}
