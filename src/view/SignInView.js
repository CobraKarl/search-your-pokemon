import React, {useContext, useState} from "react"
import {UserContext} from "../shared/global/provider/UserProvider"

export const SigInView = () => {

   const [Username, setUsername] = useState () 
   const [Password, setPassWord] = useState ()
   const [authenticatedUser, setAuthenticatedUser] = useContext (UserContext)
   const login = () => {
       setAuthenticatedUser(Username)

   }

    return (
        <div>
            <span>Username: </span><input onChange={event => setUsername (event.target.value)} /> <br/>
            <span>Password: </span><input type="Password" onChange={event => setPassWord (event.target.value)} /> <br/>
            <button onClick={() => login()}>Login</button>
            <button onClick={()=> alert(authenticatedUser)}>Show Authenticated User! </button>
        </div>
    )
}