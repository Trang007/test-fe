import React from "react";
import style from "./Services.module.css";
import icon1 from "../assets/service-icon1.png";
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
                  <a href="">a</a>
                </div>
              </div>
            </a>
            <div className={style["element4"]}>
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
                  <a href="">a</a>
                </div>
              </div>
            </div>
          </div>
          <div className={style["group"]}>
            <div className={style["element4"]}>
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
                  <a href="">a</a>
                </div>
              </div>
            </div>
            <div className={style["element4"]}>
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
                  <a href="">a</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
