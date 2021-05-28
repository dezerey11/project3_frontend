import {useState} from 'react'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import WorkoutCard from '../components/WorkoutCard'

function IndividualWorkoutPage(props) {

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