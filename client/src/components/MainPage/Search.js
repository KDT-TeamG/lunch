import React, { useRef, useEffect, useState } from "react";
import liked from "../../images/liked.png";
import like from "../../images/like.png";
import { Search, Grid } from "semantic-ui-react";
import { cardItems } from "../../data";
import "./Search.scss";

const SearchScetion = () => {
  const [likeClick, setLikeClick] = useState(false);

  const listItem = ["전체", "한식", "중식", "일식", "양식"];

  const lists = useRef([]);
  const cards = useRef([]);

  useEffect(() => {
    lists.current[0].classList.add("active");
  }, [lists]);

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

  return (
    <section className="Search">
      {/* href를 통한 구역 이동시 검색바가 header에 가려지는 것을 막기 위한 div */}
      <div id="Search"></div>
      <div className="search_area">
        {/* 검색바 */}
        <div className="filter">
          <ul className="filter_list">
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
        <div className="searchBar">
          <Grid>
            <Grid.Column>
              <Search placeholder="Search..." />
            </Grid.Column>
          </Grid>
        </div>
      </div>
      {/* 음식점 리스트 */}
      <div className="Cards">
        <div className="cardBox">
          {cardItems.map((item, idx) => {
            return (
              <div className="card" key={idx}>
                <div
                  className="CardList"
                  ref={(el) => (cards.current[idx] = el)}
                >
                  <div className="imgContent">
                    <img src={item.img} className="items_img" alt="img" />
                  </div>
                  <div className="cardContent">
                    <div className="place_name">{item.place_name}</div>
                    <div className="category">{item.category}</div>
                    <div className="road_address_name">
                      {item.road_address_name}
                    </div>
                    <img
                      src={like}
                      alt="like"
                      className="likeImg"
                      onClick={handleLike}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SearchScetion;
