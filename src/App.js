import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Nav from "./components/Nav/Nav"
import Home from "./pages/HomePage/HomePage"
import ProjectPage from "./pages/ProjectPage/ProjectPage"
import LogIn from "./pages/LogIn/LogIn"
import SignUp from "./pages/SignUp/SignUp"
import Header from "./components/Header/Header"
import RegisterShelter from "./pages/RegisterShelter/RegisterShelter"
import UserProfile from "./pages/UserProfile/UserProfile"
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"
// import FullPageLoader from "./components/FullPageLoader/FullPageLoader";
import "./App.css"
import CreateProject from "./pages/CreateProject/CreateProject"
import OwnerRoute from "./components/PrivateRouteOwner/OwnerRoute"
import ShelterProfile from "./components/ShelterProfile/ShelterProfile"

function App() {
  // Variables

  // Helpers
  const convertDateTime = (isoDate) => {
    const date = new Date(isoDate)
    const year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    if (day < 10) {
      day = "0" + day
    }
    if (month < 10) {
      month = "0" + month
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
        <div className="contents">
          <Switch>
            <Route path="/project/:id">
              <ProjectPage convertDateTime={convertDateTime} />
            </Route>
            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <PrivateRoute path="/register-shelter">
              <RegisterShelter />
            </PrivateRoute>
            <OwnerRoute path="/create-project">
              <CreateProject />
            </OwnerRoute>
            <Route path="/profile">
              <UserProfile convertDateTime={convertDateTime} />
            </Route>
            <Route path="/shelter-profile">
              <ShelterProfile convertDateTime={convertDateTime} />
            </Route>
            <Route path="/">
              <Home convertDateTime={convertDateTime} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
