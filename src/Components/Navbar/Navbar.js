import React from "react";
import style from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <i className={"fab fa-envira " + style.icon}></i>
      <span className={style.title}>Virus Visual </span>
    </div>
  );
};

export default Navbar;
