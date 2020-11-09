import React, { useEffect, useState } from "react";
import "../scss/calc.scss";
import { TiWeatherSunny, TiWeatherDownpour } from "react-icons/ti";
import { BiCalculator } from "react-icons/bi";

const Calc = () => {
  const API_KEY = "12a6abc5f129daa9c48c6753d3ac8026";

  const [lat, setLat] = useState("37.423692");
  const [lon, setLon] = useState("127.512827");

  const getWeather = (lat, lon) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`
    )
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  useEffect(() => {
    getWeather(lat, lon);
  }, []);

  return (
    <div className="calc">
      <div className="calc-box">
        <section className="calc-form">
          <h2>calculator</h2>
          <form action="">
            <label htmlFor="">Weather</label>
            <div>
              <TiWeatherSunny />
              <input type="text" />
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
