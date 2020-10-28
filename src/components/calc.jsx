import React from "react";
import "../scss/calc.scss";
import { TiWeatherSunny, TiWeatherDownpour } from "react-icons/ti";

const Calc = () => {
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
            <input className="calc-btn" type="submit" value="calculation" />
          </form>
        </section>
      </div>
    </div>
  );
};

export default Calc;
