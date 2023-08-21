import React from 'react';
import JobApplicationForm from './JobApplicationForm';


function JobDetails({job}){

    function getApplication(e){
      return <JobApplicationForm job={job}/>
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
            <p>{job.description}</p>
            <form action={`/posts/${job.id}/inquiries`} onClick={getApplication}> 
              <button type='submit'> Apply </button>
            </form>
          </details> 
        </div>

    </div>     
    )
}

export default JobDetails;