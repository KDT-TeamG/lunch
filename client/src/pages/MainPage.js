import React from "react";
import CardSection from "../components/MainPage/CardSection";
import IntroSection from "../components/MainPage/IntroSection";
import SideBar from "../components/SideBar/SideBar";

const MainPage = () => {
  return (
    <main className="MainPage">
      <IntroSection />
      <CardSection />
      <SideBar />
    </main>
  );
};

export default MainPage;
