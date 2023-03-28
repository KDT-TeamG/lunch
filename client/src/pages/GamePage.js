import React from "react";
import Header from "../components/Header";
import Login from "../components/MainPage/Login";
import Dice from "../components/Dice";
// import "semantic-ui-css/semantic.min.css";
import { Button } from "semantic-ui-react";
import "../styles/GamePage.scss";

const GamePage = () => {
  return (
    <div className="GamePage">
      <div className="Game1">
        <Dice />
        <div className="TextArea">
          <p>
            주사위 게임 설명란
            <br />
            주사위를 던져 가장 낮게 나온 사람이 쏜다!!
          </p>
          <h3>가장 빠르고 간단한</h3>
        </div>
        <div className="BtnArea">
          <Button inverted floated="right" size="huge">
            주사위 게임 하러 가기
          </Button>
        </div>
      </div>
      <div className="Game2">
        복권 페이지
        <div className="TextArea">
          <p>
            스크래치 게임 설명란
            <br />
            복권을 마우스로 긁어서 당첨된 사람이 쏜다!!
          </p>
          <h3>긴장감 있는</h3>
        </div>
        <div className="BtnArea">
          <Button inverted floated="right" size="huge">
            스크래치 게임 하러 가기
          </Button>
        </div>
      </div>
      <div className="Game3">
        카드뽑기 페이지
        <div className="TextArea">
          <p>
            카드 뽑기 게임 설명란
            <br />
            여러개의 카드 중 하나를 골라 골라!!
          </p>
          <h3>"이걸로 계산해 주세요!"</h3>
        </div>
        <div className="BtnArea">
          <Button inverted floated="right" size="huge">
            카드 뽑기 게임 하러 가기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
