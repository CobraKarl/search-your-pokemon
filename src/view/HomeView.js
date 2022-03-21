import React, { useState } from "react";
import Axios from "axios";
import { weightConverter } from "../functions/weightConverter";
import { heightConverter } from "../functions/heightConverter";
import Ash from "../shared/images/ash.svg";
import "./HomeView.css";

export const HomeView = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");

  const fetchDataFromExternalAPI = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`)
      .then((response) => setData(response.data) + console.log(response.data))
      .catch((Error) => setData("Error"));
  };

  const displayData = () => {
    if (data && data != "Error") {
      return (
        <div>
          <div className="details_frame">
            <fieldset >
              <legend>
                
                  <b>Details:</b>
                
              </legend>
              <p>
                
                  <label>Name: </label>
                  <b>{data.name}</b>
                  <br />
                  <label>Id Number: </label>
                  <b>{data.id}</b>
                  <br />
                  <label>Weight: </label>
                  <b>{weightConverter(data.weight)}kg</b>
                  <br />
                  <label>Height: </label>
                  <b>{heightConverter(data.height)}m</b>
                  <br />
                  <label>Type: </label>
                  <b>{data.types[0].type.name}</b>
                  <br />
               
              </p>
            </fieldset>
          </div>
          <img className="br"
            src={data.sprites.other.home.front_default}
            width="400"
            height="380"
          />
        </div>
      );
    }
    if (data == "Error") {
      return (
        <div>
          <br></br>
          <img src={Ash}
          width="500"
           />
        </div>
      );
    }
  };

  return (
    <div>
      <span>
        <div className="ex">
          Search Your Pokemon (Name Or Id) :
         
        </div>
        <br></br>
      </span>
      
        <input className="ex2"
          onChange={(Event) => setSearch(Event.target.value)}
          onKeyPress={(Event) =>
            Event.key === "Enter" && fetchDataFromExternalAPI(displayData)
          }
        />
       
      <br />
      <br />
      <button className="button" onClick={() => search.length > 0 && fetchDataFromExternalAPI()}>
        Find
      </button>
      {displayData()}<br></br>
     
    </div>
    
  );
};
