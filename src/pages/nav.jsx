import React, { useState } from "react";
import "../scss/nav.scss";
import { ImLeaf, ImMenu } from "react-icons/im";

const Nav = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="nav">
      <div className="nav-box">
        <div className="logo">
          <h2>
            <ImLeaf />
          </h2>
          <a href="/">Forecast</a>
        </div>
        <div>
          <ul className={toggle ? "nav-list" : "nav-list active"}>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/board">Board</a>
            </li>
            <li>
              <a href="/login">Log in</a>
            </li>

            <li>
              <a href="/register">Register</a>
            </li>
          </ul>
          <button onClick={() => setToggle(!toggle)}>
            <ImMenu />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
