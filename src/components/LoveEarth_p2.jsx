import React, { useEffect } from "react";

import { useInView } from "react-intersection-observer";
import Ani_line_style from "./Ani_line_style";
import Ani_appear_comp from "./Ani_appear_comp";
import { animated } from "@react-spring/web";
import { countNumber } from "./Ani_count_number";

import circleLineImg from "../img/p2/circle.svg";
import etfImg from "../img/00696.svg";
import ellipseImg from "../img/Ellipse.svg";

const LoveEarth_p2 = () => {
  const [inViewref, inView] = useInView({ threshold: 0.3 });

  const countNumArr = [
    { startNum: 7000, finalNum: 8210 },
    { startNum: 0, finalNum: 145 },
    { startNum: 0, finalNum: 65 },
    { startNum: 0, finalNum: 22 },
  ];

  const countNumbers = countNumber(countNumArr, inView);

  return (
    <>
      <div className="relative w-full">
        <img
          className="absolute origin-right scale-50 md:scale-75 xl:scale-90 -translate-y-1/2 right-10% z-10"
          src={etfImg}
          alt=""
        />
      </div>
      <div
        ref={inViewref}
        className=" relative px-5% py-16 md:py-[180px] text-main-darkgreen bg-bg-gray overflow-hidden"
      >
        <img
          className="absolute origin-right scale-50 -right-10 top-0 z-10"
          src={ellipseImg}
          alt=""
        />
        {/* content */}
        <Ani_appear_comp
          element={"div"}
          inView={inView}
          className="max-w-7xl w-96% px-2% mx-auto z-30"
        >
          <div className="mx-[1%] pb-[60px] leading-tight">
            <div className="relative w-full flex flex-col md:flex-row md:items-center">
              <h1 className="shrink-0 pr-0.5em text-3xl lg:text-62px font-medium text-left text-main-darkgreen">
                <span className="">全球衝刺潔淨能源</span>
                <br />
                <span className="">參與愛地球行動</span>
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

            <p className="md:text-xl lg:text-lg mt-0.5em">
              世界各國政府大力推動潔淨能源，項目包含風力、太陽能、生物燃料、地熱能、海洋能、水力發電等，世界各地潔淨能源計畫擴大至8210億美元(含EU
              green support)。
            </p>
          </div>
          <div className=" px-2% py-5 md:py-14 rounded-2xl bg-white">
            <div className="flex flex-col md:flex-row">
              {/* 圈圈 */}
              {/* bg-p2-circle bg-no-repeat bg-center bg-contain */}
              <div
                className={`relative py-120px xl:pt-[170px] w-full md:w-1/2 xl:w-2/5 `}
              >
                <img
                  className="absolute w-full h-full top-0 "
                  src={circleLineImg}
                  alt=""
                />
                <div className="text-font-black font-bold leading-none text-center">
                  <p className="text-lg md:text-22px xl:text-xl">
                    潔淨能源政策資金達
                  </p>
                  <p className="flex justify-center items-center">
                    <animated.span className="text-92px md:text-100px text-main-darkgreen  font-Barlow">
                      {countNumbers[0]}
                    </animated.span>
                    <span className=" text-22px md:text-28px xl:text-24px">
                      億
                    </span>
                  </p>
                  <p className="w-1/2 pt-1 text-22px md:text-xl xl:text-22px text-right translate-x-[calc(65px+15%)] md:translate-x-[calc(100px+8%)]">
                    美元
                  </p>
                </div>
              </div>
              {/* 那三個 */}
              <div className="px-2% w-full mt-12 md:w-1/2 xl:w-3/5 leading-none">
                {/* 1 */}
                <div className="relative mb-5 px-2% w-full md:mb-12 md:px-0 flex items-center">
                  <animated.p className="w-2/5 md:w-10/20 lg:7/20 text-66px md:text-70px xl:text-96px font-medium text-center text-main-darkgreen font-Barlow z-20">
                    {countNumbers[1]}
                  </animated.p>
                  <p className="w-11/20 md:w-10/20 xl:w-13/20 px-1em xl:text-22px text-left leading-normal shrink-0 z-20">
                    <span className="block xl:inline">
                      <span className="font-medium text-font-black">
                        國制定
                      </span>
                      <span className="font-bold text-main-yellow-dark">
                        潔淨能源
                      </span>
                    </span>

                    <span className="font-bold text-main-yellow-dark">
                      發電獎勵
                    </span>
                    <span className="font-medium text-font-black">政策</span>
                  </p>
                  <Ani_line_style
                    inView={inView}
                    element={"div"}
                    delay={300}
                    className="absolute h-2px w-full my-4  right-0 bottom-[15%] md:bottom-[15%] origin-left top-9 xl:top-10"
                  >
                    <span className="absolute h-full w-1/10 xl:w-[5%] right-0 bg-main-yellow "></span>
                    <span className="absolute h-full w-17/20 xl:w-[93%] left-0 bg-main-yellow "></span>
                  </Ani_line_style>
                </div>
                {/* 2 */}
                <div className="relative mb-5 px-2% w-full md:mb-12 md:px-0 flex items-center">
                  <animated.p className="w-2/5 md:w-10/20 lg:7/20 text-66px md:text-70px xl:text-96px font-medium text-center text-main-darkgreen font-Barlow z-20">
                    {countNumbers[2]}
                  </animated.p>
                  <p className="w-11/20 md:w-10/20 xl:w-13/20 px-1em xl:text-22px text-left leading-normal shrink-0 z-20">
                    <span className="block xl:inline">
                      <span className="font-medium text-font-black">
                        國制定
                      </span>
                      <span className="font-bold text-main-yellow-dark">
                        潔淨能源
                      </span>
                    </span>

                    <span className="font-bold text-main-yellow-dark">
                      運輸
                    </span>
                    <span className="font-medium text-font-black">政策</span>
                  </p>
                  <Ani_line_style
                    inView={inView}
                    element={"div"}
                    delay={400}
                    className="absolute h-2px w-full my-4  right-0 bottom-[15%] md:bottom-[15%] origin-left top-9 xl:top-10"
                  >
                    <span className="absolute h-full w-1/10 xl:w-[5%] right-0 bg-main-yellow "></span>
                    <span className="absolute h-full w-17/20 xl:w-[93%] left-0 bg-main-yellow "></span>
                  </Ani_line_style>
                </div>
                {/* 3 */}
                <div className="relative mb-5 px-2% w-full md:mb-12 md:px-0 flex items-center">
                  <animated.p className="w-2/5 md:w-10/20 lg:7/20 text-66px md:text-70px xl:text-96px font-medium text-center text-main-darkgreen font-Barlow z-20">
                    {countNumbers[3]}
                  </animated.p>
                  <p className="w-11/20 md:w-10/20 xl:w-13/20 px-1em xl:text-22px text-left leading-normal shrink-0 z-20">
                    <span className="block xl:inline">
                      <span className="font-medium text-font-black">
                        國制定
                      </span>
                      <span className="font-bold text-main-yellow-dark">
                        潔淨能源
                      </span>
                    </span>

                    <span className="font-bold text-main-yellow-dark">
                      供熱及製冷
                    </span>
                    <span className="font-medium text-font-black">政策</span>
                  </p>
                  <Ani_line_style
                    inView={inView}
                    element={"div"}
                    delay={500}
                    className="absolute h-2px w-full my-4  right-0 bottom-[15%] md:bottom-[15%] origin-left top-9 xl:top-10"
                  >
                    <span className="absolute h-full w-1/10 xl:w-[5%] right-0 bg-main-yellow "></span>
                    <span className="absolute h-full w-17/20 xl:w-[93%] left-0 bg-main-yellow "></span>
                  </Ani_line_style>
                </div>
              </div>
            </div>

            <p className="mx-auto w-[96%] my-auto xl:my-0 text-md xl:text-lg pt-6 pb-4 font-medium text-left md:text-center text-font-gray">
              資料來源：Renewables 2021 Global Status
              Report，伊莉莎白投信整理，2021/11。
            </p>
          </div>
        </Ani_appear_comp>
      </div>
    </>
  );
};

export default LoveEarth_p2;
