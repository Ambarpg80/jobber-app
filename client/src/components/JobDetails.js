import React, {useState, useContext} from 'react';
import { UserContext } from './context/UserProvider';
import { useNavigate } from 'react-router-dom';
import JobApplicationForm from './JobApplicationForm';
import PostEditForm from './PostEditForm';

function JobDetails({job, onPostDelete}){
  const [showEdit, setShowEdit] = useState(false)
  const {isLoggedIn, currentUser} = useContext(UserContext)
  const navigate = useNavigate()

  
  function handleApplication(){
   navigate(`/posts/${job.id}/inquiries`) 
    return <JobApplicationForm />
  } 

  function showEditForm(){
    setShowEdit(!showEdit)
  }
  
  

  function deletePost(e){
    e.preventDefault()
    fetch(`/posts/${job.id}`,{
    method: "DELETE",})
    .then(res => res.json)
    .then(()=> onPostDelete(job))
  }





    return( 
    <div >  
       
        <div className={'container'} >
         
          <h2 style={{marginBottom: 0, }}>{job.title}</h2>
          <p style={{margin: 0, }}> {job.company_name} - {job.industry}</p>
          
          <div className='grid' >
            <div className="grid-item">${job.salary}</div>
            <div className="grid-item">{job.experience_level}</div>
            <div className="grid-item">{job.location}</div>
            <div className="grid-item">{job.job_type}</div>
            <div className="grid-item">{job.benefits}</div>
          </div>
          <details>
            <summary>{job.summary}</summary>
            {isLoggedIn && currentUser ? 
                        <div> 
                          <p>{job.description}</p>
                           <button onClick={handleApplication} type='button'> Apply </button> 
                        </div>
                        :
                        <p>Please Login or Sign Up</p>
            }
          </details> 
           <button onClick={showEditForm} type='button'> Edit </button>
           <button onClick={deletePost} type='button'> Delete Post </button>
           <div>{showEdit ? <PostEditForm job={job} /> : null} </div>
        </div>
       
    </div>     
    )
}

export default JobDetails;