
import React, { useEffect, useState } from "react";

function ArticleDetail() {
  const [details, setDetails] = useState({
    data: "",
  });

  useEffect(() => {
    const articleData = JSON.parse(localStorage.getItem("article"));
    console.log(articleData);
    setDetails({data: articleData.data});
  }, []);

  return (
    <article>
      <h1>{details.data.title}</h1>
      <img
        src={details.data.urlToImage}
        height="500px"
        width="500px"
        alt="placeholder"
      />
      <main>
        <section>
          <p style={{height: '700px'}}>{details.data.content}</p>
        </section>
      </main>
    </article>
  );
}

export default ArticleDetail;
