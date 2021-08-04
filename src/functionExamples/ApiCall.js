import { useEffect, useState } from "react";

const ApiCall = () => {
  const [user, setUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(true);
  const [skywalker, setSkywalker] = useState({});
  const [people, setPeople] = useState([]);

  const mapResponse = (response) => {
    return {
      name: response.name,
      birth: response.birth_year,
      sex: response.gender,
    };
  };

  const getDataFormApi = async () => {
    //  for (let index = 1; index < 5; index++) {
    const response = await fetch("https://swapi.dev/api/people");
    const body = await response.json();
    const peopleFromApi = body.results;
    const peopleMapped = peopleFromApi.map((person) => mapResponse(person));
    setPeople(peopleMapped);
    //  }
    // const response = await fetch("https://swapi.dev/api/people/1");
    // const body = await response.json();
    // const newDataObj = mapResponse(body);
    // setSkywalker(newDataObj);

    // const response2 = await fetch("https://swapi.dev/api/people/2");
    // const body2 = await response2.json();
    // console.log(body2);
  };

  const getDataFormApiOldWay = () => {
    fetch("https://swapi.dev/api/people/1")
      .then((response) => response.json())
      .then((response) => {
        const newData = mapResponse(response);
        setSkywalker(newData);
        fetch("https://swapi.dev/api/people/2")
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
          });
      });
  };

  useEffect(() => {
    console.log("use effect on log in");
    if (isLoggedIn) {
      getDataFormApi();
    }
  }, [isLoggedIn]);

  useEffect(() => {
    // if (isLoggedOut) alert("You are logged out");
  }, [isLoggedOut]);

  const login = () => {
    setIsLoggedIn(true);
    setIsLoggedOut(false);
  };
  const logout = () => {
    setIsLoggedIn(false);
    setIsLoggedOut(true);
  };
  return (
    <div>
      <h2>Make api call</h2>
      <label>Enter user name</label>
      <br />
      <input onChange={(e) => setUser(e.target.value)}></input>
      <br />
      <button onClick={login}>Log in</button>
      <button onClick={logout}>Log out</button>
      {isLoggedIn && (
        // <div>
        //   <h1>Skywalker info</h1>
        //   <p>His name is {skywalker.name}</p>
        //   <p>Born on {skywalker.birth}</p>
        //   <p>He is {skywalker.sex}</p>
        // </div>
        <div>
          {people.map((person, index) => {
            return (
              <div key={index}>
                <h1>Person info</h1>
                <p>His name is {person.name}</p>
                <p>Born on {person.birth}</p>
                <p>He is {person.sex}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ApiCall;
