import React from "react";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ToDos from "./Components/To-do/ToDos";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/toDo">
          <ToDos></ToDos>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
