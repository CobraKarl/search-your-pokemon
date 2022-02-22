import React, {useState,useEffect}  from "react";
import Axios from "axios"
import Ash from "../shared/images/ash.svg"



export const GameView = () => {
    const [data, setData] =useState ()
    const [search, setSearch] = useState("");



    const getRandomNumber = () => {
        return Math.floor (Math.random()*898)
        
    }

    const verifyGuess = () => {
      console.log (data.name)
      
    }
    
   

    const fetchDataFromExternalAPI = () => {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${getRandomNumber()}`)
        .then((response) => setData(response.data)+console.log(response.data))
        .catch((Error) => setData("Error"))
    }
    

    const displayData = () => {
        if(data) {
            return <div>
                <img src={data.sprites.other.home.front_default} width="250" height="250"/>
                <br></br>
                <span>
                <font face="Calibri">Guess The Name Of The Pokemon (test):</font> </span>
                <h1>{search}</h1>
                <input onChange={(Event) => setSearch (Event.target.value)}></input>
                <button onClick={() => {verifyGuess()}}>Send</button>
                <h1>{verifyGuess}</h1>
                   

                 
           
                           
                <br></br>
            </div>
        }
    }
    return (
        <div>
            <button onClick={() => fetchDataFromExternalAPI()}>START</button>
            {displayData()}  
             
            
     
            
        </div>
    )

    return <div>
        
    </div>
        
    
    
    


}   
    



// 1. Gör Api anrop hämta data och spara i state
// 2. Visa bild på karaktär
// 3. Skapa input fält och spara inmatningsvärdet i ett state
// 4. Skapa knapp och när man klickar på knappen så ska man jämföra inmatningvärde med namn (karräktär)
// 5. Om anv gissar rätt , Rätt svar text!
// 6. om fel svar tyvårr fel svar, + home knapp