import React, {useState} from 'react'
import JobDetails from "./JobDetails"

function JobList({alljobs}){
  const [search, setSearch] = useState("")
  
   function handleSearch(e){
      setSearch(e.target.value)
    }
    
    const filteredList = alljobs.filter(job => {
      return job.title.toLowerCase().includes(search.toLowerCase())
    })
    
    return(
        <div >
          <div id="Seach" style={{marginLeft: "15%", fontSize: "25px"}} >
            <label> Search : 
               <input onChange={handleSearch} value={search} placeholder="Search"></input>
            </label>
          </div>
          <hr/>
          <div > 
            <div style={{float: "right", position: "absolute", border: "solid 2px rgba(0, 0, 0, 0.114)"}}>
            </div>
            {filteredList.map(job =><div key={job.id} className='jobs-page'> <JobDetails job={job} /> </div> )}
           
          </div>
          
        </div>
    )
}

export default JobList;