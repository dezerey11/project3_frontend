import logo from './logo.svg';
import './App.css';
import WorkoutCard from './components/Card'
import Title from './components/Title'
import Card from 'react-bootstrap/Card';

function App() {

  return (
    <div className="App">
      
      <Title />
      <WorkoutCard />

    </div>
  );
}

export default App;
