import HeroPic from "./assets/pictures/hero.svg";
import "./App.css";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import NavBar from "./components/navbar";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
    </div>
  );
}

function Hero() {
  const tl = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .fromTo(
          ".cursor",
          1,
          { autoAlpha: 0 },
          { autoAlpha: 1, repeat: -1, yoyo: true, repeatDelay: 0.1 }
        );
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="relative flex flex-row items-center justify-between h-screen w-screen">
      <div className=" h-screen w-screen bg-black  flex flex-col items-start justify-center gap-5 relative">
        <div className="m-3 text-8xl text-yellow-400 ">InfoBot OS</div>
        <div className="m-3 text-4xl text-white">
          An Operating System, in your{" "}
          <span className="text-yellow-400">Browser</span>
          <span className="cursor">|</span>
        </div>
        <p className="absolute bottom-28 ml-8 border-2 border-white bg-yellow-400 text-black text-2xl p-2 rounded-lg  hover:bg-black hover:text-yellow-400 transition-all ease-in-out duration-300">
          Add to Wishlist!
        </p>
      </div>
      <div className=" h-screen w-screen flex flex-col justify-center bg-slate-500">
        <img src={HeroPic} alt={"Operating System"} className="m-3" />
      </div>
    </div>
  );
}
export default App;
