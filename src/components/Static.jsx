import React from "react";
import style from "./Static.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Case1 from "../assets/case-report1-img.jpg";
import Case2 from "../assets/case-report2-img.jpg";
import Case3 from "../assets/case-report3-img.jpg";
import Case4 from "../assets/case-report4-img.jpg";
import Case5 from "../assets/case-report5-img.jpg";
import Case6 from "../assets/case-report6-img.jpg";

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
        <div className={style["Static_bottom"]}>
          <div className={style["Static_bottom_text_img"]}>
            <div className={style["Static_bottom_text"]}>
              <h5>Recently Completed</h5>
              <h2>Our Latest Case Studies</h2>
            </div>
            <div className={style["CaseBody"]}>
              <div className={style["Group"]}>
                <a href="" className={style["CaseLink"]}>
                  <div className={style["CaseCurve"]}></div>
                  <div className={style["CaseImg"]}>
                    <img src={Case1} alt="" />
                  </div>
                  <div className={style["CaseContent"]}>
                    <h5>Business, Finance</h5>
                    <h3>Financial Report 2019</h3>
                  </div>
                  <div className={style["CaseIcon"]}>
                    <ArrowForwardIcon fontSize="large" />
                  </div>
                  <div className={style["CaseBackground"]}></div>
                </a>
                <a href="" className={style["CaseLink"]}>
                  <div className={style["CaseCurve"]}></div>
                  <div className={style["CaseImg"]}>
                    <img src={Case2} alt="" />
                  </div>
                  <div className={style["CaseContent"]}>
                    <h5>Business, Finance</h5>
                    <h3>MO Insurance Finance</h3>
                  </div>
                  <div className={style["CaseIcon"]}>
                    <ArrowForwardIcon fontSize="large" />
                  </div>
                  <div className={style["CaseBackground"]}></div>
                </a>
                <a href="" className={style["CaseLink"]}>
                  <div className={style["CaseCurve"]}></div>
                  <div className={style["CaseImg"]}>
                    <img src={Case3} alt="" />
                  </div>
                  <div className={style["CaseContent"]}>
                    <h5>Business, Finance</h5>
                    <h3>Enterprise Loan 2016</h3>
                  </div>
                  <div className={style["CaseIcon"]}>
                    <ArrowForwardIcon fontSize="large" />
                  </div>
                  <div className={style["CaseBackground"]}></div>
                </a>
              </div>
              <div className={style["Group"]}>
                <a href="" className={style["CaseLink"]}>
                  <div className={style["CaseCurve"]}></div>
                  <div className={style["CaseImg"]}>
                    <img src={Case4} alt="" />
                  </div>
                  <div className={style["CaseContent"]}>
                    <h5>Business, Finance</h5>
                    <h3>Business Growth Solutions</h3>
                  </div>
                  <div className={style["CaseIcon"]}>
                    <ArrowForwardIcon fontSize="large" />
                  </div>
                  <div className={style["CaseBackground"]}></div>
                </a>
                <a href="" className={style["CaseLink"]}>
                  <div className={style["CaseCurve"]}></div>
                  <div className={style["CaseImg"]}>
                    <img src={Case5} alt="" />
                  </div>
                  <div className={style["CaseContent"]}>
                    <h5>Business, Finance</h5>
                    <h3>Marketing Solution Advice</h3>
                  </div>
                  <div className={style["CaseIcon"]}>
                    <ArrowForwardIcon fontSize="large" />
                  </div>
                  <div className={style["CaseBackground"]}></div>
                </a>
                <a href="" className={style["CaseLink"]}>
                  <div className={style["CaseCurve"]}></div>
                  <div className={style["CaseImg"]}>
                    <img src={Case6} alt="" />
                  </div>
                  <div className={style["CaseContent"]}>
                    <h5>Business, Finance</h5>
                    <h3>Minda Business Consulting</h3>
                  </div>
                  <div className={style["CaseIcon"]}>
                    <ArrowForwardIcon fontSize="large" />
                  </div>
                  <div className={style["CaseBackground"]}></div>
                </a>
              </div>
              <div className={style["Static_bottom_img_bottom"]}></div>
            </div>
            <div className={style["CaseBottom"]}>
              <a href="" className={style["CaseBottom_btn"]}>View All Cases</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Static;
