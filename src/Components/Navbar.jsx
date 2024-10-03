// import React from 'react'
import { navImg } from "../utils";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center w-full pl-3 pr-8 py-4 ">
          <div className="flex items-center">
            <img src={navImg} alt="navimage" style={{
                zIndex:1
            }}/>
            <p className="text-xl text-white" style={{
                zIndex:2
            }}>Mukund Sharma</p>
          </div>
          <div className="flex w-[268px] justify-between items-center cursor-pointer text-greyish flex-none">
            <p className="text-xl font-normal cursor-pointer">Projects</p>
            <p className="text-xl font-normal cursor-pointer">About</p>
            <p className="text-xl font-normal cursor-pointer">Contact</p>
          </div>
    </div>
  );
}
