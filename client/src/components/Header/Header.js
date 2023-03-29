import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [time, setTime] = useState(new Date());

  const logout = () => {
    sessionStorage.clear();
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
        맛ZIP
      </Link>
      <div className="menu-items">
        <div className="clock">{time.toLocaleTimeString()}</div>
        <Link to="/game" className="menu-item">
          GAME
        </Link>
        {sessionStorage.getItem("userId") == null ? (
          <Link to="/login" className="menu-item loginBtn">
            로그인
          </Link>
        ) : (
          <button className="loginBtn" onClick={logout}>
            로그아웃
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
