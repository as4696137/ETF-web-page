import React from "react";
import chatboxImg from "../img/p1/chatbox.svg";

import { useInView } from "react-intersection-observer";
import Anipath from "./Anipath";
import Ani_appear_comp from "./Ani_appear_comp";
import Ani_line_style from "./Ani_line_style";
import { Element } from "react-scroll";
const ThreePoint_p1 = () => {
  const [inViewref, inView] = useInView({ threshold: 0.3 });

  // useEffect(() => {
  //   console.log(`inView:${inView}`);
  // }, [inView]);

  return (
    <>
      <Element name="page1" className="element" />
      <div className="relative px-5% py-12 md:py-24 xl:py-32 mb-14 text-main-darkgreen leading-none">
        {/* content */}
        <div ref={inViewref} className="max-w-7xl w-96% px-2% mx-auto">
          <div className="relative ">
            <svg
              className="absolute max-w-1/2 max-h-1/3 -left-[7%] scale-90 -translate-y-2"
              width={325}
              height={122}
              viewBox="0 0 325 122"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <Anipath
                inView={inView}
                d="M325 2H2V122"
                stroke="#EAC852"
                strokeWidth={3}
              />
            </svg>

            <div className="py-8% pl-3% pr-8% md:py-[4%] md:px-0 mb-5 md:mb-16">
              <Ani_appear_comp
                element={"p"}
                inView={inView}
                delay={250}
                className="text-lg font-bold md:text-3xl"
              >
                迎接能源新時代
              </Ani_appear_comp>
              <Ani_appear_comp
                element={"h1"}
                inView={inView}
                delay={250}
                className=" pt-3  md:py-0 text-right text-42px font-black md:text-left md:leading-10"
              >
                <span className="block text-32px md:text-42px md:font-black md:inline">
                  佈局潔淨能源
                </span>
                <span className="text-56px md:text-120px text-main-yellow font-Barlow font-bold">
                  3
                </span>
                <span>大關鍵</span>
              </Ani_appear_comp>
            </div>

            {/* ani lines */}
            <div className="absolute h-2px w-1/2 right-1/4 bottom-0 ">
              <Ani_line_style
                inView={inView}
                element={"span"}
                className="absolute h-full w-full bg-main-yellow origin-left"
              ></Ani_line_style>
            </div>
            <Ani_line_style
              inView={inView}
              element={"div"}
              className="absolute h-2px w-1/2 right-0 bottom-[5%] origin-left"
            >
              <span className="absolute h-full w-1/10 right-0 bg-main-yellow origin-left"></span>
              <span className="absolute h-full w-17/20 left-0 bg-main-yellow origin-left"></span>
            </Ani_line_style>
          </div>

          <div className=" flex flex-col md:flex-row md:justify-around ">
            {/* 1 */}
            <div className="relative md:w-31% my-5 pt-70px md:pt-100px md:pr-2% flex flex-row md:flex-col">
              <Ani_appear_comp
                element={"div"}
                inView={inView}
                delay={250}
                className="absolute -top-2 md:top-0"
              >
                <img
                  className="relative scale-75 md:scale-100"
                  src={chatboxImg}
                  alt=""
                />
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full md:-translate-y-5 text-lg text-white drop-shadow-text ">
                  投資也可以
                </p>
              </Ani_appear_comp>
              <div className=" w-[43%] md:w-full flex flex-col justify-center items-center">
                {/* <img
                className="max-h-170px max-w-170px w-full flex-initial"
                src={rectSvg}
                alt="svg"
              /> */}
                <Ani_appear_comp
                  element={"svg"}
                  inView={inView}
                  delay={250}
                  className="max-h-170px max-w-170px w-full flex-initial"
                  xmlns="http://www.w3.org/2000/svg"
                  width="250"
                  height="250"
                  fill="none"
                  viewBox="0 0 250 250"
                >
                  <g clipPath="url(#clip0_166_238)">
                    <Anipath
                      inView={inView}
                      delay={400}
                      stroke="#184B5B"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="6"
                      d="M124.997 212.259c38.808 0 70.268-31.527 70.268-70.418 0-38.891-31.46-70.419-70.268-70.419-38.807 0-70.267 31.528-70.267 70.419s31.46 70.418 70.267 70.418z"
                    ></Anipath>
                    <Anipath
                      inView={inView}
                      delay={400}
                      stroke="#184B5B"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="6"
                      d="M70.203 99.55c5.918 2.384 7.381 5.326 10.1 11.108 7.099 15.093-1.534 33.681 4.075 49.389M110.209 74.623c1.072 13.72 3.477 23.662 7.799 36.726.85 2.571 2.076 5.441 4.646 6.272 2.374.764 4.857-.547 7.046-1.74 5.321-2.895 11.868-5.311 17.245-2.519 3.194 1.657 5.254 4.827 7.613 7.542 7.242 8.347 18.476 13.044 29.488 12.337M103.678 207.711c13.552-6.56 20.598-17.416 24.487-31.988 1.149-4.31 1.942-9.1 5.28-12.053 3.786-3.35 9.678-3.076 14.304-1.048 4.625 2.029 8.447 5.498 12.665 8.285 7.969 5.26 14.098 7.991 23.638 7.898"
                    ></Anipath>
                    <Anipath
                      inView={inView}
                      fill="#184B5B"
                      d="M145.771 39.176h.304c.041 3.484-.479 9.013-3.673 12.745-2.421 2.823-6.032 4.201-11.048 4.201-.675 0-1.381-.025-2.107-.077-.376-5.24.608-9.27 2.936-12.007 3.611-4.232 10.065-4.862 13.588-4.862zm0-4.176c-7.876 0-23.761 2.674-20.279 24.808 2.127.336 4.079.49 5.862.49 22.612 0 18.62-25.03 18.62-25.03S148.279 35 145.771 35z"
                    ></Anipath>
                    <Anipath
                      inView={inView}
                      delay={400}
                      stroke="#184B5B"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      d="M138 48l-9.891 9.18"
                    ></Anipath>
                    <Anipath
                      inView={inView}
                      fill="#184B5B"
                      d="M104.229 39.176c3.523 0 9.977.63 13.588 4.862 2.333 2.736 3.317 6.763 2.936 12.007-.726.052-1.432.077-2.107.077-5.016 0-8.632-1.373-11.048-4.201-3.194-3.732-3.714-9.266-3.673-12.745h.304zm0-4.176c-2.508 0-4.203.268-4.203.268s-3.986 25.03 18.62 25.03c1.783 0 3.735-.154 5.862-.49C127.99 37.674 112.105 35 104.229 35z"
                    ></Anipath>
                    <Anipath
                      inView={inView}
                      delay={400}
                      stroke="#184B5B"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      d="M112.5 48l9.015 8.809"
                    ></Anipath>
                    <Anipath
                      inView={inView}
                      delay={400}
                      stroke="#184B5B"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="6"
                      d="M124.997 57.423v11.5"
                    ></Anipath>
                  </g>
                  <defs>
                    <clipPath id="clip0_166_238">
                      <path
                        fill="#fff"
                        d="M0 0H146V180H0z"
                        transform="translate(52 35)"
                      ></path>
                    </clipPath>
                  </defs>
                </Ani_appear_comp>
              </div>
              <Ani_appear_comp
                element={"div"}
                inView={inView}
                delay={500}
                className="ml-3% md:ml-0 w-[55%] md:w-full text-center leading-normal flex flex-col justify-center items-center"
              >
                <p className="text-24px md:text-34px font-black">環保愛地球</p>
                <p className="md:text-lg ">全球衝刺潔淨能源</p>
                <p className="md:text-lg ">參與愛地球行動</p>
              </Ani_appear_comp>
            </div>

            {/* 2 */}
            <div className="relative md:w-31% my-5 pt-70px md:pt-100px md:pr-2% flex flex-row md:flex-col">
              <Ani_appear_comp
                element={"div"}
                inView={inView}
                delay={250}
                className="absolute -top-2 md:top-0"
              >
                <img
                  className="relative scale-75 md:scale-100"
                  src={chatboxImg}
                  alt=""
                />
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full md:-translate-y-5 text-lg text-white drop-shadow-text ">
                  能源也可以
                </p>
              </Ani_appear_comp>
              <div className=" w-[43%] md:w-full flex flex-col justify-center items-center text-center">
                {/* <img
                className="max-h-170px max-w-170px w-full flex-initial"
                src={rectSvg}
                alt="svg"
              /> */}
                <Ani_appear_comp
                  className="max-h-170px max-w-170px w-full flex-initial"
                  element={"svg"}
                  inView={inView}
                  delay={250}
                  xmlns="http://www.w3.org/2000/svg"
                  width="250"
                  height="250"
                  fill="none"
                  viewBox="0 0 250 250"
                >
                  <Anipath
                    inView={inView}
                    friction={25}
                    delay={500}
                    stroke="#184B5B"
                    strokeMiterlimit="10"
                    strokeWidth="5"
                    d="M192.556 192H57.444c-.797 0-1.444.872-1.444 1.948v11.104c0 1.076.647 1.948 1.444 1.948h135.112c.797 0 1.444-.872 1.444-1.948v-11.104c0-1.076-.647-1.948-1.444-1.948zM68 192V96.939c0-1.07.856-1.939 1.907-1.939h13.186c1.051 0 1.907.87 1.907 1.939V192H68zM99 192v-71.047c0-1.077.856-1.953 1.907-1.953h13.186c1.051 0 1.907.876 1.907 1.953V192H99zM131 192v-47.041c0-1.08.856-1.959 1.907-1.959h13.186c1.051 0 1.907.879 1.907 1.959V192h-17zM162 192v-22.081c0-1.058.856-1.919 1.907-1.919h13.186c1.051 0 1.907.861 1.907 1.919V192h-17z"
                  ></Anipath>
                  <Anipath
                    inView={inView}
                    friction={40}
                    delay={500}
                    fill="#184B5B"
                    d="M97.939 43.148a2.5 2.5 0 00-4.7 1.704l4.7-1.704zm93.84 77.214L176.548 95.84l-13.622 25.452 28.853-.93zM95.589 44c-2.35.852-2.35.854-2.35.856a.34.34 0 01.007.016 4.079 4.079 0 00.046.122c.03.075.07.177.124.305.109.256.269.617.492 1.08.447.924 1.147 2.251 2.189 3.943 2.083 3.383 5.53 8.22 11.046 14.212 11.032 11.982 30.335 28.571 63.559 47.383l2.463-4.351c-32.853-18.602-51.722-34.884-62.343-46.419-5.311-5.767-8.561-10.35-10.468-13.447-.953-1.549-1.572-2.727-1.944-3.498a18.445 18.445 0 01-.462-1.032l-.012-.031c-.001-.002-.001-.002 0 0v.003l.002.003c0 .001.001.003-2.35.855z"
                  ></Anipath>
                </Ani_appear_comp>
              </div>
              <Ani_appear_comp
                element={"div"}
                inView={inView}
                delay={600}
                className="ml-3% md:ml-0 w-[55%] md:w-full text-center leading-normal flex flex-col justify-center items-center "
              >
                <p className="text-24px md:text-34px font-black">破壞式創新</p>
                <p className="md:text-lg ">潔淨能源成本下降</p>
                <p className="md:text-lg ">普及應用成趨勢</p>
              </Ani_appear_comp>
            </div>

            {/* 3 */}
            <div className="relative md:w-31% my-5 pt-70px md:pt-100px md:pr-2% flex flex-row md:flex-col">
              <Ani_appear_comp
                element={"div"}
                inView={inView}
                delay={250}
                className="absolute -top-2 md:top-0"
              >
                <img
                  className="relative scale-75 md:scale-100"
                  src={chatboxImg}
                  alt=""
                />
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full md:-translate-y-5 text-lg text-white drop-shadow-text ">
                  佈局也可以
                </p>
              </Ani_appear_comp>
              <div className=" w-[43%] md:w-full flex flex-col justify-center items-center">
                {/* <img
                className="max-h-170px max-w-170px w-full flex-initial"
                src={rectSvg}
                alt="svg"
              /> */}
                <Ani_appear_comp
                  className="max-h-170px max-w-170px w-full flex-initial"
                  element={"svg"}
                  inView={inView}
                  xmlns="http://www.w3.org/2000/svg"
                  width="250"
                  height="250"
                  fill="none"
                  viewBox="0 0 250 250"
                >
                  <Anipath
                    inView={inView}
                    delay={400}
                    stroke="#184B5B"
                    strokeMiterlimit="10"
                    strokeWidth="4"
                    d="M37.967 73H196.51c2.191 0 3.967 1.766 3.967 3.945v131.43H37.967c-2.191 0-3.967-1.766-3.967-3.945V76.945C34 74.766 35.776 73 37.967 73zM34 93.983h166.482"
                  ></Anipath>
                  <Anipath
                    inView={inView}
                    delay={400}
                    stroke="#184B5B"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="4"
                    d="M173.311 83.924h17.345M157.707 83.924h8.667M44.985 160.956h81.503M49.028 118.704H82.27M49.028 127.675H63.19M49.028 108.972H63.19M160.813 106.99h23.412M160.813 115.826h23.412"
                  ></Anipath>
                  <Anipath
                    inView={inView}
                    delay={400}
                    stroke="#184B5B"
                    strokeMiterlimit="10"
                    strokeWidth="4"
                    d="M49.028 184.525h77.46"
                  ></Anipath>
                  <Anipath
                    inView={inView}
                    delay={400}
                    stroke="#184B5B"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="4"
                    d="M68.826 108.972H82.99"
                  ></Anipath>
                  <Anipath
                    inView={inView}
                    delay={400}
                    stroke="#184B5B"
                    strokeMiterlimit="10"
                    strokeWidth="4"
                    d="M49.974 140.688h10.828c.52 0 .946.422.946.941v19.327H49.033v-19.327c0-.519.425-.941.946-.941h-.005zM70.496 127.675h10.828c.521 0 .946.423.946.941v32.34H69.555v-32.34c0-.518.425-.941.946-.941h-.005zM90.725 108.972h10.828c.521 0 .946.423.946.941v51.043H89.784v-51.043c0-.518.425-.941.946-.941h-.005zM110.383 127.675h10.827c.522 0 .947.423.947.941v32.34h-12.716v-32.34c0-.518.425-.941.947-.941h-.005z"
                  ></Anipath>
                  <Anipath
                    inView={inView}
                    delay={400}
                    fill="#fff"
                    stroke="#184B5B"
                    strokeMiterlimit="10"
                    strokeWidth="4"
                    d="M150.476 190.271c17.72 0 32.084-14.285 32.084-31.907 0-17.621-14.364-31.906-32.084-31.906-17.719 0-32.084 14.285-32.084 31.906 0 17.622 14.365 31.907 32.084 31.907z"
                  ></Anipath>
                  <Anipath
                    inView={inView}
                    delay={400}
                    fill="#fff"
                    stroke="#184B5B"
                    strokeMiterlimit="10"
                    strokeWidth="4"
                    d="M175.918 177.531l-6.626 6.59 36.476 36.274 6.626-6.59-36.476-36.274zM150.476 181.073c12.612 0 22.835-10.167 22.835-22.709 0-12.541-10.223-22.708-22.835-22.708-12.611 0-22.835 10.167-22.835 22.708 0 12.542 10.224 22.709 22.835 22.709z"
                  ></Anipath>
                  <Anipath
                    inView={inView}
                    delay={400}
                    fill="#fff"
                    stroke="#184B5B"
                    strokeMiterlimit="10"
                    strokeWidth="4"
                    d="M151.923 158.007c3.991 0 7.226-3.217 7.226-7.185 0-3.969-3.235-7.186-7.226-7.186-3.99 0-7.225 3.217-7.225 7.186 0 3.968 3.235 7.185 7.225 7.185zM54.523 191.71c3.99 0 7.225-3.217 7.225-7.185 0-3.969-3.235-7.186-7.225-7.186-3.991 0-7.226 3.217-7.226 7.186 0 3.968 3.235 7.185 7.226 7.185zM91.808 191.71c3.99 0 7.225-3.217 7.225-7.185 0-3.969-3.234-7.186-7.225-7.186-3.99 0-7.225 3.217-7.225 7.186 0 3.968 3.235 7.185 7.225 7.185zM129.382 191.71c3.991 0 7.225-3.217 7.225-7.185 0-3.969-3.234-7.186-7.225-7.186-3.99 0-7.225 3.217-7.225 7.186 0 3.968 3.235 7.185 7.225 7.185zM189.17 192.036l-5.299 5.269c-.978.973-.899 2.628.176 3.698l20.904 20.787c1.075 1.07 2.74 1.148 3.718.176l5.299-5.27c.978-.973.899-2.628-.176-3.697l-20.904-20.788c-1.075-1.069-2.74-1.148-3.718-.175z"
                  ></Anipath>
                </Ani_appear_comp>
              </div>
              <Ani_appear_comp
                element={"div"}
                inView={inView}
                delay={700}
                className="ml-3% md:ml-0 w-[55%] md:w-full text-center leading-normal flex flex-col justify-center items-center"
              >
                <p className="text-24px md:text-34px font-black">趨勢大多頭</p>
                <p className="md:text-lg ">各國政策導向2050年</p>
                <p className="md:text-lg ">達100%綠能經濟</p>
              </Ani_appear_comp>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreePoint_p1;
