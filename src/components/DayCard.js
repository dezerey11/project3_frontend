
import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function DayCard(props) {
  return (
    //Reference material for styling:
    //https://react-bootstrap.github.io/components/cards/

    <Card className="day-card">
      <Card.Header as="h5">
        <strong>{props.title}</strong>
      </Card.Header>
      <Card.Body>
        <Link to={`/workout/${props.id}`}>
          <Button variant="outline-primary"><strong>View Workout</strong></Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default DayCard;
