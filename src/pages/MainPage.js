import React from "react";
import { useState } from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import Login from "./Login";
import WorkoutCard from "../components/Card";
import Title from "../components/Title";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const GlobalCtx = React.createContext(null);

function MainPage(props) {
  const [gState, setGState] = React.useState({
    url: "https://exercise-log-app-backend-dev.herokuapp.com/",
    token: null,
  });

  const logout = (
    <Link
      onClick={() => {
        window.localStorage.removeItem("token");
        setGState({ ...gState, token: null });
      }}
    >
      {" "}
      <h2>Logout</h2>{" "}
    </Link>
  );

  //Check if user is logged in
  React.useEffect(() => {
    const token = JSON.parse(window.localStorage.getItem("token"));
    if (token) {
      setGState({ ...gState, token: token.token });
    }
  }, []);

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

  return (
    <GlobalCtx.Provider value={{ gState, setGState }}>
      <>
        <Switch>
          <Route
            exact
            path="/"
            render={(rp) =>
              gState.token ? (
                <div>
                  <Container fluid>
                    <Row>
                      {/* this map loops though each day and creates a column for each. Passes the day as a prop.*/}
                      {daysOfTheWeek.map((individualDay, i) => (
                        <Col>
                          <WorkoutCard day={individualDay} />
                        </Col>
                      ))}
                    </Row>
                  </Container>
                  {gState.token ? logout : null}
                </div>
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route path="/login" render={(rp) => <Login {...rp} />} />
        </Switch>
      </>
    </GlobalCtx.Provider>
  );
}

export default MainPage;
