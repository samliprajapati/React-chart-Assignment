import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Chart from "./Container/Chart";
import MainApp from "./MainApp";
import "antd/dist/antd.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={MainApp} />
        <Route exact path="/chart" component={Chart} />
      </Switch>
    </div>
  );
}

export default App;
