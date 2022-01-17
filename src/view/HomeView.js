import React, {useState} from "react";
import Axios from "axios";


export const HomeView = () => {
    const [data, setData] = useState()
    const [search, setSearch] = useState("")


    const fetchDataFromExternalAPI = () => {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`)
        .then((response) => setData(response.data))
        .catch((Error) => console.log(Error))
    }

    


    const displayData = () => {
        if(data) {
            return <div>
                <font face="Calibri">Name:<b> {data.name}</b></font>
                <br></br>               
                <font face="Calibri">Id Number:<b> {data.id}</b></font>
                <br></br>
                <font face="Calibri">Weight: <b>{data.weight}</b></font>
                <br></br>
                <font face="Calibri">Height:<b> {data.height}</b></font>
                <br></br>
                <font face="Calibri">Type: <b>{data.types[0].type.name}</b></font>
                <br></br>
                <font face="Calibri"><b>Picture:</b></font>
                <br></br>
                <img src={data.sprites.other.home.front_default}/>
                    
            </div>

        }
    }

    return(
        <div>
            <span>
            <font face="Calibri">Search for Pokemon (Name or Id Number):</font> </span>
            <input onChange={(Event) => setSearch (Event.target.value)} />

            <br />
            <button onClick={() => fetchDataFromExternalAPI()}>Find Pokemon</button>
            {displayData()}
        </div>
    )
}