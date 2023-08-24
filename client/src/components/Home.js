import React, {useContext} from 'react'
import {Outlet} from 'react-router-dom'
import NavBar from "./NavBar"
import {UserContext} from './context/UserProvider'
import LoginForm from './LoginForm'



function Home(){
     const {currentUser, isLoggedIn} = useContext(UserContext);

  //     if(!currentUser)  {
  //     	<h3> Please Login or Sign Up </h3>
  //       return (<div> <LoginForm/> </div> ) //<SignUpForm/>
  //  } else {
 
 return(
  <div >
    <nav className='App-header'> <NavBar/>
    <h3 id="welcome">{ isLoggedIn ? `Welcome Back ${currentUser.name}!` : null}</h3>
    </nav>
    <Outlet />
       
   
  </div>
  )
}
 
export default Home