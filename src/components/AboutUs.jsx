import React from "react";
import style from "./AboutUs.module.css";
import about_img from "../assets/about-sec-img.jpg";
import about_video from "../assets/video-poster.jpg";
import youtube from "../assets/youtube-icon.png"
const AboutUs = () => {
  return (
    <div className={style["AboutUs"]}>

      <div className={style["About_top_img"]}>
        <div className={style["About_top"]}>
          <div className={style["About_triangle"]}></div>
          <div className={style["About_img"]}>
            <img src={about_img} alt="" />
          </div>
        </div>
        <div className={style["About_text"]}>
          <h5>About us</h5>
          <h2>
            We are The Best Finance
            <br />
            Agency in the Area
          </h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit cillum
            nulla pae
            <br />
            nostrud exercitation alias consequatur aut perferendis doloribus
            asperi
            <br />
            aut rerum necessitatibus saeo eveniet.
          </p>
          <p>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihio
            <br />
            quo minus maxime placeat facere.
          </p>
        </div>
      </div>
      
      <div className={style["About_video"]}>
        <img src={about_video} alt="" />
        <div className={style["Youtube"]}>
          <img src={youtube} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
