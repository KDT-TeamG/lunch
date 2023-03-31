import React from "react";
import Search from "../components/MainPage/Search";
import Main from "../components/MainPage/Main";
import SideBar from "../components/SideBar/SideBar";

const MainPage = () => {
  return (
    <main className="MainPage">
      <Main />
      <Search />
      <SideBar />
    </main>
  );
};

export default MainPage;
