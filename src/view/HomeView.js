import React, {useState} from "react";
import Axios from "axios";
import { weightConverter } from "../functions/weightConverter";
import { heightConverter } from "../functions/heightConverter";


export const HomeView = () => {
    const [data, setData] = useState()
    const [search, setSearch] = useState("")


    const fetchDataFromExternalAPI = () => {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`)
        .then((response) => setData(response.data)+console.log(response.data))
        .catch((Error) => console.log(Error))
    }



    const displayData = () => {
        if(data) {
            return <div>
                <fieldset className="field">
                <legend><font face="Calibri"><b>Details:</b></font></legend>   
                <p><font face="Calibri"><label>Name:</label>
                <b>{data.name}</b><br />
                <label>Id Number:</label>
                <b>{data.id}</b><br />
                <label>Weight:</label>
                <b>{weightConverter(data.weight)}kg</b><br />
                <label>Height:</label>
                <b>{heightConverter(data.height)}m</b><br />
                <label>Type:</label>
                <b>{data.types[0].type.name}</b><br /></font></p>
                </fieldset>
                <img src={data.sprites.other.home.front_default}width="250" height="250"/>
            </div>

        }
    }

    return(
        <div>
            <span>
            <font face="Calibri">Search Your Pokemon "Name Or Id":<br /></font> </span>
            <input
                onChange={(Event) => setSearch (Event.target.value)}
                onKeyPress={Event => Event.key === "Enter" && fetchDataFromExternalAPI(displayData)} />
            <br />
            <br />
            <button onClick={() => fetchDataFromExternalAPI()}>Find</button>
            {displayData()}
        </div>
    )
}