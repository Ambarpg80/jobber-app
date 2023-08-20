import '../App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React, { useState, useEffect } from "react";
import JobList from "./JobList"
import Home from "./Home"
import LoginForm from "./LoginForm"
import SignUpForm from './SignUpForm';
import JobForm from './JobForm';

function App() {
  const [allJobs, setAllJobs] = useState([])
   

  useEffect(() => {
    fetch("/posts")
      .then(res => res.json())
      .then(jobPosts => setAllJobs(jobPosts));
  }, []);


  function handleNewPost(newPost){
    console.log(newPost)
    setAllJobs([...allJobs, newPost])
  }

 function handleNewUser(newUser){
   console.log(newUser)
 } 



  return (
     <BrowserRouter>
      {/* <nav className="App-header "><NavBar/></nav> */}
        <Routes>
          <Route exact path="/" element={<Home  />} > 
            <Route exact path="posts" element={<JobList alljobs={allJobs}  />} />
            <Route path="posts/new" element={<JobForm onSubmission={handleNewPost} />} />
            <Route path="signup" element={<SignUpForm onSignUp={handleNewUser} />} />
            {/*<Route exact path="*" element={<Error />} /> */}
          </Route>
        </Routes>
      <footer></footer>
    
    {/* </header> */}
  </BrowserRouter>
         
    
   
  );
}

export default App;
