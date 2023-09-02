import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';




const UserContext = React.createContext("");

function UserProvider({children}){
    const [currentUser, setCurrentUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        fetch("/me")
          .then(res => res.json())
          .then( userData => { setCurrentUser(userData)            
          userData.error ? setIsLoggedIn(isLoggedIn) : setIsLoggedIn(!isLoggedIn)
        })
      }, []);
    
       
      function login(user){
        setCurrentUser(user)
        setIsLoggedIn(true)
        navigate("/me")
      }
      function logout(){
        setCurrentUser({})
        setIsLoggedIn(false)
        navigate("/welcome")
      }
      function signup(user){
        setCurrentUser(user)
        setIsLoggedIn(true)
      }

	return(
	<UserContext.Provider value={{currentUser, setCurrentUser, isLoggedIn, login, logout, signup}}>
		{children}
	</UserContext.Provider >
	)
	

}

export { UserContext, UserProvider };