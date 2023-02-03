import React from "react";
import About from "/src/components/blocks/about/about";
import Advantages from "/src/components/blocks/advantages/advantages";
import { TitleLevel } from "/src/components/ui/title/title";

const MainPage = ({ advantages }) => {
  return (
    <>
      <About level={TitleLevel.H1} />
      <Advantages advantages={advantages} level={TitleLevel.H2} />
    </>
  );
};

export default MainPage;
