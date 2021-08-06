import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./pages/Nav";
import Book from "./pages/Book";
import Books from "./pages/Books";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route path="/home" component={Home}></Route>
        <Route path="/loader" render={() => <h1>Loading...</h1>}></Route>
        <Route exact path="/books">
          <Books />
        </Route>
        <Route path="/book">
          <Book />
        </Route>
        <Route path="/books/:id">
          <Book />
        </Route>
        {/* <Route exact path="/">
          <Home />
        </Route> */}
      </Router>
    </div>
  );
}

export default App;
