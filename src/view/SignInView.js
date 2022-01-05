import React, {useState} from "react"

export const SigInView = () => {

   const [loggedInUser, setLoggedInUser] = useState () 
   const [Password, setPassWord] = useState ()

    return (
        <div>
            <span>Username: </span><input onChange={event => setLoggedInUser (event.target.value)} /> <br/>
            <span>Password: </span><input type="Password" onChange={event => setPassWord (event.target.value)} /> <br/>
            <button>Login</button>
        </div>
    )
}