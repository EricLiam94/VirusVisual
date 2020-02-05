import React from "react";
import style from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <i className={"fab fa-envira " + style.icon}></i>
      <span className={style.title}>Virus Visual </span>
      <ul className={style.ul}>
        <li className={style.li}>
          <a href="#news"> News</a>
          <a href="#rumors"> Rumors </a>
          <a href="#about"> About </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
