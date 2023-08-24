import React, {useState, useContext} from 'react'
import {UserContext} from './context/UserProvider'
import SignUpForm from './SignUpForm';
 


function LoginForm(){
    const [loginError, setLoginError] = useState([])
     const [username, setUsername] = useState("");
     const [password, setPassword]= useState("");
     const [showSignup, setShowSignup] = useState(false)
     const {login} = useContext(UserContext);

    function handleLogin(e){
        e.preventDefault()
        fetch("/login",{
            method: "POST",
            header: {"Content-Type": "application/json"},
            body: JSON.stringify({username: username, 
                                  password: password, })

        })
        .then(res => {
            if (res.ok){ 
            res.json().then( user => console.log(user) )}
            // else{
            // res.json().then( err => setLoginError( err.error.map(err=> <li>{err}</li>) ))
            // }
        })
    }

    function displaySignup(){
        setShowSignup(!showSignup)
    }

    return(
    <>
    <div className='form-container'>
        <h1 >Welcome to Jobber</h1>
        {showSignup ? <SignUpForm /> :
        <form onSubmit={handleLogin}>
            <label >Username:
                <input type="text" 
                       id="username" 
                       value={username}
                       onChange={(e) => setUsername(e.target.value)}>
                </input>
            </label> <br/>
            <label >Password:
                <input type="password"  
                       id="password" 
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}>
                </input>
            </label> <br/>
            <button type="submit">Login</button>
        </form> }
        <div onClick={displaySignup} >
            <button type="button">{showSignup ? "Login " : " Sign Up"}</button> 
        </div>
        <ul>{loginError}</ul>
    </div>
    </>
    )
}
export default LoginForm