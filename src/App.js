import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FunctionCompnent from "./functionExamples/FunctionComponent";
import ClassWrapp from "./functionExamples/ClassWrapp";
import Text1 from "./functionExamples/Text1";
import Text2 from "./functionExamples/Text2";
import { useEffect, useState } from "react";

function App() {
  const [showFirst, setShowFirst] = useState(true);
  useEffect(() => {
    setTimeout(() => setShowFirst(false), 5000);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {showFirst ? <Text1 /> : <Text2 />}
      </header>
    </div>
  );
}

export default App;
