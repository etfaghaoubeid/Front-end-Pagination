import React ,{useState,useEffect} from 'react';
import Axios from 'axios';
function App() {
  const [isLoading,setIsLoading] = useState(false)
  const [curentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)
  const [posts,setPostes]=  useState([])
  useEffect(()=>{
    async function fetchPost(){
       const response =  await Axios.get('https://jsonplaceholder.typicode.com/posts')
       console.log(response.data)
    }
    fetchPost()
  })

  return (
    <div className="App">
     <nav class="navbar navbar-light bg-light">
       <div className="container">
  <a class="navbar-brand">Front-End Pagination</a>
  </div>
</nav>
      <div className="container">
        
      </div>
    </div>
  );
}

export default App;