import React from "react";
import Bimage from "../img/maintenanceB.png";
import logo from "../img/logo.png";
import { Outlet, Link } from "react-router-dom";

const MaintenanceB = () => {
  return (
    <div className="relative font-noto min-w-[320px] tracking-wider scroll-smooth">
      <div className=" sticky top-0 w-full h-16 bg-white shadow-md flex justify-between items-center z-50">
        <img
          className="relative transition md:left-[6vw] xl:mr-11 scale-75"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="w-full mt-10 min-w-[320px]">
        <div className="w-full flex flex-col xl:flex-row justify-evenly items-center px-9%">
          <div className="relative leading-tight min-w-fit">
            <h1 className="text-92px md:text-120px font-bold text-main-darkgreen">
              挖哇~
            </h1>
            <h3 className="text-4xl font-bold text-main-darkgreen">
              網頁施工中...
            </h3>
            <p className="py-2 leading-tight">
              這個網頁目前正在施工，什麼時候會好呢?沒有人知道。
            </p>
            <p className=" leading-tight">
              所以請您耐心等待，您可以按下面的按鈕返回首頁。
            </p>
            <Link
              to="/"
              className="absolute -bottom-12 right-2 px-3 py-1 rounded-md border-2 border-main-darkgreen bg-white hover:bg-main-darkgreen text-main-darkgreen hover:text-white font-bold"
            >
              回首頁
            </Link>
          </div>

          <img className="py-20" src={Bimage} alt="" />
        </div>
        <div className="translate-y-[7px] px-5% pt-10 pb-10 bg-main-darkgreen text-white text-center">
          本網站僅為練習使用，參考網頁:
          <a
            className="underline"
            href="https://www.ftft.com.tw/areas/00899etf/index.html"
          >
            www.ftft.com.tw
          </a>
          <br />
          伊莉莎白信託股份有限公司 111金管投信新字第006號
          台北市忠孝東路六段99號6樓
          <br />
          電話：(02) 2222-6966 傳真：(02) 2222-6999
          <br />
          網址：www.EZXB.com.tw 諮詢專線：0800-066-999
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MaintenanceB;
