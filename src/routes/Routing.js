import React, {useContext, useEffect,} from "react"
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import {HomeView} from "../view/HomeView"
import {PageNotFound} from "../view/404page"
import {UserContext} from "../shared/global/provider/UserProvider"



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
        
                <Route exact path="/" element={ <HomeView/> } />
                <Route path="*" element={ <PageNotFound/>} />
                
            </Routes>
        </Router>
    )
}