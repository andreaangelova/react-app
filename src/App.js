import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UseEffectClean from "./functionExamples/UseEffectClean";
import { useEffect, useState } from "react";
import ApiCall from "./functionExamples/ApiCall";
import Text1 from "./functionExamples/Text1";

function App() {
  const [showComponent, setShowComponent] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowComponent(false);
    }, 5000);
  }, []);
  return (
    <div className="App">
      <header className="App-header">{showComponent && <Text1 />}</header>
    </div>
  );
}

export default App;
