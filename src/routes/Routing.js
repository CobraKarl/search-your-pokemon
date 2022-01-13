import React, {useContext, useEffect,} from "react"
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import {ReceptView} from "../view/ReceptView"
import {HomeView} from "../view/HomeView"
import { SignInView } from "../view/SignInView"
import {UserContext} from "../shared/global/provider/UserProvider"
import { ProfileView } from "../view/ProfileView"
import { SettingsView } from "../view/SettingsView"
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
                <Route exact path={RoutingPath.ReceptView} element={ <ReceptView/>} />
                <Route exact path={RoutingPath.SignInView} element={blockRouteIfAuthenticaded (<SignInView/>)} />
                <Route exact path={RoutingPath.ProfileView} element={blockRouteIfNotAutenticated(<ProfileView/>)} />
                <Route exact path={RoutingPath.SettingsView} element={blockRouteIfNotAutenticated(<SettingsView/>)} />
                <Route path="/" element={ <HomeView/> } />
                
            </Routes>
        </Router>
    )
}