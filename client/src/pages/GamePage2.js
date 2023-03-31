import React from "react";
import Header from "../components/Header/Header";
import Dice from "../components/Dice/Dice.js";
import { Grid, Image, Button } from "semantic-ui-react";
import { useState } from "react";
import couponImg from "../images/coupon3.png";
import dice3 from "../images/dice3.png";
import cardImg from "../images/credit-card1.png";
import "./GamePage2.scss";

const GamePage2 = () => {
  //게임페이지이동(기존 ejs프로젝트 서버도 켜져 있어야 가능)
  // 주사위게임이동
  function goToDiceGame() {
    // 창 내 이동
    // window.location.href = "http://localhost:8000/dicegame";
    // 새 창 오픈
    window.open("http://localhost:8000/dicegame");
    //팝업창 오픈
    //   const width = 800;
    //   const height = 600;
    //   const left = window.screen.width / 2 - width / 2;
    //   const top = window.screen.height / 2 - height / 2;
    //   const options = `width=${width},height=${height},left=${left},top=${top},menubar=no,location=no,resizable=no,scrollbars=no,status=no`;
    //   window.open("http://localhost:8000/dicegame", "gamePopup", options);
  }
  // 복권긁기(스크래치)게임이동
  function goToScratchGame() {
    window.open("http://localhost:8000/scratch");
  }
  // 카드뽑기게임이동
  function goToCardGame() {
    window.open("http://localhost:8000/game2");
  }

  return (
    <div className="GamePage2">
      <Header />
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
              <Button floated="left" size="huge" onClick={goToDiceGame}>
                GAME START
              </Button>
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="game2" centered>
          {/* <ScratchCard /> */}
          {/* <Grid.Column> */}
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
          <div className="imgContainer">
            <Image src={couponImg} />
          </div>
          <div className="gamepage__textArea">
            <h1 className="gamepage__textArea__title">복권 긁기 게임</h1>
            <h3 className="gamepage__textArea__desc">설명설명설명</h3>
            <Button floated="left" size="huge" onClick={goToScratchGame}>
              GAME START
            </Button>
          </div>
          {/* </div> */}
          {/* </Grid.Column> */}
          {/* <Grid.Column verticalAlign="middle"></Grid.Column> */}
        </Grid.Row>
        <Grid.Row className="game3">
          <Grid.Column verticalAlign="middle">
            <div className="gamepage__textArea">
              <h1 className="gamepage__textArea__title">
                이걸로 계산해주세요!
              </h1>
              <h3 className="gamepage__textArea__desc">설명설명설명</h3>
              <Button floated="left" size="huge" onClick={goToCardGame}>
                GAME START
              </Button>
            </div>
          </Grid.Column>
          <Grid.Column style={{ display: "flex" }} className="cards">
            <Image
              src={cardImg}
              className="card card1"
              draggable="false"
            ></Image>
            <Image
              src={cardImg}
              className="card card2"
              draggable="false"
            ></Image>
            <Image
              src={cardImg}
              className="card card3"
              draggable="false"
            ></Image>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div className="BtnArea"></div>
    </div>
  );
};

export default GamePage2;
