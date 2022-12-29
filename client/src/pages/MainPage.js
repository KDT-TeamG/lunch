import React, { useState } from "react";
import Search from "../components//MainPage/Search";
import Main from "../components/MainPage/Main";
import Header from "../components/Header";
import Login from "../components/MainPage/Login";

const MainPage = (props) => {
  const [loginOpen, setLoginOpen] = useState(false);

  const showModal = () => {
    setLoginOpen(true);
  };

  const { cardItems } = props;

  return (
    <main className="MainPage">
      <Header showModal={showModal} />
      <Main />
      <Search cardItems={cardItems} />
      {loginOpen && <Login setLoginOpen={setLoginOpen} />}
    </main>
  );
};

export default MainPage;
