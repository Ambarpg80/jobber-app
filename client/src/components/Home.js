import React from 'react'
import {Outlet} from 'react-router-dom'
import NavBar from "./NavBar"




function Home(){
    
   
 return(
  <div >
    
    <nav className='App-header'> <NavBar/></nav>
    <Outlet/> 
  
   
  </div>
  )
}
// }
export default Home