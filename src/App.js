import logo from './logo.svg';
import './App.css';
import WorkoutCard from './components/Card'
import Title from './components/Title'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MainPage from './pages/MainPage';

function App() {

  return (
    <div className="App">
      
      <Title />
      <MainPage />

    </div>
  );
}

export default App;
