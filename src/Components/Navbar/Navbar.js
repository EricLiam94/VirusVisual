import React, { useState, useRef } from "react";
import style from "./navbar.module.css";

const Navbar = () => {
  const [display, setdisplay] = useState(false);
  const toggle = () => {
    setdisplay(!display);
  };
  return (
    <div id="nav" className={style.navbar}>
      <div className={style.logocon} onClick={() => window.scrollTo(0, 0)}>
        <i className={"fab fa-envira " + style.icon}></i>
        <span className={style.title}>Virus Visual </span>
      </div>
      <div className={style.ul + (display ? " " + style.active : "")}>
        <div className={style.li}>
          <a href="#news"> News</a>
        </div>
        <div className={style.li}>
          <a href="#rumors"> Rumors </a>{" "}
        </div>
        <div className={style.li}>
          {" "}
          <a href="#about"> About </a>
        </div>
      </div>
      <div className={style.toggle} onClick={toggle}>
        {" "}
      </div>
    </div>
  );
};

export default Navbar;
