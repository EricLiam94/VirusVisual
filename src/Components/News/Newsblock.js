import React from "react";
import style from "./news.module.css";

const Newsblock = ({ item }) => {
  return (
    <div className={style.block}>
      <div className={style.tblock}>
        <span className={style.title}>{item.title} </span>
        <span className={style.source}>{item.provinceName} </span>
      </div>
      <div>{item.summary} </div>
      <a href={item.sourceUrl} className={style.link} target="_blank">
        {" "}
        More Detail <i className="fas fa-hand-point-right"></i>{" "}
      </a>
    </div>
  );
};

export default Newsblock;
