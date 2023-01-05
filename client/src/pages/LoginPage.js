import React, { useState, useRef } from "react";
import { Menu, Segment, Form, Button } from "semantic-ui-react";
import "../styles/Login.scss";

const LoginPage = () => {
  const ref = useRef();
  const [activeItem, setActiveItem] = useState("login");
  //   const handleItemClick = (e, { name }) => {
  //     setActiveItem(name);
  //   };

  const loginShow = (e, { name }) => {
    setActiveItem(name);
  };

  const signupShow = (e, { name }) => {
    setActiveItem(name);
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

      <Segment className="login_form" onClick={loginShow} ref={ref}>
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
            Submit
          </Button>
        </Form>
      </Segment>
      <Segment className="signup_form d-none" onClick={signupShow} ref={ref}>
        <Form>
          <Form.Field className="id">
            <label>Name</label>
            <input placeholder="ID"></input>
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
            Submit
          </Button>
        </Form>
      </Segment>
    </section>
  );
};

export default LoginPage;
