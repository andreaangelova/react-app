export const TestFunction = () => {
  const name = "Andrea";
  const names = ["Andrea ", "Angelova"];
  const hasName = true;
  const nameObj = {
    name: "Andrea",
    surname: "Angelova",
  };
  const getName = () => {
    return hasName ? <p>{name}</p> : "World";
  };
  return <h1>Hello {getName()}</h1>;
};
