import React from 'react'
import Article from './Article'

function ArticleList({posts}){
    console.log(posts)

    // const post =posts.map((eachPost)=>{ return eachPost})
   
    return(
        <main>
            {
             posts.map((post)=>{
                return(
           <Article key={post.id}
          title ={post.title}
          date={post.date}
          preview={post.preview}
           />
                )})}
        </main>
    )
}

export default ArticleList