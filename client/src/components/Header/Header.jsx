import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

import "./Header.scss";

const Header = () => {
  const authConsumer = useContext(AuthContext);
  // const [isLogin, setIsLogin] = useState(false);
  const { userLogin } = authConsumer;

  useEffect(() => {
    if (sessionStorage.getItem("userId") == null) {
      console.log("is Login :", !userLogin);
    } else {
      authConsumer.setIsLogin(userLogin);
    }
  }, [userLogin, authConsumer]);

  const logout = () => {
    sessionStorage.clear();
    document.location.href = "/";
  };

  return (
    <header className="header">
      <div className="info">
        <Link to="/" className="logo">
          맛ZIP
        </Link>
        <Link className="about-us">ABOUT US</Link>
      </div>
      <div className="menu-items">
        <Link to="/game" className="menu-item">
          GAME
        </Link>
        {!userLogin ? (
          <Link to="/login" className="menu-item login-btn">
            로그인
          </Link>
        ) : (
          <>
            <Link to="/mypage" className="menu-item">
              My Page
            </Link>
            <button className="menu-item logout-btn" onClick={logout}>
              로그아웃
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
