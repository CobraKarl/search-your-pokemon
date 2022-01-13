import React from "react";
import Axios from "axios"

export const HomeView = () => {

    const fetchDataFromExternalAPI = () => {
        Axios.get("https://pokeapi.co/api/v2/pokemon/mewtwo")
        .then((Response) => console.log(Response))
        .catch((Error) => console.log(Error))
    }

    return(
        <div>
            <button onClick={() => fetchDataFromExternalAPI()}>Make API call</button>
        </div>
    )
}