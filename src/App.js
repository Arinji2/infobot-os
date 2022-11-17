import HeroPic from "./assets/pictures/hero.svg";

import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <Hero />
    </div>
  );
}

function Hero() {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center md:justify-between h-screen w-screen bg-gradient-to-br from-slate-400 to-black">
      <div className=" h-screen w-screen  flex flex-col items-center justify-center gap-5 md:gap-20 relative text-left ">
        <h1 className="m-3 text-5xl md:text-9xl text-yellow-400 mt-20 ">
          InfoBot
        </h1>
        <h2 className="m-3 text-2xl md:text-4xl text-white text-center">
          Java Programming, done the Right Way
        </h2>
        <p
          className="bg-transparent text-yellow-400 p-2 rounded-lg border-white border-2 scale-110 shadow-lg shadow-black hover:text-white hover:bg-yellow-400 hover:border-2 hover:border-yellow-400 transition-all ease-in-out duration-200 hover:cursor-pointer"
          onClick={() => {
            window.location.hostname = "os.infobot.tech";
          }}
        >
          Check Out the OS
        </p>
      </div>
      <img src={HeroPic} alt={"Sync Pic"} className="w-2/3 h-2/3" />
      <p className="pb-10"></p>
    </div>
  );
}
export default App;
