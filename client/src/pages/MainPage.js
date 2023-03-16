import React from "react";
import Search from "../components//MainPage/Search";
import Main from "../components/MainPage/Main";
import SideBar from "../components/SideBar";

const MainPage = (props) => {
  // const [loginOpen, setLoginOpen] = useState(false);

  // const showModal = () => {
  //   setLoginOpen(true);
  // };

  const { cardItems } = props;

  return (
    <main className="MainPage">
      <Main />
      <Search cardItems={cardItems} />
      <SideBar />
      {/* {loginOpen && <Login setLoginOpen={setLoginOpen} />} */}
    </main>
  );
};

export default MainPage;
