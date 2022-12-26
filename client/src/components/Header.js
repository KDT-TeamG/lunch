import { Link } from "react-router-dom";
import "../styles/Header.scss";

const Header = () => {
  return (
    <header className="Header">
      <span>점심의 민족</span>
      <div>
        <Link to="/" className="menu-item">
          HOME
        </Link>
        <Link to="/game" className="menu-item">
          GAME
        </Link>
        <Link to="/login" className="menu-item">
          로그인/회원가입
        </Link>
      </div>
    </header>
  );
};

export default Header;
