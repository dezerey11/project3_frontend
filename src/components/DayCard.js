import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useEffect, useState} from 'react'

function DayCard(props) {

  const URL = "https://exercise-log-app-backend-dev.herokuapp.com/workouts/"

    const [workout, setWorkout] = useState(null)
    const [title, setTitle] = useState(null)

    const getWorkout = async () => {
        const response = await fetch(URL, {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                Authorization: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaWF0IjoxNjIyNDI2MTE3fQ.waNXWq4lBfCz-C6iLXwPrzofkH4uVQbpjxR2JTwr2vE"
            }
    })
    const data = await response.json()
    setWorkout(data)

    }

    useEffect(() => {getWorkout()}, [])

  return (
    
    //Reference material for styling:
    //https://react-bootstrap.github.io/components/cards/

    
    
    <>
      <Card>
        <Card.Header as="h5"><strong>{props.day}</strong></Card.Header>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <br></br>
          <Link to={`/workout/${props.id}`}>
            <Button variant="primary">View Workout</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
        
  );
}

export default DayCard;
