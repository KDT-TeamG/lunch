import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";

const Header = () => {
  const [time, setTime] = useState(new Date());

  const logout = () => {
    localStorage.clear();
  };

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <header className="Header">
      <Link to="/" className="logo">
        점심의 민족
      </Link>
      <div className="menu-items">
        <div className="clock">{time.toLocaleTimeString()}</div>
        <Link to="/game" className="menu-item">
          GAME
        </Link>
        {localStorage.getItem("userId") == null ? (
          <Link to="/login" className="menu-item loginBtn">
            로그인
          </Link>
        ) : (
          <div className="loginBtn" onClick={logout}>
            로그아웃
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
