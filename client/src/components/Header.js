import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";

const Header = ({ showModal }) => {
  // const clock = document.querySelector(".clock");
  // const time = () => {
  //   let now = new Date();
  //   let year = now.getFullYear();
  //   let month = ("0" + (now.getMonth() + 1)).slice(-2);
  //   let day = ("0" + now.getDate()).slice(-2);
  //   let hour = now.getHours();
  //   let minutes = now.getMinutes();
  //   let seconde = now.getSeconds();

  //   let today = `${year}년 ${month}월 ${day}일 ${hour}시 ${minutes}분 ${seconde}초`;

  //   // clock.innerText = today;
  // };

  // function init() {
  //   setInterval(time, 1000);
  // }

  // init();
  return (
    <header className="Header">
      <Link to="/" className="logo">
        점심의 민족
      </Link>
      <div className="menu-items">
        <div className="menu-item clock">시계</div>
        <Link to="/game" className="menu-item">
          GAME
        </Link>
        <div className="menu-item loginBtn" onClick={showModal}>
          로그인
        </div>
      </div>
    </header>
  );
};

export default Header;
