import React from "react";
import c from "./Header.module.css";
import logo from "../../Assets/img/ko-web-site-logo.png"

const Header = (props) => {
  return (
    <div className={c.header}>
      <img src={logo} alt="" />
    </div>
  );
};

export default Header;
