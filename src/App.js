import React from "react";
import "./App.css";
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
      <header className="mytitle"> 2019-nCoV </header>
      <Container />
      <News />
      <Rumors />
      <About />
    </div>
  );
}

export default App;
