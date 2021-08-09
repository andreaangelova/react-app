import { Link, useHistory, useLocation } from "react-router-dom";

const Books = () => {
  const { search } = useLocation();
  const history = useHistory();
  console.log(search);
  const books = [
    {
      id: "1",
      name: "maliot princ",
      pages: 100,
      avtor: "nepoznat",
      type: "action",
    },
    {
      id: "2",
      name: "snezhana",
      pages: 150,
      avtor: "nepoznat",
      type: "romance",
    },
    {
      id: "3",
      name: "3te prasinja",
      pages: 300,
      avtor: "nepoznat",
      type: "action",
    },
  ];
  const getFilteredBooks = () => {
    if (search) return books.filter((book) => search.includes(book.type));
    return books;
  };
  return (
    <div>
      <h1>This is Books page</h1>
      {getFilteredBooks().map((book) => (
        <p key={book.id}>
          <Link to={`/book/${book.id}`}>{book.name}</Link>
        </p>
      ))}
      <button onClick={() => history.go(1)}>Got forword</button>
      <button onClick={() => history.goBack()}>Got back</button>
      <button onClick={() => history.go(-2)}>Got 2 back</button>
      <button onClick={() => history.push("/book")}>
        Got to specific route
      </button>
    </div>
  );
};

export default Books;
