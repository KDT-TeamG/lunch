import { useState, useEffect } from "react";

const useScrollStatus = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  }, []);

  return scrollPosition;
};

export default useScrollStatus;
