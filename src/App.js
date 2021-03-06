import React, { useState, useEffect, useReducer } from "react";
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
import ArrayItems from "./pages/ArrayItems";
import CarFunction from "./pages/CarFunction";
import StarWars from "./pages/StarWars";
import Rgister from "./pages/Register";
import UserContext from "./context/UserContext";
//import Car from "./pages/Car";
//import Home from "./pages/Home";
const Home = React.lazy(() => import("./pages/Home"));
//import Book from "./pages/Book";
const Book = React.lazy(() => import("./pages/Book"));
//import Books from "./pages/Books";
const Books = React.lazy(() => import("./pages/Books"));
//import Lifecycle from "./classExamples/Lifecycle/Lifecycle";
const Car = React.lazy(() => import("./pages/Car"));

function App() {
  // const user1 = { name: "John", surname: "Doe" };
  // const user2 = { name: "John", surname: "Doe" };
  // console.log("compare objects");
  // console.log(user1 == user2);
  // let user3 = user1;
  // user3.name = "John Updated";
  // console.log("compare objects references");
  // console.log(user1 == user3);
  const [books, setBooks] = useState();
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const [name, setName] = useState("test");
  const [surname, setSurname] = useState("test");
  const reducer = (state, action) => {
    if (action.type === "increment") return state + action.payload;
    if (action.type === "decrement") return state - action.payload;
    return state;
  };
  const [age, setAge] = useReducer(reducer, 0);
  const reducer2 = (state, action) => {
    // { name: "John", surname: "Doe" }
    // {name: "Andrea"}
    return { ...state, ...action };
  };
  const [user, setUser] = useReducer(reducer2, {
    name: "Marija",
    surname: "Milevska",
  });
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [redirectToWarnig, setRedirectToWarnig] = useState();
  const getDataFormApi = async () => {
    const response = await fetch("https://swapi.dev/api/people");
    if (response.status === 200) {
      const body = await response.json();
      setBooks(body.results);
      setName("John");
      setSurname("Doe");
      //setUser({ name: "John", surname: "Doe" });

      let arrayItems = [...array, 6];
      setArray(arrayItems);

      setTimeout(() => {
        setName("John");
        setSurname("Doe");
        //setUser({ name: "John", surname: "Doe" });
      }, [1000]);
    } else {
      setRedirectToWarnig(true);
    }
  };
  useEffect(() => {
    getDataFormApi();
    setTimeout(() => {
      let newCar = car;
      newCar.model = "Yaris";
      setCar(newCar);
    }, [100]);
  }, []);
  const [car, setCar] = useState({
    model: "Corola",
    color: "blue",
    maker: "Toyota",
    array: [],
  });
  return (
    <div className="App">
      <Router>
        {/* <UserClass user={user} />
        <ArrayItems array={array} /> 
        <Nav setIsLoggedIn={setIsLoggedIn} />*/}
        {/* <Suspense fallback={<h1>Loading...</h1>}>
          <CarFunction car={car} />
        </Suspense>
        <Counts></Counts> */}
        <h1>This is your age: {age}</h1>
        <button onClick={() => setAge({ type: "increment", payload: 2 })}>
          Add year
        </button>
        <button onClick={() => setAge({ type: "decrement", payload: 3 })}>
          Remove year
        </button>
        <Suspense fallback={<h1>Loading...</h1>}>
          <UserContext.Provider value={{ user, setUser }}>
            <h1>
              This is from APP {user.name} {user.surname}
            </h1>
            <Switch>
              <Route exact strict path="/register" component={Rgister}></Route>
              <Route exact strict path="/star" component={StarWars}></Route>
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
          </UserContext.Provider>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
