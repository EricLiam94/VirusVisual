import React, { useState, useEffect } from "react";
import DataBlock from "./DataBlock/DataBlock";
import style from "./Container.module.css";
import CarouselPlay from "./CarouselPlay";
import Chart from "./Chart/Chart";
var res = {
  results: [
    {
      infectSource: "该字段已替换为说明2",
      passWay: "该字段已替换为说明3",
      dailyPic:
        "https://img1.dxycdn.com/2020/0207/474/3395297054137367344-135.png,https://img1.dxycdn.com/2020/0207/876/3395297062727052420-135.png,https://img1.dxycdn.com/2020/0207/093/3395298754944114027-135.png,https://img1.dxycdn.com/2020/0207/367/3395298769976921168-135.png,https://img1.dxycdn.com/2020/0207/513/3395298791451759073-135.png,https://img1.dxycdn.com/2020/0207/256/3395298804336251788-135.png",
      dailyPics: [
        "https://img1.dxycdn.com/2020/0207/474/3395297054137367344-135.png",
        "https://img1.dxycdn.com/2020/0207/876/3395297062727052420-135.png",
        "https://img1.dxycdn.com/2020/0207/093/3395298754944114027-135.png",
        "https://img1.dxycdn.com/2020/0207/367/3395298769976921168-135.png",
        "https://img1.dxycdn.com/2020/0207/513/3395298791451759073-135.png",
        "https://img1.dxycdn.com/2020/0207/256/3395298804336251788-135.png"
      ],
      summary: "",
      countRemark: "",
      confirmedCount: 31253,
      suspectedCount: 26359,
      curedCount: 1640,
      deadCount: 637,
      seriousCount: 4821,
      suspectedIncr: 4833,
      confirmedIncr: 3193,
      curedIncr: 487,
      deadIncr: 73,
      seriousIncr: 962,
      virus: "该字段已替换为说明1",
      remark1:
        "易感人群：人群普遍易感。老年人及有基础疾病者感染后病情较重，儿童及婴幼儿也有发病",
      remark2:
        "潜伏期：一般为 3～7 天，最长不超过 14 天，潜伏期内可能存在传染性，其中无症状病例传染性非常罕见",
      remark3: "宿主：野生动物，可能为中华菊头蝠",
      remark4: "",
      remark5: "",
      note1: "病毒：新型冠状病毒 2019-nCoV",
      note2: "传染源：新型冠状病毒感染的患者。无症状感染者也可能成为传染源。",
      note3:
        "传播途径：经呼吸道飞沫和接触传播是主要的传播途径。气溶胶和消化道等传播途径尚待明确。",
      generalRemark:
        "疑似病例数来自国家卫健委数据，目前为全国数据，未分省市自治区等",
      abroadRemark: "",
      marquee: [
        {
          id: 124,
          marqueeLabel: "哀悼",
          marqueeContent: "战胜疫情魔鬼 告慰李文亮医生",
          marqueeLink: "https://mp.weixin.qq.com/s/uh4uY0W-MDSfqqaOP0BZIg"
        }
      ],
      updateTime: 1581069699273
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
  const [type, settype] = useState("confirmedCount");

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
