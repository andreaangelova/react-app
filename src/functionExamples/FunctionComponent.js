import { useState } from "react";

const FunctionCompnent = () => {
  const [email, setEmail] = useState("test.test@hotmail.com");
  const [address, setAddress] = useState("");
  const [books, setBooks] = useState([]);
  const changeAddress = (e) => {
    const value = e.target.value;
    setAddress(value);
  };
  const addBook = () => {
    setBooks(["book name"]);
  };
  return (
    <div>
      <h1>function component with email: {email}</h1>
      <button
        onClick={() => {
          setEmail("email.changed@hotmail.com");
        }}
      >
        Change email
      </button>
      <h1>This is you address: {address}</h1>
      <input onChange={changeAddress}></input>
      <h1>These are the books</h1>
      {books.map((book, index) => {
        return <h1 key={index}>{book}</h1>;
      })}
      <button onClick={addBook}>Add book</button>
    </div>
  );
};

export default FunctionCompnent;
