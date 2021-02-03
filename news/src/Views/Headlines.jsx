import React, {useEffect, useState} from 'react';
import Article from '../Components/Article';
import API from "../utils/API";

function Headlines() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        API.getHeadlines().then(results => {
            console.log(results.data.articles)
            const resultsArray = [];
            for (let i = 0; i < 5; i++) {
                resultsArray.push(results.data.articles)
            }
            setArticles(resultsArray)
          });
    }, [])

    return (
        <div>
            <h1>Headline News goes here: </h1> 
            <p>This should be on the main home page</p>
            {articles.map((article,i) => (
                // console.log(article[0])

                <Article
                    key={i}
                    what="why?"
                    title={article[i].title}
                    thumbnail={article[i].title}
                    content={article[i].content}
                />
            ))}
            {/* <Article/>
            <Article/>
            <Article/> */}
            <button  >Click for API</button>
        </div>
    )
}

export default Headlines;