import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Segment, Form, Button } from "semantic-ui-react";
import "./LoginPage.scss";

const LoginPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });
  const loginForm = useRef();
  const signupForm = useRef();
  const [activeItem, setActiveItem] = useState("login");

  const signUpNameInput = useRef();
  const signUpIdInput = useRef();
  const signUpPwInput = useRef();
  const loginIdInput = useRef();
  const loginPwInput = useRef();
  const signupElement = document.querySelector(".signup-alert");
  const loginElement = document.querySelector(".login-alert");

  const userId = localStorage.getItem("userId");
  const userPw = localStorage.getItem("userPw");

  // localStorage 사용한 임시 회원가입
  const signupBtnHandle = () => {
    if (
      signUpNameInput.current.value === "" ||
      signUpIdInput.current.value === "" ||
      signUpPwInput.current.value === ""
    ) {
      return (signupElement.innerText = "입력칸을 모두 채워주세요");
    }
    localStorage.setItem("userName", signUpNameInput.current.value);
    localStorage.setItem("userId", signUpIdInput.current.value);
    localStorage.setItem("userPw", signUpPwInput.current.value);
    alert("회원가입 성공");
    signUpNameInput.current.value = "";
    signUpIdInput.current.value = "";
    signUpPwInput.current.value = "";
  };

  // localStorage 사용한 임시 로그인
  const loginBtnHandle = () => {
    if (
      loginIdInput.current.value === "" ||
      loginPwInput.current.value === ""
    ) {
      return (loginElement.innerText = "입력칸을 모두 채워주세요");
    }
    if (
      loginIdInput.current.value !== userId ||
      loginPwInput.current.value !== userPw
    ) {
      return (loginElement.innerText = "아이디 또는 비밀번호를 확인해 주세요");
    }
    alert("로그인 성공");
    sessionStorage.setItem("userId", loginIdInput.current.value);
    sessionStorage.setItem("userPw", loginPwInput.current.value);
    loginIdInput.current.value = "";
    loginPwInput.current.value = "";
    window.location.replace("/");
  };

  const loginShow = (e, { name }) => {
    setActiveItem(name);
    // signupElement.innerText = "";
    // signUpNameInput.current.value = "";
    // signUpIdInput.current.value = "";
    // signUpPwInput.current.value = "";
    signupForm.current.style.display = "none";
    loginForm.current.style.display = "block";
  };

  const signupShow = (e, { name }) => {
    setActiveItem(name);
    // loginElement.innerText = "";
    // loginIdInput.current.value = "";
    // loginPwInput.current.value = "";
    loginForm.current.style.display = "none";
    signupForm.current.style.display = "block";
  };

  return (
    <section className="LoginPage">
      <Menu pointing>
        <Menu.Item
          className="login_item"
          name="login"
          active={activeItem === "login"}
          onClick={loginShow}
        >
          <div>Login</div>
        </Menu.Item>
        <Menu.Item
          className="signup_item"
          name="Signup"
          active={activeItem === "Signup"}
          onClick={signupShow}
        >
          <div>Sign up</div>
        </Menu.Item>
      </Menu>

      <div className="login_form" ref={loginForm}>
        <Segment>
          <Form>
            <Form.Field className="id">
              <label>ID</label>
              <input placeholder="ID" ref={loginIdInput}></input>
            </Form.Field>
            <Form.Field className="pw">
              <label>Password</label>
              <input
                type="password"
                placeholder="PASSWORD"
                ref={loginPwInput}
              ></input>
              <div className="login-alert"></div>
            </Form.Field>
            <Button
              type="submit"
              className="login_submit"
              onClick={loginBtnHandle}
            >
              Login
            </Button>
          </Form>
        </Segment>
      </div>
      <div className="signup_form d-none" ref={signupForm}>
        <Segment>
          <Form>
            <Form.Field className="Name">
              <label>Name</label>
              <input placeholder="Name" ref={signUpNameInput}></input>
            </Form.Field>
            <Form.Field className="id">
              <label>ID</label>
              <input placeholder="ID" ref={signUpIdInput}></input>
            </Form.Field>
            <Form.Field className="pw">
              <label>Password</label>
              <input
                type="password"
                placeholder="PASSWORD"
                ref={signUpPwInput}
              ></input>
              <div className="signup-alert"></div>
            </Form.Field>
            <Button
              type="submit"
              className="login_submit"
              onClick={signupBtnHandle}
            >
              Sign up
            </Button>
          </Form>
        </Segment>
      </div>
      <div className="moveHome">
        <Link to="/">홈으로 가기</Link>
      </div>
    </section>
  );
};

export default LoginPage;
