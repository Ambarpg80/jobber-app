import '../App.css';
import { Route, Routes} from "react-router-dom";
import React, { useState, useEffect } from "react";
import JobList from "./JobList"
import NavBar from "./NavBar"
import LoginForm from "./LoginForm"
import InquiryForm from './InquiryForm'
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
  const job = allJobs.find(j=> j.id === newInquiry.post_id)
  const newApplicationList = [...job.inquiries, newInquiry]    //add inquiry to the single post's list of inquiries
  const jobCopy = {...job, inquiries: newApplicationList} //set the current applications list to the new applications list
 const newJobs =  allJobs.map(oneJob => jobCopy.id === oneJob.id ? jobCopy : oneJob )
  setAllJobs(newJobs)
 }

 function deleteApplication(item){
  const singleJob = allJobs.find(job => job.id === item.post_id)//find job that matches item's post_id
  const filteredInquiries = singleJob.inquiries.filter(inquiry => inquiry.id !== item.id ) //filter and return the inquiry that doesn't match the item to be deleted
  const filteredSingleJob = {...singleJob, inquiries: filteredInquiries}// add filtered inquiries list to copy of single job
  const filterdJobList= allJobs.map(jb => jb.id === filteredSingleJob.id ? filteredSingleJob : jb)
  setAllJobs(filterdJobList) 
  }
  
  function handleInquiryUpdate(updatedItem){
   const jobToUpdate = allJobs.find(jb => jb.id === updatedItem.post_id)
   const inquiries = jobToUpdate.inquiries
   const updatedInquiries = inquiries.map(inq => inq.id === updatedItem.id ? updatedItem : inq )
   const updatedJob= {...jobToUpdate, inquiries: updatedInquiries} 
   const updateJobsList = allJobs.map(j => j.id === updatedJob.id ? updatedJob : j)
   setAllJobs(updateJobsList)
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
                                         onInquiryUpdate={handleInquiryUpdate}
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

              <Route path="/edit_profile" 
                     element={ <LoginEditForm  /> } 
              />
              
              <Route path="/me/inquiries/:id" 
                     element={ <Inquiry  /> } 
              />

              <Route path="/login" 
                     element={ <LoginForm  /> } 
              />

              <Route path="/posts/:id/inquiries" 
                     element={ <InquiryForm onApply={handleNewApplication} /> } 
              />

          </Routes>
        </UserProvider>
        </div>
    );
  
}
         
    
   
  


export default App;
