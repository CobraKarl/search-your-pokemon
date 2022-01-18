import React, {useContext} from "react"
import "./NavigationBar.css"
import Logotype from "../../shared/images/logotype.svg"
import {useNavigate} from "react-router-dom"
import { UserContext } from "../../shared/global/provider/UserProvider"
import { Profile } from "../profile/Profile"
import RoutingPath from "../../routes/RoutingPath"


export const Navigationbar = () => {
    const navigate = useNavigate();
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const displayUserIfAuthenticated = () => {
        return (authenticatedUser)
            ? <div className="profle"> <Profile /> </div> 
            :<span onClick={() => navigate (RoutingPath.SignInView)} className=""></span>
    }

    return (
        <div className="navigationBarWrapper">
            <img onClick={() => navigate (RoutingPath.HomeView)}
                className="logotype"
                src={Logotype} 
                alt="Error..."/>
            {displayUserIfAuthenticated()}
          
        </div>
    )
}