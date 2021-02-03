import React, { useEffect, useState } from "react";
import Article from "../Components/Article";
import API from "../utils/API";
import { selectTopFive } from "../utils/tools";

function Sports() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    API.getSports().then((results) => {
      console.log(results.data.articles);
      setArticles(selectTopFive(results.data.articles));
    });
  }, []);

  return (
    <>
      <h1>Sports News goes here: </h1>
      {articles.map((article, i) => (
        <Article
          key={i}
          title={article[i].title}
          thumbnail={article[i].urlToImage}
          content={article[i].content}
        />
      ))}
    </>
  );
}

export default Sports;
