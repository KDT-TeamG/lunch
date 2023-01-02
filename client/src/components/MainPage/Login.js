import React, { useEffect, useState } from "react";
// import Header from "../Header";
import "../../styles/Login.scss";

const Login = ({ setLoginOpen }) => {
  useEffect(() => {
    document.body.style.cssText = `
          position: fixed; 
          top: -${window.scrollY}px;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  // x 버튼으로 모달 닫기
  const loginClose = () => {
    setLoginOpen(false);
  };

  // 모달 외부 부분 눌렀을 때 모달 닫기
  // const modalRef = useRef();

  // useEffect(() => {
  //   const handler = (e) => {
  //     if (modalRef.current && !modalRef.current.contains(e.targer)) {
  //       setLoginOpen(false);
  //     }
  //   };

  //   window.addEventListener("mousedown", handler);

  //   return () => {
  //     window.removeEventListener("mousedown", handler);
  //   };
  // });

  // 버튼 클릭시 login, sign up 바뀌게 하기
  const [click, setClick] = useState(true);

  const signupBtnClick = () => {
    setClick(false);
  };

  const loginBtnClick = () => {
    setClick(true);
  };

  return (
    <section className="LoginContents">
      <div className="Login">
        <button className="close" onClick={loginClose}>
          X
        </button>
        <div className="user_options-container">
          <div className="user_options-text">
            <div className="user_options-unregistered">
              <h2 className="user_unregistered-title">
                Don't have an account?
              </h2>
              <button
                className="user_unregistered-signup "
                id="signup-button"
                onClick={signupBtnClick}
              >
                Sign up
              </button>
            </div>

            <div className="user_options-registered">
              <h2 className="user_registered-title">Have an account?</h2>
              <button
                className="user_registered-login"
                id="login-button"
                onClick={loginBtnClick}
              >
                Login
              </button>
            </div>
          </div>

          <div
            className={`user_options-forms ${
              click ? "bounceRight" : "bounceLeft"
            }`}
            id="user_options-forms"
          >
            <div className="user_forms-login">
              <h2 className="forms_title">Login</h2>
              <form className="forms_form">
                <fieldset className="forms_fieldset">
                  <div className="forms_field">
                    <input
                      type="email"
                      placeholder="Email"
                      className="forms_field-input"
                      required
                      autoFocus
                    />
                  </div>
                  <div className="forms_field">
                    <input
                      type="password"
                      placeholder="Password"
                      className="forms_field-input"
                      required
                    />
                  </div>
                </fieldset>
                <div className="forms_buttons">
                  {/* <button type="button" className="forms_buttons-forgot">
                    Forgot password?
                  </button> */}
                  <input
                    type="submit"
                    value="Log In"
                    className="forms_buttons-action"
                  />
                </div>
              </form>
            </div>
            <div className="user_forms-signup">
              <h2 className="forms_title">Sign Up</h2>
              <form className="forms_form">
                <fieldset className="forms_fieldset">
                  <div className="forms_field">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="forms_field-input"
                      required
                    />
                  </div>
                  <div className="forms_field">
                    <input
                      type="email"
                      placeholder="Email"
                      className="forms_field-input"
                      required
                    />
                  </div>
                  <div className="forms_field">
                    <input
                      type="password"
                      placeholder="Password"
                      className="forms_field-input"
                      required
                    />
                  </div>
                </fieldset>
                <div className="forms_buttons">
                  <input
                    type="submit"
                    value="Sign up"
                    className="forms_buttons-action"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
