import React from "react";
import Header from "../components/Header";
import Login from "../components/MainPage/Login";
import Dice from "../components/Dice";
import { Grid, Button } from "semantic-ui-react";
import { useState } from "react";
import "../styles/GamePage2.scss";
const GamePage2 = () => {
  const [loginOpen, setLoginOpen] = useState(false);

  const showModal = () => {
    setLoginOpen(true);
  };

  const couponImg = "../../public/images/coupon.png";

  return (
    <div className="GamePage2">
      <Header showModal={showModal} />
      {loginOpen && <Login setLoginOpen={setLoginOpen} />}
      <Grid container columns={2} stackable>
        <Grid.Row className="game1">
          <Grid.Column>
            <Dice />
          </Grid.Column>
          <Grid.Column>
            <div className="gamepage__textArea">
              <h1 className="gamepage__textArea__title">주사위를 굴려라!</h1>
              <h3 className="gamepage__textArea__desc">설명설명설명</h3>
            </div>
            <Button floated="right" size="huge">
              주사위 굴리기 START
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="game2">
          <Grid.Column></Grid.Column>
          <Grid.Column>
            <div className="gamepage__textArea">
              <h1 className="gamepage__textArea__title">당첨 복권을 긁어라!</h1>
              <h3 className="gamepage__textArea__desc">설명설명설명</h3>
            </div>
            <Button floated="right" size="huge">
              스크래치 START
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="game3">
          <Grid.Column></Grid.Column>
          <Grid.Column>
            <div className="gamepage__textArea">
              <h1 className="gamepage__textArea__title">
                이걸로 계산해주세요!
              </h1>
              <h3 className="gamepage__textArea__desc">설명설명설명</h3>
            </div>
            <Button floated="right" size="huge">
              카드 뽑기 START
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div className="BtnArea"></div>
    </div>
  );
};

export default GamePage2;
