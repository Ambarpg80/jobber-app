import React from 'react';

function JobDetails({job}){


    return(
        <div className={'job_card'}>
          <h3>{job.title}</h3>
          <ul id='job_details'>
            <li>{job.company_name}</li> 
            <li>{job.industry}</li>       
            <li>{job.salary}</li>
            <li>{job.experience_level}</li>
            <li>{job.location}</li>
            <li>{job.job_type}</li>
            <li>{job.benefits}</li>
            <li>{job.description}</li>
          </ul>
        </div>
    )
}

export default JobDetails;