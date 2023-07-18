import React from 'react'
import Article from './Article'

function ArticleList(props) {
    
  return (
   <main>
{
    props.posts.map(posts=>{
        return <Article key={posts.id} title={posts.title} preview={posts.preview} date={posts.date} />
    })
}
   </main>
  )
}

export default ArticleList