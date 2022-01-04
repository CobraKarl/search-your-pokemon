import React from "react"
import "./MyFirst.css"
export const MyFirst = (props) => {
    return(
        <>
            <h1 className="title"> 
                {props.name}
                {props.age}
             </h1>
        </>
    )
}