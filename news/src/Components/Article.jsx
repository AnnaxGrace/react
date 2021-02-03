import React from "react";
import { useHistory} from "react-router-dom";

function Article(props) {
  const { title, thumbnail, description } = props;
  const history = useHistory();

  const fullArticleDirect = () => {
      localStorage.setItem("article", JSON.stringify(props))
      console.log("why")
      history.push("/ArticleDetail");
  };

  return (
    <article>
      <button onClick={fullArticleDirect}>
        <header>
          <h2>{title}</h2>
        </header>
        <main>
          <img src={thumbnail} height="150px" width="150px" alt="placeholder" />
          <section>
            <p>{description}</p>
          </section>
        </main>
      </button>
    </article>
  );
}

export default Article;
