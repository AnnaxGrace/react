import React from "react";

function Article(props) {
  const { title, thumbnail, description } = props;
  const fullArticleDirect = () => {
      localStorage.setItem("article", JSON.stringify(props))
    console.log("yay");
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
