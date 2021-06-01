
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";

function WorkoutCard(props) {

  const [title, setTitle] = useState(props.title);
  const [text, setText] = useState(props.text);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  // handle for when form is submitted
  const handleSubmit = (event) => {
    // to prevent refresh
    event.preventDefault();
    // update the workout
    props.updateWorkout(
      {
        title,
        text,
      },
      props._id
    );
  };

  // handle for when you click on clear workout
  const handleDelete = (event) => {
    // to prevent refresh
    event.preventDefault();
    // delete the workout
    props.deleteWorkout(props._id);
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

            name="title"
            value={title}
            onChange={handleTitleChange}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Workout Details</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            placeholder={props.text}

            name="text"

            value={text}
            onChange={handleTextChange}
          />
        </Form.Group>
        <Container>
          <Row>
            <Col>

              <Button variant="danger" onClick={handleDelete}>

                Clear Workout
              </Button>
            </Col>
            <Col>
              <Button variant="primary" type="submit">

                Update Workout

              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
}
export default WorkoutCard;

