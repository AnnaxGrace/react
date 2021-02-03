import React from "react";

function Article({ title, thumbnail, description }) {
  return (
    <article>
      <header>
        <h2>{title}</h2>
      </header>
      <main>
        <img src={thumbnail} height="150px" width="150px" alt="placeholder" />
        <section>
          <p>{description}</p>
        </section>
      </main>
    </article>
  );
}

export default Article;
