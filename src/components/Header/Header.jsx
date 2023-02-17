import React from "react";
import c from "./Header.module.css";
import logo from "../../img/ko-web-site-logo.jpeg"

const Header = (props) => {
  return (
    <div className={c.header}>
      <img src={logo} alt="" />
    </div>
  );
};

export default Header;
