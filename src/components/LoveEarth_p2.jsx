import React from "react";

const LoveEarth_p2 = () => {
  return (
    <div className="border border-solid border-red-400 relative px-5% py-[130px] text-main-darkgreen bg-bg-gray">
      <div className="mx-[1%] pb-[60px] leading-tight">
        <p className="pr-0.5em text-3xl lg:text-62px font-medium text-left text-main-darkgreen">
          <span className="">全球衝刺潔淨能源</span>
          <br />
          <span className="">參與愛地球行動</span>
        </p>
        <p className="md:text-xl lg:text-lg mt-0.5em">
          世界各國政府大力推動潔淨能源，項目包含風力、太陽能、生物燃料、地熱能、海洋能、水力發電等，世界各地潔淨能源計畫擴大至8210億美元(含EU
          green support)。
        </p>
      </div>
      <div className=" px-2% py-5 md:py-14 rounded-2xl bg-white">
        <div className="flex flex-col md:flex-row">
          {/* 圈圈 */}
          <div className="w-full md:w-1/2 xl:w-2/5 relative  ">
            <svg
              width={504}
              height={504}
              viewBox="0 0 504 504"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[-2px] top-[-2px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M502 252C502 306.138 484.427 358.812 451.921 402.105C419.416 445.398 373.736 476.97 321.748 492.074C269.76 507.178 214.274 504.997 163.632 485.861C112.989 466.725 69.9265 431.667 40.9182 385.957C11.9099 340.247 -1.47669 286.356 2.7709 232.385C7.01848 178.415 28.6707 127.281 64.4725 86.6722C100.274 46.0631 148.291 18.1729 201.303 7.19451C254.316 -3.78388 309.46 2.74284 358.445 25.7935"
                stroke="#184B5B"
                stroke-width={3}
              />
            </svg>
            <svg
              width={436}
              height={436}
              viewBox="0 0 436 436"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[30px] top-[30px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle
                cx={218}
                cy={218}
                r="216.5"
                stroke="text-main-yellow"
                stroke-width={3}
              />
            </svg>
            <div className="w-[304px] h-[175px] absolute left-[101px] top-44">
              <p className="w-[237px] h-[30px] absolute left-[30px] top-0 text-2xl font-medium text-center text-[#545454]">
                潔淨能源政策資金達
              </p>
              <div className="w-[304px] h-[145px] absolute left-0 top-[30px]">
                <p className="w-[237px] h-[98px] absolute left-0 top-0 text-[100px] font-bold text-center text-main-darkgreen">
                  8210
                  <span className="flex-grow-0 flex-shrink-0 w-[35px] h-[30px] text-[32px] font-medium text-center text-main-darkgreen">
                    億
                  </span>
                </p>
                <p className="flex-grow-0 flex-shrink-0 w-[67px] h-[30px] text-[32px] font-medium text-center text-main-darkgreen">
                  美元
                </p>
              </div>
            </div>
          </div>
          {/* 那三個 */}
          <div className="w-full md:w-1/2 xl:w-3/5">
            {/* 1 */}
            <div className="mb-5 px-2% w-full mt-12 md:mt-0 md:mb-12 md:px-0 flex ">
              <p className="w-2/5 md:w-11/20 lg:7/20 text-66px md:text-70px xl:text-96px font-bold text-center text-main-darkgreen">
                145
              </p>
              <p className="w-11/20 md:w-9/20 xl:w-13/20 px-2% xl:text-22px text-left">
                <span className="block xl:inline">
                  <span className="font-medium text-font-black">國制定</span>
                  <span className="font-bold text-main-yellow">潔淨能源</span>
                </span>

                <span className="font-bold text-main-yellow">發電獎勵</span>
                <span className="font-medium text-font-black">政策</span>
              </p>
            </div>
            {/* 2 */}
            <div className="mb-5 px-2% w-full mt-12 md:mt-0 md:mb-12 md:px-0 flex ">
              <p className="w-2/5 md:w-11/20 lg:7/20 text-66px md:text-70px xl:text-96px font-bold text-center text-main-darkgreen">
                65
              </p>
              <p className="w-11/20 md:w-9/20 xl:w-13/20 px-2% xl:text-22px text-left">
                <span className="block xl:inline">
                  <span className="font-medium text-font-black">國制定</span>
                  <span className="font-bold text-main-yellow">潔淨能源</span>
                </span>

                <span className="font-bold text-main-yellow">運輸</span>
                <span className="font-medium text-font-black">政策</span>
              </p>
            </div>
            {/* 3 */}
            <div className="mb-5 px-2% w-full mt-12 md:mt-0 md:mb-12 md:px-0 flex ">
              <p className="w-2/5 md:w-11/20 lg:7/20 text-66px md:text-70px xl:text-96px font-bold text-center text-main-darkgreen">
                22
              </p>
              <p className="w-11/20 md:w-9/20 xl:w-13/20 px-2% xl:text-22px text-left">
                <span className="block xl:inline">
                  <span className="font-medium text-font-black">國制定</span>
                  <span className="font-bold text-main-yellow">潔淨能源</span>
                </span>

                <span className="font-bold text-main-yellow">供熱及製冷</span>
                <span className="font-medium text-font-black">政策</span>
              </p>
            </div>
          </div>
        </div>

        <p className="w-[96%] md:w-fit my-auto xl:my-0 text-md xl:text-lg pt-6 pb-4 font-medium text-left md:text-center text-font-gray">
          資料來源：Renewables 2021 Global Status
          Report，伊莉莎白投信整理，2021/11。
        </p>
      </div>
    </div>
  );
};

export default LoveEarth_p2;
