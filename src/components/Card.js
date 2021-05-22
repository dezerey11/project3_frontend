import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function WorkoutCard(props) {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Header as="h5">Monday</Card.Header>
            <Card.Body>
              <Card.Title>Workout Title</Card.Title>
              <Button variant="primary">View Workout</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default WorkoutCard;
