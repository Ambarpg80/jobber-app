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
        const loginParams = {username, password}           
        fetch("/login",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(loginParams)
        })
        .then(res => {
            if (res.ok){ 
            res.json().then( user =>  login(user) )           
           } else {
            res.json().then( err => setLoginError( err.error.map(err=> <li>{err}</li>) ) )
             
           }
        })
    }   

    function displaySignup(){
        setShowSignup(!showSignup)
    }

    return(
    <>
    <div className='auth-container'>
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
            <button type="button">{showSignup ? "Go to Login " : "Go to Sign Up"}</button> 
        </div>
        <ul>{loginError}</ul>
    </div>
    </>
    )
}

export default LoginForm