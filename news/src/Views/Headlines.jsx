import React, { useEffect, useState } from "react";
import Article from "../Components/Article";
import API from "../utils/API";
import { selectTopFive } from "../utils/tools";

function Headlines() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    API.getHeadlines().then((results) => {
      console.log(results.data.articles);
      setArticles(selectTopFive(results.data.articles));
    });
  }, []);

  return (
    <>
      <h1>Headline News goes here: </h1>
      {articles.map((article, i) => (
        <Article
          key={i}
          title={article[i].title}
          thumbnail={article[i].urlToImage}
          description={article[i].description}
        />
      ))}
    </>
  );
}

export default Headlines;
