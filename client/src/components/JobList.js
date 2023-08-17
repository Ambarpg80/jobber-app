import React from 'react'
import JobDetails from "./JobDetails"

function JobList({alljobs}){
    // console.log(alljobs)
    
    
    return(
        <div >
          {alljobs.map(job =><div key={job.id}> <JobDetails   job={job} /> </div> )}
        </div>
    )
}

export default JobList;