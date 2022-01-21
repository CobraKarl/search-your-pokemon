import React from "react";
import { Route } from "react-router-dom";
import Ash from "../shared/images/ash.svg"


export const PageNotFound= () => {
    return (
        <div>
        <br></br>
            <a href="/"><button>Back To Home</button></a><br/>
            <img src={Ash} />
            <div id="info">
            </div>
        </div >
    )
}