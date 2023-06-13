import React from "react";
import tl_tri from "../img/video/tl_tri.svg";
import br_tri from "../img/video/br_tri.svg";
// import box1 from "../img/video/box1.svg";
// import box2 from "../img/video/box2.svg";
import title from "../img/video/title.svg";
import videoFile from "../video/00696.mp4";

const Video = () => {
  return (
    <div
      className={`relative aspect-3/4 w-full md:aspect-auto md:h-[calc(100vh-64px)] md:min-h-0 bg-slate-500 overflow-hidden`}
    >
      <video
        className="absolute object-cover min-h-full"
        src={videoFile}
        muted
        playsInline
        autoPlay
        loop
        style={{
          WebkitMediaControlsEnclosure: {
            display: "none !important",
          },
        }}
      ></video>
      <img
        className="absolute -translate-x-[20%] md:-translate-x-0 pr-0 md:ml-[10%] xl:ml-[15%]"
        src={title}
        alt=""
      />
      {/* <div className="absolute max-w-[70%] -translate-x-[20%] md:-translate-x-0 pr-0 scale-50 pt-[30%] md:pt-56 md:ml-[calc(10%+200px)] xl:ml-[calc(15%+200px)]">
        <h1 className="font-Barlow text-88px font-semibold text-white drop-shadow-text leading-none">
          00696
          <br />
          FT <span className="font-noto text-70px">潔淨能源</span>
        </h1>
        <p className=" text-xl font-bold text-white drop-shadow-text pt-3">
          (本基金非屬環境、社會及治理相關主題基金)
        </p>

        <div className="flex pt-8">
          <div className="relative">
            <p className="relative text-xl font-bold tracking-wide pl-8 pr-12 z-10">
              立即參與
            </p>
            <img className="absolute -top-2 z-[1]" src={box1} alt="" />
          </div>
          <div className="relative -translate-x-12">
            <p className="relative text-xl font-bold tracking-wide pl-12 pr-9 z-10">
              改變世界
            </p>
            <img className="absolute -top-2 -right-1 z-0" src={box2} alt="" />
          </div>
        </div>
      </div> */}
      <img
        className="w-[70px] md:w-auto absolute top-0 left-0"
        src={tl_tri}
        alt=""
      />
      <img
        className="w-[140px] md:w-auto absolute -bottom-3 right-0"
        src={br_tri}
        alt=""
      />
    </div>
  );
};

export default Video;
