import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";

const Header = ({ showModal }) => {
  const [time, setTime] = useState(new Date());

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
        <Link to="/login" className="menu-item loginBtn">
          로그인
        </Link>
      </div>
    </header>
  );
};

export default Header;
