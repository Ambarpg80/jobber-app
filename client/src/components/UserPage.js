import React, {useContext} from 'react'
import { UserContext } from './context/UserProvider'
import Inquiry from './Inquiry'
import JobList from './JobList'
import LoginForm from './LoginForm'
import SearchBar from './SearchBar'


function UserPage({allJobs, onDelete, search ,setSearch, filteredList}){
  const {currentUser, isLoggedIn} = useContext(UserContext)
  //, isLoggedIn

  // const job = allJobs.find(job => job.id === inquiry.post_id ? job : null)
  
    if(!isLoggedIn){
        <LoginForm/>
    }else{
    return (
      <div>
        <div>
          <SearchBar search={search} setSearch={setSearch} />
        </div>
        
        <div style={{ float: "left", marginRight:"20px"}}> 
        <h1 style={{marginLeft: "30%" }}>Submitted Applications</h1>           
          {currentUser.inquiries.map(inquiry => <div key={inquiry.id}> <Inquiry inquiry={inquiry} onDelete={onDelete}allJobs={allJobs}/> </div> )}
        </div> 
        <div style={{ width: "60%", margin: "5px", float: "right", borderLeft: "solid 2px rgba(0, 0, 0, 0.220)"}}>
          <h1 style={{marginLeft: "40%"}}>Job Posts</h1>
          <JobList allJobs={allJobs} filteredList={filteredList}/> 
        </div>
      </div>
    )
  }
}

export default UserPage