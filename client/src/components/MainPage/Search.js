import React from "react";
import "../../styles/Search.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = (props) => {
  const { cardItems } = props;
  return (
    <section className="Search">
      {/* href를 통한 구역 이동시 검색바가 header에 가려지는 것을 막기 위한 div */}
      <div id="Search"></div>
      {/* 검색바 */}
      <div className="SearchBar">
        <input type="search" placeholder="메뉴를 입력해 주세요"></input>
        <button type="button">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
        </button>
      </div>
      {/* 음식점 리스트 */}
      <div className="Cards">
        {cardItems.map((items, i) => {
          return (
            <div className="CardList" key={i}>
              <div className="items_img">{items.img}</div>
              <div className="place_name">{items.place_name}</div>
              <hr />
              <div className="road_address_name">{items.road_address_name}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Search;
