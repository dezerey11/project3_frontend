import {useState} from 'react'
import {Link} from 'react-router-dom'
import WorkoutCard from '../components/Card'
import Title from '../components/Title'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function MainPage(props) {

  //array to loop for Cards. Will pass days as props and URL
  const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    return(
    <>

    {/* check out the bootstrap documentation on how I did columns and rows. 
    https://react-bootstrap.github.io/layout/grid/
    */}

    <Container fluid>
      <Row>
          {/* this map loops though each day and creates a column for each. Passes the day as a prop.*/}
          {daysOfTheWeek.map((individualDay, i) => (
            <Col>
              <WorkoutCard day={individualDay}/>
            </Col>
          ))}
        </Row>
      </Container>

    </>

    )
}

export default MainPage