import React, {useState} from 'react'
 import { NavLink } from 'react-router-dom';
 



function NavBar(){
  const [isActive, SetIsActive] = useState(false)
  const login = {
                    position: 'absolute', 
                    right: 20, 
                    fontSize: "20px",
                    alignItems: 'center',
                    borderRadius: '5px',
                    textDecoration: 'none'};
  const signup = {
                      position: 'absolute', 
                      right: 80, 
                      fontSize: "20px",
                      alignItems: 'center',
                      borderRadius: '5px',
                      textDecoration: 'none'};

  const logo = {color: 'navy', fontSize: "30px", fontWeight: "bold", textDecoration: 'none'}

  const findNPost = { paddingLeft: "3vh", textDecoration: 'none'}
 
  function handleNav(){
    SetIsActive(!isActive)
  }

 return(
        <nav onClick={handleNav} className="App-header active" >
         <div > 
          <NavLink style={logo}to="/">Jobber</NavLink>
          <NavLink style={findNPost} to="/posts">Find A Job</NavLink>
          <NavLink style={findNPost} to="/posts/new">Post A Job</NavLink>
          <NavLink  style={login}  to="/me" > Login </NavLink> 
          <NavLink  style={signup} to="/signup" > Sign Up </NavLink> 
          </div>
        </nav>
        
    )
}

export default NavBar;

