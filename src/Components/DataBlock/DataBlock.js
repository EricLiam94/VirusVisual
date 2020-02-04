import React from "react";
import style from "./style.module.css";
import Loader from "react-loader-spinner";

const DataBlock = props => {
  console.log(props.success);
  return (
    <div className={style.block} style={props.color}>
      <span className={style.title}>{props.name}</span>
      {props.success ? (
        <div className={style.value}>{props.value} </div>
      ) : (
        <Loader type="Bars" color="white" height={30} width={30} />
      )}
    </div>
  );
};

export default DataBlock;
