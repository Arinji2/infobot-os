import React from "react";
import Logo from "../assets/pictures/logo.png";
function NavBar() {
  return (
    <div className="bg-slate-600 relative h-20 flex flex-row items-center justify-between">
      <div className="flex flex-row items-center justify-evenly gap-3 border-r-2 border-white">
        <img src={Logo} alt={"Logo"} className="h-16 w-16 ml-4" />
        <p className="text-yellow-400 text-3xl mr-4 self-end mb-2">InfoBot</p>
      </div>
      <div className="flex flex-row items-center justify-evenly gap-3 ">
        <p className="text-white text-3xl p-3 mb-2 border-l-2 border-white">
          Features
        </p>
        <p className="text-white text-3xl p-3 mb-2 border-l-2 border-white">
          Progress
        </p>
        <p className="text-white text-3xl mr-2 p-3 mb-2 border-l-2 border-white">
          WishList
        </p>
      </div>
    </div>
  );
}

export default NavBar;
