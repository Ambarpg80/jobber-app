import React, {useState, useContext} from "react";
import { UserContext } from "./context/UserProvider";
import { useParams, useNavigate } from "react-router-dom";


function InquiryForm({onApply, job}){
    const jobId = useParams()
    const navigate = useNavigate();
    const [applicationError, setApplicationError] = useState("")
    const {currentUser} = useContext(UserContext); 
    const [ApplicationData, setApplicationData] = useState({
        post_id: 0,
        user_id: 0,
        name: currentUser.name, 
        email: currentUser.email ,
        address: "" ,
        phone_number: "" ,
        skills: "" ,
        education: "" ,
        about: "",
      });
      
       
       function handleChange(e){
        setApplicationData({...ApplicationData , 
                        [e.target.id]: e.target.value,});
       }
        
       const applicationInput ={ post_id: parseInt(Object.values(jobId)),
                                user_id: currentUser.id,
                                name: ApplicationData.name, 
                                address: ApplicationData.address ,
                                email: ApplicationData.email ,
                                phone_number: ApplicationData.phone_number ,
                                skills: ApplicationData.skills,
                                education: ApplicationData.education ,
                                about: ApplicationData.about,
                                }
    
       function applicationSubmission(e){
        e.preventDefault()
        fetch(`/inquiries`,{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(applicationInput),
        })
        .then(res => {
            if(res.ok){
            res.json()
            .then(newApplication => { onApply(newApplication)
                                                navigate("/me") })
            }else{
            res.json().then(error => setApplicationError( error.errors.map(err => <li key={err}>{err}</li>) ) )
            }
        })                        
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
                <label> Email:
                    <input type="text"
                            id="email"
                            value={ApplicationData.email}
                            onChange={handleChange}></input>
                </label><br/> 
                <label> Address:
                    <input type="text"
                            id="address"
                            value={ApplicationData.address}
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
                     <textarea type="text"
                            id="about"
                            value={ApplicationData.about}
                            onChange={handleChange}>
                  </textarea>
                </label><br/>
            
            <button type="submit"> Submit Application </button>
            </form>
            {applicationError}
          </div>
        </div>
        )
}

    
export default InquiryForm