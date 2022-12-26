import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "../styles/MainPage.scss";

const Main = () => {
  const images = useRef([
    {
      id: "first",
      backgroundImg: "images/carousel1.gif",
      MoveBtnTxt: "검색하러 가기 >",
      link: "#Search",
      p: "음식점이 고민될 땐",
      h2: "검색기능을 이용해 보세요",
    },
    {
      id: "second",
      backgroundImg: "images/game.jpg",
      MoveBtnTxt: "게임하러 가기 >",
      link: "/game",
      p: "내기가 빠지면 심심하니까",
      h2: "오늘의 주인공은?",
    },
    {
      id: "third",
      // backgroundImg: "images/carousel1.jpg",
      backgroundcolor: "skyblue",
      MoveBtnTxt: "계산하러 가기 >",
    },
  ]);

  const [current, setCurrent] = useState(0);
  const [style, setStyle] = useState({
    marginLeft: `-${current}00%`,
  });
  const imgSize = useRef(images.current.length);

  const moveSlide = (i) => {
    let nextIndex = current + i;

    if (nextIndex < 0) nextIndex = imgSize.current - 1;
    else if (nextIndex >= imgSize.current) nextIndex = 0;

    setCurrent(nextIndex);
  };

  useEffect(() => {
    setStyle({ marginLeft: `-${current}00%` });
  }, [current]);

  return (
    <section className="SlideContainer">
      <div className="Slide">
        <div className="window">
          <div className="flexbox" style={style}>
            {images.current.map((img, i) => (
              <div
                key={i}
                className="Slideimg"
                style={{ backgroundImage: `url(${img.backgroundImg})` }}
              >
                {" "}
                <div className="MoveSlideBtns">
                  <div
                    className="SlideBtn"
                    onClick={() => {
                      moveSlide(-1);
                    }}
                  >
                    <FontAwesomeIcon icon={faAngleLeft} />
                  </div>
                  <div
                    className="SlideBtn"
                    onClick={() => {
                      moveSlide(1);
                    }}
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                  </div>
                </div>
                <div className="CarouselTitle" id={img.id}>
                  <p>{img.p}</p>
                  <h2>{img.h2}</h2>
                </div>
                <div className="move">
                  <a href={img.link}>{img.MoveBtnTxt}</a>
                  <div className="dots">
                    {images.current.map((x, i) => (
                      <div
                        key={i}
                        className={i === current ? "dot current" : "dot"}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
