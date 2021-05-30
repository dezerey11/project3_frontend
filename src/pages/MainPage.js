import React from "react";
import { useState } from "react";
import { Link, Route, Switch, Redirect, useHistory } from "react-router-dom";
import WorkoutCard from "../components/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { GlobalCtx } from "../App";

//array to loop for Cards. Will pass days as props and URL
const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function MainPage(props) {
  const history = useHistory();
  const { gState, setGState } = React.useContext(GlobalCtx);
  
  if (!gState.ready) {
    return null;
  }
  if (!gState.token) {
    history.push("/login");
    return null;
  }

  return (
    <div>
      <Container fluid>
        <Row>
          {/* this map loops though each day and creates a column for each. Passes the day as a prop.*/}
          {daysOfTheWeek.map((individualDay) => (
            <Col key={individualDay}>
              <WorkoutCard day={individualDay} />
            </Col>
          ))}
        </Row>
      </Container>
      <Link to="/login">
        <Button
          variant="primary"
          onClick={() => {
            window.localStorage.removeItem("token");
            setGState({ ...gState, token: null });
          }}
        >
          LOG OUT
        </Button>
      </Link>
    </div>
  );
}

export default MainPage;
