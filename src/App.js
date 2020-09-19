import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/HomePage/HomePage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import Header from "./components/Header/Header"
import "./App.css";

function App() {
  // Variables 

  // Helpers
  const convertDateTime = (isoDate) => {
    const date = new Date(isoDate)
    const year = date.getFullYear()
    let month = date.getMonth()+1
    let day = date.getDate();

    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }
    const formattedDate = day + "-" + month + "-" + year
    return formattedDate
  }

  //Methods

  //Template
  return (
    <Router>
    <Route path="/">
      <Header />
    </Route>
      <div>
        <Nav />

        <Switch>
          <Route path="/project">
            <ProjectPage convertDateTime={convertDateTime} />
          </Route>
          <Route path="/">
            <Home convertDateTime={convertDateTime} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
