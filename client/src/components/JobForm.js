import React, {useState} from 'react'



function JobForm({onSubmission}){
   const [jobPostData, setJobPostData] = useState({
    company_name: "", 
    industry: "" ,
    title: "" ,
    salary: "" ,
    experience_level: "" ,
    location: "" ,
    job_type: "" ,
    benefits: "",
    description: ""
   })

   function handleChange(e){
    setJobPostData({...jobPostData , 
                    [e.target.id]: e.target.value,});
   }

   function handleSubmit(e){
    e.preventDefault()
    fetch("/posts/new",{
        method: "POST",
        header: {"Content-Type": "application/json"},
        body: JSON.stringify({
                                company_name: jobPostData.company_name , 
                                industry: jobPostData.industry,
                                title: jobPostData.title ,
                                salary: jobPostData.salary ,
                                experience_level: jobPostData.experience_level,
                                location: jobPostData.location,
                                job_type: jobPostData.job_type,
                                benefits: jobPostData.benefits,
                                description: jobPostData.description})
    })
    .then(res => res.json())
    .then(newPost => onSubmission(newPost))
   }
  
 return(

    <div className='container'>
      <form onSubmit={handleSubmit}>
        <label>Company Name: 
            <input type="text"
                    id="company_name"
                    value={jobPostData.company_name}
                    onChange={handleChange}></input>
        </label><br/>
        <label> Industry:
            <input type="text"
                    id="industry"
                    value={jobPostData.industry}
                    onChange={handleChange}></input>
        </label><br/>
        <label> Title: 
            <input type="text"
                    id="title"
                    value={jobPostData.title}
                    onChange={handleChange}></input>
        </label><br/>
        <label> Salary:
            <input type="text"
                    id="salary"
                    value={jobPostData.salary}
                    onChange={handleChange}></input>
        </label><br/>
        <label> Experience Level:
            <input type="text"
                    id="experience_level"
                    value={jobPostData.experience_level}
                    onChange={handleChange}></input>
        </label><br/>
        <label> Location:
            <input type="text"
                    id="location"
                    value={jobPostData.location}
                    onChange={handleChange}></input>
        </label>
        <label> Job Type:
            <input type="text"
                    id="job_type"
                    value={jobPostData.job_type}
                    onChange={handleChange}></input>
        </label><br/>
        <label> Benefits: 
            <input type="text"
                    id="benefits"
                    value={jobPostData.benefits}
                    onChange={handleChange}></input>
        </label><br/>
        <label> Description:
            <input type="text"
                    id="description"
                    value={jobPostData.description}
                    onChange={handleChange}></input>
        </label><br/>
       <button> Submit Job Post</button>
      </form>
    </div>
    
    )
}

export default JobForm;