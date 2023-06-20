import React from "react";
import everyCoutryImg from "../img/p4/image 3.png";
import coTwoImg from "../img/p4/image 5.png";
import curlyBracesImg from "../img/p4/curly braces.svg";
import rightArrowImg from "../img/p4/rightArrow.svg";

import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "@react-spring/web";

import Ani_line_style from "./Ani_line_style";
import Ani_appear_comp from "./Ani_appear_comp";
import Anipath from "./Anipath";

import etfImg from "../img/00696.svg";
import ellipseImg from "../img/Ellipse.svg";
import downArrowImg from "../img/down arrow.svg";

const Together_p4 = () => {
  const [inViewref, inView] = useInView({ threshold: 0.25 });
  const downArrowAniStyle = useSpring({
    from: {
      translateY: "-50px",
    },
    to: {
      translateY: "-20px",
    },
    loop: {
      reverse: true,
    },
    config: {
      mass: 2,
      tension: 100,
    },
  });

  return (
    <>
      <div className="relative w-full">
        <img
          className="absolute origin-right scale-50 md:scale-75 xl:scale-90 -translate-y-1/2 right-10% z-10"
          src={etfImg}
          alt=""
        />
        <animated.img
          style={downArrowAniStyle}
          className="absolute left-5% z-10"
          src={downArrowImg}
          alt=""
        />
      </div>
      <div className=" relative px-5% py-[130px] text-main-darkgreen bg-bg-gray overflow-hidden">
        <img
          className="absolute origin-right scale-50 -right-10 top-0 z-10"
          src={ellipseImg}
          alt=""
        />
        {/* content */}
        <div ref={inViewref}>
          <Ani_appear_comp
            element={"div"}
            inView={inView}
            className="max-w-7xl w-96% px-2% mx-auto z-30"
          >
            <div className="py-9%">
              <div className="relative w-full flex flex-col md:flex-row md:items-center">
                <h1 className="pr-7 shrink-0 text-30px md:text-5xl xl:text-[64px] text-left">
                  各國政府攜手
                  <br />
                  追求2050年零碳排
                </h1>
                <Ani_line_style
                  inView={inView}
                  element={"div"}
                  className="relative h-2px w-full md:w-1/2 my-4  right-0 bottom-[15%] md:bottom-[15%] origin-left"
                >
                  <span className="absolute h-full w-1/10 right-0 bg-main-yellow "></span>
                  <span className="absolute h-full w-17/20 left-0 bg-main-yellow "></span>
                </Ani_line_style>
              </div>
            </div>
            {/* box */}
            <div className="bg-white rounded-3xl mb-12 pb-5 xl:pb-0 flex flex-col xl:flex-row ">
              {/* box left */}
              <div className="flex flex-col xl:w-1/2">
                {/* box 0 */}
                <div className="  flex">
                  {/* 0 left */}
                  <div className="relative w-3/5 md:w-7/10 py-9 pr-5% pl-2% md:pr-[15%] md:pl-[10%] border border-main-yellow rounded-l-3xl flex flex-col justify-center items-center text-center">
                    <div>
                      {/* <img src={box0Img} alt="" /> */}
                      <Ani_appear_comp
                        className="py-2 px-6"
                        element={"svg"}
                        inView={inView}
                        xmlns="http://www.w3.org/2000/svg"
                        width="149"
                        height="144"
                        fill="none"
                        viewBox="0 0 149 144"
                      >
                        <g clipPath="url(#clip0_245_294)">
                          <Anipath
                            inView={inView}
                            stroke="#EAC852"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M80.8 45.4h20.46"
                          ></Anipath>
                          <Anipath
                            inView={inView}
                            stroke="#184B5B"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M109.86 17.6v62H41.88V7.07C41.88 3.72 44.6 1 47.95 1h43.84l18.07 16.6z"
                          ></Anipath>
                          <Anipath
                            inView={inView}
                            fill="#fff"
                            stroke="#184B5B"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M147.45 80.23c.02 2.75-1.5 5.1-3.82 6.1l-.06.02c-2.68 1.15-5.27 2.5-7.73 4.05-6.64 4.19-11.14 8.22-17.45 14.45-2.25 2.25-5.06 4.58-8.43 6.48l-48.71 25.74c1.58-1.36 2.39-3.29 2.42-5.24a7.07 7.07 0 00-1.71-4.7c-2.39-2.75-6.47-3.19-9.39-1.11l-.04-.05 1.69-1.46c1.69-1.46 2.57-3.54 2.6-5.62.02-1.8-.58-3.6-1.85-5.05-2.73-3.14-7.52-3.48-10.66-.76l2.74-2.38a7.517 7.517 0 002.58-5.6c.02-1.79-.58-3.58-1.85-5.03-2.71-3.13-7.5-3.46-10.63-.75l-3.32 2.89-.02-.04.56-.48c1.69-1.46 2.57-3.54 2.6-5.62.02-1.8-.58-3.6-1.85-5.05-2.19-2.54-5.74-3.25-8.67-1.99l30-18.65.33-.26 3.58-2.72 16.51-12.53.04-.02 12.46-7.02c3.08-1.75 6.61-2.47 10.14-2.3 7.94.36 14.78-3.08 18.51-4.62l.03-.02c1.76-1 3.94-1.06 5.91-.17 3.81 1.69 10.04 6.03 16.32 17.05 5.93 10.39 7.17 17.99 7.19 22.47l-.02-.01z"
                          ></Anipath>
                          <Anipath
                            inView={inView}
                            fill="#fff"
                            stroke="#184B5B"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M56.78 70.13l3.61-2.8s-.01.05-.03.08l-3.58 2.72z"
                          ></Anipath>
                          <Anipath
                            inView={inView}
                            fill="#fff"
                            stroke="#184B5B"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M108.37 112.14c1.8 1.37 2.91 3.29 3.25 5.28.35 2-.07 4.05-1.35 5.72-2.55 3.34-7.27 3.5-10.92 1.09l-4.23-3.22c3.6 2.74 4.45 7.67 1.91 11s-7.52 3.81-11.11 1.07l-3.62-2.76c3.51 2.68 3.92 7.45-.15 10.65-3.6 3.2-9.34.75-12.85-1.92l-11.93-9.1 1.32 1.01-18.51-14.12c-3.52-2.6-9.9-8.92-12.17-11.63-6.35-7.57-8.23-8.37-15.16-13.93a69.101 69.101 0 00-8.13-5.62l-.08-.04c-2.47-1.47-3.91-4.14-3.61-6.93.46-4.54 2.6-12.02 10.19-21.43 8.04-9.96 15.38-13.15 19.75-14.14 2.28-.53 4.68-.04 6.52 1.32l.04.03c4.74 2.73 7.64 8.47 16.07 10.57 0 0 8.68 2.43 19.97 11.65 6.32 5.16 9.08 7.3 10.88 8.58 2.2 1.57 2.97 1.88 7.04 4.91l26.08 19.89c3.6 2.74 4.45 7.67 1.91 11s-7.52 3.81-11.11 1.07z"
                          ></Anipath>
                          <Anipath
                            inView={inView}
                            stroke="#184B5B"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M70.8 121.36l12.28 9.63M80.8 109.9l14.6 11.46M91.79 98.96l16.86 13.23"
                          ></Anipath>
                          <path
                            fill="#fff"
                            d="M75.47 55.94L60.38 67.33c-.8 2.42-.34 5.34 1.82 9.17l9.63 17.07c2.71 4.79 7.32 5.43 11.29 3.2 2.92-1.66 5.31-6.07 2.34-11.32l-5.54-9.8"
                          ></path>
                          <Anipath
                            inView={inView}
                            stroke="#184B5B"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M75.47 55.94L60.38 67.33c-.8 2.42-.34 5.34 1.82 9.17l9.63 17.07c2.71 4.79 7.32 5.43 11.29 3.2 2.92-1.66 5.31-6.07 2.34-11.32l-5.54-9.8"
                          ></Anipath>
                          <Anipath
                            inView={inView}
                            fill="#fff"
                            stroke="#184B5B"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M41.88 93.72a7.547 7.547 0 01-2.6 5.62l-.56.48-7.02 6.1c-3.14 2.74-7.95 2.4-10.68-.75-2.74-3.14-2.4-7.95.75-10.68l7.57-6.58 2-1.24c2.93-1.26 6.48-.55 8.67 1.99a7.538 7.538 0 011.85 5.05l.02.01zM61.72 116.55a7.547 7.547 0 01-2.6 5.62l-1.69 1.46-5.88 5.13c-3.15 2.73-7.95 2.39-10.69-.75-2.71-3.14-2.39-7.92.72-10.66l6.48-5.63 1.14-.99c3.14-2.71 7.94-2.38 10.66.76a7.538 7.538 0 011.85 5.05l.01.01z"
                          ></Anipath>
                          <Anipath
                            inView={inView}
                            fill="#fff"
                            stroke="#184B5B"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M54.54 102.76a7.588 7.588 0 01-2.58 5.6l-2.75 2.38-1.14.99-6.48 5.63c-3.13 2.73-7.91 2.39-10.63-.74-2.72-3.13-2.38-7.91.75-10.63l7.04-6.12 3.32-2.89c3.13-2.71 7.91-2.38 10.63.75a7.505 7.505 0 011.85 5.03h-.01zM68.58 129.49a7.001 7.001 0 01-2.42 5.24l-3.63 3.16c-2.92 2.53-7.39 2.22-9.94-.7-2.54-2.92-2.22-7.39.7-9.92l3.63-3.16c.18-.15.36-.3.55-.42 2.92-2.08 7-1.64 9.39 1.11a7.07 7.07 0 011.71 4.7l.01-.01z"
                          ></Anipath>
                          <path
                            fill="#fff"
                            d="M117.09 70.95s-19.17 11.98-27.17 7.74l27.17-7.74z"
                          ></path>
                          <Anipath
                            inView={inView}
                            stroke="#184B5B"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M117.09 70.95s-19.17 11.98-27.17 7.74M83.61 74.65l-7.79-5.92M91.79 17.6l17.39-.13s.02-.02.01-.03L92.6 1.77a.48.48 0 00-.81.35V17.6z"
                          ></Anipath>
                          <Anipath
                            inView={inView}
                            stroke="#EAC852"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M80.8 35.29h20.46M60.38 48.74a8.65 8.65 0 100-17.3 8.65 8.65 0 000 17.3z"
                          ></Anipath>
                          <Anipath
                            inView={inView}
                            stroke="#EAC852"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M56.78 40.09l3.6 4.07 10.96-14.03"
                          ></Anipath>
                        </g>
                        <defs>
                          <clipPath id="clip0_245_294">
                            <path fill="#fff" d="M0 0H148.45V143.49H0z"></path>
                          </clipPath>
                        </defs>
                      </Ani_appear_comp>
                    </div>
                    <div>
                      <p className="text-22px md:text-30px font-bold ">
                        巴黎氣候協定
                      </p>
                      <p>(2015召開、2016生效)</p>
                    </div>
                    <img
                      className="absolute right-5% top-1/2 w-[22px] md:w-10"
                      src={rightArrowImg}
                      alt=""
                    />
                  </div>
                  {/* 0 right */}
                  <div className="w-2/5 md:w-3/10 bg-main-yellow rounded-tr-3xl text-white flex flex-col justify-center items-center">
                    <p className="drop-shadow-text text-22px md:text-30px font-bold">
                      格拉斯哥
                      <br />
                      氣候峰會
                    </p>
                    <p className="drop-shadow-text">{"(2021/11)"}</p>
                  </div>
                </div>
                {/* box 1 */}
                <div className=" flex">
                  {/* 1 left */}
                  <div className="w-3/5 md:w-7/10 flex items-center justify-between">
                    {/* all */}
                    <div className="w-17/20 flex flex-col">
                      {/* 1 */}
                      <div className="py-3 md:py-5 flex flex-col md:flex-row items-center justify-center">
                        <Ani_appear_comp
                          element={"div"}
                          inView={inView}
                          className="max-w-[1/3] md:ml-5% pt-2 md:py-6"
                        >
                          <svg
                            className="py-3 px-3"
                            xmlns="http://www.w3.org/2000/svg"
                            width="108"
                            height="105"
                            fill="none"
                            viewBox="0 0 108 105"
                          >
                            <Anipath
                              inView={inView}
                              friction={50}
                              stroke="#EAC852"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M55.705 103.373c20.853-.784 37.122-18.36 36.34-39.258-.783-20.897-18.322-37.201-39.175-36.417-20.853.785-37.123 18.361-36.34 39.258.783 20.897 18.322 37.202 39.175 36.417z"
                            ></Anipath>
                            <Anipath
                              inView={inView}
                              friction={50}
                              stroke="#EAC852"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M31.218 88.817L25.7 71.055c-.723-2.328 1.695-4.38 3.87-3.286l14.433 7.283a2.758 2.758 0 01.854 4.256l-8.922 10.478c-1.41 1.652-4.079 1.102-4.724-.969h.007zM82.677 58.524H64.63c-5.154 0-9.334 1.849-9.334 7.013 0 1.652 0 3.944 2.89 5.47.293.156.615.216.92.347l9.173 4.022 7.31 13.304c.567 1.819 4.502 4.512 5.834 3.207 5.942-6.146 9.83-14.303 10.534-23.357 0 0-.985-10.012-9.28-10.012v.006zM89.287 51.258a37.953 37.953 0 00-14.195-17.325h-.352c-8.707 0-15.771 7.074-15.771 15.805a4.14 4.14 0 004.138 4.148h22.335c1.75 0 3.242-1.09 3.846-2.622v-.006z"
                            ></Anipath>
                            <path
                              fill="#EAC852"
                              d="M93.5 27a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"
                            ></path>
                            <Anipath
                              inView={inView}
                              friction={50}
                              stroke="#EAC852"
                              strokeLinecap="round"
                              strokeMiterlimit="10"
                              strokeWidth="1.5"
                              d="M93 7v4M84 12l2 1M80 21h4M103 12l-2 1M107 21h-4M93 34v-4M84 30l2-2M103 30l-2-2"
                            ></Anipath>
                            <Anipath
                              inView={inView}
                              friction={50}
                              stroke="#EAC852"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M45.807 28.63a6.638 6.638 0 00-.872 3.28v2.304a6.63 6.63 0 004.043 6.11s2.52-5.703 9.19-6.11V31.91c0-1.574-.55-3.022-1.469-4.16-.8-.047-1.6-.077-2.412-.077-2.915 0-5.757.329-8.48.957zM16.503 65.537c0 .712.024 1.413.06 2.113l13.329-6.146a11.04 11.04 0 006.091-7.38l3.912-15.882a11.084 11.084 0 00-.759-7.403c-13.323 5.853-22.64 19.186-22.64 34.698h.007z"
                            ></Anipath>
                            <Anipath
                              inView={inView}
                              friction={50}
                              stroke="#184B5B"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M8.71 80.265V23.933H1l16.667-13.71 15.169 13.71h-8.707l.25 8.474M44.935 22.933v-6.23h-7.62L54.287 1 71.64 16.703h-8.707v6.23M101.834 85.155V58.852c0-2.734-2.21-4.949-4.938-4.949a4.942 4.942 0 00-4.939 4.95v26.302a9.509 9.509 0 00-4.569 8.127c0 5.26 4.258 9.527 9.508 9.527 5.249 0 9.507-4.267 9.507-9.527a9.51 9.51 0 00-4.569-8.127zM96.896 62.587v26.679"
                            ></Anipath>
                            <path
                              fill="#184B5B"
                              d="M96.896 97.524a4.233 4.233 0 004.228-4.237 4.233 4.233 0 00-4.228-4.237 4.233 4.233 0 00-4.228 4.237 4.233 4.233 0 004.228 4.237z"
                            ></path>
                            <Anipath
                              inView={inView}
                              friction={50}
                              fill="#fff"
                              stroke="#184B5B"
                              strokeWidth="1.5"
                              d="M31.76 98.77c-2.627 0-4.759-2.143-4.759-4.77 0-2.628 2.204-8.295 4.76-8.295 2.556 0 4.76 5.566 4.76 8.295s-2.139 4.77-4.76 4.77zM22.529 102.581a2.523 2.523 0 01-2.52-2.525c0-1.394 1.194-4.495 2.52-4.495 1.325 0 2.52 3.053 2.52 4.495a2.493 2.493 0 01-2.52 2.525z"
                            ></Anipath>
                          </svg>
                        </Ani_appear_comp>

                        <p className="w-full md:pl-5% md:w-7/10 text-center text-sm md:text-lg xl:text-base ">
                          控制全球升溫(較工業化前)
                          <br />
                          不超過攝氏2度
                          <br />
                          並以1.5度為目標
                        </p>
                      </div>
                      {/* 2 */}
                      <div className="py-3 md:py-5 flex flex-col md:flex-row items-center justify-center">
                        <Ani_appear_comp
                          element={"div"}
                          inView={inView}
                          className="max-w-[1/3] md:ml-5% pt-2 md:py-6"
                        >
                          <svg
                            className="py-3 px-3"
                            xmlns="http://www.w3.org/2000/svg"
                            width="108"
                            height="82"
                            fill="none"
                            viewBox="0 0 108 82"
                          >
                            <g clipPath="url(#clip0_245_368)">
                              <Anipath
                                inView={inView}
                                stroke="#184B5B"
                                strokeMiterlimit="10"
                                d="M43.97 27.56v4.73c0 2.4 4.01 4.35 8.97 4.35 4.96 0 8.97-1.95 8.97-4.35v-4.73"
                              ></Anipath>
                              <Anipath
                                inView={inView}
                                stroke="#184B5B"
                                strokeMiterlimit="10"
                                d="M43.97 32.05v4.62c0 2.4 4.01 4.35 8.97 4.35 4.96 0 8.97-1.95 8.97-4.35v-4.62"
                              ></Anipath>
                              <Anipath
                                inView={inView}
                                stroke="#184B5B"
                                strokeMiterlimit="10"
                                d="M43.97 36.53v4.62c0 2.4 4.01 4.35 8.97 4.35 4.96 0 8.97-1.95 8.97-4.35v-4.62"
                              ></Anipath>
                              <Anipath
                                inView={inView}
                                stroke="#184B5B"
                                strokeMiterlimit="10"
                                d="M43.97 40.43v4.62c0 2.4 4.01 4.35 8.97 4.35 4.96 0 8.97-1.95 8.97-4.35v-4.62M52.93 31.94c4.954 0 8.97-2.104 8.97-4.7s-4.016-4.7-8.97-4.7c-4.954 0-8.97 2.104-8.97 4.7s4.016 4.7 8.97 4.7zM66.39 24.96v4.73c0 2.4 4.01 4.35 8.97 4.35 4.96 0 8.97-1.95 8.97-4.35v-4.73"
                              ></Anipath>
                              <Anipath
                                inView={inView}
                                stroke="#184B5B"
                                strokeMiterlimit="10"
                                d="M66.39 29.46v4.62c0 2.4 4.01 4.35 8.97 4.35 4.96 0 8.97-1.95 8.97-4.35v-4.62"
                              ></Anipath>
                              <Anipath
                                inView={inView}
                                stroke="#184B5B"
                                strokeMiterlimit="10"
                                d="M66.39 33.94v4.62c0 2.4 4.01 4.35 8.97 4.35 4.96 0 8.97-1.95 8.97-4.35v-4.62"
                              ></Anipath>
                              <Anipath
                                inView={inView}
                                stroke="#184B5B"
                                strokeMiterlimit="10"
                                d="M66.39 37.84v4.62c0 2.4 4.01 4.35 8.97 4.35 4.96 0 8.97-1.95 8.97-4.35v-4.62M75.36 29.35c4.954 0 8.97-2.104 8.97-4.7 0-2.595-4.016-4.7-8.97-4.7-4.954 0-8.97 2.105-8.97 4.7 0 2.596 4.016 4.7 8.97 4.7z"
                              ></Anipath>
                              <Anipath
                                inView={inView}
                                fill="#fff"
                                d="M81.7 57.9l12.92-7.82a8.554 8.554 0 0111.77 2.79c1.41 2.29.7 5.3-1.59 6.71l-10.88 6.73-14.42 8.88C68.45 82 53.28 82.22 42.47 76.81c0 0-10.18-5.68-23.01-3.96V47.18l9.77-5.41c10.9-6.09 24.83 4.26 24.83 4.26 5.31 3.5 9.79 5.75 15.96 6.93 2.3.44 5.13.41 7.23 1.34 2.61 1.16 4.73 3.14 5.39 6 .46 2.01-.41 4.52-2.14 5.69-2.35 1.58-5.87 1.03-8.48.69-6.44-.83-12.76-2.58-18.79-4.98-.08-.03-.16-.06-.23-.09"
                              ></Anipath>
                              <Anipath
                                inView={inView}
                                stroke="#184B5B"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M81.7 57.9l12.92-7.82a8.554 8.554 0 0111.77 2.79c1.41 2.29.7 5.3-1.59 6.71l-10.88 6.73-14.42 8.88C68.45 82 53.28 82.22 42.47 76.81c0 0-10.18-5.68-23.01-3.96V47.18l9.77-5.41c10.9-6.09 24.83 4.26 24.83 4.26 5.31 3.5 9.79 5.75 15.96 6.93 2.3.44 5.13.41 7.23 1.34 2.61 1.16 4.73 3.14 5.39 6 .46 2.01-.41 4.52-2.14 5.69-2.35 1.58-5.87 1.03-8.48.69-6.44-.83-12.76-2.58-18.79-4.98-.08-.03-.16-.06-.23-.09"
                              ></Anipath>
                              <Anipath
                                inView={inView}
                                fill="#fff"
                                d="M76.66 54.08l14.03-8.23a7.56 7.56 0 0110.4 2.47l.38.83"
                              ></Anipath>
                              <Anipath
                                inView={inView}
                                stroke="#184B5B"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M76.66 54.08l14.03-8.23a7.56 7.56 0 0110.4 2.47l.38.83"
                              ></Anipath>
                              <Anipath
                                inView={inView}
                                fill="#fff"
                                d="M68.55 52.68l16.06-9.48a7.567 7.567 0 019.71 1.52"
                              ></Anipath>
                              <Anipath
                                inView={inView}
                                stroke="#184B5B"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M68.55 52.68l16.06-9.48a7.567 7.567 0 019.71 1.52"
                              ></Anipath>
                              <Anipath
                                inView={inView}
                                fill="#EAC852"
                                d="M19.51 43H1.49C.667 43 0 43.61 0 44.361v30.278C0 75.391.667 76 1.49 76h18.02c.823 0 1.49-.61 1.49-1.361V44.361c0-.752-.667-1.361-1.49-1.361z"
                              ></Anipath>
                              <Anipath
                                inView={inView}
                                stroke="#EAC852"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.62 36.16v-6.21h-2.86l5.91-5.33 5.38 5.33h-2.72l.09 6.21M26.9 32.1V11.78h-2.82l6.28-5.81 6.43 5.81h-3.22V32.1"
                              ></Anipath>
                              <Anipath
                                inView={inView}
                                fill="#EAC852"
                                d="M60.38 19.95v-2.33c-1.63-.07-3.23-.53-4.15-1.05l.73-2.86c1.04.55 2.48 1.07 4.06 1.07 1.39 0 2.35-.55 2.35-1.52s-.78-1.51-2.6-2.12c-2.62-.88-4.4-2.11-4.4-4.47 0-2.16 1.51-3.85 4.13-4.36V0h2.4v2.16c1.62.06 2.72.41 3.54.8l-.73 2.76c-.62-.28-1.76-.84-3.51-.84-1.57 0-2.09.7-2.09 1.38 0 .8.85 1.32 2.93 2.09 2.91 1.02 4.07 2.37 4.07 4.59 0 2.22-1.53 4.01-4.34 4.5v2.51h-2.4.01z"
                              ></Anipath>
                            </g>
                            <defs>
                              <clipPath id="clip0_245_368">
                                <path
                                  fill="#fff"
                                  d="M0 0H107.62V81.12H0z"
                                ></path>
                              </clipPath>
                            </defs>
                          </svg>
                        </Ani_appear_comp>
                        <p className="w-full md:pl-5% md:w-7/10 text-center text-sm md:text-lg xl:text-base ">
                          出資協助開發中經濟體
                          <br />
                          應對氣候變遷衝擊
                        </p>
                      </div>
                      {/* 3 */}
                      <div className="py-3 md:py-5 flex flex-col md:flex-row items-center justify-center">
                        <Ani_appear_comp
                          element={"div"}
                          inView={inView}
                          className="md:ml-5% pt-2 md:py-6"
                        >
                          <svg
                            className="py-3 px-3"
                            xmlns="http://www.w3.org/2000/svg"
                            width="101"
                            height="97"
                            fill="none"
                            viewBox="0 0 101 97"
                          >
                            <g clipPath="url(#clip0_246_386)">
                              <Anipath
                                inView={inView}
                                stroke="#184B5B"
                                strokeMiterlimit="10"
                                d="M34.21 5.24H5.48A4.98 4.98 0 00.5 10.22V75.8a4.98 4.98 0 004.98 4.98h28.73a4.98 4.98 0 004.98-4.98V10.22a4.98 4.98 0 00-4.98-4.98z"
                              ></Anipath>
                              <Anipath
                                inView={inView}
                                stroke="#184B5B"
                                strokeMiterlimit="10"
                                d="M39.28 5.24H10.55a4.98 4.98 0 00-4.98 4.98V75.8a4.98 4.98 0 004.98 4.98h28.73a4.98 4.98 0 004.98-4.98V10.22a4.98 4.98 0 00-4.98-4.98z"
                              ></Anipath>
                              <Anipath
                                inView={inView}
                                fill="#fff"
                                stroke="#EAC852"
                                strokeMiterlimit="10"
                                d="M88.63 5.24H17.65a7.41 7.41 0 00-7.41 7.41v60.72a7.41 7.41 0 007.41 7.41h70.98a7.41 7.41 0 007.41-7.41V12.65a7.41 7.41 0 00-7.41-7.41z"
                              ></Anipath>
                              <Anipath
                                inView={inView}
                                stroke="#EAC852"
                                strokeMiterlimit="10"
                                d="M10.24 19.97h85.8"
                              ></Anipath>
                              <Anipath
                                inView={inView}
                                stroke="#184B5B"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M27.02 30.42h-8.39v8.39h8.39v-8.39z"
                              ></Anipath>
                              <Anipath
                                inView={inView}
                                fill="#fff"
                                stroke="#184B5B"
                                d="M28.13.5h5.05a.61.61 0 01.61.61v9.28a.61.61 0 01-.61.61h-5.05a.61.61 0 01-.61-.61V1.11a.61.61 0 01.61-.61zM50.61.5h5.05a.61.61 0 01.61.61v9.28a.61.61 0 01-.61.61h-5.05a.61.61 0 01-.61-.61V1.11a.61.61 0 01.61-.61zM74.39.5h5.05a.61.61 0 01.61.61v9.28a.61.61 0 01-.61.61h-5.05a.61.61 0 01-.61-.61V1.11a.61.61 0 01.61-.61z"
                              ></Anipath>
                              <Anipath
                                inView={inView}
                                stroke="#184B5B"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M27.02 46.46h-8.39v8.39h8.39v-8.39zM27.02 62.5h-8.39v8.39h8.39V62.5z"
                              ></Anipath>
                              <Anipath
                                inView={inView}
                                fill="#EAC852"
                                d="M42.69 30.42H34.3v8.39h8.39v-8.39z"
                              ></Anipath>
                              <Anipath
                                inView={inView}
                                stroke="#184B5B"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M42.69 46.46H34.3v8.39h8.39v-8.39zM42.69 62.5H34.3v8.39h8.39V62.5zM58.36 30.42h-8.39v8.39h8.39v-8.39zM58.36 46.46h-8.39v8.39h8.39v-8.39z"
                              ></Anipath>
                              <Anipath
                                inView={inView}
                                fill="#EAC852"
                                d="M58.36 62.5h-8.39v8.39h8.39V62.5z"
                              ></Anipath>
                              <Anipath
                                inView={inView}
                                stroke="#184B5B"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M74.02 30.42h-8.39v8.39h8.39v-8.39z"
                              ></Anipath>
                              <Anipath
                                inView={inView}
                                fill="#EAC852"
                                d="M74.02 46.46h-8.39v8.39h8.39v-8.39z"
                              ></Anipath>
                              <Anipath
                                inView={inView}
                                stroke="#184B5B"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M89.69 30.42H81.3v8.39h8.39v-8.39zM89.69 46.46H81.3v8.39h8.39v-8.39z"
                              ></Anipath>
                              <Anipath
                                inView={inView}
                                fill="#fff"
                                stroke="#184B5B"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M82.61 96.44c9.682 0 17.53-7.849 17.53-17.53 0-9.682-7.848-17.53-17.53-17.53-9.682 0-17.53 7.848-17.53 17.53 0 9.681 7.848 17.53 17.53 17.53z"
                              ></Anipath>
                              <Anipath
                                inView={inView}
                                stroke="#EAC852"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M86.17 89.39c.15-.07.3-.14.45-.22 3.22-1.88 4.71-4.68 4.45-8.41-.15-2.07-.85-3.93-1.95-5.67-.69-1.08-1.48-2.09-2.23-3.13-.96-1.34-1.77-2.74-2.03-4.4-.03-.19-.11-.16-.22-.06-.53.48-.99 1.01-1.43 1.56-1.32 1.69-2.17 3.58-2.45 5.71-.17 1.29-.22 2.58-.21 3.88 0 .13 0 .27-.02.4-.06.36-.31.54-.67.52-1.14-.06-2.05-.56-2.76-1.44-.51-.63-.86-1.34-1.11-2.11-.02-.07-.02-.17-.11-.18-.08-.01-.12.08-.17.13-.24.31-.46.63-.63.99-.88 1.88-1.09 3.87-.84 5.9.27 2.16 1.31 3.94 2.98 5.34.57.48 1.2.88 1.93 1.2-.03-.07-.04-.1-.06-.12-.95-1.54-.94-3.15-.32-4.79.18-.46.46-.87.89-1.15.38-.25.78-.09.89.35l.09.36c.07.23.14.46.31.65.02-.03.05-.05.05-.07.03-.29.04-.58.08-.87.2-1.67.97-3.02 2.26-4.08.18-.15.39-.22.62-.11.23.11.33.3.33.54 0 .57.18 1.08.48 1.55.42.67.89 1.31 1.29 1.99.72 1.22 1 2.54.78 3.95-.1.63-.36 1.2-.67 1.77v.02z"
                              ></Anipath>
                            </g>
                            <defs>
                              <clipPath id="clip0_246_386">
                                <path
                                  fill="#fff"
                                  d="M0 0H100.64V96.94H0z"
                                ></path>
                              </clipPath>
                            </defs>
                          </svg>
                        </Ani_appear_comp>
                        <p className="w-full md:pl-5% md:w-7/10 text-center text-sm md:text-lg xl:text-base ">
                          每5年檢討減少碳排貢獻
                        </p>
                      </div>
                    </div>
                    <img
                      className="w-10 md:w-1/10 md:h-7/10  xl:w-1/10 "
                      src={curlyBracesImg}
                      alt=""
                    />
                  </div>

                  {/* 1 right */}
                  <div className="w-2/5 md:w-3/10 bg-main-yellow rounded-br-3xl flex justify-center items-center">
                    <div className="mx-[10%] ">
                      <img src={everyCoutryImg} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              {/* box right */}
              <div className="py-12 md:pt-12 md:pb-0 xl:pt-0 xl:w-1/2 flex flex-col md:flex-row xl:flex-col xl:justify-center px-5%">
                <div className=" w-full md:w-2/5 xl:w-full">
                  <h3 className="text-22px md:text-28px xl:text-34px text-left pb-0.5em mb-0.5em border-b border-y-main-yellow font-bold">
                    為控制氣候升溫
                    <br />
                    2050年淨零碳排為關鍵
                  </h3>
                  <p className="md:text-lg xl:text-22px ">
                    達成2050年100%綠能經濟之路徑規劃
                  </p>
                </div>

                <img
                  className=" w-full md:w-3/5 xl:w-full md:pl-2% xl:pl-0"
                  src={coTwoImg}
                  alt=""
                />
              </div>
            </div>
            <div className="mx-auto w-[96%] my-auto xl:my-0 text-md xl:text-lg pt-6 pb-4 font-medium text-left md:text-center text-font-gray">
              資料來源：Renewables 2021 Global Status
              Report，富蘭克林華美投信整理，2021/11。
            </div>
          </Ani_appear_comp>
        </div>
      </div>
    </>
  );
};

export default Together_p4;
