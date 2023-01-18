import React from "react";
import Header from "../components/Header";
import Login from "../components/MainPage/Login";
import Dice from "../components/Dice";
import { Grid, Image, Button } from "semantic-ui-react";
import { useState } from "react";
import couponImg from "../images/coupon.png";
import mouseImg from "../images/mouse.png";
import mouseImg2 from "../images/wireless-mouse.png";
import yayImg from "../images/celebration.png";
import yayImg2 from "../images/celebration2.png";
import dice3 from "../images/dice3.png";
import map from "../images/map.png";
import "../styles/GamePage2.scss";

const GamePage2 = () => {
  const [loginOpen, setLoginOpen] = useState(false);

  const showModal = () => {
    setLoginOpen(true);
  };

  return (
    <div className="GamePage2">
      <Header showModal={showModal} />
      {loginOpen && <Login setLoginOpen={setLoginOpen} />}
      <Grid container columns={2} stackable>
        <Grid.Row className="game1">
          <Grid.Column>
            <Image src={dice3} className="bgImgDice"></Image>
            <Dice className="diceAnimation" />
          </Grid.Column>
          <Grid.Column verticalAlign="middle">
            <div className="gamepage__textArea">
              <h1 className="gamepage__textArea__title">주사위를 굴려라!</h1>
              <h3 className="gamepage__textArea__desc">설명설명설명</h3>
              <Button floated="left" size="huge">
                주사위 굴리기 START
              </Button>
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="game2">
          <Grid.Column>
            {/* <Image src={map} className="bgimgMap" /> */}
            {/* <div className="imgContainer">
            
              <Image
                src={couponImg}
                centered
                // verticalAlign="middle"
                id="couponImg"
              />
              <Image src={mouseImg2} size="tiny" centered id="mouseImg" />{" "}
              <Image
                src={yayImg2}
                size="small"
                // verticalAlign="bottom"
                id="yayImg"
              />
            </div> */}
          </Grid.Column>
          <Grid.Column verticalAlign="middle">
            <div className="gamepage__textArea">
              <h1 className="gamepage__textArea__title">복권 긁기 게임</h1>
              <h3 className="gamepage__textArea__desc">설명설명설명</h3>
              <Button floated="left" size="huge">
                스크래치 START
              </Button>
            </div>
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
              <Button floated="left" size="huge">
                카드 뽑기 START
              </Button>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div className="BtnArea"></div>
    </div>
  );
};

export default GamePage2;
