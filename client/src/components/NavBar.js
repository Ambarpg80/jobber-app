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

  const userLogo = {color:"navy",
                    position: 'absolute',
                    top: 10, 
                    right: 120, }
 
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
          {isLoggedIn ? <NavLink style={findNPost} to="/me">Dashboard</NavLink> : <NavLink style={findNPost} to="/posts">Find A Job</NavLink>}
         
         {isLoggedIn ? <Link style={loginLink} onClick={logoutUser}> Logout </Link> :  <Link style={loginLink} to="/login"> Login </Link>  }
          <NavLink style={userLogo} to="/users/:id">{isLoggedIn ? <img width="40" height="40" src="https://img.icons8.com/pastel-glyph/64/user-male-circle.png" alt="user-male-circle"/> : null}</NavLink>
        </nav>
        
    )
 
}

export default NavBar;

// Login icons created by berkahicon - Flaticon