// import logo from './logo.svg';
import '../App.css';
import React, { useState, useEffect } from "react";
import JobList from "./JobList"

function App() {
  const [allJobs, setAllJobs] = useState([])

  useEffect(() => {
    fetch("/posts")
      .then(res => res.json())
      .then(job_posts => setAllJobs(job_posts));
  }, []);
// console.log(allJobs)

  return (
    <div className="App">
      <JobList allJobs={allJobs} />
      

  
    </div>
  );
}

export default App;
