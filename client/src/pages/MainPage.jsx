import React from "react";
// import CardSection from "../components/MainPage/CardSection";
import IntroSection from "../components/MainPage/IntroSection";
import SideBar from "../components/SideBar/SideBar";
import Cardsec from "../components/MainPage/Cardsec";

const MainPage = () => {
  return (
    <main className="MainPage">
      <IntroSection />
      <Cardsec />
      {/* <CardSection /> */}
      <SideBar />
    </main>
  );
};

export default MainPage;
