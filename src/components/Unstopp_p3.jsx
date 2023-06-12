import React, { useState } from "react";
import down_icon from "../img/p3/down_icon.png";
import bgCircleImg from "../img/p3/bg-circle.svg";

import { useInView } from "react-intersection-observer";
import { animated, useSpring, useSprings } from "@react-spring/web";
import Ani_line_style from "./Ani_line_style";
import Ani_appear_comp from "./Ani_appear_comp";
import Anipath from "./Anipath";
import { countNumber } from "./Ani_count_number";

import etfImg from "../img/00696.svg";
import ellipseImg from "../img/Ellipse.svg";
import downArrowImg from "../img/down arrow.png";

const Unstopp_p3 = () => {
  const [inViewref, inView] = useInView({ threshold: 0.35 });
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

  const countNumArr = [
    { startNum: 0, finalNum: 85 },
    { startNum: 0, finalNum: 68 },
    { startNum: 0, finalNum: 54 },
    { startNum: 0, finalNum: 48 },
  ];

  const countNumbers = countNumber(countNumArr, inView);

  const AniCircle = ({ inView, num, ...props }) => {
    const [length, setLength] = useState(null);
    const ani_circle_style = useSprings(
      countNumArr.length,
      countNumArr.map((each) => ({
        from: { strokeDashoffset: length },
        strokeDasharray: length,
        strokeDashoffset: inView
          ? length * ((100 - each.finalNum) / 100)
          : length,
        config: {
          friction: 50,
        },
        delay: 250,
      }))
    );
    return (
      <animated.circle
        style={ani_circle_style[num]}
        ref={(ref) => {
          if (ref) {
            setLength(ref.getTotalLength());
          }
        }}
        {...props}
      />
    );
  };

  return (
    <>
      {/* 裝飾    */}
      <div className="relative w-full">
        <img
          className="absolute origin-left scale-50 md:scale-75 xl:scale-90 -translate-y-1/2 left-10% z-10"
          src={etfImg}
          alt=""
        />
        <animated.img
          style={downArrowAniStyle}
          className="absolute right-5% z-10"
          src={downArrowImg}
          alt=""
        />
      </div>

      {/* all page */}
      <div className=" relative px-5% pt-20 pb-12 md:py-[100px] xl:py-[130px] text-main-darkgreen">
        <img
          className="absolute origin-left scale-50 -left-10 top-0 z-10"
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
            {/* heading */}
            <div className="mx-[2%] py-[9%] text-left">
              <div className="relative w-full flex flex-col md:flex-row md:items-center">
                <h1 className="pr-7 text-30px md:text-[50px] xl:text-[60px] shrink-0">
                  能源轉型 勢不可擋
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

              <p className="mt-2 md:text-xl xl:text-lg">
                2010~2020年潔淨能源成本極速下滑，潔淨能源普及應用將成為重要趨勢。
              </p>
            </div>
            {/* 4 items */}
            <div className="flex flex-wrap items-end">
              {/* 1 */}
              <div className="py-10px px-3% md:px-1% xl:px-2% w-1/2 md:w-1/4 mb-12 md:mb-0">
                <h3 className="px-1 text-xs md:text-md xl:text-base border border-main-yellow rounded-full font-bold text-center whitespace-nowrap">
                  {"太陽能光伏(PV)"}
                </h3>
                <div className="relative my-5 md:my-7">
                  <svg
                    className="absolute w-full h-full scale-105"
                    xmlns="http://www.w3.org/2000/svg"
                    width="310"
                    height="310"
                    fill="none"
                    viewBox="0 0 310 310"
                  >
                    <AniCircle
                      num={0}
                      inView={inView}
                      cx="155"
                      cy="155"
                      r="147"
                      stroke="#EAC852"
                      strokeWidth="16"
                    ></AniCircle>
                  </svg>
                  <img src={bgCircleImg} alt="" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                    <Ani_appear_comp
                      className="w-full h-full"
                      element={"svg"}
                      inView={inView}
                      xmlns="http://www.w3.org/2000/svg"
                      width="166"
                      height="170"
                      fill="none"
                      viewBox="0 0 166 170"
                    >
                      <g clipPath="url(#clip0_241_192)">
                        <Anipath
                          inView={inView}
                          stroke="#184B5B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M158.534 129.218H3.646a3.375 3.375 0 01-3.25-4.297l20.517-71.912a3.374 3.374 0 013.251-2.45h110.411a3.382 3.382 0 013.261 2.487l20.698 76.167v.005zM55.237 150.861l6.65-21.642H96.13l6.333 21.642M14.316 76.135H143.37M6.529 103.437H151.24M51.037 50.564l-11.27 78.654M79.67 50.564v78.654M108.656 50.564l10.559 78.654"
                        ></Anipath>
                        <Anipath
                          inView={inView}
                          fill="#fff"
                          stroke="#EAC852"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M163.439 108.118h-33.517a2.294 2.294 0 00-2.297 2.293v57.033a2.295 2.295 0 002.297 2.293h33.517a2.296 2.296 0 002.298-2.293v-57.033a2.295 2.295 0 00-2.298-2.293z"
                        ></Anipath>
                        <Anipath
                          inView={inView}
                          fill="#fff"
                          stroke="#EAC852"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M138.801 100.271h16.028c.838 0 1.513.678 1.513 1.509v6.338h-19.059v-6.338c0-.836.68-1.509 1.512-1.509h.006z"
                        ></Anipath>
                        <path
                          fill="#EAC852"
                          d="M158.649 146.533h-23.653c-.736 0-1.333.595-1.333 1.33v4.608c0 .734.597 1.33 1.333 1.33h23.653c.737 0 1.334-.596 1.334-1.33v-4.608c0-.735-.597-1.33-1.334-1.33zM158.649 157.709h-23.653c-.736 0-1.333.596-1.333 1.331v4.607c0 .735.597 1.33 1.333 1.33h23.653c.737 0 1.334-.595 1.334-1.33v-4.607c0-.735-.597-1.331-1.334-1.331z"
                        ></path>
                        <Anipath
                          inView={inView}
                          stroke="#184B5B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M148.975 118.984l-8.831 11.034h13.352l-6.676 9.43"
                        ></Anipath>
                        <path
                          fill="#EAC852"
                          d="M99.023 44.153c0-12.55-9.015-22.72-20.138-22.72-11.123 0-20.139 10.17-20.139 22.72h40.277z"
                        ></path>
                        <Anipath
                          inView={inView}
                          stroke="#EAC852"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M47.591 41.77H37.285M119.089 41.77h-10.307M49.23 11.85l6.007 6.542M79.67.263v8.778M108.656 11.85l-6.376 6.364M49.23 150.861h59.552"
                        ></Anipath>
                      </g>
                      <defs>
                        <clipPath id="clip0_241_192">
                          <path fill="#fff" d="M0 0H166V170H0z"></path>
                        </clipPath>
                      </defs>
                    </Ani_appear_comp>
                  </div>
                </div>
                <div className="flex flex-row md:flex-col xl:flex-row items-center justify-center leading-none">
                  <div className="pr-2 flex justify-end items-center text-right">
                    <img
                      className="inline-block w-1/4 md:w-2/5 md:max-w-36px"
                      src={down_icon}
                      alt=""
                    />
                    <span className="px-2% md:text-22px">降幅</span>
                  </div>
                  <div className="text-3xl md:text-5xl font-Barlow font-semibold">
                    <animated.span>{countNumbers[0]}</animated.span>
                    <span>%</span>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className="py-10px px-3% md:px-1% xl:px-2% w-1/2 md:w-1/4 mb-12 md:mb-0">
                <h3 className="px-1 text-xs md:text-md xl:text-base border border-main-yellow rounded-full font-bold text-center">
                  {"集中式太陽能熱發電(CSP)"}
                </h3>
                <div className="relative my-5 md:my-7">
                  <svg
                    className="absolute w-full h-full scale-105"
                    xmlns="http://www.w3.org/2000/svg"
                    width="310"
                    height="310"
                    fill="none"
                    viewBox="0 0 310 310"
                  >
                    <AniCircle
                      num={1}
                      inView={inView}
                      cx="155"
                      cy="155"
                      r="147"
                      stroke="#EAC852"
                      strokeWidth="16"
                    ></AniCircle>
                  </svg>
                  <img src={bgCircleImg} alt="" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                    <Ani_appear_comp
                      className="w-full h-full"
                      element={"svg"}
                      inView={inView}
                      xmlns="http://www.w3.org/2000/svg"
                      width="160"
                      height="155"
                      fill="none"
                      viewBox="0 0 160 155"
                    >
                      <g clipPath="url(#clip0_243_212)">
                        <Anipath
                          inView={inView}
                          stroke="#184B5B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M37.29 133.73H15.014a.414.414 0 01-.388-.272L.257 93.842a.413.413 0 01.389-.552h22.14c.173 0 .327.108.388.271l14.504 39.612a.41.41 0 01-.388.552v.005zM5.025 106.984h23.062M9.84 120.148H32.9M11.865 93.295l14.369 40.435"
                        ></Anipath>
                        <Anipath
                          inView={inView}
                          stroke="#184B5B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M23.183 145.5v-11.771h4.904V145.5M17.966 145.5h14.935M65.142 109.675H42.867a.414.414 0 01-.388-.272L28.115 69.792a.413.413 0 01.388-.552h22.14c.173 0 .328.107.388.271l14.505 39.611a.411.411 0 01-.389.553h-.005zM32.878 82.929h23.061M37.692 96.093h23.062M39.718 69.24l14.369 40.435"
                        ></Anipath>
                        <Anipath
                          inView={inView}
                          stroke="#184B5B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M51.031 121.445v-11.77h4.908v11.77M45.82 121.445h14.934M122.71 133.73h22.276a.414.414 0 00.388-.272l14.364-39.61a.413.413 0 00-.388-.553h-22.14a.415.415 0 00-.389.271l-14.504 39.611a.411.411 0 00.388.553h.005zM154.975 106.984h-23.062M150.161 120.148h-23.062M148.135 93.295l-14.369 40.435"
                        ></Anipath>
                        <Anipath
                          inView={inView}
                          stroke="#184B5B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M136.817 145.5v-11.771h-4.904V145.5M142.034 145.5h-14.935M94.857 109.675h22.276a.413.413 0 00.388-.272l14.364-39.611a.412.412 0 00-.388-.552h-22.14a.413.413 0 00-.388.271l-14.505 39.611a.411.411 0 00.389.553h.004zM127.122 82.929h-23.061M122.308 96.093H99.246M120.282 69.24l-14.369 40.435"
                        ></Anipath>
                        <Anipath
                          inView={inView}
                          stroke="#184B5B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M108.964 121.445v-11.77h-4.903v11.77M114.181 121.445H99.246"
                        ></Anipath>
                        <Anipath
                          inView={inView}
                          stroke="#EAC852"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M90.179 87.028H69.976v8.12h20.203v-8.12zM90.127 145.5H69.924v9.261h20.203V145.5z"
                        ></Anipath>
                        <Anipath
                          inView={inView}
                          stroke="#EAC852"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M86.777 95.148H73.373V145.5h13.404V95.148z"
                        ></Anipath>
                        <path fill="#184B5B" d="M84 97h-8v47h8V97z"></path>
                        <path
                          fill="#EAC852"
                          d="M72.376 87.028a3.051 3.051 0 016.101 0M81.682 87.028a3.051 3.051 0 016.101 0M80.19 52.626c9.307 0 16.852-7.547 16.852-16.857 0-9.31-7.545-16.857-16.853-16.857-9.307 0-16.852 7.547-16.852 16.857 0 9.31 7.545 16.857 16.852 16.857z"
                        ></path>
                        <Anipath
                          inView={inView}
                          stroke="#EAC852"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="1.5"
                          d="M80.19.234v8.84M54.087 10.694l6.311 6.187M45.244 35.769h8.843M106.292 10.694l-6.311 6.187M115.131 35.769h-8.839M80.19 71.299v-8.84M54.087 60.844l6.311-6.192M106.292 60.844l-6.311-6.192"
                        ></Anipath>
                      </g>
                      <defs>
                        <clipPath id="clip0_243_212">
                          <path fill="#fff" d="M0 0H160V155H0z"></path>
                        </clipPath>
                      </defs>
                    </Ani_appear_comp>
                  </div>
                </div>
                <div className="flex flex-row md:flex-col xl:flex-row items-center justify-center leading-none">
                  <div className="pr-2 flex justify-end items-center text-right">
                    <img
                      className="inline-block w-1/4 md:w-2/5 md:max-w-36px"
                      src={down_icon}
                      alt=""
                    />
                    <span className="px-2% md:text-22px">降幅</span>
                  </div>
                  <div className="text-3xl md:text-5xl font-Barlow font-semibold">
                    <animated.span>{countNumbers[1]}</animated.span>
                    <span>%</span>
                  </div>
                </div>
              </div>
              {/* 3 */}
              <div className="py-10px px-3% md:px-1% xl:px-2% w-1/2 md:w-1/4 mb-12 md:mb-0">
                <h3 className="px-1 text-xs md:text-md xl:text-base border border-main-yellow rounded-full font-bold text-center">
                  離岸風電
                </h3>
                <div className="relative my-5 md:my-7">
                  <svg
                    className="absolute w-full h-full scale-105"
                    xmlns="http://www.w3.org/2000/svg"
                    width="310"
                    height="310"
                    fill="none"
                    viewBox="0 0 310 310"
                  >
                    <AniCircle
                      num={2}
                      inView={inView}
                      cx="155"
                      cy="155"
                      r="147"
                      stroke="#EAC852"
                      strokeWidth="16"
                    ></AniCircle>
                  </svg>
                  <img src={bgCircleImg} alt="" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                    <Ani_appear_comp
                      className="w-full h-full"
                      element={"svg"}
                      inView={inView}
                      xmlns="http://www.w3.org/2000/svg"
                      width="167"
                      height="140"
                      fill="none"
                      viewBox="0 0 167 140"
                    >
                      <g clipPath="url(#clip0_243_252)">
                        <Anipath
                          inView={inView}
                          stroke="#EAC852"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M105.831 115.46c-.227-.835 0 24.293 0 24.293M149.428 115.945c-.227-.836 0 23.808 0 23.808M81.061 93.57a38.105 38.105 0 01-41.513.663M21.572 61.411a38.43 38.43 0 015.493-19.53 38.312 38.312 0 0114.65-13.989M98.461 61.411a38.43 38.43 0 00-5.493-19.53 38.312 38.312 0 00-14.65-13.989"
                        ></Anipath>
                        <Anipath
                          inView={inView}
                          stroke="#184B5B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M59.795 71.884c5.607 0 10.153-4.563 10.153-10.19 0-5.629-4.546-10.192-10.153-10.192-5.608 0-10.153 4.563-10.153 10.191 0 5.628 4.545 10.19 10.153 10.19z"
                        ></Anipath>
                        <Anipath
                          inView={inView}
                          stroke="#184B5B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M59.795 67.661c3.284 0 5.946-2.672 5.946-5.968s-2.662-5.968-5.946-5.968-5.946 2.672-5.946 5.968 2.662 5.968 5.946 5.968z"
                        ></Anipath>
                        <path
                          fill="#fff"
                          d="M45.82 139.362l11.394-67.814h5.172l11.395 67.814"
                        ></path>
                        <Anipath
                          inView={inView}
                          stroke="#184B5B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M45.82 139.362l11.394-67.814h5.172l11.395 67.814M65.869 1.523a1.399 1.399 0 00-1.581-1.26c-2.858.4-9.045 2.284-10.434 11.006-1.611 10.087-2.764 29.079-3.015 33.415a1.55 1.55 0 00.7 1.39l8.26 5.434 9.316-5.627c.513-.307.798-.885.744-1.479L65.87 1.523zM5.72 87.751a1.402 1.402 0 00-.247 2.012c1.833 2.24 6.65 6.557 14.794 3.21 9.419-3.877 26.173-12.772 29.99-14.82.488-.262.799-.766.818-1.325l.32-9.908-9.64-5.049a1.54 1.54 0 00-1.645.134L5.72 87.75zM107.954 97.759c.709.36 1.581.06 1.906-.673 1.183-2.64 2.897-8.895-3.714-14.73C98.5 75.612 83.111 64.502 79.594 61.98a1.54 1.54 0 00-1.547-.148L69.06 65.95l-.222 10.912a1.57 1.57 0 00.853 1.424l38.262 19.472z"
                        ></Anipath>
                        <Anipath
                          inView={inView}
                          stroke="#EAC852"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M87.49 102.609a49.787 49.787 0 01-27.764 8.47 49.773 49.773 0 01-26.434-7.604M9.833 60.625A50.201 50.201 0 0117 35.13a49.974 49.974 0 0119.124-18.26M110.2 60.625a50.207 50.207 0 00-7.167-25.494 49.978 49.978 0 00-19.124-18.26"
                        ></Anipath>
                        <Anipath
                          inView={inView}
                          stroke="#184B5B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M.246 139.753h166.508"
                        ></Anipath>
                        <Anipath
                          inView={inView}
                          stroke="#EAC852"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M98.461 119.762l29.37-17.153 27.784 17.153"
                        ></Anipath>
                        <Anipath
                          inView={inView}
                          stroke="#184B5B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M128.354 115.44l-7.163 8.96h11.237l-6.498 8.074"
                        ></Anipath>
                        <Anipath
                          inView={inView}
                          stroke="#EAC852"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M161.69 76.077c-.045 0-.089.005-.138.01-.917-4-4.173-6.967-8.06-6.967-2.749 0-5.177 1.483-6.69 3.757a10.183 10.183 0 00-4.428-.993c-5.03 0-9.109 3.515-9.109 7.856 0 4.342 3.778 7.58 8.542 7.833v.024h19.483v-.024c.133.01.266.024.404.024 2.799 0 5.065-2.58 5.065-5.76 0-3.18-2.266-5.76-5.065-5.76h-.004zM135.196 56.09c-.029 0-.059 0-.089.006-.601-2.636-2.748-4.589-5.31-4.589-1.808 0-3.409.98-4.409 2.477a6.727 6.727 0 00-2.921-.657c-3.316 0-6.005 2.319-6.005 5.177 0 2.858 2.487 4.994 5.63 5.162v.015h12.838v-.015c.089.01.177.015.266.015 1.843 0 3.335-1.701 3.335-3.798 0-2.096-1.492-3.797-3.335-3.797v.005z"
                        ></Anipath>
                      </g>
                      <defs>
                        <clipPath id="clip0_243_252">
                          <path fill="#fff" d="M0 0H167V140H0z"></path>
                        </clipPath>
                      </defs>
                    </Ani_appear_comp>
                  </div>
                </div>
                <div className="flex flex-row md:flex-col xl:flex-row items-center justify-center leading-none">
                  <div className="pr-2 flex justify-end items-center text-right">
                    <img
                      className="inline-block w-1/4 md:w-2/5 md:max-w-36px"
                      src={down_icon}
                      alt=""
                    />
                    <span className="px-2% md:text-22px">降幅</span>
                  </div>
                  <div className="text-3xl md:text-5xl font-Barlow font-semibold">
                    <animated.span>{countNumbers[2]}</animated.span>
                    <span>%</span>
                  </div>
                </div>
              </div>
              {/* 4 */}
              <div className="py-10px px-3% md:px-1% xl:px-2% w-1/2 md:w-1/4 mb-12 md:mb-0">
                <h3 className="px-1 text-xs md:text-md xl:text-base border border-main-yellow rounded-full font-bold text-center">
                  在岸風電
                </h3>
                <div className="relative my-5 md:my-7">
                  <svg
                    className="absolute w-full h-full scale-105"
                    xmlns="http://www.w3.org/2000/svg"
                    width="310"
                    height="310"
                    fill="none"
                    viewBox="0 0 310 310"
                  >
                    <AniCircle
                      num={3}
                      inView={inView}
                      cx="155"
                      cy="155"
                      r="147"
                      stroke="#EAC852"
                      strokeWidth="16"
                    ></AniCircle>
                  </svg>
                  <img src={bgCircleImg} alt="" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                    <Ani_appear_comp
                      className="w-full h-full"
                      element={"svg"}
                      inView={inView}
                      xmlns="http://www.w3.org/2000/svg"
                      width="165"
                      height="156"
                      fill="none"
                      viewBox="0 0 165 156"
                    >
                      <g clipPath="url(#clip0_244_272)">
                        <path
                          fill="#184B5B"
                          d="M30.808 15.797c-5.517 2.468-11.039-3.297-16.556-.83-.439.195-.797.057-.797-.383V4.885c0-.44.358-1.019.797-1.213 5.517-2.468 11.04 3.297 16.556.83.44-.195.797-.057.797.383v9.694c0 .44-.357 1.019-.797 1.213v.005z"
                        ></path>
                        <Anipath
                          inView={inView}
                          stroke="#EAC852"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M139.438 98.936a29.48 29.48 0 01-16.429 5.002 29.45 29.45 0 01-15.642-4.496M93.478 74.126a29.721 29.721 0 014.24-15.07 29.477 29.477 0 0111.315-10.789M152.878 74.126a29.722 29.722 0 00-4.24-15.07 29.475 29.475 0 00-11.315-10.789"
                        ></Anipath>
                        <Anipath
                          inView={inView}
                          stroke="#184B5B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M123.009 82.201c4.331 0 7.842-3.519 7.842-7.86 0-4.34-3.511-7.86-7.842-7.86-4.33 0-7.841 3.52-7.841 7.86 0 4.341 3.511 7.86 7.841 7.86z"
                        ></Anipath>
                        <Anipath
                          inView={inView}
                          stroke="#184B5B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M123.009 78.945a4.598 4.598 0 004.593-4.604 4.598 4.598 0 00-4.593-4.603 4.598 4.598 0 00-4.592 4.603 4.598 4.598 0 004.592 4.604z"
                        ></Anipath>
                        <Anipath
                          inView={inView}
                          fill="#fff"
                          stroke="#184B5B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M133.737 133.823l-8.73-51.872h-3.995l-8.73 51.872a.38.38 0 00.373.445h20.704c.235 0 .414-.21.373-.445h.005z"
                        ></Anipath>
                        <Anipath
                          inView={inView}
                          stroke="#184B5B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M127.699 27.918a1.077 1.077 0 00-1.221-.973c-2.207.312-6.983 1.761-8.061 8.49-1.241 7.783-2.135 22.433-2.33 25.777-.025.43.179.835.542 1.07l6.38 4.194 7.198-4.342c.393-.24.618-.681.577-1.142l-3.08-33.08-.005.006zM81.233 94.445a1.077 1.077 0 00-.189 1.551c1.415 1.726 5.14 5.059 11.433 2.474 7.274-2.991 20.219-9.858 23.166-11.43.378-.205.618-.589.634-1.019l.245-7.645-7.448-3.897a1.193 1.193 0 00-1.272.103L81.233 94.445zM160.214 102.172c.551.282 1.22.046 1.471-.517.914-2.038 2.237-6.862-2.871-11.363-5.905-5.202-17.793-13.774-20.515-15.72a1.193 1.193 0 00-1.196-.113l-6.942 3.18-.174 8.419a1.2 1.2 0 00.659 1.095l29.562 15.024.006-.005z"
                        ></Anipath>
                        <Anipath
                          inView={inView}
                          stroke="#EAC852"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M144.403 105.91a38.473 38.473 0 01-41.868.666M84.41 73.522a38.725 38.725 0 015.538-19.669 38.624 38.624 0 0114.773-14.086M161.95 73.522a38.721 38.721 0 00-5.537-19.669 38.623 38.623 0 00-14.774-14.086M63.19 29.121H8.22v28.865h54.97V29.121z"
                        ></Anipath>
                        <Anipath
                          inView={inView}
                          stroke="#EAC852"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M11.708 57.986v31.779l48.576-31.78v31.78l-48.576-31.78zM13.455.256V29.12"
                        ></Anipath>
                        <path
                          fill="#EAC852"
                          d="M21.113 24.83h5.777c.235 0 .42.19.42.42v3.866h-6.621V25.25c0-.236.189-.42.419-.42h.005zM31.544 24.83h5.778c.235 0 .418.19.418.42v3.866h-6.62V25.25c0-.236.19-.42.419-.42h.005z"
                        ></path>
                        <Anipath
                          inView={inView}
                          stroke="#184B5B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M.255 145.503c11.75 0 11.75 10.241 23.499 10.241 11.75 0 11.75-10.241 23.498-10.241 11.75 0 11.75 10.241 23.499 10.241 11.749 0 11.749-10.241 23.498-10.241s11.749 10.241 23.499 10.241c11.749 0 11.749-10.241 23.498-10.241s11.749 10.241 23.499 10.241M8.22 123.94c3.58 0 3.58 4.096 7.161 4.096 3.581 0 3.581-4.096 7.167-4.096s3.581 4.096 7.162 4.096 3.586-4.096 7.167-4.096 3.586 4.096 7.167 4.096M38.41 101.896c3.58 0 3.58 4.096 7.162 4.096 3.58 0 3.58-4.096 7.167-4.096 3.586 0 3.58 4.096 7.162 4.096 3.58 0 3.586-4.096 7.167-4.096 3.58 0 3.586 4.096 7.167 4.096"
                        ></Anipath>
                      </g>
                      <defs>
                        <clipPath id="clip0_244_272">
                          <path fill="#fff" d="M0 0H165V156H0z"></path>
                        </clipPath>
                      </defs>
                    </Ani_appear_comp>
                  </div>
                </div>
                <div className="flex flex-row md:flex-col xl:flex-row items-center justify-center leading-none">
                  <div className="pr-2 flex justify-end items-center text-right">
                    <img
                      className="inline-block w-1/4 md:w-2/5 md:max-w-36px"
                      src={down_icon}
                      alt=""
                    />
                    <span className="px-2% md:text-22px">降幅</span>
                  </div>
                  <div className="text-3xl md:text-5xl font-Barlow font-semibold">
                    <animated.span>{countNumbers[3]}</animated.span>
                    <span>%</span>
                  </div>
                </div>
              </div>
            </div>
            {/* ps */}
            <div className="mx-auto w-[96%] my-auto xl:my-0 text-md xl:text-lg pt-6 pb-4 font-medium text-left md:text-center text-font-gray">
              資料來源：Renewables 2021 Global Status
              Report，伊莉莎白投信整理，2021/11。
            </div>
          </Ani_appear_comp>
        </div>
      </div>
    </>
  );
};

export default Unstopp_p3;
