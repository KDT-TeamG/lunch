import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import GamePage2 from "./pages/GamePage2";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import { isTablet, isBrowser } from "react-device-detect";
import MobileView from "./pages/MobileView/MobileView.js";
import MyPage from "./pages/Mypage";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="App">
      {!isTablet && !isBrowser ? (
        <MobileView />
      ) : (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/game" element={<GamePage2 />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Modal />
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
