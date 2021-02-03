//going to take data out of local storage

import React from "react";

function Article() {
  
    const fullArticleDirect = () => {
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