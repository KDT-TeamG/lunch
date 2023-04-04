import React from "react";
import IntroSection from "../components/MainPage/IntroSection";
import SideBar from "../components/SideBar/SideBar";
import CardSection from "../components/MainPage/CardSection";

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
