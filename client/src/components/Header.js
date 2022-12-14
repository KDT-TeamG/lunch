import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <span>점심의 민족</span>
      <div>
        <Link to="/" className="menu-item">
          HOME
        </Link>
        <Link to="/game" className="menu-item">
          GAME
        </Link>
        <Link to="/login" className="menu-item">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
