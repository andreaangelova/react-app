export const TestFunction = () => {
  const name = "Andrea";
  const names = ["Andrea ", "Angelova"];
  const numbers = [1, 2, 3, 4, 5];
  const namesObjects = [
    { name: "Andrea", id: "123" },
    { name: "Angelova", id: "456" },
  ];
  const hasName = true;
  const nameObj = {
    name: "Andrea",
    surname: "Angelova",
  };
  const getName = () => {
    return hasName ? <p>{name}</p> : "World";
  };

  const buttonClicked = (action) => {
    //alert("You clik");
    console.log(action);
  };

  const preventTyping = (event) => {
    console.log(event);
    event.preventDefault();
  };
  return (
    <div>
      <h1>Hello {getName()}</h1>
      <div>
        {names.map((name, index) => (
          <h1 key={index}>{name}</h1>
        ))}
      </div>
      <button onClick={() => buttonClicked("submit")}>Submit</button>
      <button onClick={() => buttonClicked("cancel")}>Cancel</button>
      <input value={5} onChange={() => {}} onKeyDown={preventTyping}></input>
      <input
        value={5}
        onChange={() => {}}
        onKeyDown={(event) => preventTyping(event)}
      ></input>
    </div>
  );
};
