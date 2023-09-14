import React from 'react'


function Inquiry({inquiry, job, onDelete }){

    function handleDelete(e){
      e.preventDefault()
      fetch(`/inquiries/${inquiry.id}`,{
      method: "DELETE", 
      })
      .then(onDelete(inquiry))
    }
      

    return (
        <div className="container">
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
          <button style={{width: "200px", marginLeft: "25%"}} onClick={handleDelete} type="button"> Withdraw Application </button> 
        </div>
    )
   
}
export default Inquiry