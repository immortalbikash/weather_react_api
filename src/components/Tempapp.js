import React, { useEffect, useState } from "react";
import "./css/Style.css";

const Tempapp = () => {

    const [city, setCity] = useState("");
    const [search, setSearch] = useState("Kathmandu");

    useEffect(()=> {

        const fetchApi = async()=> {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=090ad178865aa9b2a5bfa57c890c0aae`;
            const response = await fetch(url);
            const resJson = await response.json();
            // console.log(resJson);
            setCity(resJson.main);
        }

        fetchApi();

    }, [search])

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            onChange={(event) => {
                setSearch(event.target.value)
            }}
            value={search}
          />
        </div>

        {!city ? (
            <h3>No Data found</h3>
        ) :  (
            <div className="info">
          <h2 className="location">
            <i className="fa fa-map-marker" aria-hidden="true" />{search}
          </h2>
          <h1 className="temp">
            {city.temp} °C
          </h1>
          <h3 className="tempmin_max">
            Min: {city.temp_min} °C | Max: {city.temp_max} °C
          </h3>
        </div>
        )}

        
      </div>
    </>
  );
};

export default Tempapp;
