const TestSnippetFunction = ({ name, number }) => {
  const [a, b, ...rest] = [10, 20, 4, 5, 6];
  const user = {
    name: "John",
    surname: "Doe",
    age: 30,
  };
  const { age } = user;
  return (
    <div>
      <h1>
        {a} {b} {rest}
      </h1>
      <h1>{age}</h1>
      <h1>Hi {name}</h1>
      <h1>This is your lucky number: {number}</h1>
    </div>
  );
};

export default TestSnippetFunction;
