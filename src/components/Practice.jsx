import React from "react";
import pic from "../img/square.jpg";

const Practice = () => {
  return (
    <div>
      <p className="bg-red-500 text-white">
        Hello Vite + React + Tailwind CSS!
      </p>
      <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 flex flex-wrap items-center">
        <img
          className="block mx-auto h-24 rounded-full flex-shrink-0"
          src={pic}
          alt=""
        />
        <div className="text-center space-y-2">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-medium">Ming En Ho</p>
            <p className="text-slate-500 font-medium">Product Engineer</p>
          </div>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:bg-purple-600 hover:text-white ">
            Message
          </button>
        </div>
      </div>
      <div className="mx-auto my-4 py-4 px-8 max-w-lg bg-white shadow-md rounded-md flex space-x-2 justify-center ">
        <div className=" w-32 h-60 my-2 bg-white rounded-xl border border-purple-500"></div>
        <div className=" w-32 h-60 my-2 bg-white rounded-xl border border-purple-500"></div>
        <div className=" w-32 h-60 my-2 bg-white rounded-xl border border-purple-500"></div>
      </div>
    </div>
  );
};

export default Practice;
