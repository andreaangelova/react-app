import { useParams } from "react-router-dom";

const Book = () => {
  const { id } = useParams();
  console.log(id);
  return <h1>This is the Book that you have chosen: {id}</h1>;
};

export default Book;
