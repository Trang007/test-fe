import React from "react";
import style from "./Blog.module.css";
import Blog1 from "../assets/blog-img.jpg";
import icon1 from "../assets/blog-icon1.png";
const Blog = () => {
  return (
    <div className={style["Blog"]}>
      <div className={style["Blog_container"]}>
        <div className={style["Blog_text"]}>
          <h5>Our News</h5>
          <h2>Latest Blog Posts</h2>
        </div>
        <div className={style["Blog_body"]}>
          <a href="" className={style["BlogLink"]}>
            <div className={style["BlogImg"]}>
              <img src={Blog1} alt="" />
            </div>
            <div className={style["Blog_Conten"]}>
              <a href="" className={style["Blog_Conten_text"]}>
                Business
              </a>
              <h4>
                Why Tech Should Behave
                <br />
                More Finance.
              </h4>
              <p>
                Modi tempora incidunt ut labore aur
                <br />
                dolore magnam aliquam..
              </p>
              <div className={style["author_details"]}>
                <div className={style["author"]}>
                  <img src={icon1} alt="" />
                  <h3 className={style["author_name"]}>David William</h3>
                </div>
                <div className={style["author_date"]}>Jan 1, 2022</div>
              </div>
            </div>
          </a>
          <a href="" className={style["BlogLink"]}>
            <div className={style["BlogImg"]}>
              <img src={Blog1} alt="" />
            </div>
            <div className={style["Blog_Conten"]}>
              <a href="" className={style["Blog_Conten_text"]}>
                Business
              </a>
              <h4>
                Why Tech Should Behave
                <br />
                More Finance.
              </h4>
              <p>
                Modi tempora incidunt ut labore aur
                <br />
                dolore magnam aliquam..
              </p>
              <div className={style["author_details"]}>
                <div className={style["author"]}>
                  <img src={icon1} alt="" />
                  <h3 className={style["author_name"]}>David William</h3>
                </div>
                <div className={style["author_date"]}>Jan 1, 2022</div>
              </div>
            </div>
          </a>
          <a href="" className={style["BlogLink"]}>
            <div className={style["BlogImg"]}>
              <img src={Blog1} alt="" />
            </div>
            <div className={style["Blog_Conten"]}>
              <a href="" className={style["Blog_Conten_text"]}>
                Business
              </a>
              <h4>
                Why Tech Should Behave
                <br />
                More Finance.
              </h4>
              <p>
                Modi tempora incidunt ut labore aur
                <br />
                dolore magnam aliquam..
              </p>
              <div className={style["author_details"]}>
                <div className={style["author"]}>
                  <img src={icon1} alt="" />
                  <h3 className={style["author_name"]}>David William</h3>
                </div>
                <div className={style["author_date"]}>Jan 1, 2022</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
