import React from "react";
import HeroSection from "../../component/HeroSection";
import { homeObjOne, homeObjTwo } from "./data";

function Homepage() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
    </>
  );
}

export default Homepage;
