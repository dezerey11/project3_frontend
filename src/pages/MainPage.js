
import React, { useEffect } from "react";
import { useState } from "react";
//import { Link, Route, Switch } from "react-router-dom";
import Login from "./Login";
import DayCard from "../components/DayCard";
import Title from "../components/Title";
import Card from "react-bootstrap/Card";
import { Link, Route, Switch, Redirect, useHistory } from "react-router-dom";
import WorkoutCard from "../components/WorkoutCard";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { GlobalCtx } from "../App";


const URL = "https://exercise-log-app-backend-dev.herokuapp.com/workouts/";

function MainPage(props) {
  const history = useHistory();
  const { gState, setGState } = React.useContext(GlobalCtx);

  const [workouts, setWorkouts] = useState([]);

  const getWorkouts = async () => {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + gState.token,
      },
    })
      .then((response) => response.json())
      .then((data) => setWorkouts(data));
  };


  // if the state of token changes and the token is not ready and there
  // is no token then redirect to login
  useEffect(() => {
    if (gState.ready && !gState.token) {
      history.push("/login");
    }
  }, [gState.ready, gState.token]);

  // if the state of token changes and there is a token then run getWorkouts
  useEffect(() => {
    if (gState.token) {
      getWorkouts();
    }
  }, [gState.token]);

  // if the state of token is not ready render nothing
  if (!gState.ready) {
    return null;
  }

  return (
    <div>
    <br/>
    <br/>
      <Container fluid>
        <Row>
          {/* this map loops though each workout and creates a column for each. */}
          {workouts.map((workout) => (
            <Col key={workout._id}>
              <DayCard title={workout.title} id={workout._id} />
            </Col>
          ))}
        </Row>
      </Container>
      <br/>
      <br/>
      <br/>
      <Link to="/login">
        <Button
          variant="danger"
          onClick={() => {
            window.localStorage.removeItem("token");
            setGState({ ...gState, token: null });
          }}
        >
          LOG OUT
        </Button>
      </Link>{' '}

      <Link to="/new">
        <Button >
          Add Workout
        </Button>
      </Link>
    </div>
  );
}
export default MainPage;
