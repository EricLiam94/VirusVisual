import React, { useState, useEffect } from "react";
import DataBlock from "./DataBlock/DataBlock";
import style from "./Container.module.css";
import CarouselPlay from "./CarouselPlay";
import Chart from "./Chart/Chart";

const Container = () => {
  const [confirmed, setConfirmed] = useState(0);
  const [suspected, setsuspected] = useState(0);
  const [cured, setcured] = useState(0);
  const [dead, setdead] = useState(0);
  const [success, setsuccess] = useState(false);
  const [pics, setPics] = useState([]);
  const [time, settime] = useState(null);
  const [type, settype] = useState("confirmedCount");

  const fetchData = async () => {
    const data = await fetch(
      "https://gitcdn.xyz/cdn/BlankerL/DXY-COVID-19-Data/cb9e825d0726eb3bc618eb8265d5ad9eeeb2c9fd/json/DXYOverall.json"
    );
    var res = await data.json();
    if (res.success) {
      res = res.results[0];
      setPics(res.dailyPics);
      setConfirmed(res.confirmedCount);
      setsuspected(res.suspectedCount);
      setcured(res.curedCount);
      setdead(res.deadCount);
      setsuccess(true);
      settime(new Date(res.updateTime));
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {time ? (
        <span className={style.update}>
          {" "}
          Last Update: {time.toLocaleString()}{" "}
        </span>
      ) : null}
      <div className={style.container}>
        <DataBlock
          color={{ backgroundColor: "#f1c40f" }}
          name="confirmed"
          active={type === "confirmedCount"}
          value={confirmed}
          success={success}
          setType={settype}
        />
        <DataBlock
          color={{ backgroundColor: "#95a5a6" }}
          name="suspected"
          value={suspected}
          setType={settype}
          success={success}
          active={type === "suspectedCount"}
        />
        <DataBlock
          color={{ backgroundColor: "#2ecc71" }}
          name="cured"
          active={type === "curedCount"}
          success={success}
          setType={settype}
          value={cured}
        />
        <DataBlock
          color={{ backgroundColor: "#c0392b" }}
          name="dead"
          value={dead}
          setType={settype}
          active={type === "deadCount"}
          success={success}
        />
      </div>
      <Chart type={type} />
      <CarouselPlay success={success} pics={pics} />
    </div>
  );
};

export default Container;
