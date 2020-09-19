import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/HomePage/HomePage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import Header from "./components/Header/Header"
import "./App.css";

function App() {
  return (
    <Router>
    <Route path="/">
      <Header />
    </Route>
      <div>
        <Nav />

        <Switch>
          <Route path="/project">
            <ProjectPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
