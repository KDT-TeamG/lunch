import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="LogoBox">
        <img src={Logo} alt="logo"></img>
        <Link to="/" className="logo">
          맛ZIP
        </Link>
      </div>
      <div className="contentsLink">
        <p>
          <a href="#Search">검색하기</a>
        </p>
        <p>
          <Link to="/game">게임하기</Link>
        </p>
      </div>
      <div className="info">
        <p>
          <span>COMPANY</span>TeamG
        </p>
        <p>
          <span>DEVELOPER</span> TeamG
        </p>
        <p className="Copyright">TeamG © 2023 All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
