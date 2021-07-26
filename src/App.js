import "./App.css";
import { TestFunction } from "./components/TestFunction";
import TestClass from "./components/TestClass";
import TestSnipperFunction from "./components/TestSnippetFunction";
import TestSnipperClass from "./components/TestSnippetClass";
import IlijaFunc from "./components/IlijaFunction";

function App() {
  const isFunction = true;
  return (
    <div className="App">
      <header className="App-header">
        {isFunction ? <TestFunction /> : <TestClass />}

        <TestSnipperFunction />
        <TestSnipperClass />
        <IlijaFunc></IlijaFunc>
      </header>
    </div>
  );
}

export default App;
