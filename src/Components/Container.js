import React, { useState, useEffect } from "react";
import DataBlock from "./DataBlock/DataBlock";
import style from "./Container.module.css";
import CarouselPlay from "./CarouselPlay";

var res = {
  results: [
    {
      infectSource: "该字段已替换为说明2",
      passWay: "该字段已替换为说明3",
      dailyPic:
        "https://img1.dxycdn.com/2020/0205/300/3394878936923352083-135.png,https://img1.dxycdn.com/2020/0205/253/3394879100132420050-135.png,https://img1.dxycdn.com/2020/0205/312/3394879301995899763-135.png,https://img1.dxycdn.com/2020/0205/356/3394879357830479001-135.png,https://img1.dxycdn.com/2020/0205/122/3394879495269001393-135.png,https://img1.dxycdn.com/2020/0205/210/3394879553251507095-135.png",
      dailyPics: [
        "https://img1.dxycdn.com/2020/0205/300/3394878936923352083-135.png",
        "https://img1.dxycdn.com/2020/0205/253/3394879100132420050-135.png",
        "https://img1.dxycdn.com/2020/0205/312/3394879301995899763-135.png",
        "https://img1.dxycdn.com/2020/0205/356/3394879357830479001-135.png",
        "https://img1.dxycdn.com/2020/0205/122/3394879495269001393-135.png",
        "https://img1.dxycdn.com/2020/0205/210/3394879553251507095-135.png"
      ],
      summary: "",
      countRemark: "",
      confirmedCount: 24377,
      suspectedCount: 23260,
      curedCount: 901,
      deadCount: 492,
      seriousCount: 3219,
      suspectedIncr: 3971,
      confirmedIncr: 3903,
      curedIncr: 271,
      deadIncr: 67,
      seriousIncr: 431,
      virus: "该字段已替换为说明1",
      remark1:
        "易感人群：人群普遍易感。老年人及有基础疾病者感染后病情较重，儿童及婴幼儿也有发病",
      remark2:
        "潜伏期：一般为 3～7 天，最长不超过 14 天，潜伏期内可能存在传染性，但无症状病例传染性较弱",
      remark3: "宿主：野生动物，可能为中华菊头蝠",
      remark4: "",
      remark5: "",
      note1: "病毒：新型冠状病毒 2019-nCoV",
      note2: "传染源：新型冠状病毒感染的肺炎患者",
      note3:
        "传播途径：经呼吸道飞沫传播，亦可通过接触传播，存在粪-口传播可能性",
      generalRemark:
        "疑似病例数来自国家卫健委数据，目前为全国数据，未分省市自治区等",
      abroadRemark: "",
      marquee: [],
      updateTime: 1580883162698
    }
  ],
  success: true
};

const Container = () => {
  const [confirmed, setConfirmed] = useState(0);
  const [suspected, setsuspected] = useState(0);
  const [cured, setcured] = useState(0);
  const [dead, setdead] = useState(0);
  const [success, setsuccess] = useState(false);
  const [pics, setPics] = useState([]);
  const [time, settime] = useState(null);

  const fetchData = async () => {
    // const data = await fetch("https://lab.isaaclin.cn/nCoV/api/overall");
    // var res = await data.json();
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
