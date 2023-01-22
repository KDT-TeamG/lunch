import React from "react";
import ScratchCard from "react-scratchcard";
import couponCover from "../images/coupon3.png";
import "../styles/Scratch.scss";

// const { useState } = React;
const Scratch = () => {
  // const [scratchedText, setScratchedText] = useState(
  //   "Congratulations! You WON!"
  // );
  // const handleScratchComplete = () => {
  //   console.log("The card is now clear!");
  //   setScratchedText("Congratulations! You WON!");
  // };
  // const geht = false;
  const settings = {
    width: 1000,
    height: 500,
    image: couponCover,
    // marginLeft: 300,
    finishPercent: 90,
    // onComplete: () => handleScratchComplete(),
  };

  console.log(settings);
  return (
    <ScratchCard {...settings}>
      {" "}
      <div className="textArea">
        <h1>복권긁기게임</h1>
        <h3>설명설명설명</h3>
      </div>
    </ScratchCard>

  );
};
export default Scratch;
