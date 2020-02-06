import React from "react";
import "./App.css";
import Chart from "./Components/Chart/Chart";
import Navbar from "./Components/Navbar/Navbar";
import Container from "./Components/Container";
import News from "./Components/News/News";
import Rumors from "./Components/Rumors/Rumors";
import About from "./Components/About/About";
require("dotenv");
function App() {
  if (window.history && "scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }
  return (
    <div className="App">
      <Navbar />
      <header style={{ marginTop: "60px" }}> 2019-nCoV in China </header>
      <Container />
      <Chart />
      <News />
      <Rumors />
      <About />
    </div>
  );
}

export default App;
