import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { GlobalCtx } from "../App";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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

  // <form onSubmit={handleSubmit}>
  //       <h1>Username</h1>
  //       <input
  //         type="text"
  //         name="username"
  //         value={form.username}
  //         onChange={handleChange}
  //         cfu
  //       />
  //       <h1>Password</h1>
  //       <input
  //         type="password"
  //         name="password"
  //         value={form.password}
  //         onChange={handleChange}
  //       />
  //       <br />
  //       <Button as="input" type="submit" value="LOGIN"></Button>
  //       <br />
  //       <Link to="signup">
  //         <Button variant="primary">SIGN UP</Button>
  //       </Link>
  //     </form> 

  return (
    <div>
    <Container>
      <Row>
      <Col>
      </Col>
      <Col>
      <Container>
        <Form onSubmit={handleSubmit}>
        <br/>
        <br/>
          <h3>Username</h3>
          <Form.Control
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            cfu
          />
          <h3>Password</h3>
          <Form.Control
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          <br />
          <Container>
            <Link to="signup">
              <Button variant="primary">SIGN UP</Button>{' '}
            </Link>
            <Button as="input" type="submit" value=" LOGIN "></Button>
          </Container>
        </Form>
      </Container>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
