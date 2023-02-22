import React from "react";
import c from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className={c.nav}>
      <div className={c.item}>
        <NavLink
          to="/profile"
          className={(navData) => (navData.isActive ? c.active : c.item)}
        >
          Main
        </NavLink>
      </div>
      <div className={c.item}>
        <NavLink
          to="/dialogs"
          className={(navData) => (navData.isActive ? c.active : c.item)}
        >
          Massages
        </NavLink>
      </div>
      <div className={c.item}>
        <NavLink
          to="/options"
          className={(navData) => (navData.isActive ? c.active : c.item)}
        >
          Options
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
