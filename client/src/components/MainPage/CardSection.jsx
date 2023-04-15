import { useRef, useEffect } from "react";
import { ProductConsumer } from "../../contexts/ProductProvider";
import CardList from "./CardList";
import styled from "styled-components";
import "../MainPage/CardSection.scss";
import useScrollStatus from "../../hooks/useScrollStatus";
import Card from "../Card";

const CardSection = ({ props }) => {
  const listItem = ["전체", "한식", "중식", "일식", "양식"];
  const lists = useRef([]);
  const cards = useRef([]);

  const scrollPosition = useScrollStatus(props);

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
      if (list.innerText === e.target.innerText) {
        return list.parentNode.parentNode.classList.remove("hidden");
      } else if (e.target.innerText === "전체") {
        list.parentNode.parentNode.classList.remove("hidden");
      } else {
        list.parentNode.parentNode.classList.add("hidden");
      }
    });
    console.log(cards);
  };

  return (
    <CardSec>
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
      <Card
        cardContainer={
          <ProductConsumer>
            {(value) => {
              return value.cardItems.map((cardItem) => {
                return (
                  <CardList
                    key={cardItem.id}
                    cardItem={cardItem}
                    cardref={cards}
                  />
                );
              });
            }}
          </ProductConsumer>
        }
      />
      <button
        className={scrollPosition < 534 ? "back-button hidden" : "back-button"}
        onClick={handleScrollToTop}
      >
        Top
      </button>
    </CardSec>
  );
};

export default CardSection;

const CardSec = styled.section`
  width: 90vw;
  margin: auto;
  margin-top: 100px;
`;
