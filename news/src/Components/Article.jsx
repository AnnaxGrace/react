import React from 'react'

function Article(props) {
    console.log(props)
    console.log(props.what)
    return (
        <article>
           <header>
                <h2>{props.title}</h2>
                {/* <img src={thumbnail} height="150px" width="150px" alt="placeholder"/> */}
            </header>
            {/* <main>
                <section>
                    <p>{content}</p>
                </section>
                <section>
                    <p>Sample Article Section 2</p>
                </section>
            </main>  */}
        </article>
    )
}

export default Article;