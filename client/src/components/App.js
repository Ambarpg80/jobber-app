import '../App.css';
import { Route, Routes} from "react-router-dom";
import React, { useState, useEffect} from "react";
import JobPosts from "./JobPosts"
import Home from "./Home"
import LoginForm from "./LoginForm"
import JobPostForm from './JobPostForm';
import JobApplicationForm from './JobApplicationForm'
import { UserProvider } from './context/UserProvider';
import UserPage from './UserPage'; 
import Welcome from './Welcome';
import Inquiry from './Inquiry';




function App() {
  const [allJobs, setAllJobs] = useState([]);
   const [search, setSearch] = useState("")
  // const {currentUser} = useContext(UserContext);
  
  useEffect(() => {
    fetch("/posts")
      .then(res => res.json())
      .then(jobPosts => setAllJobs(jobPosts));
  }, []);


  function handleNewPost(newPost){
    setAllJobs([...allJobs, newPost])
  }

 function handleNewApplication(newInquiry){
  const job = allJobs.find(job => job.id === newInquiry.post_id ? job : null)// find the post that matches the inquiries post_id
  const newApplicationList = [...job.inquiries, newInquiry]    //add inquiry to the single post's list of inquiries
  job.inquiries = newApplicationList  //set the current applications list to the new applications list
  setAllJobs([...allJobs])
 }

 function deleteApplication(item){
  const job = allJobs.find(job => job.id === item.post_id ? job : null) //find job that matches the inquiry's post_id
  const filteredInquiries = job.inquiries.filter(inq => inq.id !== item.id ) //filter and return the applications that don't match the item to be deleted
  job.inquiries = filteredInquiries // set the job.inquiries list to the newly filtered Inquiries
  setAllJobs([...allJobs]) // create a copy of all posts and set as the new allJobs List.
 }
  

 function handlePostUpdate(updatedItem){
  const job = allJobs.find(job => job.id === updatedItem.post_id ? job : null)// find the post that matches the inquiries post_id
  const editedItem = job.inquiries.map(inquiry => inquiry.id === updatedItem.id ? updatedItem : inquiry)    //add inquiry to the single post's list of inquiries
  job.inquiries = editedItem  //set the current applications list to the new applications list
  setAllJobs([...allJobs])
 }

 function handlePostDelete(deletedItem){
  const deletedPostList = allJobs.filter(job => job.id !== deletedItem.id) //filter and return the applications that don't match the item to be deleted 
  // allJobs = deletedPostList
  setAllJobs([...deletedPostList]) // create a copy of all posts and set as the new allJobs List.
 }
 

     const filteredList = allJobs.filter( job => job.title.toLowerCase().includes(search.toLowerCase()) )
    

  
    return (
      <div >
        <UserProvider>
          <Routes>
            <Route exact path="/" element={<Home   />} > 

              <Route path="/welcome" element={<Welcome  />} />

              <Route path="/me" 
                     element={ <UserPage allJobs={allJobs} 
                                         onDelete={deleteApplication} 
                                         search={search} setSearch={setSearch}  
                                         filteredList={filteredList} /> } 
              /> 

              <Route exact path="/posts" 
                     element={ <JobPosts allJobs={allJobs} 
                                         search={search} 
                                         setSearch={setSearch} 
                                         filteredList={filteredList} 
                                         onUpdate={handlePostUpdate}
                                         onPostDelete={handlePostDelete}/> } 
              />

              <Route path="/posts/new" 
                     element={ <JobPostForm onSubmission={handleNewPost} /> } 
              />
              
              <Route path="/me/inquiries/:id" 
                     element={ <Inquiry/> } 
              />

              <Route path="/login" 
                     element={ <LoginForm  /> } 
              />

              <Route path="/posts/:id/inquiries" 
                     element={ <JobApplicationForm onApply={handleNewApplication} /> } 
              />

              {/*<Route exact path="*" element={<Error />} /> */}
            </Route>
          </Routes>
        </UserProvider>
        </div>
    );
  // }
}
         
    
   
  


export default App;
