import React, { useRef, useEffect, useState } from "react";
import liked from "../../images/liked.png";
import like from "../../images/like.png";
import { cardItems } from "../../data";
import "./CardSection.scss";
import useScrollStatus from "../../hooks/useScrollStatus";

const SearchScetion = ({ props }) => {
  const [likeClick, setLikeClick] = useState(false);

  const listItem = ["전체", "한식", "중식", "일식", "양식"];

  const lists = useRef([]);
  const cards = useRef([]);

  useEffect(() => {
    lists.current[0].classList.add("active");
  }, [lists]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const click = (e) => {
    lists.current.forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");
    cards.current.forEach((list) => {
      if (list.childNodes[1].childNodes[1].innerText === e.target.innerText) {
        return list.parentNode.classList.remove("hidden");
      } else if (e.target.innerText === "전체") {
        list.parentNode.classList.remove("hidden");
      } else {
        list.parentNode.classList.add("hidden");
      }
    });
  };

  const handleLike = (e) => {
    setLikeClick(!likeClick);
    if (!likeClick) {
      e.target.setAttribute("src", like);
    } else if (likeClick) {
      e.target.setAttribute("src", liked);
    }
  };

  const scrollPosition = useScrollStatus(props);

  return (
    <section className="card-section">
      {/* href를 통한 구역 이동시 검색바가 header에 가려지는 것을 막기 위한 div */}
      <div id="blank"></div>
      <div className="fliter-block">
        {/* 검색바 */}
        <div className="filter">
          <ul className="filter-list">
            {listItem.map((item, idx) => (
              <li
                key={idx}
                onClick={click}
                ref={(el) => (lists.current[idx] = el)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* 음식점 리스트 */}
      <div className="card-box">
        <div className="card-list">
          {cardItems.map((item, idx) => {
            return (
              <div className="card-container" key={idx}>
                <div
                  className="card-content"
                  ref={(el) => (cards.current[idx] = el)}
                >
                  <div className="card-img">
                    <img src={item.img} className="items-img" alt="img" />
                  </div>
                  <div className="card-info">
                    <div className="place-name">{item.place_name}</div>
                    <div className="category">{item.category}</div>
                    <div className="road-address-name">
                      {item.road_address_name}
                    </div>
                    <img
                      src={like}
                      alt="like"
                      className="like-img"
                      onClick={handleLike}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button
        className={scrollPosition < 534 ? "back-button hidden" : "back-button"}
        onClick={handleScrollToTop}
      >
        Top
      </button>
    </section>
  );
};

export default SearchScetion;
