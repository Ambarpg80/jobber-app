import '../App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React, { useState, useEffect } from "react";
import JobList from "./JobList"
import Home from "./Home"
// import NavBar from "./NavBar"
import JobForm from './JobForm';

function App() {
  const [allJobs, setAllJobs] = useState([])
   

  useEffect(() => {
    fetch("/posts")
      .then(res => res.json())
      .then(job_posts => setAllJobs(job_posts));
  }, []);


  function handleNewPost(newPost){
    setAllJobs([...allJobs, newPost])
  }

//   function filteredList(item){
//   const searchedItem = allJobs.filter(job => job.title.toLowerCase().includes(item.toLowerCase()) ?  job : null)
//   setAllJobs(searchedItem)
// }



  return (
     <BrowserRouter>
      {/* <nav className="App-header "><NavBar/></nav> */}
        <Routes>
          <Route exact path="/" element={<Home  />} > 
            <Route exact path="posts" element={<JobList alljobs={allJobs} /*onSearch={filteredList}*/ />} />
            <Route path="posts/new" element={<JobForm onSubmission={handleNewPost} />} />
            {/*<Route exact path="*" element={<Error />} /> */}
          </Route>
        </Routes>
      <footer></footer>
    
    {/* </header> */}
  </BrowserRouter>
         
    
   
  );
}

export default App;
