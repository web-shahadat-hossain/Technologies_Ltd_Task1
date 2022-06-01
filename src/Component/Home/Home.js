import React from "react";
import { Outlet } from "react-router-dom";
import Analysis from "../Analysis/Analysis";
import Business from "../Business/Business";
import HeroSection from "../HeroSection/HeroSection";
import VersatileAdLayout from "../VersatileAdLayout/VersatileAdLayout";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Business />
      <VersatileAdLayout />
      <Outlet />

      <Analysis />
    </>
  );
};

export default Home;
