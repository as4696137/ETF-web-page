import React from "react";
import Nav from "../components/Nav";
import Video from "../components/Video";
import ThreePoint_p1 from "../components/ThreePoint_p1";
import LoveEarth_p2 from "../components/LoveEarth_p2";
import Unstopp_p3 from "../components/Unstopp_p3";
import Together_p4 from "../components/Together_p4";
import NewNormal_p5 from "../components/NewNormal_p5";
import Change_p6 from "../components/Change_p6";
import Footer from "../components/Footer";
import TopBtn from "../components/TopBtn";

import { Outlet, Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="relative font-noto min-w-[320px] tracking-wider scroll-smooth">
      <TopBtn />
      <Nav />
      <Video />
      <ThreePoint_p1 />
      <LoveEarth_p2 />
      <Unstopp_p3 />
      <Together_p4 />
      <NewNormal_p5 />
      <Change_p6 />
      <Footer />
    </div>
  );
};

export default Home;
