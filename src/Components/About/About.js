import React from "react";
import style from "./about.module.css";

const About = () => {
  return (
    <div id="about" className={style.container}>
      <span>This website is built by Eric </span>
      <div>
        {" "}
        All data are retrived from{" "}
        <a
          className={style.link}
          href="https://lab.isaaclin.cn/nCoV/"
          target="_blank"
        >
          https://lab.isaaclin.cn/nCoV/{" "}
        </a>{" "}
      </div>
    </div>
  );
};

export default About;
