import React from 'react'

export default function Posts({posts , isLoading}) {
    if(isLoading){
        return<h1> Loading ...</h1>
    }    

    return(    
         <ul className='list-group mt-3 mb-3'>
             {
                 posts.map(post=>(
                     <li  className="list-group-item" id={post.id}>{post.title}</li>
                 ))
             }
         </ul>
    )
   
}
