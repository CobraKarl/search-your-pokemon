import React, {useContext, useState} from "react"
import {UserContext} from "../shared/global/provider/UserProvider"
import {useNavigate} from "react-router-dom"

export const SigInView = () => {
    const navigate = useNavigate()


   const [username, setUsername] = useState () 
   const [password, setPassWord] = useState ()
   const [authenticatedUser, setAuthenticatedUser] = useContext (UserContext)
   
   const login = () => {
       setAuthenticatedUser(username)
       localStorage.setItem("usename", username)
       navigate("/")
   }

    return (
        <div>
            <span>Username: </span><input onChange={event => setUsername (event.target.value)} /> <br/>
            <span>Password: </span><input type="Password" onChange={event => setPassWord (event.target.value)} /> <br/>
            <button onClick={() => login()}>Login</button>
        </div>
    )
}