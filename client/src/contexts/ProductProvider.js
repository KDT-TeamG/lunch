import React, { useEffect, useState } from "react";
import { cardItemDatas } from "../data";

const ProductContext = React.createContext();

const ProductProvider = ({ children }) => {
  const [cardItems, setCardItems] = useState([]);
  const [myPage, setMyPage] = useState([]);
  const [isModal, setIsModal] = useState(false);

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
    console.log(cardItem);
    setMyPage([...myPage, cardItem]);
    setIsModal(true);
  };

  return (
    <ProductContext.Provider
      value={{
        cardItems,
        myPage,
        isModal,

        addMypage,
        setIsModal,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
