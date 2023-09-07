import React, { useState } from "react";
import "./navigation.css";
import { NavLink } from "react-router-dom";
import Home from "../../Pages/home/home";
function Navigation() {
  const [nav, setNav] = useState(true);
  const nav_active = () => {
    setNav(!nav);
  };

  return (
    <div className={nav ? "navigation" : "active-nav-bar"}>
      <div
        className="side-ver-bar"
        onMouseEnter={nav_active}
        onClick={nav_active}
      >
        <p className="nav-ver-bar"> &#124;&#124;</p>
      </div>

      <div
        className="side-bar px-2"
        onMouseLeave={nav_active}
        onClick={nav_active}
      >
        <ul>
          <li className="my-2">
            <NavLink to="/cs">Computer Science</NavLink>
          </li>
          <li className="my-2">Electronics & Communication</li>
          <li className="my-2">
            <NavLink to="/EEE">Electrical and Electronics</NavLink>
          </li>
          <li className="my-2">Mechanical</li>
          <li className="my-2">Civil</li>
          <li className="my-2">First Year</li>
        </ul>
        <ul>
          <li className="my-2">
            <NavLink to="/">HOME</NavLink>
          </li>
          <li className="my-2">
            <NavLink to="/contribute">CONTRIBUTE</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
