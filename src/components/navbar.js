import React from "react";
import Logo from "../assets/pictures/logo.png";
import "../index.css";
function NavBar() {
  return (
    <div
      className="nav bg-gradient-to-r from-[#909EB2] to-[#49515B]  h-20  sticky top-0 z-10 border-b-2 border-white  flex-row items-center justify-between"
      id="nav"
      onScroll={(el) => {
        console.log(el.currentTarget.clientHeight);
      }}
    >
      <div className="flex flex-col items-center justify-center w-20 h-20 ml-5">
        <img src={Logo} alt={"Logo"} className="h-10" />
        <p className="text-white text-2xl">InfoBot</p>
      </div>
      <div
        className="absolute  right-0 md:right-5 top-5 hover:scale-110 transition-all ease-in-out duration-200 hover:cursor-pointer"
        onClick={() => {
          window.location.hostname = "os.infobot.tech";
        }}
      >
        <div className="flex flex-col items-center justify-center">
          <p className="text-yellow-400 bg-transparent border-2 border-white p-2 rounded-lg">
            Check Out the OS
          </p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
