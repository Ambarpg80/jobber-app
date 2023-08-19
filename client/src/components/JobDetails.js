import React from 'react';

function JobDetails({job}){


    return(
        <div className={'container'}>
          <h2 style={{marginBottom: 0, }}>{job.title}</h2>
          <p style={{margin: 0, }}> {job.company_name} - {job.industry}</p>
          
          <div className='grid'>
            <div className="grid-item">${job.salary}K</div>
            <div className="grid-item">{job.experience_level}</div>
            <div className="grid-item">{job.location}</div>
            <div className="grid-item">{job.job_type}</div>
            <div className="grid-item">{job.benefits}</div>
          </div> 
          <p>{job.description}</p>
         
        </div>
    )
}

export default JobDetails;