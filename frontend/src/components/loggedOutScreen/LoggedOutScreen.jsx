import React from "react";
import logo from "../../assets/ing1.png";
const LoggedOutScreen = () => {
  return (
    <>
      <div className="text-4xl text-center pt-10">High-Tech Mini-App</div>

      <div className="text-2xl text-center pt-5">
        organize your life with a minimal KanBan-App
      </div>
      <div className="flex justify-center items-center p-10">
        <img className="object-cover h-64 w-3/5 object-center" src={logo}></img>
      </div>
    </>
  );
};

export default LoggedOutScreen;
