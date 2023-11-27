import React from "react";
import { NavLink } from "react-router-dom";

function Dropdown() {
  return (
    <>
      <ul className="dropdown-menu">
        <li className="dropdown-menu-item">
          <NavLink activeClassName="active" to="about/markup">
            <span>&nbsp;Page Markup And Formatting</span>
          </NavLink>
        </li>
        <li className="dropdown-menu-item">
          <NavLink activeClassName="active" to="about/contact">
            Contact Form
          </NavLink>
        </li>
        <li className="dropdown-menu-item">
          <NavLink activeClassName="active" to="about/image">
            Page Image Alignment
          </NavLink>
        </li>
        <li className="dropdown-menu-item">
          <NavLink activeClassName="active" to="about/float">
            Clearing Floats
          </NavLink>
        </li>
        <li className="dropdown-menu-item">
          <NavLink activeClassName="active" to="about/comments">
            Page With Comments
          </NavLink>
        </li>
        <li className="dropdown-menu-item">
          <NavLink activeClassName="active" to="about/commentsdisabled">
            Page With Comments Disabled
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Dropdown;
