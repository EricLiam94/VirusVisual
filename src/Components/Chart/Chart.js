import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";
import style from "./chart.module.css";
require("dotenv").config();
const Chart = ({ type }) => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 35.8617,
    longitude: 104.1954,
    zoom: 3
  });
  const [display, setdisplay] = useState(null);
  const [data, setData] = useState([]);
  const parkLayer = {
    id: "landuse_park",
    type: "fill",
    source: "mapbox",
    "source-layer": "landuse",
    filter: ["==", "class", "water"]
  };
  const fetchData = async () => {
    var geoCord = require("./geo");
    var url =
      "https://gitcdn.xyz/cdn/BlankerL/DXY-COVID-19-Data/cb9e825d0726eb3bc618eb8265d5ad9eeeb2c9fd/json/DXYArea.json";

    const data = await fetch(url);
    const res = await data.json();
    var temp = res.results.filter(item => item.country === "中国");
    var output = temp.map(
      ({
        provinceShortName,
        confirmedCount,
        suspectedCount,
        curedCount,
        deadCount
      }) => ({
        name: provinceShortName,
        longitude: geoCord[provinceShortName][0],
        latitude: geoCord[provinceShortName][1],
        confirmedCount,
        suspectedCount,
        curedCount,
        deadCount
      })
    );
    setData(output);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const APK =
    "pk.eyJ1IjoiZXJpY2xpYW0iLCJhIjoiY2s2OTB1cTVjMGFybTNtbXJ3YjlneHhkcSJ9.m3XezVm8VJ4W-UJl4x6U7w";

  const mouseEnter = item => {
    setdisplay(item);
  };
  const mouesLeave = () => {
    setdisplay(null);
  };

  return (
    <div className={style.gl}>
      {display && (
        <div className={style.tooltip}>
          <div> {display.name}</div>
          <div>Confirmed: {display.confirmedCount}</div>
          <div>suspectedCount: {display.suspectedCount}</div>
          <div>curedCount: {display.curedCount}</div>
          <div>deadCount: {display.deadCount}</div>
        </div>
      )}
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={setViewport}
        mapboxApiAccessToken={APK}
      >
        <div style={{ position: "absolute", right: 0, zIndex: 200 }}>
          <NavigationControl />
        </div>
        <Makers
          data={data}
          type={type}
          mouseEnter={mouseEnter}
          mouesLeave={mouesLeave}
        />
      </ReactMapGL>
    </div>
  );
};
let mapColor = {
  confirmedCount: "#f1c40f",
  suspectedCount: "#95a5a6",
  curedCount: "#2ecc71",
  deadCount: "#c0392b"
};

const Makers = ({ data, mouseEnter, mouesLeave, type }) => {
  if (data.length > 0) {
    return data.map(item => (
      <Marker
        longitude={item.longitude}
        latitude={item.latitude}
        key={item.name}
      >
        <div
          className={style.obj}
          style={{
            display: "relative"
          }}
        >
          <div
            className={style.marker}
            onMouseEnter={() => mouseEnter(item)}
            onMouseLeave={() => mouesLeave()}
            style={{
              backgroundColor: mapColor[type],
              width: item[type] > 0 ? Math.log(item[type]) * 2.3 : 0,
              height: item[type] > 0 ? Math.log(item[type]) * 2.3 : 0
            }}
          ></div>
        </div>
      </Marker>
    ));
  } else {
    return null;
  }
};

export default Chart;
