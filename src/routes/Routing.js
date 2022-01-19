import React, {useContext, useEffect,} from "react"
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import {HomeView} from "../view/HomeView"
import {UserContext} from "../shared/global/provider/UserProvider"
import RoutingPath from "./RoutingPath"


export const Routing = (props) => {

    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const blockRouteIfAuthenticaded = (navigateToView) => {
        return authenticatedUser ? HomeView : navigateToView
    }
     


 

    useEffect(() => {
        setAuthenticatedUser(localStorage.getItem("username"))

    }, [])

    return (
        <Router>
            {props.children}
            <Routes>
        
                <Route path="/" element={ <HomeView/> } />
                
            </Routes>
        </Router>
    )
}