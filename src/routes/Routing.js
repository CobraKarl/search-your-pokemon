import React from "react"
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import {ReceptView} from "../view/ReceptView"
import {HomeView} from "../view/HomeView"
import { SigInView } from "../view/SignInView"
 

export const Routing = (props) => {
    return (
        <Router>
            {props.children}
            <Routes>
                <Route exact path="/recipe" element={ <ReceptView/>} />
                <Route exact path="/signin" element={ <SigInView/>} />
                <Route element={ <HomeView/> } />
            </Routes>
        </Router>
    )
}