import { useEffect, useState } from "react";

const UseEffectClean = () => {
  const [ships, setShips] = useState([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShips(["ship 1", "ship 2", "ship 3"]);
    }, 1000);
    // return clearTimeout(timer);
  });
  return (
    <div>
      <h1>This is with useEffect clean up</h1>
      <div>
        {ships.map((ship, index) => (
          <p key={index}>{ship}</p>
        ))}
      </div>
    </div>
  );
};

export default UseEffectClean;
