import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Nav from "./pages/Nav";
import Warning from "./pages/Warning";
import { Suspense } from "react";
import Counts from "./pages/Count";
import User from "./pages/User";
import UserClass from "./pages/UserClass";
//import Home from "./pages/Home";
const Home = React.lazy(() => import("./pages/Home"));
//import Book from "./pages/Book";
const Book = React.lazy(() => import("./pages/Book"));
//import Books from "./pages/Books";
const Books = React.lazy(() => import("./pages/Books"));
//import Lifecycle from "./classExamples/Lifecycle/Lifecycle";

function App() {
  const [books, setBooks] = useState();
  const [name, setName] = useState("test");
  const [surname, setSurname] = useState("test");
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [redirectToWarnig, setRedirectToWarnig] = useState();
  const getDataFormApi = async () => {
    const response = await fetch("https://swapi.dev/api/people");
    if (response.status === 200) {
      const body = await response.json();
      setBooks(body.results);
      setName("John");
      setSurname("Doe");
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
        <UserClass name={name} surname={surname} />
        <Nav setIsLoggedIn={setIsLoggedIn} />
        <Counts></Counts>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route exact strict path="/home" component={Home}></Route>
            <Route exact path="/book/:id">
              {loggedIn ? (
                <Book />
              ) : (
                <h1>You need to login for this function</h1>
              )}
            </Route>
            <Route exact path="/book/" component={Book}></Route>
            <Route exact path={["/books", "/knigi"]}>
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
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
