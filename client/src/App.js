import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ErrorPage from "./pages/404page";
import GamePage from "./pages/GamePage";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import "./styles/MainPage.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/404error" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
