import React, { useState, useEffect } from "react";
import Newsblock from "./Newsblock";
import style from "./news.module.css";

const News = props => {
  const [news, setnews] = useState([]);

  async function fetchData() {
    var url =
      "https://gitcdn.xyz/cdn/BlankerL/DXY-COVID-19-Data/cb9e825d0726eb3bc618eb8265d5ad9eeeb2c9fd/json/DXYNews.json";
    const data = await fetch(url);
    const res = await data.json();
    if (res.success) {
      setnews(res.results);
    }
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <div className={style.container}>
      <h1
        id="news"
        name="news"
        style={{ margin: "40px auto", textAlign: "center" }}
      >
        {" "}
        Top 10 News{" "}
      </h1>
      <div className={style.news}>
        {news.map((item, idx) => (
          <Newsblock item={item} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default News;
