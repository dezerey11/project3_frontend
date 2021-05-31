import {useState} from 'react'
import React from "react";
import {Link, useHistory} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import WorkoutCard from '../components/WorkoutCard'
import { GlobalCtx } from "../App";

function IndividualWorkoutPage(props) {

    // const history = useHistory();
    // const { gState, setGState } = React.useContext(GlobalCtx);
    
    // if (!gState.ready) {
    //     return null;
    // }
    // if (!gState.token) {
    //     history.push("/login");
    //     return null;
    // }
    

    return(

        <>

        <Container fluid="sm">
            <Row>
                <Col>
                    <WorkoutCard />
                </Col>
            </Row>
        </Container>

        </>

    )
}

export default IndividualWorkoutPage