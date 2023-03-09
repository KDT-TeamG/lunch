import React from "react";

import { Card, Image, Search, Grid } from "semantic-ui-react";
import "../../styles/Search.scss";

const SearchScetion = (props) => {
  const { cardItems } = props;

  return (
    <section className="Search">
      {/* href를 통한 구역 이동시 검색바가 header에 가려지는 것을 막기 위한 div */}
      <div id="Search"></div>
      <div className="search_area">
        {/* 검색바 */}
        <div className="filter">
          <ul className="filter_list">
            <li>전체</li>
            <li>한식</li>
            <li>중식</li>
            <li>일식</li>
            <li>양식</li>
            <li>기타</li>
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
        {cardItems.map((items, i) => {
          return (
            <Card key={i}>
              <div className="CardList">
                <Image className="items_img" wrapped ui={false}>
                  {items.img}
                </Image>
                <Card.Content>
                  <Card.Header className="place_name">
                    {items.place_name}
                  </Card.Header>
                  <Card.Meta>
                    <span className="category">{items.category}</span>
                  </Card.Meta>
                  <Card.Description className="road_address_name">
                    {items.road_address_name}
                  </Card.Description>
                </Card.Content>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default SearchScetion;
