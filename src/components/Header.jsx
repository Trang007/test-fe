import React from "react";
import style from "./header.module.css";
import Nav from "../assets/navbar-icon.png";
const Header = () => {
  return (
    <div className={style["Header"]}>
      <div className={style["Menu_triangle"]}></div>
      <div className={style["Nav_menu"]}>
        <img className={style["Icon"]} src={Nav} />
        <div className={style["Menu"]}>
          <a>Home</a>
          <a>About us</a>
          <a>News</a>
          <a>Services</a>
          <a>Pages</a>
          <a>Team</a>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
