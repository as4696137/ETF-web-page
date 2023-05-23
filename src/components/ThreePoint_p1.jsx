import React from "react";
import chatboxImg from "../img/p1/chatbox.svg";
import rectSvg from "../img/p1/Rectangle 5.svg";

const ThreePoint_p1 = () => {
  return (
    <div className="border border-solid border-red-400 relative px-5% text-main-darkgreen leading-none">
      <div className="border border-solid border-red-400 py-[9%] xl:py-[60px] ">
        <div className="py-[8%] md:py-[4%]">
          <p className="text-lg font-bold md:text-3xl">迎接能源新時代</p>
          <h1 className=" md:py-0 text-right text-42px font-black md:text-left md:-translate-y-8">
            <span className="block text-32px md:text-42px md:font-black md:inline">
              佈局潔淨能源
            </span>
            <span className="text-56px md:text-120px text-main-yellow font-Barlow font-bold">
              3
            </span>
            <span>大關鍵</span>
          </h1>
        </div>
      </div>
      <div className="border border-solid border-red-400 flex flex-col md:flex-row md:justify-around ">
        <div className="relative md:w-31% my-5 pt-70px md:pt-100px md:pr-2% flex flex-row md:flex-col">
          <div className="absolute -top-2 md:top-0">
            <img
              className="relative scale-75 md:scale-100"
              src={chatboxImg}
              alt=""
            />
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full text-lg text-white drop-shadow-text ">
              投資也可以
            </p>
          </div>
          <div className=" w-[43%] md:w-full flex flex-col justify-center items-center">
            <img
              className="max-h-170px max-w-170px w-full flex-initial"
              src={rectSvg}
              alt="svg"
            />
          </div>
          <div className="ml-3% md:ml-0 w-[55%] md:w-full text-center leading-normal flex flex-col justify-center items-center">
            <p className="text-24px md:text-34px font-black">環保愛地球</p>
            <p className="md:text-lg ">全球衝刺潔淨能源</p>
            <p className="md:text-lg ">參與愛地球行動</p>
          </div>
        </div>
        <div className="relative md:w-31% my-5 pt-70px md:pt-100px md:pr-2% flex flex-row md:flex-col">
          <div className="absolute -top-2 md:top-0">
            <img
              className="relative scale-75 md:scale-100"
              src={chatboxImg}
              alt=""
            />
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full text-lg text-white drop-shadow-text ">
              能源也可以
            </p>
          </div>
          <div className=" w-[43%] md:w-full flex flex-col justify-center items-center text-center">
            <img
              className="max-h-170px max-w-170px w-full flex-initial"
              src={rectSvg}
              alt="svg"
            />
          </div>
          <div className="ml-3% md:ml-0 w-[55%] md:w-full text-center leading-normal flex flex-col justify-center items-center ">
            <p className="text-24px md:text-34px font-black">破壞式創新</p>
            <p className="md:text-lg ">潔淨能源成本下降</p>
            <p className="md:text-lg ">普及應用成趨勢</p>
          </div>
        </div>
        <div className="relative md:w-31% my-5 pt-70px md:pt-100px md:pr-2% flex flex-row md:flex-col">
          <div className="absolute -top-2 md:top-0">
            <img
              className="relative scale-75 md:scale-100"
              src={chatboxImg}
              alt=""
            />
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full text-lg text-white drop-shadow-text ">
              佈局也可以
            </p>
          </div>
          <div className=" w-[43%] md:w-full flex flex-col justify-center items-center">
            <img
              className="max-h-170px max-w-170px w-full flex-initial"
              src={rectSvg}
              alt="svg"
            />
          </div>
          <div className="ml-3% md:ml-0 w-[55%] md:w-full text-center leading-normal flex flex-col justify-center items-center">
            <p className="text-24px md:text-34px font-black">趨勢大多頭</p>
            <p className="md:text-lg ">各國政策導向2050年</p>
            <p className="md:text-lg ">達100%綠能經濟</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreePoint_p1;
