import "./App.css";
import { TestFunction } from "./components/TestFunction";
import TestClass from "./components/TestClass";
import TestSnipperFunction from "./components/TestSnippetFunction";
import TestSnipperClass from "./components/TestSnippetClass";
import IlijaFunc from "./components/IlijaFunction";

function App() {
  const isFunction = true;

  const name = "Ilija";
  const surname = "Abrashev";
  return (
    <div className="App">
      <header className="App-header">
        <IlijaFunc name={name + " " + surname} hasName />
        {!isFunction ? <TestFunction /> : <TestClass text="This is a text" />}

        <TestSnipperFunction name="leni" number="9" />
        <TestSnipperClass />
      </header>
    </div>
  );
}

export default App;
