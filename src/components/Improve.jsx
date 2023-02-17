import React from "react";
import style from "./Improve.module.css";
const Improve = () => {
  return (
    <div className={style["Improve"]}>
      <div className={style["Improve_triangle"]}></div>
      <div className={style["Improve_triangle2"]}></div>
      <div className={style["Improve_Container"]}>
        <div className={style["Improve_triangle3"]}></div>
        <div className={style["Improve_content"]}>
          <h2 className={style["Improve_content_a1"]}>
            Improve & Innovate
            <br />
            Business Trends
          </h2>
          <p className={style["Improve_content_a2"]}>
            Duis aute irure dolor in reprehenderit in voluptate velit cillum
            nulla pariatur
            <br />
            nostrud exercitation.
          </p>
        </div>
          <div className={style["Improve_btn_content"]}>
            <button className={style["Improve_btn_1"]}>Get Started</button>
            <button className={style["Improve_btn_2"]}>Learn More</button>
          </div>
      </div>
    </div>
  );
};

export default Improve;
