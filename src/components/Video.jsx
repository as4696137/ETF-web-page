import React from "react";
import tl_tri from "../img/video/tl_tri.svg";
import br_tri from "../img/video/br_tri.svg";
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
