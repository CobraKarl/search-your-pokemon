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
                <font face="Calibri"><h2>Name:<b> {data.name}</b></h2></font>
               
                <font face="Calibri"><h2>Id Number:<b> {data.id}</b></h2></font>
               
                <font face="Calibri"><h2>Weight: <b>{data.weight}</b></h2></font>
           
                <font face="Calibri"><h2>Height:<b> {data.height}</b></h2></font>
              
                <font face="Calibri"><h2>Type: <b>{data.types[0].type.name}</b></h2></font>
             
                <font face="Calibri"><h2><b>Picture:</b></h2></font>
             
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