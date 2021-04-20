import React from "react";
import { v4 as uuidv4 } from "uuid";

const ShowArticle = ({ articles }) => {
  const ListOfArticles = articles.map((article) => (
    <div key={uuidv4()}>
      <h4 style={{ width: "40%" }}> {article.title}</h4>
      <p style={{ width: "40%" }}>{article.description}</p>
      <div className="showimage">
        <img
          src={article.urlToImage}
          alt={article.title}
          style={{ width: "40%" }}
        />
      </div>
    </div>
  ));
  return <div>{ListOfArticles}</div>;
};

export default ShowArticle;
