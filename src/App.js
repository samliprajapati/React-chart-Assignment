import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import MainApp from "./MainApp";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={MainApp} />
      </Switch>
    </div>
  );
}

export default App;
