import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import About from "./pages/About";
import NoMatch from "./pages/NoMatch";

function App() {

  //github pages react router fix
  //const BASE_NAME = "/";
  const BASE_NAME = "https://rzelazny.github.io/git-react/";

  return (
    <Router basename={`${BASE_NAME}`}>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/about"]}>
            <About />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
