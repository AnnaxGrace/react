
import React, { useEffect, useState } from "react";
import * as moment from "moment";

function ArticleDetail() {
  const [details, setDetails] = useState({
    data: "",
  });

  useEffect(() => {
    const articleData = JSON.parse(localStorage.getItem("article"));
    setDetails({data: articleData.data});
  }, []);

  return (
    <article>
      <h1>{details.data.title}</h1>
      <p><small>{details.data.author} | {moment(details.data.publishedAt).format("DD-MM-YYYY")}</small></p>
      <img
        src={details.data.urlToImage}
        height="500px"
        width="500px"
        alt="image corresponding to title"
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
