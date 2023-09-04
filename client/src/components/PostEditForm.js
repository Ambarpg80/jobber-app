import React, {useState} from 'react'
// import { useNavigate } from 'react-router-dom';

function PostEditForm({job, onUpdate}){
    // const navigate = useNavigate("/posts")
    const [editError, setEditError] = useState("")
    const [formUpdate, setFormUpdate] = useState({
        company_name: job.company_name , 
        industry: job.industry,
        title: job.title ,
        salary: job.salary ,
        experience_level: job.experience_level,
        location: job.location,
        job_type: job.job_type,
        benefits: job.benefits,
        description: job.description,
})

    function handleChange(e){
        setFormUpdate({...formUpdate , 
                        [e.target.id]: e.target.value,});
      }

    const editData= {company_name: formUpdate.company_name , 
                     industry: formUpdate.industry,
                     title: formUpdate.title ,
                     salary: formUpdate.salary ,
                     experience_level: formUpdate.experience_level,
                     location: formUpdate.location,
                     job_type: formUpdate.job_type,
                     benefits: formUpdate.benefits,
                     description: formUpdate.description,
}

    function updatePost(){
        fetch(`/posts/${job.id}`,{
          method:"PATCH",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(editData),
        })
          .then(res => {
            if(res.ok){
              res.json().then(data=> onUpdate(data))
            }else{
              res.json().then(err=> console.log(err.error))
            }
          })
        }
    
    
    return(
    <div>
   <div >
        <form onSubmit={updatePost}>
            <label>Company Name: 
                <input type="text"
                        id="company_name"
                        value={formUpdate.company_name}
                        onChange={handleChange}></input>
            </label><br/>
            <label> Industry:
                <input type="text"
                        id="industry"
                        value={formUpdate.industry}
                        onChange={handleChange}></input>
            </label><br/>
            <label> Title: 
                <input type="text"
                        id="title"
                        value={formUpdate.title}
                        onChange={handleChange}></input>
            </label><br/>
            <label> Salary:
                <input type="text"
                        id="salary"
                        value={formUpdate.salary}
                        onChange={handleChange}></input>
            </label><br/>
            <label> Experience Level:
                <input type="text"
                        id="experience_level"
                        value={formUpdate.experience_level}
                        onChange={handleChange}></input>
            </label><br/>
            <label> Location:
                <input type="text"
                        id="location"
                        value={formUpdate.location}
                        onChange={handleChange}></input>
            </label><br/>
            <label> Job Type:
                <input type="text"
                        id="job_type"
                        value={formUpdate.job_type}
                        onChange={handleChange}></input>
            </label><br/>
            <label> Benefits: 
                <input type="text"
                        id="benefits"
                        value={formUpdate.benefits}
                        onChange={handleChange}></input>
            </label><br/>
            <label> Description:
                <input type="text"
                        id="description"
                        value={formUpdate.description}
                        onChange={handleChange}></input>
            </label><br/>
        <button> Submit Edit</button>
        </form>
        <br/>
        {editError}
      </div>
    </div>
    )
} 
export default PostEditForm