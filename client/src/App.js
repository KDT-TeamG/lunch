import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import GamePage from "./pages/GamePage";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";

function App() {
  // 임시데이터
  const [cardItems, setCardItems] = useState([
    {
      img: "사진 들어갈 곳",
      place_name: "음식점 명",
      road_address_name: "주소",
    },
    {
      img: "사진 들어갈 곳",
      place_name: "음식점 명",
      road_address_name: "주소",
    },
    {
      img: "사진 들어갈 곳",
      place_name: "음식점 명",
      road_address_name: "주소",
    },
    {
      img: "사진 들어갈 곳",
      place_name: "음식점 명",
      road_address_name: "주소",
    },
    {
      img: "사진 들어갈 곳",
      place_name: "음식점 명",
      road_address_name: "주소",
    },
    {
      img: "사진 들어갈 곳",
      place_name: "음식점 명",
      road_address_name: "주소",
    },
  ]);
  console.log(cardItems);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage cardItems={cardItems} />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
