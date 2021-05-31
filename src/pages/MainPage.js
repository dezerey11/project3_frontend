import React from "react";
import { useState, useEffect } from "react";
//import { Link, Route, Switch } from "react-router-dom";
import Login from "./Login";
import DayCard from "../components/DayCard";
import Title from "../components/Title";
import Card from "react-bootstrap/Card";
import { Link, Route, Switch, Redirect, useHistory } from "react-router-dom";
//import {useEffect, useState} from 'react'
import WorkoutCard from "../components/WorkoutCard";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { GlobalCtx } from "../App";

//array to loop for Cards. Will pass days as props and URL
const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function MainPage(props) {
  const [workout, setWorkouts] = useState(null)

  const URL = "https://exercise-log-app-backend-dev.herokuapp.com/workouts/"

  const getWorkout = async () => {
        const response = await fetch(URL, {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                Authorization: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaWF0IjoxNjIyNDI2MTE3fQ.waNXWq4lBfCz-C6iLXwPrzofkH4uVQbpjxR2JTwr2vE"
            }
    })
    const data = await response.json()
    const data2 = await setWorkouts(data)
    //setTitle(data[0].title)
    }

    useEffect(() => getWorkout(), [])
  
  const history = useHistory();
  const { gState, setGState } = React.useContext(GlobalCtx);
  
  if (!gState.ready) {
    return null;
  }
  if (!gState.token) {
    history.push("/login");
    return null;
  }

  const loading = () => {
    return <h1>Loading...</h1>
  }

  const loaded = () => {
    return( <Container fluid>
        <Row>
            <Col >
              <DayCard title={workout[0].title ? workout[0].title : "Rest Day"} 
              day={daysOfTheWeek[0]}
              id={workout[0]._id}/>
            </Col>
            <Col >
              <DayCard title={workout[1].title ? workout[1].title : "Rest Day"} day={daysOfTheWeek[1]} id={workout[1]._id}/>
            </Col>
             <Col >
              <DayCard title={workout[2].title ? workout[2].title : "Rest Day"} day={daysOfTheWeek[2]} id={workout[2]._id}/>
            </Col>
            <Col >
              <DayCard title={workout[3].title ? workout[3].title : "Rest Day"} day={daysOfTheWeek[3]}/>
            </Col>
            <Col >
              <DayCard title={workout[4].title ? workout[4].title : "Rest Day"} day={daysOfTheWeek[4]}/>
            </Col>
            <Col >
              <DayCard title={workout[4].title ? workout[4].title : "Rest Day"} day={daysOfTheWeek[0]}/>
            </Col>
            <Col >
              <DayCard title={workout[4].title ? workout[4].title : "Rest Day"} day={daysOfTheWeek[0]}/> 
            </Col>
        </Row>
      </Container> )
  }


  

  return (
    <div>
      {workout ? loaded() : loading() }
      {/*<Container fluid>
        <Row>
            <Col >
              <DayCard title={workout[0].title} day={daysOfTheWeek[0]}/>
            </Col>
            <Col >
              <DayCard day={daysOfTheWeek[1]}/>
            </Col>
             <Col >
              <DayCard title={workout[2].title} day={daysOfTheWeek[2]}/>
            </Col>
            <Col >
              <DayCard title={workout[3].title} day={daysOfTheWeek[3]}/>
            </Col>
            <Col >
              <DayCard title={workout[4].title} day={daysOfTheWeek[4]}/>
            </Col>
            <Col >
              <DayCard title={workout[0].title} day={daysOfTheWeek[5]}/>
            </Col>
            <Col >
              <DayCard title={workout[0].title} day={daysOfTheWeek[6]}/> 
            </Col> */}

            
          
        
      <Link to="/login">
        <Button
          variant="primary"
          onClick={() => {
            window.localStorage.removeItem("token");
            setGState({ ...gState, token: null });
          }}
        >
          LOG OUT
        </Button>
      </Link>
    </div>
  );
}

export default MainPage;
