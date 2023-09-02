import React from 'react'


function Inquiry({inquiry, onDelete}){
    
    function handleDelete(e){
      fetch(`/me/inquiries/${inquiry.id}`,{
      method: "DELETE",})
      .then(res => res.json)
      .then(()=> onDelete(inquiry))
    }


    return (
        <div className="container">
          {/* <h2 style={{marginBottom: 0, }}>{post.title}</h2>
          <p style={{margin: 0, }}> {post.company_name}</p> */}

          <div className='grid' >
            <p>Name: {inquiry.name}</p>
            <p>Address: {inquiry.address}</p>
            <p>Email: {inquiry.email}</p>
            <p>Phone: {inquiry.phone}</p>
            <p>Skills: {inquiry.skills}</p>
            <p>Education: {inquiry.education}</p>
            <p>About: {inquiry.about}</p>
          </div>
          <button style={{width: "200px", marginLeft: "25%"}} onClick={handleDelete} type="button"> Withdraw Application </button> 
        </div>
    )
}
export default Inquiry