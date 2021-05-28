import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form'

function WorkoutCard(props) {
    return (
      <div className="workoutCard">

        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Workout Title</Form.Label>
                <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Workout Details</Form.Label>
                <Form.Control as="textarea" rows={10} placeholder=""/>
            </Form.Group>
        </Form>
        
      </div>
    );
  }

export default WorkoutCard;