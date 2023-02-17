import React from "react";
import style from "./Services.module.css";
import icon1 from "../assets/service-icon1.png";
import icon2 from "../assets/service-icon2.png";
import icon3 from "../assets/service-icon3.png";
import icon4 from "../assets/service-icon4.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Services = () => {
  return (
    <div className={style["Services"]}>
      <div className={style["Container"]}>
        <div className={style["Ser_inner"]}></div>
        <div className={style["Services_left"]}>
          <div className={style["Services_left_img"]}>
            <div className={style["Service_text"]}>
              <h5>What We Do</h5>
              <h2>
                Services we
                <br />
                Provide
              </h2>
              <p>
                Quis autem vel eum iure repren
                <br />
                derit qui in ea voluptate velit as
                <br />
                se ruam nihil molestiae....
              </p>
            </div>
            <div className={style["text"]}>
              <a href="">Get Started</a>
            </div>
          </div>
        </div>
        <div className={style["Services_right"]}>
          <div className={style["group"]}>
            <a href="" className={style["element4"]}>
              <div className={style["icon4"]}>
                <img src={icon1} alt="" />
              </div>
              <div className={style["content4"]}>
                <h1>
                  Business
                  <br />
                  Growth
                </h1>
                <h3>
                  Nostrud exercitation alia
                  <br />
                  consequatur auor...
                </h3>
                <div className={style["arrow4"]}>
                  <a href="">
                    {" "}
                    <ArrowForwardIcon />{" "}
                  </a>
                </div>
              </div>
            </a>

            <a href="" className={style["element4"]}>
              <div className={style["icon4"]}>
                <img src={icon2} alt="" />
              </div>
              <div className={style["content4"]}>
                <h1>
                  Marketing
                  <br />
                  Advices
                </h1>
                <h3>
                  Rostrud exercitation alia
                  <br />
                  consequatur auor...
                </h3>
                <div className={style["arrow4"]}>
                  <a href="">
                    <ArrowForwardIcon />
                  </a>
                </div>
              </div>
            </a>
          </div>
          <div className={style["group"]}>
            <a href="" className={style["element4"]}>
              <div className={style["icon4"]}>
                <img src={icon3} alt="" />
              </div>
              <div className={style["content4"]}>
                <h1>
                  Finance
                  <br />
                  Consulting
                </h1>
                <h3>
                  Aostrud exercitation alia
                  <br />
                  consequatur auor...
                </h3>
                <div className={style["arrow4"]}>
                  <a href="">
                    <ArrowForwardIcon />
                  </a>
                </div>
              </div>
            </a>
            <a href="" className={style["element4"]}>
              <div className={style["icon4"]}>
                <img src={icon4} alt="" />
              </div>
              <div className={style["content4"]}>
                <h1>
                  Wealth
                  <br />
                  Management
                </h1>
                <h3>
                  Bostrud exercitation alia
                  <br />
                  consequatur auor...
                </h3>
                <div className={style["arrow4"]}>
                  <a href="">
                    <ArrowForwardIcon />
                  </a>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
