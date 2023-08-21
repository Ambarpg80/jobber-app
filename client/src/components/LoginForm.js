import React, {useState} from 'react'
// import NavBar from './NavBar'


function LoginForm({setCurrentUser}){
     const [username, setUsername] = useState("");
     const [password, setPassword]= useState("");
     const [errors, setErrors] =useState([]);
    

    function handleLogin(e){
        e.preventDefault()
        fetch("/login",{
            method: "POST",
            header: {"Content-Type": "application/json"},
            body: JSON.stringify({username, password })
        })
        .then(res => {
            if (res.ok){ 
            res.json().then(user => console.log(user))}
        // else{
        //     res.json().then((err) => setErrors(err.errors));
        // }
        })
    }


    return(
    <>
    <div className='form-container'>
        <h2 >Please Login</h2>
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
           {console.log(errors)}
        </form>
    </div>
    </>
    )
}
export default LoginForm