import React, { useState, useEffect } from "react";
import DataBlock from "./DataBlock/DataBlock";
import style from "./Container.module.css";
import CarouselPlay from "./CarouselPlay";

const Container = () => {
  const [confirmed, setConfirmed] = useState(0);
  const [suspected, setsuspected] = useState(0);
  const [cured, setcured] = useState(0);
  const [dead, setdead] = useState(0);
  const [success, setsuccess] = useState(false);
  const [pics, setPics] = useState([]);
  const [time, settime] = useState(null);

  const fetchData = async () => {
    const data = await fetch("https://lab.isaaclin.cn/nCoV/api/overall");
    var res = await data.json();
    console.log(res);
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
          value={confirmed}
          success={success}
        />
        <DataBlock
          color={{ backgroundColor: "#95a5a6" }}
          name="suspected"
          value={suspected}
          success={success}
        />
        <DataBlock
          color={{ backgroundColor: "#2ecc71" }}
          name="cured"
          success={success}
          value={cured}
        />
        <DataBlock
          color={{ backgroundColor: "#c0392b" }}
          name="dead"
          value={dead}
          success={success}
        />
      </div>
      <CarouselPlay success={success} pics={pics} />
    </div>
  );
};

export default Container;
