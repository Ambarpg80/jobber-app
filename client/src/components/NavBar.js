import React, {useState, useContext} from 'react'
import { NavLink , Link} from 'react-router-dom';
 import { UserContext } from './context/UserProvider';



function NavBar(){
  const {isLoggedIn ,logout} =useContext(UserContext)
  const [isActive, SetIsActive] = useState(false)
  
  const loginLink = {fontFamily: "Helvetica",
                    position: 'absolute',
                    top: 20, 
                    right: 30, 
                    textDecoration: 'none'};

  const logo = {color: 'navy', 
                fontSize: "40px", 
                textDecoration: 'none',
                fontFamily: 'Train One, cursive'}

  const findNPost = { paddingLeft: "3vh", textDecoration: 'none'}
 
  function handleNav(){
    SetIsActive(!isActive)
  }
  function logoutUser(){
     fetch ("/logout",{
      method: "DELETE"
     })
     .then(() => logout())      
     }
  


 
 return(
        <nav onClick={handleNav} className="App-header active" >
         
          <NavLink style={logo}to="/welcome">JobLancer</NavLink>
          <NavLink style={findNPost} to="/posts">Find A Job</NavLink>
          <NavLink style={findNPost} to="/posts/new">{isLoggedIn ? "Post A Job" : null}</NavLink>
         {isLoggedIn ? <Link style={loginLink} onClick={logoutUser}> Logout </Link> :  <Link style={loginLink} to="/login"> Login </Link>  }
      
        </nav>
        
    )
 
}

export default NavBar;

