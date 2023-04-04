import React, { Fragment } from "react";
import { ProductConsumer } from "../../contexts/ProductProvider";
import likeImg from "../../images/like.png";
import likedImg from "../../images/liked.png";
import "../MainPage/CardSection.scss";

const CardList = ({ cardItem, cardref }) => {
  const { id, img, place_name, road_address_name, category, like } = cardItem;
  return (
    <div className="card-container">
      <ProductConsumer>
        {(value) => (
          <Fragment>
            <div className="card-img">
              <img src={img} alt="storeImg" />
            </div>
            <div className="card-info">
              <div>{place_name}</div>
              <div ref={(el) => (cardref.current[id] = el)}>{category}</div>
              <div>{road_address_name}</div>
            </div>
            <button
              onClick={() => value.addMypage(id)}
              disabled={like ? true : false}
            >
              <img
                src={like ? likedImg : likeImg}
                alt="like"
                className="like-img"
              />
            </button>
          </Fragment>
        )}
      </ProductConsumer>
    </div>
  );
};

export default CardList;
