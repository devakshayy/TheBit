import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/TheBitLogo.png";

const Header = ({search,setSearch}) => {
  

  return (
    <div className="header-container">
      <Link to="/">
        <div className="w-[70px] h-[55px] md:w-[78px]  md:h-[57px]">
          <img className="h-full w-full" src={logo}  alt="SSLC question papers" />
        </div>
      </Link>
      <div className="relative">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          name="input"
          placeholder="Search..."
          type="text"
          className="header-searchbar"
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
