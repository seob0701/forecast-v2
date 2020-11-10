import React, { useEffect, useState } from "react";
import "../scss/calc.scss";
import { TiWeatherSunny, TiWeatherDownpour } from "react-icons/ti";
import { BiCalculator } from "react-icons/bi";
import { GrMapLocation } from "react-icons/gr";

const Calc = ({ geoLocation }) => {
  const API_KEY = "12a6abc5f129daa9c48c6753d3ac8026";

  const [lat, setLat] = useState("37.554722");
  const [lon, setLon] = useState("126.970833");

  const [locationWeather, setLocationWeather] = useState({
    name: "",
    main: { temp: "", temp_min: "", temp_max: "" },
  });

  const getWeather = (lat, lon) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`
    )
      .then((response) => response.json())
      .then((json) => setLocationWeather(json));
  };

  useEffect(() => {
    setLat(geoLocation.y.toString());
    setLon(geoLocation.x.toString());
    getWeather(lat, lon);
  }, [geoLocation]);

  console.log(locationWeather);

  return (
    <div className="calc">
      <div className="calc-box">
        <section className="calc-form">
          <h2>calculator</h2>
          <form action="">
            <label htmlFor="">Location</label>
            <div>
              <GrMapLocation />
              <input type="text" value={locationWeather.name} readOnly />
            </div>
            <label htmlFor="">Weather</label>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <TiWeatherSunny />
              <input
                type="text"
                value={`temperature : ${(
                  locationWeather.main.temp - 273.15
                ).toFixed(2)}`}
                readOnly
              />
              <input
                type="text"
                value={`min temperature : ${(
                  locationWeather.main.temp_min - 273.15
                ).toFixed(2)}`}
              />
              <input
                type="text"
                value={`max temperature : ${(
                  locationWeather.main.temp_max - 273.15
                ).toFixed(2)}`}
              />
            </div>
            <label htmlFor="">precipitation volume</label>
            <div>
              <TiWeatherDownpour />
              <input type="text" />
            </div>

            <label htmlFor="">result</label>
            <div>
              <BiCalculator />
              <input type="text" />
            </div>
            <input className="calc-btn" type="submit" value="calculation" />
          </form>
        </section>
      </div>
    </div>
  );
};

export default Calc;
