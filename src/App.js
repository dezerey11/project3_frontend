import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import DayCard from './components/DayCard'
import Title from './components/Title'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MainPage from './pages/MainPage';
import WorkoutCard from './components/WorkoutCard'
import IndividualWorkoutPage from './pages/IndividualWorkoutPage'

function App() {

  return (
    <div className="App">


    <Switch>

      {/* <Route path="/">
        <Title />
        <MainPage />
      </Route>  */}

      <Route path="/">
        <IndividualWorkoutPage />
      </Route> 

    </Switch>
      

    </div>
  );
}

export default App;
