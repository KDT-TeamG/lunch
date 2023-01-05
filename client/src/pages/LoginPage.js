import React, { useState, useRef } from "react";
import { Menu, Segment, Form, Button } from "semantic-ui-react";
import "../styles/Login.scss";

const LoginPage = () => {
  const loginForm = useRef();
  const signupForm = useRef();
  const [activeItem, setActiveItem] = useState("login");
  //   const handleItemClick = (e, { name }) => {
  //     setActiveItem(name);
  //   };

  const loginShow = (e, { name }) => {
    setActiveItem(name);
    signupForm.current.style.display = "none";
    loginForm.current.style.display = "block";
  };

  const signupShow = (e, { name }) => {
    setActiveItem(name);
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
              <input placeholder="ID"></input>
            </Form.Field>
            <Form.Field className="pw">
              <label>Password</label>
              <input type="password" placeholder="PASSWORD"></input>
            </Form.Field>
            <Button type="submit" className="login_submit">
              Login
            </Button>
          </Form>
        </Segment>
      </div>
      <div className="signup_form d-none" ref={signupForm}>
        <Segment>
          <Form>
            <Form.Field className="id">
              <label>Name</label>
              <input placeholder="Name"></input>
            </Form.Field>
            <Form.Field className="id">
              <label>ID</label>
              <input placeholder="ID"></input>
            </Form.Field>
            <Form.Field className="pw">
              <label>Password</label>
              <input type="password" placeholder="PASSWORD"></input>
            </Form.Field>
            <Button type="submit" className="login_submit">
              Sign up
            </Button>
          </Form>
        </Segment>
      </div>
    </section>
  );
};

export default LoginPage;
