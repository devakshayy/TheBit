import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/TheBitLogo.png";

const Header = ({search,setSearch}) => {
  

  return (
    <div className="flex justify-between px-2 sm:px-4 items-center bg-slate-200 h-[80px] min-w-full border-slate-400 border-b">
      <Link to="/">
        <div className="w-[80px] h-[70px] md:w-[100px]  md:h-[80px]">
          <img className="h-full w-full" src={logo} alt="TheBitLogo.png" />
        </div>
      </Link>
      <div className="relative">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          name="input"
          placeholder="Search..."
          type="text"
          className="border-2 rounded-lg bg-slate-100 border-slate-500 w-[160px] sm:w-[450px] shadow-inner h-[45px]  pl-4 pr-10"
        />
        <img
          className="absolute top-1/2 right-2  transform -translate-y-1/2"
          width="30"
          height="30"
          src="https://img.icons8.com/ios/50/search--v1.png"
          alt="search--v1"
        />
      </div>
      {/* <div className="flex justify-center items-center gap-2">
        <Link to="/questionshub" className="hover:text-slate-600">
          <button className="border border-black p-1 text-sm rounded-md">
            Questions
          </button>
        </Link>
        <Link to="/answershub" className="hover:text-slate-600">
          <button className="border border-black p-1 text-sm rounded-md">
            Answers
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default Header;
