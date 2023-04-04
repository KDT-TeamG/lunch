import React, { useEffect, useState } from "react";
import { cardItemDatas } from "../data";

const ProductContext = React.createContext();

const ProductProvider = ({ children }) => {
  const [cardItems, setCardItems] = useState([]);
  const [myPage, setMyPage] = useState([]);

  useEffect(() => {
    handleSetCardItems();
  }, []);

  const handleSetCardItems = () => {
    let tempCardItems = [];
    cardItemDatas.forEach((item) => {
      const singleItem = { ...item };
      tempCardItems = [...tempCardItems, singleItem];
    });
    setCardItems(tempCardItems);
  };

  const getItem = (id) => {
    const cardItem = cardItems.find((item) => item.id === id);
    return cardItem;
  };

  const addMypage = (id) => {
    let tempCardItems = [...cardItems];
    const index = tempCardItems.indexOf(getItem(id));
    const cardItem = tempCardItems[index];
    cardItem.like = true;

    setCardItems(tempCardItems);
    setMyPage([...myPage, cardItem]);
  };

  return (
    <ProductContext.Provider
      value={{
        cardItems,
        myPage,
        addMypage,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
