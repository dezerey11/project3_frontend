
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";

function WorkoutCard(props) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="workoutCard">
      <br />
      <br />
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Workout Title</Form.Label>
          <Form.Control
            type="text"
            placeholder={props.title}
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
            value={text}
            onChange={handleTextChange}
          />
        </Form.Group>
        <Container>
          <Row>
            <Col>
              <Button variant="danger" type="submit">
                Clear Workout
              </Button>
            </Col>
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
export default WorkoutCard;

