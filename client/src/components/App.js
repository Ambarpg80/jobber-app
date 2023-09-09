import '../App.css';
import { Route, Routes} from "react-router-dom";
import React, { useState, useEffect } from "react";
import JobList from "./JobList"
import NavBar from "./NavBar"
import LoginForm from "./LoginForm"
import JobApplicationForm from './JobApplicationForm'
import { UserProvider } from './context/UserProvider';
import UserPage from './UserPage'; 
import Welcome from './Welcome';
import Inquiry from './Inquiry';
import LoginEditForm from './LoginEditForm';


function App() {
  const [allJobs, setAllJobs] = useState([]);
  const [search, setSearch] = useState("")
  
  useEffect(() => {
    fetch("/posts")
      .then(res => res.json())
      .then(jobPosts => setAllJobs(jobPosts));
  }, []);



 function handleNewApplication(newInquiry){
  const job = allJobs.find(job => job.id === newInquiry.post_id ? job : null)
  const newApplicationList = [...job.inquiries, newInquiry]    //add inquiry to the single post's list of inquiries
  job.inquiries = newApplicationList  //set the current applications list to the new applications list
  setAllJobs([...allJobs])
 }

 function deleteApplication(item){
  const job = allJobs.find(job => job.id === item.post_id ? job : null)//find job that matches item
  const filteredInquiries = job.inquiries.filter(inquiry => inquiry.id !== item.id ) //filter and return the applications that don't match the item to be deleted
  job.inquiries = filteredInquiries // set the job.inquiries list to the newly filtered Inquiries
  setAllJobs([...allJobs]) 
  }
  

     const filteredList = allJobs.filter( job => job.title.toLowerCase().includes(search.toLowerCase()) )
    

  
    return (
      <div >
        <UserProvider>
        <nav className='App-header'> <NavBar/></nav>
          <Routes>

              <Route path="/" element={<Welcome  />} />

              <Route path="/me" 
                     element={ <UserPage allJobs={allJobs} 
                                         onDelete={deleteApplication} 
                                         search={search} 
                                         setSearch={setSearch}  
                                         filteredList={filteredList} /> } 
              /> 

              <Route exact path="/posts" 
                     element={ <JobList allJobs={allJobs} 
                                         search={search} 
                                         setSearch={setSearch} 
                                         filteredList={filteredList} /> } 
              />

              <Route path="/users/:id" 
                     element={ <LoginEditForm  /> } 
              />
              
              <Route path="/me/inquiries/:id" 
                     element={ <Inquiry  /> } 
              />

              <Route path="/login" 
                     element={ <LoginForm  /> } 
              />

              <Route path="/posts/:id/inquiries" 
                     element={ <JobApplicationForm onApply={handleNewApplication} /> } 
              />

          </Routes>
        </UserProvider>
        </div>
    );
  // }
}
         
    
   
  


export default App;
