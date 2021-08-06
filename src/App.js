import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./pages/Nav";
import Book from "./pages/Book";
import Books from "./pages/Books";
import { useState } from "react";
import { useEffect } from "react";
import Warning from "./pages/Warning";

function App() {
  const [books, setBooks] = useState();
  const [redirectToWarnig, setRedirectToWarnig] = useState();
  const getDataFormApi = async () => {
    const response = await fetch("https://swapi.dev/api/people");
    if (response.status === 200) {
      const body = await response.json();
      setBooks(body.results);
    } else {
      setRedirectToWarnig(true);
    }
  };
  useEffect(() => {
    getDataFormApi();
  }, []);
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route strict path="/home" component={Home}></Route>
          <Route path="/book/" component={Book}></Route>
          <Route exact path="/books">
            {books ? (
              <Books />
            ) : redirectToWarnig ? (
              <Redirect to="/warning" />
            ) : (
              <h1>Loading...</h1>
            )}
          </Route>
          <Route
            path="/books/:id/:id"
            render={() => <h1>You are reading page:</h1>}
          ></Route>
          <Route exact path="/books/:id" component={Book}></Route>
          {redirectToWarnig && (
            <Route path="/warning" component={Warning}></Route>
          )}
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
