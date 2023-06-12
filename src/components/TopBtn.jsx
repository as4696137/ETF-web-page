import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { animated, useSprings } from "@react-spring/web";
import { useMedia } from "react-use";

const TopBtn = () => {
  const isSmallScreen = useMedia("(min-width: 768px)");
  const [toggle, setToggle] = useState([false, false]);
  const hoverStyle = useSprings(
    toggle.length,
    toggle.map((eachToggle) => ({
      right: isSmallScreen ? (eachToggle ? 8 : 0) : 0,
    }))
  );
  return (
    <div className="fixed md:text-right w-full md:w-fit -bottom-2 md:top-1/2 md:-right-4 z-50">
      <div className="flex w-full md:w-fit flex-row flex-wrap md:flex-col">
        <animated.div style={hoverStyle[0]} className="relative w-1/2 md:w-fit">
          <Link
            className="block w-full horizontal-tb md:vertical-lr my-0.5 py-2 md:py-5 px-0 md:pl-4 md:pr-8 border border-main-darkgreen bg-main-yellow rounded-lg shadow-topBtn text-center"
            onMouseEnter={() => setToggle([true, false])}
            onMouseLeave={() => setToggle([false, false])}
            to="/MaintenanceA"
          >
            <span className="text-white text-lg font-normal drop-shadow-text tracking-widest">
              產品資訊
            </span>
          </Link>
        </animated.div>

        <animated.div style={hoverStyle[1]} className="relative w-1/2 md:w-fit">
          <Link
            className="block w-full horizontal-tb md:vertical-lr my-0.5 py-2 md:py-5 px-0 md:pl-3 md:pr-8 border border-main-darkgreen bg-main-darkgreen rounded-lg shadow-topBtn text-center"
            onMouseEnter={() => setToggle([false, true])}
            onMouseLeave={() => setToggle([false, false])}
            to="/MaintenanceB"
          >
            <span className="text-white text-lg font-normal drop-shadow-text tracking-widest">
              綁定
              <b className="text-base horizontal-tb tracking-tighter">LINE</b>享
            </span>
          </Link>
        </animated.div>
      </div>
      <Outlet />
    </div>
  );
};

export default TopBtn;
