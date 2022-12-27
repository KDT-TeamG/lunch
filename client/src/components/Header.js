import { Link } from "react-router-dom";
import "../styles/Header.scss";

const Header = ({ showModal }) => {
  return (
    <header className="Header">
      <span>점심의 민족</span>
      <div className="menu-items">
        <Link to="/" className="menu-item">
          HOME
        </Link>
        <Link to="/game" className="menu-item">
          GAME
        </Link>
        <div className="menu-item" onClick={showModal}>
          로그인/회원가입
        </div>
      </div>
    </header>
  );
};

export default Header;
