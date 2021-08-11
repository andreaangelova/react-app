import { useEffect, useState } from "react";

const StarWars = () => {
  const [people, setPeople] = useState([]);
  const [ships, setShips] = useState([]);
  const [gender, setGender] = useState("");
  const [mglt, setMglt] = useState("");
  const getDataFormApi = async () => {
    let response = await fetch("https://swapi.dev/api/people");
    let body = await response.json();
    setPeople(body.results);

    response = await fetch("https://swapi.dev/api/starships");
    body = await response.json();
    setShips(body.results);
  };
  useEffect(() => {
    getDataFormApi();
  }, []);
  const filterPeople = () => {
    console.log("filter people");
    if (gender) return people.filter((person) => person.gender === gender);
    return people;
  };

  const filterShips = () => {
    console.log("filter ships");
    if (mglt) return ships.filter((ship) => ship.MGLT === mglt);
    return ships;
  };
  return (
    <div>
      <h1>Welcome to Star Wars</h1>
      <h2>These are the people</h2>
      <h3>Filter by gender</h3>
      <button onClick={() => setGender("male")}>Male</button>
      <button onClick={() => setGender("female")}>Female</button>
      <button onClick={() => setGender("n/a")}>N/A</button>
      <button onClick={() => setGender("")}>All</button>
      {filterPeople().map((person, index) => {
        return (
          <div key={index}>
            <p>Name: {person.name}</p>
            <p>Gender: {person.gender}</p>
            <p>Eye Color: {person.eye_color}</p>
          </div>
        );
      })}

      <h2>These are the starships</h2>
      <h3>Filter by mglt</h3>
      <button onClick={() => setMglt("60")}>60</button>
      <button onClick={() => setMglt("70")}>70</button>
      <button onClick={() => setMglt("")}>All</button>
      {filterShips().map((ship, index) => {
        return (
          <div key={index}>
            <p>Name: {ship.name}</p>
            <p>Mglt: {ship.MGLT}</p>
            <p>Model: {ship.model}</p>
          </div>
        );
      })}
    </div>
  );
};

export default StarWars;
