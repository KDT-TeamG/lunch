import React from "react";
import Search from "../components/MainPage/Search";
import Main from "../components/MainPage/Main";
import SideBar from "../components/SideBar/SideBar";

const MainPage = (props) => {
  const { cardItems } = props;

  return (
    <main className="MainPage">
      <Main />
      <Search cardItems={cardItems} />
      <SideBar />
    </main>
  );
};

export default MainPage;
