import React from "react";
import "./App.css";
import WebcamCapture from "./components/WebcamCapture";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Preview from "./components/Preview";

export default function App() {
  return (
    <div className="app">
      <Router>
        <div className="app__body">
          <div className="app__bodyBackground">
            <Switch>
              <Route exact path="/">
                <WebcamCapture />
              </Route>
              <Route path="/preview">
                <Preview />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}
