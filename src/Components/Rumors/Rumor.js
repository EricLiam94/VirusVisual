import React from "react";
import style from "./rumor.module.css";
const Rumor = ({ item }) => {
  return (
    <div className={style.block}>
      <div className={style.title}>{item.title} </div>
      <div className={style.body}>
        <div>{item.mainSummary} </div>
        <div> {item.body} </div>
      </div>
    </div>
  );
};

export default Rumor;
