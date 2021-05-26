import logo from './logo.svg';
import './App.css';
import WorkoutCard from './components/Card'
import Title from './components/Title'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {

  return (
    <div className="App">
      
      <Title />

      <Container fluid>
        <Row>
          <Col>
            <WorkoutCard />
          </Col>

          <Col>
            <WorkoutCard />
          </Col>

          <Col>
            <WorkoutCard />
          </Col>
          <Col>
            <WorkoutCard />
          </Col>

          <Col>
            <WorkoutCard />
          </Col>

          <Col>
            <WorkoutCard />
          </Col>
          
          <Col>
            <WorkoutCard />
          </Col>
        </Row>
      </Container>
      

    </div>
  );
}

export default App;
