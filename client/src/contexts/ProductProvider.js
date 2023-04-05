import React, { useEffect, useState, useContext } from "react";
import { cardItemDatas } from "../data";
import { AuthContext } from "./AuthContext";

const ProductContext = React.createContext();

const ProductProvider = ({ children }) => {
  const authConsumer = useContext(AuthContext);

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
    if (authConsumer.userLogin) {
      let tempCardItems = [...cardItems];
      const index = tempCardItems.indexOf(getItem(id));
      const cardItem = tempCardItems[index];
      cardItem.like = true;
      setCardItems(tempCardItems);
      setMyPage([...myPage, cardItem]);
    }
    setIsModal(true);
  };

  const removeItem = (id) => {
    let tempCardItems = cardItems;
    let tempMypage = myPage;
    tempMypage = tempMypage.filter((item) => item.id !== id);

    const index = tempCardItems.indexOf(getItem(id));
    let removeItems = tempCardItems[index];
    removeItems.like = false;
    setMyPage(tempMypage);
    setCardItems(tempCardItems);
  };

  return (
    <ProductContext.Provider
      value={{
        cardItems,
        myPage,
        isModal,

        addMypage,
        setIsModal,
        removeItem,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
