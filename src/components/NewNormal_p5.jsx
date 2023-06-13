import React, { useEffect } from "react";

import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "@react-spring/web";
import Ani_line_style from "./Ani_line_style";
import Ani_appear_comp from "./Ani_appear_comp";
import { Element } from "react-scroll";

import dumpUpImg from "../img/p5/dumpUp.png";
import etfImg from "../img/00696.svg";
import ellipseImg from "../img/Ellipse.svg";
import downArrowImg from "../img/down arrow.svg";
const NewNormal_p5 = () => {
  const [inViewref, inView] = useInView({ threshold: 0.3 });
  const thumdUpRotateStyle = useSpring({
    from: {
      rotate: "-10deg",
    },
    to: {
      rotate: "10deg",
    },
    loop: {
      reverse: true,
    },
    reset: inView ? true : false,
  });
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
    reset: inView ? true : false,
  });

  return (
    <>
      <div className="relative w-full">
        <img
          className="absolute origin-left scale-50 md:scale-75 xl:scale-90 -translate-y-1/2 left-10% z-10"
          src={etfImg}
          alt=""
        />
        <animated.img
          style={downArrowAniStyle}
          className="absolute scale-50 md:scale-75 xl:scale-90 right-5% z-10"
          src={downArrowImg}
          alt=""
        />
      </div>

      <div
        ref={inViewref}
        className=" relative px-5% py-[130px] text-main-darkgreen"
      >
        <img
          className="absolute origin-left scale-50 -left-10 top-0 z-10"
          src={ellipseImg}
          alt=""
        />
        <Element name="page3" className="element" />
        {/* content */}
        <Ani_appear_comp
          element={"div"}
          inView={inView}
          className="max-w-7xl w-96% px-2% mx-auto"
        >
          <div className="relative py-16 w-full flex flex-col md:flex-row md:items-center">
            <h1 className=" pr-7 shrink-0 mx-[1%] text-30px md:text-[50px] xl:text-[64px]">
              <span className="block md:inline">潔淨能源</span>將成為『新常態』
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

          {/* table */}
          <div className=" text-md md:text-lg xl:text-xl">
            {/* table head */}
            <div className="flex font-bold border-y-2 border-main-darkgreen">
              <div className="w-28% px-1em py-2">項目</div>
              <div className="w-28% px-1em py-2">過去推廣</div>
              <div className="w-28% px-1em py-2">未來計畫</div>
              <div className="w-3/20"></div>
            </div>
            {/* table body */}
            <div className="flex flex-col">
              {/* col 0 */}
              <div className="flex items-center border-b border-b-main-yellow bg-bg-gray">
                <div className="w-28% px-1em py-6">能源轉型目標</div>
                <div className="w-28% px-1em py-6">減少碳排放</div>
                <div className="w-28% px-1em py-6">
                  2050年達到
                  <p className=" md:text-22px xl:text-26px font-bold">
                    100%綠能經濟
                  </p>
                </div>
                <div className="w-3/20 py-6 flex justify-center">
                  <animated.img
                    style={thumdUpRotateStyle}
                    className="w-1/2 max-w-[42px]"
                    src={dumpUpImg}
                    alt=""
                  />
                </div>
              </div>
              {/* col 1 */}
              <div className="flex items-center border-b border-b-main-yellow ">
                <div className="w-28% px-1em py-6">
                  行動範圍<p>{"(緣起)"}</p>
                </div>
                <div className="w-28% px-1em py-6">
                  以開發國家為主<p>{"(京都議定書)"}</p>
                </div>
                <div className="w-28% px-1em py-6">
                  擴及
                  <span className=" md:text-22px xl:text-26px font-bold">
                    全球逾190國
                  </span>
                  <p>{"(巴黎協定)"}</p>
                </div>
                <div className="w-3/20 py-6 flex justify-center">
                  <animated.img
                    style={thumdUpRotateStyle}
                    className="w-1/2 max-w-[42px]"
                    src={dumpUpImg}
                    alt=""
                  />
                </div>
              </div>
              {/* col 2 */}
              <div className="flex items-center border-b border-b-main-yellow bg-bg-gray">
                <div className="w-28% px-1em py-6">潔淨能源成本</div>
                <div className="w-28% px-1em py-6">高於石化燃料</div>
                <div className="w-28% px-1em py-6">
                  <p className=" md:text-22px xl:text-26px font-bold">
                    估計成本將
                    <br />
                    低於石化燃料
                  </p>
                </div>
                <div className="w-3/20 py-6 flex justify-center">
                  <animated.img
                    style={thumdUpRotateStyle}
                    className="w-1/2 max-w-[42px]"
                    src={dumpUpImg}
                    alt=""
                  />
                </div>
              </div>
              {/* col 3 */}
              <div className="flex items-center border-b border-b-main-yellow ">
                <div className="w-28% px-1em py-6">
                  潔淨能源
                  <br />
                  {"投資金額(美元)"}
                </div>
                <div className="w-28% px-1em py-6">
                  2017-2019年
                  <br />
                  平均0.8兆
                </div>
                <div className="w-28% px-1em py-6">
                  為達100%綠能經濟，估計2021-2050年
                  <p className=" md:text-22px xl:text-26px font-bold">
                    年平均3.8兆
                  </p>
                </div>
                <div className="w-3/20 py-6 flex justify-center">
                  <animated.img
                    style={thumdUpRotateStyle}
                    className="w-1/2 max-w-[42px]"
                    src={dumpUpImg}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto w-[96%] my-auto xl:my-0 text-md xl:text-lg pt-6 pb-4 font-medium text-left md:text-center text-font-gray">
            資料來源：IRENA, World Energy Transition Outlook
            (2021/6/30)，富蘭克林華美投信整理，2021/11。
          </div>
        </Ani_appear_comp>
      </div>
    </>
  );
};

export default NewNormal_p5;
