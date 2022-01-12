import React, { useContext } from "react";
import { UserContext } from "../../shared/global/provider/UserProvider";
import {useNavigate} from "react-router-dom"
import "./Profile.css"
import RoutingPath from "../../routes/RoutingPath";

export const Profile = () => {
    const navigate = useNavigate()
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const logout = () => {
        localStorage.removeItem("username")
        setAuthenticatedUser(false)
        navigate(RoutingPath.HomeView);
    }



    return (
        <div className="profileWrapper">
            <img className= "profileImg" src={"https://thispersondoesnotexist.com/image"} alt="" />
            <span className="displayedUsername">{authenticatedUser}</span>
            <div className="profileDropdown">
               <a onClick={() => navigate(RoutingPath.SettingsView)}>Settings</a>
               <a onClick={() => navigate(RoutingPath.ProfileView)}>Profile</a>
               <hr />
               <a onClick={() => logout()}>Logout</a>
            </div>
        </div>
    )
}