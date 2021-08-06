import { Link } from "react-router-dom";

const Books = () => {
  const books = [
    { id: "1", name: "maliot princ", pages: 100, avtor: "nepoznat" },
    { id: "2", name: "snezhana", pages: 150, avtor: "nepoznat" },
    { id: "3", name: "3te prasinja", pages: 300, avtor: "nepoznat" },
  ];
  return (
    <div>
      <h1>This is Books page</h1>
      {books.map((book) => (
        <p key={book.id}>
          <Link to={`/book/${book.id}`}>{book.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default Books;
