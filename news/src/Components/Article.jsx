import React from "react";
import { useHistory} from "react-router-dom";

function Article(props) {
  const { title, urlToImage, description } = props.data;
  console.log(props)
  const history = useHistory();

  const fullArticleDirect = () => {
      console.log(props)
      localStorage.setItem("article", JSON.stringify(props))
      history.push("/ArticleDetail");
  };

  return (
    <article>
      <button onClick={fullArticleDirect}>
        <header>
          <h2>{title}</h2>
        </header>
        <main>
          <img src={urlToImage} height="150px" width="150px" alt="article thumbnail" />
          <section>
            <p>{description}</p>
          </section>
        </main>
      </button>
    </article>
  );
}

export default Article;
