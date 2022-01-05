import React, {useState} from "react"

export const SigInView = () => {

   const [loggedInUser, setLoggedInUser] = useState ("Mike") 

    return (
        <div>
            <h1>{loggedInUser}</h1>
            <button onClick={() => setLoggedInUser ("Hulken")}>Update the state value!</button>
        </div>
    )
}