import HeroPic from "./assets/pictures/hero.svg";
import Updated from "./assets/pictures/updated.svg";
import Design from "./assets/pictures/design.svg";
import Check from "./assets/pictures/check.svg";
import Code from "./assets/pictures/code.svg";
import NavBar from "./components/navbar";
import Pc from "./assets/pictures/Pc.jpg";
import Loops from "./assets/pictures/Loops.jpg";
import Logo from "./assets/pictures/logo.png";
import "./App.css";
import React, { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";

function App() {
  const [opacity, setOpacity] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setOpacity(true);
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App bg-gradient-to-br from-slate-400 to-black ">
      <div
        className={
          loading
            ? "flex flex-col items-center justify-center h-screen"
            : "hidden"
        }
      >
        {loading ? <Oval color="yellow" secondaryColor="transparent" /> : <></>}
      </div>
      <div
        className={
          opacity
            ? "opacity-100 transition-all ease-in-out duration-200"
            : "opacity-0 transition-all ease-in-out duration-200"
        }
      >
        <NavBar />
        <Hero />
        <Os />
        <What />
        <Footer />
      </div>
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
            window.location.hostname = "";
          }}
        >
          OS Coming Soon!
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
      <p className="p-10"></p>
      <h3 className="text-5xl">
        Meet the <span className="text-yellow-400">InfoBot OS</span>
      </h3>
      <p className="">An OS built to learn Java in Style and with Ease</p>
      <img
        src={Pc}
        alt={Pc}
        className="w-[80%] md:w-[55%] md:scale-90 md:hover:scale-100 bg-transparent  transition-all ease-in-out duration-200"
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

function What() {
  return (
    <div className="flex flex-col flex-wrap items-center text-white gap-3 justify-center text-center mt-20 md:mt-10 bg-black border-b-2 border-white">
      <h3 className="text-5xl ">
        What is <span className="text-yellow-400">InfoBot</span>
      </h3>
      <p>
        The world is evolving around us, so why shouldn't the way we learn also
        evolve?
      </p>

      <div className="flex flex-col md:flex-row flex-wrap items-center justify-evenly m-5">
        <div className=" md:h-2/4 md:w-2/4 mb-10">
          <img
            src={Loops}
            alt={"Loops"}
            className="h-full rounded-lg w-full "
          />
        </div>
        <div className="flex flex-row flex-wrap justify-evenly items-center gap-5">
          <div className="flex flex-col items-center justify-center h-52 md:h-60 w-28 md:w-32 bg-slate-800 scale-100 hover:scale-110 transition-all duration-200 ease-in-out rounded-lg ">
            <h1 className="text-sm md:text-xl text-yellow-400">
              Elegant Design
            </h1>
            <img src={Design} alt={Design} className="" />
            <p className="text-xs md:text-sm">Beautifully designed systems.</p>
          </div>
          <div className="flex flex-col items-center justify-center h-52 md:h-60 w-28 md:w-32 bg-slate-800 scale-100 hover:scale-110 transition-all duration-200 ease-in-out rounded-lg ">
            <h1 className="text-sm md:text-xl text-yellow-400">
              Verified Programs
            </h1>
            <img src={Check} alt={"Check"} className="" />
            <p className="text-xs md:text-sm">
              Each program has been Verified.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center h-52 md:h-60 w-28 md:w-32 bg-slate-800 scale-100 hover:scale-110 transition-all duration-200 ease-in-out rounded-lg ">
            <h1 className="text-sm md:text-xl text-yellow-400">
              Updated Weekly
            </h1>
            <img src={Updated} alt={"Updated"} className="" />
            <p className="text-xs md:text-sm">Weekly additions of Material.</p>
          </div>
          <div className="flex flex-col items-center justify-center h-52 md:h-60 w-28 md:w-32 bg-slate-800 scale-100 hover:scale-110 transition-all duration-200 ease-in-out rounded-lg ">
            <h1 className="text-sm md:text-xl text-yellow-400">Neat Java</h1>
            <img src={Code} alt={"Code"} className="" />
            <p className="text-xs md:text-sm">Clean and Simple Java Code.</p>
          </div>
        </div>
      </div>
      <h1 className="bg-transparent">
        Feeling intrigued? This was just the InfoBot OS in a nutshell.
      </h1>
      <p
        className="bg-yellow-400  text-[#3F434E] p-2 rounded-lg border-yellow-400 border-2 scale-110 shadow-lg shadow-black hover:text-yellow-400 hover:bg-transparent hover:border-2 hover:border-white transition-all ease-in-out duration-200 hover:cursor-pointer mb-10"
        onClick={() => {
          window.location.hostname = "";
        }}
      >
        OS Coming Soon!
      </p>
    </div>
  );
}

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 bg-black shadow-md shadow-black sticky top-0">
      <h2 className="text-white text-4xl">InfoBot</h2>
      <img src={Logo} alt={"Logo"} id="logo" className="w-32" />
      <p className="text-yellow-400 mb-5">Java Programming, Made Easier</p>
      <p className="m-30"></p>
    </div>
  );
}
export default App;
