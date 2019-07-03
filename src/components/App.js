import React ,{useState,useEffect} from 'react';
import Axios from 'axios';
import Posts from './Posts'
function App() {
  const [isLoading,setIsLoading] = useState(false)
  const [curentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)
  const [posts,setPostes]=  useState([])
  useEffect(()=>{
    setIsLoading(true)
    async function fetchPost(){
       const response =  await Axios.get('https://jsonplaceholder.typicode.com/posts')
       setPostes(response.data)
       setIsLoading(false)
    }
    fetchPost()
  }, [posts])

  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
       <div className="container">
           <a className="navbar-brand">Front-End Pagination</a>
       </div>
       </nav>
      <div className="container">
        <Posts isLoading={isLoading} posts={posts}/>
      </div>
    </div>
  );
}

export default App;