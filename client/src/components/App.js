import '../App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React, { useState, useEffect } from "react";
import JobList from "./JobList"
import Home from "./Home"
import LoginForm from "./LoginForm"
import SignUpForm from './SignUpForm';
import JobPostForm from './JobPostForm';
import JobApplicationForm from './JobApplicationForm'
import User from './User'

function App() {
  const [allJobs, setAllJobs] = useState([]);
  const [currentUser, setCurrentUser] = useState(null)
   

  // useEffect(() => {
  //   fetch("/posts")
  //     .then(res => res.json())
  //     .then(jobPosts => setAllJobs(jobPosts));
  // }, []);

  useEffect(() => {
    fetch("/me")
      .then(res => {
        if (res.ok){
          res.json().then(user => setCurrentUser(user));
        }
      })
  }, []);

  if(currentUser){
    return (<User currentUser={currentUser}/>)
  }
  if (!currentUser)  {
  return (<LoginForm setCurrentUser={setCurrentUser}/>)
  } 


  function handleNewPost(newPost){
    console.log(newPost)
    setAllJobs([...allJobs, newPost])
  }

  function handleNewUser(newUser){
   setCurrentUser(newUser)
  } 


  //  exact path="/" element={<Home  />}
  return (
     <BrowserRouter>
      {/* <nav className="App-header "><NavBar/></nav> */}
        <Routes>
          <Route path="/" element={<Home   />} > 
            <Route exact path="posts" element={<JobList alljobs={allJobs} setAllJobs={setAllJobs} />} />
            <Route path="posts/new" element={<JobPostForm onSubmission={handleNewPost} />} />
            <Route path="signup" element={<SignUpForm onSignUp={handleNewUser} />} />
            <Route path="me" element={<User  setCurrentUser={setCurrentUser}/>} />
            <Route path="login" element={<LoginForm  setCurrentUser={setCurrentUser}/>} />
            
            <Route path="posts/:id/inquiries" element={ <JobApplicationForm currentUser={currentUser} />} />
            {/*<Route exact path="*" element={<Error />} /> */}
          </Route>
        </Routes>
      <footer></footer>
    
    {/* </header> */}
  </BrowserRouter>
         
    
   
  );
}

export default App;
