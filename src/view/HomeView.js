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
            <fieldset className="field">
              <legend>
                <font face="Calibri">
                  <b>Details:</b>
                </font>
              </legend>
              <p>
                <font face="Calibri">
                  <label>Name:</label>
                  <b>{data.name}</b>
                  <br />
                  <label>Id Number:</label>
                  <b>{data.id}</b>
                  <br />
                  <label>Weight:</label>
                  <b>{weightConverter(data.weight)}kg</b>
                  <br />
                  <label>Height:</label>
                  <b>{heightConverter(data.height)}m</b>
                  <br />
                  <label>Type:</label>
                  <b>{data.types[0].type.name}</b>
                  <br />
                </font>
              </p>
            </fieldset>
          </div>
          <img
            src={data.sprites.other.home.front_default}
            width="250"
            height="250"
          />
        </div>
      );
    }
    if (data == "Error") {
      return (
        <div>
          <br></br>
          <img src={Ash} />
        </div>
      );
    }
  };

  return (
    <div>
      <span>
        <font face="Calibri">
          Search Your Daddy "Name Or Id":
          <br />
        </font>{" "}
      </span>
      <input
        onChange={(Event) => setSearch(Event.target.value)}
        onKeyPress={(Event) =>
          Event.key === "Enter" && fetchDataFromExternalAPI(displayData)
        }
      />
      <br />
      <br />
      <button onClick={() => search.length > 0 && fetchDataFromExternalAPI()}>
        Find
      </button>
      {displayData()}
    </div>
  );
};
