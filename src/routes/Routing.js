import React, {useContext, useEffect,} from "react"
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import {HomeView} from "../view/HomeView"
import { SignInView } from "../view/SignInView"
import {UserContext} from "../shared/global/provider/UserProvider"
import RoutingPath from "./RoutingPath"


export const Routing = (props) => {

    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const blockRouteIfAuthenticaded = (navigateToView) => {
        return authenticatedUser ? HomeView : navigateToView
    }
     


    const checkIfUserIsAuthenticatedInBrowser = () => {
        setAuthenticatedUser(localStorage.getItem("username"))
    }

    const blockRouteIfNotAutenticated = (navigateToView) => {
        return !authenticatedUser ? SignInView : navigateToView
    }

    useEffect(() => {
        setAuthenticatedUser(localStorage.getItem("username"))

    }, [])

    return (
        <Router>
            {props.children}
            <Routes>
                <Route exact path={RoutingPath.SignInView} element={blockRouteIfAuthenticaded (<SignInView/>)} />
                <Route path="/" element={ <HomeView/> } />
                
            </Routes>
        </Router>
    )
}