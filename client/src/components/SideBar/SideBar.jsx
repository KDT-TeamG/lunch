import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./SideBar.scss";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <button onClick={toggleSideBar} className="toggleSideBarBtn">
          <FontAwesomeIcon icon={faBars} size="2x" />
        </button>
        <nav className="navList">
          <div className="user">
            <img src="/images/user.png" alt="userImg" className="userImg" />
            {sessionStorage.getItem("userId") == null ? (
              <a href="/login">로그인 하러가기</a>
            ) : (
              <div>{localStorage.getItem("userName")}님</div>
            )}
          </div>
        </nav>
      </aside>
    </>
  );
};

export default SideBar;
