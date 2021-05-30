import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { GlobalCtx } from "../App";

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
      <form onSubmit={handleSubmit}>
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
        <br />
        <Button as="input" type="submit" value="LOGIN"></Button>
        <br />
        <Link to="signup">
          <Button variant="primary">SIGN UP</Button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
