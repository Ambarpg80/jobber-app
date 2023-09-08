import React, {useState, useContext} from 'react'
import { UserContext } from './context/UserProvider';


function LoginEditForm(){
    const {currentUser, setCurrentUser}= useContext(UserContext)
    const [editError, setEditError] = useState("")
    const [userUpdate, setUserUpdate] = useState({
          name: "" , 
          email: "",
          password: "" ,
          password_confirmation: "",
          })

    function handleChange(e){
      setUserUpdate({...userUpdate, 
                        [e.target.id]: e.target.value,});
      }

    const editData= {name: userUpdate.name, 
                     email: userUpdate.email,
                     password: userUpdate.password,
                     password_confirmation: userUpdate.password_confirmation,
                    }

    function updatePost(){
        fetch(`/users/${currentUser.id}`,{
          method:"PATCH",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(editData),
        })
          .then(res => {
            if(res.ok){
              res.json().then(data => setCurrentUser(data))
            }else{
              res.json().then(error => setEditError(error.errors.map(err => <li key={err}>{err}</li>)))
            }
          })
        }
    
    
    return(
    <div>
   <div className='auth-container'>
        <form onSubmit={updatePost}>
            <label>Name: 
                <input type="text"
                        id="name"
                        value={userUpdate.name}
                        onChange={handleChange}></input>
            </label><br/>
            <label> Email:
                <input type="text"
                        id="email"
                        value={userUpdate.email}
                        onChange={handleChange}></input>
            </label><br/>
            <label> Password: 
                <input type="password"
                        id="password"
                        value={userUpdate.password}
                        onChange={handleChange}></input>
            </label><br/>
            <label> Confirm Password:
                <input type="password"
                        id="password_confirmation"
                        value={userUpdate.password_confirmation}
                        onChange={handleChange}></input>
            </label><br/>
          <button> Save </button>
        </form>
        <br/>
        {editError}
      </div>
    </div>
    )
} 
export default LoginEditForm