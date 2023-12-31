import React, {useState, useContext} from 'react'
import {UserContext} from './context/UserProvider'




function SignUpForm(){
    const {signup} = useContext(UserContext);
    const [signUpError, setsignUpError] = useState([])
    const [newUser, setNewUser] = useState({
            name: "",
            email: "",
            password: "",
            password_confirmation: ""
    })
   
 
    function inputChange(e){
        setNewUser({...newUser,
                  [e.target.id]: e.target.value })
    }

    function handleSignup(e){
        e.preventDefault()
        fetch("/signup",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name: newUser.name,
                                  email: newUser.email,
                                  password: newUser.password,
                                  password_confirmation: newUser.password_confirmation,})
       })
        .then(res => {
            if(res.ok){
                res.json().then( user => signup(user)) 
            }else{
                res.json().then(err=>  setsignUpError(err.errors.map(error => <li key={error}>{error}</li>)))
            }
            })
        }

    
    return(
    <div >
        <h2 >Please Sign up</h2>
        <form onSubmit={handleSignup}>
            <label > Name:
                <input onChange={inputChange} type="text" id="name" value={newUser.name}></input>
            </label> <br/>
            <label >Email:
                <input onChange={inputChange} type="text" id="email" value={newUser.email}></input>
            </label> <br/>
            <label >Password:
                <input onChange={inputChange} type="password" id="password" value={newUser.password}></input>
            </label> <br/>
            <label >Confirm Password:
                <input onChange={inputChange}type="password" id="password_confirmation" value={newUser.password_confirmation}></input>
            </label> <br/>
            <button>Sign Up</button>
        </form>
        <ul>
            {signUpError}
        </ul>
    </div>
    )
}
export default SignUpForm