import "./App.css";
import DescriptionClass from "./classExamples/DescriptionClass";
import HomeClass from "./classExamples/HomeClass";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DescriptionClass description="This is from App.js" />
        <HomeClass />
      </header>
    </div>
  );
}

export default App;
