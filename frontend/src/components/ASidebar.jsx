import React from "react";
import logo from "../assets/IRONHACK.png";
const ASidebar = () => {
  return (
    <>
      <aside className="bg-black w-[250px] flex-none h-screen flex flex-col">
        <img src={logo}></img>
        <section
          className="text-white text-center text-xl bg-black p-4"
          id="notes"
        >
          The Medic
        </section>
        <section
          className="text-white text-center text-xl bg-black p-4"
          id="user"
        >
          User
        </section>
        <section
          className="text-white text-center text-xl bg-black p-4"
          id="settings"
        >
          Settings
        </section>

        <button className="bg-white hover:bg-blue-400 text-black w-full px-4 py-4 rounded mt-auto">
          Logout
        </button>
        <div className="bg-black h-14"></div>
      </aside>
    </>
  );
};

export default ASidebar;
