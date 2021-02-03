import React from 'react'

function Article({title, thumbnail, description}) {

    return (
        <article>
           <header>
                <h2>{title}</h2>
                <img src={thumbnail} height="150px" width="150px" alt="placeholder"/>
            </header>
            <main>
                <section>
                    <p>{description}</p>
                </section>
                <section>
                    <p>Sample Article Section 2</p>
                </section>
            </main> 
        </article>
    )
}

export default Article;