import '../App.css';
import { Route, Routes} from "react-router-dom";
import React, { useState, useEffect, useContext} from "react";
import NavBar from './NavBar';
import JobList from "./JobList"
import Home from "./Home"
import LoginForm from "./LoginForm"
import SignUpForm from './SignUpForm';
import JobPostForm from './JobPostForm';
import JobApplicationForm from './JobApplicationForm'
import { UserProvider, UserContext } from './context/UserProvider';

function App() {
  const [allJobs, setAllJobs] = useState([]);
  // const {currentUser} = useContext(UserContext);

  useEffect(() => {
    fetch("/posts")
      .then(res => res.json())
      .then(jobPosts => setAllJobs(jobPosts));
  }, []);


  function handleNewPost(newPost){
    console.log(newPost)
    setAllJobs([...allJobs, newPost])
  }

 function handleNewApplication(newInquiry){
  console.log(newInquiry)
//   find posts.id === newInquiry.post_id
//   add inquiry to the post's list of previous copied inquiries
//   setAllJobs (see react-rent-a-ride app)
 }
 
  
    return (
      <div >
        <UserProvider>

          <Routes>
            <Route exact path="/" element={<Home   />} > 
              <Route exact path="/posts" element={<JobList alljobs={allJobs} setAllJobs={setAllJobs} />} />
              <Route path="/posts/new" element={<JobPostForm onSubmission={handleNewPost} />} />
              <Route path="/me" element={<UserProvider  />} />
              <Route path="/login" element={<LoginForm  />} />
              
              <Route path="/posts/:id/inquiries" element={ <JobApplicationForm  onApply={handleNewApplication}/>} />
              {/*<Route exact path="*" element={<Error />} /> */}
            </Route>
          </Routes>
        </UserProvider>
        </div>
    );
}

         
    
   
  


export default App;
