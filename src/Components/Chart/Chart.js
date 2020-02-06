import React, { useState, useEffect } from "react";
import ReactMapGL, {
  Layer,
  NavigationControl,
  Marker,
  Popup
} from "react-map-gl";
import style from "./chart.module.css";

const Chart = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 35.8617,
    longitude: 104.1954,
    zoom: 3
  });
  const [display, setdisplay] = useState(null);

  const parkLayer = {
    id: "landuse_park",
    type: "fill",
    source: "mapbox",
    "source-layer": "landuse",
    filter: ["==", "class", "water"]
  };
  var val = require("./test").results.filter(item => item.country === "中国");

  var geoCord = require("./geo");
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
        mapboxApiAccessToken="pk.eyJ1IjoiZXJpY2xpYW0iLCJhIjoiY2s2OTB1cTVjMGFybTNtbXJ3YjlneHhkcSJ9.m3XezVm8VJ4W-UJl4x6U7w"
      >
        <Makers data={data} mouseEnter={mouseEnter} mouesLeave={mouesLeave} />
      </ReactMapGL>
    </div>
  );
};

const Makers = ({ data, mouseEnter, mouesLeave }) => {
  return data.map(item => (
    <Marker longitude={item.longitude} latitude={item.latitude} key={item.name}>
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
            width: Math.log(item.confirmedCount) * 2.3,
            height: Math.log(item.confirmedCount) * 2.3
          }}
        ></div>
      </div>
    </Marker>
  ));
};

export default Chart;
