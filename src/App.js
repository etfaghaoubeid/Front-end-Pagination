import React ,{useState,useEffect} from 'react';
function App() {
  const [isLoading,setIsLoading] = useState(false)
  const [curentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)
  const [posts,setPostes]=  useState([])
  useEffect(()=>{
    async function fetchPost(){
       const response =  await fetch('https://jsonplaceholder.typicode.com/posts')
       console.log(response)
    }
    fetchPost()
  })

  return (
    <div className="App">
      <h1>atigh</h1>
    </div>
  );
}

export default App;
