import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { GlobalCtx } from "../App";
import Form from 'react-bootstrap/Form'

const Login = (props) => {
  const { gState, setGState } = React.useContext(GlobalCtx);
  const { url } = gState;

  const blank = {
    username: "",
    password: "",
  };

  const [form, setForm] = React.useState(blank);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = form;

    fetch(`${url}auth/login`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.localStorage.setItem("token", JSON.stringify(data));
        setGState({ ...gState, token: data.token });
        setForm(blank);
        props.history.push("/");
      });
  };
  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <h1>Username</h1>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}cfu
        />
        <h1>Password</h1>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <input type="submit" value="Login" />
      </form> */}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
        <Form.Label size="lg">Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}cfu
        />
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <Button type="submit" variant="primary">Submit</Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Login;
