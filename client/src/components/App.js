import '../App.css';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import React, { useState, useEffect } from "react";
import JobList from "./JobList"
import Home from "./Home"
import NavBar from "./NavBar"
import JobForm from './JobForm';

function App() {
  const [allJobs, setAllJobs] = useState([])

  useEffect(() => {
    fetch("/")
      .then(res => res.json())
      .then(job_posts => setAllJobs(job_posts));
  }, []);
//  console.log(allJobs)
const styledButton= {
  position: 'absolute', 
  right: 20, 
  fontSize: "20px",
  alignItems: 'center',
  borderRadius: '5px',
  textDecoration: 'none'};

  function handleNewPost(newPost){
    setAllJobs([...allJobs, newPost])
  }





  return (
     <BrowserRouter>
      <header>
       <Link className='App-header logo'style={{color: 'navy', fontSize: "30px", textDecoration: 'none'}} to="/">Jobber</Link>
       <Link style={{ paddingLeft: "3vh", textDecoration: 'none'}} to="/posts">Find A Job</Link>
       <Link style={{ paddingLeft: "3vh", textDecoration: 'none'}} to="/posts/new">Post A Job</Link>
       <Link  style={styledButton} as={Link} to="/me" > Login </Link>
      <nav>
        <Routes>
          <Route exact path="/" element={<Home />} /> 
  
          <Route exact path="/posts" element={<JobList alljobs={allJobs} />} />

          <Route path="/posts/new" element={<JobForm onSubmission={handleNewPost} />} />
                
        </Routes>
      </nav>
    
    </header>
  </BrowserRouter>
         
    
   
  );
}

export default App;
