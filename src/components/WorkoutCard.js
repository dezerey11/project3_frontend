import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function WorkoutCard(props) {
    return (
      <div className="workoutCard">

        <br />
        <br />

        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Workout Title</Form.Label>
                <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Workout Details</Form.Label>
                <Form.Control as="textarea" rows={10} placeholder=""/>
            </Form.Group>

        <Container>
            <Row>
                <Col>
                    <Button variant="danger" type="submit">Clear Workout</Button>
                </Col>
                <Col>
                    <Button variant="primary" type="submit">Save Workout</Button>
                </Col>
            </Row>
        </Container>
            
            
        </Form>


        
      </div>
    );
  }

export default WorkoutCard;