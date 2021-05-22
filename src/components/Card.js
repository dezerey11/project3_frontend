import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="card">
      <h1>Monday</h1>
      <Link to="/view">
        <div>View Workout</div>
      </Link>
    </div>
  );
}

export default Card;
