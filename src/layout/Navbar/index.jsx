import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";
import { HiMiniBars4 } from "react-icons/hi2";
import Dropdown from "../../components/Dropdown";

function Navbar() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <span>Dazzling Demo</span>
            </div>
            <div className="nav-links">
              <ul className="nav-menu">
                <li className="nav-menu-item">
                  <NavLink className={"navlinkItem"} activeClassName="active" to={"/"}>
                    Home
                  </NavLink>
                </li>
                <li className="nav-menu-item">
                  <NavLink className={"navlinkItem"} to={"/gallery"}>
                    Gallery
                  </NavLink>
                </li>
                <li className="nav-menu-item">
                  <NavLink className={"navlinkItem"} to={"/shortcodes"}>
                    Shortcodes
                  </NavLink>
                </li>
                <li className="nav-menu-item dropdown">
                  <p className={"navlinkItem"} to={"/about"}>
                    About
                  </p>
                  <Dropdown/>
                </li>
                <li className="nav-menu-item">
                  <NavLink className={"navlinkItem"} to={"/languages"}>
                    Languages
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;