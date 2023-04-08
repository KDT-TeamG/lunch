import React, { Fragment } from "react";
import { ProductConsumer } from "../../contexts/ProductProvider";
import likeImg from "../../images/like.png";
import likedImg from "../../images/liked.png";
import "../MainPage/CardSection.scss";

const CardList = ({ cardItem, cardref }) => {
  const { id, img, placeName, address, category, like } = cardItem;
  return (
    <div className="card-container">
      <ProductConsumer>
        {(value) => (
          <Fragment>
            <div className="card-img">
              <img src={img} alt="store-img" />
            </div>
            <div className="card-info">
              <div className="place-name">{placeName}</div>
              <div ref={(el) => (cardref.current[id] = el)}>{category}</div>
              <div>{address}</div>
            </div>
            <button
              onClick={() => value.addMypage(id)}
              disabled={like ? true : false}
              className="like-btn"
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
