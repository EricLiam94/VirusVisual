import React, { useState } from "react";
import ReactMapGL, {
  Layer,
  NavigationControl,
  Marker,
  Popup
} from "react-map-gl";
import style from "./chart.module.css";

const Chart = () => {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  const parkLayer = {
    id: "landuse_park",
    type: "fill",
    source: "mapbox",
    "source-layer": "landuse",
    filter: ["==", "class", "water"]
  };
  var val = require("./test").results.filter(item => item.country === "中国");

  var geoCord = require("./geo");
  console.log(val);
  var data = val.map(
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
  return (
    <ReactMapGL
      width={"70%"}
      style={{ margin: "auto" }}
      height={400}
      latitude={35.8617}
      longitude={104.1954}
      zoom={3}
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={setViewport}
      mapboxApiAccessToken="pk.eyJ1IjoiZXJpY2xpYW0iLCJhIjoiY2s2OTB1cTVjMGFybTNtbXJ3YjlneHhkcSJ9.m3XezVm8VJ4W-UJl4x6U7w"
    >
      <Makers data={data} />
    </ReactMapGL>
  );
};

const Makers = ({ data }) => {
  return data.map(item => (
    <Marker longitude={item.longitude} latitude={item.latitude} key={item.name}>
      <div
        className={style.obj}
        style={{
          display: "relative"
        }}
      >
        <div className={style.tooltip}>
          <div> {item.name}</div>
          <div>Confirmed: {item.confirmedCount}</div>
          <div>suspectedCount: {item.suspectedCount}</div>
          <div>curedCount: {item.curedCount}</div>
          <div>deadCount: {item.deadCount}</div>
        </div>
        <div
          className={style.marker}
          style={{
            width: Math.log(item.confirmedCount) * 2.3,
            height: Math.log(item.confirmedCount) * 2.3
          }}
        ></div>
      </div>
    </Marker>
  ));
};

export default Chart;
