import React from "react";
import c from "./Header.module.css";
import logo from "../../Assets/img/ko-web-site-logo.png";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className={c.header}>
      <img src={logo} alt="" />
      <div className={c.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login/"}>Login</NavLink>}
      </div>
    </div>
  );
};

export default Header;
