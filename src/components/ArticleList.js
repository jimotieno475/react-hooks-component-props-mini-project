import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
    console.log (posts)
    return(
       <main>{
        
        posts.map((post)=>(
            <Article
            key={post.id}
            title={post.title}
            date={post.date}
            preview={post.peview}
            minutes={post.minutes}
            />
        ))  }  
    
        
    </main>   
    )
  
}
export default ArticleList;