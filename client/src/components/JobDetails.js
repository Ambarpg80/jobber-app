import React, {useContext} from 'react';
import { UserContext } from './context/UserProvider';
// import LoginForm from './LoginForm';
import { useNavigate } from 'react-router-dom';
import JobApplicationForm from './JobApplicationForm';

function JobDetails({job}){
  const {isLoggedIn, currentUser} = useContext(UserContext)
  const navigate = useNavigate()

  
  function handleApplication(e){
   navigate(`/posts/${job.id}/inquiries`) 
    return <JobApplicationForm />
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
        </div>

    </div>     
    )
}

export default JobDetails;