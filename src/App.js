import React from "react";
import "./App.css";
import Chart from "./Components/Chart/Chart";
import Navbar from "./Components/Navbar/Navbar";
import Container from "./Components/Container";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header> 2019-nCoV in China </header>
      <Container />
      <Chart />
    </div>
  );
}

export default App;
