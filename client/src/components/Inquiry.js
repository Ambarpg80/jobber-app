import InquiryEditForm from "./InquiryEditForm"
import React, {useState} from 'react'


function Inquiry({inquiry, job, onDelete, onInquiryUpdate }){
  const[displayEditForm, setDisplayEditForm] = useState(false)

    function handleDelete(e){
      e.preventDefault()
      fetch(`/inquiries/${inquiry.id}`,{
      method: "DELETE", 
      })
      .then(onDelete(inquiry))
    }
      
    function handleEditForm(){
      setDisplayEditForm(!displayEditForm)
    }


    return (
        <div className="container" style={{padding: "10%"}}>
        {displayEditForm ?
         <InquiryEditForm job={job} inquiry={inquiry} onInquiryUpdate={onInquiryUpdate} displayEditForm={displayEditForm} setDisplayEditForm={setDisplayEditForm}/>
         :
          <div>
          <details>
            <summary>
              <h2> {job.title} </h2> 
              <p> {job.company_name} </p>
            </summary>
              <div className='grid' >
                <p>Name: {inquiry.name}</p><br/>
                <p>Address: {inquiry.address}</p>
                <p>Email: {inquiry.email}</p>
                <p>Phone: {inquiry.phone}</p>
                <p>Skills: {inquiry.skills}</p>
                <p>Education: {inquiry.education}</p>
                <p>About: {inquiry.about}</p>
              </div>
          </details>
          <button style={{width: "180px", margin: "2%"}} onClick={handleDelete} type="button"> Withdraw Application </button> 
          </div>}
             <button  onClick={handleEditForm} type="button"> Update Application </button> 
        
        </div>
    )
   
}
export default Inquiry