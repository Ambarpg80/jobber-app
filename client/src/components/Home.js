import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import NavBar from "./NavBar"



function Home(){
     
 return(
  <div>
    
    <NavBar/>
    <h1 >Homepage </h1>
    <Outlet />
       
   
  </div>
  )
}

export default Home;