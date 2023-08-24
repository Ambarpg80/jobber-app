import React, {useState, useContext} from 'react'
import { NavLink } from 'react-router-dom';
 import { UserContext } from './context/UserProvider';



function NavBar(){
  const {isLoggedIn ,logout} =useContext(UserContext)
  const [isActive, SetIsActive] = useState(false)
  
  const loginLink = {
                    position: 'absolute', 
                    right: 20, 
                    fontSize: "20px",
                    alignItems: 'center',
                    borderRadius: '5px',
                    textDecoration: 'none'};
  const signupLink = {
                      position: 'absolute', 
                      right: 100, 
                      fontSize: "20px",
                      alignItems: 'center',
                      borderRadius: '5px',
                      textDecoration: 'none'};

  const logo = {color: 'navy', fontSize: "30px", fontWeight: "bold", textDecoration: 'none'}

  const findNPost = { paddingLeft: "3vh", textDecoration: 'none'}
 
  function handleNav(){
    SetIsActive(!isActive)
  }
  function logoutUser(){
     fetch ('/logout')
     .then(() => logout())      
     }
  


 
 return(
        <nav onClick={handleNav} className="App-header active" >
         <div > 
          <NavLink style={logo}to="/">Jobber</NavLink>
          <NavLink style={findNPost} to="/posts">Find A Job</NavLink>
          <NavLink style={findNPost} to="/posts/new">Post A Job</NavLink>
          <NavLink  style={loginLink}  to="/login" > {isLoggedIn ? <button onClick={logoutUser}>Logout</button> : "Login" }</NavLink> 
          
          
          </div>
        </nav>
        
    )
 
}

export default NavBar;

