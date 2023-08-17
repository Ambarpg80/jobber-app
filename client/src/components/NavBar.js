import React from 'react'
 import { Link } from 'react-router-dom';



function NavBar(){
    // console.log(alljobs)
//    const styledButton= {
//                     position: 'absolute', 
//                     right: 20, 
//                     fontSize: "20px",
//                     alignItems: 'center',
//                     borderRadius: '5px',
//                     textDecoration: 'none'};
 return(
        <div >
          {/* <Link style={{color: 'navy', fontSize: "30px", textDecoration: 'none'}}to="/">Jobber</Link> */}
          {/* <Link style={{ paddingLeft: "3vh", textDecoration: 'none'}} to="/posts">Find A Job</Link>
          <Link style={{ paddingLeft: "3vh", textDecoration: 'none'}} to="/users">Post A Job</Link>
          <Link  style={styledButton} as={Link} to="/me" > Login </Link> className="App-header active"*/}
        </div>
        
    )
}

export default NavBar;

