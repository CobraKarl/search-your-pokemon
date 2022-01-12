import React, { useContext } from "react";
import { UserContext } from "../../shared/global/provider/UserProvider";
import {useNavigate} from "react-router-dom"
import "./Profile.css"

export const Profile = () => {
    const navigate = useNavigate()
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const logout = () => {
        localStorage.removeItem("username")
        setAuthenticatedUser(false)
        navigate("/");
    }



    return (
        <div className="profileWrapper">
            <img className= "profileImg" src={"https://thispersondoesnotexist.com/image"} alt="" />
            <span className="displayedUsername">{authenticatedUser}</span>
            <div className="profileDropdown">
               <a onClick={() => navigate("/settings")}>Settings</a>
               <a onClick={() => navigate("/profile")}>Profile</a>
               <hr />
               <a onClick={() => logout()}>Logout</a>
            </div>
        </div>
    )
}