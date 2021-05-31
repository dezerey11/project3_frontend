import Form from 'react-bootstrap/Form'
import {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React from "react"
import { GlobalCtx } from "../App";

function WorkoutCard(props) {

    // const URL = "https://exercise-log-app-backend-dev.herokuapp.com/workouts/"

    // const [workout, setWorkout] = useState(null)
    // const [title, setTitle] = useState(null)

    // const getWorkout = async () => {
    //     const response = await fetch(URL, {
    //         method: "get",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Authorization: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaWF0IjoxNjIyNDI2MTE3fQ.waNXWq4lBfCz-C6iLXwPrzofkH4uVQbpjxR2JTwr2vE"
    //         }
    // })
    // const data = await response.json()
    // setWorkout(data[0].text)
    // setTitle(data[0].title)

    // }

    // useEffect(() => {getWorkout()}, [])

    
    const id = props.match.params.id
    const people = props
    
    


    return (

        
      <div className="workoutCard">

        <br />
        <br />

        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Workout Title</Form.Label>
                <Form.Control type="text" placeholder="" value="placeholder"/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Workout Details</Form.Label>
                <Form.Control as="textarea" rows={10} placeholder="" value="placeholder"/>
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


   // let textBoxValue = "test filler"

    // const getWorkouts = async (workout) => {
    //     const response = await fetch(URL, {
    //         method: "get",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Authorization: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaWF0IjoxNjIyNDI2MTE3fQ.waNXWq4lBfCz-C6iLXwPrzofkH4uVQbpjxR2JTwr2vE"
    //         },
    //         body: JSON.stringify(workout)
    //     })

    //     .then(response => response.json())
    //     .then(data => {
    //         //textBoxValue = data;
    //         console.log(data[0].text);
    //         return (data[0].text).string})

        

    //     //return textBoxValue