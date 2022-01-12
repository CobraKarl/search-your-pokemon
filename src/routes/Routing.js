import React, {useContext, useEffect,} from "react"
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import {ReceptView} from "../view/ReceptView"
import {HomeView} from "../view/HomeView"
import { SigInView } from "../view/SignInView"
import {UserContext} from "../shared/global/provider/UserProvider"
import { ProfileView } from "../view/ProfileView"
import { SettingsView } from "../view/SettingsView"


export const Routing = (props) => {

    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const checkIfUserIsAuthenticatedInBrowser = () => {
        setAuthenticatedUser(localStorage.getItem("username"))
    }

    useEffect(() => {
        setAuthenticatedUser(localStorage.getItem("username"))

    }, [])

    return (
        <Router>
            {props.children}
            <Routes>
                <Route exact path="/recipe" element={ <ReceptView/>} />
                <Route exact path="/signin" element={ <SigInView/>} />
                <Route exact path="/profile" element={<ProfileView/>} />
                <Route exact path="/settings" element={<SettingsView/>} />
                <Route path="/" element={ <HomeView/> } />
                
            </Routes>
        </Router>
    )
}