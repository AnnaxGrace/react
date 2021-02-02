import React from 'react';
import Article from '../Components/Article';
import API from "../utils/API";

function Headlines() {

    const runAPI = () => {
        API.getHeadlines().then(results => {
            console.log(results)
          });
    }

    return (
        <div>
            <h1>Headline News goes here: </h1> 
            <p>This should be on the main home page</p>
            <Article/>
            <Article/>
            <Article/>
            <button onClick ={runAPI} >Click for API</button>
        </div>
    )
}

export default Headlines;