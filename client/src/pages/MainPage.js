import React from "react";
import Search from "../components/Search";
import Main from "../components/Main";

const MainPage = (props) => {
  const { cardItems } = props;
  console.log(props);

  return (
    <main className="MainPage">
      <Main />
      <Search cardItems={cardItems} />
    </main>
  );
};

export default MainPage;
