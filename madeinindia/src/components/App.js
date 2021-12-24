import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Form from "./pages/Form";
import People from "./pages/People";
import AddJob from "./pages/AddJob";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/form" exact component={Form} />
          <Route path="/people" exact component={People} />
          <Route path="/addjob" exact component={AddJob} />
          <Route path="/jobs" exact component={Jobs} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
//https://github.com/briancodex/react-navbar-v1/tree/master/src/components
