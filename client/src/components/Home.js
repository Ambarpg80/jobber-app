import React from 'react'
import {Outlet} from 'react-router-dom'
import NavBar from "./NavBar"
// import {UserContext} from './context/UserProvider'




function Home(){
    //  const {currentUser, isLoggedIn} = useContext(UserContext);

  //     if(!currentUser)  {
  //     	<h3> Please Login or Sign Up </h3>
  //       return (<div> <LoginForm/> </div> ) //<SignUpForm/>
  //  } else {
 
 return(
  <div >
    
    <nav className='App-header'> <NavBar/></nav>
    <Outlet/> 
   
   
  </div>
  )
}
// }
export default Home