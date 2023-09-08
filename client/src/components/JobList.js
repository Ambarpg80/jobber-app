import React from 'react'
import JobDetails from "./JobDetails"



function JobList({allJobs, filteredList}){
  
    return(
      <div >
        {(filteredList ? filteredList : allJobs).map(job => <div key={job.id} className='jobs-page'> 
            <JobDetails job={job} /> </div> 
            )}
      </div>
    )
}

export default JobList;