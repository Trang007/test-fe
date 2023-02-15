import React from "react";
import style from "./header.module.css";
import Nav from "../assets/navbar-icon.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import SettingsPhoneIcon from "@mui/icons-material/SettingsPhone";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Header = () => {
  return (
    <div className={style["Header"]}>
      <div className={style["Menu_triangle"]}></div>
      <div className={style["Menu_triangle2"]}></div>
      <div className={style["Nav_menu"]}>
        <img className={style["Icon"]} src={Nav} />
        <div className={style["Menu"]}>
          <a>Home</a>
          <a>About us</a>
          <a>News</a>
          <a>Services </a>
          <a>Pages</a>
          <a>Team</a>
          <button className={style["btn_contaict"]}>Contact Us</button>
          <div className={style["collapse"]}>
            <SettingsPhoneIcon className={style["icon"]} fontSize="large" />
            <div>
              <p>Call us at:</p>
              <p className={style["number"]}>+613 8376 628</p>
            </div>
          </div>
        </div>
      </div>
      <div className={style["Banner"]}>
        <div className={style["Conten_icon"]}>
          <a href=""><FacebookIcon /></a>
          <a href=""><TwitterIcon /></a>
          <a href=""><LinkedInIcon /></a>
        </div>

        <div className={style["Conten_big"]}>
          <div className={style["triangle"]}></div>
          <div className={style["Conten"]}>
            <h1>
              Create New Ways
              <br></br>
              to Better Invest
            </h1>
            <p className={style["conten_p"]}>
              Duis aute irure dolor in reprehenderit in voluptate velit cillum
              <br></br>
              nulla pariatur nostrud exercitation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
