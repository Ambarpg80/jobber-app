import React, {useState} from 'react'


function SignUpForm({onSignUp}){
    const [newUser, setNewUser] = useState({
        name: "",
        username: "",
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
            header: {"Content-Type": "application/json"},
            body: JSON.stringify({name: newUser.name,
                                  username: newUser.username,
                                  password: newUser.password,
                                  password_confirmation: newUser.password_confirmation,})
        })
        .then(res => res.json())
        .then(newUser => onSignUp(newUser))
    }
    
    return(
    <div className='form-container'>
        <h1 >Welcome to Jobber</h1>
        <p>Sign Up</p>
        <form onSubmit={handleSignup}>
            <label > Name:
                <input onChange={inputChange} type="text" id="name" value={newUser.name}></input>
            </label> <br/>
            <label >Username:
                <input onChange={inputChange} type="text" id="username" value={newUser.username}></input>
            </label> <br/>
            <label >Password:
                <input onChange={inputChange} type="password" id="password" value={newUser.password}></input>
            </label> <br/>
            <label >Confirm Password:
                <input onChange={inputChange}type="password" id="password_confirmation" value={newUser.password_confirmation}></input>
            </label> <br/>
            <button>Submit</button>
        </form>
    </div>
    )
}
export default SignUpForm