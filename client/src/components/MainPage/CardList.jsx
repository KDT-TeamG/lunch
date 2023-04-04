import React, { Fragment } from "react";
import { ProductConsumer } from "../../contexts/ProductProvider";
import styled from "styled-components";
import likeImg from "../../images/like.png";
import likedImg from "../../images/liked.png";

const CardList = ({ cardItem }) => {
  //   console.log(cardItem);
  const { id, img, place_name, road_address_name, category, like } = cardItem;
  return (
    <CardBlock>
      <ProductConsumer>
        {(value) => (
          <Fragment>
            <img
              src={img}
              alt="storeImg"
              style={{
                width: "200px",
                height: "150px",
              }}
            />
            <div>{place_name}</div>
            <div>{category}</div>
            <div>{road_address_name}</div>
            <img
              src={like ? likedImg : likeImg}
              alt="like"
              style={{
                width: "20px",
                cursor: "pointer",
              }}
              onClick={() => value.addMypage(id)}
            />
          </Fragment>
        )}
      </ProductConsumer>
    </CardBlock>
  );
};

export default CardList;

const CardBlock = styled.div`
  display: inline-block;
  //   width: 270px;
  height: 300px;
  background-color: #fff;
  border: 0.2rem solid black;
  padding: 1rem;
  margin: 10px 5px;
`;
