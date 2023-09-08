import React, {useContext} from 'react'
import { UserContext } from './context/UserProvider'
import Inquiry from './Inquiry'
import JobList from './JobList'
import SearchBar from './SearchBar'


function UserPage({allJobs, onDelete, search ,setSearch, filteredList}){
  const {currentUser, isLoggedIn} = useContext(UserContext)
  
  const styleJobList = { maxWidth: "60%", float: "left"}


    if(!isLoggedIn){
     return ( 
      <div>
        <div>
          <SearchBar search={search} setSearch={setSearch} />
        </div>
        <div style={styleJobList}>
          <h1 style={{marginLeft: "40%"}}>Job Posts</h1>
          <JobList allJobs={allJobs} filteredList={filteredList} /> 
        </div> 
      </div>) 
    }else{
    return (
      <div>
        <div>
          <SearchBar search={search} setSearch={setSearch} />
        </div>
         <div style={styleJobList}>
          <h1 style={{marginLeft: "40%"}}>Job Posts</h1>
          <JobList allJobs={allJobs} filteredList={filteredList} /> 
        </div>  
        <div style={{ float: "right", marginRight:"5%", margin: "30px", width: "35%"}}> 
          <h1 style={{marginLeft:"20%"}}>Submitted Applications</h1>           
          {allJobs.map(job => 
            job.inquiries.map(inquiry => inquiry.user_id === currentUser.id ?
                <div key={inquiry.id}> 
                  <Inquiry inquiry={inquiry} job={job} onDelete={onDelete} />
                </div> : null )
          )}
        </div> 
      </div>
    )
  }
}

export default UserPage