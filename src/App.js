import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./classExamples/Home/Home";
import Description from "./classExamples/Home/Description";

function App() {
  const descriptionInfo = {
    title: "page name",
    text: "this is the text from app",
  };
  const textArrey = ["List", " items", " from", " arrey"];
  return (
    <div className="App">
      <header className="App-header">
        <Description descriptionInfo={descriptionInfo} textArrey={textArrey} />
        <Home />
      </header>
    </div>
  );
}

export default App;
