import React from "react"
import "./NavigationBar.css"
import Logotype from "../../shared/images/logotype.svg"
import {useNavigate} from "react-router-dom"

export const Navigationbar = () => {
    const navigate = useNavigate();

    return (
        <div className="navigationBarWrapper">
             <img onClick={() => navigate ("/")}
             className="logotype"
             src={Logotype} alt="Error..."/>
             <span onClick={() => navigate ("/signin")}
              className="signIn">Sign in</span>
        </div>
    )
}