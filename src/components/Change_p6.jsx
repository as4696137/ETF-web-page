import React from "react";
import checkImg from "../img/p6/check.png";

import { useInView } from "react-intersection-observer";
import { animated, useSpring, easings } from "@react-spring/web";
import Ani_line_style from "./Ani_line_style";
import Ani_appear_comp from "./Ani_appear_comp";
import Anipath from "./Anipath";
import { Element } from "react-scroll";

import ThreeArrowImg from "../img/threeArrow.png";

const Change_p6 = () => {
  const [inViewref, inView] = useInView({ threshold: 0.3 });
  const ThreeArrowStyle = useSpring({
    from: {
      scale: 0.5,
      translateY: "-100px",
    },
    to: {
      scale: 0.5,
      translateY: "-80px",
    },

    loop: {
      reverse: true,
    },
    config: {
      duration: 500,
      easing: easings.easeInOutSine,
    },
  });

  return (
    <>
      <Element name="page2" className="element" />
      <div
        ref={inViewref}
        className="relative py-12 md:py-120px font-bold text-white bg-main-darkgreen"
      >
        <animated.img
          style={ThreeArrowStyle}
          className="absolute top-0 left-5% z-10"
          src={ThreeArrowImg}
          alt=""
        />
        {/* content */}
        <div className="max-w-7xl w-96% px-2% mx-auto">
          <div className="relative mb-12 w-full px-8% flex items-center">
            <Ani_appear_comp
              element={"div"}
              inView={inView}
              className="py-9% md:py-16 pr-1% mx-[1%] shrink-0 text-30px md:text-[38px] "
            >
              <span className="block md:inline">立即參與 </span>改變世界
            </Ani_appear_comp>
            <Ani_line_style
              inView={inView}
              element={"div"}
              className="relative h-2px w-1/3 my-4  right-0 bottom-[15%] md:bottom-[15%] origin-left"
            >
              <span className="absolute h-full w-1/10 left-0 bg-white "></span>
              <span className="absolute h-full w-17/20 right-0 bg-white "></span>
            </Ani_line_style>

            {/* ani path */}
            <svg
              className="absolute origin-top-left top-10% md:top-0 left-[2%] md:left-5 scale-75 md:scale-100 "
              width={325}
              height={122}
              viewBox="0 0 325 122"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <Anipath
                inView={inView}
                d="M325 2H37L2 38V122"
                stroke="#EAC852"
                strokeWidth={3}
              />
            </svg>

            {/* 00696 */}
            <svg
              className="absolute hidden md:block origin-top-left scale-50 xl:scale-75 top-3/4 left-0 xl:-left-3"
              width={89}
              height={353}
              viewBox="0 0 89 353"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <Ani_appear_comp
                element={"path"}
                inView={inView}
                delay={0}
                d="M0 28.4561C0 19.7196 2.4344 12.772 7.3032 7.61325C12.2545 2.53775 18.8975 0 27.2323 0H62.1391C70.3913 0 76.9105 2.53775 81.6968 7.61325C86.5656 12.772 89 19.7196 89 28.4561C89 37.1926 86.5656 44.1402 81.6968 49.2989C76.9105 54.5408 70.3913 57.1618 62.1391 57.1618H27.2323C18.8975 57.1618 12.2545 54.5408 7.3032 49.2989C2.4344 44.1402 0 37.1926 0 28.4561ZM12.5021 28.4561C12.5021 32.7827 13.7399 36.2357 16.2156 38.8151C18.7738 41.3944 22.1984 42.6841 26.4896 42.6841H62.6342C66.9254 42.6841 70.3088 41.3944 72.7844 38.8151C75.3426 36.2357 76.6217 32.7827 76.6217 28.4561C76.6217 24.2126 75.3426 20.8012 72.7844 18.2219C70.3088 15.7257 66.9254 14.4777 62.6342 14.4777H26.4896C22.1984 14.4777 18.7738 15.7257 16.2156 18.2219C13.7399 20.8012 12.5021 24.2126 12.5021 28.4561Z"
                fill="white"
                fillOpacity="0.3"
              />
              <Ani_appear_comp
                element={"path"}
                inView={inView}
                delay={200}
                d="M0 105.632C0 96.8953 2.4344 89.9477 7.3032 84.789C12.2545 79.7135 18.8975 77.1758 27.2323 77.1758H62.1391C70.3913 77.1758 76.9105 79.7135 81.6968 84.789C86.5656 89.9477 89 96.8953 89 105.632C89 114.368 86.5656 121.316 81.6968 126.475C76.9105 131.717 70.3913 134.338 62.1391 134.338H27.2323C18.8975 134.338 12.2545 131.717 7.3032 126.475C2.4344 121.316 0 114.368 0 105.632ZM12.5021 105.632C12.5021 109.959 13.7399 113.412 16.2156 115.991C18.7738 118.57 22.1984 119.86 26.4896 119.86H62.6342C66.9254 119.86 70.3088 118.57 72.7844 115.991C75.3426 113.412 76.6217 109.959 76.6217 105.632C76.6217 101.388 75.3426 97.977 72.7844 95.3977C70.3088 92.9015 66.9254 91.6534 62.6342 91.6534H26.4896C22.1984 91.6534 18.7738 92.9015 16.2156 95.3977C13.7399 97.977 12.5021 101.388 12.5021 105.632Z"
                fill="white"
                fillOpacity="0.3"
              />
              <Ani_appear_comp
                element={"path"}
                inView={inView}
                delay={400}
                d="M44.0668 205.273C39.8581 207.519 34.7418 208.643 28.7177 208.643C23.6838 208.643 19.2689 207.811 15.4729 206.147C10.6866 204.15 6.97311 200.988 4.33241 196.661C1.77422 192.418 0.495132 187.301 0.495132 181.31C0.495132 175.07 1.89801 169.744 4.70376 165.335C7.59203 160.925 11.5943 157.763 16.7107 155.849C20.1766 154.518 24.2202 153.852 28.8414 153.852H66.5953C71.0515 153.852 74.9713 154.976 78.3547 157.222C81.7381 159.469 84.3375 162.589 86.153 166.583C88.051 170.66 89 175.319 89 180.561C89 185.637 88.0923 190.13 86.2768 194.04C84.4613 198.034 81.9031 201.113 78.6022 203.276C75.3014 205.523 71.5053 206.646 67.2142 206.646H64.491C64.0784 206.646 63.707 206.479 63.3769 206.147C63.1294 205.897 63.0056 205.564 63.0056 205.148V193.666C63.0056 193.25 63.1294 192.875 63.3769 192.543C63.707 192.293 64.0784 192.168 64.491 192.168H65.3574C68.6583 192.168 71.3403 191.045 73.4033 188.798C75.5489 186.635 76.6217 183.848 76.6217 180.436C76.6217 176.942 75.5077 174.03 73.2796 171.7C71.134 169.453 68.3282 168.33 64.8623 168.33H51.37C51.1224 168.33 50.9573 168.413 50.8748 168.58C50.7923 168.746 50.8336 168.912 50.9986 169.079C54.382 172.573 56.0737 177.399 56.0737 183.556C56.0737 188.466 55.0422 192.751 52.9791 196.412C50.9161 200.156 47.9453 203.11 44.0668 205.273ZM19.6815 192.293C22.1572 193.541 25.0867 194.165 28.4701 194.165C32.1836 194.165 35.3607 193.458 38.0014 192.043C41.9625 189.714 43.943 186.094 43.943 181.185C43.943 176.026 41.8799 172.365 37.7538 170.202C35.2782 168.954 32.0598 168.33 28.0987 168.33C24.7153 168.33 21.9509 168.871 19.8053 169.952C15.2666 171.949 12.9972 175.694 12.9972 181.185C12.9972 186.427 15.2253 190.13 19.6815 192.293Z"
                fill="white"
                fillOpacity="0.3"
              />
              <Ani_appear_comp
                element={"path"}
                inView={inView}
                delay={600}
                d="M72.6606 277.324C69.1947 278.655 65.1511 279.321 60.5299 279.321H22.7761C18.3199 279.321 14.4001 278.197 11.0167 275.951C7.63329 273.704 4.99258 270.543 3.09458 266.466C1.27909 262.472 0.371349 257.854 0.371349 252.612C0.371349 247.536 1.27909 243.002 3.09458 239.008C4.91006 235.097 7.46824 232.019 10.7691 229.772C14.07 227.609 17.866 226.527 22.1572 226.527H24.8804C25.293 226.527 25.6231 226.652 25.8707 226.902C26.2007 227.234 26.3658 227.609 26.3658 228.025V239.507C26.3658 239.923 26.2007 240.256 25.8707 240.506C25.6231 240.838 25.293 241.005 24.8804 241.005H24.0139C20.713 241.005 17.9898 242.087 15.8442 244.25C13.7812 246.413 12.7497 249.201 12.7497 252.612C12.7497 256.19 13.8224 259.102 15.968 261.348C18.1961 263.678 21.0431 264.843 24.509 264.843H38.1252C38.3727 264.843 38.5378 264.76 38.6203 264.593C38.7028 264.427 38.6616 264.261 38.4965 264.094C35.0306 260.516 33.2976 255.649 33.2976 249.492C33.2976 244.583 34.3292 240.256 36.3922 236.512C38.4553 232.851 41.4261 229.98 45.3046 227.9C49.4307 225.57 54.5471 224.406 60.6537 224.406C65.6875 224.406 70.1025 225.238 73.8985 226.902C78.6022 228.899 82.2745 232.06 84.9152 236.387C87.5559 240.714 88.8762 245.831 88.8762 251.738C88.8762 257.979 87.4321 263.304 84.5438 267.714C81.7381 272.207 77.777 275.41 72.6606 277.324ZM51.6175 262.846C54.2582 264.177 57.4766 264.843 61.2726 264.843C64.4084 264.843 67.1729 264.302 69.5661 263.221C74.1048 261.224 76.3741 257.479 76.3741 251.988C76.3741 246.663 74.146 242.919 69.6899 240.755C66.9666 239.507 64.0371 238.883 60.9013 238.883C57.1878 238.883 54.0107 239.632 51.37 241.13C47.4089 243.459 45.4284 247.037 45.4284 251.863C45.4284 257.022 47.4914 260.683 51.6175 262.846Z"
                fill="white"
                fillOpacity="0.3"
              />
              <Ani_appear_comp
                element={"path"}
                inView={inView}
                delay={800}
                d="M44.0668 349.63C39.8581 351.877 34.7418 353 28.7177 353C23.6838 353 19.2689 352.168 15.4729 350.504C10.6866 348.507 6.97311 345.345 4.33241 341.018C1.77422 336.775 0.495132 331.658 0.495132 325.667C0.495132 319.427 1.89801 314.102 4.70376 309.692C7.59203 305.282 11.5943 302.12 16.7107 300.206C20.1766 298.875 24.2202 298.21 28.8414 298.21H66.5953C71.0515 298.21 74.9713 299.333 78.3547 301.579C81.7381 303.826 84.3375 306.946 86.153 310.94C88.051 315.017 89 319.676 89 324.918C89 329.994 88.0923 334.487 86.2768 338.398C84.4613 342.391 81.9031 345.47 78.6022 347.633C75.3014 349.88 71.5053 351.003 67.2142 351.003H64.491C64.0784 351.003 63.707 350.837 63.3769 350.504C63.1294 350.254 63.0056 349.921 63.0056 349.505V338.023C63.0056 337.607 63.1294 337.233 63.3769 336.9C63.707 336.65 64.0784 336.525 64.491 336.525H65.3574C68.6583 336.525 71.3403 335.402 73.4033 333.156C75.5489 330.992 76.6217 328.205 76.6217 324.794C76.6217 321.299 75.5077 318.387 73.2796 316.057C71.134 313.81 68.3282 312.687 64.8623 312.687H51.37C51.1224 312.687 50.9573 312.77 50.8748 312.937C50.7923 313.103 50.8336 313.27 50.9986 313.436C54.382 316.931 56.0737 321.757 56.0737 327.914C56.0737 332.823 55.0422 337.108 52.9791 340.769C50.9161 344.513 47.9453 347.467 44.0668 349.63ZM19.6815 336.65C22.1572 337.898 25.0867 338.522 28.4701 338.522C32.1836 338.522 35.3607 337.815 38.0014 336.401C41.9625 334.071 43.943 330.451 43.943 325.542C43.943 320.384 41.8799 316.723 37.7538 314.559C35.2782 313.311 32.0598 312.687 28.0987 312.687C24.7153 312.687 21.9509 313.228 19.8053 314.31C15.2666 316.307 12.9972 320.051 12.9972 325.542C12.9972 330.784 15.2253 334.487 19.6815 336.65Z"
                fill="white"
                fillOpacity="0.3"
              />
            </svg>

            {/* ani lines */}
            <div className="absolute h-2px w-2/5 right-1/4 bottom-0 ">
              <Ani_line_style
                inView={inView}
                element={"span"}
                className="absolute h-full w-full bg-main-yellow origin-left"
              ></Ani_line_style>
            </div>
            <Ani_line_style
              inView={inView}
              element={"div"}
              className="absolute h-2px w-2/5 right-0 bottom-[8%] origin-left"
            >
              <span className="absolute h-full w-1/10 right-0 bg-main-yellow origin-left"></span>
              <span className="absolute h-full w-17/20 left-0 bg-main-yellow origin-left"></span>
            </Ani_line_style>
          </div>

          <div className="text-center flex">
            {/* box 0 */}
            <Ani_appear_comp
              element={"div"}
              inView={inView}
              delay={500}
              className="w-1/3 py-10 px-1% md:py-11 md:px-2.5 flex flex-col items-center"
            >
              <img className="max-w-55px" src={checkImg} alt="" />
              <h3 className="py-10px text-lg md:text-3xl">產品好創新</h3>
              <p className="text-md xl:text-base font-medium">
                首檔佈局全球
                <br />
                新能源ETF
              </p>
            </Ani_appear_comp>
            {/* box 1 */}
            <Ani_appear_comp
              element={"div"}
              inView={inView}
              delay={500}
              className="w-1/3 py-10 px-1% md:py-11 md:px-2.5 flex flex-col items-center"
            >
              <img className="max-w-55px" src={checkImg} alt="" />
              <h3 className="py-10px text-lg md:text-3xl">投資不嫌小</h3>
              <p className="text-md xl:text-base font-medium">
                小資金也可以
                <br />
                參與潔淨能源大趨勢
              </p>
            </Ani_appear_comp>
            {/* box 2 */}
            <Ani_appear_comp
              element={"div"}
              inView={inView}
              delay={500}
              className="w-1/3 py-10 px-1% md:py-11 md:px-2.5 flex flex-col items-center"
            >
              <img className="max-w-55px" src={checkImg} alt="" />
              <h3 className="py-10px text-lg md:text-3xl">投資愛地球</h3>
              <p className="text-md xl:text-base font-medium">
                投資也可以
                <br />
                環保
              </p>
            </Ani_appear_comp>
          </div>
          <div className="pt-[2em] md:pt-[3em] text-center">
            <h4 className="text-base md:text-xl">【ETF掛牌上市後】</h4>
            <p className="text-md md::text-base">
              ETF掛牌上市後，主要透過證券商進行交易，就如同買賣股票一般，請洽詢各證券商營業員；或透過證券商進行電子交易。
            </p>
          </div>
        </div>
        <animated.img
          style={ThreeArrowStyle}
          className="absolute -bottom-28 right-5% z-10"
          src={ThreeArrowImg}
          alt=""
        />
      </div>
    </>
  );
};

export default Change_p6;
