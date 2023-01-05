import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GamePage from "./pages/GamePage";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";

function App() {
  // 임시데이터
  const [cardItems] = useState([
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

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage cardItems={cardItems} />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
