import React from "react";
import style from "./Static.module.css";
const Static = () => {
  return (
    <div className={style["Static"]}>
      <div className={style["Static_Container"]}>
        <div className={style["Static_Container_Top"]}>
          <div className={style["Static_text"]}>
            <div className={style["Static_text_number"]}>200</div>
            <div className={style["Static_text_f1"]}>
              Projects
              <br />
              Done
            </div>
          </div>
          <div className={style["Static_text"]}>
            <div className={style["Static_text_number"]}>100%</div>
            <div className={style["Static_text_f1"]}>
              Customer
              <br />
              Satisfication
            </div>
          </div>
          <div className={style["Static_text"]}>
            <div className={style["Static_text_number"]}>610</div>
            <div className={style["Static_text_f1"]}>
              Data
              <br />
              Analyst Input
            </div>
          </div>
          <div className={style["Static_text"]}>
            <div className={style["Static_text_number"]}>10+</div>
            <div className={style["Static_text_f1"]}>
              World Class
              <br />
              Base
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Static;
