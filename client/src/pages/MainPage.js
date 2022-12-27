import { useState } from "react";
import React from "react";
import Search from "../components/Search";
import Main from "../components/Main";
import Header from "../components/Header";
import Login from "../components/MainPage/Login";

const MainPage = (props) => {
  const [loginOpen, setLoginOpen] = useState(false);

  const showModal = () => {
    setLoginOpen(true);
  };

  const { cardItems } = props;
  console.log(props);

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
