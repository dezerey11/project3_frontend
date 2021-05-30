import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function DayCard(props) {

  return (
    
    //Reference material for styling:
    //https://react-bootstrap.github.io/components/cards/
    
    <>
      <Card>
        <Card.Header as="h5"><strong>{props.day}</strong></Card.Header>
        <Card.Body>
          <Card.Title>Workout Title</Card.Title>
          <br></br>
          <Link to={`/workout/`}>
            <Button variant="primary">View Workout</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
        
  );
}

export default DayCard;
