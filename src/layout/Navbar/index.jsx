import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import { HiMiniBars4 } from "react-icons/hi2";

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
                  <NavLink
                    className={"navlinkItem"}
                    activeClassName="active"
                    to={"/"}
                  >
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
                  <ul className="dropdown-menu">
                    <li className="dropdown-menu-item">
                      <NavLink activeClassName="active"   to="/about/markup">
                        <span>
                          <HiMiniBars4 />
                        </span>{" "}
                        <span>&nbsp;Page Markup And Formatting</span>
                      </NavLink>
                    </li>
                    <li className="dropdown-menu-item">
                      <NavLink activeClassName="active"   to="/about/contact">Contact From</NavLink>
                    </li>
                    <li className="dropdown-menu-item">
                      <NavLink activeClassName="active"   to="/about/image">Page Image Alignment</NavLink>
                    </li>
                    <li className="dropdown-menu-item">
                      <NavLink activeClassName="active"   to="/about/float">Clearing Floats</NavLink>
                    </li>

                    <li className="dropdown-menu-item">
                      <NavLink activeClassName="active"   to="/about/comments">Page With Comments</NavLink>
                    </li>

                    <li className="dropdown-menu-item">
                      <NavLink activeClassName="active"   to="/about/commentsdisabled   ">Page With Comments disabked</NavLink>
                    </li>
                  </ul>
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
