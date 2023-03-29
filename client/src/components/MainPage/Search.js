import React, { useRef, useEffect } from "react";

import { Search, Grid } from "semantic-ui-react";
import "./Search.scss";

const SearchScetion = (props) => {
  const { cardItems } = props;

  const listItem = ["전체", "한식", "중식", "일식", "양식"];

  const lists = useRef([]);
  const cards = useRef([]);

  useEffect(() => {
    console.log("lists", lists);
    lists.current[0].classList.add("active");
  }, [lists, cards]);

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
          {cardItems.map((items, i) => {
            return (
              // <Card key={i}>
              //   <div className="CardList" ref={(el) => (cards.current[i] = el)}>
              //     <Image className="items_img" wrapped ui={false}>
              //       {items.img}
              //     </Image>
              //     <Card.Content>
              //       <Card.Header className="place_name">
              //         {items.place_name}
              //       </Card.Header>
              //       <Card.Meta
              //         className="category"
              //         // ref={(el) => (cardsCategory.current[i] = el)}
              //       >
              //         {items.category}
              //       </Card.Meta>
              //       <Card.Description className="road_address_name">
              //         {items.road_address_name}
              //       </Card.Description>
              //     </Card.Content>
              //   </div>
              // </Card>
              <div className="card" key={i}>
                <div className="CardList" ref={(el) => (cards.current[i] = el)}>
                  <div className="imgContent">
                    <img src={items.img} className="items_img" alt="img" />
                  </div>
                  <div className="cardContent">
                    <div className="place_name">{items.place_name}</div>
                    <div className="category">{items.category}</div>
                    <div className="road_address_name">
                      {items.road_address_name}
                    </div>
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
