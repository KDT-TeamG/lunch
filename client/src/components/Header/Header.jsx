import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = ({ props }) => {
  const logout = () => {
    sessionStorage.clear();
  };

  return (
    <header className="header">
      <div className="info">
        <Link to="/" className="logo">
          맛ZIP
        </Link>
        <Link className="about-us">ABOUT US</Link>
      </div>
      <div className="menu-items">
        <Link to="/game" className="menu-item">
          GAME
        </Link>
        {sessionStorage.getItem("userId") == null ? (
          <Link to="/login" className="menu-item login-btn">
            로그인
          </Link>
        ) : (
          <>
            <Link to="/mypage" className="menu-item">
              My Page
            </Link>
            <button className="menu-item logout-btn" onClick={logout}>
              로그아웃
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
