import React from 'react'
import JobDetails from "./JobDetails"


function JobList({allJobs, filteredList, onPostDelete}){
  //, filteredList
 
  

    return(
        <div >
          <div > 
            <div style={{float: "right", position: "absolute", border: "solid 2px rgba(0, 0, 0, 0.114)"}}>
            </div>
           {(filteredList ? filteredList : allJobs).map(job => <div key={job.id} className='jobs-page'> 
            <JobDetails job={job} onPostDelete={ onPostDelete}/> </div> 
            )}
          </div>
        </div>
    )
}

export default JobList;