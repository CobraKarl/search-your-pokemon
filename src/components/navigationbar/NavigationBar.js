import React, {useContext} from "react"
import "./NavigationBar.css"
import Logotype from "../../shared/images/logotype.svg"
import {useNavigate} from "react-router-dom"
import { UserContext } from "../../shared/global/provider/UserProvider"
import { Profile } from "../profile/Profile"

export const Navigationbar = () => {
    const navigate = useNavigate();
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const displayUserIfAuthenticated = () => {
        return (authenticatedUser)
            ? <div className="profle"> <Profile /> </div> 
            :<span onClick={() => navigate ("/signin")} className="signIn">Sign in</span>
    }

    return (
        <div className="navigationBarWrapper">
            <img onClick={() => navigate ("/")}
                className="logotype"
                src={Logotype} 
                alt="Error..."/>
            {displayUserIfAuthenticated()}
        </div>
    )
}