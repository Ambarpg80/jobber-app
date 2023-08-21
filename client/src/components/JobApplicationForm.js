import React, {useState} from "react";

function ApplicationForm({job, currentUser}){
    //    const [error, setError] = useState("")
       
    const [ApplicationData, setApplicationData] = useState({
        post_id: job.id,
        user_id: currentUser.id,
        name: "", 
        address: "" ,
        email: "" ,
        phone_number: "" ,
        skills: "" ,
        education: "" ,
        about: "",
        
       });
    
       function handleChange(e){
        setApplicationData({...ApplicationData , 
                        [e.target.id]: e.target.value,});
       }
    
       function applicationSubmission(e){
        e.preventDefault()
        //  const newJobItem=;
        fetch(`/posts/${job.id}/inquiries`,{
            method: "POST",
            header: {Accept: 'application/json',
                     "Content-Type": "application/json"},
            body: JSON.stringify({ 
                                name: ApplicationData.name, 
                                address: ApplicationData.address ,
                                email: ApplicationData.email ,
                                phone_number: ApplicationData.phone_number ,
                                skills: ApplicationData.skills,
                                education: ApplicationData.education ,
                                about: ApplicationData.about,
                                }),
        })
        .then(res => res.json())
        .then(newApplication => console.log(newApplication) )
            // {onSubmission(newPost)
            //               setApplicationData({name: "", 
                                            // address: "" ,
                                            // title: "" ,
                                            // email: "" ,
                                            // phone_number: "" ,
                                            // skills: "" ,
                                            // education: "" ,
                                            // about: "",
            //                               ,})
            //         })
       }
      
     return(
        <div>
          <div className='form-container'>
            <form onSubmit={applicationSubmission}>
                <label>Full Name: 
                    <input type="text"
                            id="name"
                            value={ApplicationData.name}
                            onChange={handleChange}></input>
                </label><br/>
                <label> Address:
                    <input type="text"
                            id="address"
                            value={ApplicationData.address}
                            onChange={handleChange}></input>
                </label><br/>
                <label> Email:
                    <input type="text"
                            id="email"
                            value={ApplicationData.email}
                            onChange={handleChange}></input>
                </label><br/>
                <label> Phone Number:
                    <input type="text"
                            id="phone_number"
                            value={ApplicationData.phone_number}
                            onChange={handleChange}></input>
                </label><br/>
                <label> Skills:
                    <input type="text"
                            id="skills"
                            value={ApplicationData.skills}
                            onChange={handleChange}></input>
                </label><br/>
                <label> Highest Level of Education:
                    <input type="text"
                            id="education"
                            value={ApplicationData.education}
                            onChange={handleChange}></input>
                </label><br/>
                <label> About: 
                    <input type="text"
                            id="about"
                            value={ApplicationData.about}
                            onChange={handleChange}></input>
                </label><br/>
            
            <button> Submit Application </button>
            </form>
          </div>
        </div>
        )
    }
    
    export default ApplicationForm;