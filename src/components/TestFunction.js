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
  return (
    <div>
      <h1>Hello {getName()}</h1>
      <div>
        {names.map((name, index) => (
          <h1 key={index}>{name}</h1>
        ))}
      </div>
    </div>
  );
};
