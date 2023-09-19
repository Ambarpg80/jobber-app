import React, {useState, useContext} from 'react'
import { UserContext } from './context/UserProvider';

function InquiryEditForm({job, inquiry, onInquiryUpdate}){
     const {currentUser} = useContext(UserContext);
     const [editError, setEditError] = useState("")
     const [formUpdate, setFormUpdate] = useState({
            post_id: job.id,
            user_id: currentUser.id,
            name: inquiry.name, 
            address: inquiry.address, 
            email: inquiry.email, 
            phone_number: inquiry.phone_number, 
            skills: inquiry.skills, 
            education: inquiry.education, 
            about: inquiry.about,
 })
     function handleChange(e){
         setFormUpdate({...formUpdate , 
                         [e.target.id]: e.target.value,});
       }

     const editData= {name: formUpdate.name , 
                      address: formUpdate.address,
                      email: formUpdate.email ,
                      phone_number: formUpdate.phone_number,
                      skills: formUpdate.skills,
                      education: formUpdate.education,
                      about: formUpdate.about,
 }
     function updateInquiry(e){
        e.preventDefault()
         fetch(`/inquiries/${inquiry.id}`,{
           method:"PATCH",
           headers: {"Content-Type": "application/json"},
           body: JSON.stringify(editData),
         })
           .then(res => {
             if(res.ok){
               res.json().then(data=> onInquiryUpdate(data))
             }else{
               res.json().then(err=> setEditError(err.errors.map(error => <li>{error}</li>)))
             }
           })
         }
 
    return(
        <div>
             <form onSubmit={updateInquiry}>
            <label>Name: 
                <input type="text"
                        id="name"
                        value={formUpdate.name}
                        onChange={handleChange}></input>
            </label><br/>
            <label> Address:
                <input type="text"
                        id="address"
                        value={formUpdate.address}
                        onChange={handleChange}></input>
            </label><br/>
            <label> Email: 
                <input type="text"
                        id="email"
                        value={formUpdate.email}
                        onChange={handleChange}></input>
            </label><br/>
            <label> Phone Number:
                <input type="text"
                        id="phone_number"
                        value={formUpdate.phone_number}
                        onChange={handleChange}></input>
            </label><br/>
            <label> Skills:
                <input type="text"
                        id="skills"
                        value={formUpdate.skills}
                        onChange={handleChange}></input>
            </label><br/>
            <label> Education:
                <input type="text"
                        id="education"
                        value={formUpdate.education}
                        onChange={handleChange}></input>
            </label><br/>
            <label> About:
                <input type="text"
                        id="about"
                        value={formUpdate.about}
                        onChange={handleChange}></input>
            </label><br/>
            <button> Submit Edit</button>
            </form>
            <br/>
            {editError}
        </div>


    
    )
}
export default InquiryEditForm;