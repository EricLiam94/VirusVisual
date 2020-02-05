import React from "react";
import "./App.css";
import Chart from "./Components/Chart/Chart";
import Navbar from "./Components/Navbar/Navbar";
import Container from "./Components/Container";
import News from "./Components/News/News";
import Rumors from "./Components/Rumors/Rumors";
require("dotenv");
function App() {
  return (
    <div className="App">
      <Navbar />
      <header style={{ marginTop: "60px" }}> 2019-nCoV in China </header>
      <Container />
      <Chart />
      <News />
      <Rumors />
      {/* <Chart /> */}
    </div>
  );
}

export default App;
