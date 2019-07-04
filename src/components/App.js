import React ,{useState,useEffect} from 'react';
import Axios from 'axios';
import Posts from './Posts'
import Pagination from './Pagination'
function App() {
  const [isLoading,setIsLoading] = useState(false)
  const [curentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)
  const [posts,setPosts]=  useState([])
  useEffect(()=>{
    setIsLoading(true)
    async function fetchPost(){
       const response =  await Axios.get('https://jsonplaceholder.typicode.com/posts')
       setPosts(response.data)
       setIsLoading(false)
    }
    fetchPost()
  }, [])
  const  indexOfLastPost = curentPage * postsPerPage
  const  indexOfFirstPost=  indexOfLastPost -postsPerPage
  const curentPosts= posts.slice(indexOfFirstPost,indexOfLastPost)
 
  const paginate = (numberPage)=>setCurrentPage(numberPage)

  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
       <div className="container">
           <a className="navbar-brand">Front-End Pagination</a>
       </div>
       </nav>
      <div className="container">
       <h1> Articles Titles</h1>
        <Posts isLoading={isLoading} posts={curentPosts}/>
        <Pagination  postsPerPage={postsPerPage}   totalPages ={posts.length} paginate={paginate}/>
      </div>
    </div>
  );
}

export default App;