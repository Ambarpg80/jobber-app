import React, {useState, useEffect} from 'react';



const UserContext = React.createContext();

function UserProvider({children}){
    const [currentUser, setCurrentUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        fetch("/me")
          .then(res => res.json())
          .then( userData => {setCurrentUser(userData) 
          userData.error ? setIsLoggedIn(false) : setIsLoggedIn(true)
        })
      }, []);
    

      function login(user){
        setCurrentUser(user)
        setIsLoggedIn(true)
      }
      function logout(){
        setCurrentUser({})
        setIsLoggedIn(false)
      }
      function signup(user){
        setCurrentUser(user)
        setIsLoggedIn(true)
      }

	return(
	<UserContext.Provider value={{currentUser, isLoggedIn, login, logout, signup}}>
		{children}
	</UserContext.Provider >
	)
	

}

export { UserContext, UserProvider };