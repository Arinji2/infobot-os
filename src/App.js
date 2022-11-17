import HeroPic from "./assets/pictures/hero.svg";
import NavBar from "./components/navbar";
import Pc from "./assets/pictures/Pc.jpg";
import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App bg-gradient-to-br from-slate-400 to-black ">
      <NavBar />
      <Hero />
      <Os />
    </div>
  );
}

function Hero() {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center md:justify-between h-screen bg-transparent ">
      <div className=" h-screen w-3/5 flex flex-col items-center justify-start gap-10 md:gap-20 relative ">
        <h1 className="m-3 text-5xl md:text-8xl text-yellow-400 mt-20 ">
          InfoBot
        </h1>
        <h2 className="m-3 text-2xl md:text-4xl text-white text-center">
          Java Programming, done the Right Way
        </h2>
        <p
          className="bg-yellow-400  text-[#3F434E] p-2 rounded-lg border-yellow-400 border-2 scale-110 shadow-lg shadow-black hover:text-yellow-400 hover:bg-transparent hover:border-2 hover:border-white transition-all ease-in-out duration-200 hover:cursor-pointer"
          onClick={() => {
            window.location.hostname = "os.infobot.tech";
          }}
        >
          Check Out the OS
        </p>
      </div>
      <div className="w-[60%] md:w-2/6 h-screen flex flex-col items-center justify-start mt-20">
        <img src={HeroPic} alt={"Sync Pic"} />
      </div>
    </div>
  );
}

function Os() {
  return (
    <div className="flex flex-col items-center text-white gap-3 justify-center text-center mt-20 md:mt-10">
      <h3 className="text-5xl">
        Meet the <span className="text-yellow-400">InfoBot OS</span>
      </h3>
      <p className="">An OS built to learn Java in Style and with Ease</p>
      <img
        src={Pc}
        alt={Pc}
        className="w-[80%] md:w-[55%] bg-transparent hover:md:w-[50%] transition-all ease-in-out duration-200"
      />
      <div className="mt-5 flex flex-row md:flex-nowrap flex-wrap justify-center items-center gap-4 m-4">
        <div className="flex-col items-center justify-center sm:w-50 sm:h-50 md:w-2/5   shadow-md shadow-black rounded-lg p-2 hover:shadow-black hover:shadow-lg scale-90 hover:scale-100 transition-all ease-in-out duration-200">
          <h4 className="text-yellow-400 text-xl">Pricing</h4>
          <p>
            InfoBot OS will always be free forever. Be assured that none of the
            features will ever be locked behind a paywall.
          </p>
        </div>
        <div className="flex-col items-center justify-center sm:w-50 sm:h-50 md:w-2/5   shadow-md shadow-black rounded-lg p-2 hover:shadow-black hover:shadow-lg scale-90 hover:scale-100 transition-all ease-in-out duration-200">
          <h4 className="text-yellow-400 text-xl">Specifications</h4>
          <p>
            Nothing Required, other than a Web Browser. InfoBot OS is built for
            everything, including mobile devices.
          </p>
        </div>
        <div className="flex-col items-center justify-center sm:w-50 sm:h-50 md:w-2/5   shadow-md shadow-black rounded-lg p-2 hover:shadow-black hover:shadow-lg scale-90 hover:scale-100 transition-all ease-in-out duration-200">
          <h4 className="text-yellow-400 text-xl">Security</h4>
          <p>
            Protected and Secured, InfoBot OS is protected from most attacks.
            Use freely with no tension of popups or redirects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
