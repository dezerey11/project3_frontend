import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import { GlobalCtx } from "../App";
import { useHistory } from "react-router-dom";

const URL = "https://exercise-log-app-backend-dev.herokuapp.com/workouts/";

function NewWorkout(props) {
  const history = useHistory();
  const { gState, setGState } = React.useContext(GlobalCtx);

  const createWorkout = async (workout) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + gState.token,
      },
      body: JSON.stringify(workout),
    });
    history.push("/");
  };

  const [newForm, setNewForm] = useState({
    title: "",
    text: "",
    date: "",
  });

  function handleTitleChange(e) {
    setNewForm((prevState) => ({
      ...prevState,
      title: e.target.value,
    }));
  }

  function handleTextChange(e) {
    setNewForm((prevState) => ({
      ...prevState,
      text: e.target.value,
    }));
  }

  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    createWorkout(newForm);
    setNewForm({
      title: "",
      text: "",
      date: "",
    });
  };

  return (
    <div className="workoutCard">
      <br />
      <br />
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Workout Title</Form.Label>
          <Form.Control
            type="text"
            placeholder={props.title}
            value={newForm.title}
            onChange={handleTitleChange}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Workout Details</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            placeholder={props.text}
            value={newForm.text}
            onChange={handleTextChange}
          />
        </Form.Group>
        <Container>
          <Row>
            <Col>
              <Button variant="primary" type="submit">
                Save Workout
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
}
export default NewWorkout;
