import React from "react";
import { Switch, Route } from "react-router-dom";
import Title from "./components/Title";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";
import IndividualWorkoutPage from "./pages/IndividualWorkoutPage";
import NewWorkout from "./pages/NewWorkout";


export const GlobalCtx = React.createContext(null);

function App() {
  const [gState, setGState] = React.useState({
    url: "https://exercise-log-app-backend-dev.herokuapp.com/",
    token: null,
    ready: false,
  });

  //Check if user is logged in
  React.useEffect(() => {
    const token = JSON.parse(window.localStorage.getItem("token"));
    if (token) {
      setGState({ ...gState, token: token.token, ready: true });
    } else {
      setGState({ ...gState, token: null, ready: true });
    }
  }, []);

  return (
    <div className="App">
      <Title />
      <GlobalCtx.Provider value={{ gState, setGState }}>
        <Switch>
          <Route exact path="/" render={(rp) => <MainPage {...rp} />} />
          <Route path="/login" render={(rp) => <Login {...rp} />} />
          <Route path="/signup" render={(rp) => <Signup {...rp} />} />
          <Route
            path="/workout/:id"
            render={(rp) => <IndividualWorkoutPage {...rp} />}
          />
          <Route path="/new" render={(rp) => <NewWorkout {...rp}  />} />

        </Switch>
      </GlobalCtx.Provider>
    </div>
  );
}

export default App;
