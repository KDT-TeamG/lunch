import { useEffect, useRef } from "react";
// import Header from "../Header";
import "../../styles/Login.scss";

const Login = ({ setLoginOpen }) => {
  const loginClose = () => {
    setLoginOpen(false);
  };

  const modalRef = useRef(HTMLDivElement);

  useEffect(() => {
    const handler = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.targer)) {
        setLoginOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <section className="LoginContents" ref={modalRef}>
      <div className="Login">
        <button className="close" onClick={loginClose}>
          X
        </button>
        <h1>여기는 로그인!</h1>
      </div>
    </section>
  );
};

export default Login;
