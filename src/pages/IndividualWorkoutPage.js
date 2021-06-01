import React, { useEffect, useState } from "react";
import { GlobalCtx } from "../App";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WorkoutCard from "../components/WorkoutCard";
import { useHistory } from "react-router-dom";

const URL = "https://exercise-log-app-backend-dev.herokuapp.com/workouts/";

function IndividualWorkoutPage(props) {
  const history = useHistory();
  const { gState, setGState } = React.useContext(GlobalCtx);

  const [workout, setWorkout] = useState(null);

  const getWorkout = async () => {
    const response = await fetch(URL + props.match.params.id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + gState.token,
      },
    })
      .then((response) => response.json())
      .then((data) => setWorkout(data));
  };

  // if the state of token changes and the token is not ready and there
  // is no token then redirect to login
  useEffect(() => {
    if (gState.ready && !gState.token) {
      history.push("/login");
    }
  }, [gState.ready, gState.token]);

  // if the state of token changes or the id changes and there is a token then run getWorkout
  useEffect(() => {
    if (gState.token) {
      getWorkout();
    }
  }, [gState.token, props.match.params.id]);

  // if the state of token is not ready or there is no workout, render nothing
  if (!gState.ready || !workout) {
    return null;
  }

  const updateWorkout = async (workout, id) => {
    // make the put request to update a person
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + gState.token,
      },
      body: JSON.stringify(workout),
    });
    props.history.push("/");
  };

  const deleteWorkout = async (id) => {
    await fetch(URL + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + gState.token,
      },
    });
    props.history.push("/");
  };

  return (
    <>
      <Container fluid="sm">
        <Row>
          <Col>
            <WorkoutCard
              {...workout}
              updateWorkout={updateWorkout}
              deleteWorkout={deleteWorkout}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default IndividualWorkoutPage;
